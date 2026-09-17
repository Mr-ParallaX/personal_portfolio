import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail } from 'lucide-react';

const TYPED_STRINGS = [
  "Creative Designer",
  "Computer Science undergraduate",
  "Web Developer",
  "Prompt Engineer",
  "Video Editor",
  "PPT Maker"
];

// GitHub SVG Icon
const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// LinkedIn SVG Icon
const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// X (Twitter) SVG Icon
const XIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function HomeSection({ onNavigateToAbout, onNavigateToPortfolio }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPED_STRINGS[currentStringIndex];
    let timer;

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex]);

  return (
    <section className="home active section" id="home">
      <div className="container">
        
        {/* ===================================================
            DESKTOP HOME VIEW (PC ONLY - COMPLETELY UNCHANGED)
            =================================================== */}
        <div className="home-desktop-view">
          <div className="row align-center">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is <span className="name">Faizan Jamkhandi</span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing">{currentText}</span>
                <span className="cursor-blink">|</span>
              </h3>
              <p>
                Dynamic Computer Science undergraduate with a foundation in multi-language
                programming, database management, and modern web application development.
              </p>
              <div className="home-actions">
                <a
                  href="/resume/FaizanJamkhandi_Resume.pdf"
                  download="FaizanJamkhandi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn download-btn"
                >
                  <Download size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="home-img padd-15">
              <img src="/images/goku.png" alt="Faizan Jamkhandi" />
            </div>
          </div>
        </div>

        {/* ===================================================
            MOBILE HOME VIEW (PHONE RESPONSIVE ONLY - FROM REFERENCE)
            =================================================== */}
        <div className="home-mobile-view">
          {/* Circular Goku Avatar with orbital accent ring */}
          <div className="mobile-avatar-container">
            <div className="mobile-orbit-ring"></div>
            <div className="mobile-avatar-frame">
              <img
                src="/images/goku.png"
                alt="Faizan Jamkhandi"
                className="mobile-avatar-img"
              />
            </div>
          </div>

          {/* Availability Badge */}
          <div className="mobile-status-badge">
            <span className="mobile-status-dot"></span>
            <span>Available for freelance</span>
          </div>

          {/* Heading with styled First & Last name */}
          <h1 className="mobile-name">
            <span className="mobile-first-name">Faizan</span>
            <span className="mobile-last-name">Jamkhandi</span>
          </h1>

          {/* Subtitle / Role with dynamic typing */}
          <h2 className="mobile-role">
            <span className="mobile-role-prefix">I'm a </span>
            <span className="typing">{currentText}</span>
            <span className="cursor-blink">|</span>
          </h2>

          {/* Bio text */}
          <p className="mobile-bio">
            Dynamic Computer Science undergraduate with a foundation in multi-language programming,
            database management, and creative design — building things that matter, one pixel at a time.
          </p>

          {/* Action buttons: See My Work & Resume */}
          <div className="mobile-actions-row">
            <button
              type="button"
              className="mobile-work-btn"
              onClick={onNavigateToPortfolio}
            >
              <span>See My Work</span>
              <ArrowRight size={17} />
            </button>

            <a
              href="/resume/FaizanJamkhandi_Resume.pdf"
              download="FaizanJamkhandi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume-pill"
            >
              <Download size={17} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div className="mobile-socials-row">
            {/* Direct Mail */}
            <a
              href="mailto:faizanjamkhandi@gmail.com"
              className="mobile-social-icon-btn"
              title="Email Faizan directly (faizanjamkhandi@gmail.com)"
              aria-label="Send direct email"
            >
              <Mail size={20} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Mr-ParallaX"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon-btn"
              title="GitHub Profile"
              aria-label="Visit GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/faizan-jamkhandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon-btn"
              title="LinkedIn Profile"
              aria-label="Visit LinkedIn Profile"
            >
              <LinkedinIcon size={20} />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-social-icon-btn"
              title="X Profile"
              aria-label="Visit X Profile"
            >
              <XIcon size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
