/**
 * Professional Listening Practice — Audio Player Engine
 * High-fidelity Web Speech API synthesizer with natural female voice prioritization,
 * interactive seekable progress bar, volume controls, replay, speed multipliers (0.75x - 1.25x),
 * and dynamic waveform visualization.
 */

class AudioPlayerEngine {
  constructor() {
    this.synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    this.voices = [];
    this.currentExercise = null;
    this.currentSentenceIndex = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.playbackRate = 1.0;
    this.volume = 1.0;
    this.currentTime = 0; // seconds
    this.duration = 35; // seconds estimated
    this.timerId = null;
    this.activeUtterance = null;
    this.isSeeking = false;

    // Callbacks
    this.onStateChange = null;     // (state: 'loading'|'playing'|'paused'|'stopped'|'ended'|'error') => {}
    this.onTimeUpdate = null;      // (currentTime, duration, percent) => {}
    this.onSentenceChange = null;  // (sentenceIndex) => {}
    this.onError = null;           // (errorMessage) => {}

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const populateVoices = () => {
      this.voices = this.synth.getVoices() || [];
    };

    populateVoices();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = populateVoices;
    }
  }

  /**
   * Selects highest-quality natural female English voice available on system
   */
  getBestVoice(accent) {
    if (!this.voices || this.voices.length === 0) {
      if (this.synth) this.voices = this.synth.getVoices() || [];
    }

    const isBritish = accent && /GB|British/i.test(accent);
    const targetLang = isBritish ? "en-GB" : "en-US";

    // 1. Natural Neural / Online Female voices
    const naturalFemale = this.voices.find(v =>
      v.lang && (v.lang === targetLang || v.lang.startsWith(targetLang.slice(0, 2))) &&
      /natural|online|neural|google|samantha|zira|jenny|susan|karen|victoria/i.test(v.name) &&
      !/male|david|george|mark/i.test(v.name)
    );
    if (naturalFemale) return naturalFemale;

    // 2. Any female English voice
    const anyFemale = this.voices.find(v =>
      v.lang && v.lang.startsWith("en") &&
      /female|zira|samantha|karen|victoria|jenny/i.test(v.name)
    );
    if (anyFemale) return anyFemale;

    // 3. Any target accent voice
    const accentVoice = this.voices.find(v => v.lang === targetLang);
    if (accentVoice) return accentVoice;

    // 4. Any English voice
    const anyEnglish = this.voices.find(v => v.lang && v.lang.startsWith("en"));
    if (anyEnglish) return anyEnglish;

    return this.voices.length > 0 ? this.voices[0] : null;
  }

  loadExercise(exercise) {
    this.stop();
    this.currentExercise = exercise;
    this.currentSentenceIndex = 0;
    this.currentTime = 0;
    this.duration = exercise.durationSec || 35;
    this.playbackRate = 1.0;
    this.isPaused = false;
    this.isPlaying = false;

    if (this.onTimeUpdate) {
      this.onTimeUpdate(0, this.duration, 0);
    }
    if (this.onStateChange) {
      this.onStateChange("stopped");
    }
  }

  setRate(rate) {
    this.playbackRate = Math.max(0.5, Math.min(2.0, parseFloat(rate) || 1.0));
    if (this.isPlaying && !this.isPaused) {
      // Re-trigger current playback at new speed seamlessly
      this.playSentence(this.currentSentenceIndex);
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, parseFloat(vol) || 1.0));
    if (this.activeUtterance) {
      this.activeUtterance.volume = this.volume;
    }
  }

  togglePlay() {
    if (!this.currentExercise) return;
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
    if (!this.currentExercise) return;

    if (this.isPaused) {
      this.resume();
      return;
    }

    if (!this.synth) {
      this.handleSpeechError("SpeechSynthesis not available in this browser environment.");
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange("playing");

    // If already at end, restart from beginning
    if (this.currentTime >= this.duration || this.currentSentenceIndex >= this.currentExercise.sentences.length) {
      this.currentSentenceIndex = 0;
      this.currentTime = 0;
    }

    this.startProgressTimer();
    this.playSentence(this.currentSentenceIndex);
  }

  playSentence(index) {
    if (!this.currentExercise || !this.currentExercise.sentences) return;
    if (index >= this.currentExercise.sentences.length) {
      this.finishPlayback();
      return;
    }

    this.currentSentenceIndex = index;
    const sentence = this.currentExercise.sentences[index];

    if (!this.synth) return;

    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence.text);
    this.activeUtterance = utterance;

    const voice = this.getBestVoice(this.currentExercise.accent);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }

    utterance.rate = this.playbackRate;
    utterance.pitch = 1.0;
    utterance.volume = this.volume;

    utterance.onstart = () => {
      if (this.onSentenceChange) {
        this.onSentenceChange(index);
      }
    };

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;

      const nextIdx = index + 1;
      if (nextIdx < this.currentExercise.sentences.length) {
        // Natural micro-pause between dialogue turns (300ms)
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.playSentence(nextIdx);
          }
        }, 300);
      } else {
        this.finishPlayback();
      }
    };

    utterance.onerror = (e) => {
      if (e.error === "canceled" || e.error === "interrupted") {
        return; // Normal cancel during seek or stop
      }
      console.warn("TTS sentence error:", e);
      // Advance to next sentence on minor error
      const nextIdx = index + 1;
      if (nextIdx < this.currentExercise.sentences.length) {
        this.playSentence(nextIdx);
      } else {
        this.finishPlayback();
      }
    };

    try {
      this.synth.speak(utterance);
    } catch (err) {
      this.handleSpeechError("Audio synthesis error: " + err.message);
    }
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return;
    this.isPaused = true;
    this.stopProgressTimer();

    if (this.synth) {
      this.synth.pause();
    }

    if (this.onStateChange) this.onStateChange("paused");
  }

  resume() {
    if (!this.isPlaying || !this.isPaused) return;
    this.isPaused = false;
    this.startProgressTimer();

    if (this.synth) {
      if (this.synth.paused) {
        this.synth.resume();
      } else {
        this.playSentence(this.currentSentenceIndex);
      }
    }

    if (this.onStateChange) this.onStateChange("playing");
  }

  stop() {
    this.isPlaying = false;
    this.isPaused = false;
    this.currentSentenceIndex = 0;
    this.currentTime = 0;
    this.stopProgressTimer();

    if (this.synth) {
      this.synth.cancel();
    }

    this.activeUtterance = null;

    if (this.onTimeUpdate) {
      this.onTimeUpdate(0, this.duration, 0);
    }
    if (this.onStateChange) {
      this.onStateChange("stopped");
    }
  }

  replay() {
    this.stop();
    this.play();
  }

  seekToPercent(percent) {
    if (!this.currentExercise || !this.currentExercise.sentences) return;
    const clampedPercent = Math.max(0, Math.min(1, percent));
    this.currentTime = clampedPercent * this.duration;

    // Estimate matching sentence index
    const totalSentences = this.currentExercise.sentences.length;
    const targetIndex = Math.min(
      totalSentences - 1,
      Math.floor(clampedPercent * totalSentences)
    );

    const wasPlaying = this.isPlaying && !this.isPaused;

    if (this.synth) {
      this.synth.cancel();
    }

    this.currentSentenceIndex = targetIndex;

    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.currentTime, this.duration, clampedPercent * 100);
    }

    if (wasPlaying) {
      this.playSentence(targetIndex);
    } else {
      if (this.onSentenceChange) {
        this.onSentenceChange(targetIndex);
      }
    }
  }

  startProgressTimer() {
    this.stopProgressTimer();
    const intervalMs = 100;

    this.timerId = setInterval(() => {
      if (!this.isPlaying || this.isPaused) return;

      this.currentTime += (intervalMs / 1000) * this.playbackRate;

      if (this.currentTime >= this.duration) {
        this.currentTime = this.duration;
      }

      const percent = (this.currentTime / Math.max(1, this.duration)) * 100;
      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime, this.duration, percent);
      }
    }, intervalMs);
  }

  stopProgressTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  finishPlayback() {
    this.stopProgressTimer();
    this.currentTime = this.duration;
    this.isPlaying = false;
    this.isPaused = false;
    this.activeUtterance = null;

    if (this.onTimeUpdate) {
      this.onTimeUpdate(this.duration, this.duration, 100);
    }
    if (this.onStateChange) {
      this.onStateChange("ended");
    }
  }

  handleSpeechError(msg) {
    console.error("AudioPlayerEngine Error:", msg);
    this.stop();
    if (this.onError) {
      this.onError(msg);
    }
    if (this.onStateChange) {
      this.onStateChange("error");
    }
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { AudioPlayerEngine };
}
