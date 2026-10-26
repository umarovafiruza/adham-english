/**
 * Professional Listening Practice — Audio Player Engine
 * High-fidelity HTML5 Audio player supporting pristine neural recordings (en-US / en-GB),
 * scrubbable seeking, volume control, replay, speed multipliers (0.75x - 1.25x),
 * and automatic fallback to browser SpeechSynthesis if offline or audio assets are missing.
 */

class AudioPlayerEngine {
  constructor() {
    this.audio = typeof window !== "undefined" ? new Audio() : null;
    this.synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    this.voices = [];
    this.currentExercise = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.playbackRate = 1.0;
    this.volume = 1.0;
    this.currentTime = 0;
    this.duration = 35;
    this.usingFallback = false;

    // Fallback SpeechSynthesis state
    this.fallbackSentenceIndex = 0;
    this.fallbackTimerId = null;
    this.activeUtterance = null;

    // Callbacks
    this.onStateChange = null;     // (state: 'loading'|'playing'|'paused'|'stopped'|'ended'|'error') => {}
    this.onTimeUpdate = null;      // (currentTime, duration, percent) => {}
    this.onSentenceChange = null;  // (sentenceIndex) => {}
    this.onError = null;           // (errorMessage) => {}

    this.initAudioListeners();
    this.initVoices();
  }

