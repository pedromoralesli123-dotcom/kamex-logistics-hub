import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Shield, Clock } from 'lucide-react';
import truckBox from '@/assets/truck-box.jpeg';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t('about.stat1.value'), label: t('about.stat1.label'), icon: Truck },
    { value: t('about.stat2.value'), label: t('about.stat2.label'), icon: Clock },
    { value: t('about.stat3.value'), label: t('about.stat3.label'), icon: Shield },
  ];

  return (
    <section id="about" className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src={truckBox}
                alt="Kamex Trucking 26-foot box truck"
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-kamex-blue-light" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('about.subtitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('about.mission')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-card rounded-xl card-shadow"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
