import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.services': 'Usługi',
    'nav.about': 'O mnie',
    'nav.testimonials': 'Opinie',
    'nav.contact': 'Kontakt',
    'nav.coverage': 'Obszar działania',
    'nav.faq': 'FAQ',
    
    // Hero Section
    'hero.title': 'Księgowa Gliwice',
    'hero.subtitle': 'Profesjonalne usługi księgowe od 299 zł/miesiąc',
    'hero.description': 'Kompleksowa obsługa księgowa JDG i małych firm • Kadry i płace • PIT, CIT, VAT • Obsługa zdalna w językach: polski, ukraiński, rosyjski',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.telegram': 'Telegram',
    'hero.cta.call': 'Zadzwoń',
    'hero.offer': 'Promocja: 20% rabatu na pierwszy miesiąc!',
    'hero.offer.expires': 'Oferta wygasa za:',
    
    // Services
    'services.title': 'Usługi księgowe',
    'services.subtitle': 'Kompleksowa obsługa dla Twojej firmy',
    'services.cta': 'Zapytaj o cenę',
    
    // About
    'about.title': 'O mnie',
    'about.subtitle': 'Nataliia Kachaieva - Certyfikowana księgowa',
    'about.experience': '6+ lat doświadczenia',
    'about.clients': '200+ zadowolonych klientów',
    'about.languages': 'Obsługa w 3 językach',
    'about.remote': '100% zdalnie',
    'about.description': 'Jestem certyfikowaną księgową z wieloletnim doświadczeniem w obsłudze JDG, małych i średnich firm. Specjalizuję się w pomocy przedsiębiorcom polskim, ukraińskim i międzynarodowym. Wszystkie usługi świadczę zdalnie, co pozwala na wygodną i efektywną współpracę.',
    
    // Testimonials
    'testimonials.title': 'Opinie klientów',
    'testimonials.subtitle': 'Zobacz co mówią o mnie moi klienci',
    
    // Coverage
    'coverage.title': 'Obszar działania',
    'coverage.subtitle': 'Obsługuję klientów w całym regionie śląskim',
    'coverage.remote': 'Obsługa zdalna na terenie całej Polski',
    'coverage.primary': 'Główne miasta:',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Skontaktuj się ze mną',
    'contact.form.name': 'Imię i nazwisko',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Wiadomość',
    'contact.form.submit': 'Wyślij wiadomość',
    'contact.info.hours': 'Godziny pracy',
    'contact.info.address': 'Adres',
    
    // FAQ
    'faq.title': 'Często zadawane pytania',
    'faq.subtitle': 'Odpowiedzi na najczęstsze pytania',
    
    // Footer
    'footer.company': 'Nataliia Kachaieva',
    'footer.description': 'Profesjonalne usługi księgowe w Gliwicach',
    'footer.rights': 'Wszystkie prawa zastrzeżone',
    
    // Common
    'common.phone': 'Telefon',
    'common.email': 'Email',
    'common.address': 'Adres',
    'common.more': 'Więcej',
    'common.less': 'Mniej',
    'common.loading': 'Ładowanie...',
    'common.error': 'Wystąpił błąd'
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.coverage': 'Coverage Area',
    'nav.faq': 'FAQ',
    
    // Hero Section
    'hero.title': 'Accountant Gliwice',
    'hero.subtitle': 'Professional accounting services from 299 PLN/month',
    'hero.description': 'Comprehensive bookkeeping for sole proprietorships and small companies • HR & Payroll • PIT, CIT, VAT • Remote service in languages: Polish, Ukrainian, Russian',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.telegram': 'Telegram',
    'hero.cta.call': 'Call',
    'hero.offer': 'Promotion: 20% discount on first month!',
    'hero.offer.expires': 'Offer expires in:',
    
    // Services
    'services.title': 'Accounting Services',
    'services.subtitle': 'Comprehensive service for your business',
    'services.cta': 'Ask for price',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Nataliia Kachaieva - Certified Accountant',
    'about.experience': '6+ years experience',
    'about.clients': '200+ satisfied clients',
    'about.languages': 'Service in 3 languages',
    'about.remote': '100% remote',
    'about.description': 'I am a certified accountant with years of experience in serving sole proprietorships, small and medium enterprises. I specialize in helping Polish, Ukrainian and international entrepreneurs. I provide all services remotely, which allows for convenient and efficient cooperation.',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'See what my clients say about me',
    
    // Coverage
    'coverage.title': 'Coverage Area',
    'coverage.subtitle': 'I serve clients throughout the Silesian region',
    'coverage.remote': 'Remote service throughout Poland',
    'coverage.primary': 'Main cities:',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with me',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.info.hours': 'Business hours',
    'contact.info.address': 'Address',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Answers to the most common questions',
    
    // Footer
    'footer.company': 'Nataliia Kachaieva',
    'footer.description': 'Professional accounting services in Gliwice',
    'footer.rights': 'All rights reserved',
    
    // Common
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    'common.more': 'More',
    'common.less': 'Less',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred'
  },
  
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.services': 'Послуги',
    'nav.about': 'Про мене',
    'nav.testimonials': 'Відгуки',
    'nav.contact': 'Контакт',
    'nav.coverage': 'Зона обслуговування',
    'nav.faq': 'FAQ',
    
    // Hero Section
    'hero.title': 'Бухгалтер Гліце',
    'hero.subtitle': 'Професійні бухгалтерські послуги від 299 злотих/місяць',
    'hero.description': 'Комплексне ведення бухгалтерії ФОП і малих компаній • Кадри та зарплата • PIT, CIT, VAT • Віддалене обслуговування мовами: польська, українська, російська',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.telegram': 'Telegram',
    'hero.cta.call': 'Дзвінок',
    'hero.offer': 'Акція: 20% знижка на перший місяць!',
    'hero.offer.expires': 'Пропозиція закінчується через:',
    
    // Services
    'services.title': 'Бухгалтерські послуги',
    'services.subtitle': 'Комплексне обслуговування для вашого бізнесу',
    'services.cta': 'Запитати про ціну',
    
    // About
    'about.title': 'Про мене',
    'about.subtitle': 'Наталія Качаєва - Сертифікований бухгалтер',
    'about.experience': '6+ років досвіду',
    'about.clients': '200+ задоволених клієнтів',
    'about.languages': 'Обслуговування 3 мовами',
    'about.remote': '100% віддалено',
    'about.description': 'Я сертифікований бухгалтер з багаторічним досвідом обслуговування ФОП, малих та середніх підприємств. Спеціалізуюся на допомозі польським, українським та міжнародним підприємцям. Всі послуги надаю віддалено, що дозволяє зручну та ефективну співпрацю.',
    
    // Testimonials
    'testimonials.title': 'Відгуки клієнтів',
    'testimonials.subtitle': 'Подивіться, що кажуть про мене мої клієнти',
    
    // Coverage
    'coverage.title': 'Зона обслуговування',
    'coverage.subtitle': 'Обслуговую клієнтів у всьому Сілезькому регіоні',
    'coverage.remote': 'Віддалене обслуговування по всій Польщі',
    'coverage.primary': 'Головні міста:',
    
    // Contact
    'contact.title': 'Контакт',
    'contact.subtitle': "Зв'яжіться зі мною",
    'contact.form.name': "Ім'я та прізвище",
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Повідомлення',
    'contact.form.submit': 'Відправити повідомлення',
    'contact.info.hours': 'Години роботи',
    'contact.info.address': 'Адреса',
    
    // FAQ
    'faq.title': 'Часті питання',
    'faq.subtitle': 'Відповіді на найчастіші питання',
    
    // Footer
    'footer.company': 'Наталія Качаєва',
    'footer.description': 'Професійні бухгалтерські послуги в Гліце',
    'footer.rights': 'Всі права захищені',
    
    // Common
    'common.phone': 'Телефон',
    'common.email': 'Email',
    'common.address': 'Адреса',
    'common.more': 'Більше',
    'common.less': 'Менше',
    'common.loading': 'Завантаження...',
    'common.error': 'Сталася помилка'
  },
  
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.about': 'Обо мне',
    'nav.testimonials': 'Отзывы',
    'nav.contact': 'Контакт',
    'nav.coverage': 'Зона обслуживания',
    'nav.faq': 'FAQ',
    
    // Hero Section
    'hero.title': 'Бухгалтер Гливице',
    'hero.subtitle': 'Профессиональные бухгалтерские услуги от 299 злотых/месяц',
    'hero.description': 'Комплексное ведение бухгалтерии ИП и малых компаний • Кадры и зарплата • PIT, CIT, VAT • Удаленное обслуживание на языках: польский, украинский, русский',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.cta.telegram': 'Telegram',
    'hero.cta.call': 'Звонок',
    'hero.offer': 'Акция: 20% скидка на первый месяц!',
    'hero.offer.expires': 'Предложение заканчивается через:',
    
    // Services
    'services.title': 'Бухгалтерские услуги',
    'services.subtitle': 'Комплексное обслуживание для вашего бизнеса',
    'services.cta': 'Узнать цену',
    
    // About
    'about.title': 'Обо мне',
    'about.subtitle': 'Наталия Качаева - Сертифицированный бухгалтер',
    'about.experience': '6+ лет опыта',
    'about.clients': '200+ довольных клиентов',
    'about.languages': 'Обслуживание на 3 языках',
    'about.remote': '100% удаленно',
    'about.description': 'Я сертифицированный бухгалтер с многолетним опытом обслуживания ИП, малых и средних предприятий. Специализируюсь на помощи польским, украинским и международным предпринимателям. Все услуги предоставляю удаленно, что позволяет удобное и эффективное сотрудничество.',
    
    // Testimonials
    'testimonials.title': 'Отзывы клиентов',
    'testimonials.subtitle': 'Посмотрите, что говорят обо мне мои клиенты',
    
    // Coverage
    'coverage.title': 'Зона обслуживания',
    'coverage.subtitle': 'Обслуживаю клиентов во всем Силезском регионе',
    'coverage.remote': 'Удаленное обслуживание по всей Польше',
    'coverage.primary': 'Основные города:',
    
    // Contact
    'contact.title': 'Контакт',
    'contact.subtitle': 'Свяжитесь со мной',
    'contact.form.name': 'Имя и фамилия',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Телефон',
    'contact.form.message': 'Сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.info.hours': 'Часы работы',
    'contact.info.address': 'Адрес',
    
    // FAQ
    'faq.title': 'Частые вопросы',
    'faq.subtitle': 'Ответы на самые частые вопросы',
    
    // Footer
    'footer.company': 'Наталия Качаева',
    'footer.description': 'Профессиональные бухгалтерские услуги в Гливице',
    'footer.rights': 'Все права защищены',
    
    // Common
    'common.phone': 'Телефон',
    'common.email': 'Email',
    'common.address': 'Адрес',
    'common.more': 'Больше',
    'common.less': 'Меньше',
    'common.loading': 'Загрузка...',
    'common.error': 'Произошла ошибка'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pl');

  useEffect(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (translations[browserLang]) {
        setCurrentLanguage(browserLang);
      }
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    availableLanguages: ['pl', 'en', 'uk', 'ru'],
    languageNames: {
      pl: 'Polski',
      en: 'English',
      uk: 'Українська',
      ru: 'Русский'
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};