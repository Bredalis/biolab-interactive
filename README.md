# 🧬 biolab-interactive

> Learn Cell Biology interactively, visually, and enjoyably.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✨ Features

### 🔬 Explorer Mode
- **Interactive SVG cell** with realistic organelles and gradients
- **Animal/Plant toggle** - switch between cell types (cell wall, chloroplasts, central vacuole)
- **Detailed organelle information** - function, structure, fun facts, and memory cards
- **Progress tracking** - monitors which organelles you've explored

### 🎮 Quiz Mode (20 Questions)
- **20 questions** organized by categories: Organelles, Membrane, Transport, Cytoskeleton, Cell Types
- **Scoring system** with streak bonus points
- **Topic filtering** - practice only what you need to review
- **Immediate feedback** with educational explanations
- **Final results** with medals and badges

### 🏗️ Builder Mode
- **Build your own cell** by adding organelles one by one
- **Realistic visuals** - each organelle has its own shape, color, and details (mitochondrial cristae, ribosomes on RER, etc.)
- **Hint system** to guide users
- **Celebration upon completion**

### ⚖️ Compare Mode
- **Comparative table** of Prokaryotic vs. Eukaryotic cells
- **SVG visualization** of relative sizes
- **11 characteristics** compared point by point

---

## 📚 Topics Covered

| Topic | Content |
|-------|---------|
| 🧠 **Nucleus** | Nuclear envelope, chromatin, nucleolus |
| ⚡ **Mitochondria** | Double membrane, cristae, mitochondrial DNA |
| 🏭 **Ribosomes** | Subunits, rRNA, protein synthesis |
| 🕸️ **Rough ER** | Attached ribosomes, protein synthesis |
| 🧈 **Smooth ER** | Lipids, detoxification, calcium storage |
| 📦 **Golgi Apparatus** | Cisternae, vesicles, packaging |
| 🛡️ **Plasma Membrane** | Fluid mosaic, phospholipids, proteins |
| 🦴 **Cytoskeleton** | Microfilaments, intermediate filaments, microtubules |
| 🚛 **Cellular Transport** | Passive, active transport, endo/exocytosis |
| 🌿 **Chloroplast** | Photosynthesis, thylakoids, chlorophyll |
| 🦠 **Prokaryote vs. Eukaryote** | Structural and functional differences |

---

## 🚀 Installation & Usage

### Option 1: Download and open locally

```bash
# Clone the repository
git clone https://github.com/Bredalis/biolab-interactive.git

# Enter the directory
cd biolab-interactive

# Open in browser (macOS)
open index.html

# Or on Linux
xdg-open index.html

# Or on Windows
start index.html
```

### Option 2: Local server (recommended)

```bash
# With Python 3
cd biolab-interactive
python -m http.server 8000

# Visit http://localhost:8000
```

```bash
# With Node.js
npx serve .

# With PHP
php -S localhost:8000
```

### Option 3: Deploy to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Select the `main` branch and `/ (root)` folder
4. Your app will be at `https://Bredalis.github.io/biolab-interactive/`

### Option 4: Deploy to Netlify/Vercel

```bash
# Drag the folder to https://app.netlify.com/drop
# Or use Vercel CLI:
npx vercel --prod
```

---

## 📁 Project Structure

```
biolab-interactive/
├── index.html          # Main page (semantic HTML)
├── styles.css          # Complete styles (modern CSS with variables)
├── app.js              # Application logic (vanilla JS)
├── assets/             # Images and additional resources
├── README.md           # This file
└── LICENSE             # MIT License
```

---

## 🛠️ Technologies

- **HTML5** — Semantic structure and interactive SVG
- **CSS3** — CSS Variables, Grid, Flexbox, animations, responsive design
- **JavaScript (ES6+)** — Vanilla JS, no external dependencies
- **SVG** — Scalable vector graphics with gradients and animations
- **Google Fonts** — Nunito typeface for readability

---

## 🎯 Roadmap

- [ ] Flashcard study mode (Anki-style cards)
- [ ] Vesicular transport animations (RER → Golgi → membrane)
- [ ] "Day in the life of a cell" simulation
- [ ] Multilingual support (English, Portuguese)
- [ ] PWA (Progressive Web App) for mobile installation
- [ ] AR mode with WebXR for 3D cell visualization

---


## ✨ Product update: retention + analytics

BioLab now includes a lightweight product layer designed for repeat usage while keeping the learning experience free:

- 🧬 **Daily Challenge** — one deterministic challenge per day.
- ⚡ **Persistent XP** — progress survives page reloads via `localStorage`.
- 🔥 **Learning streak** — tracks consecutive active days locally.
- 🏆 **Quiz history** — records completed quizzes and correct answers locally.
- 🔬 **Explorer rewards** — first-time organelle discoveries grant XP.
- 🏗️ **Builder reward** — completing the cell grants XP once.
- 📊 **Analytics-ready integration** — optional GoatCounter support for aggregate visitor/pageview and event measurement.
- 🔐 **No account required** — the learning progress is stored locally in the browser.

### Measuring visitors

The app is prepared for [GoatCounter](https://www.goatcounter.com/), an open-source, privacy-friendly analytics service that currently offers a free hosted service for reasonable public usage. It can report pageviews and unique visits without requiring persistent user identifiers. 

1. Create a GoatCounter site.
2. Copy the site code from your GoatCounter address. For example, if the dashboard is `YOURCODE.goatcounter.com`, the code is `YOURCODE`.
3. In `index.html`, change:

```html
<script>window.BIOLAB_ANALYTICS_CODE = "";</script>
```

to:

```html
<script>window.BIOLAB_ANALYTICS_CODE = "YOURCODE";</script>
```

The application will then load GoatCounter and record pageviews plus selected product events. The visitor statistics are available in the GoatCounter dashboard.

The analytics integration is optional: BioLab works normally when the code is left blank.


## 🤝 Contributing

Contributions are welcome! If you find a bug or have an idea:

1. **Fork** the repository
2. Create a **branch** (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -am 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. Open a **Pull Request**

---

## 📜 License

This project is licensed under the **MIT License**. You may use, modify, and distribute it freely for educational purposes.

```
MIT License

Copyright (c) 2026 biolab-interactive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 💜 Acknowledgments

Made with love for biology students around the world. 🌸

> *"The cell is the unit of life, and understanding it is understanding ourselves."*

---

⭐ **If you like this project, give it a star on GitHub!**

---

## 🏷️ GitHub Topics

Add these to your repository's "Topics" section:
`biology`, `education`, `interactive`, `svg`, `javascript`, `cell-biology`, `organelles`, `quiz`, `learning`, `html5`, `css3`, `science`, `students`, `elearning`, `biology-education`


## 🧪 Product features

The current version includes a lightweight retention loop designed to keep BioLab free and accountless:

- 🧬 Daily Challenge
- ⚡ Persistent XP and learning streak
- 🏆 Quiz and exploration progress
- 🧪 Scientific Missions with decision-based cases
- 💾 Local progress persistence with `localStorage`
- 📊 Optional privacy-friendly GoatCounter analytics
- 📱 Responsive interface for mobile and desktop

### Product direction

BioLab is evolving from an interactive reference into a small learning game: **Explore → Decide → Practice → Earn XP → Return**.
