import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import config from '../../config';

const Coverage = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coverage" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-privatbank-green-100 text-privatbank-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t('nav.coverage')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('coverage.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('coverage.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Map Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {/* Simplified Map of Silesia */}
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl overflow-hidden">
                
                {/* Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    {/* Silesia region outline */}
                    <path d="M50 150 L100 120 L150 140 L200 130 L250 150 L300 160 L350 140 L380 170 L360 200 L320 220 L280 210 L240 230 L200 220 L160 240 L120 220 L80 200 L50 180 Z" 
                          fill="currentColor" stroke="#16a34a" strokeWidth="2" className="text-privatbank-green-200" />
                  </svg>
                </div>
                
                {/* City Markers */}
                {config.coverage.primary.map((city, index) => {
                  const positions = [
                    { x: '35%', y: '55%', city: 'Gliwice' },
                    { x: '45%', y: '45%', city: 'Katowice' },
                    { x: '55%', y: '50%', city: 'Zabrze' },
                    { x: '40%', y: '60%', city: 'Bytom' },
                    { x: '50%', y: '40%', city: 'Chorzów' },
                  ];
                  const position = positions.find(p => p.city === city) || positions[index] || { x: '50%', y: '50%' };
                  
                  return (
                    <div 
                      key={city}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: position.x, top: position.y }}
                    >
                      <div className={`relative ${
                        city === 'Gliwice' ? 'animate-pulse' : ''
                      }`}>
                        <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                          city === 'Gliwice' 
                            ? 'bg-privatbank-green-600' 
                            : 'bg-blue-500'
                        }`}></div>
                        {city === 'Gliwice' && (
                          <div className="absolute top-0 left-0 w-4 h-4 bg-privatbank-green-600 rounded-full animate-ping opacity-75"></div>
                        )}
                        <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 text-xs font-medium rounded shadow-lg ${
                          city === 'Gliwice'
                            ? 'bg-privatbank-green-600 text-white'
                            : 'bg-white text-gray-700'
                        }`}>
                          {city}
                          {city === 'Gliwice' && (
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-privatbank-green-600 rotate-45"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Coverage Radius */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-2 border-privatbank-green-400 rounded-full opacity-30 animate-pulse"></div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Województwo Śląskie</h3>
                <p className="text-gray-600">Główny obszar działania</p>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="space-y-8">
            
            {/* Primary Cities */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('coverage.primary')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.coverage.primary.map((city, index) => (
                  <div key={city} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full ${
                      city === 'Gliwice' ? 'bg-privatbank-green-600' : 'bg-blue-500'
                    }`}></div>
                    <span className="font-medium text-gray-900">{city}</span>
                    {city === 'Gliwice' && (
                      <span className="bg-privatbank-green-100 text-privatbank-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Siedziba
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Remote Services */}
            <div className="bg-gradient-to-r from-privatbank-green-600 to-privatbank-green-700 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-2xl font-bold">{config.coverage.remoteText}</h3>
              </div>
              <p className="text-privatbank-green-100 mb-6 leading-relaxed">
                Dzięki nowoczesnym technologiom mogę świadczyć wszystkie usługi księgowe zdalnie. 
                To oznacza, że bez względu na to, gdzie się znajdujesz w Polsce, możesz korzystać 
                z moich profesjonalnych usług.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dokumenty elektronicznie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Spotkania online</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Szybka komunikacja</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-privatbank-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bezpieczne przesyłanie</span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Twoje miasto nie jest na liście?
              </h3>
              <p className="text-gray-600 mb-6">
                Nie martw się! Świadczę usługi zdalnie na terenie całej Polski. 
                Skontaktuj się ze mną, aby omówić szczegóły współpracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${config.contact.phone}`}
                  className="bg-privatbank-green-600 text-white px-6 py-3 rounded-lg hover:bg-privatbank-green-700 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37s-.8 3.636 3.48 7.916l2.984-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C8.61 22 2 15.39 2 8V7a2 2 0 012-2z" />
                  </svg>
                  Zadzwoń
                </a>
                
                <button
                  onClick={scrollToContact}
                  className="bg-white border-2 border-privatbank-green-600 text-privatbank-green-600 px-6 py-3 rounded-lg hover:bg-privatbank-green-600 hover:text-white transition-colors font-medium inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Napisz
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;