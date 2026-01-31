import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Truck, Package, Building2, MapPin, Warehouse, Route, ArrowRight, CheckCircle,
  Box, Timer, Target, TrendingUp, Shield, Radio, Map
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('services.freight.title'),
      description: t('services.freight.desc'),
      features: ['Local & Regional Coverage', 'Same-day Delivery', 'Scheduled Pickups'],
    },
    {
      icon: Package,
      title: t('services.distribution.title'),
      description: t('services.distribution.desc'),
      features: ['Multi-stop Routes', 'Cross-docking', 'Inventory Management'],
    },
    {
      icon: Building2,
      title: t('services.government.title'),
      description: t('services.government.desc'),
      features: ['GSA Certified', 'Federal Contracts', 'State & Local'],
    },
    {
      icon: MapPin,
      title: t('services.lastmile.title'),
      description: t('services.lastmile.desc'),
      features: ['White Glove Service', 'Inside Delivery', 'POD Confirmation'],
    },
    {
      icon: Warehouse,
      title: t('services.warehouse.title'),
      description: t('services.warehouse.desc'),
      features: ['Short-term Storage', 'Pick & Pack', 'Order Fulfillment'],
    },
    {
      icon: Route,
      title: t('services.dedicated.title'),
      description: t('services.dedicated.desc'),
      features: ['Dedicated Drivers', 'Fixed Schedules', 'Custom Solutions'],
    },
  ];

  const scopeOfServices = [
    'Box truck freight delivery',
    'Metropolitan and regional route coverage',
    'Time-sensitive and scheduled deliveries',
    'Zone-based route execution',
    'Real-time dispatch coordination',
  ];

  const performanceHighlights = [
    'Long-term contract fulfillment',
    'High on-time delivery performance',
    'Zero-tolerance safety compliance culture',
    'Proven scalability during peak demand periods',
  ];

  const serviceCategories = [
    {
      title: 'Freight & Logistics Delivery',
      icon: Truck,
      items: [
        {
          name: 'Local & Regional Freight',
          desc: 'Scheduled and time-sensitive deliveries with box-truck operations, route control, and on-time performance.',
        },
        {
          name: 'Contracted Logistics Services',
          desc: 'End-to-end supply chain support aligned with SLAs and operational benchmarks.',
        },
        {
          name: 'Solo & Team Driver Operations',
          desc: 'Flexible delivery solutions, including single-driver routes and team-driver coverage for extended or high-volume operations.',
        },
      ],
    },
    {
      title: 'Specialty Delivery',
      icon: Package,
      items: [
        {
          name: 'White Glove Services',
          desc: 'Careful handling, inside delivery, and placement of high-value, sensitive, or specialized freight.',
        },
        {
          name: 'Commercial Moving Services',
          desc: 'Structured moving solutions for offices, equipment, or enterprise relocations, executed safely and efficiently.',
        },
      ],
    },
    {
      title: 'Operational Excellence',
      icon: Target,
      items: [
        {
          name: 'Real-Time Dispatch & Route Management',
          desc: 'Continuous monitoring, communication, and rapid issue resolution.',
        },
        {
          name: 'Zone Mapping & Route Control',
          desc: 'Advanced route planning to ensure efficiency, accuracy, and predictable outcomes.',
        },
        {
          name: 'Safety & Compliance',
          desc: 'Full adherence to highway regulations, safety protocols, and partner requirements.',
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-blue-700">
        <div className="container-custom">
          <div className="text-center text-white">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              {t('services.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
              {t('services.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Services We Provide - Main Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2 mb-6">
              Services We Provide
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We deliver comprehensive freight, logistics, and specialty services for enterprise partners and commercial clients. 
              With 15+ years of experience, we operate with precision, reliability, and strict compliance standards across 
              metropolitan and regional markets.
            </p>
          </div>

          {/* Service Categories */}
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center">
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                      <h4 className="text-lg font-heading font-bold text-slate-800 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope & Performance */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Scope of Services */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Box className="h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-heading font-bold text-slate-800">
                  Scope of Services
                </h3>
              </div>
              <ul className="space-y-4">
                {scopeOfServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance Highlights */}
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-heading font-bold text-slate-800">
                  Performance Highlights
                </h3>
              </div>
              <ul className="space-y-4">
                {performanceHighlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Standards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-10 w-10 text-blue-700" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
                Operational Standards
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Each contract is supported by structured dispatch oversight, compliance monitoring, and continuous performance evaluation. 
              Our approach ensures reliability, transparency, and alignment with partner expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Original Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Full Service List
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
              All Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-700/20"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-700/10 flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                  <service.icon className="h-7 w-7 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-blue-700 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="bg-blue-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              {t('services.cta.description')}
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                {t('services.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
