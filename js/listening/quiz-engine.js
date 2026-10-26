/**
 * Professional Listening Practice — Quiz Engine & Evaluation
 * Evaluates all 6 question formats (Multiple Choice, True/False, Fill in the Blank,
 * Short Answer, Matching, Ordering), calculates exact scores out of 8,
 * generates detailed mistake reviews, and persists learning progress in localStorage.
 */

class QuizEngine {
  constructor() {
    this.storageKey = "english_listening_progress_v2";
  }

  /**
   * Normalizes text for robust evaluation (handles whitespace, case, punctuation)
   */
  normalizeText(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .trim()
      .toLowerCase()
      .replace(/[\$£€]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "")
      .replace(/\s+/g, " ");
  }

  /**
   * Converts digit to word or vice-versa for common numbers 1-20
   */
  normalizeNumberEquivalents(str) {
    const norm = this.normalizeText(str);
    const numMap = {
      "1": "one", "2": "two", "3": "three", "4": "four", "5": "five",
      "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten",
      "12": "twelve", "14": "fourteen", "15": "fifteen", "20": "twenty",
      "one": "1", "two": "2", "three": "3", "four": "4", "five": "5",
      "six": "6", "seven": "7", "eight": "8", "nine": "9", "ten": "10",
      "twelve": "12", "fourteen": "14", "fifteen": "15", "twenty": "20"
    };
    return numMap[norm] || norm;
  }

  /**
   * Checks an individual question's answer against key
   */
  checkAnswer(question, userAnswer) {
    if (userAnswer === null || userAnswer === undefined || userAnswer === "") {
      return {
        isCorrect: false,
        isAnswered: false,
        userAnswer: "",
        userAnswerDisplay: "No answer provided",
        correctAnswerDisplay: this.formatCorrectAnswer(question)
      };
    }

    let isCorrect = false;
    let isAnswered = true;
    let userAnswerDisplay = "";

    switch (question.type) {
      case "multiple_choice":
      case "true_false": {
        const uStr = String(userAnswer).trim().toUpperCase();
        const cStr = String(question.correctAnswer).trim().toUpperCase();
        isCorrect = uStr === cStr;
        userAnswerDisplay = String(userAnswer);
        break;
      }

      case "fill_blank":
      case "short_answer": {
        const normUser = this.normalizeText(userAnswer);
        const normUserNum = this.normalizeNumberEquivalents(userAnswer);

        if (Array.isArray(question.correctAnswer)) {
          isCorrect = question.correctAnswer.some(ans => {
            const normAns = this.normalizeText(ans);
            const normAnsNum = this.normalizeNumberEquivalents(ans);
            return normAns === normUser || normAnsNum === normUser || normAns === normUserNum;
          });
        } else {
          const normAns = this.normalizeText(question.correctAnswer);
          isCorrect = normAns === normUser || this.normalizeNumberEquivalents(normAns) === normUser;
        }
        userAnswerDisplay = String(userAnswer).trim();
        break;
      }

      case "matching": {
        // userAnswer is an object: { itemId: selectedOption }
        if (typeof userAnswer !== "object" || userAnswer === null) {
          isCorrect = false;
          userAnswerDisplay = "Incomplete";
          break;
        }

        const keys = Object.keys(question.correctAnswer);
        let allMatched = true;
        const userSummary = [];

        keys.forEach(k => {
          const expected = String(question.correctAnswer[k]).trim().toLowerCase();
          const actual = String(userAnswer[k] || "").trim().toLowerCase();
          if (expected !== actual) {
            allMatched = false;
          }
          userSummary.push(`${k}: ${userAnswer[k] || "None"}`);
        });

        isCorrect = allMatched;
        userAnswerDisplay = userSummary.join(" | ");
        break;
      }

      case "ordering": {
        // userAnswer is an array of IDs in selected order: ["A", "B", "C", "D"]
        if (!Array.isArray(userAnswer) || userAnswer.length !== question.correctOrder.length) {
          isCorrect = false;
          userAnswerDisplay = "Incomplete sequence";
          break;
        }

        const isExactOrder = question.correctOrder.every((expectedId, idx) => {
          return expectedId === userAnswer[idx];
        });

        isCorrect = isExactOrder;
        userAnswerDisplay = userAnswer.join(" → ");
        break;
      }

      default: {
        isCorrect = this.normalizeText(userAnswer) === this.normalizeText(question.correctAnswer);
        userAnswerDisplay = String(userAnswer);
      }
    }

    return {
      isCorrect,
      isAnswered,
      userAnswer,
      userAnswerDisplay,
      correctAnswerDisplay: this.formatCorrectAnswer(question)
    };
  }

  formatCorrectAnswer(question) {
    if (question.type === "matching") {
      return Object.entries(question.correctAnswer).map(([k, v]) => `${k} → ${v}`).join(" | ");
    }
    if (question.type === "ordering") {
      return question.correctOrder.join(" → ");
    }
    if (Array.isArray(question.correctAnswer)) {
      return question.correctAnswer.join(" / ");
    }
    return String(question.correctAnswer);
  }

