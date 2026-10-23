# English Mastery — Speaking & Listening Practice Platform

A responsive, typography-first web application designed to build English fluency and comprehension through active read-aloud practice and interactive audio listening comprehension.

---

## 🌟 Modules & Features

### 1. Speaking Practice (English Aloud)
- **22 Curated Motivational Texts (A1, A2, B1):** Emotionally resonant, conversational English addressed directly to the learner.
- **Auto-Scrolling Teleprompter:** 60fps `requestAnimationFrame` teleprompter flow calibrated for natural speech cadence (~4 words per line).
- **Subtle Eye Focus Guide:** Fixed horizontal focus line indicating the active reading focus zone.
- **Adjustable Speed Bar:** Bottom slider controlling reading speed from 60 to 260 WPM in real-time.
- **Voice Dictaphone:** Records the user's voice while reading; stores up to 3 audio recordings in `localStorage` with a FIFO queue (oldest audio replaced automatically).
- **Hard Words Translation:** Interactive vocabulary with tap-to-translate, native pronunciation (TTS), and local vocabulary saving.
- **Minimalist Aesthetic:** Clean white background, high contrast typography, no distractive default icons.

### 2. 🎧 Listening Practice (Listening Master)
- **3 CEFR Levels:** Beginner (A1–A2), Intermediate (B1–B2), and Advanced (C1 / Academic).
- **60 Comprehensive Lessons (20 per level):**
  - **Beginner (20 lessons):** Daily dialogues (café, airport, library, hotel, taxi, train, etc.).
  - **Intermediate (20 lessons):** Work meetings, job interviews, eco-parks, travel, tech reviews, and discussions.
  - **Advanced (20 lessons):** Academic lectures (neurobiology, quantum computing, climate, AI labor economics, CRISPR).
- **Natural Voice Synthesis:** Web Speech API audio synthesis with native accents (`en-GB`, `en-US`), speech rate control (0.75x, 0.9x, 1.0x, 1.25x), and audio waveform visualization.
- **Shadowing Mode:** Sentence-by-sentence playback allowing learners to listen and shadow immediately.
- **Interactive Quiz Engine:** Fill-in-the-blank and multiple-choice questions with intelligent text normalization, instant evaluation, and distractor analysis.
- **Audio-Script & Vocabulary:** Clickable sentence transcripts for synchronized audio seeking, and key terms with Uzbek definitions and pronunciation.
- **Evaluation & History:** CEFR & IELTS band score estimation, mistake review modal, and persistent results history.

---

## 📁 File Structure

```
├── index.html            # Unified single-page application with module switcher
├── style.css             # Main stylesheet & Speaking practice typography
├── listening.css         # Listening module styles, audio player & quiz UI
├── app.js                # Speaking app controller & module switcher
├── data.js               # 22 Speaking topics with texts and Uzbek glossary
├── package.json          # Project configuration & test runner scripts
├── test-listening.js     # Automated validator for listening tests & distractors
├── build-beginner.js     # 20 Beginner lessons generator
├── build-intermediate.js # 20 Intermediate lessons generator
├── build-advanced.js     # 20 Advanced lessons generator
├── assemble-listening-data.js # Listening data compiler
├── js/
│   └── listening/
│       ├── data.js         # 3 levels, 60 lessons, 77+ questions & transcripts
│       ├── audio-player.js # Web Speech API engine & playback controller
│       ├── quiz-engine.js  # Answer evaluation, CEFR estimation & history
│       └── app.js          # Listening module UI coordinator
└── assets/
    ├── intro.mp3         # "Speak fast and clear" audio prompt
    └── intro.wav         # Uncompressed fallback
```

---

## 🚀 How to Run

1. Simply open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox).
2. No build step, no npm install, and no backend server required.

### Running Automated Tests
To validate all 60 listening lessons, quiz questions, and fuzzy-matching logic:
```bash
node test-listening.js
```
