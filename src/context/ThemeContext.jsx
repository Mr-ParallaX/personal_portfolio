import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const THEME_COLORS = [
  { id: 'color-1', color: '#ec1839', label: 'Crimson Red' },
  { id: 'color-2', color: '#fa5b0f', label: 'Vibrant Orange' },
  { id: 'color-3', color: '#37b182', label: 'Emerald Green' },
  { id: 'color-4', color: '#1854b4', label: 'Royal Blue' },
  { id: 'color-5', color: '#f021b2', label: 'Magenta Pink' }
];

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('fj-portfolio-theme-mode');
    return saved !== null ? saved === 'dark' : false;
  });

  const [activeSkin, setActiveSkin] = useState(() => {
    const saved = localStorage.getItem('fj-portfolio-skin-color');
    return saved || '#ec1839';
  });

  useEffect(() => {
    localStorage.setItem('fj-portfolio-theme-mode', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('fj-portfolio-skin-color', activeSkin);
    document.documentElement.style.setProperty('--skin-color', activeSkin);
  }, [activeSkin]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const changeSkinColor = (color) => {
    setActiveSkin(color);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDarkMode,
        activeSkin,
        changeSkinColor,
        themeColors: THEME_COLORS
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
