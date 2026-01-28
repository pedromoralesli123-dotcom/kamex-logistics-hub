import { useLanguage } from '@/contexts/LanguageContext';
import truckBox from '@/assets/truck-box.jpeg';
import truckCab from '@/assets/truck-cab.jpeg';

const PortfolioSection = () => {
  const { t } = useLanguage();

  const fleetImages = [
    {
      src: truckBox,
      alt: '26-foot box truck for freight transportation',
    },
    {
      src: truckCab,
      alt: 'Freightliner truck cab',
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
            {t('portfolio.title')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t('portfolio.desc')}
          </p>
        </div>

        {/* Fleet Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {fleetImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kamex-gray-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '26ft', label: 'Box Trucks' },
            { value: '5+', label: 'Vehicles' },
            { value: 'DOT', label: 'Certified' },
            { value: 'GPS', label: 'Tracked' },
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
