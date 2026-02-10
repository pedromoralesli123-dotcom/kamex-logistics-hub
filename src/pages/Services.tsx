import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  Truck, Package, Building2, MapPin, Warehouse, Route, ArrowRight, CheckCircle,
  Box, TrendingUp, Shield, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('services.freight.title'),
      description: t('services.freight.desc'),
      features: ['services.features.local', 'services.features.sameday', 'services.features.scheduled'],
    },
    {
      icon: Package,
      title: t('services.distribution.title'),
      description: t('services.distribution.desc'),
      features: ['services.features.multistop', 'services.features.crossdock', 'services.features.inventory'],
    },
    {
      icon: Building2,
      title: t('services.government.title'),
      description: t('services.government.desc'),
      features: ['services.features.gsa', 'services.features.federal', 'services.features.statelocal'],
    },
    {
      icon: MapPin,
      title: t('services.lastmile.title'),
      description: t('services.lastmile.desc'),
      features: ['services.features.whiteglove', 'services.features.inside', 'services.features.pod'],
    },
    {
      icon: Warehouse,
      title: t('services.warehouse.title'),
      description: t('services.warehouse.desc'),
      features: ['services.features.shortstorage', 'services.features.pickpack', 'services.features.fulfillment'],
    },
    {
      icon: Route,
      title: t('services.dedicated.title'),
      description: t('services.dedicated.desc'),
      features: ['services.features.drivers', 'services.features.fixedschedules', 'services.features.custom'],
    },
  ];

  const scopeKeys = ['services.scope.1', 'services.scope.2', 'services.scope.3', 'services.scope.4', 'services.scope.5'];
  const perfKeys = ['services.perf.1', 'services.perf.2', 'services.perf.3', 'services.perf.4'];

  const serviceCategories = [
    {
      titleKey: 'services.cat.freight',
      icon: Truck,
      items: [
        { nameKey: 'services.cat.freight.local', descKey: 'services.cat.freight.local.desc' },
        { nameKey: 'services.cat.freight.contracted', descKey: 'services.cat.freight.contracted.desc' },
        { nameKey: 'services.cat.freight.solo', descKey: 'services.cat.freight.solo.desc' },
      ],
    },
    {
      titleKey: 'services.cat.specialty',
      icon: Package,
      items: [
        { nameKey: 'services.cat.specialty.whiteglove', descKey: 'services.cat.specialty.whiteglove.desc' },
        { nameKey: 'services.cat.specialty.commercial', descKey: 'services.cat.specialty.commercial.desc' },
      ],
    },
    {
      titleKey: 'services.cat.operational',
      icon: Target,
      items: [
        { nameKey: 'services.cat.operational.dispatch', descKey: 'services.cat.operational.dispatch.desc' },
        { nameKey: 'services.cat.operational.zone', descKey: 'services.cat.operational.zone.desc' },
        { nameKey: 'services.cat.operational.safety', descKey: 'services.cat.operational.safety.desc' },
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

      {/* Services We Provide */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('services.provide.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2 mb-6">
              {t('services.provide.title')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('services.provide.desc')}
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-blue-700 flex items-center justify-center">
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-slate-800">
                    {t(category.titleKey)}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                      <h4 className="text-lg font-heading font-bold text-slate-800 mb-2">
                        {t(item.nameKey)}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {t(item.descKey)}
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
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Box className="h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-heading font-bold text-slate-800">
                  {t('services.scope.title')}
                </h3>
              </div>
              <ul className="space-y-4">
                {scopeKeys.map((key, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl card-shadow">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-heading font-bold text-slate-800">
                  {t('services.perf.title')}
                </h3>
              </div>
              <ul className="space-y-4">
                {perfKeys.map((key, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{t(key)}</span>
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
                {t('services.standards.title')}
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('services.standards.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Original Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('services.fulllist.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
              {t('services.fulllist.title')}
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
                  {service.features.map((featureKey, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-blue-700 flex-shrink-0" />
                      {t(featureKey)}
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
