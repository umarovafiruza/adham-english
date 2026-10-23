const fs = require('fs');
const path = require('path');

const { beginnerLessons } = require('./build-beginner.js');
const { intermediateLessons } = require('./build-intermediate.js');
const { advancedLessons } = require('./build-advanced.js');

console.log('Beginner lessons:', beginnerLessons.length);
console.log('Intermediate lessons:', intermediateLessons.length);
console.log('Advanced lessons:', advancedLessons.length);

const allLessons = [...beginnerLessons, ...intermediateLessons, ...advancedLessons];
console.log('Total lessons assembled:', allLessons.length);

const levels = [
  {
    id: "beginner",
    name: "Boshlang'ich (A1-A2)",
    badge: "Beginner",
    badgeClass: "badge-beginner",
    description: "Kundalik sodda muloqotlar, aniq talaffuz, ismlar, raqamlar va orfografiya."
  },
  {
    id: "intermediate",
    name: "O'rta (B1-B2 / CEFR)",
    badge: "Intermediate",
    badgeClass: "badge-intermediate",
    description: "Sayohat, ish, xaridlar, chalg'ituvchi variantlar (distractors) va parafraza."
  },
  {
    id: "advanced",
    name: "Yuqori (C1 / IELTS Part 3-4)",
    badge: "Advanced",
    badgeClass: "badge-advanced",
    description: "Ilmiy ma'ruzalar, akademik taqdimotlar, tezkor nutq va murakkab tahlillar."
  }
];

const fileContent = `/**
 * Listening Master - Comprehensive Learning Database
 * 60 Extensive Lessons: 20 Beginner (A1-A2), 20 Intermediate (B1-B2), 20 Advanced (C1)
 * Natural scripts, vocabulary with Uzbek translations, interactive comprehension tests & distractors.
 */

const LISTENING_DATA = {
  levels: ${JSON.stringify(levels, null, 2)},

  lessons: ${JSON.stringify(allLessons, null, 2)}
};

// Browser and Node.js export compatibility
if (typeof window !== 'undefined') {
  window.LISTENING_DATA = LISTENING_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LISTENING_DATA };
}
`;

const outputPath = path.join(__dirname, 'js', 'listening', 'data.js');
fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully written 60 lessons to', outputPath);
