# Faizan Jamkhandi - React Portfolio

A modern, responsive, and interactive developer portfolio built with **React 19** and **Vite**, converted faithfully from the original HTML/CSS/JS portfolio.

## ✨ Features & Enhancements

- **⚡ Modern React Architecture**: Component-driven structure with hooks and clean state management.
- **🎨 Theme & Color Switcher**:
  - Light & Dark mode toggle (with `localStorage` persistence).
  - 5 customizable skin colors (Crimson Red, Vibrant Orange, Emerald Green, Royal Blue, Magenta Pink).
  - Floating animated gear toggle with auto-close on backdrop/scroll.
- **💼 Interactive Portfolio Showcase**:
  - Integrated 6 featured projects with images (`p1.png` - `p6.png`).
  - Category filters: *All*, *Web Development*, *Cybersecurity*, *Python & Algorithms*, *Creative & Animation*.
  - Rich **Project Detail Modal** displaying overview, live project links, and full key highlights.
- **✍️ Dynamic Typing Hero**: Pure React typewriter effect smoothly cycling through personal titles without third-party runtime bloat.
- **📄 Resume Integration**: Direct download button linked to `/resume/FaizanJamkhandi_Resume.pdf`.
- **📊 Skills & Timelines**: Animated skill progress bars, structured education history (MCC, S.M. Shetty, Sunrise) and project experience.
- **📬 Interactive Contact Section**: Contact cards (Call, Location, Email, Website) and a functional Web3Forms contact form with loading state and user feedback.
- **📱 Fully Responsive**: Custom mobile drawer navigation and fluid grid layout adapting from 4K down to mobile devices.

---

## 🚀 Projects Included

| # | Project | Category | Live URL | Image |
|---|---|---|---|---|
| 1 | **Netlify Clone — Frontend** | Web Development | [Live Demo](https://projectcloning.netlify.app/) | `/images/portfolio/p1.png` |
| 2 | **DSA Shooting Game** | Python & Algorithms | Python / Algorithmic Game | `/images/portfolio/p2.png` |
| 3 | **Mr. Freelancer — Freelancing Platform** | Web Development | [Live Demo](https://mr-freelancer.netlify.app/) | `/images/portfolio/p3.png` |
| 4 | **Fubo — Digital Notemaker** | Web Development | [Live Demo](https://fubo.netlify.app/) | `/images/portfolio/p4.png` |
| 5 | **ThreatMap — Cybersecurity Visualization** | Cybersecurity | [Live Demo](https://threat-map-test.vercel.app/) | `/images/portfolio/p5.png` |
| 6 | **ScrollBase — Scroll Effect Website** | Creative & Animation | [Live Demo](https://fjxsony.vercel.app/) | `/images/portfolio/p6.png` |

---

## 🛠️ How to Run Locally

1. Navigate to the `react-portfolio` directory:
   ```bash
   cd react-portfolio
   ```

2. Dependencies are already installed! If you ever need to reinstall:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```
   The production build will be output to the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📂 Project Structure

```
react-portfolio/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── images/
│   │   ├── pro.png
│   │   ├── goku.png
│   │   └── portfolio/
│   │       ├── p1.png
│   │       ├── p2.png
│   │       ├── p3.png
│   │       ├── p4.png
│   │       ├── p5.png
│   │       └── p6.png
│   └── resume/
│       └── FaizanJamkhandi_Resume.pdf
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── HomeSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ContactSection.jsx
│   │   └── StyleSwitcher.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── projectsData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```
