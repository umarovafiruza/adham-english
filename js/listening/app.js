/**
 * Professional Listening Practice — UI Coordinator
 * Controls catalog filtering, audio player controls, 8-question step & quick-jump workflow,
 * unanswered question confirmation, instant scoring, mistake review, and progress history.
 */

(function () {
  "use strict";

  // Data & Engines
  const exercises = typeof LISTENING_EXERCISES !== "undefined" ? LISTENING_EXERCISES : [];
  const parts = typeof LISTENING_PARTS !== "undefined" ? LISTENING_PARTS : [];
  const levels = typeof LISTENING_LEVELS !== "undefined" ? LISTENING_LEVELS : [];

  const player = new AudioPlayerEngine();
  const quiz = new QuizEngine();

  // Runtime State
  const state = {
    activeView: "catalog", // 'catalog' | 'exercise' | 'results'
    selectedPart: "all",
    selectedLevel: "all",
    activeExercise: null,
    currentQuestionIndex: 0, // 0 to 7
    userAnswers: {},
    currentTestSummary: null,
    isTranscriptVisible: false,
    orderingBuffers: {} // temporary buffer for ordering questions
  };

  // DOM Elements
  const elements = {
    // Views
    catalogView: document.getElementById("listeningCatalogView"),
    exerciseView: document.getElementById("listeningExerciseView"),
    resultsView: document.getElementById("listeningResultsView"),

    // Catalog UI
    statsTotalAvailable: document.getElementById("statsTotalAvailable"),
    statsCompletedCount: document.getElementById("statsCompletedCount"),
    statsAvgScore: document.getElementById("statsAvgScore"),
    partFiltersContainer: document.getElementById("partFiltersContainer"),
    levelFiltersContainer: document.getElementById("levelFiltersContainer"),
    exercisesGrid: document.getElementById("exercisesGrid"),

    // Exercise Top Bar
    exerciseBackBtn: document.getElementById("exerciseBackBtn"),
    exerciseMetaCefr: document.getElementById("exerciseMetaCefr"),
    exerciseMetaPart: document.getElementById("exerciseMetaPart"),
    exerciseMetaTitle: document.getElementById("exerciseMetaTitle"),

    // Player UI
    playerCard: document.getElementById("listeningPlayerCard"),
    playerTitle: document.getElementById("playerTitle"),
    playerMeta: document.getElementById("playerMeta"),
    playBtn: document.getElementById("playBtn"),
    replayBtn: document.getElementById("replayBtn"),
    progressTrack: document.getElementById("progressTrack"),
    progressFill: document.getElementById("progressFill"),
    currentTimeLabel: document.getElementById("currentTimeLabel"),
    totalTimeLabel: document.getElementById("totalTimeLabel"),
    speedBtns: document.querySelectorAll(".speed-btn"),
    volumeSlider: document.getElementById("volumeSlider"),

    // Question Workspace
    questionPillsContainer: document.getElementById("questionPillsContainer"),
    activeQuestionCard: document.getElementById("activeQuestionCard"),
    quizPrevBtn: document.getElementById("quizPrevBtn"),
    quizNextBtn: document.getElementById("quizNextBtn"),
    quizFinishBtn: document.getElementById("quizFinishBtn"),

    // Results UI
    resultsScoreBig: document.getElementById("resultsScoreBig"),
    resultsPercentKicker: document.getElementById("resultsPercentKicker"),
    resultsAssessmentBadge: document.getElementById("resultsAssessmentBadge"),
    resultsFeedbackText: document.getElementById("resultsFeedbackText"),
    resStatCorrect: document.getElementById("resStatCorrect"),
    resStatIncorrect: document.getElementById("resStatIncorrect"),
    resStatUnanswered: document.getElementById("resStatUnanswered"),
    toggleTranscriptBtn: document.getElementById("toggleTranscriptBtn"),
    transcriptPanel: document.getElementById("transcriptPanel"),
    transcriptTextContent: document.getElementById("transcriptTextContent"),
    reviewQuestionsContainer: document.getElementById("reviewQuestionsContainer"),
    resTryAgainBtn: document.getElementById("resTryAgainBtn"),
    resNextExBtn: document.getElementById("resNextExBtn"),
    resCatalogBtn: document.getElementById("resCatalogBtn"),

    // Modals
    unansweredModal: document.getElementById("unansweredModal"),
    unansweredCountSpan: document.getElementById("unansweredCountSpan"),
    modalReviewQuestionsBtn: document.getElementById("modalReviewQuestionsBtn"),
    modalSubmitAnywayBtn: document.getElementById("modalSubmitAnywayBtn"),

    historyModal: document.getElementById("listeningHistoryModal"),
    listeningHistoryBtn: document.getElementById("listeningHistoryBtn"),
    closeHistoryBtn: document.getElementById("closeHistoryBtn"),
    clearHistoryBtn: document.getElementById("clearHistoryBtn"),
    historyItemsList: document.getElementById("historyItemsList"),
    listeningCompletedCount: document.getElementById("listeningCompletedCount")
  };

  // Expose to window for cross-module coordination
  window.listeningPlayer = player;
  window.listeningQuiz = quiz;

  /* ==========================================================================
     1. INITIALIZATION & ROUTING
     ========================================================================== */
  function init() {
    setupPlayerEventListeners();
    setupCatalogEventListeners();
    setupQuestionNavigationListeners();
    setupResultsEventListeners();
    setupModalEventListeners();

    renderCatalog();
    showView("catalog");
  }

  function showView(viewName) {
    state.activeView = viewName;
    if (elements.catalogView) elements.catalogView.classList.toggle("hidden", viewName !== "catalog");
    if (elements.exerciseView) elements.exerciseView.classList.toggle("hidden", viewName !== "exercise");
    if (elements.resultsView) elements.resultsView.classList.toggle("hidden", viewName !== "results");
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  /* ==========================================================================
     2. CATALOG RENDERING & FILTERING
     ========================================================================== */
  function renderCatalog() {
    renderStatsBanner();
    renderPartFilters();
    renderLevelFilters();
    renderExerciseCards();
  }

  function renderStatsBanner() {
    const metrics = quiz.getGlobalMetrics(exercises.length);
    if (elements.statsTotalAvailable) elements.statsTotalAvailable.textContent = metrics.totalAvailable;
    if (elements.statsCompletedCount) elements.statsCompletedCount.textContent = metrics.completedCount;
    if (elements.statsAvgScore) elements.statsAvgScore.textContent = metrics.completedCount > 0 ? `${metrics.averagePercentage}%` : "—";
    if (elements.listeningCompletedCount) elements.listeningCompletedCount.textContent = metrics.completedCount;
  }

  function renderPartFilters() {
    if (!elements.partFiltersContainer) return;
    elements.partFiltersContainer.innerHTML = "";

    parts.forEach(part => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `filter-pill ${state.selectedPart === part.id ? "active" : ""}`;
      btn.textContent = part.name;
      btn.addEventListener("click", () => {
        state.selectedPart = part.id;
        renderPartFilters();
        renderExerciseCards();
      });
      elements.partFiltersContainer.appendChild(btn);
    });
  }

  function renderLevelFilters() {
    if (!elements.levelFiltersContainer) return;
    elements.levelFiltersContainer.innerHTML = "";

    levels.forEach(lvl => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `filter-pill ${state.selectedLevel === lvl.id ? "active" : ""}`;
      btn.textContent = lvl.name;
      btn.addEventListener("click", () => {
        state.selectedLevel = lvl.id;
        renderLevelFilters();
        renderExerciseCards();
      });
      elements.levelFiltersContainer.appendChild(btn);
    });
  }

  function renderExerciseCards() {
    if (!elements.exercisesGrid) return;
    elements.exercisesGrid.innerHTML = "";

    const progress = quiz.getProgress();

    const filtered = exercises.filter(ex => {
      const matchesPart = state.selectedPart === "all" || String(ex.partNumber) === state.selectedPart;
      const matchesLevel = state.selectedLevel === "all" || ex.cefr.toUpperCase().includes(state.selectedLevel.toUpperCase());
      return matchesPart && matchesLevel;
    });

    if (filtered.length === 0) {
      elements.exercisesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: #737373;">
          <p style="font-size: 15px;">No exercises match the selected filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(ex => {
      const card = document.createElement("div");
      card.className = "exercise-card";

      const exProgress = progress.exercises[ex.id];
      let statusHtml = `<span class="exercise-action-link">Start Exercise &rarr;</span>`;
      if (exProgress) {
        statusHtml = `<span class="exercise-card-status">Score: ${exProgress.lastScore}/${exProgress.totalQuestions} (${exProgress.lastPercentage}%)</span>`;
      }

      const cefrClass = (ex.cefr || "b1").toLowerCase().split("/")[0];

      card.innerHTML = `
        <div>
          <div class="exercise-card-meta">
            <span class="cefr-badge ${cefrClass}">${ex.cefr}</span>
            <span class="part-tag">${ex.part.split("—")[0].trim()}</span>
          </div>
          <h3 class="exercise-card-title">${escapeHtml(ex.title)}</h3>
          <p class="exercise-card-desc">${escapeHtml(ex.description)}</p>
        </div>
        <div class="exercise-card-footer">
          <span class="exercise-duration">⏱ ${ex.duration} &middot; 8 Questions</span>
          ${statusHtml}
        </div>
      `;

      card.addEventListener("click", () => {
        startExercise(ex);
      });

      elements.exercisesGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     3. EXERCISE SESSION LIFECYCLE
     ========================================================================== */
  function startExercise(exercise) {
    state.activeExercise = exercise;
    state.currentQuestionIndex = 0;
    state.userAnswers = {};
    state.orderingBuffers = {};
    state.isTranscriptVisible = false;

    // Load into audio engine
    player.loadExercise(exercise);

    // Update Player UI
    if (elements.playerTitle) elements.playerTitle.textContent = exercise.title;
    if (elements.playerMeta) elements.playerMeta.textContent = `${exercise.cefr} · ${exercise.part} · ${exercise.accent}`;
    if (elements.exerciseMetaTitle) elements.exerciseMetaTitle.textContent = exercise.title;
    if (elements.exerciseMetaCefr) {
      elements.exerciseMetaCefr.textContent = exercise.cefr;
      elements.exerciseMetaCefr.className = `cefr-badge ${exercise.cefr.toLowerCase().split("/")[0]}`;
    }
    if (elements.exerciseMetaPart) elements.exerciseMetaPart.textContent = exercise.part;

    // Initialize ordering question buffer if any
    exercise.questions.forEach(q => {
      if (q.type === "ordering" && q.items) {
        state.orderingBuffers[q.id] = q.items.map(it => it.id);
        state.userAnswers[q.id] = [...state.orderingBuffers[q.id]];
      }
    });

    renderQuestionPills();
    renderActiveQuestion();
    showView("exercise");
  }

  /* ==========================================================================
     4. AUDIO PLAYER EVENT LISTENERS
     ========================================================================== */
  function setupPlayerEventListeners() {
    // Play/Pause
    if (elements.playBtn) {
      elements.playBtn.addEventListener("click", () => {
        player.togglePlay();
      });
    }

    // Replay
    if (elements.replayBtn) {
      elements.replayBtn.addEventListener("click", () => {
        player.replay();
      });
    }

    // State changes
    player.onStateChange = (pState) => {
      if (!elements.playerCard) return;
      elements.playerCard.classList.toggle("is-playing", pState === "playing");
      if (elements.playBtn) {
        elements.playBtn.textContent = pState === "playing" ? "Pause" : "Play";
      }
    };

    // Timeline updates
    player.onTimeUpdate = (current, total, percent) => {
      if (elements.currentTimeLabel) elements.currentTimeLabel.textContent = formatTime(current);
      if (elements.totalTimeLabel) elements.totalTimeLabel.textContent = formatTime(total);
      if (elements.progressFill) elements.progressFill.style.width = `${percent}%`;
    };

    // Seeking on progress track
    if (elements.progressTrack) {
      const handleSeek = (e) => {
        const rect = elements.progressTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(1, clickX / rect.width));
        player.seekToPercent(percent);
      };

      elements.progressTrack.addEventListener("click", handleSeek);
    }

    // Speed buttons
    if (elements.speedBtns) {
      elements.speedBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          elements.speedBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const sp = parseFloat(btn.dataset.speed) || 1.0;
          player.setRate(sp);
        });
      });
    }

    // Volume Slider
    if (elements.volumeSlider) {
      elements.volumeSlider.addEventListener("input", (e) => {
        player.setVolume(e.target.value);
      });
    }
  }

  /* ==========================================================================
     5. 8-QUESTION WORKSPACE & STEP NAVIGATION
     ========================================================================== */
  function renderQuestionPills() {
    if (!elements.questionPillsContainer || !state.activeExercise) return;
    elements.questionPillsContainer.innerHTML = "";

    const questions = state.activeExercise.questions || [];

    questions.forEach((q, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      const isAnswered = isQuestionAnswered(q);
      const isActive = idx === state.currentQuestionIndex;

      pill.className = `q-step-pill ${isActive ? "active" : ""} ${isAnswered ? "answered" : ""}`;
      pill.textContent = idx + 1;
      pill.title = `Question ${idx + 1}`;

      pill.addEventListener("click", () => {
        state.currentQuestionIndex = idx;
        renderQuestionPills();
        renderActiveQuestion();
      });

      elements.questionPillsContainer.appendChild(pill);
    });
  }

  function isQuestionAnswered(q) {
    const val = state.userAnswers[q.id];
    if (val === undefined || val === null || val === "") return false;
    if (q.type === "matching") {
      if (typeof val !== "object") return false;
      return Object.keys(val).length > 0 && Object.values(val).some(v => v !== "");
    }
    return true;
  }

  function renderActiveQuestion() {
    if (!elements.activeQuestionCard || !state.activeExercise) return;
    const questions = state.activeExercise.questions;
    const q = questions[state.currentQuestionIndex];
    if (!q) return;

    // Update bottom nav buttons
    if (elements.quizPrevBtn) {
      elements.quizPrevBtn.disabled = state.currentQuestionIndex === 0;
    }
    if (elements.quizNextBtn) {
      elements.quizNextBtn.textContent = state.currentQuestionIndex === questions.length - 1 ? "Finish Test" : "Next →";
    }

    const typeLabels = {
      multiple_choice: "Multiple Choice",
      true_false: "True / False",
      fill_blank: "Fill in the Blank",
      short_answer: "Short Answer",
      matching: "Matching",
      ordering: "Chronological Ordering"
    };

    let inputHtml = "";

    switch (q.type) {
      case "multiple_choice": {
        const currentAns = state.userAnswers[q.id];
        inputHtml = `
          <div class="mc-options-list">
            ${q.options.map(opt => `
              <div class="mc-option-label ${currentAns === opt.key ? "selected" : ""}" data-key="${opt.key}">
                <span class="mc-option-key">${opt.key}</span>
                <span class="mc-option-text">${escapeHtml(opt.text)}</span>
              </div>
            `).join("")}
          </div>
        `;
        break;
      }

      case "true_false": {
        const currentAns = state.userAnswers[q.id];
        inputHtml = `
          <div class="tf-options-group">
            <button type="button" class="tf-btn ${currentAns === "True" ? "selected" : ""}" data-val="True">True</button>
            <button type="button" class="tf-btn ${currentAns === "False" ? "selected" : ""}" data-val="False">False</button>
          </div>
        `;
        break;
      }

      case "fill_blank":
      case "short_answer": {
        const currentAns = state.userAnswers[q.id] || "";
        inputHtml = `
          <div style="margin-top: 8px;">
            <input type="text" class="text-answer-input" id="qTextInput"
              placeholder="${q.type === 'fill_blank' ? 'Type the missing word(s)...' : 'Type your concise answer...'}"
              value="${escapeHtml(currentAns)}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
          </div>
        `;
        break;
      }

      case "matching": {
        const currentMatches = state.userAnswers[q.id] || {};
        inputHtml = `
          <div class="matching-items-list">
            ${q.items.map(item => `
              <div class="matching-row">
                <span class="matching-item-label">${escapeHtml(item.label)}</span>
                <select class="matching-select" data-item-id="${item.id}">
                  <option value="">Select match...</option>
                  ${q.options.map(opt => `
                    <option value="${escapeHtml(opt)}" ${currentMatches[item.id] === opt ? "selected" : ""}>
                      ${escapeHtml(opt)}
                    </option>
                  `).join("")}
                </select>
              </div>
            `).join("")}
          </div>
        `;
        break;
      }

      case "ordering": {
        const currentOrder = state.orderingBuffers[q.id] || q.items.map(i => i.id);
        const itemMap = {};
        q.items.forEach(i => itemMap[i.id] = i.text);

        inputHtml = `
          <div class="ordering-items-list">
            ${currentOrder.map((itemId, idx) => `
              <div class="ordering-row">
                <span class="ordering-order-num">${idx + 1}.</span>
                <span class="ordering-text">${escapeHtml(itemMap[itemId] || itemId)}</span>
                <div class="ordering-buttons">
                  <button type="button" class="order-btn" data-action="up" data-idx="${idx}" ${idx === 0 ? "disabled" : ""}>▲</button>
                  <button type="button" class="order-btn" data-action="down" data-idx="${idx}" ${idx === currentOrder.length - 1 ? "disabled" : ""}>▼</button>
                </div>
              </div>
            `).join("")}
          </div>
        `;
        break;
      }
    }

    elements.activeQuestionCard.innerHTML = `
      <div class="question-kicker">Question ${state.currentQuestionIndex + 1} of 8 &middot; ${typeLabels[q.type] || "Question"}</div>
      <h3 class="question-prompt">${escapeHtml(q.prompt)}</h3>
      <p class="question-instruction">${escapeHtml(q.instruction || "")}</p>
      <div id="questionInputArea">${inputHtml}</div>
    `;

    // Attach dynamic input listeners
    attachQuestionInputListeners(q);
  }

  function attachQuestionInputListeners(q) {
    // Multiple Choice
    if (q.type === "multiple_choice") {
      const labels = elements.activeQuestionCard.querySelectorAll(".mc-option-label");
      labels.forEach(lbl => {
        lbl.addEventListener("click", () => {
          labels.forEach(l => l.classList.remove("selected"));
          lbl.classList.add("selected");
          state.userAnswers[q.id] = lbl.dataset.key;
          renderQuestionPills();
        });
      });
    }

    // True/False
    if (q.type === "true_false") {
      const btns = elements.activeQuestionCard.querySelectorAll(".tf-btn");
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          btns.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          state.userAnswers[q.id] = btn.dataset.val;
          renderQuestionPills();
        });
      });
    }

    // Text inputs (Fill blank & Short answer)
    if (q.type === "fill_blank" || q.type === "short_answer") {
      const input = document.getElementById("qTextInput");
      if (input) {
        input.addEventListener("input", (e) => {
          state.userAnswers[q.id] = e.target.value;
          renderQuestionPills();
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleNextClick();
          }
        });
      }
    }

    // Matching selects
    if (q.type === "matching") {
      const selects = elements.activeQuestionCard.querySelectorAll(".matching-select");
      selects.forEach(sel => {
        sel.addEventListener("change", () => {
          if (!state.userAnswers[q.id]) state.userAnswers[q.id] = {};
          state.userAnswers[q.id][sel.dataset.itemId] = sel.value;
          renderQuestionPills();
        });
      });
    }

    // Ordering buttons
    if (q.type === "ordering") {
      const orderBtns = elements.activeQuestionCard.querySelectorAll(".order-btn");
      orderBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const action = btn.dataset.action;
          const idx = parseInt(btn.dataset.idx, 10);
          const order = state.orderingBuffers[q.id];

          if (action === "up" && idx > 0) {
            const temp = order[idx - 1];
            order[idx - 1] = order[idx];
            order[idx] = temp;
          } else if (action === "down" && idx < order.length - 1) {
            const temp = order[idx + 1];
            order[idx + 1] = order[idx];
            order[idx] = temp;
          }

          state.userAnswers[q.id] = [...order];
          renderActiveQuestion();
          renderQuestionPills();
        });
      });
    }
  }

  function handleNextClick() {
    const total = state.activeExercise.questions.length;
    if (state.currentQuestionIndex < total - 1) {
      state.currentQuestionIndex++;
      renderQuestionPills();
      renderActiveQuestion();
    } else {
      handleFinishAttempt();
    }
  }

  function setupQuestionNavigationListeners() {
    if (elements.quizPrevBtn) {
      elements.quizPrevBtn.addEventListener("click", () => {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex--;
          renderQuestionPills();
          renderActiveQuestion();
        }
      });
    }

    if (elements.quizNextBtn) {
      elements.quizNextBtn.addEventListener("click", () => {
        handleNextClick();
      });
    }

    if (elements.quizFinishBtn) {
      elements.quizFinishBtn.addEventListener("click", () => {
        handleFinishAttempt();
      });
    }

    if (elements.exerciseBackBtn) {
      elements.exerciseBackBtn.addEventListener("click", () => {
        player.stop();
        renderCatalog();
        showView("catalog");
      });
    }
  }

  /* ==========================================================================
     6. UNANSWERED WARNING & TEST SUBMISSION
     ========================================================================== */
  function handleFinishAttempt() {
    if (!state.activeExercise) return;
    const questions = state.activeExercise.questions;

    let unansweredCount = 0;
    let firstUnansweredIdx = -1;

    questions.forEach((q, idx) => {
      if (!isQuestionAnswered(q)) {
        unansweredCount++;
        if (firstUnansweredIdx === -1) firstUnansweredIdx = idx;
      }
    });

    if (unansweredCount > 0) {
      // Show confirmation modal
      if (elements.unansweredCountSpan) {
        elements.unansweredCountSpan.textContent = unansweredCount;
      }
      if (elements.unansweredModal) {
        elements.unansweredModal.classList.remove("hidden");
      }
    } else {
      executeSubmission();
    }
  }

  function executeSubmission() {
    player.stop();
    const summary = quiz.evaluateExercise(state.activeExercise, state.userAnswers);
    state.currentTestSummary = summary;
    renderResults(summary);
    showView("results");
  }

  function setupModalEventListeners() {
    if (elements.modalReviewQuestionsBtn) {
      elements.modalReviewQuestionsBtn.addEventListener("click", () => {
        if (elements.unansweredModal) elements.unansweredModal.classList.add("hidden");
        // Focus on first unanswered question
        const questions = state.activeExercise.questions;
        const firstUnanswered = questions.findIndex(q => !isQuestionAnswered(q));
        if (firstUnanswered !== -1) {
          state.currentQuestionIndex = firstUnanswered;
          renderQuestionPills();
          renderActiveQuestion();
        }
      });
    }

    if (elements.modalSubmitAnywayBtn) {
      elements.modalSubmitAnywayBtn.addEventListener("click", () => {
        if (elements.unansweredModal) elements.unansweredModal.classList.add("hidden");
        executeSubmission();
      });
    }

    // History Modal
    if (elements.listeningHistoryBtn) {
      elements.listeningHistoryBtn.addEventListener("click", () => {
        renderHistoryModal();
        if (elements.historyModal) elements.historyModal.classList.remove("hidden");
      });
    }

    if (elements.closeHistoryBtn) {
      elements.closeHistoryBtn.addEventListener("click", () => {
        if (elements.historyModal) elements.historyModal.classList.add("hidden");
      });
    }

    if (elements.clearHistoryBtn) {
      elements.clearHistoryBtn.addEventListener("click", () => {
        if (confirm("Clear all listening progress history?")) {
          quiz.clearHistory();
          renderHistoryModal();
          renderCatalog();
        }
      });
    }
  }

  /* ==========================================================================
     7. RESULTS & REVIEW VIEW
     ========================================================================== */
  function renderResults(summary) {
    if (elements.resultsScoreBig) elements.resultsScoreBig.textContent = `${summary.correctCount} / ${summary.totalQuestions}`;
    if (elements.resultsPercentKicker) elements.resultsPercentKicker.textContent = `${summary.percentage}% Accuracy`;
    if (elements.resultsAssessmentBadge) elements.resultsAssessmentBadge.textContent = summary.assessment;
    if (elements.resultsFeedbackText) elements.resultsFeedbackText.textContent = summary.feedback;

    if (elements.resStatCorrect) elements.resStatCorrect.textContent = summary.correctCount;
    if (elements.resStatIncorrect) elements.resStatIncorrect.textContent = summary.incorrectCount;
    if (elements.resStatUnanswered) elements.resStatUnanswered.textContent = summary.unansweredCount;

    // Transcript setup (hidden by default)
    state.isTranscriptVisible = false;
    if (elements.transcriptPanel) elements.transcriptPanel.classList.add("hidden");
    if (elements.toggleTranscriptBtn) elements.toggleTranscriptBtn.textContent = "Show Transcript";
    if (elements.transcriptTextContent && state.activeExercise) {
      elements.transcriptTextContent.textContent = state.activeExercise.script;
    }

    // Render detailed review cards for all 8 questions
    renderReviewCards(summary.reviewDetails);
  }

  function renderReviewCards(details = []) {
    if (!elements.reviewQuestionsContainer) return;
    elements.reviewQuestionsContainer.innerHTML = "";

    details.forEach(item => {
      const card = document.createElement("div");
      card.className = `review-card ${item.isCorrect ? "correct" : "incorrect"}`;

      card.innerHTML = `
        <div class="review-card-top">
          <span style="font-size: 12px; font-weight: 600; color: #737373;">Question ${item.questionNumber}</span>
          <span class="review-status-tag">${item.isCorrect ? "✓ Correct" : (item.isAnswered ? "✕ Incorrect" : "— Unanswered")}</span>
        </div>
        <h4 class="review-prompt">${escapeHtml(item.prompt)}</h4>
        <div class="review-answers-compare">
          <div class="user-ans-row">
            <strong>Your answer:</strong> ${escapeHtml(item.userAnswerDisplay || "None")}
          </div>
          ${!item.isCorrect ? `
            <div class="correct-ans-row">
              <strong>Correct answer:</strong> ${escapeHtml(item.correctAnswerDisplay)}
            </div>
          ` : ""}
        </div>
        <p class="review-explanation">${escapeHtml(item.explanation)}</p>
        ${item.scriptEvidence ? `
          <div class="review-evidence-box">
            <span class="review-evidence-lbl">Audio Evidence:</span> "${escapeHtml(item.scriptEvidence)}"
          </div>
        ` : ""}
      `;

      elements.reviewQuestionsContainer.appendChild(card);
    });
  }

  function setupResultsEventListeners() {
    // Toggle Transcript
    if (elements.toggleTranscriptBtn) {
      elements.toggleTranscriptBtn.addEventListener("click", () => {
        state.isTranscriptVisible = !state.isTranscriptVisible;
        if (elements.transcriptPanel) {
          elements.transcriptPanel.classList.toggle("hidden", !state.isTranscriptVisible);
        }
        elements.toggleTranscriptBtn.textContent = state.isTranscriptVisible ? "Hide Transcript" : "Show Transcript";
      });
    }

    // Try Again
    if (elements.resTryAgainBtn) {
      elements.resTryAgainBtn.addEventListener("click", () => {
        if (state.activeExercise) {
          startExercise(state.activeExercise);
        }
      });
    }

    // Next Exercise
    if (elements.resNextExBtn) {
      elements.resNextExBtn.addEventListener("click", () => {
        if (!state.activeExercise) return;
        const currentIdx = exercises.findIndex(e => e.id === state.activeExercise.id);
        const nextIdx = (currentIdx + 1) % exercises.length;
        startExercise(exercises[nextIdx]);
      });
    }

    // Back to Catalog
    if (elements.resCatalogBtn) {
      elements.resCatalogBtn.addEventListener("click", () => {
        renderCatalog();
        showView("catalog");
      });
    }
  }

  /* ==========================================================================
     8. HISTORY MODAL RENDERING
     ========================================================================== */
  function renderHistoryModal() {
    if (!elements.historyItemsList) return;
    const progress = quiz.getProgress();
    const history = progress.history || [];

    if (history.length === 0) {
      elements.historyItemsList.innerHTML = `
        <div style="text-align: center; padding: 24px 0; color: #737373; font-size: 13px;">
          No listening tests completed yet. Complete an exercise to track your progress!
        </div>
      `;
      return;
    }

    elements.historyItemsList.innerHTML = history.map(item => `
      <div class="history-item-row">
        <div>
          <div style="font-weight: 600; color: #0A0A0A;">${escapeHtml(item.title)}</div>
          <div style="font-size: 11px; color: #737373;">${item.cefr} &middot; ${item.date}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; color: ${item.percentage >= 75 ? '#16A34A' : '#0B3BFF'};">${item.score}</div>
          <div style="font-size: 11px; color: #737373;">${item.percentage}%</div>
        </div>
      </div>
    `).join("");
  }

  /* ==========================================================================
     UTILITIES
     ========================================================================== */
  function formatTime(totalSec) {
    const s = Math.max(0, Math.floor(totalSec || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Self-start on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
