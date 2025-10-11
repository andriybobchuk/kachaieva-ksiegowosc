import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import config from '../../config';

const Header = () => {
  const { t, currentLanguage, changeLanguage, availableLanguages, languageNames } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const flagEmojis = {
    pl: '🇵🇱',
    en: '🇺🇸',
    uk: '🇺🇦',
    ru: '🇷🇺'
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-privatbank-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">NK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">{config.company.name}</h1>
              <p className="text-xs text-gray-600 -mt-1">{t('hero.subtitle')}</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <a href={`tel:${config.contact.phone}`} 
               className="flex items-center space-x-2 text-privatbank-green-600 hover:text-privatbank-green-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37s-.8 3.636 3.48 7.916l2.984-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C8.61 22 2 15.39 2 8V7a2 2 0 012-2z" />
              </svg>
              <span className="font-medium">{config.contact.phone}</span>
            </a>
            
            <div className="flex items-center space-x-2">
              <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer"
                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
                WhatsApp
              </a>
              <a href={config.social.telegram} target="_blank" rel="noopener noreferrer"
                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                Telegram
              </a>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} 
                    className="text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('services')} 
                    className="text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('about')} 
                    className="text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('testimonials')} 
                    className="text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium">
              {t('nav.testimonials')}
            </button>
            <button onClick={() => scrollToSection('contact')} 
                    className="text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium">
              {t('nav.contact')}
            </button>
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-privatbank-green-600 transition-colors">
                <span className="text-lg">{flagEmojis[currentLanguage]}</span>
                <span className="hidden sm:inline text-sm font-medium">{languageNames[currentLanguage]}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                {availableLanguages.map(lang => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                      lang === currentLanguage ? 'bg-privatbank-green-50 text-privatbank-green-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{flagEmojis[lang]}</span>
                    <span>{languageNames[lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="lg:hidden text-gray-700 hover:text-privatbank-green-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('services')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.services')}
              </button>
              <button onClick={() => scrollToSection('about')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('testimonials')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.testimonials')}
              </button>
              <button onClick={() => scrollToSection('coverage')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.coverage')}
              </button>
              <button onClick={() => scrollToSection('faq')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.faq')}
              </button>
              <button onClick={() => scrollToSection('contact')} 
                      className="block w-full text-left text-gray-700 hover:text-privatbank-green-600 transition-colors font-medium py-2">
                {t('nav.contact')}
              </button>
              
              {/* Mobile Contact Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a href={`tel:${config.contact.phone}`} 
                   className="flex items-center justify-center space-x-2 bg-privatbank-green-600 text-white px-4 py-3 rounded-lg hover:bg-privatbank-green-700 transition-colors font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37s-.8 3.636 3.48 7.916l2.984-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C8.61 22 2 15.39 2 8V7a2 2 0 012-2z" />
                  </svg>
                  <span>{t('hero.cta.call')}</span>
                </a>
                
                <div className="flex space-x-3">
                  <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
                    WhatsApp
                  </a>
                  <a href={config.social.telegram} target="_blank" rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;