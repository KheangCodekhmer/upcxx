
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const HeroSection = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-700 dark:text-gray-300">AC</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
          </div>

          {/* Greeting and Name */}
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              {t('hero.greeting')}
            </p>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('hero.name')}
            </h1>
            <p className={`text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('hero.title')}
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <h2 className={`text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('hero.tagline')}
            </h2>
            <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed ${
              language === 'kh' ? 'font-battambang' : ''
            }`}>
              {t('hero.subtitle')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta.projects')}
            </Button>
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              {t('hero.cta.about')}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@alexchen.dev"
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="w-8 h-8 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center justify-center hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <ArrowDown className="h-4 w-4 text-gray-400 dark:text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
