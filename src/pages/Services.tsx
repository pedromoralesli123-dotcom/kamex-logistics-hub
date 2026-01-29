import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Truck, Package, Building2, MapPin, Warehouse, Route, ArrowRight, CheckCircle } from 'lucide-react';
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

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
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
