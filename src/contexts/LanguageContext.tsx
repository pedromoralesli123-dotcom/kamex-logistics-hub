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
    'about.values.title': 'Our Core Values',
    'about.values.reliability.title': 'Reliability',
    'about.values.reliability.desc': 'We deliver on our promises, every time. Our partners count on us for consistent, dependable service.',
    'about.values.family.title': 'Family Values',
    'about.values.family.desc': 'As a family-owned business, we treat every client and team member like family.',
    'about.values.excellence.title': 'Excellence',
    'about.values.excellence.desc': 'We strive for excellence in every delivery, maintaining the highest standards of service.',
    'about.fleet.title': 'Our Fleet',
    'about.fleet.description': 'Our fleet of 26-foot box trucks is equipped with the latest technology and maintained to the highest standards for reliable service.',
    
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
    'services.cta.title': 'Ready to Optimize Your Logistics?',
    'services.cta.description': 'Contact us today to discuss how we can support your delivery needs with our reliable transportation solutions.',
    'services.cta.button': 'Get Started Today',
    
    // Portfolio
    'portfolio.title': 'Our Fleet',
    'portfolio.subtitle': 'Modern Equipment for Reliable Service',
    'portfolio.desc': 'Our well-maintained fleet of 26-foot box trucks ensures safe and efficient transportation of your goods.',
    'portfolio.gallery.title': 'Fleet Gallery',
    'portfolio.equipment.title': 'Equipment Specifications',
    'portfolio.equipment.description': 'Our 26-foot box trucks are equipped with lift gates, GPS tracking, and climate control options to meet diverse transportation needs.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to Get Started?',
    'contact.description': "Get in touch with our team to discuss your logistics needs. We're here to help you find the perfect transportation solution.",
    'contact.form.title': 'Send Us a Message',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.address': 'Address',
    'contact.available': 'Availability',
    
    // Footer
    'footer.tagline': 'Professional trucking and logistics services for private and government contracts.',
    'footer.contactTagline': 'Professional, scalable, and contract-ready delivery solutions you can rely on.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',

    // Why Choose Us
    'whychoose.badge': 'Our Commitment',
    'whychoose.title': 'Why Choose Us',
    'whychoose.proven.title': 'Proven Contract Performance',
    'whychoose.proven.desc': 'With over 15 years of experience, we have successfully executed and sustained delivery contracts in metropolitan and regional markets, meeting strict service-level, safety, and performance requirements.',
    'whychoose.reliability.title': 'Enterprise-Level Reliability',
    'whychoose.reliability.desc': 'Our operations are built around consistency and accountability. We understand that missed deliveries impact downstream operations, which is why reliability is embedded into every process we run.',
    'whychoose.dispatch.title': 'Real-Time Dispatch & Visibility',
    'whychoose.dispatch.desc': 'We utilize real-time dispatch coordination and monitoring to maintain route control, rapid issue resolution, and clear communication throughout the delivery lifecycle.',
    'whychoose.safety.title': 'Safety & Compliance First',
    'whychoose.safety.desc': 'We operate under strict highway safety standards and regulatory compliance protocols, reducing operational risk and ensuring dependable service for our partners.',
    'whychoose.zone.title': 'Zone Mapping & Route Control',
    'whychoose.zone.desc': 'Our zone-based mapping and route optimization systems allow us to maintain efficiency, predictability, and coverage accuracy across all service areas.',
    'whychoose.family.title': 'Family-Owned, Professionally Operated',
    'whychoose.family.desc': 'While family-owned, we operate with the structure, discipline, and performance standards expected by enterprise-level partners such as Amazon PIP and Microsoft.',

    // Portfolio new
    'portfolio.intro': 'Our portfolio reflects over 15 years of successful contract execution supporting metropolitan and regional freight operations. We have partnered with enterprise organizations requiring high reliability, strict compliance, and consistent performance across complex delivery environments.',
    'portfolio.experience.badge': 'Experience',
    'portfolio.experience.title': 'Contract Experience',
    'portfolio.experience.subtitle': 'We have supported and completed contracted delivery services for:',
    'portfolio.experience.amazon': 'Local and regional freight distribution with performance-based service standards',
    'portfolio.experience.microsoft': 'Scheduled freight deliveries requiring precision, security, and compliance',
    'portfolio.experience.closing': 'These engagements required adherence to strict service-level agreements, safety protocols, and operational benchmarks.',
    'portfolio.stats.boxtrucks': 'Box Trucks',
    'portfolio.stats.vehicles': 'Vehicles',
    'portfolio.stats.certified': 'Certified',
    'portfolio.stats.tracked': 'Tracked',
    'portfolio.equip.liftgate': 'Lift Gate',
    'portfolio.equip.liftgate.val': 'Available',
    'portfolio.equip.capacity': 'Load Capacity',
    'portfolio.equip.capacity.val': '10,000 lbs',
    'portfolio.equip.cargo': 'Cargo Space',
    'portfolio.equip.cargo.val': '1,800 cu ft',
    'portfolio.equip.insurance': 'Insurance',
    'portfolio.equip.insurance.val': 'Full Coverage',

    // Client Logos
    'clients.badge': 'Our Partners',
    'clients.title': 'Trusted By Industry Leaders',
    'clients.swipe': 'Swipe to see more →',

    // Services new
    'services.provide.badge': 'What We Offer',
    'services.provide.title': 'Services We Provide',
    'services.provide.desc': 'We deliver comprehensive freight, logistics, and specialty services for enterprise partners and commercial clients. With 15+ years of experience, we operate with precision, reliability, and strict compliance standards across metropolitan and regional markets.',
    'services.cat.freight': 'Freight & Logistics Delivery',
    'services.cat.freight.local': 'Local & Regional Freight',
    'services.cat.freight.local.desc': 'Scheduled and time-sensitive deliveries with box-truck operations, route control, and on-time performance.',
    'services.cat.freight.contracted': 'Contracted Logistics Services',
    'services.cat.freight.contracted.desc': 'End-to-end supply chain support aligned with SLAs and operational benchmarks.',
    'services.cat.freight.solo': 'Solo & Team Driver Operations',
    'services.cat.freight.solo.desc': 'Flexible delivery solutions, including single-driver routes and team-driver coverage for extended or high-volume operations.',
    'services.cat.specialty': 'Specialty Delivery',
    'services.cat.specialty.whiteglove': 'White Glove Services',
    'services.cat.specialty.whiteglove.desc': 'Careful handling, inside delivery, and placement of high-value, sensitive, or specialized freight.',
    'services.cat.specialty.commercial': 'Commercial Moving Services',
    'services.cat.specialty.commercial.desc': 'Structured moving solutions for offices, equipment, or enterprise relocations, executed safely and efficiently.',
    'services.cat.operational': 'Operational Excellence',
    'services.cat.operational.dispatch': 'Real-Time Dispatch & Route Management',
    'services.cat.operational.dispatch.desc': 'Continuous monitoring, communication, and rapid issue resolution.',
    'services.cat.operational.zone': 'Zone Mapping & Route Control',
    'services.cat.operational.zone.desc': 'Advanced route planning to ensure efficiency, accuracy, and predictable outcomes.',
    'services.cat.operational.safety': 'Safety & Compliance',
    'services.cat.operational.safety.desc': 'Full adherence to highway regulations, safety protocols, and partner requirements.',
    'services.scope.title': 'Scope of Services',
    'services.scope.1': 'Box truck freight delivery',
    'services.scope.2': 'Metropolitan and regional route coverage',
    'services.scope.3': 'Time-sensitive and scheduled deliveries',
    'services.scope.4': 'Zone-based route execution',
    'services.scope.5': 'Real-time dispatch coordination',
    'services.perf.title': 'Performance Highlights',
    'services.perf.1': 'Long-term contract fulfillment',
    'services.perf.2': 'High on-time delivery performance',
    'services.perf.3': 'Zero-tolerance safety compliance culture',
    'services.perf.4': 'Proven scalability during peak demand periods',
    'services.standards.title': 'Operational Standards',
    'services.standards.desc': 'Each contract is supported by structured dispatch oversight, compliance monitoring, and continuous performance evaluation. Our approach ensures reliability, transparency, and alignment with partner expectations.',
    'services.fulllist.badge': 'Full Service List',
    'services.fulllist.title': 'All Our Services',
    'services.features.local': 'Local & Regional Coverage',
    'services.features.sameday': 'Same-day Delivery',
    'services.features.scheduled': 'Scheduled Pickups',
    'services.features.multistop': 'Multi-stop Routes',
    'services.features.crossdock': 'Cross-docking',
    'services.features.inventory': 'Inventory Management',
    'services.features.gsa': 'GSA Certified',
    'services.features.federal': 'Federal Contracts',
    'services.features.statelocal': 'State & Local',
    'services.features.whiteglove': 'White Glove Service',
    'services.features.inside': 'Inside Delivery',
    'services.features.pod': 'POD Confirmation',
    'services.features.shortstorage': 'Short-term Storage',
    'services.features.pickpack': 'Pick & Pack',
    'services.features.fulfillment': 'Order Fulfillment',
    'services.features.drivers': 'Dedicated Drivers',
    'services.features.fixedschedules': 'Fixed Schedules',
    'services.features.custom': 'Custom Solutions',

    // Fleet image categories
    'portfolio.cat.boxtrucks': 'Box Trucks',
    'portfolio.cat.fleet': 'Fleet Vehicles',
    'portfolio.cat.team': 'Our Team',
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
    'about.values.title': 'Nuestros Valores',
    'about.values.reliability.title': 'Confiabilidad',
    'about.values.reliability.desc': 'Cumplimos nuestras promesas, siempre. Nuestros socios cuentan con nosotros para un servicio consistente y confiable.',
    'about.values.family.title': 'Valores Familiares',
    'about.values.family.desc': 'Como empresa familiar, tratamos a cada cliente y miembro del equipo como familia.',
    'about.values.excellence.title': 'Excelencia',
    'about.values.excellence.desc': 'Nos esforzamos por la excelencia en cada entrega, manteniendo los más altos estándares de servicio.',
    'about.fleet.title': 'Nuestra Flota',
    'about.fleet.description': 'Nuestra flota de camiones de 26 pies está equipada con la última tecnología y mantenida con los más altos estándares para un servicio confiable.',
    
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
    'services.cta.title': '¿Listo para Optimizar tu Logística?',
    'services.cta.description': 'Contáctanos hoy para discutir cómo podemos apoyar tus necesidades de entrega con nuestras soluciones de transporte confiables.',
    'services.cta.button': 'Comenzar Hoy',
    
    // Portfolio
    'portfolio.title': 'Nuestra Flota',
    'portfolio.subtitle': 'Equipos Modernos para un Servicio Confiable',
    'portfolio.desc': 'Nuestra flota bien mantenida de camiones de 26 pies garantiza el transporte seguro y eficiente de sus mercancías.',
    'portfolio.gallery.title': 'Galería de Flota',
    'portfolio.equipment.title': 'Especificaciones del Equipo',
    'portfolio.equipment.description': 'Nuestros camiones de 26 pies están equipados con plataformas elevadoras, rastreo GPS y opciones de control climático para satisfacer diversas necesidades de transporte.',
    
    // Contact
    'contact.title': 'Contáctenos',
    'contact.subtitle': '¿Listo para Comenzar?',
    'contact.description': 'Póngase en contacto con nuestro equipo para discutir sus necesidades logísticas. Estamos aquí para ayudarle a encontrar la solución de transporte perfecta.',
    'contact.form.title': 'Envíenos un Mensaje',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.company': 'Nombre de la Empresa',
    'contact.message': 'Su Mensaje',
    'contact.submit': 'Enviar Mensaje',
    'contact.address': 'Dirección',
    'contact.available': 'Disponibilidad',
    
    // Footer
    'footer.tagline': 'Servicios profesionales de transporte y logística para contratos privados y gubernamentales.',
    'footer.contactTagline': 'Soluciones de entrega profesionales, escalables y listas para contratos en las que puede confiar.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.contact': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',

    // Why Choose Us
    'whychoose.badge': 'Nuestro Compromiso',
    'whychoose.title': '¿Por Qué Elegirnos?',
    'whychoose.proven.title': 'Desempeño Contractual Comprobado',
    'whychoose.proven.desc': 'Con más de 15 años de experiencia, hemos ejecutado y sostenido exitosamente contratos de entrega en mercados metropolitanos y regionales, cumpliendo estrictos requisitos de nivel de servicio, seguridad y rendimiento.',
    'whychoose.reliability.title': 'Confiabilidad de Nivel Empresarial',
    'whychoose.reliability.desc': 'Nuestras operaciones se basan en la consistencia y la responsabilidad. Entendemos que las entregas fallidas impactan las operaciones posteriores, por eso la confiabilidad está integrada en cada proceso que ejecutamos.',
    'whychoose.dispatch.title': 'Despacho y Visibilidad en Tiempo Real',
    'whychoose.dispatch.desc': 'Utilizamos coordinación y monitoreo de despacho en tiempo real para mantener el control de rutas, resolución rápida de problemas y comunicación clara durante todo el ciclo de entrega.',
    'whychoose.safety.title': 'Seguridad y Cumplimiento Primero',
    'whychoose.safety.desc': 'Operamos bajo estrictos estándares de seguridad vial y protocolos de cumplimiento regulatorio, reduciendo el riesgo operativo y garantizando un servicio confiable para nuestros socios.',
    'whychoose.zone.title': 'Mapeo de Zonas y Control de Rutas',
    'whychoose.zone.desc': 'Nuestros sistemas de mapeo por zonas y optimización de rutas nos permiten mantener eficiencia, previsibilidad y precisión de cobertura en todas las áreas de servicio.',
    'whychoose.family.title': 'Empresa Familiar, Operación Profesional',
    'whychoose.family.desc': 'Aunque somos una empresa familiar, operamos con la estructura, disciplina y estándares de rendimiento esperados por socios de nivel empresarial como Amazon PIP y Microsoft.',

    // Portfolio new
    'portfolio.intro': 'Nuestro portafolio refleja más de 15 años de ejecución exitosa de contratos apoyando operaciones de carga metropolitanas y regionales. Nos hemos asociado con organizaciones empresariales que requieren alta confiabilidad, estricto cumplimiento y rendimiento consistente en entornos de entrega complejos.',
    'portfolio.experience.badge': 'Experiencia',
    'portfolio.experience.title': 'Experiencia Contractual',
    'portfolio.experience.subtitle': 'Hemos apoyado y completado servicios de entrega contratados para:',
    'portfolio.experience.amazon': 'Distribución de carga local y regional con estándares de servicio basados en rendimiento',
    'portfolio.experience.microsoft': 'Entregas de carga programadas que requieren precisión, seguridad y cumplimiento',
    'portfolio.experience.closing': 'Estos compromisos requirieron el cumplimiento de estrictos acuerdos de nivel de servicio, protocolos de seguridad y estándares operativos.',
    'portfolio.stats.boxtrucks': 'Camiones',
    'portfolio.stats.vehicles': 'Vehículos',
    'portfolio.stats.certified': 'Certificado',
    'portfolio.stats.tracked': 'Rastreado',
    'portfolio.equip.liftgate': 'Plataforma Elevadora',
    'portfolio.equip.liftgate.val': 'Disponible',
    'portfolio.equip.capacity': 'Capacidad de Carga',
    'portfolio.equip.capacity.val': '10,000 lbs',
    'portfolio.equip.cargo': 'Espacio de Carga',
    'portfolio.equip.cargo.val': '1,800 cu ft',
    'portfolio.equip.insurance': 'Seguro',
    'portfolio.equip.insurance.val': 'Cobertura Total',

    // Client Logos
    'clients.badge': 'Nuestros Socios',
    'clients.title': 'Confianza de Líderes de la Industria',
    'clients.swipe': 'Desliza para ver más →',

    // Services new
    'services.provide.badge': 'Lo Que Ofrecemos',
    'services.provide.title': 'Servicios Que Proporcionamos',
    'services.provide.desc': 'Ofrecemos servicios integrales de carga, logística y especialidad para socios empresariales y clientes comerciales. Con más de 15 años de experiencia, operamos con precisión, confiabilidad y estrictos estándares de cumplimiento en mercados metropolitanos y regionales.',
    'services.cat.freight': 'Carga y Logística de Entrega',
    'services.cat.freight.local': 'Carga Local y Regional',
    'services.cat.freight.local.desc': 'Entregas programadas y sensibles al tiempo con operaciones de camión, control de rutas y rendimiento puntual.',
    'services.cat.freight.contracted': 'Servicios de Logística Contratados',
    'services.cat.freight.contracted.desc': 'Soporte de cadena de suministro de extremo a extremo alineado con SLAs y estándares operativos.',
    'services.cat.freight.solo': 'Operaciones de Conductor Solo y en Equipo',
    'services.cat.freight.solo.desc': 'Soluciones de entrega flexibles, incluyendo rutas de conductor individual y cobertura de equipo para operaciones extendidas o de alto volumen.',
    'services.cat.specialty': 'Entrega Especializada',
    'services.cat.specialty.whiteglove': 'Servicios de Guante Blanco',
    'services.cat.specialty.whiteglove.desc': 'Manejo cuidadoso, entrega interior y colocación de carga de alto valor, sensible o especializada.',
    'services.cat.specialty.commercial': 'Servicios de Mudanza Comercial',
    'services.cat.specialty.commercial.desc': 'Soluciones de mudanza estructuradas para oficinas, equipos o reubicaciones empresariales, ejecutadas de forma segura y eficiente.',
    'services.cat.operational': 'Excelencia Operativa',
    'services.cat.operational.dispatch': 'Despacho y Gestión de Rutas en Tiempo Real',
    'services.cat.operational.dispatch.desc': 'Monitoreo continuo, comunicación y resolución rápida de problemas.',
    'services.cat.operational.zone': 'Mapeo de Zonas y Control de Rutas',
    'services.cat.operational.zone.desc': 'Planificación avanzada de rutas para garantizar eficiencia, precisión y resultados predecibles.',
    'services.cat.operational.safety': 'Seguridad y Cumplimiento',
    'services.cat.operational.safety.desc': 'Cumplimiento total de regulaciones viales, protocolos de seguridad y requisitos de socios.',
    'services.scope.title': 'Alcance de Servicios',
    'services.scope.1': 'Entrega de carga en camión',
    'services.scope.2': 'Cobertura de rutas metropolitanas y regionales',
    'services.scope.3': 'Entregas sensibles al tiempo y programadas',
    'services.scope.4': 'Ejecución de rutas por zonas',
    'services.scope.5': 'Coordinación de despacho en tiempo real',
    'services.perf.title': 'Aspectos Destacados del Rendimiento',
    'services.perf.1': 'Cumplimiento de contratos a largo plazo',
    'services.perf.2': 'Alto rendimiento de entregas puntuales',
    'services.perf.3': 'Cultura de cumplimiento de seguridad de tolerancia cero',
    'services.perf.4': 'Escalabilidad comprobada durante períodos de demanda máxima',
    'services.standards.title': 'Estándares Operativos',
    'services.standards.desc': 'Cada contrato es apoyado por supervisión de despacho estructurada, monitoreo de cumplimiento y evaluación continua del rendimiento. Nuestro enfoque garantiza confiabilidad, transparencia y alineación con las expectativas del socio.',
    'services.fulllist.badge': 'Lista Completa de Servicios',
    'services.fulllist.title': 'Todos Nuestros Servicios',
    'services.features.local': 'Cobertura Local y Regional',
    'services.features.sameday': 'Entrega el Mismo Día',
    'services.features.scheduled': 'Recogidas Programadas',
    'services.features.multistop': 'Rutas Multi-parada',
    'services.features.crossdock': 'Cross-docking',
    'services.features.inventory': 'Gestión de Inventario',
    'services.features.gsa': 'Certificado GSA',
    'services.features.federal': 'Contratos Federales',
    'services.features.statelocal': 'Estatales y Locales',
    'services.features.whiteglove': 'Servicio de Guante Blanco',
    'services.features.inside': 'Entrega Interior',
    'services.features.pod': 'Confirmación POD',
    'services.features.shortstorage': 'Almacenamiento a Corto Plazo',
    'services.features.pickpack': 'Pick & Pack',
    'services.features.fulfillment': 'Cumplimiento de Pedidos',
    'services.features.drivers': 'Conductores Dedicados',
    'services.features.fixedschedules': 'Horarios Fijos',
    'services.features.custom': 'Soluciones Personalizadas',

    // Fleet image categories
    'portfolio.cat.boxtrucks': 'Camiones',
    'portfolio.cat.fleet': 'Vehículos de Flota',
    'portfolio.cat.team': 'Nuestro Equipo',
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

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
