import React, { useState, useEffect } from 'react';
import { translations } from './translations';

function App() {
  const detectLanguage = () => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) return 'pl';
    if (browserLang.startsWith('uk')) return 'ua';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('en')) return 'en';
    return 'pl';
  };

  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || detectLanguage();
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const t = translations[currentLang];

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('preferredLanguage', lang);
    setIsMobileMenuOpen(false);
  };

  // Professional color system - corporate and trustworthy
  const colors = {
    primary: '#1e3a8a', // Deep professional blue
    primaryLight: '#3b82f6',
    primaryDark: '#1e293b',
    accent: '#10b981', // Success green for CTAs
    accentHover: '#059669',
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a'
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444'
  };

  // Track events
  const trackEvent = (category, action, label = null) => {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
    if (window.hj) {
      window.hj('event', `${category}_${action}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    trackEvent('Contact', 'form_submit', formData.service);
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsContactFormOpen(false);
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: colors.neutral[900],
      background: '#ffffff',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem'
    },
    header: {
      background: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.neutral[200]}`,
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '0.75rem 0', // Reduced from 1rem to make slimmer
    },
    button: {
      background: colors.accent,
      color: 'white',
      padding: '0.875rem 2rem',
      border: 'none',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.025em',
    },
    buttonSecondary: {
      background: 'transparent',
      color: colors.primary,
      padding: '0.875rem 2rem',
      border: `2px solid ${colors.primary}`,
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    }
  };

  // Component to inject styles and analytics
  useEffect(() => {
    // Inject Google Analytics 4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `;
    document.head.appendChild(script2);

    // Inject Hotjar
    const script3 = document.createElement('script');
    script3.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:XXXXXXX,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script3);

    // Track page view
    trackEvent('Page', 'view', window.location.pathname);
  }, []);

  return (
    <div style={styles.body}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * { box-sizing: border-box; }
        
        .btn-primary:hover {
          background: ${colors.accentHover};
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.25);
        }
        
        .btn-secondary:hover {
          background: ${colors.primary};
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(30, 58, 138, 0.15);
        }
        
        .trust-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: ${colors.neutral[50]};
          border: 1px solid ${colors.neutral[200]};
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          color: ${colors.neutral[700]};
          transition: all 0.2s ease;
        }
        
        .trust-badge:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        
        .feature-card {
          background: white;
          border: 1px solid ${colors.neutral[200]};
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .feature-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          transform: translateY(-4px);
          border-color: ${colors.primaryLight};
        }
        
        .testimonial-card {
          background: ${colors.neutral[50]};
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          border: 1px solid ${colors.neutral[200]};
        }
        
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 1rem;
          left: 1.5rem;
          font-size: 4rem;
          color: ${colors.primaryLight};
          opacity: 0.2;
          font-weight: 900;
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .mobile-hide { display: none !important; }
          .desktop-hide { display: block !important; }
          
          /* Header adjustments */
          header nav {
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          /* Logo adjustments for mobile */
          .logo-icon {
            width: 35px !important;
            height: 35px !important;
            font-size: 16px !important;
          }
          .logo-text {
            font-size: 1.1rem !important;
          }
          .logo-subtext {
            font-size: 0.75rem !important;
          }
          
          /* Hero section mobile */
          .hero-section {
            min-height: 70vh !important;
            padding: 1.5rem 0 !important;
            text-align: center;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-title {
            font-size: 2rem !important;
            line-height: 1.1 !important;
          }
          .hero-subtitle {
            font-size: 1.1rem !important;
          }
          .hero-price {
            font-size: 1.8rem !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .hero-image {
            max-height: 300px !important;
          }
          
          /* Benefits grid mobile */
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          /* Services grid mobile */
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          /* Stats grid mobile */
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
          .stat-number {
            font-size: 2rem !important;
          }
          
          /* Testimonials mobile */
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          /* Office section mobile */
          .office-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .office-map {
            height: 200px !important;
          }
          
          /* Container padding mobile */
          .container-mobile {
            padding: 0 1rem !important;
          }
          
          /* Button adjustments mobile */
          .btn-mobile {
            width: 100% !important;
            padding: 1rem 1.5rem !important;
          }
          
          /* Typography mobile */
          .section-title {
            font-size: 2rem !important;
          }
          .section-subtitle {
            font-size: 1rem !important;
          }
          
          /* Cards mobile */
          .card-padding {
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small mobile devices */
          .hero-title {
            font-size: 1.75rem !important;
          }
          .hero-price {
            font-size: 1.5rem !important;
          }
          .section-title {
            font-size: 1.75rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
          .logo-text {
            font-size: 1rem !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-hide { display: flex !important; }
          .desktop-hide { display: none !important; }
        }
      `}</style>

      {/* Professional Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* Modern Logo */}
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              {/* Cool Icon Logo */}
              <div className="logo-icon" style={{
                width: '40px',
                height: '40px',
                background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.success} 100%)`,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)',
                fontSize: '18px',
                fontWeight: '800',
                color: 'white'
              }}>
                NK
              </div>
              {/* Brand Text */}
              <div>
                <div className="logo-text" style={{
                  fontSize: '1.25rem', 
                  fontWeight: '700', 
                  color: colors.neutral[900],
                  letterSpacing: '-0.025em'
                }}>
                  Nataliia Kachaieva
                </div>
                <div className="logo-subtext" style={{
                  fontSize: '0.8rem', 
                  color: colors.neutral[600], 
                  fontWeight: '500',
                  marginTop: '-2px'
                }}>
                  {t.companyTitle}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="mobile-hide" style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
              {/* Language Switcher - Professional Style */}
              <div style={{display: 'flex', gap: '0.5rem'}}>
                {['PL', 'UA', 'RU', 'EN'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => changeLanguage(lang.toLowerCase())}
                    style={{
                      padding: '0.5rem 1rem',
                      background: currentLang === lang.toLowerCase() ? colors.neutral[900] : 'transparent',
                      color: currentLang === lang.toLowerCase() ? 'white' : colors.neutral[600],
                      border: 'none',
                      borderRadius: '0.375rem',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Phone Number - Main CTA */}
              <a 
                href="tel:+48513630157"
                onClick={() => trackEvent('CTA', 'header_phone_click')}
                style={{
                  ...styles.button,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                className="btn-primary"
              >
                📞 {t.phoneNumber}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="desktop-hide"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: colors.neutral[700]
              }}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section - Compact and Conversion-Focused */}
      <section className="hero-section" style={{
        minHeight: '85vh',
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0'
      }}>
        {/* Creative Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: `
            radial-gradient(circle at 20% 50%, ${colors.primaryLight} 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${colors.accent} 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, ${colors.primary} 0%, transparent 50%)
          `
        }}></div>
        
        {/* Geometric Pattern */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03
        }}>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={colors.primary} strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Floating Shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: `linear-gradient(135deg, ${colors.primaryLight}15, ${colors.accent}10)`,
          animation: 'float 20s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
          background: `linear-gradient(135deg, ${colors.accent}15, ${colors.primaryLight}10)`,
          animation: 'float 25s ease-in-out infinite reverse'
        }}></div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
          }
        `}</style>

        <div style={{...styles.container, position: 'relative', zIndex: 1}}>
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 400px' : '1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div style={{textAlign: window.innerWidth > 768 ? 'left' : 'center'}}>
            {/* Personal Introduction */}
            <div style={{
              marginBottom: '1.5rem'
            }}>
              <p style={{
                fontSize: '1.1rem',
                color: colors.neutral[600],
                marginBottom: '0.5rem',
                fontWeight: '500'
              }}>
                {t.companyName} - {t.certifiedAccountant}
              </p>
            </div>

            {/* Main Headline - Personal & Reliable */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '900',
              lineHeight: 1.1,
              marginBottom: '1rem',
              color: colors.neutral[900],
              letterSpacing: '-0.02em'
            }}>
              {t.heroTitle1}
              <span style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'block'
              }}>
                {t.heroTitle2}
              </span>
            </h1>

            {/* Personal Promise */}
            <p style={{
              fontSize: '1.2rem',
              color: colors.neutral[600],
              marginBottom: '2rem',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto 2rem'
            }}>
              {t.heroSubtitle1} <strong>{t.heroSubtitle2}</strong> {t.heroSubtitle3}
              {t.heroSubtitle4} <strong>{t.heroSubtitle5}</strong>.
            </p>

            {/* Key Benefits Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: window.innerWidth > 768 ? 'flex-start' : 'center',
              marginBottom: '2rem'
            }}>
              {[
                t.heroBenefit1,
                t.heroBenefit2,
                t.heroBenefit3,
                t.heroBenefit4
              ].map((benefit, i) => (
                <div key={i} style={{
                  padding: '0.5rem 1.25rem',
                  background: colors.neutral[50],
                  border: `2px solid ${colors.neutral[200]}`,
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: colors.neutral[700],
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                className="benefit-pill"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = colors.primary;
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = colors.primary;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.neutral[50];
                  e.currentTarget.style.color = colors.neutral[700];
                  e.currentTarget.style.borderColor = colors.neutral[200];
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <span style={{color: colors.success, fontWeight: '700'}}>✓</span>
                  {benefit}
                </div>
              ))}
            </div>

            {/* Single Strong CTA - Phone */}
            <div style={{display: 'flex', flexDirection: 'column', alignItems: window.innerWidth > 768 ? 'flex-start' : 'center', gap: '1rem', marginBottom: '1rem'}}>
              <a 
                href="tel:+48513630157"
                onClick={() => trackEvent('CTA', 'hero_call_click')}
                style={{
                  background: colors.accent,
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '1.35rem',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '0.75rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  boxShadow: `0 10px 30px rgba(16, 185, 129, 0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.3)';
                }}
              >
                📞 {t.phoneNumber}
              </a>
              <p style={{
                color: colors.neutral[500],
                fontSize: '1rem'
              }}>
                {t.ctaMain} - {t.answerNow}
              </p>
            </div>

            {/* Trust Line */}
            <p style={{
              color: colors.neutral[500],
              fontSize: '0.95rem',
              marginTop: '1rem'
            }}>
              {t.trustLine}
            </p>
            </div>

            {/* Right - WhatsApp Mockup */}
            <div className="mobile-hide" style={{textAlign: 'center'}}>
              <div style={{
                position: 'relative',
                display: 'inline-block',
                padding: '2rem'
              }}>
                {/* Phone Frame */}
                <div style={{
                  width: '300px',
                  height: '600px',
                  background: colors.neutral[900],
                  borderRadius: '2rem',
                  padding: '1rem',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
                  margin: '0 auto'
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#e5ddd5',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    {/* WhatsApp Header */}
                    <div style={{
                      background: '#075e54',
                      padding: '1rem',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#25d366',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700'
                      }}>NK</div>
                      <div>
                        <div style={{fontWeight: '700'}}>{t.companyName}</div>
                        <div style={{fontSize: '0.875rem', opacity: 0.9}}>{t.onlineNow}</div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div style={{padding: '1rem', background: '#e5ddd5', height: 'calc(100% - 72px)'}}>
                      <div style={{
                        background: 'white',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        marginBottom: '0.5rem',
                        maxWidth: '80%'
                      }}>
                        <p style={{margin: 0, fontSize: '0.9rem'}}>{t.chatMessage1}</p>
                        <span style={{fontSize: '0.7rem', color: colors.neutral[500]}}>14:23</span>
                      </div>
                      
                      <div style={{
                        background: '#dcf8c6',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        marginBottom: '0.5rem',
                        maxWidth: '80%',
                        marginLeft: 'auto'
                      }}>
                        <p style={{margin: 0, fontSize: '0.9rem'}}>{t.chatMessage2}</p>
                        <span style={{fontSize: '0.7rem', color: colors.neutral[500]}}>14:24</span>
                      </div>
                      
                      <div style={{
                        background: '#dcf8c6',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        maxWidth: '80%',
                        marginLeft: 'auto'
                      }}>
                        <p style={{margin: 0, fontSize: '0.9rem'}}>{t.chatMessage3}</p>
                        <span style={{fontSize: '0.7rem', color: colors.neutral[500]}}>14:24</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification bubbles */}
                <div style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-20px',
                  background: colors.success,
                  color: 'white',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  {t.quickResponse}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section - Dark Background */}
      <section style={{
        padding: '3rem 0',
        background: `linear-gradient(135deg, ${colors.neutral[900]} 0%, ${colors.neutral[800]} 100%)`,
        position: 'relative',
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.05) 10px,
              rgba(255,255,255,0.05) 20px
            )
          `
        }}></div>
        <div style={{...styles.container, position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '900',
              color: 'white',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              {t.comparisonMainTitle}
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              {t.comparisonSubtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* The Bad - Other Accountants */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: `2px solid ${colors.error}`,
              borderRadius: '1.5rem',
              padding: '2rem',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                background: colors.error,
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}>
                {t.badTitle}
              </div>
              
              <div style={{marginTop: '1.5rem'}}>
                {[
                  { emoji: '📞', title: t.comparisonBad1, desc: t.comparisonBad1Desc },
                  { emoji: '🏢', title: t.comparisonBad2, desc: t.comparisonBad2Desc },
                  { emoji: '⏳', title: t.comparisonBad3, desc: t.comparisonBad3Desc },
                  { emoji: '💰', title: t.comparisonBad4, desc: t.comparisonBad4Desc }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{fontSize: '2rem'}}>{item.emoji}</span>
                    <div>
                      <h4 style={{
                        color: 'white',
                        fontWeight: '700',
                        marginBottom: '0.25rem',
                        fontSize: '1.1rem'
                      }}>{item.title}</h4>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5
                      }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Good - Us */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: `2px solid ${colors.success}`,
              borderRadius: '1.5rem',
              padding: '2rem',
              position: 'relative',
              transform: window.innerWidth > 768 ? 'translateY(20px)' : 'none'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '2rem',
                background: colors.success,
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '100px',
                fontWeight: '700',
                fontSize: '1.1rem'
              }}>
                Ja - {t.companyName}
              </div>
              
              <div style={{marginTop: '1.5rem'}}>
                {[
                  { emoji: '✅', title: t.comparisonGood1, desc: t.comparisonGood1Desc },
                  { emoji: '🤝', title: t.comparisonGood2, desc: t.comparisonGood2Desc },
                  { emoji: '💡', title: t.comparisonGood3, desc: t.comparisonGood3Desc },
                  { emoji: '💰', title: t.comparisonGood4, desc: t.comparisonGood4Desc }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{fontSize: '2rem'}}>{item.emoji}</span>
                    <div>
                      <h4 style={{
                        color: 'white',
                        fontWeight: '700',
                        marginBottom: '0.25rem',
                        fontSize: '1.1rem'
                      }}>{item.title}</h4>
                      <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5
                      }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Big CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem'
            }}>
              {t.questionAccountant}
            </h3>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem'
            }}>
              {t.ctaMain} {t.convinceText}
            </p>
            <a
              href="tel:+48513630157"
              onClick={() => trackEvent('CTA', 'comparison_section_click')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: colors.accent,
                color: 'white',
                padding: '1.25rem 3rem',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1.25rem',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.4)';
              }}
            >
              📞 513 630 157
            </a>
          </div>
        </div>
      </section>

      {/* Always Available Section */}
      <section style={{
        padding: '5rem 0',
        background: `linear-gradient(180deg, white 0%, ${colors.neutral[50]} 100%)`,
        position: 'relative'
      }}>
        <div style={styles.container}>
          {/* Content */}
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                color: colors.neutral[900],
                lineHeight: 1.2
              }}>
                {t.alwaysTitle}
                <span style={{color: colors.success, display: 'block'}}>
                  {t.alwaysAvailable}
                </span>
              </h2>
              
              <p style={{
                fontSize: '1.25rem',
                color: colors.neutral[600],
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                {t.alwaysSubtitle}
              </p>

              {/* Contact Methods */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {[
                  { icon: t.contact1Icon, method: t.contact1Method, desc: t.contact1Value },
                  { icon: t.contact2Icon, method: t.contact2Method, desc: t.contact2Value },
                  { icon: t.contact3Icon, method: t.contact3Method, desc: t.contact3Value },
                  { icon: t.contact4Icon, method: t.contact4Method, desc: t.contact4Value }
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '1rem',
                    background: colors.neutral[50],
                    borderRadius: '0.75rem',
                    border: `1px solid ${colors.neutral[200]}`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colors.success;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = colors.neutral[50];
                    e.currentTarget.style.color = 'inherit';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>{item.icon}</div>
                    <div style={{fontWeight: '700', fontSize: '1rem', marginBottom: '0.25rem'}}>{item.method}</div>
                    <div style={{fontSize: '0.875rem', opacity: 0.8}}>{item.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{marginBottom: '2rem'}}>
                {[
                  { time: t.timeline1, desc: t.timeline1Desc, highlight: true },
                  { time: t.timeline2, desc: t.timeline2Desc, highlight: false },
                  { time: t.timeline3, desc: t.timeline3Desc, highlight: false },
                  { time: t.timelineAlways, desc: t.timelineDesc, highlight: true }
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: item.highlight ? `${colors.success}10` : 'transparent',
                    borderRadius: '0.75rem',
                    border: item.highlight ? `2px solid ${colors.success}` : 'none'
                  }}>
                    <div style={{
                      minWidth: '120px',
                      fontWeight: '700',
                      color: item.highlight ? colors.success : colors.neutral[700],
                      fontSize: '1.1rem'
                    }}>
                      {item.time}
                    </div>
                    <div style={{
                      color: colors.neutral[600],
                      fontSize: '1.05rem'
                    }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                background: colors.neutral[100],
                padding: '1.5rem',
                borderRadius: '1rem',
                marginBottom: '2rem'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '1.1rem',
                  color: colors.neutral[700],
                  fontStyle: 'italic',
                  lineHeight: 1.6
                }}>
                  {t.testimonialQuote.replace('{companyName}', t.companyName)}
                </p>
                <p style={{
                  margin: '0.75rem 0 0',
                  color: colors.neutral[600],
                  fontWeight: '700'
                }}>
                  {t.testimonialAuthor}
                </p>
              </div>

              <a 
                href="tel:+48513630157"
                onClick={() => trackEvent('CTA', 'always_available_call')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: colors.primary,
                  color: 'white',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(30, 58, 138, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(30, 58, 138, 0.3)';
                }}
              >
                <span>📞</span>
                {t.ctaMain} - {t.answerNow}
              </a>
            </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}</style>
      </section>

      {/* Services Section - Clear and Professional */}
      <section style={{padding: '5rem 0', background: 'white'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: colors.neutral[900]
            }}>
              {t.servicesMainTitle}
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: colors.neutral[600],
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {t.servicesMainSubtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                title: t.service1Title,
                price: t.service1Price,
                features: [
                  t.service1Feature1,
                  t.service1Feature2,
                  t.service1Feature3,
                  t.service1Feature4
                ],
                popular: true
              },
              {
                title: t.service2Title,
                price: t.service2Price,
                features: [
                  t.service2Feature1,
                  t.service2Feature2,
                  t.service2Feature3,
                  t.service2Feature4
                ]
              },
              {
                title: t.service3Title,
                price: t.service3Price,
                features: [
                  t.service3Feature1,
                  t.service3Feature2,
                  t.service3Feature3,
                  t.service3Feature4
                ]
              }
            ].map((service, i) => (
              <div key={i} className="feature-card" style={{position: 'relative'}}>
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '20px',
                    background: colors.accent,
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '100px',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {t.popularBadge}
                  </div>
                )}
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: colors.neutral[900]
                }}>
                  {service.title}
                </h3>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: colors.primary,
                  marginBottom: '1.5rem'
                }}>
                  {service.price}
                </div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '2rem'
                }}>
                  {service.features.map((feature, j) => (
                    <li key={j} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      color: colors.neutral[700]
                    }}>
                      <span style={{color: colors.success}}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+48513630157"
                  onClick={() => trackEvent('CTA', 'service_select', service.title)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    width: '100%',
                    padding: '0.875rem 2rem',
                    background: service.popular ? colors.accent : colors.primary,
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  className="btn-primary"
                >
                  📞 {t.callNow}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '5rem 0',
        background: colors.neutral[50]
      }}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: colors.neutral[900]
            }}>
              {t.howTitle}
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: colors.neutral[600]
            }}>
              {t.howSubtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : '1fr',
            gap: '2rem'
          }}>
            {[
              { step: '1', title: t.step1Title, desc: t.step1Desc },
              { step: '2', title: t.step2Title, desc: t.step2Desc },
              { step: '3', title: t.step3Title, desc: t.step3Desc },
              { step: '4', title: t.step4Title, desc: t.step4Desc }
            ].map((item, i) => (
              <div key={i} style={{textAlign: 'center'}}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: colors.primary,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: '800',
                  margin: '0 auto 1rem'
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: colors.neutral[900]
                }}>
                  {item.title}
                </h3>
                <p style={{color: colors.neutral[600]}}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{padding: '5rem 0', background: 'white'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              color: colors.neutral[900]
            }}>
              {t.testimonialsTitle}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '2rem'
          }}>
            {[
              {
                name: 'Andrii B.',
                company: 'IT Contractor',
                text: t.testimonial1,
                rating: 5
              },
              {
                name: 'Nastia M.',
                company: 'Salon Kosmetyczny',
                text: t.testimonial2,
                rating: 5
              },
              {
                name: 'Valerii M.',
                company: 'Firma Budowlana',
                text: t.testimonial3,
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div style={{marginBottom: '1rem'}}>
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} style={{color: colors.warning, fontSize: '1.25rem'}}>★</span>
                  ))}
                </div>
                <p style={{
                  marginBottom: '1.5rem',
                  color: colors.neutral[700],
                  fontSize: '1.05rem',
                  lineHeight: 1.6
                }}>
                  {testimonial.text}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: colors.primaryLight,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '1.25rem'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{fontWeight: '700', color: colors.neutral[900]}}>
                      {testimonial.name}
                    </div>
                    <div style={{fontSize: '0.875rem', color: colors.neutral[600]}}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Office Location Section */}
      <section style={{
        padding: '3rem 0',
        background: `linear-gradient(180deg, white 0%, ${colors.neutral[50]} 100%)`,
        position: 'relative'
      }}>
        <div style={{...styles.container, position: 'relative', zIndex: 1}}>
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '900',
              marginBottom: '0.75rem',
              color: colors.neutral[900],
              letterSpacing: '-0.02em'
            }}>
              {t.officeTitle}
              <span style={{
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline'
              }}>
                
              </span>
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: colors.neutral[600],
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.5
            }}>
              {t.officeSubtitle}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Left - Compact Office Info */}
            <div style={{
              background: 'white',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: `1px solid ${colors.neutral[200]}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{fontSize: '2rem'}}>🏢</span>
                <div>
                  <div style={{fontWeight: '700', color: colors.neutral[900], fontSize: '1.1rem'}}>{t.officeAddress}</div>
                  <div style={{color: colors.neutral[600]}}>{t.officeCity}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <span style={{fontSize: '2rem'}}>⏰</span>
                <div>
                  <div style={{fontWeight: '600', color: colors.neutral[900]}}>{t.workHours}</div>
                  <div style={{color: colors.neutral[600], fontSize: '0.9rem'}}>{t.saturdayByAppointment}</div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem',
                background: `${colors.accent}10`,
                borderRadius: '0.5rem',
                border: `1px solid ${colors.accent}20`
              }}>
                <span style={{fontSize: '1.5rem'}}>☕</span>
                <div style={{fontSize: '0.95rem', fontWeight: '600', color: colors.accent}}>
                  {t.officeBenefit1}
                </div>
              </div>
            </div>

            {/* Right - Compact Map */}
            <div style={{
              background: 'white',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: `1px solid ${colors.neutral[200]}`,
              position: 'relative'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.8234567890123!2d18.6667!3d50.2944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471130c2b5b5b5b5%3A0x1234567890abcdef!2sW%C5%82adys%C5%82awa%20%C5%81okietka%2013%2C%2044-100%20Gliwice!5e0!3m2!1spl!2spl!4v1234567890123"
                width="100%"
                height="250"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <div style={{
                position: 'absolute',
                bottom: '0.75rem',
                left: '0.75rem',
                right: '0.75rem',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{fontSize: '0.9rem'}}>
                  <div style={{fontWeight: '600', color: colors.neutral[900]}}>Centrum Gliwic</div>
                  <div style={{color: colors.neutral[600], fontSize: '0.8rem'}}>5 min od dworca</div>
                </div>
                <a
                  href="https://maps.google.com/maps/dir//Władysława+Łokietka+13,+44-100+Gliwice"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: colors.accent,
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}
                >
                  🗺️ Nawiguj
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{
        background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1rem'
          }}>
            {t.finalTitle}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            {t.finalSubtitle}
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="tel:+48513630157"
              onClick={() => trackEvent('CTA', 'final_call_click')}
              style={{
                background: 'white',
                color: colors.primary,
                textDecoration: 'none',
                fontSize: '1.25rem',
                padding: '1.25rem 3rem',
                borderRadius: '0.5rem',
                fontWeight: '700',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 30px rgba(255,255,255,0.3)'
              }}
            >
              📞 {t.phoneNumber} - {t.ctaMain}!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: colors.neutral[900],
        color: colors.neutral[400],
        padding: '3rem 0'
      }}>
        <div style={styles.container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 768 ? 'repeat(4, 1fr)' : '1fr',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{color: 'white', marginBottom: '1rem'}}>Nataliia Kachaieva</h3>
              <p style={{lineHeight: 1.6}}>
                {t.footerDesc}
              </p>
            </div>
            <div>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>{t.servicesHeader}</h4>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li style={{marginBottom: '0.5rem'}}>{t.service1Title}</li>
                <li style={{marginBottom: '0.5rem'}}>{t.service2Title}</li>
                <li style={{marginBottom: '0.5rem'}}>{t.service3Title}</li>
                <li style={{marginBottom: '0.5rem'}}>{t.taxControlService}</li>
              </ul>
            </div>
            <div>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Kontakt</h4>
              <p>📞 +48 {t.phoneNumber}</p>
              <p>✉️ {t.contact3Value}</p>
              <p>📍 {t.officeCity}, {t.regionSilesia}</p>
            </div>
            <div>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Godziny Pracy</h4>
              <p>{t.workHours}</p>
              <p>{t.saturdayHours}</p>
              <p>{t.sundayClosed}</p>
            </div>
          </div>
          <div style={{
            borderTop: `1px solid ${colors.neutral[800]}`,
            paddingTop: '2rem',
            textAlign: 'center'
          }}>
            <p>{t.footerRights}</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '1rem',
            padding: '2rem',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              marginBottom: '1rem',
              color: colors.neutral[900]
            }}>
              {t.freeConsultation}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder={t.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.neutral[300]}`,
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                required
              />
              <input
                type="tel"
                placeholder={t.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.neutral[300]}`,
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                required
              />
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.neutral[300]}`,
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.neutral[300]}`,
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
                required
              >
                <option value="">{t.selectService}</option>
                <option value="ksiegowosc">{t.service1Title}</option>
                <option value="kadry">{t.service2Title}</option>
                <option value="zakladanie">{t.service3Title}</option>
                <option value="inne">{t.otherOption}</option>
              </select>
              <textarea
                placeholder={t.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                  border: `1px solid ${colors.neutral[300]}`,
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  minHeight: '100px'
                }}
              />
              <div style={{display: 'flex', gap: '1rem'}}>
                <button
                  type="submit"
                  style={{...styles.button, flex: 1}}
                >
                  {t.sendButton}
                </button>
                <button
                  type="button"
                  onClick={() => setIsContactFormOpen(false)}
                  style={{...styles.buttonSecondary, flex: 1}}
                >
                  {t.cancelButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;