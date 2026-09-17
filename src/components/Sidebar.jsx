import React from 'react';
import { Home, User, List, Briefcase, MessageSquare } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: List },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: MessageSquare }
];

export default function Sidebar({ activeSection, setActiveSection, isOpen, setIsOpen }) {
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 1200) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Top Header (Phone only, hidden on desktop) */}
      <header className="mobile-header">
        <div className="mobile-header-logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span>F</span>j
          </a>
        </div>

        {/* Mobile Nav Toggle Button */}
        <button
          type="button"
          className={`nav-toggler ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle Navigation Menu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
        </button>
      </header>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Aside */}
      <aside className={`aside ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span>F</span>j
          </a>
        </div>

        <ul className="nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={isActive ? 'active' : ''}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <Icon size={18} className="nav-icon" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
