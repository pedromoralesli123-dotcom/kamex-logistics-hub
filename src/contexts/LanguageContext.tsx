import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact Us',
    'nav.quote': 'Get a Quote',
    
    // Hero
    'hero.title': 'Your Trusted Partner in Logistics & Distribution',
    'hero.subtitle': 'Professional trucking services for private and government contracts. Reliable, efficient, and on-time delivery across the nation.',
    'hero.cta': 'Request a Quote',
    'hero.secondary': 'Our Services',
    
    // About
    'about.title': 'About Kamex Trucking',
    'about.subtitle': 'Delivering Excellence Since Day One',
    'about.description': 'Kamex Trucking LLC is a professional logistics and distribution company based in Manhattan, New York. We specialize in general contracting services with a fleet of 26-foot box trucks designed for efficient freight transportation.',
    'about.mission': 'Our mission is to provide reliable, safe, and cost-effective transportation solutions for both private enterprises and government agencies.',
    'about.stat1.value': '100+',
    'about.stat1.label': 'Successful Deliveries',
    'about.stat2.value': '24/7',
    'about.stat2.label': 'Support Available',
    'about.stat3.value': '100%',
    'about.stat3.label': 'On-Time Rate',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Logistics Solutions',
    'services.freight.title': 'Freight Transportation',
    'services.freight.desc': 'Reliable freight delivery with our fleet of 26-foot box trucks for commercial and residential needs.',
    'services.distribution.title': 'Distribution Services',
    'services.distribution.desc': 'Efficient distribution solutions for businesses requiring regular shipment schedules.',
    'services.government.title': 'Government Contracts',
    'services.government.desc': 'Certified contractor for state and federal government logistics projects.',
    'services.lastmile.title': 'Last-Mile Delivery',
    'services.lastmile.desc': 'Fast and efficient final-stage delivery services to ensure your packages reach their destination.',
    'services.warehouse.title': 'Warehouse Distribution',
    'services.warehouse.desc': 'Streamlined warehouse-to-destination logistics for optimal supply chain management.',
    'services.dedicated.title': 'Dedicated Routes',
    'services.dedicated.desc': 'Custom dedicated route services tailored to your specific business requirements.',
    
    // Portfolio
    'portfolio.title': 'Our Fleet',
    'portfolio.subtitle': 'Modern Equipment for Reliable Service',
    'portfolio.desc': 'Our well-maintained fleet of 26-foot box trucks ensures safe and efficient transportation of your goods.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to Get Started?',
    'contact.description': 'Get in touch with our team to discuss your logistics needs. We\'re here to help you find the perfect transportation solution.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.address': 'Manhattan, New York',
    'contact.available': 'Available 24/7',
    
    // Footer
    'footer.tagline': 'Professional trucking and logistics services for private and government contracts.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    'nav.quote': 'Cotización',
    
    // Hero
    'hero.title': 'Su Socio de Confianza en Logística y Distribución',
    'hero.subtitle': 'Servicios profesionales de transporte para contratos privados y gubernamentales. Entregas confiables, eficientes y puntuales en todo el país.',
    'hero.cta': 'Solicitar Cotización',
    'hero.secondary': 'Nuestros Servicios',
    
    // About
    'about.title': 'Sobre Kamex Trucking',
    'about.subtitle': 'Excelencia en Cada Entrega',
    'about.description': 'Kamex Trucking LLC es una empresa profesional de logística y distribución con sede en Manhattan, Nueva York. Nos especializamos en servicios de contratación general con una flota de camiones de cajón de 26 pies diseñados para el transporte eficiente de carga.',
    'about.mission': 'Nuestra misión es proporcionar soluciones de transporte confiables, seguras y rentables tanto para empresas privadas como para agencias gubernamentales.',
    'about.stat1.value': '100+',
    'about.stat1.label': 'Entregas Exitosas',
    'about.stat2.value': '24/7',
    'about.stat2.label': 'Soporte Disponible',
    'about.stat3.value': '100%',
    'about.stat3.label': 'Tasa de Puntualidad',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones Logísticas Integrales',
    'services.freight.title': 'Transporte de Carga',
    'services.freight.desc': 'Entrega confiable de carga con nuestra flota de camiones de 26 pies para necesidades comerciales y residenciales.',
    'services.distribution.title': 'Servicios de Distribución',
    'services.distribution.desc': 'Soluciones de distribución eficientes para empresas que requieren horarios de envío regulares.',
    'services.government.title': 'Contratos Gubernamentales',
    'services.government.desc': 'Contratista certificado para proyectos de logística estatales y federales.',
    'services.lastmile.title': 'Entrega de Última Milla',
    'services.lastmile.desc': 'Servicios de entrega rápidos y eficientes en la etapa final para asegurar que sus paquetes lleguen a destino.',
    'services.warehouse.title': 'Distribución desde Almacén',
    'services.warehouse.desc': 'Logística optimizada de almacén a destino para una gestión óptima de la cadena de suministro.',
    'services.dedicated.title': 'Rutas Dedicadas',
    'services.dedicated.desc': 'Servicios de rutas dedicadas personalizadas según sus requisitos comerciales específicos.',
    
    // Portfolio
    'portfolio.title': 'Nuestra Flota',
    'portfolio.subtitle': 'Equipos Modernos para un Servicio Confiable',
    'portfolio.desc': 'Nuestra flota bien mantenida de camiones de 26 pies garantiza el transporte seguro y eficiente de sus mercancías.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¿Listo para Comenzar?',
    'contact.description': 'Póngase en contacto con nuestro equipo para discutir sus necesidades logísticas. Estamos aquí para ayudarle a encontrar la solución de transporte perfecta.',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.company': 'Nombre de la Empresa',
    'contact.message': 'Su Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.address': 'Manhattan, Nueva York',
    'contact.available': 'Disponible 24/7',
    
    // Footer
    'footer.tagline': 'Servicios profesionales de transporte y logística para contratos privados y gubernamentales.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.contact': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
