import React, { useState, useEffect } from 'react';
import { translations } from './translations';

function App() {
  // Detect browser language
  const detectLanguage = () => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) return 'pl';
    if (browserLang.startsWith('uk')) return 'ua';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('en')) return 'en';
    return 'pl'; // Default to Polish
  };

  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || detectLanguage();
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const t = translations[currentLang];

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  // Modern JetBrains-inspired color system
  const colors = {
    primary: {
      50: '#f0fdf7',
      100: '#dcfce9',
      500: '#02C385',
      600: '#029b6c',
      700: '#027a54'
    },
    secondary: {
      50: '#f4f3ff',
      100: '#ebe9fe',
      500: '#4502C3',
      600: '#3702a3',
      700: '#2d0283'
    },
    light: {
      bg: '#ffffff',
      bgSecondary: '#f8fafc',
      bgTertiary: '#f1f5f9',
      text: '#0f172a',
      textSecondary: '#475569',
      textMuted: '#64748b',
      border: '#e2e8f0',
      borderLight: '#f1f5f9'
    },
    dark: {
      bg: '#0f0f23',
      bgSecondary: '#1a1a2e',
      bgTertiary: '#25253d',
      text: '#ffffff',
      textSecondary: '#d1d5db',
      textMuted: '#9ca3af',
      border: '#374151',
      borderLight: '#4b5563'
    }
  };

  const theme = isDarkMode ? colors.dark : colors.light;

  const styles = {
    body: {
      margin: 0,
      fontFamily: "'JetBrains Mono', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace",
      lineHeight: 1.6,
      color: theme.text,
      background: theme.bg,
      transition: 'background-color 0.3s ease, color 0.3s ease'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      background: theme.bg,
      color: theme.text,
      padding: '0.75rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${theme.border}`,
      transition: 'all 0.3s ease'
    },
    hero: {
      background: theme.bg,
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '700',
      color: theme.text,
      marginBottom: '1rem',
      lineHeight: 1.1,
      letterSpacing: '-0.025em'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
      color: theme.textSecondary,
      fontWeight: '500',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    tag: {
      background: theme.bgTertiary,
      color: theme.textMuted,
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: `1px solid ${theme.border}`,
      fontSize: '0.875rem',
      fontWeight: '500',
      display: 'inline-block',
      margin: '0.25rem',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.2s ease'
    },
    button: {
      background: colors.primary[500],
      color: 'white',
      padding: '1rem 2.5rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontSize: '1.125rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      textDecoration: 'none',
      margin: '0.5rem',
      boxShadow: '0 4px 12px rgba(2, 195, 133, 0.3)',
      transform: 'translateY(0)'
    },
    buttonSecondary: {
      background: theme.bgTertiary,
      color: theme.text,
      border: `1px solid ${theme.border}`,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      textDecoration: 'none',
      margin: '0.5rem',
      backdropFilter: 'blur(10px)'
    },
    card: {
      background: theme.bgSecondary,
      borderRadius: '1rem',
      padding: '2rem',
      border: `1px solid ${theme.border}`,
      margin: '1rem 0',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0'
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { 
          margin: 0;
          font-family: 'JetBrains Mono', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace;
          line-height: 1.6;
          color: ${theme.text};
          background: ${theme.bg};
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        .hover-lift:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 8px 25px rgba(0, 0, 0, ${isDarkMode ? '0.3' : '0.15'}); 
        }
        .button-hover:hover { 
          transform: translateY(-1px); 
          box-shadow: 0 6px 20px rgba(2, 195, 133, 0.4); 
        }
        .button-secondary-hover:hover { 
          background: ${theme.bgTertiary}; 
          border-color: ${colors.primary[500]}; 
          transform: translateY(-1px);
        }
        .tag-hover:hover {
          background: ${colors.primary[500]};
          color: white;
          border-color: ${colors.primary[500]};
          transform: translateY(-1px);
        }
        .transition { transition: all 0.3s ease; }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .mobile-menu {
            display: ${isMobileMenuOpen ? 'block' : 'none'};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: ${theme.bg};
            border-bottom: 1px solid ${theme.border};
            backdrop-filter: blur(10px);
          }
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .hero-subtitle-mobile { flex-direction: column !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-only { display: none !important; }
          .desktop-only { display: flex !important; }
        }
        
        /* Dark mode toggle */
        .theme-toggle {
          background: ${theme.bgTertiary};
          border: 1px solid ${theme.border};
          border-radius: 0.5rem;
          width: 48px;
          height: 28px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .theme-toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: ${isDarkMode ? '22px' : '2px'};
          width: 22px;
          height: 22px;
          background: ${colors.primary[500]};
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      `}</style>
      
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* Logo */}
            <div>
              <h1 style={{fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', margin: 0, color: theme.text, fontWeight: '700', fontFamily: "'JetBrains Mono', monospace"}}>
                {t.companyName}
              </h1>
              <p style={{margin: 0, fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', color: theme.textMuted}}>
                {t.companyTitle}
              </p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="desktop-only" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              {/* Dark Mode Toggle */}
              <div className="theme-toggle" onClick={toggleDarkMode}></div>
              
              {/* Language Switcher */}
              <div style={{display: 'flex', gap: '0.25rem'}}>
                {['PL', 'EN', 'UA', 'RU'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang.toLowerCase())}
                    style={{
                      padding: '0.375rem 0.75rem',
                      background: currentLang === lang.toLowerCase() ? colors.primary[500] : 'transparent',
                      color: currentLang === lang.toLowerCase() ? 'white' : theme.textMuted,
                      border: `1px solid ${currentLang === lang.toLowerCase() ? colors.primary[500] : theme.border}`,
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              
              {/* Call Number */}
              <a href="tel:+48513630157" style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: colors.primary[500],
                textDecoration: 'none',
                fontFamily: "'JetBrains Mono', monospace",
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'all 0.3s ease'
              }} 
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
                📞 513 630 157
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="mobile-only"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: theme.text
              }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className="mobile-menu" style={{padding: '1.5rem 0'}}>
            <div style={{display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
              <div className="theme-toggle" onClick={toggleDarkMode}></div>
              
              {['PL', 'EN', 'UA', 'RU'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang.toLowerCase())}
                  style={{
                    padding: '0.5rem 1rem',
                    background: currentLang === lang.toLowerCase() ? colors.primary[500] : 'transparent',
                    color: currentLang === lang.toLowerCase() ? 'white' : theme.textMuted,
                    border: `1px solid ${currentLang === lang.toLowerCase() ? colors.primary[500] : theme.border}`,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
            
            <div style={{textAlign: 'center'}}>
              <a href="tel:+48513630157" style={{
                fontSize: '1.8rem',
                fontWeight: '900',
                color: colors.primary[500],
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px',
                fontFamily: "'JetBrains Mono', monospace",
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📞 513 630 157
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - 90vh */}
      <section style={styles.hero}>
        <div style={{...styles.container, width: '100%', display: 'flex', alignItems: 'center', minHeight: '90vh'}}>
          <div style={{
            display: window.innerWidth > 768 ? 'grid' : 'flex',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : 'none',
            flexDirection: window.innerWidth > 768 ? 'row' : 'column',
            gap: '2rem',
            alignItems: 'center',
            width: '100%'
          }}>
            {/* Left side - Text Content */}
            <div style={{textAlign: window.innerWidth > 768 ? 'left' : 'center', order: window.innerWidth > 768 ? 1 : 2}}>
              {/* Main Title */}
              <h2 style={{...styles.heroTitle, textAlign: window.innerWidth > 768 ? 'left' : 'center'}}>
                {t.heroTitle}
              </h2>
              
              {/* Subtitle with inline price */}
              <div style={{...styles.heroSubtitle, justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center', ...(window.innerWidth <= 768 ? {flexDirection: 'column'} : {})}} className="hero-subtitle-mobile">
                <span>{t.heroSubtitle}</span>
                <span style={{
                  color: colors.primary[500], 
                  fontWeight: '700',
                  fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {t.heroPrice}
                </span>
              </div>
              
              {/* Benefit Tags */}
              <div style={{
                margin: '3rem 0', 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
                gap: '0.75rem'
              }}>
                {[t.heroBullet1, t.heroBullet2, t.heroBullet3, t.heroBullet4].map((bullet, i) => (
                  <span key={i} style={styles.tag} className="tag-hover transition">
                    {bullet}
                  </span>
                ))}
              </div>

              {/* Phone Number CTA */}
              <div style={{marginTop: '2rem', textAlign: window.innerWidth > 768 ? 'left' : 'center'}}>
                <a href="tel:+48513630157" style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '900',
                  color: colors.primary[500],
                  textDecoration: 'underline',
                  textDecorationThickness: '3px',
                  textUnderlineOffset: '6px',
                  fontFamily: "'JetBrains Mono', monospace",
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }} 
                className="phone-hover"
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <span style={{fontSize: '0.9em'}}>📞</span> 513 630 157
                </a>
              </div>
            </div>
            
            {/* Right side - Hero Illustration */}
            <div style={{
              order: window.innerWidth > 768 ? 2 : 1, 
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img 
                src="/hero.svg" 
                alt="Accounting illustration" 
                style={{
                  width: '100%',
                  maxWidth: window.innerWidth > 768 ? '600px' : '400px',
                  height: 'auto',
                  opacity: isDarkMode ? 0.85 : 1,
                  filter: isDarkMode ? 'brightness(0.9) hue-rotate(10deg)' : 'none',
                  transition: 'all 0.3s ease'
                }}
                onError={(e) => {
                  // Fallback to PNG if SVG fails
                  e.target.src = '/hero.png';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{padding: '4rem 0', background: theme.bgSecondary}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem', color: theme.text}}>{t.benefitsTitle}</h2>
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: theme.textSecondary}}>{t.benefitsSubtitle}</p>
          </div>
          <div style={styles.grid}>
            {[
              {emoji: '🗣️', title: t.benefit1Title, desc: t.benefit1Desc},
              {emoji: '⚡', title: t.benefit2Title, desc: t.benefit2Desc},
              {emoji: '💻', title: t.benefit3Title, desc: t.benefit3Desc}
            ].map((benefit, i) => (
              <div key={i} style={{...styles.card, textAlign: 'center'}} className="hover-lift transition">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{benefit.emoji}</div>
                <h3 style={{fontSize: '1.2rem', fontWeight: '600', color: theme.text, marginBottom: '0.75rem', fontFamily: "'JetBrains Mono', monospace"}}>{benefit.title}</h3>
                <div style={{color: theme.textSecondary, lineHeight: 1.6}}>{benefit.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{padding: '4rem 0', background: theme.bg}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem', color: theme.text}}>{t.servicesTitle}</h2>
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: theme.textSecondary}}>{t.servicesSubtitle}</p>
          </div>
          
          <div style={styles.grid}>
            {[
              {
                icon: '📊',
                title: t.service1Title,
                desc: t.service1Desc,
                features: ['VAT', 'PIT', 'ZUS', 'JPK', 'Sprawozdania']
              },
              {
                icon: '🧾',
                title: t.service2Title,
                desc: t.service2Desc,
                features: ['Faktury VAT', 'KSEF', 'e-Faktury', 'Korekty', 'Export']
              },
              {
                icon: '📋',
                title: t.service3Title,
                desc: t.service3Desc,
                features: ['PIT-36', 'PIT-37', 'CIT-8', 'VAT-7', 'Optymalizacja']
              }
            ].map((service, index) => (
              <div key={index} style={styles.card} className="hover-lift transition">
                <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{service.icon}</div>
                </div>
                <h3 style={{fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.75rem', color: theme.text, fontFamily: "'JetBrains Mono', monospace"}}>{service.title}</h3>
                <p style={{color: theme.textSecondary, marginBottom: '1.5rem', lineHeight: 1.6}}>{service.desc}</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem'}}>
                  {service.features.map((feature, i) => (
                    <span key={i} style={{...styles.tag, margin: '0.25rem 0'}}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
                <button style={{...styles.button, width: '100%', margin: 0}} className="button-hover transition">{t.askForPrice}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{padding: '4rem 0', background: theme.bgSecondary}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem', color: theme.text}}>{t.contactTitle}</h2>
            <p style={{fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: theme.textSecondary}}>{t.contactSubtitle}</p>
          </div>
          
          <div style={styles.card}>
            <div style={{display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr', gap: '3rem'}}>
              <div>
                <h3 style={{marginBottom: '2rem', color: theme.text, fontWeight: '600', fontFamily: "'JetBrains Mono', monospace"}}>{t.contactDetails}</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{background: colors.primary[500], color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'}}>📞</div>
                    <div>
                      <div style={{fontWeight: '600', color: theme.text, fontFamily: "'JetBrains Mono', monospace"}}>+48 513 630 157</div>
                      <div style={{color: theme.textMuted, fontSize: '0.9rem'}}>{t.workHours}</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{background: colors.primary[500], color: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem'}}>✉️</div>
                    <div>
                      <div style={{fontWeight: '600', color: theme.text, fontFamily: "'JetBrains Mono', monospace"}}>nataliakachaieva@gmail.com</div>
                      <div style={{color: theme.textMuted, fontSize: '0.9rem'}}>{t.responseTime}</div>
                    </div>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1rem', marginTop: '2rem', flexDirection: window.innerWidth > 768 ? 'row' : 'column'}}>
                  <a href="https://wa.me/48513630157" style={{...styles.button, flex: 1, textAlign: 'center', textDecoration: 'none', margin: 0}} className="button-hover transition">
                    WhatsApp
                  </a>
                  <a href="https://t.me/nataliia_ksiegowa" style={{...styles.buttonSecondary, flex: 1, textAlign: 'center', textDecoration: 'none', margin: 0}} className="button-secondary-hover transition">
                    Telegram
                  </a>
                </div>
              </div>
              
              <div>
                <h3 style={{marginBottom: '2rem', color: theme.text, fontWeight: '600', fontFamily: "'JetBrains Mono', monospace"}}>{t.sendMessage}</h3>
                <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <input 
                    type="text" 
                    placeholder={t.namePlaceholder} 
                    style={{
                      padding: '1rem', 
                      border: `1px solid ${theme.border}`, 
                      borderRadius: '0.75rem', 
                      fontSize: '1rem', 
                      transition: 'border-color 0.2s ease',
                      background: theme.bgTertiary,
                      color: theme.text,
                      fontFamily: "'JetBrains Mono', monospace"
                    }} 
                  />
                  <input 
                    type="email" 
                    placeholder={t.emailPlaceholder} 
                    style={{
                      padding: '1rem', 
                      border: `1px solid ${theme.border}`, 
                      borderRadius: '0.75rem', 
                      fontSize: '1rem', 
                      transition: 'border-color 0.2s ease',
                      background: theme.bgTertiary,
                      color: theme.text,
                      fontFamily: "'JetBrains Mono', monospace"
                    }} 
                  />
                  <input 
                    type="tel" 
                    placeholder={t.phonePlaceholder} 
                    style={{
                      padding: '1rem', 
                      border: `1px solid ${theme.border}`, 
                      borderRadius: '0.75rem', 
                      fontSize: '1rem', 
                      transition: 'border-color 0.2s ease',
                      background: theme.bgTertiary,
                      color: theme.text,
                      fontFamily: "'JetBrains Mono', monospace"
                    }} 
                  />
                  <textarea 
                    placeholder={t.messagePlaceholder} 
                    rows="4" 
                    style={{
                      padding: '1rem', 
                      border: `1px solid ${theme.border}`, 
                      borderRadius: '0.75rem', 
                      fontSize: '1rem', 
                      resize: 'vertical', 
                      transition: 'border-color 0.2s ease',
                      background: theme.bgTertiary,
                      color: theme.text,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  />
                  <button type="submit" style={{...styles.button, width: '100%', padding: '1rem', margin: 0}} className="button-hover transition">
                    📧 {t.sendButton}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: theme.bg, color: theme.text, padding: '3rem 0', borderTop: `1px solid ${theme.border}`}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem', fontWeight: '600', fontFamily: "'JetBrains Mono', monospace"}}>{t.companyName} - {t.companyTitle}</h3>
            <p style={{color: theme.textMuted, marginBottom: '1rem'}}>{t.footerDesc}</p>
            <p style={{color: theme.textMuted, fontSize: '0.9rem'}}>
              {t.footerRights}
              <br />{t.footerArea}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;