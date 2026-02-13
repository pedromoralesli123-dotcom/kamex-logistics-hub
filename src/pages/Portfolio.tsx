import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Truck, Package, Ruler, Weight, Gauge, Shield } from 'lucide-react';
import truckBox from '@/assets/truck-box.jpeg';
import truckCab from '@/assets/truck-cab.jpeg';
import cargoVan from '@/assets/cargo-van.jpg';
import truck16ft from '@/assets/truck-16ft.jpg';
import ClientLogosCarousel from '@/components/ClientLogosCarousel';

const Portfolio = () => {
  const { t } = useLanguage();

  const fleetUnits = [
    {
      image: truckCab,
      nameKey: 'portfolio.unit.cab.name',
      descKey: 'portfolio.unit.cab.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.cab.type' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.cab.payload' },
        { icon: Gauge, labelKey: 'portfolio.spec.engine', valKey: 'portfolio.unit.cab.engine' },
        { icon: Shield, labelKey: 'portfolio.spec.features', valKey: 'portfolio.unit.cab.features' },
      ],
    },
    {
      image: cargoVan,
      nameKey: 'portfolio.unit.van.name',
      descKey: 'portfolio.unit.van.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.van.type' },
        { icon: Ruler, labelKey: 'portfolio.spec.cargo', valKey: 'portfolio.unit.van.cargo' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.van.payload' },
        { icon: Shield, labelKey: 'portfolio.spec.features', valKey: 'portfolio.unit.van.features' },
      ],
    },
    {
      image: truck16ft,
      nameKey: 'portfolio.unit.16ft.name',
      descKey: 'portfolio.unit.16ft.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.16ft.type' },
        { icon: Ruler, labelKey: 'portfolio.spec.cargo', valKey: 'portfolio.unit.16ft.cargo' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.16ft.payload' },
        { icon: Shield, labelKey: 'portfolio.spec.features', valKey: 'portfolio.unit.16ft.features' },
      ],
    },
    {
      image: truckBox,
      nameKey: 'portfolio.unit.26ft.name',
      descKey: 'portfolio.unit.26ft.desc',
      specs: [
        { icon: Truck, labelKey: 'portfolio.spec.type', valKey: 'portfolio.unit.26ft.type' },
        { icon: Ruler, labelKey: 'portfolio.spec.cargo', valKey: 'portfolio.unit.26ft.cargo' },
        { icon: Weight, labelKey: 'portfolio.spec.payload', valKey: 'portfolio.unit.26ft.payload' },
        { icon: Shield, labelKey: 'portfolio.spec.features', valKey: 'portfolio.unit.26ft.features' },
      ],
    },
  ];

  const fleetStats = [
    { value: '4', labelKey: 'portfolio.stats.types' },
    { value: '10+', labelKey: 'portfolio.stats.vehicles' },
    { value: 'DOT', labelKey: 'portfolio.stats.certified' },
    { value: 'GPS', labelKey: 'portfolio.stats.tracked' },
  ];

  const contractExperience = [
    { name: 'Amazon PIP', descKey: 'portfolio.experience.amazon' },
    { name: 'Microsoft', descKey: 'portfolio.experience.microsoft' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-blue-700">
        <div className="container-custom">
          <div className="text-center text-white">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              {t('portfolio.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
              {t('portfolio.title')}
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
              {t('portfolio.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Contract Experience Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
                {t('portfolio.experience.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
                {t('portfolio.experience.title')}
              </h2>
              <p className="text-slate-600 text-lg mt-4">
                {t('portfolio.experience.subtitle')}
              </p>
            </div>

            <div className="space-y-6 mb-10">
              {contractExperience.map((contract, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border-l-4 border-blue-700">
                  <CheckCircle className="h-6 w-6 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-heading font-bold text-slate-800">{contract.name}</h3>
                    <p className="text-slate-600 mt-1">{t(contract.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-slate-600 text-lg italic">
              {t('portfolio.experience.closing')}
            </p>
          </div>
        </div>
      </section>

      <ClientLogosCarousel />

      {/* Fleet Stats */}
      <section className="py-12 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl card-shadow">
                <div className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Units — Specs Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('portfolio.fleet.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
              {t('portfolio.fleet.title')}
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
              {t('portfolio.fleet.desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {fleetUnits.map((unit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={unit.image}
                    alt={t(unit.nameKey)}
                    className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                      {t(unit.nameKey)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-heading font-bold text-slate-800 mb-2">
                    {t(unit.nameKey)}
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                    {t(unit.descKey)}
                  </p>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {unit.specs.map((spec, si) => (
                      <div key={si} className="flex items-start gap-2 bg-slate-50 rounded-lg p-3">
                        <spec.icon className="h-4 w-4 text-blue-700 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                            {t(spec.labelKey)}
                          </div>
                          <div className="text-sm font-semibold text-slate-800">
                            {t(spec.valKey)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
