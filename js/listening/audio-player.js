/**
 * Listening Master - Audio Player Engine
 * Web Speech API asosidagi tabiiy ovoz sintezi,
 * tezlikni boshqarish (0.75x - 1.25x), jumlama-jumla sinxronizatsiya
 * va Shadowing rejimi.
 */

class AudioPlayerEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.currentLesson = null;
    this.currentSentenceIndex = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.playbackRate = 1.0;
    this.volume = 1.0;
    this.shadowingMode = false; // Har bir jumlada to'xtash
    this.onSentenceChange = null;
    this.onStateChange = null;
    this.onProgressUpdate = null;
    this.progressInterval = null;
    this.elapsedSeconds = 0;
    this.estimatedTotalSeconds = 60;

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const loadVoices = () => {
      this.voices = this.synth.getVoices();
    };

    loadVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = loadVoices;
    }
  }

  getBestVoice(accent, gender) {
    if (!this.voices || this.voices.length === 0) {
      this.voices = this.synth ? this.synth.getVoices() : [];
    }

    const langTarget = accent && accent.includes("US") ? "en-US" : "en-GB";

    // 1. Birinchi navbatda aniq til va tabiiy nomlar bo'yicha qidirish
    const matched = this.voices.filter(v => v.lang && (v.lang === langTarget || v.lang.startsWith(langTarget.slice(0, 2))));

    // Google, Microsoft yoki Natural ovozlarni afzal ko'rish
    const premiumVoice = matched.find(v => 
      v.name.includes("Natural") || 
      v.name.includes("Online") || 
      v.name.includes("Google") || 
      v.name.includes("Neural") ||
      (gender === "female" && (v.name.includes("Female") || v.name.includes("Zira") || v.name.includes("Susan") || v.name.includes("Samantha"))) ||
      (gender === "male" && (v.name.includes("Male") || v.name.includes("David") || v.name.includes("George")))
    );

    if (premiumVoice) return premiumVoice;
    if (matched.length > 0) return matched[0];

    // Umumiy inglizcha ovoz
    const anyEnglish = this.voices.find(v => v.lang && v.lang.startsWith("en"));
    return anyEnglish || (this.voices.length > 0 ? this.voices[0] : null);
  }

  loadLesson(lesson) {
    this.stop();
    this.currentLesson = lesson;
    this.currentSentenceIndex = 0;
    this.playbackRate = lesson.audioSpeedDefault || 1.0;
    this.elapsedSeconds = 0;

    // Taxminiy davomiylikni hisoblash (so'zlar soniga qarab)
    const totalWords = lesson.sentences.reduce((acc, s) => acc + s.text.split(" ").length, 0);
    // O'rtacha 130 so'z/minut tezlikda
    this.estimatedTotalSeconds = Math.max(30, Math.round((totalWords / 130) * 60));

    this.notifyState();
    this.notifyProgress();
  }

  setRate(rate) {
    this.playbackRate = parseFloat(rate);
    if (this.isPlaying && !this.isPaused) {
      // Joriy jumlani yangi tezlikda qayta boshlash
      this.playSentence(this.currentSentenceIndex);
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      if (this.isPaused) {
        this.resume();
      } else {
        this.pause();
      }
    } else {
      this.play();
    }
  }

  play() {
    if (!this.synth || !this.currentLesson) return;

    if (this.isPaused) {
      this.resume();
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    this.startProgressTimer();
    this.playSentence(this.currentSentenceIndex);
    this.notifyState();
  }

  pause() {
    if (!this.synth) return;
    this.isPaused = true;
    this.synth.pause();
    this.stopProgressTimer();
    this.notifyState();
  }

  resume() {
    if (!this.synth) return;
    this.isPaused = false;
    this.synth.resume();
    this.startProgressTimer();
    this.notifyState();
  }

  stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.isPlaying = false;
    this.isPaused = false;
    this.currentSentenceIndex = 0;
    this.elapsedSeconds = 0;
    this.stopProgressTimer();
    this.notifyState();
    this.notifyProgress();
    if (this.onSentenceChange) {
      this.onSentenceChange(-1, null);
    }
  }

  restart() {
    this.stop();
    setTimeout(() => {
      this.play();
    }, 200);
  }

  playSentence(index) {
    if (!this.synth || !this.currentLesson) return;
    if (index >= this.currentLesson.sentences.length) {
      // Audio yakunlandi
      this.isPlaying = false;
      this.isPaused = false;
      this.stopProgressTimer();
      this.elapsedSeconds = this.estimatedTotalSeconds;
      this.notifyState();
      this.notifyProgress();
      if (this.onSentenceChange) this.onSentenceChange(-1, null);
      return;
    }

    this.synth.cancel();
    this.currentSentenceIndex = index;
    const sentenceObj = this.currentLesson.sentences[index];

    const utterance = new SpeechSynthesisUtterance(sentenceObj.text);
    utterance.rate = this.playbackRate;
    utterance.pitch = 1.0;
    utterance.volume = this.volume;

    const voice = this.getBestVoice(this.currentLesson.accent, this.currentLesson.voiceGender);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "en-US";
    }

    utterance.onstart = () => {
      if (this.onSentenceChange) {
        this.onSentenceChange(this.currentSentenceIndex, sentenceObj);
      }
    };

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;

      if (this.shadowingMode) {
        // Shadowing rejimida har bir jumlada to'xtab turish
        this.isPaused = true;
        this.notifyState();
        return;
      }

      // Kichik tabiiy pauza (400ms) keyin keyingi jumlaga o'tish
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.playSentence(this.currentSentenceIndex + 1);
        }
      }, 400);
    };

    utterance.onerror = (e) => {
      console.warn("Speech error:", e);
      if (this.isPlaying && !this.isPaused) {
        setTimeout(() => this.playSentence(this.currentSentenceIndex + 1), 300);
      }
    };

    this.synth.speak(utterance);
  }

  nextSentence() {
    if (!this.currentLesson) return;
    const nextIdx = Math.min(this.currentSentenceIndex + 1, this.currentLesson.sentences.length - 1);
    this.currentSentenceIndex = nextIdx;
    this.isPaused = false;
    this.isPlaying = true;
    this.playSentence(nextIdx);
    this.notifyState();
  }

  prevSentence() {
    if (!this.currentLesson) return;
    const prevIdx = Math.max(0, this.currentSentenceIndex - 1);
    this.currentSentenceIndex = prevIdx;
    this.isPaused = false;
    this.isPlaying = true;
    this.playSentence(prevIdx);
    this.notifyState();
  }

  seekPercent(percent) {
    if (!this.currentLesson) return;
    const total = this.currentLesson.sentences.length;
    const targetIdx = Math.min(total - 1, Math.max(0, Math.floor((percent / 100) * total)));
    this.currentSentenceIndex = targetIdx;
    this.elapsedSeconds = Math.round((percent / 100) * this.estimatedTotalSeconds);
    this.notifyProgress();
    if (this.isPlaying) {
      this.playSentence(targetIdx);
    }
  }

  startProgressTimer() {
    this.stopProgressTimer();
    this.progressInterval = setInterval(() => {
      if (this.isPlaying && !this.isPaused) {
        if (this.elapsedSeconds < this.estimatedTotalSeconds) {
          this.elapsedSeconds++;
          this.notifyProgress();
        }
      }
    }, 1000);
  }

  stopProgressTimer() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  notifyState() {
    if (this.onStateChange) {
      this.onStateChange({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        rate: this.playbackRate,
        sentenceIndex: this.currentSentenceIndex,
        totalSentences: this.currentLesson ? this.currentLesson.sentences.length : 0,
        shadowingMode: this.shadowingMode
      });
    }
  }

  notifyProgress() {
    if (this.onProgressUpdate) {
      const percent = this.estimatedTotalSeconds > 0 
        ? Math.min(100, (this.elapsedSeconds / this.estimatedTotalSeconds) * 100)
        : 0;
      this.onProgressUpdate({
        currentTimeStr: this.formatTime(this.elapsedSeconds),
        totalTimeStr: this.formatTime(this.estimatedTotalSeconds),
        percent: percent
      });
    }
  }

  formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }
}

// Global yoki modul eksporti
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioPlayerEngine };
}
