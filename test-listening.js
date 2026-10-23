const { LISTENING_DATA } = require('./js/listening/data.js');
const { QuizEngine } = require('./js/listening/quiz-engine.js');

console.log("=== LISTENING MASTER AUTOMATED TEST ===");
console.log("Levels count:", LISTENING_DATA.levels.length);
console.log("Lessons count:", LISTENING_DATA.lessons.length);

const quiz = new QuizEngine();

let totalQuestions = 0;
LISTENING_DATA.lessons.forEach(lesson => {
  console.log("Checking lesson: " + lesson.title + " [" + lesson.level + "] - " + lesson.questions.length + " questions");
  totalQuestions += lesson.questions.length;

  // Test 1: Full correct answers
  const correctAnswers = {};
  lesson.questions.forEach(q => {
    correctAnswers[q.id] = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
  });

  const fullResult = quiz.evaluateLesson(lesson, correctAnswers);
  if (fullResult.percentage !== 100) {
    console.error("FAILED 100% test for " + lesson.id + ", got " + fullResult.percentage + "%");
    process.exit(1);
  }

  // Test 2: Fuzzy / case-insensitive check
  const fuzzyAnswers = {};
  lesson.questions.forEach(q => {
    const raw = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
    fuzzyAnswers[q.id] = "  " + raw.toUpperCase() + "  ";
  });

  const fuzzyResult = quiz.evaluateLesson(lesson, fuzzyAnswers);
  if (fuzzyResult.percentage !== 100) {
    console.error("FAILED fuzzy test for " + lesson.id + ", got " + fuzzyResult.percentage + "%");
    process.exit(1);
  }

  // Test 3: Distractor / explanations exist
  lesson.questions.forEach(q => {
    if (!q.explanation || !q.scriptEvidence) {
      console.error("Missing explanation or scriptEvidence in question: " + q.id);
      process.exit(1);
    }
  });
});

console.log("SUCCESS: All " + totalQuestions + " questions across all levels passed 100% validation!");