  /**
   * Evaluates all 8 questions of an exercise
   */
  evaluateExercise(exercise, userAnswers = {}) {
    const questions = exercise.questions || [];
    let correctCount = 0;
    let answeredCount = 0;
    const reviewDetails = [];

    questions.forEach((q, idx) => {
      const userAns = userAnswers[q.id];
      const result = this.checkAnswer(q, userAns);

      if (result.isCorrect) correctCount++;
      if (result.isAnswered) answeredCount++;

      reviewDetails.push({
        questionNumber: q.number || (idx + 1),
        questionId: q.id,
        type: q.type,
        prompt: q.prompt,
        instruction: q.instruction,
        isCorrect: result.isCorrect,
        isAnswered: result.isAnswered,
        userAnswerDisplay: result.userAnswerDisplay,
        correctAnswerDisplay: result.correctAnswerDisplay,
        explanation: q.explanation || "No explanation provided.",
        scriptEvidence: q.scriptEvidence || ""
      });
    });

    const total = questions.length;
    const incorrectCount = total - correctCount;
    const unansweredCount = total - answeredCount;
    const percentage = Math.round((correctCount / Math.max(1, total)) * 100);

    const bandInfo = this.estimateCEFRScore(percentage, exercise.cefr);

    const testSummary = {
      exerciseId: exercise.id,
      title: exercise.title,
      cefr: exercise.cefr,
      part: exercise.part,
      date: new Date().toISOString(),
      completedAt: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
      totalQuestions: total,
      correctCount,
      incorrectCount,
      unansweredCount,
      percentage,
      assessment: bandInfo.assessment,
      cefrResult: bandInfo.cefrLevel,
      bandScore: bandInfo.bandScore,
      feedback: bandInfo.feedback,
      reviewDetails
    };

    // Save to LocalStorage
    this.saveProgress(testSummary);

    return testSummary;
  }

  estimateCEFRScore(percentage, targetLevel) {
    if (percentage >= 88) {
      return {
        bandScore: "8.0 - 8.5",
        cefrLevel: targetLevel === "C1" ? "C1 Proficient" : "High " + targetLevel,
        assessment: "Outstanding Comprehension",
        feedback: "Excellent! You understood virtually every nuance, detail, and speaker perspective."
      };
    }
    if (percentage >= 75) {
      return {
        bandScore: "7.0 - 7.5",
        cefrLevel: targetLevel,
        assessment: "Strong Competence",
        feedback: "Great work! You accurately identified primary facts and key supporting details."
      };
    }
    if (percentage >= 50) {
      return {
        bandScore: "5.5 - 6.5",
        cefrLevel: targetLevel,
        assessment: "Developing Comprehension",
        feedback: "Good effort. Review the transcript evidence to master subtle vocabulary and distractors."
      };
    }
    return {
      bandScore: "4.0 - 5.0",
      cefrLevel: "A2 / B1 Needs Practice",
      assessment: "Needs Listening Practice",
      feedback: "Don't worry! Read the explanations below, listen once more with the transcript, and try again."
    };
  }

  /**
   * LocalStorage Progress Persistence
   */
  getProgress() {
    if (typeof localStorage === "undefined") {
      return { exercises: {}, history: [] };
    }
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : { exercises: {}, history: [] };
    } catch (e) {
      console.warn("Could not read listening progress from localStorage:", e);
      return { exercises: {}, history: [] };
    }
  }

  saveProgress(testSummary) {
    if (typeof localStorage === "undefined") return;
    try {
      const progress = this.getProgress();
      const exId = testSummary.exerciseId;

      // Update per-exercise summary
      const existing = progress.exercises[exId] || {};
      const bestScore = Math.max(existing.bestScore || 0, testSummary.correctCount);

      progress.exercises[exId] = {
        lastScore: testSummary.correctCount,
        bestScore: bestScore,
        totalQuestions: testSummary.totalQuestions,
        lastPercentage: testSummary.percentage,
        lastCompleted: testSummary.completedAt,
        cefr: testSummary.cefr,
        part: testSummary.part,
        title: testSummary.title
      };

      // Append to chronological history (keep last 30)
      progress.history.unshift({
        exerciseId: exId,
        title: testSummary.title,
        cefr: testSummary.cefr,
        score: `${testSummary.correctCount}/${testSummary.totalQuestions}`,
        percentage: testSummary.percentage,
        date: testSummary.completedAt
      });
      if (progress.history.length > 30) {
        progress.history.pop();
      }

      localStorage.setItem(this.storageKey, JSON.stringify(progress));
    } catch (err) {
      console.warn("Storage quota exceeded or storage unavailable:", err);
    }
  }

  getGlobalMetrics(totalAvailable = 12) {
    const progress = this.getProgress();
    const completedIds = Object.keys(progress.exercises);
    const completedCount = completedIds.length;

    if (completedCount === 0) {
      return {
        completedCount: 0,
        totalAvailable,
        averagePercentage: 0,
        bestScorePercent: 0
      };
    }

    let sumPercent = 0;
    let maxPercent = 0;

    completedIds.forEach(id => {
      const ex = progress.exercises[id];
      const p = ex.lastPercentage || 0;
      sumPercent += p;
      if (p > maxPercent) maxPercent = p;
    });

    return {
      completedCount,
      totalAvailable,
      averagePercentage: Math.round(sumPercent / completedCount),
      bestScorePercent: maxPercent
    };
  }

  clearHistory() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {}
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QuizEngine };
}