  initAudioListeners() {
    if (!this.audio) return;

    this.audio.preload = "auto";

    this.audio.addEventListener("loadedmetadata", () => {
      if (this.audio.duration && !isNaN(this.audio.duration) && isFinite(this.audio.duration)) {
        this.duration = this.audio.duration;
      }
      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.audio.currentTime, this.duration, 0);
      }
    });

    this.audio.addEventListener("timeupdate", () => {
      if (this.usingFallback) return;
      this.currentTime = this.audio.currentTime;
      const total = this.duration > 0 ? this.duration : (this.audio.duration || 35);
      const percent = (this.currentTime / Math.max(1, total)) * 100;

      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime, total, Math.min(100, percent));
      }
    });

    this.audio.addEventListener("play", () => {
      if (this.usingFallback) return;
      this.isPlaying = true;
      this.isPaused = false;
      if (this.onStateChange) this.onStateChange("playing");
    });

    this.audio.addEventListener("pause", () => {
      if (this.usingFallback) return;
      // If paused but not ended
      if (!this.audio.ended && this.isPlaying) {
        this.isPaused = true;
        if (this.onStateChange) this.onStateChange("paused");
      }
    });

    this.audio.addEventListener("ended", () => {
      if (this.usingFallback) return;
      this.isPlaying = false;
      this.isPaused = false;
      this.currentTime = this.duration;
      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.duration, this.duration, 100);
      }
      if (this.onStateChange) this.onStateChange("ended");
    });

    this.audio.addEventListener("waiting", () => {
      if (!this.usingFallback && this.onStateChange) {
        this.onStateChange("loading");
      }
    });

    this.audio.addEventListener("error", () => {
      console.warn("HTML5 audio playback error; switching to SpeechSynthesis fallback.");
      this.usingFallback = true;
      if (this.isPlaying) {
        this.playFallback();
      }
    });
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

  getBestVoice(accent) {
    if (!this.voices || this.voices.length === 0) {
      if (this.synth) this.voices = this.synth.getVoices() || [];
    }

    const isBritish = accent && /GB|British/i.test(accent);
    const targetLang = isBritish ? "en-GB" : "en-US";

    // 1. Natural Neural / Online Female voices
    const naturalFemale = this.voices.find(v =>
      v.lang && (v.lang === targetLang || v.lang.startsWith(targetLang.slice(0, 2))) &&
      /natural|online|neural|google|samantha|zira|jenny|sonia|susan|karen|victoria/i.test(v.name) &&
      !/male|david|george|mark/i.test(v.name)
    );
    if (naturalFemale) return naturalFemale;

    // 2. Any female English voice
    const anyFemale = this.voices.find(v =>
      v.lang && v.lang.startsWith("en") &&
      /female|zira|samantha|karen|victoria|jenny|sonia/i.test(v.name)
    );
    if (anyFemale) return anyFemale;

    // 3. Target accent voice
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
    this.duration = exercise.durationSec || 35;
    this.currentTime = 0;
    this.playbackRate = 1.0;
    this.isPaused = false;
    this.isPlaying = false;
    this.usingFallback = false;

    if (this.audio && exercise.audioUrl) {
      this.audio.src = exercise.audioUrl;
      this.audio.playbackRate = this.playbackRate;
      this.audio.volume = this.volume;
      this.audio.load();
    } else {
      this.usingFallback = true;
    }

    if (this.onTimeUpdate) {
      this.onTimeUpdate(0, this.duration, 0);
    }
    if (this.onStateChange) {
      this.onStateChange("stopped");
    }
  }

  setRate(rate) {
    this.playbackRate = Math.max(0.5, Math.min(2.0, parseFloat(rate) || 1.0));
    if (this.audio) {
      this.audio.playbackRate = this.playbackRate;
    }
    if (this.usingFallback && this.isPlaying && !this.isPaused) {
      this.playSentenceFallback(this.fallbackSentenceIndex);
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, parseFloat(vol) || 1.0));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
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

    this.isPlaying = true;
    this.isPaused = false;

    if (!this.usingFallback && this.audio && this.audio.src) {
      // If at end, reset to start
      if (this.audio.ended || this.audio.currentTime >= this.duration) {
        this.audio.currentTime = 0;
      }
      this.audio.playbackRate = this.playbackRate;
      this.audio.volume = this.volume;
      
      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn("Audio play prevented or failed, switching to fallback:", err.message);
          this.usingFallback = true;
          this.playFallback();
        });
      }
    } else {
      this.playFallback();
    }
  }

  pause() {
    if (!this.isPlaying || this.isPaused) return;
    this.isPaused = true;

    if (!this.usingFallback && this.audio) {
      this.audio.pause();
    } else {
      this.stopProgressTimer();
      if (this.synth) this.synth.pause();
    }

    if (this.onStateChange) this.onStateChange("paused");
  }

  resume() {
    if (!this.isPlaying || !this.isPaused) return;
    this.isPaused = false;

    if (!this.usingFallback && this.audio) {
      this.audio.play().catch(e => console.warn(e));
    } else {
      this.startProgressTimer();
      if (this.synth) {
        if (this.synth.paused) {
          this.synth.resume();
        } else {
          this.playSentenceFallback(this.fallbackSentenceIndex);
        }
      }
    }

    if (this.onStateChange) this.onStateChange("playing");
  }

  stop() {
    this.isPlaying = false;
    this.isPaused = false;
    this.currentTime = 0;

    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }

    this.stopProgressTimer();
    if (this.synth) {
      this.synth.cancel();
    }
    this.activeUtterance = null;
    this.fallbackSentenceIndex = 0;

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
    if (!this.currentExercise) return;
    const clampedPercent = Math.max(0, Math.min(1, percent));
    this.currentTime = clampedPercent * this.duration;

    if (!this.usingFallback && this.audio && this.duration > 0) {
      this.audio.currentTime = clampedPercent * this.duration;
      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime, this.duration, clampedPercent * 100);
      }
    } else {
      // Fallback seek
      const totalSentences = (this.currentExercise.sentences && this.currentExercise.sentences.length) || 1;
      const targetIndex = Math.min(totalSentences - 1, Math.floor(clampedPercent * totalSentences));
      const wasPlaying = this.isPlaying && !this.isPaused;

      if (this.synth) this.synth.cancel();
      this.fallbackSentenceIndex = targetIndex;

      if (this.onTimeUpdate) {
        this.onTimeUpdate(this.currentTime, this.duration, clampedPercent * 100);
      }
      if (wasPlaying) {
        this.playSentenceFallback(targetIndex);
      }
    }
  }

  /* ==========================================================================
     SpeechSynthesis Fallback Engine (for offline or missing audio scenarios)
     ========================================================================== */
  playFallback() {
    if (!this.synth) {
      this.handleSpeechError("No audio or SpeechSynthesis available.");
      return;
    }

    this.isPlaying = true;
    this.isPaused = false;
    if (this.onStateChange) this.onStateChange("playing");

    if (this.currentTime >= this.duration) {
      this.fallbackSentenceIndex = 0;
      this.currentTime = 0;
    }

    this.startProgressTimer();
    this.playSentenceFallback(this.fallbackSentenceIndex);
  }

  playSentenceFallback(index) {
    if (!this.currentExercise || !this.currentExercise.sentences) return;
    if (index >= this.currentExercise.sentences.length) {
      this.finishPlayback();
      return;
    }

    this.fallbackSentenceIndex = index;
    const sentence = this.currentExercise.sentences[index];

    if (!this.synth) return;
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence.text);
    this.activeUtterance = utterance;

    const voice = this.getBestVoice(this.currentExercise.accent);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "en-US";
    }

    utterance.rate = this.playbackRate;
    utterance.pitch = 1.0;
    utterance.volume = this.volume;

    utterance.onstart = () => {
      if (this.onSentenceChange) this.onSentenceChange(index);
    };

    utterance.onend = () => {
      if (!this.isPlaying || this.isPaused) return;
      const nextIdx = index + 1;
      if (nextIdx < this.currentExercise.sentences.length) {
        setTimeout(() => {
          if (this.isPlaying && !this.isPaused) {
            this.playSentenceFallback(nextIdx);
          }
        }, 250);
      } else {
        this.finishPlayback();
      }
    };

    utterance.onerror = (e) => {
      if (e.error === "canceled" || e.error === "interrupted") return;
      const nextIdx = index + 1;
      if (nextIdx < this.currentExercise.sentences.length) {
        this.playSentenceFallback(nextIdx);
      } else {
        this.finishPlayback();
      }
    };

    try {
      this.synth.speak(utterance);
    } catch (err) {
      this.handleSpeechError("SpeechSynthesis fallback failed: " + err.message);
    }
  }

  startProgressTimer() {
    this.stopProgressTimer();
    const intervalMs = 100;
    this.fallbackTimerId = setInterval(() => {
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
    if (this.fallbackTimerId) {
      clearInterval(this.fallbackTimerId);
      this.fallbackTimerId = null;
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
    if (this.onError) this.onError(msg);
    if (this.onStateChange) this.onStateChange("error");
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { AudioPlayerEngine };
}
