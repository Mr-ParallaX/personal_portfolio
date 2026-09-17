import React, { useState, useEffect, useRef } from 'react';
import { Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function StyleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleDarkMode, activeSkin, changeSkinColor, themeColors } = useTheme();
  const switcherRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    const handleClickOutside = (e) => {
      if (switcherRef.current && !switcherRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={switcherRef} className={`style-switcher ${isOpen ? 'open' : ''}`}>
      {/* Toggler button with spinning gear */}
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Theme"
        aria-label="Customize Theme"
      >
        <Settings size={20} className="spin-icon" />
      </div>

      {/* Day / Night mode toggle */}
      <div
        className="day-night s-icon"
        onClick={toggleDarkMode}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </div>

      <h4>Theme Colors</h4>
      <div className="colors">
        {themeColors.map((colorObj) => (
          <span
            key={colorObj.id}
            className={`color-item ${colorObj.id} ${activeSkin === colorObj.color ? 'active-color' : ''}`}
            style={{ backgroundColor: colorObj.color }}
            title={colorObj.label}
            onClick={() => changeSkinColor(colorObj.color)}
          />
        ))}
      </div>
    </div>
  );
}
