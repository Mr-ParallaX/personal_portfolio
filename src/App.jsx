import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StyleSwitcher from './components/StyleSwitcher';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    if (window.innerWidth < 1200) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="main-container">
      {/* Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {activeSection === 'home' && (
          <HomeSection
            onNavigateToAbout={() => handleNavigate('about')}
            onNavigateToPortfolio={() => handleNavigate('portfolio')}
          />
        )}
        {activeSection === 'about' && (
          <AboutSection onNavigateToContact={() => handleNavigate('contact')} />
        )}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'portfolio' && <PortfolioSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Floating Theme and Color Switcher */}
      <StyleSwitcher />
    </div>
  );
}
