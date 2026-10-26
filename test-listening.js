const fs = require('fs');
const path = require('path');
const http = require('http');
const { LISTENING_EXERCISES, LISTENING_PARTS, LISTENING_LEVELS } = require('./js/listening/data.js');
const { QuizEngine } = require('./js/listening/quiz-engine.js');
const { AudioPlayerEngine } = require('./js/listening/audio-player.js');

console.log("=== PROFESSIONAL LISTENING PRACTICE AUTOMATED TEST ===");
console.log("Parts count:", LISTENING_PARTS.length);
console.log("Levels count:", LISTENING_LEVELS.length);
console.log("Exercises count:", LISTENING_EXERCISES.length);

if (LISTENING_EXERCISES.length < 12) {
  console.error("FAIL: Expected at least 12 exercises, found " + LISTENING_EXERCISES.length);
  process.exit(1);
}

const quiz = new QuizEngine();
const player = new AudioPlayerEngine();
let totalQuestions = 0;

// Test Audio Player initialization
if (typeof player.loadExercise !== 'function' || typeof player.seekToPercent !== 'function') {
  console.error("FAIL: AudioPlayerEngine interface check failed.");
  process.exit(1);
}
console.log("OK: AudioPlayerEngine loaded successfully.");

// Test Voice Previews on disk
const previewUsPath = path.join(__dirname, 'assets/audio/listening/preview-us.mp3');
const previewUkPath = path.join(__dirname, 'assets/audio/listening/preview-uk.mp3');
if (!fs.existsSync(previewUsPath) || fs.statSync(previewUsPath).size < 1000) {
  console.error("FAIL: preview-us.mp3 missing or invalid.");
  process.exit(1);
}
if (!fs.existsSync(previewUkPath) || fs.statSync(previewUkPath).size < 1000) {
  console.error("FAIL: preview-uk.mp3 missing or invalid.");
  process.exit(1);
}
console.log("OK: Voice preview audio assets verified on disk.");

LISTENING_EXERCISES.forEach((ex, exIdx) => {
  console.log(`[Exercise ${exIdx + 1}/12] ${ex.title} (${ex.cefr} - ${ex.part})`);

  // Check 8 questions requirement
  if (ex.questions.length !== 8) {
    console.error(`FAIL: Exercise ${ex.id} must have exactly 8 questions, got ${ex.questions.length}`);
    process.exit(1);
  }
  totalQuestions += ex.questions.length;

  // Check audioUrl and file existence
  if (!ex.audioUrl) {
    console.error(`FAIL: Exercise ${ex.id} is missing audioUrl property.`);
    process.exit(1);
  }
  const audioFilePath = path.join(__dirname, ex.audioUrl);
  if (!fs.existsSync(audioFilePath)) {
    console.error(`FAIL: Audio file not found on disk: ${audioFilePath}`);
    process.exit(1);
  }
  const fileSize = fs.statSync(audioFilePath).size;
  if (fileSize < 10000) {
    console.error(`FAIL: Audio file ${audioFilePath} is abnormally small (${fileSize} bytes).`);
    process.exit(1);
  }

  // Test player load
  player.loadExercise(ex);
  if (player.currentExercise.id !== ex.id) {
    console.error(`FAIL: Player load failed for ${ex.id}`);
    process.exit(1);
  }

  // Test 1: Full correct answers
  const correctAnswers = {};
  ex.questions.forEach(q => {
    if (q.type === "matching") {
      correctAnswers[q.id] = { ...q.correctAnswer };
    } else if (q.type === "ordering") {
      correctAnswers[q.id] = [...q.correctOrder];
    } else if (Array.isArray(q.correctAnswer)) {
      correctAnswers[q.id] = q.correctAnswer[0];
    } else {
      correctAnswers[q.id] = q.correctAnswer;
    }
  });

  const fullResult = quiz.evaluateExercise(ex, correctAnswers);
  if (fullResult.percentage !== 100 || fullResult.correctCount !== 8) {
    console.error(`FAIL: 100% test for ${ex.id}, expected 8/8 (100%), got ${fullResult.correctCount}/8 (${fullResult.percentage}%)`);
    process.exit(1);
  }

  // Test 2: Incomplete / zero answers
  const emptyResult = quiz.evaluateExercise(ex, {});
  if (emptyResult.correctCount !== 0 || emptyResult.unansweredCount !== 8) {
    console.error(`FAIL: Empty test for ${ex.id}, expected 0/8, got ${emptyResult.correctCount}/8`);
    process.exit(1);
  }

  // Test 3: Fuzzy / whitespace & case robustness
  const fuzzyAnswers = {};
  ex.questions.forEach(q => {
    if (q.type === "fill_blank" || q.type === "short_answer") {
      const raw = Array.isArray(q.correctAnswer) ? q.correctAnswer[0] : q.correctAnswer;
      fuzzyAnswers[q.id] = "   " + raw.toUpperCase() + "   ";
    } else if (q.type === "multiple_choice" || q.type === "true_false") {
      fuzzyAnswers[q.id] = String(q.correctAnswer).toLowerCase();
    } else if (q.type === "matching") {
      fuzzyAnswers[q.id] = { ...q.correctAnswer };
    } else if (q.type === "ordering") {
      fuzzyAnswers[q.id] = [...q.correctOrder];
    }
  });

  const fuzzyResult = quiz.evaluateExercise(ex, fuzzyAnswers);
  if (fuzzyResult.correctCount !== 8) {
    console.error(`FAIL: Fuzzy answer test for ${ex.id}, got ${fuzzyResult.correctCount}/8`);
    process.exit(1);
  }

  // Test 4: Check explanation and script evidence
  ex.questions.forEach(q => {
    if (!q.explanation || !q.scriptEvidence) {
      console.error(`FAIL: Missing explanation or scriptEvidence in question ${q.id} of ${ex.id}`);
      process.exit(1);
    }
  });
});

console.log(`\nSUCCESS: All ${LISTENING_EXERCISES.length} exercises, all ${totalQuestions} questions, and all neural audio files passed 100% validation!`);
