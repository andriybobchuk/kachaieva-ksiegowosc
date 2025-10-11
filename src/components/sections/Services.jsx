import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import config from '../../config';

const Services = () => {
  const { t, currentLanguage } = useLanguage();
  const [expandedService, setExpandedService] = useState(null);

  const getServiceName = (service) => {
    switch (currentLanguage) {
      case 'en':
        return service.nameEn;
      case 'uk':
        return service.nameUk;
      case 'ru':
        return service.nameRu;
      default:
        return service.name;
    }
  };

  const getServiceDescription = (service) => {
    switch (currentLanguage) {
      case 'en':
        return service.descriptionEn || service.description;
      default:
        return service.description;
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-privatbank-green-100 text-privatbank-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
            </svg>
            {t('nav.services')}
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {config.services.map((service, index) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-privatbank-green-200 group ${
                expandedService === service.id ? 'ring-2 ring-privatbank-green-500' : ''
              }`}
            >
              {/* Service Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-privatbank-green-100 rounded-xl flex items-center justify-center group-hover:bg-privatbank-green-200 transition-colors">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div className="bg-privatbank-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.price}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-privatbank-green-700 transition-colors">
                {getServiceName(service)}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {getServiceDescription(service)}
              </p>

              {/* Service Features */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, expandedService === service.id ? service.features.length : 3).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      <svg className="w-3 h-3 mr-1 text-privatbank-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                  {service.features.length > 3 && expandedService !== service.id && (
                    <span className="inline-flex items-center text-privatbank-green-600 text-sm font-medium">
                      +{service.features.length - 3} więcej
                    </span>
                  )}
                </div>
              </div>

              {/* Expand/Collapse Button */}
              {service.features.length > 3 && (
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="text-privatbank-green-600 hover:text-privatbank-green-700 font-medium text-sm flex items-center mb-4 transition-colors"
                >
                  {expandedService === service.id ? (
                    <>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      {t('common.less')}
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      {t('common.more')}
                    </>
                  )}
                </button>
              )}

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="w-full bg-privatbank-green-600 text-white py-3 px-4 rounded-lg hover:bg-privatbank-green-700 transition-all duration-300 font-medium group-hover:shadow-lg"
              >
                {t('services.cta')}
              </button>

              {/* Popular Badge for first service */}
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    POPULARNE
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-privatbank-green-600 to-privatbank-green-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Nie widzisz swojej usługi?
          </h3>
          <p className="text-privatbank-green-100 mb-6 max-w-2xl mx-auto">
            Oferuję również indywidualne rozwiązania dostosowane do potrzeb Twojej firmy. 
            Skontaktuj się ze mną, aby omówić szczegóły.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${config.contact.phone}`}
              className="bg-white text-privatbank-green-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 11.37s-.8 3.636 3.48 7.916l2.984-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V20a2 2 0 01-2 2h-1C8.61 22 2 15.39 2 8V7a2 2 0 012-2z" />
              </svg>
              Zadzwoń teraz
            </a>
            
            <button
              onClick={scrollToContact}
              className="bg-privatbank-green-800 text-white px-8 py-3 rounded-lg hover:bg-privatbank-green-900 transition-colors font-medium inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Napisz wiadomość
            </button>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-medium">Uwaga:</span> Przedstawione ceny są orientacyjne i mogą się różnić w zależności od 
            zakresu usług i specyfiki działalności. Skontaktuj się w celu otrzymania indywidualnej wyceny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;