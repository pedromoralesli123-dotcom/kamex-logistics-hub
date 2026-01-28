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
    'hero.slogan': 'Reliable Local Freight. Delivered Right.',
    'hero.title': 'Powering Local Deliveries for Leading Brands',
    'hero.subtitle': 'Supporting Major Partners with Reliable Local Delivery. Professional trucking services for private and government contracts.',
    'hero.cta': 'Request a Quote',
    'hero.secondary': 'Our Services',
    
    // About
    'about.title': 'About Kamex Trucking',
    'about.subtitle': 'Family-Owned. 15+ Years of Excellence.',
    'about.description': 'We are a family-owned logistics provider with 15+ years of experience delivering contracted freight services throughout metropolitan and regional markets. Our organization has a proven history of successfully fulfilling contractual delivery obligations for enterprise-level partners, meeting performance, safety, and compliance benchmarks.',
    'about.mission': 'Our operational model emphasizes real-time dispatch oversight, regulatory compliance, and zone-based route control to ensure predictable outcomes and measurable service reliability. We support our partners with consistent execution, transparent communication, and scalable delivery solutions.',
    'about.stat1.value': '15+',
    'about.stat1.label': 'Years Experience',
    'about.stat2.value': '24/7',
    'about.stat2.label': 'Dispatch Oversight',
    'about.stat3.value': '100%',
    'about.stat3.label': 'Compliance Rate',
    
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
    'hero.slogan': 'Carga Local Confiable. Entregada Correctamente.',
    'hero.title': 'Impulsando Entregas Locales para Marcas Líderes',
    'hero.subtitle': 'Apoyando a Grandes Socios con Entregas Locales Confiables. Servicios profesionales de transporte para contratos privados y gubernamentales.',
    'hero.cta': 'Solicitar Cotización',
    'hero.secondary': 'Nuestros Servicios',
    
    // About
    'about.title': 'Sobre Kamex Trucking',
    'about.subtitle': 'Empresa Familiar. 15+ Años de Excelencia.',
    'about.description': 'Somos un proveedor de logística familiar con más de 15 años de experiencia entregando servicios de carga contratados en mercados metropolitanos y regionales. Nuestra organización tiene un historial comprobado de cumplimiento exitoso de obligaciones de entrega contractuales para socios de nivel empresarial, cumpliendo con estándares de rendimiento, seguridad y cumplimiento.',
    'about.mission': 'Nuestro modelo operativo enfatiza la supervisión de despacho en tiempo real, el cumplimiento normativo y el control de rutas por zonas para garantizar resultados predecibles y una confiabilidad de servicio medible. Apoyamos a nuestros socios con ejecución consistente, comunicación transparente y soluciones de entrega escalables.',
    'about.stat1.value': '15+',
    'about.stat1.label': 'Años de Experiencia',
    'about.stat2.value': '24/7',
    'about.stat2.label': 'Supervisión de Despacho',
    'about.stat3.value': '100%',
    'about.stat3.label': 'Tasa de Cumplimiento',
    
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
