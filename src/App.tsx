import { useState } from 'react';
import './App.css';

import { Header } from './components/Layout/Header';
import { ControlsSection } from './components/Controls/ControlsSection';
import { HeroSection } from './components/Hero/HeroSection';

import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { NAVIGATION_ITEMS } from './constants/navigation';
import { AboutSection } from './components/About/AboutSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { ContactSection } from './components/Contact/ContactSection';
import { Footer } from './components/Layout/Footer';

function App() {
  const { isPortuguese, switchToPortuguese, switchToEnglish } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [navigationItems, setNavigationItems] = useState(NAVIGATION_ITEMS);

  const handleNavigationClick = (id: string) => {
    setNavigationItems(prev => 
      prev.map(item => ({
        ...item,
        isActive: item.id === id
      }))
    );

    // Smooth scroll to section
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-[#141E46] overflow-x-hidden">
      <Header
        navigationItems={navigationItems}
        onNavigationClick={handleNavigationClick}
        isDarkTheme={isDark}
        onThemeToggle={toggleTheme}
        isPortuguese={isPortuguese}
        onSwitchToPortuguese={switchToPortuguese}
        onSwitchToEnglish={switchToEnglish}
      />

      <hr className="hr border-[#182751] bg-[#182751] h-[4px] sm:h-[6px] md:h-[8px]" />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero Section - Responsive padding */}
        <section id="hero" className="py-4 px-4 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:px-20 2xl:px-[80px] flex flex-col">
          <ControlsSection
            isDarkTheme={isDark}
            onThemeToggle={toggleTheme}
            isPortuguese={isPortuguese}
            onSwitchToPortuguese={switchToPortuguese}
            onSwitchToEnglish={switchToEnglish}
          />
          <HeroSection isPortuguese={isPortuguese} />
        </section>

        {/* About Section - Responsive spacing */}
        <AboutSection
          id="about" 
          isPortuguese={isPortuguese} 
        />

        {/* Skills Section - Responsive spacing */}
        <SkillsSection 
          id="skills" 
          isPortuguese={isPortuguese} 
        />

        {/* Projects Section - Responsive spacing */}
        <ProjectsSection 
          id="projects" 
          isPortuguese={isPortuguese} 
        />

        {/* Contact Section - Responsive spacing */}
        <ContactSection 
          id="contacts" 
          isPortuguese={isPortuguese} 
        />
      </main>

      <Footer isPortuguese={isPortuguese} />
    </div>
  );
}

export default App;
