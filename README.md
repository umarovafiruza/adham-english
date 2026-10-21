# adham-english — Read Aloud English Speaking Practice

A responsive, typography-first teleprompter website designed to build English fluency and speaking confidence through read-aloud practice.

## Features
- **10 Curated Motivational Texts (A1, A2, B1):** Emotionally resonant, conversational English speaking directly to the user.
- **Auto-Scrolling Teleprompter:** Smooth `requestAnimationFrame` teleprompter flow, calibrated for natural speech cadence (~4 words per line).
- **Subtle Eye Focus Guide:** A fixed horizontal focus line indicating the active reading focus zone.
- **Adjustable Speed Bar:** Bottom slider controlling speed from 60 to 260 WPM in real-time.
- **Voice Recording (Dictaphone):** Automatically records the user's voice while reading; saves up to 3 recordings in `localStorage` using a FIFO queue (oldest recording is replaced automatically).
- **Hard Words Translation:** Interactive glossary words with tap-to-translate, pronunciation (TTS), and local vocabulary saving.
- **Soft Lo-Fi Background Music:** Ambient background music that fades in automatically when reading starts.
- **Strict Minimalist Design:** High-contrast monochrome palette (#FFFFFF, #0A0A0A) with electric blue (#0B3BFF) accents. Zero icons, zero boxy borders, pure typography.
- **Fully Responsive:** Tested across large monitors, laptops, tablets, and mobile phones down to 320px with relative progress preservation on window resize.

## File Structure
```
├── index.html     # Semantic single-page application structure
├── style.css      # Pure CSS3 styles and responsive breakpoints
├── app.js         # Modular JavaScript (State, Teleprompter, Audio, Recorder)
├── data.js        # 10 Topics with texts and Uzbek glossary translations
├── assets/
│   ├── lofi.mp3   # Lo-fi background track
│   └── intro.mp3  # Audio prompt fallback
└── README.md
```

## How to Run
Open `index.html` in any modern web browser. No server or build process required.
