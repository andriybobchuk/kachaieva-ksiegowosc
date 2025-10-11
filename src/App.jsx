import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Minimal design system with single accent color (PrivatBank green)
  const colors = {
    accent: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d'
    },
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
    }
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: colors.neutral[800]
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      background: 'white',
      color: colors.neutral[800],
      padding: '0.5rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      borderBottom: `1px solid ${colors.neutral[200]}`
    },
    hero: {
      background: `linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(241, 245, 249, 0.95)), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      padding: '4rem 0',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      color: colors.neutral[900],
      marginBottom: '1rem'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      color: colors.accent[600],
      fontWeight: '600',
      marginBottom: '2rem'
    },
    card: {
      background: 'white',
      borderRadius: '1rem',
      padding: '2rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${colors.neutral[200]}`,
      margin: '1rem 0'
    },
    button: {
      background: colors.accent[600],
      color: 'white',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'inline-block',
      textDecoration: 'none',
      margin: '0.5rem'
    },
    buttonSecondary: {
      background: colors.neutral[100],
      color: colors.neutral[700],
      border: `1px solid ${colors.neutral[300]}`,
      padding: '0.75rem 1.5rem',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'inline-block',
      textDecoration: 'none',
      margin: '0.5rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      margin: '2rem 0'
    },
    statCard: {
      background: 'white',
      padding: '1.5rem',
      borderRadius: '1rem',
      textAlign: 'center',
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)',
      border: `1px solid ${colors.neutral[200]}`
    },
    countdown: {
      background: colors.neutral[100],
      border: `1px solid ${colors.neutral[300]}`,
      borderRadius: '0.75rem',
      padding: '1rem',
      margin: '1.5rem 0',
      textAlign: 'center'
    },
    countdownTimer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      margin: '1rem 0'
    },
    timerBox: {
      background: colors.neutral[300],
      color: colors.neutral[700],
      padding: '0.75rem',
      borderRadius: '0.5rem',
      minWidth: '50px',
      textAlign: 'center',
      boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { 
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: ${colors.neutral[800]};
          background: ${colors.neutral[50]};
        }
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .hover-scale:hover { transform: translateY(-2px); }
        .hover-shadow:hover { box-shadow: 0 12px 20px -5px rgba(0, 0, 0, 0.15); }
        .transition { transition: all 0.2s ease; }
        .button-hover:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3); }
        .button-secondary-hover:hover { background: ${colors.neutral[200]}; border-color: ${colors.neutral[400]}; }
      `}</style>
      
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <div>
              <h1 style={{fontSize: '1.5rem', margin: 0, color: colors.neutral[900], fontWeight: '700'}}>Nataliia Kachaieva</h1>
              <p style={{margin: 0, fontSize: '0.9rem', color: colors.neutral[600]}}>Księgowa Gliwice</p>
            </div>
            <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
              <a href="tel:+48325551234" style={{...styles.buttonSecondary, textDecoration: 'none'}} className="button-secondary-hover transition">
                📞 +48 32 555 1234
              </a>
              <a href="https://wa.me/48325551234" style={{...styles.button, textDecoration: 'none'}} className="button-hover transition">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h2 style={styles.heroTitle}>Profesjonalne Usługi Księgowe</h2>
          <p style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', color: colors.neutral[600]}}>Księgowość JDG od <span style={{color: colors.accent[600]}}>299 zł/miesiąc</span></p>
          <p style={{fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
            Kompleksowa obsługa księgowa • Kadry i płace • PIT, CIT, VAT • 
            Obsługa zdalna w językach: polski, ukraiński, rosyjski
          </p>

          {/* Countdown */}
          <div style={styles.countdown}>
            <h3 style={{color: colors.neutral[800], margin: '0 0 0.5rem', fontWeight: '600'}}>Promocja: 20% rabatu na pierwszy miesiąc!</h3>
            <p style={{margin: '0 0 0.5rem', color: colors.accent[700], fontWeight: '600', fontSize: '0.9rem'}}>Kod: PIERWSZYM20</p>
            <p style={{margin: '0 0 1rem', color: colors.neutral[600], fontSize: '0.9rem'}}>Oferta wygasa za:</p>
            <div style={styles.countdownTimer}>
              <div style={styles.timerBox}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{String(timeLeft.hours).padStart(2, '0')}</div>
                <div style={{fontSize: '0.8rem', opacity: 0.9}}>godzin</div>
              </div>
              <div style={styles.timerBox}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div style={{fontSize: '0.8rem', opacity: 0.9}}>minut</div>
              </div>
              <div style={styles.timerBox}>
                <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div style={{fontSize: '0.8rem', opacity: 0.9}}>sekund</div>
              </div>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem'}}>
            <a href="tel:+48325551234" style={{...styles.button, textDecoration: 'none'}} className="button-hover transition">
              📞 Zadzwoń teraz
            </a>
            <a href="https://wa.me/48325551234" style={{...styles.buttonSecondary, textDecoration: 'none'}} className="button-secondary-hover transition">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{padding: '3rem 0', background: 'white'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.neutral[900]}}>Dlaczego my?</h2>
            <p style={{fontSize: '1.1rem', color: colors.neutral[600]}}>Profesjonalna obsługa dostosowana do Twoich potrzeb</p>
          </div>
          <div style={styles.grid}>
            <div style={{...styles.statCard}} className="hover-scale transition">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🗣️</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: colors.neutral[900], marginBottom: '0.5rem'}}>Obsługa wielojęzyczna</h3>
              <div style={{color: colors.neutral[600], fontWeight: '500'}}>Będziesz obsługiwany w języku polskim, ukraińskim lub rosyjskim</div>
            </div>
            <div style={{...styles.statCard}} className="hover-scale transition">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>⚡</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: colors.neutral[900], marginBottom: '0.5rem'}}>Szybka odpowiedź</h3>
              <div style={{color: colors.neutral[600], fontWeight: '500'}}>Czas odpowiedzi do 12 godzin, przez cały tydzień</div>
            </div>
            <div style={{...styles.statCard}} className="hover-scale transition">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💻</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: colors.neutral[900], marginBottom: '0.5rem'}}>100% zdalnie</h3>
              <div style={{color: colors.neutral[600], fontWeight: '500'}}>Wszystkie usługi świadczone online - oszczędzasz czas i pieniądze</div>
            </div>
            <div style={{...styles.statCard}} className="hover-scale transition">
              <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🛡️</div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: colors.neutral[900], marginBottom: '0.5rem'}}>Bezpieczeństwo danych</h3>
              <div style={{color: colors.neutral[600], fontWeight: '500'}}>Szyfrowane połączenia i pełna ochrona Twoich danych biznesowych</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{padding: '4rem 0'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.neutral[900]}}>Usługi księgowe</h2>
            <p style={{fontSize: '1.1rem', color: colors.neutral[600]}}>Kompleksowa obsługa dla Twojej firmy</p>
          </div>
          
          <div style={styles.grid}>
            {[
              {
                icon: '📊',
                title: 'Księgowość pełna',
                price: '299 zł/miesiąc',
                desc: 'Kompleksowa obsługa księgowa JDG i małych firm',
                features: ['VAT', 'PIT', 'ZUS', 'JPK', 'Sprawozdania']
              },
              {
                icon: '👥',
                title: 'Kadry i płace',
                price: '50 zł/pracownik',
                desc: 'Obsługa kadrowo-płacowa pracowników',
                features: ['Umowy', 'Listy płac', 'ZUS', 'US', 'Urlopy']
              },
              {
                icon: '📋',
                title: 'PIT, CIT, VAT',
                price: '150-400 zł',
                desc: 'Rozliczenia podatkowe i deklaracje',
                features: ['PIT-36', 'PIT-37', 'CIT-8', 'VAT-7', 'Optymalizacja']
              }
            ].map((service, index) => (
              <div key={index} style={styles.card} className="hover-shadow transition">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem'}}>
                  <div style={{fontSize: '2rem'}}>{service.icon}</div>
                  <div style={{background: colors.neutral[200], color: colors.neutral[700], padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.9rem', fontWeight: '600'}}>
                    {service.price}
                  </div>
                </div>
                <h3 style={{fontSize: '1.3rem', fontWeight: '600', marginBottom: '0.5rem', color: colors.neutral[900]}}>{service.title}</h3>
                <p style={{color: colors.neutral[600], marginBottom: '1rem'}}>{service.desc}</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'}}>
                  {service.features.map((feature, i) => (
                    <span key={i} style={{background: colors.neutral[100], color: colors.neutral[700], padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: '500'}}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
                <button style={{...styles.button, width: '100%'}} className="button-hover transition">Zapytaj o cenę</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{padding: '4rem 0', background: colors.neutral[50]}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: colors.neutral[900]}}>Skontaktuj się ze mną</h2>
            <p style={{fontSize: '1.1rem', color: colors.neutral[600]}}>Odpowiem w ciągu kilku godzin</p>
          </div>
          
          <div style={styles.card}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div>
                <h3 style={{marginBottom: '1.5rem', color: colors.neutral[900], fontWeight: '600'}}>Dane kontaktowe</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{background: colors.neutral[700], color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>📞</div>
                    <div>
                      <div style={{fontWeight: '600', color: colors.neutral[900]}}>+48 32 555 1234</div>
                      <div style={{color: colors.neutral[600], fontSize: '0.9rem'}}>Pon-Pt: 8:00-18:00</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{background: colors.neutral[700], color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>✉️</div>
                    <div>
                      <div style={{fontWeight: '600', color: colors.neutral[900]}}>nataliia.kachaieva@ksiegowa-gliwice.pl</div>
                      <div style={{color: colors.neutral[600], fontSize: '0.9rem'}}>Odpowiedź w ciągu 2-4h</div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <div style={{background: colors.neutral[700], color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>📍</div>
                    <div>
                      <div style={{fontWeight: '600', color: colors.neutral[900]}}>ul. Zwycięstwa 42/15</div>
                      <div style={{color: colors.neutral[600], fontSize: '0.9rem'}}>44-100 Gliwice (obsługa zdalna)</div>
                    </div>
                  </div>
                </div>
                
                <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
                  <a href="https://wa.me/48325551234" style={{...styles.button, flex: 1, textAlign: 'center', textDecoration: 'none'}} className="button-hover transition">
                    WhatsApp
                  </a>
                  <a href="https://t.me/nataliia_ksiegowa" style={{...styles.buttonSecondary, flex: 1, textAlign: 'center', textDecoration: 'none'}} className="button-secondary-hover transition">
                    Telegram
                  </a>
                </div>
              </div>
              
              <div>
                <h3 style={{marginBottom: '1.5rem', color: colors.neutral[900], fontWeight: '600'}}>Wyślij wiadomość</h3>
                <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <input type="text" placeholder="Imię i nazwisko" style={{padding: '0.75rem', border: `1px solid ${colors.neutral[300]}`, borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.2s ease'}} />
                  <input type="email" placeholder="Email" style={{padding: '0.75rem', border: `1px solid ${colors.neutral[300]}`, borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.2s ease'}} />
                  <input type="tel" placeholder="Telefon" style={{padding: '0.75rem', border: `1px solid ${colors.neutral[300]}`, borderRadius: '0.75rem', fontSize: '1rem', transition: 'border-color 0.2s ease'}} />
                  <textarea placeholder="Opisz swoje potrzeby księgowe..." rows="4" style={{padding: '0.75rem', border: `1px solid ${colors.neutral[300]}`, borderRadius: '0.75rem', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.2s ease'}}></textarea>
                  <button type="submit" style={{...styles.button, width: '100%', padding: '1rem'}} className="button-hover transition">
                    📧 Wyślij wiadomość
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: colors.neutral[900], color: 'white', padding: '2rem 0'}}>
        <div style={styles.container}>
          <div style={{textAlign: 'center'}}>
            <h3 style={{marginBottom: '1rem', fontWeight: '600'}}>Nataliia Kachaieva - Księgowa Gliwice</h3>
            <p style={{color: colors.neutral[400], marginBottom: '1rem'}}>Profesjonalne usługi księgowe • Certyfikowana księgowa nr 2847/2018</p>
            <p style={{color: colors.neutral[500], fontSize: '0.9rem'}}>
              © 2024 Nataliia Kachaieva. Wszystkie prawa zastrzeżone. 
              <br />Śląsk • Obsługa zdalna na terenie całej Polski
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
