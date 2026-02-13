import { useLanguage } from '@/contexts/LanguageContext';
import truckBox from '@/assets/truck-box.jpeg';
import truckCab from '@/assets/truck-cab.jpeg';
import cargoVan from '@/assets/cargo-van.jpg';
import truck16ft from '@/assets/truck-16ft.jpg';
import { Truck, Ruler, Weight, Gauge, Shield } from 'lucide-react';

const PortfolioSection = () => {
  const { t } = useLanguage();

  const fleetUnits = [
    {
      image: truckCab,
      nameKey: 'portfolio.unit.cab.name',
      descKey: 'portfolio.unit.cab.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.cab.type' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.cab.payload' },
      ],
    },
    {
      image: cargoVan,
      nameKey: 'portfolio.unit.van.name',
      descKey: 'portfolio.unit.van.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.van.type' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.van.payload' },
      ],
    },
    {
      image: truck16ft,
      nameKey: 'portfolio.unit.16ft.name',
      descKey: 'portfolio.unit.16ft.desc',
      specs: [
        { icon: Ruler, labelKey: 'portfolio.spec.cargo', valKey: 'portfolio.unit.16ft.cargo' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.16ft.payload' },
      ],
    },
    {
      image: truckBox,
      nameKey: 'portfolio.unit.26ft.name',
      descKey: 'portfolio.unit.26ft.desc',
      specs: [
        { icon: Ruler, labelKey: 'portfolio.spec.cargo', valKey: 'portfolio.unit.26ft.cargo' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.26ft.payload' },
      ],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t('portfolio.subtitle')}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-4">
            {t('portfolio.fleet.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('portfolio.fleet.desc')}
          </p>
        </div>

        {/* Fleet Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetUnits.map((unit, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={unit.image}
                  alt={t(unit.nameKey)}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">
                  {t(unit.nameKey)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {t(unit.descKey)}
                </p>
                <div className="space-y-2">
                  {unit.specs.map((spec, si) => (
                    <div key={si} className="flex items-center gap-2 text-sm">
                      <spec.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{t(spec.labelKey)}:</span>
                      <span className="font-semibold text-foreground">{t(spec.valKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4', label: t('portfolio.stats.types') },
            { value: '10+', label: t('portfolio.stats.vehicles') },
            { value: 'DOT', label: t('portfolio.stats.certified') },
            { value: 'GPS', label: t('portfolio.stats.tracked') },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl card-shadow"
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
