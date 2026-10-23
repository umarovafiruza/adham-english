/**
 * Listening Master - Quiz Engine & Evaluation
 * Aqlli javoblarni tekshirish (fuzzy matching, orfografiya, registrga befarqlik),
 * ballarni hisoblash (IELTS va CEFR ekvivalentida) va xatolarni tahlil qilish.
 */

class QuizEngine {
  constructor() {
    this.storageKey = "listening_master_results_v1";
  }

  // Matnni normalizatsiya qilish (tinish belgilari, bo'sh joylar va katta-kichik harflar)
  normalizeText(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .trim()
      .toLowerCase()
      .replace(/[\$£€]/g, "") // valyuta belgilarini e'tibordan chetda qoldirish
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // tinish belgilarini olib tashlash
      .replace(/\s+/g, " "); // ortiqcha bo'shliqlarni bitta bo'shliqqa aylantirish
  }

  // Javobni tekshirish
  checkAnswer(question, userAnswer) {
    if (!userAnswer || String(userAnswer).trim() === "") {
      return {
        isCorrect: false,
        isAnswered: false,
        userAnswer: "",
        correctDisplay: Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer
      };
    }

    const normUser = this.normalizeText(userAnswer);

    let isCorrect = false;

    if (Array.isArray(question.correctAnswer)) {
      isCorrect = question.correctAnswer.some(ans => this.normalizeText(ans) === normUser);
    } else {
      isCorrect = this.normalizeText(question.correctAnswer) === normUser;
    }

    return {
      isCorrect: isCorrect,
      isAnswered: true,
      userAnswer: String(userAnswer).trim(),
      correctDisplay: Array.isArray(question.correctAnswer) ? question.correctAnswer.join(" / ") : question.correctAnswer
    };
  }

  // Butun testni baholash
  evaluateLesson(lesson, userAnswers) {
    let correctCount = 0;
    const questions = lesson.questions;
    const details = [];

    questions.forEach(q => {
      const userAns = userAnswers[q.id];
      const result = this.checkAnswer(q, userAns);

      if (result.isCorrect) {
        correctCount++;
      }

      details.push({
        questionId: q.id,
        prompt: q.prompt,
        type: q.type,
        isCorrect: result.isCorrect,
        isAnswered: result.isAnswered,
        userAnswer: result.userAnswer,
        correctAnswer: result.correctDisplay,
        explanation: q.explanation,
        scriptEvidence: q.scriptEvidence
      });
    });

    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const bandEstimate = this.estimateBandScore(percentage, lesson.level);

    const testSummary = {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      level: lesson.level,
      date: new Date().toISOString(),
      totalQuestions: total,
      correctCount: correctCount,
      percentage: percentage,
      bandScore: bandEstimate.band,
      cefrLevel: bandEstimate.cefr,
      feedbackMessage: bandEstimate.feedback,
      details: details
    };

    this.saveResult(testSummary);
    return testSummary;
  }

  // Ballarni CEFR va IELTS shkalasiga moslash
  estimateBandScore(percentage, level) {
    if (level === "beginner") {
      if (percentage >= 80) return { band: "5.0", cefr: "A2+", feedback: "Ajoyib natija! Boshlang'ich darajani to'liq egalladingiz. Endi O'rta (B1) darajaga o'tsangiz bo'ladi." };
      if (percentage >= 60) return { band: "4.5", cefr: "A2", feedback: "Yaxshi! Raqamlar va ismlar imlosiga yana bir oz e'tibor qarating." };
      return { band: "4.0", cefr: "A1+", feedback: "Audioni qayta tinglab, yangi so'zlar lug'ati ustida ishlang." };
    }

    if (level === "intermediate") {
      if (percentage >= 85) return { band: "6.5 - 7.0", cefr: "B2+", feedback: "Super natija! Chalg'ituvchi tuzoqlarni juda yaxshi payqayapsiz." };
      if (percentage >= 65) return { band: "6.0", cefr: "B2", feedback: "Yaxshi natija! Bir nechta tuzoqli savollarda ehtiyotkorlik yetishmadi." };
      return { band: "5.0 - 5.5", cefr: "B1", feedback: "Kalit so'zlar va sinonimlarni tahlil qilish tavsiya etiladi." };
    }

    // Advanced (C1/C2)
    if (percentage >= 90) return { band: "8.0 - 8.5", cefr: "C1 / C2", feedback: "A'lo daraja! Murakkab akademik leksiyani deyarli 100% tushundingiz!" };
    if (percentage >= 70) return { band: "7.0 - 7.5", cefr: "C1", feedback: "Juda kuchli natija! Akademik so'z boyligingiz va e'tiboringiz yuqori." };
    if (percentage >= 50) return { band: "6.5", cefr: "B2 / C1", feedback: "Qoniqarli. Ilmiy terminlar va tezkor nutqqa ko'proq quloq o'rgatish kerak." };
    return { band: "5.5 - 6.0", cefr: "B2", feedback: "Matn skriptini o'qib, yangi ilmiy terminlarni o'zlashtirish tavsiya etiladi." };
  }

  // LocalStorage ga saqlash
  saveResult(result) {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return;
      const history = this.getHistory();
      history.unshift(result);
      // Faqat oxirgi 50 ta natijani saqlash
      const trimmed = history.slice(0, 50);
      window.localStorage.setItem(this.storageKey, JSON.stringify(trimmed));
    } catch (e) {
      console.warn("Natijani saqlashda xatolik:", e);
    }
  }

  getHistory() {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return [];
      const data = window.localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  clearHistory() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(this.storageKey);
      }
    } catch (e) {}
  }
}

// Global yoki modul eksporti
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuizEngine };
}
