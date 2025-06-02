
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen w-full">
          <Navigation />
          <main>
            <HeroSection />
            <AboutSection />
            {/* Additional sections will be added here */}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
