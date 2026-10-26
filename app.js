/**
 * English-Speaking Practice Web Application
 * Minimalist, typography-first teleprompter reading coach.
 * Pure Vanilla JavaScript (ES6+), no frameworks, no dependencies.
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. APPLICATION STATE & STORAGE
     ========================================================================== */
  const STORAGE_KEYS = {
    FINISHED_TOPICS: "speak_finished_topics",
    LAST_SPEED: "speak_last_speed",
    SAVED_WORDS: "speak_saved_words",
    BEST_WPM: "speak_best_wpm",
    RECORDINGS: "speak_voice_recordings"
  };

  const SPEED_CONFIG = {
    slow: { wpm: 90, label: "Slow" },
    medium: { wpm: 130, label: "Medium" },
    fast: { wpm: 170, label: "Fast" }
  };

  // Safe localStorage accessor
  const storage = {
    get(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (err) {
        console.warn("Storage access failed, using fallback:", err);
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.warn("Storage write failed:", err);
      }
    }
  };

  const state = {
    currentScreen: "topics",
    currentTopic: null,
    currentSpeed: parseInt(storage.get(STORAGE_KEYS.LAST_SPEED, 130), 10) || 130,
    finishedTopics: new Set(storage.get(STORAGE_KEYS.FINISHED_TOPICS, [])),
    savedWords: storage.get(STORAGE_KEYS.SAVED_WORDS, []),
    bestWpm: storage.get(STORAGE_KEYS.BEST_WPM, {}),
    savedRecordings: storage.get(STORAGE_KEYS.RECORDINGS, []),
    currentRecordingItem: null,
    audioChunks: [],
    audioStream: null,
    mediaRecorder: null,

    // Teleprompter runtime state
    isReading: false,
    isPaused: false,
    scrollAnimId: null,
    scrollStartTimestamp: 0,
    readingStartTimestamp: 0,
    pausedAtTimestamp: 0,
    totalPauseDuration: 0,
    currentScrollOffset: 0,
    currentScrollTop: 0,
    targetScrollDistance: 0,
    scrollSpeedPxPerSec: 0,
    tappedWordsInSession: new Set(),
    activePopoverWord: null
  };

  /* ==========================================================================
     2. DOM ELEMENTS
     ========================================================================== */
  const elements = {
    siteHeader: document.getElementById("site-header"),
    navBrand: document.getElementById("nav-brand"),
    navWordsBtn: document.getElementById("nav-words-btn"),
    savedWordsCount: document.getElementById("saved-words-count"),

    // Screens
    screenTopics: document.getElementById("screen-topics"),
    screenPrepare: document.getElementById("screen-prepare"),
    screenReading: document.getElementById("screen-reading"),
    screenFinish: document.getElementById("screen-finish"),
    screenWords: document.getElementById("screen-words"),

    // Topics Screen
    topicsList: document.getElementById("topics-list"),

    // Prepare Screen
    prepareBackBtn: document.getElementById("prepare-back-btn"),
    prepareTopicNumber: document.getElementById("prepare-topic-number"),
    prepareTopicTitle: document.getElementById("prepare-topic-title"),
    prepareWordCount: document.getElementById("prepare-word-count"),
    prepareGlossaryList: document.getElementById("prepare-glossary-list"),
    prepareSpeedSlider: document.getElementById("prepare-speed-slider"),
    prepareWpmVal: document.getElementById("prepare-wpm-val"),
    startReadingBtn: document.getElementById("start-reading-btn"),

    // Reading Screen
    readingBar: document.getElementById("reading-bar"),
    readingBackBtn: document.getElementById("reading-back-btn"),
    readingSpeedSlider: document.getElementById("reading-speed-slider"),
    readingWpmVal: document.getElementById("reading-wpm-val"),
    countdownOverlay: document.getElementById("countdown-overlay"),
    countdownDigit: document.getElementById("countdown-digit"),
    countdownPrompt: document.getElementById("countdown-prompt"),
    teleprompterStage: document.getElementById("teleprompter-stage"),
    teleprompterFlow: document.getElementById("teleprompter-flow"),
    readingToggleBtn: document.getElementById("reading-toggle-btn"),
    readingRestartBtn: document.getElementById("reading-restart-btn"),
    readingRecIndicator: document.getElementById("reading-rec-indicator"),

    // Floating Word Translation Panel
    wordPanel: document.getElementById("word-panel"),
    panelWordEn: document.getElementById("panel-word-en"),
    panelWordUz: document.getElementById("panel-word-uz"),
    panelListenBtn: document.getElementById("panel-listen-btn"),
    panelSaveBtn: document.getElementById("panel-save-btn"),
    panelCloseBtn: document.getElementById("panel-close-btn"),

    // Finish Screen
    finishTopicTitle: document.getElementById("finish-topic-title"),
    finishReadingTime: document.getElementById("finish-reading-time"),
    finishWpm: document.getElementById("finish-wpm"),
    finishTappedCount: document.getElementById("finish-tapped-count"),
    finishBestNote: document.getElementById("finish-best-note"),
    finishRecordingBlock: document.getElementById("finish-recording-block"),
    recordingCounter: document.getElementById("recording-counter"),
    recordingsList: document.getElementById("recordings-list"),
    finishAudioPlayer: document.getElementById("finish-audio-player"),
    finishRetryBtn: document.getElementById("finish-retry-btn"),
    finishNextBtn: document.getElementById("finish-next-btn"),
    finishTopicsBtn: document.getElementById("finish-topics-btn"),

    // Words Screen
    wordsBackBtn: document.getElementById("words-back-btn"),
    wordsCountDesc: document.getElementById("words-count-desc"),
    savedWordsContainer: document.getElementById("saved-words-container"),

    // Audio prompt fallback
    introAudio: document.getElementById("intro-audio")
  };

  /* ==========================================================================
     3. SPEECH SYNTHESIS & PROMPT VOICE ENGINE
     ========================================================================== */
  const audioController = {
    init() {
      // Pre-warm SpeechSynthesis voice cache in supported browsers
      if ("speechSynthesis" in window) {
        window.speechSynthesis.getVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
          };
        }
      }
    },

    // Speech Prompt: "Speak fast and clear"
    playPrompt(callback) {
      let callbackFired = false;
      const safeCallback = () => {
        if (!callbackFired) {
          callbackFired = true;
          if (callback) callback();
        }
      };

      if (!("speechSynthesis" in window)) {
        this.playFallbackAudioPrompt(safeCallback);
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance("Speak fast and clear");
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      // Select female English voice
      const voices = window.speechSynthesis.getVoices();
      const femaleEnglishVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          /female|zira|samantha|victoria|karen|jenny|natural/i.test(v.name)
      ) || voices.find((v) => v.lang.startsWith("en"));

      if (femaleEnglishVoice) {
        utterance.voice = femaleEnglishVoice;
      }

      utterance.onend = safeCallback;
      utterance.onerror = () => {
        this.playFallbackAudioPrompt(safeCallback);
      };

      // Safeguard timeout
      const fallbackTimer = setTimeout(safeCallback, 2200);
      utterance.onend = () => {
        clearTimeout(fallbackTimer);
        safeCallback();
      };

      try {
        window.speechSynthesis.speak(utterance);
      } catch (err) {
        clearTimeout(fallbackTimer);
        this.playFallbackAudioPrompt(safeCallback);
      }
    },

    playFallbackAudioPrompt(callback) {
      const intro = elements.introAudio;
      if (intro) {
        intro.currentTime = 0;
        intro.volume = 1;
        const playPromise = intro.play();
        if (playPromise) {
          playPromise
            .then(() => {
              intro.onended = () => {
                if (callback) callback();
              };
            })
            .catch(() => {
              // Browser block or missing file
              setTimeout(() => {
                if (callback) callback();
              }, 600);
            });
          return;
        }
      }
      setTimeout(() => {
        if (callback) callback();
      }, 600);
    },

    // Pronounce a single glossary word
    speakWord(wordText) {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(wordText);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find((v) => v.lang.startsWith("en"));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  /* ==========================================================================
     3B. DICTAPHONE / VOICE RECORDER (MediaRecorder & LocalStorage FIFO Max 3)
     ========================================================================== */
  const recorderController = {
    isSupported() {
      return !!(
        navigator.mediaDevices &&
        typeof navigator.mediaDevices.getUserMedia === "function" &&
        window.MediaRecorder
      );
    },

    async prepareMic() {
      if (!this.isSupported() || state.audioStream) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        state.audioStream = stream;
      } catch (err) {
        console.warn("Pre-warming mic was not authorized immediately:", err);
      }
    },

    async start() {
      if (!this.isSupported()) return;
      try {
        state.audioChunks = [];
        let stream = state.audioStream;
        if (!stream || !stream.active) {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          state.audioStream = stream;
        }

        let mimeType = "audio/webm";
        if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) {
          mimeType = "audio/webm;codecs=opus";
        } else if (MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")) {
          mimeType = "audio/ogg;codecs=opus";
        } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
          mimeType = "audio/mp4";
        }

        const options = { mimeType, audioBitsPerSecond: 28000 };
        const recorder = new MediaRecorder(stream, options);

        recorder.ondataavailable = (e) => {
          if (e.data && e.data.size > 0) {
            state.audioChunks.push(e.data);
          }
        };

        recorder.onstop = () => {
          if (state.audioStream) {
            state.audioStream.getTracks().forEach((track) => track.stop());
            state.audioStream = null;
          }

          if (state.audioChunks.length === 0) return;

          const blob = new Blob(state.audioChunks, { type: mimeType });
          const reader = new FileReader();
          reader.onloadend = () => {
            const dataUrl = reader.result;
            const durationSec = Math.round(
              (performance.now() - state.readingStartTimestamp) / 1000
            );

            const now = new Date();
            const dateStr = now.toLocaleDateString(undefined, { month: "short", day: "numeric" });
            const timeStr = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

            const recordingItem = {
              id: "rec_" + Date.now(),
              topicId: state.currentTopic ? state.currentTopic.id : "",
              topicTitle: state.currentTopic ? state.currentTopic.title : "Speaking Practice",
              durationSec: Math.max(1, durationSec),
              date: dateStr,
              time: timeStr,
              dataUrl: dataUrl
            };

            state.currentRecordingItem = recordingItem;

            // FIFO: Maximum 3 recordings preserved in localStorage
            state.savedRecordings.push(recordingItem);
            while (state.savedRecordings.length > 3) {
              state.savedRecordings.shift(); // Remove oldest
            }

            try {
              storage.set(STORAGE_KEYS.RECORDINGS, state.savedRecordings);
            } catch (err) {
              console.warn("Storage quota exceeded for audio, keeping newest only:", err);
              state.savedRecordings = [recordingItem];
              try {
                storage.set(STORAGE_KEYS.RECORDINGS, state.savedRecordings);
              } catch (e2) {}
            }

            renderFinishRecordingsList();
          };
          reader.readAsDataURL(blob);
        };

        recorder.start(1000);
        state.mediaRecorder = recorder;

        if (elements.readingRecIndicator) {
          elements.readingRecIndicator.classList.remove("hidden");
        }
      } catch (err) {
        console.warn("Microphone access not granted or not available:", err);
        if (elements.readingRecIndicator) {
          elements.readingRecIndicator.classList.add("hidden");
        }
      }
    },

    stop() {
      if (elements.readingRecIndicator) {
        elements.readingRecIndicator.classList.add("hidden");
      }
      if (state.mediaRecorder && state.mediaRecorder.state !== "inactive") {
        try {
          state.mediaRecorder.stop();
        } catch (e) {}
      } else if (state.audioStream) {
        state.audioStream.getTracks().forEach((track) => track.stop());
        state.audioStream = null;
      }
    }
  };

  /* ==========================================================================
     4. SCREEN NAVIGATION
     ========================================================================== */
  function showScreen(screenId) {
    const screens = [
      elements.screenTopics,
      elements.screenPrepare,
      elements.screenReading,
      elements.screenFinish,
      elements.screenWords
    ];

    screens.forEach((scr) => {
      if (scr) {
        scr.classList.remove("active");
        scr.classList.add("hidden");
      }
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.remove("hidden");
      // Trigger smooth opacity fade
      requestAnimationFrame(() => {
        target.classList.add("active");
      });
    }

    state.currentScreen = screenId;

    // Header visibility: Hide during reading for clean focus
    if (elements.siteHeader) {
      if (screenId === "reading") {
        elements.siteHeader.classList.add("hidden");
      } else {
        elements.siteHeader.classList.remove("hidden");
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function updateSavedWordsBadge() {
    if (elements.savedWordsCount) {
      elements.savedWordsCount.textContent = state.savedWords.length;
    }
  }

  /* ==========================================================================
     5. SCREEN 1: TOPICS LIST
     ========================================================================== */
  function renderTopicsList() {
    if (!elements.topicsList || !window.TOPICS) return;

    elements.topicsList.innerHTML = "";

    window.TOPICS.forEach((topic) => {
      const isDone = state.finishedTopics.has(topic.id);
      const best = state.bestWpm[topic.id];

      const li = document.createElement("li");
      li.className = `topic-row ${isDone ? "done" : ""}`;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "topic-btn";
      btn.setAttribute("aria-label", `Select topic ${topic.number}: ${topic.title}`);

      const numSpan = document.createElement("span");
      numSpan.className = "topic-num";
      numSpan.textContent = topic.number;

      const nameSpan = document.createElement("span");
      nameSpan.className = "topic-name";
      nameSpan.textContent = topic.title;

      if (topic.level) {
        const levelSpan = document.createElement("span");
        levelSpan.className = "topic-level-tag";
        levelSpan.textContent = topic.level;
        nameSpan.appendChild(levelSpan);
      }

      const statusTag = document.createElement("span");
      statusTag.className = "topic-status-tag";

      if (best) {
        const wpmSpan = document.createElement("span");
        wpmSpan.className = "topic-wpm";
        wpmSpan.textContent = `${best} wpm`;
        statusTag.appendChild(wpmSpan);
      }

      if (isDone) {
        const doneSpan = document.createElement("span");
        doneSpan.className = "done-label";
        doneSpan.textContent = "done";
        statusTag.appendChild(doneSpan);
      }

      btn.appendChild(numSpan);
      btn.appendChild(nameSpan);
      btn.appendChild(statusTag);

      btn.addEventListener("click", () => {
        openPrepareScreen(topic);
      });

      li.appendChild(btn);
      elements.topicsList.appendChild(li);
    });

    updateSavedWordsBadge();
  }

  /* ==========================================================================
     6. SCREEN 2: PREPARE SCREEN
     ========================================================================== */
  function openPrepareScreen(topic) {
    state.currentTopic = topic;

    if (elements.prepareTopicNumber) {
      elements.prepareTopicNumber.textContent = topic.number;
    }
    if (elements.prepareTopicTitle) {
      elements.prepareTopicTitle.textContent = topic.title;
    }

    const wordCount = topic.text.trim().split(/\s+/).length;
    if (elements.prepareWordCount) {
      elements.prepareWordCount.textContent = `${wordCount} words \u00B7 Level ${topic.level || "A1"} \u00B7 Simple English`;
    }

    // Render Key words
    if (elements.prepareGlossaryList) {
      elements.prepareGlossaryList.innerHTML = "";
      topic.glossary.forEach((item) => {
        const div = document.createElement("div");
        div.className = "keyword-item";

        const enSpan = document.createElement("span");
        enSpan.className = "keyword-en";
        enSpan.textContent = item.word;

        const uzSpan = document.createElement("span");
        uzSpan.className = "keyword-uz";
        uzSpan.textContent = item.uz;

        div.appendChild(enSpan);
        div.appendChild(uzSpan);
        elements.prepareGlossaryList.appendChild(div);
      });
    }

    // Update speed options state
    updateSpeedUI(state.currentSpeed);

    showScreen("prepare");
  }

  function updateSpeedUI(wpm) {
    const val = Math.max(60, Math.min(260, parseInt(wpm, 10) || 130));
    state.currentSpeed = val;
    storage.set(STORAGE_KEYS.LAST_SPEED, val);

    // Sync Prepare screen slider & number
    if (elements.prepareSpeedSlider) {
      elements.prepareSpeedSlider.value = val;
    }
    if (elements.prepareWpmVal) {
      elements.prepareWpmVal.textContent = val;
    }

    // Sync Reading screen slider & number
    if (elements.readingSpeedSlider) {
      elements.readingSpeedSlider.value = val;
    }
    if (elements.readingWpmVal) {
      elements.readingWpmVal.textContent = val;
    }

    // If currently reading, immediately adjust scroll speed smoothly in real time
    if (state.isReading) {
      recalculateScrollSpeed();
    }
  }

  /* ==========================================================================
     7. SCREEN 3: READING TELEPROMPTER ENGINE
     ========================================================================== */
  function startReadingFlow() {
    if (!state.currentTopic) return;
    const topic = state.currentTopic;

    // Pre-authorize microphone on direct user interaction
    recorderController.prepareMic();

    // Reset reading metrics
    state.tappedWordsInSession.clear();
    state.isReading = false;
    state.isPaused = false;
    state.totalPauseDuration = 0;
    hideWordPanel();

    updateSpeedUI(state.currentSpeed);

    if (elements.readingToggleBtn) {
      elements.readingToggleBtn.textContent = "Hold on";
    }

    // Format text with glossary words wrapped in span with dotted underline
    renderReadingText(topic);

    showScreen("reading");

    // Scroll & GPU transform to start position (very beginning at the top)
    applyTeleprompterOffset(0);
    if (elements.teleprompterStage) {
      elements.teleprompterStage.scrollTop = 0;
    }

    // Start 3-2-1 Countdown
    runCountdown(() => {
      audioController.playPrompt(() => {
        beginTeleprompterScrolling();
      });
    });
  }

  function renderReadingText(topic) {
    if (!elements.teleprompterFlow) return;

    // Escape regex special chars in glossary words
    const glossaryWords = topic.glossary.map((g) => ({
      ...g,
      pattern: g.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }));

    // Sort by length descending so longer compound words match before sub-words
    glossaryWords.sort((a, b) => b.word.length - a.word.length);

    // Build master regex for whole words
    const regexPattern = new RegExp(`\\b(${glossaryWords.map((g) => g.pattern).join("|")})\\b`, "gi");

    // Split text into tokens
    const text = topic.text;
    const parts = [];
    let lastIdx = 0;
    let match;

    while ((match = regexPattern.exec(text)) !== null) {
      const matchedStr = match[0];
      const matchIndex = match.index;

      // Plain text before match
      if (matchIndex > lastIdx) {
        parts.push(document.createTextNode(text.substring(lastIdx, matchIndex)));
      }

      // Find matching glossary item
      const glossaryItem = topic.glossary.find(
        (g) => g.word.toLowerCase() === matchedStr.toLowerCase()
      );

      const span = document.createElement("span");
      span.className = "glossary-word";
      span.tabIndex = 0;
      span.setAttribute("role", "button");
      span.setAttribute("aria-haspopup", "dialog");
      span.textContent = matchedStr;
      span.dataset.word = matchedStr;
      span.dataset.uz = glossaryItem ? glossaryItem.uz : "";

      span.addEventListener("click", (e) => {
        e.stopPropagation();
        handleGlossaryWordTap(span);
      });

      span.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          handleGlossaryWordTap(span);
        }
      });

      parts.push(span);
      lastIdx = matchIndex + matchedStr.length;
    }

    // Trailing plain text
    if (lastIdx < text.length) {
      parts.push(document.createTextNode(text.substring(lastIdx)));
    }

    elements.teleprompterFlow.innerHTML = "";

    const topicHeader = document.createElement("div");
    topicHeader.className = "teleprompter-topic-header";
    topicHeader.textContent = `${topic.number} / ${topic.title} \u00B7 ${topic.level || "A1"}`;
    elements.teleprompterFlow.appendChild(topicHeader);

    const textBody = document.createElement("div");
    textBody.className = "teleprompter-text-body";
    parts.forEach((p) => textBody.appendChild(p));
    elements.teleprompterFlow.appendChild(textBody);
  }

  function runCountdown(onComplete) {
    const overlay = elements.countdownOverlay;
    const digit = elements.countdownDigit;
    if (!overlay || !digit) {
      onComplete();
      return;
    }

    overlay.classList.remove("hidden");
    let count = 3;
    digit.textContent = count;

    const interval = setInterval(() => {
      count--;
      if (count > 0) {
        digit.textContent = count;
      } else {
        clearInterval(interval);
        overlay.classList.add("hidden");
        onComplete();
      }
    }, 950);
  }

  function applyTeleprompterOffset(offsetPx) {
    state.currentScrollOffset = Math.max(0, offsetPx);
    state.currentScrollTop = state.currentScrollOffset; // Sync for metrics and resize
    if (elements.teleprompterFlow) {
      elements.teleprompterFlow.style.transform = `translate3d(0, ${-state.currentScrollOffset}px, 0)`;
    }
  }

  function recalculateScrollSpeed() {
    if (!state.currentTopic) return;
    const stage = elements.teleprompterStage;
    const flowEl = elements.teleprompterFlow;
    if (!stage || !flowEl) return;

    const topic = state.currentTopic;
    const wordCount = topic.text.trim().split(/\s+/).length;
    const targetWpm = Math.max(60, Math.min(260, parseInt(state.currentSpeed, 10) || 130));

    // Total target reading time for the entire text in seconds
    const fullDurationSec = (wordCount / targetWpm) * 60;

    // Total distance needed for entire text to glide smoothly through reading focus
    const textBody = flowEl.querySelector(".teleprompter-text-body");
    const textHeight = textBody ? textBody.offsetHeight : flowEl.offsetHeight;

    // Scroll until the last line comfortably passes the eye focus guide
    state.targetScrollDistance = Math.max(300, textHeight + 100);

    // Uniform linear velocity (pixels/second): 100% constant, uninterrupted continuous motion
    state.scrollSpeedPxPerSec = state.targetScrollDistance / Math.max(1, fullDurationSec);
  }

  function beginTeleprompterScrolling() {
    const stage = elements.teleprompterStage;
    const topic = state.currentTopic;
    if (!stage || !topic) return;

    state.isReading = true;
    state.isPaused = false;
    state.readingStartTimestamp = performance.now();
    state.totalPauseDuration = 0;

    // Ensure starting strictly from the beginning (0)
    applyTeleprompterOffset(0);
    if (stage) stage.scrollTop = 0;

    // Accurately compute scroll distance and speed
    recalculateScrollSpeed();

    let lastTimestamp = performance.now();

    // Start voice recording simultaneously with reading
    recorderController.start();

    function step(currentTimestamp) {
      if (!state.isReading) return;

      if (!state.isPaused) {
        // Safe frame delta clamped to 50ms to prevent skips
        const dt = Math.min((currentTimestamp - lastTimestamp) / 1000, 0.05);
        state.currentScrollOffset += state.scrollSpeedPxPerSec * dt;
        applyTeleprompterOffset(state.currentScrollOffset);

        // Check completion condition
        if (state.currentScrollOffset >= state.targetScrollDistance) {
          finishReadingSession();
          return;
        }
      }

      lastTimestamp = currentTimestamp;
      state.scrollAnimId = requestAnimationFrame(step);
    }

    if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);
    state.scrollAnimId = requestAnimationFrame(step);
  }

  function pauseReading() {
    if (!state.isReading || state.isPaused) return;
    state.isPaused = true;
    state.pausedAtTimestamp = performance.now();

    if (elements.readingToggleBtn) {
      elements.readingToggleBtn.textContent = "Keep going";
    }
  }

  function resumeReading() {
    if (!state.isReading || !state.isPaused) return;
    hideWordPanel();
    const pausedDuration = performance.now() - state.pausedAtTimestamp;
    state.totalPauseDuration += pausedDuration;
    state.isPaused = false;

    // Recalculate speed with fresh duration
    recalculateScrollSpeed();

    if (elements.readingToggleBtn) {
      elements.readingToggleBtn.textContent = "Hold on";
    }
  }

  function toggleReadingPause() {
    if (state.isPaused) {
      resumeReading();
    } else {
      pauseReading();
    }
  }

  function restartReading() {
    if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);
    recorderController.stop();
    hideWordPanel();
    applyTeleprompterOffset(0);
    if (elements.teleprompterStage) {
      elements.teleprompterStage.scrollTop = 0;
    }
    startReadingFlow();
  }

  /* ==========================================================================
     8. HARD WORDS / GLOSSARY PANEL
     ========================================================================== */
  function handleGlossaryWordTap(span) {
    const enWord = span.dataset.word;
    const uzWord = span.dataset.uz;

    state.tappedWordsInSession.add(enWord.toLowerCase());
    state.activePopoverWord = { word: enWord, uz: uzWord };

    // Pause scroll while reading definition
    pauseReading();

    // Position panel near clicked word
    positionWordPanel(span, enWord, uzWord);
  }

  function positionWordPanel(anchorEl, enWord, uzWord) {
    const panel = elements.wordPanel;
    if (!panel) return;

    elements.panelWordEn.textContent = enWord;
    elements.panelWordUz.textContent = uzWord;

    // Check if word is already saved
    const isSaved = state.savedWords.some(
      (w) => w.word.toLowerCase() === enWord.toLowerCase()
    );
    elements.panelSaveBtn.textContent = isSaved ? "Saved" : "Save";
    elements.panelSaveBtn.style.color = isSaved ? "var(--accent)" : "inherit";

    panel.classList.remove("hidden");

    // Compute bounding rect
    const stageRect = elements.teleprompterStage.getBoundingClientRect();
    const anchorRect = anchorEl.getBoundingClientRect();

    const panelWidth = panel.offsetWidth || 260;
    const panelHeight = panel.offsetHeight || 110;

    let left = anchorRect.left + anchorRect.width / 2 - panelWidth / 2;
    let top = anchorRect.top - panelHeight - 12;

    // If too close to top of stage, place below the word
    if (top < stageRect.top + 70) {
      top = anchorRect.bottom + 12;
    }

    // Clamp horizontally within screen
    const minLeft = 16;
    const maxLeft = window.innerWidth - panelWidth - 16;
    left = Math.max(minLeft, Math.min(maxLeft, left));

    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }

  function hideWordPanel() {
    if (elements.wordPanel) {
      elements.wordPanel.classList.add("hidden");
    }
    state.activePopoverWord = null;
  }

  function toggleSaveCurrentWord() {
    if (!state.activePopoverWord) return;
    const { word, uz } = state.activePopoverWord;
    const lower = word.toLowerCase();

    const existingIdx = state.savedWords.findIndex(
      (w) => w.word.toLowerCase() === lower
    );

    if (existingIdx >= 0) {
      // Remove
      state.savedWords.splice(existingIdx, 1);
      elements.panelSaveBtn.textContent = "Save";
      elements.panelSaveBtn.style.color = "inherit";
    } else {
      // Add
      state.savedWords.push({
        word,
        uz,
        topicId: state.currentTopic ? state.currentTopic.id : ""
      });
      elements.panelSaveBtn.textContent = "Saved";
      elements.panelSaveBtn.style.color = "var(--accent)";
    }

    storage.set(STORAGE_KEYS.SAVED_WORDS, state.savedWords);
    updateSavedWordsBadge();
  }

  /* ==========================================================================
     9. SCREEN 4: FINISH SCREEN
     ========================================================================== */
  function finishReadingSession() {
    state.isReading = false;
    state.isPaused = false;
    if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);

    recorderController.stop();

    const now = performance.now();
    const elapsedGrossMs = now - state.readingStartTimestamp;
    const netElapsedSec = Math.max(1, (elapsedGrossMs - state.totalPauseDuration) / 1000);

    const wordCount = state.currentTopic.text.trim().split(/\s+/).length;
    const measuredWpm = Math.round((wordCount / netElapsedSec) * 60);

    // Format duration e.g. 1m 24s
    const minutes = Math.floor(netElapsedSec / 60);
    const seconds = Math.floor(netElapsedSec % 60);
    const timeFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

    // Save finished topic
    state.finishedTopics.add(state.currentTopic.id);
    storage.set(STORAGE_KEYS.FINISHED_TOPICS, Array.from(state.finishedTopics));

    // Check personal best WPM
    const prevBest = state.bestWpm[state.currentTopic.id] || 0;
    const isNewBest = measuredWpm > prevBest;
    if (isNewBest) {
      state.bestWpm[state.currentTopic.id] = measuredWpm;
      storage.set(STORAGE_KEYS.BEST_WPM, state.bestWpm);
    }

    // Populate Finish Screen
    if (elements.finishTopicTitle) {
      elements.finishTopicTitle.textContent = state.currentTopic.title;
    }
    if (elements.finishReadingTime) {
      elements.finishReadingTime.textContent = timeFormatted;
    }
    if (elements.finishWpm) {
      elements.finishWpm.textContent = `${measuredWpm} WPM`;
    }
    if (elements.finishTappedCount) {
      elements.finishTappedCount.textContent = state.tappedWordsInSession.size;
    }

    if (elements.finishBestNote) {
      if (isNewBest && prevBest > 0) {
        elements.finishBestNote.classList.remove("hidden");
      } else {
        elements.finishBestNote.classList.add("hidden");
      }
    }

    showScreen("finish");
    renderFinishRecordingsList();
  }

  let activePlayingId = null;

  function renderFinishRecordingsList() {
    if (!elements.finishRecordingBlock || !elements.recordingsList) return;

    elements.finishRecordingBlock.classList.remove("hidden");
    elements.recordingsList.innerHTML = "";

    const list = state.savedRecordings || [];
    if (elements.recordingCounter) {
      elements.recordingCounter.textContent = `${list.length} of 3 stored`;
    }

    if (list.length === 0) {
      const emptyNote = document.createElement("div");
      emptyNote.className = "rec-meta";
      emptyNote.style.padding = "8px 0";
      emptyNote.textContent = "No voice recordings yet. Allow mic access to save your speech.";
      elements.recordingsList.appendChild(emptyNote);
      return;
    }

    // Render from newest to oldest
    const reversed = [...list].reverse();

    reversed.forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "recording-row";
      if (activePlayingId === item.id) {
        row.classList.add("active-playing");
      }

      const info = document.createElement("div");
      info.className = "recording-info";

      const title = document.createElement("span");
      title.className = "rec-topic-title";
      title.textContent = `${item.topicTitle || "Speech Practice"}${idx === 0 ? " (Latest)" : ""}`;

      const meta = document.createElement("span");
      meta.className = "rec-meta";
      meta.textContent = `${item.date || ""} \u00B7 ${item.time || ""}`;

      info.appendChild(title);
      info.appendChild(meta);

      const duration = document.createElement("span");
      duration.className = "rec-duration";
      const mins = Math.floor(item.durationSec / 60);
      const secs = item.durationSec % 60;
      duration.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;

      const playBtn = document.createElement("button");
      playBtn.type = "button";
      playBtn.className = "rec-btn rec-play-btn";
      playBtn.textContent = activePlayingId === item.id ? "Pause" : "Play";

      playBtn.addEventListener("click", () => {
        playOrPauseRecording(item);
      });

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "rec-btn rec-delete-btn";
      delBtn.textContent = "Remove";

      delBtn.addEventListener("click", () => {
        deleteRecording(item.id);
      });

      const actions = document.createElement("div");
      actions.className = "rec-actions";
      actions.appendChild(playBtn);
      actions.appendChild(delBtn);

      row.appendChild(info);
      row.appendChild(duration);
      row.appendChild(actions);

      elements.recordingsList.appendChild(row);
    });
  }

  function playOrPauseRecording(item) {
    const player = elements.finishAudioPlayer;
    if (!player) return;

    if (activePlayingId === item.id && !player.paused) {
      player.pause();
      activePlayingId = null;
      renderFinishRecordingsList();
      return;
    }

    activePlayingId = item.id;
    player.src = item.dataUrl;
    player
      .play()
      .then(() => {
        renderFinishRecordingsList();
      })
      .catch((err) => console.warn("Playback error:", err));

    player.onended = () => {
      activePlayingId = null;
      renderFinishRecordingsList();
    };
  }

  function deleteRecording(id) {
    if (elements.finishAudioPlayer && activePlayingId === id) {
      elements.finishAudioPlayer.pause();
      activePlayingId = null;
    }
    state.savedRecordings = state.savedRecordings.filter((r) => r.id !== id);
    try {
      storage.set(STORAGE_KEYS.RECORDINGS, state.savedRecordings);
    } catch (e) {}
    renderFinishRecordingsList();
  }

  /* ==========================================================================
     10. SCREEN 5: MY WORDS SCREEN
     ========================================================================== */
  function renderSavedWordsScreen() {
    if (!elements.savedWordsContainer) return;
    elements.savedWordsContainer.innerHTML = "";

    const count = state.savedWords.length;
    if (elements.wordsCountDesc) {
      elements.wordsCountDesc.textContent =
        count === 0
          ? "No saved words yet. Tap any dotted word during reading to translate and save."
          : `${count} word${count === 1 ? "" : "s"} collected during your practice.`;
    }

    if (count === 0) {
      const emptyMsg = document.createElement("p");
      emptyMsg.className = "saved-empty-message";
      emptyMsg.textContent = "Your vocabulary list is empty. Read any topic and tap unfamiliar words to save them here.";
      elements.savedWordsContainer.appendChild(emptyMsg);
      showScreen("words");
      return;
    }

    state.savedWords.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "saved-word-row";

      const enSpan = document.createElement("span");
      enSpan.className = "saved-word-en";
      enSpan.textContent = item.word;

      const uzSpan = document.createElement("span");
      uzSpan.className = "saved-word-uz";
      uzSpan.textContent = item.uz;

      const listenBtn = document.createElement("button");
      listenBtn.type = "button";
      listenBtn.className = "action-link";
      listenBtn.textContent = "Listen";
      listenBtn.addEventListener("click", () => {
        audioController.speakWord(item.word);
      });

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "action-link";
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        state.savedWords.splice(index, 1);
        storage.set(STORAGE_KEYS.SAVED_WORDS, state.savedWords);
        updateSavedWordsBadge();
        renderSavedWordsScreen();
      });

      row.appendChild(enSpan);
      row.appendChild(uzSpan);
      row.appendChild(listenBtn);
      row.appendChild(removeBtn);

      elements.savedWordsContainer.appendChild(row);
    });

    showScreen("words");
  }

  /* ==========================================================================
     11. EVENT LISTENERS & USER INTERACTIONS
     ========================================================================== */
  function setupEventListeners() {
    // Header navigation
    if (elements.navBrand) {
      elements.navBrand.addEventListener("click", (e) => {
        e.preventDefault();
        switchModule("speaking");
        renderTopicsList();
        showScreen("topics");
      });
    }

    // Module Tabs Switcher: Speaking <-> Listening
    const tabSpeaking = document.getElementById("tab-speaking");
    const tabListening = document.getElementById("tab-listening");
    const moduleSpeaking = document.getElementById("module-speaking");
    const moduleListening = document.getElementById("module-listening");
    const historyBtn = document.getElementById("historyBtn");
    const themeToggleBtn = document.getElementById("themeToggleBtn");

    function switchModule(target) {
      if (target === "listening") {
        // Stop speaking teleprompter / recorder if active
        state.isReading = false;
        state.isPaused = false;
        if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);
        recorderController.stop();

        if (tabSpeaking) {
          tabSpeaking.classList.remove("active");
          tabSpeaking.setAttribute("aria-selected", "false");
        }
        if (tabListening) {
          tabListening.classList.add("active");
          tabListening.setAttribute("aria-selected", "true");
        }
        if (moduleSpeaking) moduleSpeaking.classList.add("hidden");
        if (moduleListening) moduleListening.classList.remove("hidden");

        if (elements.navWordsBtn) elements.navWordsBtn.classList.add("hidden");
        if (historyBtn) historyBtn.classList.remove("hidden");
        if (themeToggleBtn) themeToggleBtn.classList.remove("hidden");

        try { localStorage.setItem("active_app_module", "listening"); } catch (e) {}
      } else {
        // Stop listening audio speech synthesis if active
        if (window.listeningPlayer && typeof window.listeningPlayer.stop === "function") {
          window.listeningPlayer.stop();
        }

        if (tabListening) {
          tabListening.classList.remove("active");
          tabListening.setAttribute("aria-selected", "false");
        }
        if (tabSpeaking) {
          tabSpeaking.classList.add("active");
          tabSpeaking.setAttribute("aria-selected", "true");
        }
        if (moduleListening) moduleListening.classList.add("hidden");
        if (moduleSpeaking) moduleSpeaking.classList.remove("hidden");

        if (elements.navWordsBtn) elements.navWordsBtn.classList.remove("hidden");
        if (historyBtn) historyBtn.classList.add("hidden");
        if (themeToggleBtn) themeToggleBtn.classList.add("hidden");

        try { localStorage.setItem("active_app_module", "speaking"); } catch (e) {}
      }
    }

    if (tabSpeaking) {
      tabSpeaking.addEventListener("click", () => switchModule("speaking"));
    }
    if (tabListening) {
      tabListening.addEventListener("click", () => switchModule("listening"));
    }

    // Expose speakingApp controller to window
    window.speakingApp = {
      stopReading: function () {
        state.isReading = false;
        state.isPaused = false;
        if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);
        recorderController.stop();
      },
      switchModule: switchModule
    };

    // Restore last active module if user was previously in listening
    try {
      const savedModule = localStorage.getItem("active_app_module");
      if (savedModule === "listening" || window.location.hash === "#listening") {
        switchModule("listening");
      }
    } catch (e) {}

    if (elements.navWordsBtn) {
      elements.navWordsBtn.addEventListener("click", () => {
        renderSavedWordsScreen();
      });
    }

    // Prepare Screen controls
    if (elements.prepareBackBtn) {
      elements.prepareBackBtn.addEventListener("click", () => {
        renderTopicsList();
        showScreen("topics");
      });
    }

    // Prepare & Reading Screen Speed Sliders (60 - 260 WPM)
    if (elements.prepareSpeedSlider) {
      elements.prepareSpeedSlider.addEventListener("input", (e) => {
        updateSpeedUI(e.target.value);
      });
    }

    if (elements.readingSpeedSlider) {
      elements.readingSpeedSlider.addEventListener("input", (e) => {
        updateSpeedUI(e.target.value);
      });
    }

    if (elements.startReadingBtn) {
      elements.startReadingBtn.addEventListener("click", () => {
        startReadingFlow();
      });
    }

    // Reading Screen Controls
    if (elements.readingBackBtn) {
      elements.readingBackBtn.addEventListener("click", () => {
        state.isReading = false;
        if (state.scrollAnimId) cancelAnimationFrame(state.scrollAnimId);
        recorderController.stop();
        renderTopicsList();
        showScreen("topics");
      });
    }

    if (elements.readingToggleBtn) {
      elements.readingToggleBtn.addEventListener("click", () => {
        toggleReadingPause();
      });
    }

    if (elements.readingRestartBtn) {
      elements.readingRestartBtn.addEventListener("click", () => {
        restartReading();
      });
    }

    // Smooth manual adjustment via wheel or touch swipe without stopping autoscroll
    if (elements.teleprompterStage) {
      elements.teleprompterStage.addEventListener("wheel", (e) => {
        if (state.isReading) {
          applyTeleprompterOffset(state.currentScrollOffset + e.deltaY);
        }
      }, { passive: true });

      let touchStartY = 0;
      let touchStartOffset = 0;
      let isTouching = false;

      elements.teleprompterStage.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches.length > 0) {
          isTouching = true;
          touchStartY = e.touches[0].clientY;
          touchStartOffset = state.currentScrollOffset;
        }
      }, { passive: true });

      elements.teleprompterStage.addEventListener("touchmove", (e) => {
        if (!isTouching || !e.touches || e.touches.length === 0) return;
        const currentY = e.touches[0].clientY;
        const diffY = touchStartY - currentY;
        if (state.isReading) {
          applyTeleprompterOffset(touchStartOffset + diffY);
        }
      }, { passive: true });

      elements.teleprompterStage.addEventListener("touchend", () => {
        isTouching = false;
      }, { passive: true });
    }

    // Word Translation Panel Actions
    if (elements.panelListenBtn) {
      elements.panelListenBtn.addEventListener("click", () => {
        if (state.activePopoverWord) {
          audioController.speakWord(state.activePopoverWord.word);
        }
      });
    }

    if (elements.panelSaveBtn) {
      elements.panelSaveBtn.addEventListener("click", () => {
        toggleSaveCurrentWord();
      });
    }

    if (elements.panelCloseBtn) {
      elements.panelCloseBtn.addEventListener("click", () => {
        resumeReading();
      });
    }

    // Finish Screen Actions
    if (elements.finishRetryBtn) {
      elements.finishRetryBtn.addEventListener("click", () => {
        startReadingFlow();
      });
    }

    if (elements.finishNextBtn) {
      elements.finishNextBtn.addEventListener("click", () => {
        if (!state.currentTopic || !window.TOPICS) return;
        const currentIdx = window.TOPICS.findIndex((t) => t.id === state.currentTopic.id);
        const nextIdx = (currentIdx + 1) % window.TOPICS.length;
        openPrepareScreen(window.TOPICS[nextIdx]);
      });
    }

    if (elements.finishTopicsBtn) {
      elements.finishTopicsBtn.addEventListener("click", () => {
        renderTopicsList();
        showScreen("topics");
      });
    }

    // Words Screen Actions
    if (elements.wordsBackBtn) {
      elements.wordsBackBtn.addEventListener("click", () => {
        renderTopicsList();
        showScreen("topics");
      });
    }

    // Window Resize: preserve relative scroll reading progress & format text dynamically
    let resizeTimer = null;
    window.addEventListener("resize", () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (state.currentScreen === "reading" && state.targetScrollDistance > 0) {
          const progressFraction = Math.min(
            1,
            Math.max(0, state.currentScrollOffset / state.targetScrollDistance)
          );
          recalculateScrollSpeed();
          state.currentScrollOffset = progressFraction * state.targetScrollDistance;
          applyTeleprompterOffset(state.currentScrollOffset);
          if (state.isReading && !state.isPaused) {
            recalculateScrollSpeed();
          }
        }
        if (elements.wordPanel && !elements.wordPanel.classList.contains("hidden")) {
          hideWordPanel();
        }
      }, 120);
    });

    // Keyboard Shortcuts: Space (pause/resume or begin), Enter (begin on prepare), Escape (close panel)
    window.addEventListener("keydown", (e) => {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;

      if (e.code === "Space") {
        if (state.currentScreen === "reading") {
          e.preventDefault();
          toggleReadingPause();
        } else if (state.currentScreen === "prepare") {
          e.preventDefault();
          startReadingFlow();
        }
      } else if (e.code === "Enter") {
        if (state.currentScreen === "prepare") {
          e.preventDefault();
          startReadingFlow();
        }
      } else if (e.code === "Escape") {
        if (!elements.wordPanel.classList.contains("hidden")) {
          resumeReading();
        }
      }
    });

    // Close translation panel if clicked outside
    document.addEventListener("pointerdown", (e) => {
      if (
        elements.wordPanel &&
        !elements.wordPanel.classList.contains("hidden") &&
        !elements.wordPanel.contains(e.target) &&
        !e.target.classList.contains("glossary-word")
      ) {
        resumeReading();
      }
    });

    // Tab visibility change: Pause scroll if user switches tab
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && state.isReading && !state.isPaused) {
        pauseReading();
      }
    });
  }

  /* ==========================================================================
     12. INITIALIZATION
     ========================================================================== */
  function init() {
    audioController.init();
    setupEventListeners();
    updateSpeedUI(state.currentSpeed);
    renderTopicsList();
    showScreen("topics");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
