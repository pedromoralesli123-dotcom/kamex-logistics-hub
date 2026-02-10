import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';
import truckBox from '@/assets/truck-box.jpeg';
import truckCab from '@/assets/truck-cab.jpeg';
import heroHome from '@/assets/hero-home.png';
import ClientLogosCarousel from '@/components/ClientLogosCarousel';

const Portfolio = () => {
  const { t } = useLanguage();

  const fleetImages = [
    { src: truckBox, alt: '26-foot box truck for freight transportation', categoryKey: 'portfolio.cat.boxtrucks' },
    { src: truckCab, alt: 'Freightliner truck cab', categoryKey: 'portfolio.cat.fleet' },
    { src: heroHome, alt: 'Professional driver with Kamex truck', categoryKey: 'portfolio.cat.team' },
  ];

  const fleetStats = [
    { value: '26ft', labelKey: 'portfolio.stats.boxtrucks' },
    { value: '5+', labelKey: 'portfolio.stats.vehicles' },
    { value: 'DOT', labelKey: 'portfolio.stats.certified' },
    { value: 'GPS', labelKey: 'portfolio.stats.tracked' },
  ];

  const contractExperience = [
    { name: 'Amazon PIP', descKey: 'portfolio.experience.amazon' },
    { name: 'Microsoft', descKey: 'portfolio.experience.microsoft' },
  ];

  const equipSpecs = [
    { labelKey: 'portfolio.equip.liftgate', valKey: 'portfolio.equip.liftgate.val' },
    { labelKey: 'portfolio.equip.capacity', valKey: 'portfolio.equip.capacity.val' },
    { labelKey: 'portfolio.equip.cargo', valKey: 'portfolio.equip.cargo.val' },
    { labelKey: 'portfolio.equip.insurance', valKey: 'portfolio.equip.insurance.val' },
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

      {/* Fleet Gallery */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
              {t('portfolio.gallery.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetImages.map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300">
                <img src={image.src} alt={image.alt} className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-800 text-sm rounded-full mb-2">
                    {t(image.categoryKey)}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
                {t('portfolio.equipment.title')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('portfolio.equipment.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {equipSpecs.map((spec, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl">
                    <div className="text-sm text-slate-600">{t(spec.labelKey)}</div>
                    <div className="font-bold text-slate-800">{t(spec.valKey)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden card-shadow">
              <img src={truckBox} alt="26-foot box truck specifications" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
