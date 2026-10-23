/**
 * Listening Master - Asosiy Dastur Boshqaruvchisi (App Controller)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ob'yektlarni initsializatsiya qilish
  const player = new AudioPlayerEngine();
  const quiz = new QuizEngine();

  // Holatlar (State)
  let activeLevelId = "beginner";
  let activeLesson = null;
  let userAnswers = {};
  let isEvaluated = false;

  // DOM elementlari
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const levelTabs = document.getElementById("levelTabs");
  const lessonsGrid = document.getElementById("lessonsGrid");

  // Player DOM
  const playerTitle = document.getElementById("playerTitle");
  const playerMeta = document.getElementById("playerMeta");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const speedBtns = document.querySelectorAll(".speed-btn");
  const shadowingCheckbox = document.getElementById("shadowingCheckbox");
  const waveVisualizer = document.getElementById("waveVisualizer");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const currentTimeLabel = document.getElementById("currentTimeLabel");
  const totalTimeLabel = document.getElementById("totalTimeLabel");

  // Quiz DOM
  const questionsContainer = document.getElementById("questionsContainer");
  const checkAnswersBtn = document.getElementById("checkAnswersBtn");
  const resetQuizBtn = document.getElementById("resetQuizBtn");
  const quizScoreBadge = document.getElementById("quizScoreBadge");
  const toggleExtraBtn = document.getElementById("toggleExtraBtn");

  // Extra Panels
  const extraSection = document.getElementById("extraSection");
  const transcriptList = document.getElementById("transcriptList");
  const vocabList = document.getElementById("vocabList");

  // Results Modal
  const resultsModal = document.getElementById("resultsModal");
  const modalScorePercent = document.getElementById("modalScorePercent");
  const modalCorrectCount = document.getElementById("modalCorrectCount");
  const modalBandEstimate = document.getElementById("modalBandEstimate");
  const modalFeedback = document.getElementById("modalFeedback");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalReviewBtn = document.getElementById("modalReviewBtn");

  // History Modal
  const historyBtn = document.getElementById("historyBtn");
  const historyModal = document.getElementById("historyModal");
  const historyList = document.getElementById("historyList");
  const closeHistoryBtn = document.getElementById("closeHistoryBtn");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");

  // Expose to window for cross-module coordination
  window.listeningPlayer = player;
  window.listeningQuiz = quiz;

  /* ==========================================================================
     1. Mavzuni boshqarish (Theme Switcher)
     ========================================================================== */
  if (themeToggleBtn && themeIcon) {
    const savedTheme = localStorage.getItem("lm_theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("lm_theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  /* ==========================================================================
     2. Darajalar va Darslarni render qilish
     ========================================================================== */
  function renderLevelTabs() {
    levelTabs.innerHTML = "";
    LISTENING_DATA.levels.forEach(lvl => {
      const btn = document.createElement("button");
      btn.className = `level-tab-btn ${lvl.id === activeLevelId ? 'active' : ''}`;
      btn.innerHTML = `<span>${lvl.name}</span>`;
      btn.addEventListener("click", () => {
        if (activeLevelId !== lvl.id) {
          activeLevelId = lvl.id;
          renderLevelTabs();
          renderLessons();
        }
      });
      levelTabs.appendChild(btn);
    });
  }

  function renderLessons() {
    lessonsGrid.innerHTML = "";
    const filteredLessons = LISTENING_DATA.lessons.filter(l => l.level === activeLevelId);

    filteredLessons.forEach((lesson, index) => {
      const card = document.createElement("div");
      const isSelected = activeLesson && activeLesson.id === lesson.id;
      card.className = `lesson-card ${isSelected ? 'active' : ''}`;
      card.innerHTML = `
        <div>
          <div class="lesson-card-header">
            <span class="badge ${getBadgeClass(lesson.level)}">${lesson.topic}</span>
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">${lesson.duration}</span>
          </div>
          <h3 class="lesson-title">${lesson.title}</h3>
          <p class="lesson-desc">${lesson.description}</p>
        </div>
        <div class="lesson-meta">
          <span>🗣️ ${lesson.accent}</span>
          <span>❓ ${lesson.questions.length} ta savol</span>
        </div>
      `;

      card.addEventListener("click", () => {
        selectLesson(lesson);
      });

      lessonsGrid.appendChild(card);
    });

    // Agar hech qaysi dars tanlanmagan bo'lsa, birinchisini tanlash
    if (!activeLesson || activeLesson.level !== activeLevelId) {
      if (filteredLessons.length > 0) {
        selectLesson(filteredLessons[0]);
      }
    }
  }

  function getBadgeClass(level) {
    if (level === "beginner") return "badge-beginner";
    if (level === "intermediate") return "badge-intermediate";
    return "badge-advanced";
  }

  /* ==========================================================================
     3. Darsni faollashtirish (Select Lesson)
     ========================================================================== */
  function selectLesson(lesson) {
    activeLesson = lesson;
    userAnswers = {};
    isEvaluated = false;

    // Kartochkalardagi faollik klassini yangilash
    document.querySelectorAll(".lesson-card").forEach(c => c.classList.remove("active"));
    const cards = Array.from(document.querySelectorAll(".lesson-card"));
    const matchingCard = cards.find(c => c.querySelector(".lesson-title").textContent === lesson.title);
    if (matchingCard) matchingCard.classList.add("active");

    // Player ma'lumotlarini yangilash
    playerTitle.textContent = lesson.title;
    playerMeta.textContent = `${lesson.topic} • Aksent: ${lesson.accent} • Savollar: ${lesson.questions.length} ta`;

    // Speed tugmalarini qayta sozlash
    speedBtns.forEach(b => {
      const sp = parseFloat(b.getAttribute("data-speed"));
      b.classList.toggle("active", sp === lesson.audioSpeedDefault);
    });

    // Pleyerga yuklash
    player.loadLesson(lesson);

    // Savollarni, skriptni va lug'atni render qilish
    renderQuestions(lesson);
    renderTranscript(lesson);
    renderVocabulary(lesson);

    // Savollar statusi
    quizScoreBadge.style.display = "none";
  }

  /* ==========================================================================
     4. Savollarni render qilish
     ========================================================================== */
  function renderQuestions(lesson) {
    questionsContainer.innerHTML = "";

    lesson.questions.forEach((q, idx) => {
      const qCard = document.createElement("div");
      qCard.className = "question-card";
      qCard.id = `qcard-${q.id}`;

      let inputHtml = "";

      if (q.type === "blank") {
        inputHtml = `
          <input 
            type="text" 
            class="blank-input" 
            placeholder="Javobingizni yozing..." 
            data-qid="${q.id}"
            autocomplete="off"
          />
        `;
      } else if (q.type === "multiple_choice" || q.type === "true_false_ng") {
        const options = q.options || [];
        inputHtml = `
          <div class="options-list">
            ${options.map(opt => `
              <label class="option-item">
                <input type="radio" name="radio-${q.id}" value="${opt.key}" data-qid="${q.id}">
                <span class="option-text"><strong>${opt.key})</strong> ${opt.text}</span>
              </label>
            `).join("")}
          </div>
        `;
      }

      qCard.innerHTML = `
        <div class="question-number-badge">Savol ${idx + 1}</div>
        <div class="question-prompt">${q.prompt}</div>
        ${q.instruction ? `<div class="question-instruction">${q.instruction}</div>` : ""}
        ${inputHtml}
        <div class="feedback-placeholder" id="feedback-${q.id}"></div>
      `;

      questionsContainer.appendChild(qCard);
    });

    // Listenerlarni ulash
    questionsContainer.querySelectorAll("input.blank-input").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const qid = e.target.getAttribute("data-qid");
        userAnswers[qid] = e.target.value;
      });
    });

    questionsContainer.querySelectorAll('input[type="radio"]').forEach(rad => {
      rad.addEventListener("change", (e) => {
        const qid = e.target.getAttribute("data-qid");
        userAnswers[qid] = e.target.value;
      });
    });
  }

  /* ==========================================================================
     5. Skript va Lug'atni render qilish
     ========================================================================== */
  function renderTranscript(lesson) {
    transcriptList.innerHTML = "";
    lesson.sentences.forEach((s, idx) => {
      const item = document.createElement("div");
      item.className = "transcript-sentence";
      item.id = `sentence-item-${idx}`;
      item.innerHTML = `
        <span class="transcript-speaker">${s.speaker}:</span>
        <span>${s.text}</span>
      `;
      item.addEventListener("click", () => {
        player.playSentence(idx);
        player.isPlaying = true;
        player.isPaused = false;
        player.notifyState();
      });
      transcriptList.appendChild(item);
    });
  }

  function renderVocabulary(lesson) {
    vocabList.innerHTML = "";
    lesson.vocabulary.forEach(v => {
      const item = document.createElement("div");
      item.className = "vocab-item";
      item.innerHTML = `
        <div class="vocab-word-header">
          <div>
            <span class="vocab-word">${v.word}</span>
            <span class="vocab-phonetic">${v.phonetic} • <em>${v.pos}</em></span>
          </div>
          <button class="btn btn-outline btn-icon" style="width: 2rem; height: 2rem;" title="Talaffuz qilish">🔊</button>
        </div>
        <div class="vocab-uzbek">🇺🇿 ${v.uzbek}</div>
        <div class="vocab-def">${v.definition}</div>
        <div style="font-size: 0.8rem; font-style: italic; color: var(--text-muted); margin-top: 0.2rem;">"${v.example}"</div>
      `;

      // Ovoz chiqarish tugmasi
      const speakBtn = item.querySelector("button");
      speakBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if ('speechSynthesis' in window) {
          const utt = new SpeechSynthesisUtterance(v.word);
          utt.lang = lesson.accent.includes("US") ? "en-US" : "en-GB";
          window.speechSynthesis.speak(utt);
        }
      });

      vocabList.appendChild(item);
    });
  }

  /* ==========================================================================
     6. Audio Player hodisalari (Events & Callbacks)
     ========================================================================== */
  playBtn.addEventListener("click", () => {
    player.togglePlay();
  });

  prevBtn.addEventListener("click", () => {
    player.prevSentence();
  });

  nextBtn.addEventListener("click", () => {
    player.nextSentence();
  });

  restartBtn.addEventListener("click", () => {
    player.restart();
  });

  speedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      speedBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const speed = parseFloat(btn.getAttribute("data-speed"));
      player.setRate(speed);
    });
  });

  shadowingCheckbox.addEventListener("change", (e) => {
    player.shadowingMode = e.target.checked;
  });

  progressTrack.addEventListener("click", (e) => {
    const rect = progressTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percent = (clickX / width) * 100;
    player.seekPercent(percent);
  });

  // Player holat o'zgarishi
  player.onStateChange = (state) => {
    if (state.isPlaying && !state.isPaused) {
      playBtn.textContent = "⏸";
      playBtn.title = "To'xtatib turish";
      waveVisualizer.classList.add("playing");
    } else {
      playBtn.textContent = "▶";
      playBtn.title = "Ijro etish";
      waveVisualizer.classList.remove("playing");
    }
  };

  // Jumla o'zgarishi (Sinxron ko'rsatish)
  player.onSentenceChange = (sentenceIdx, sentenceObj) => {
    document.querySelectorAll(".transcript-sentence").forEach(el => el.classList.remove("active-sentence"));
    if (sentenceIdx >= 0) {
      const activeEl = document.getElementById(`sentence-item-${sentenceIdx}`);
      if (activeEl) {
        activeEl.classList.add("active-sentence");
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };

  // Vaqt va Progress yangilanishi
  player.onProgressUpdate = (progress) => {
    currentTimeLabel.textContent = progress.currentTimeStr;
    totalTimeLabel.textContent = progress.totalTimeStr;
    progressFill.style.width = `${progress.percent}%`;
  };

  /* ==========================================================================
     7. Quiz baholash va tekshirish
     ========================================================================== */
  checkAnswersBtn.addEventListener("click", () => {
    if (!activeLesson) return;

    isEvaluated = true;
    const summary = quiz.evaluateLesson(activeLesson, userAnswers);

    // Savol kartochkalariga xatolarni belgilash
    summary.details.forEach(item => {
      const qCard = document.getElementById(`qcard-${item.questionId}`);
      const feedbackEl = document.getElementById(`feedback-${item.questionId}`);

      if (qCard && feedbackEl) {
        qCard.classList.remove("correct", "incorrect");
        qCard.classList.add(item.isCorrect ? "correct" : "incorrect");

        const statusIcon = item.isCorrect ? "✅ To'g'ri!" : "❌ Noto'g'ri";
        const answerInfo = item.isCorrect 
          ? `<strong>Sizning javobingiz:</strong> ${item.userAnswer}`
          : `<strong>Sizning javobingiz:</strong> ${item.userAnswer || "<em>(Javob berilmagan)</em>"} <br><strong>To'g'ri javob:</strong> <span style="font-weight: 700; color: #166534;">${item.correctAnswer}</span>`;

        feedbackEl.innerHTML = `
          <div class="question-feedback ${item.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
            <div>${statusIcon} ${answerInfo}</div>
            <span class="distractor-alert">💡 Izoh va Tuzoqlar tahlili:</span>
            <div>${item.explanation}</div>
            <span class="evidence-quote">🔍 Skriptdagi isboti: "${item.scriptEvidence}"</span>
          </div>
        `;
      }
    });

    // Score badge
    quizScoreBadge.style.display = "inline-flex";
    quizScoreBadge.textContent = `${summary.correctCount} / ${summary.totalQuestions} To'g'ri (${summary.percentage}%)`;
    quizScoreBadge.className = `badge ${summary.percentage >= 70 ? 'badge-beginner' : 'badge-advanced'}`;

    // Natijalar modalini ochish
    modalScorePercent.textContent = `${summary.percentage}%`;
    modalCorrectCount.textContent = `${summary.correctCount} / ${summary.totalQuestions}`;
    modalBandEstimate.textContent = `${summary.cefrLevel} (IELTS ~${summary.bandScore})`;
    modalFeedback.textContent = summary.feedbackMessage;
    resultsModal.classList.add("show");
  });

  resetQuizBtn.addEventListener("click", () => {
    if (!activeLesson) return;
    userAnswers = {};
    isEvaluated = false;
    renderQuestions(activeLesson);
    quizScoreBadge.style.display = "none";
  });

  toggleExtraBtn.addEventListener("click", () => {
    const isHidden = extraSection.style.display === "none";
    extraSection.style.display = isHidden ? "grid" : "none";
    toggleExtraBtn.querySelector("span").textContent = isHidden ? "❌ Skriptni yashirish" : "📜 Skript va Lug'atni ko'rish";
  });

  modalCloseBtn.addEventListener("click", () => {
    resultsModal.classList.remove("show");
  });

  modalReviewBtn.addEventListener("click", () => {
    resultsModal.classList.remove("show");
    // Skript va lug'atni avtomatik ochish
    extraSection.style.display = "grid";
    toggleExtraBtn.querySelector("span").textContent = "❌ Skriptni yashirish";
    questionsContainer.scrollIntoView({ behavior: "smooth" });
  });

  /* ==========================================================================
     8. Natijalar Tarixi (History)
     ========================================================================== */
  historyBtn.addEventListener("click", () => {
    renderHistory();
    historyModal.classList.add("show");
  });

  closeHistoryBtn.addEventListener("click", () => {
    historyModal.classList.remove("show");
  });

  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Rostdan ham barcha natijalar tarixini tozalamoqchimisiz?")) {
      quiz.clearHistory();
      renderHistory();
    }
  });

  function renderHistory() {
    const history = quiz.getHistory();
    historyList.innerHTML = "";

    if (history.length === 0) {
      historyList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 1.5rem;">Hozircha hech qanday test topshirilmagan.</p>`;
      return;
    }

    history.forEach(item => {
      const date = new Date(item.date).toLocaleDateString("uz-UZ", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
      const row = document.createElement("div");
      row.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; border-bottom: 1px solid var(--border-color); font-size: 0.9rem;";
      row.innerHTML = `
        <div>
          <div style="font-weight: 700;">${item.lessonTitle}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted);">${date} • Daraja: ${item.level.toUpperCase()}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; color: var(--accent-primary); font-size: 1.1rem;">${item.percentage}%</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.correctCount}/${item.totalQuestions} • ${item.cefrLevel}</div>
        </div>
      `;
      historyList.appendChild(row);
    });
  }

  // Modallarni tashqarisiga bosganda yopish
  [resultsModal, historyModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

  /* ==========================================================================
     9. Dastlabki ishga tushirish (Bootstrap)
     ========================================================================== */
  renderLevelTabs();
  renderLessons();
});
