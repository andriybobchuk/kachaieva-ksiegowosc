// Central configuration file for Nataliia Kachaieva Accounting Website
// All customizable data in one place for easy management

export const config = {
  // Company Information
  company: {
    name: 'Nataliia Kachaieva',
    title: 'Księgowa • Accounting Services',
    tagline: 'Profesjonalne usługi księgowe w Gliwicach',
    established: '2018',
    experience: '6+ lat doświadczenia',
    registration: 'Certyfikowana księgowa nr 2847/2018'
  },

  // Contact Information (using realistic fake data)
  contact: {
    phone: '+48 32 555 1234',
    whatsapp: '+48 32 555 1234',
    telegram: '@nataliia_ksiegowa',
    email: 'nataliia.kachaieva@ksiegowa-gliwice.pl',
    businessHours: 'Pon-Pt: 8:00-18:00',
    address: {
      street: 'ul. Zwycięstwa 42/15',
      city: 'Gliwice',
      postalCode: '44-100',
      full: 'ul. Zwycięstwa 42/15, 44-100 Gliwice'
    }
  },

  // Color Scheme (PrivatBank Green Theme)
  colors: {
    primary: '#16a34a',        // PrivatBank green
    primaryHover: '#15803d',   // Darker green on hover
    primaryLight: '#22c55e',   // Lighter green
    secondary: '#1f2937',      // Dark gray
    accent: '#0ea5e9',         // Blue for CTAs
    warning: '#f59e0b',        // Amber for offers
    success: '#10b981',        // Success green
    background: '#ffffff',      // White background
    muted: '#f3f4f6'          // Light gray
  },

  // Services List (easily expandable)
  services: [
    {
      id: 'ksiegowosc',
      icon: '📊',
      name: 'Księgowość pełna',
      nameEn: 'Full Bookkeeping',
      nameUk: 'Повна бухгалтерія',
      nameRu: 'Полная бухгалтерия',
      price: '299 zł/miesiąc',
      description: 'Kompleksowa obsługa księgowa JDG i małych firm',
      descriptionEn: 'Comprehensive bookkeeping for sole proprietorships and small companies',
      features: ['VAT', 'PIT', 'ZUS', 'JPK', 'Sprawozdania']
    },
    {
      id: 'kadry-place',
      icon: '👥',
      name: 'Kadry i płace',
      nameEn: 'HR & Payroll',
      nameUk: 'Кадри і заробітна плата',
      nameRu: 'Кадры и зарплата',
      price: '50 zł/pracownik',
      description: 'Obsługa kadrowo-płacowa pracowników',
      descriptionEn: 'HR and payroll services for employees',
      features: ['Umowy', 'Listy płac', 'ZUS', 'US', 'Urlopy']
    },
    {
      id: 'pit-cit-vat',
      icon: '📋',
      name: 'PIT, CIT, VAT',
      nameEn: 'Tax Returns',
      nameUk: 'Податкові декларації',
      nameRu: 'Налоговые декларации',
      price: '150-400 zł',
      description: 'Rozliczenia podatkowe i deklaracje',
      descriptionEn: 'Tax settlements and declarations',
      features: ['PIT-36', 'PIT-37', 'CIT-8', 'VAT-7', 'Optymalizacja']
    },
    {
      id: 'rejestracja-dzialalnosci',
      icon: '🏢',
      name: 'Rejestracja działalności',
      nameEn: 'Business Registration',
      nameUk: 'Реєстрація діяльності',
      nameRu: 'Регистрация деятельности',
      price: '200-500 zł',
      description: 'Zakładanie i rejestracja JDG, sp. z o.o.',
      descriptionEn: 'Setting up and registering sole proprietorship, LLC',
      features: ['JDG', 'Sp. z o.o.', 'REGON', 'NIP', 'ZUS']
    },
    {
      id: 'konsultacje',
      icon: '💬',
      name: 'Konsultacje',
      nameEn: 'Consultations',
      nameUk: 'Консультації',
      nameRu: 'Консультации',
      price: '100 zł/h',
      description: 'Doradztwo podatkowe i księgowe',
      descriptionEn: 'Tax and accounting advisory',
      features: ['Optymalizacja', 'Planowanie', 'Strategia', 'Online', 'Pilne sprawy']
    }
  ],

  // Testimonials (realistic fake data)
  testimonials: [
    {
      id: 1,
      name: 'Marcin Kowalski',
      business: 'JDG - Usługi IT',
      text: 'Współpraca z Natalią od 2 lat. Zawsze terminowo, profesjonalnie i z pełnym zrozumieniem potrzeb małej firmy. Polecam!',
      textEn: 'Working with Natalia for 2 years. Always on time, professional and with full understanding of small business needs. Highly recommend!',
      rating: 5,
      date: '2024'
    },
    {
      id: 2,
      name: 'Oksana Petrenko',
      business: 'Salon kosmetyczny',
      text: 'Дуже задоволена співпрацею! Наталія говорить українською, що дуже важливо. Все пояснює зрозуміло та допомагає з документами.',
      textPl: 'Bardzo zadowolona ze współpracy! Natalia mówi po ukraińsku, co jest bardzo ważne. Wszystko wyjaśnia zrozumiale i pomaga z dokumentami.',
      textEn: 'Very satisfied with the cooperation! Natalia speaks Ukrainian, which is very important. Explains everything clearly and helps with documents.',
      rating: 5,
      date: '2024'
    },
    {
      id: 3,
      name: 'Anna Nowak',
      business: 'Księgowa Kraków Sp. z o.o.',
      text: 'Kompleksowa obsługa, konkurencyjne ceny, szybka komunikacja. Szczególnie doceniam pomoc przy przejściu na JPK_VAT.',
      textEn: 'Comprehensive service, competitive prices, quick communication. I especially appreciate the help with the transition to JPK_VAT.',
      rating: 5,
      date: '2023'
    },
    {
      id: 4,
      name: 'Pavel Novák',
      business: 'JDG - Transport',
      text: 'Работаю с Наталией уже 3 года. Очень профессиональный подход, всегда поможет советом. Рекомендую всем предпринимателям!',
      textPl: 'Pracuję z Natalią już 3 lata. Bardzo profesjonalne podejście, zawsze pomoże radą. Polecam wszystkim przedsiębiorcom!',
      textEn: 'Working with Natalia for 3 years already. Very professional approach, always helps with advice. Recommend to all entrepreneurs!',
      rating: 5,
      date: '2023'
    }
  ],

  // Pricing Information
  pricing: {
    startingPrice: '299 zł/miesiąc',
    offer: {
      text: 'Rabat 20% na pierwszy miesiąc!',
      textEn: '20% discount on first month!',
      textUk: '20% знижка на перший місяць!',
      textRu: '20% скидка на первый месяц!',
      expires: new Date(new Date().setHours(23, 59, 59, 999)) // End of today
    }
  },

  // Coverage Areas
  coverage: {
    primary: ['Gliwice', 'Katowice', 'Zabrze', 'Bytom', 'Chorzów'],
    region: 'Śląsk',
    remote: true,
    remoteText: 'Obsługa zdalna na terenie całej Polski',
    remoteTextEn: 'Remote service throughout Poland',
    remoteTextUk: 'Віддалене обслуговування по всій Польщі',
    remoteTextRu: 'Удаленное обслуживание по всей Польше'
  },

  // FAQ Data
  faq: [
    {
      id: 1,
      question: 'Jakie dokumenty potrzebuję do rozpoczęcia współpracy?',
      questionEn: 'What documents do I need to start cooperation?',
      answer: 'Do rozpoczęcia potrzebujesz: NIP, REGON, dokument potwierdzający działalność oraz ostatnie rozliczenia (jeśli prowadziłeś księgowość wcześniej).',
      answerEn: 'To start you need: NIP, REGON, document confirming business activity and recent settlements (if you kept books before).'
    },
    {
      id: 2,
      question: 'Czy oferujesz usługi zdalne?',
      questionEn: 'Do you offer remote services?',
      answer: 'Tak, wszystkie usługi świadczę zdalnie. Komunikujemy się przez telefon, email, WhatsApp lub Telegram. Dokumenty otrzymuję elektronicznie.',
      answerEn: 'Yes, I provide all services remotely. We communicate by phone, email, WhatsApp or Telegram. I receive documents electronically.'
    },
    {
      id: 3,
      question: 'Ile kosztuje prowadzenie księgowości JDG?',
      questionEn: 'How much does JDG bookkeeping cost?',
      answer: 'Cena zależy od wielkości obrotu i ilości dokumentów. Podstawowy pakiet to 299 zł/miesiąc. Oferuję też rabat dla nowych klientów.',
      answerEn: 'Price depends on turnover size and number of documents. Basic package is 299 PLN/month. I also offer discount for new clients.'
    },
    {
      id: 4,
      question: 'W jakich językach świadczysz usługi?',
      questionEn: 'In what languages do you provide services?',
      answer: 'Świadczę usługi w języku polskim, ukraińskim i rosyjskim. Dokumentację prowadzę zgodnie z polskim prawem.',
      answerEn: 'I provide services in Polish, Ukrainian and Russian. I keep documentation in accordance with Polish law.'
    },
    {
      id: 5,
      question: 'Jak szybko otrzymam dokumenty rozliczeniowe?',
      questionEn: 'How quickly will I receive settlement documents?',
      answer: 'Standardowo w ciągu 2-3 dni roboczych od otrzymania wszystkich dokumentów. W pilnych przypadkach możliwa realizacja tego samego dnia.',
      answerEn: 'Typically within 2-3 business days from receiving all documents. In urgent cases, same-day completion is possible.'
    }
  ],

  // SEO Configuration
  seo: {
    title: 'Księgowa Gliwice - Nataliia Kachaieva | Księgowość od 299 zł',
    titleEn: 'Accountant Gliwice - Nataliia Kachaieva | Bookkeeping from 299 PLN',
    description: 'Profesjonalna księgowa w Gliwicach ✓ Księgowość JDG od 299 zł/miesiąc ✓ Kadry i płace ✓ PIT, CIT, VAT ✓ Obsługa zdalna ✓ Języki: PL, UA, RU',
    keywords: 'księgowa Gliwice, księgowość Gliwice, księgowy Gliwice, JDG Gliwice, kadry płace Gliwice, PIT CIT VAT Gliwice, księgowa ukraińska Gliwice',
    author: 'Nataliia Kachaieva',
    url: 'https://ksiegowa-gliwice.pl'
  },

  // Social Media & Communication
  social: {
    whatsapp: 'https://wa.me/48325551234',
    telegram: 'https://t.me/nataliia_ksiegowa',
    linkedin: 'https://linkedin.com/in/nataliia-kachaieva-ksiegowa',
    facebook: 'https://facebook.com/KsiegowaGliwiceNataliia'
  },

  // Business Schema (for SEO)
  schema: {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    'name': 'Nataliia Kachaieva - Księgowa Gliwice',
    'description': 'Profesjonalne usługi księgowe w Gliwicach dla JDG, małych i średnich firm',
    'url': 'https://ksiegowa-gliwice.pl',
    'telephone': '+48325551234',
    'email': 'nataliia.kachaieva@ksiegowa-gliwice.pl',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'ul. Zwycięstwa 42/15',
      'addressLocality': 'Gliwice',
      'postalCode': '44-100',
      'addressCountry': 'PL'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 50.2945,
      'longitude': 18.6714
    },
    'openingHours': 'Mo-Fr 08:00-18:00',
    'priceRange': '299-999 PLN',
    'serviceArea': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': 50.2945,
        'longitude': 18.6714
      },
      'geoRadius': '50000'
    }
  }
}

export default config;