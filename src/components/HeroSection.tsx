import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroDriver from '@/assets/hero-driver.jpg';
import logo from '@/assets/logo.jpeg';
import { ArrowRight, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroDriver}
          alt="Professional truck driver with Kamex Trucking fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logo}
              alt="Kamex Trucking LLC"
              className="h-20 md:h-28 mx-auto object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              onClick={scrollToServices}
            >
              {t('hero.secondary')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
