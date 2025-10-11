import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import config from '../../config';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: t('about.experience'),
      subtitle: 'W branży księgowej'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: t('about.clients'),
      subtitle: 'Zadowolonych klientów'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('about.languages'),
      subtitle: 'PL • EN • UA • RU'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: t('about.remote'),
      subtitle: 'Usługi zdalne'
    }
  ];

  const certifications = [
    {
      title: 'Certyfikowana księgowa',
      description: 'Nr certyfikatu 2847/2018',
      icon: '🏆'
    },
    {
      title: 'Specjalista ds. podatków',
      description: 'PIT, CIT, VAT',
      icon: '📋'
    },
    {
      title: 'Doradca kadrowy',
      description: 'Kadry i płace',
      icon: '👥'
    },
    {
      title: 'Konsultant biznesowy',
      description: 'Rejestracja działalności',
      icon: '🏢'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-privatbank-green-100 text-privatbank-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {t('nav.about')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            
            {/* Professional Photo & Intro */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                <div className="w-32 h-32 bg-gradient-to-br from-privatbank-green-400 to-privatbank-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{config.company.name}</h3>
                  <p className="text-privatbank-green-600 font-medium text-lg mb-1">{config.company.title}</p>
                  <p className="text-gray-600">{config.company.registration}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="bg-privatbank-green-100 text-privatbank-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {config.company.experience}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Gliwice
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Moja historia</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('about.description')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Moja misja to uproszczenie księgowości dla przedsiębiorców i zapewnienie spokoju 
                ducha w kwestiach podatkowych. Wiem, jak ważne jest dla właścicieli firm, aby mogli 
                skupić się na rozwoju swojego biznesu, nie martwiąc się o formalnościami.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-privatbank-green-600 to-privatbank-green-700 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Gotowy na współpracę?</h4>
              <p className="text-privatbank-green-100 mb-6">
                Skontaktuj się ze mną już dziś i przekonaj się, jak profesjonalna obsługa księgowa 
                może zmienić sposób prowadzenia Twojej firmy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="bg-white text-privatbank-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37s-.8 3.636 3.48 7.916l2.984-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C8.61 22 2 15.39 2 8V7a2 2 0 012-2z" />
                  </svg>
                  Zadzwoń teraz
                </a>
                <button
                  onClick={scrollToContact}
                  className="bg-privatbank-green-800 text-white px-6 py-3 rounded-lg hover:bg-privatbank-green-900 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Napisz wiadomość
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-privatbank-green-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.title}</div>
                  <div className="text-sm text-gray-600">{stat.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Kwalifikacje i specjalizacje</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-privatbank-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">{cert.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{cert.title}</h5>
                      <p className="text-sm text-gray-600">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Me */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Dlaczego warto wybrać moje usługi?</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-gray-900">Wieloletnie doświadczenie</h5>
                    <p className="text-sm text-gray-600">Ponad 6 lat pracy z JDG i małymi firmami</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-gray-900">Obsługa w rodzimym języku</h5>
                    <p className="text-sm text-gray-600">Komunikacja po polsku, ukraińsku i rosyjsku</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-gray-900">100% zdalne usługi</h5>
                    <p className="text-sm text-gray-600">Wygodna współpraca bez wychodzenia z domu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-gray-900">Przejrzyste ceny</h5>
                    <p className="text-sm text-gray-600">Brak ukrytych kosztów, jasne pakiety usług</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h5 className="font-semibold text-gray-900">Szybka reakcja</h5>
                    <p className="text-sm text-gray-600">Odpowiedź w ciągu kilku godzin, nie dni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;