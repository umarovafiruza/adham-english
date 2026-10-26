# English Mastery — Shadowing & Professional Listening Practice Platform

A responsive, typography-first web application designed to build English fluency and comprehension through active teleprompter practice and professional listening comprehension exercises inspired by IELTS and CEFR standards.

---

## 🌟 Modules & Features

### 1. 🎙️ Shadowing / Speaking Practice
- **22 Curated Motivational Texts (A1, A2, B1):** Emotionally resonant, conversational English addressed directly to the learner.
- **GPU Sub-pixel Continuous Teleprompter:** Hardware-accelerated `translate3d` flow calibrated for natural speech cadence (~4 words per line) with zero jitter or line/word jumps.
- **Subtle Eye Focus Guide:** Fixed horizontal focus line indicating the active reading focus zone.
- **Real-Time Speed Slider:** Bottom slider controlling reading pace from 60 to 260 WPM in real-time.
- **Voice Dictaphone:** Records the user's voice while reading; stores up to 3 audio recordings in `localStorage` with a FIFO queue (oldest audio replaced automatically).
- **Hard Words Translation:** Interactive vocabulary with tap-to-translate, native pronunciation (TTS), and local vocabulary saving.
- **Minimalist Aesthetic:** Clean white background, high contrast typography, no distractive default icons.

### 2. 🎧 Professional Listening Practice
- **6 Dedicated Practice Formats:**
  - **Part 1 — Everyday Conversations:** Daily dialogues (workshop bookings, café reservations, course inquiries).
  - **Part 2 — Monologue and Information:** Public announcements, travel guidelines, airport notices.
  - **Part 3 — Academic Discussion:** University student collaborations, thesis debates, research planning.
  - **Part 4 — Lecture or Educational Talk:** Biological sciences, cognitive neuroplasticity, nature lectures.
  - **Part 5 — Opinions and Attitudes:** Perspectives on remote work, electric vehicles in winter climates.
  - **Part 6 — Short Story and Narrative:** Personal travel narratives, missed connections, mountain adventures.
- **12 Comprehensive Initial Exercises (96 Questions):**
  - **Exactly 8 Questions per Exercise:** Multiple Choice, True/False, Fill in the Blank, Short Answer, Matching, and Chronological Ordering.
  - CEFR Level Mapping: A1, A2, B1, B2, and C1.
  - Audio Length: 30–40 seconds per exercise with natural dialogue and native intonation.
- **Professional Audio Player:**
  - High-fidelity Web Speech API synthesis prioritizing natural female voices (`en-US`, `en-GB`).
  - Interactive scrubbable progress bar with real-time seeking.
  - Replay button, volume slider, speed multipliers (0.75x, 0.9x, 1.0x, 1.25x), and pulsing waveform visualizer.
  - **Hidden Transcript Rule:** The transcript is strictly concealed during the exercise to test true listening comprehension.
- **Question Interface & Flow:**
  - 8-question step & quick-jump navigator pills with answered status indicators.
  - Confirmation modal warning if unfinished questions remain before submitting.
- **Instant Evaluation & Results Review:**
  - Detailed score (e.g. 7/8, 88%), accuracy percentage, and CEFR competence rating.
  - "Show Transcript" post-test reveal button.
  - Comprehensive question-by-question review with user answer, correct key, in-depth explanation, and direct audio script evidence quote.
- **Persistent Progress Tracking:**
  - `localStorage` tracking of completed exercises, last score, best score, and average accuracy percentage.
  - Chronological history modal.

---

## 📁 File Structure

```
├── index.html            # Unified single-page application with module switcher
├── style.css             # Main stylesheet & Shadowing teleprompter typography
├── listening.css         # Listening module styles, audio player & quiz UI
├── app.js                # Shadowing app controller & module switcher
├── data.js               # 22 Speaking topics with texts and Uzbek glossary
├── package.json          # Project configuration & test runner scripts
├── server.js             # Lightweight zero-dependency local static server
├── test-listening.js     # Automated validator testing 12 exercises & 96 questions
├── generate-12-listening-exercises.js # Generator script for 12 listening exercises
├── js/
│   └── listening/
│       ├── data.js         # 12 exercises across 6 Parts, 96 questions & scripts
│       ├── audio-player.js # Web Speech API engine & playback controller
│       ├── quiz-engine.js  # 6 question types evaluation, CEFR scoring & history
│       └── app.js          # Listening module UI coordinator & step navigation
└── assets/
    ├── intro.mp3         # "Speak fast and clear" audio prompt
    └── intro.wav         # Uncompressed fallback
```

---

## 🚀 How to Run

### Method 1: Local Server (Recommended for Audio & Microphone APIs)
```bash
npm start
# or: node server.js
```
Then navigate to `http://localhost:3000` in your browser.

### Method 2: Direct File Open
Simply open `index.html` directly in any modern web browser (Chrome, Edge, Safari, Firefox).

### Running Automated Tests
To validate all 12 listening exercises, 96 questions, and evaluation logic:
```bash
npm test
# or: node test-listening.js
```
