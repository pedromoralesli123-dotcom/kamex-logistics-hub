import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Package, Building2, MapPin, Warehouse, Route } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Truck,
      title: t('services.freight.title'),
      description: t('services.freight.desc'),
    },
    {
      icon: Package,
      title: t('services.distribution.title'),
      description: t('services.distribution.desc'),
    },
    {
      icon: Building2,
      title: t('services.government.title'),
      description: t('services.government.desc'),
    },
    {
      icon: MapPin,
      title: t('services.lastmile.title'),
      description: t('services.lastmile.desc'),
    },
    {
      icon: Warehouse,
      title: t('services.warehouse.title'),
      description: t('services.warehouse.desc'),
    },
    {
      icon: Route,
      title: t('services.dedicated.title'),
      description: t('services.dedicated.desc'),
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t('services.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            {t('services.title')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
