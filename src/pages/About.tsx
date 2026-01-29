import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Shield, Clock, Target, Users, Award } from 'lucide-react';
import truckBox from '@/assets/truck-box.jpeg';
import truckCab from '@/assets/truck-cab.jpeg';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t('about.stat1.value'), label: t('about.stat1.label'), icon: Truck },
    { value: t('about.stat2.value'), label: t('about.stat2.label'), icon: Clock },
    { value: t('about.stat3.value'), label: t('about.stat3.label'), icon: Shield },
  ];

  const values = [
    {
      icon: Target,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.desc'),
    },
    {
      icon: Users,
      title: t('about.values.family.title'),
      description: t('about.values.family.desc'),
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.desc'),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-blue-700">
        <div className="container-custom">
          <div className="text-center text-white">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              {t('about.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
              {t('about.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-slate-50">
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
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 to-blue-500" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('about.mission')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-100 rounded-xl card-shadow"
                  >
                    <stat.icon className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-blue-700">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl card-shadow text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-blue-700/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">
                {t('about.fleet.title')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t('about.fleet.description')}
              </p>
              <ul className="space-y-3">
                {['26-foot Box Trucks', 'DOT Certified', 'GPS Tracked', 'Fully Insured'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-800">
                    <div className="w-2 h-2 bg-blue-700 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden card-shadow">
                <img
                  src={truckCab}
                  alt="Kamex Trucking fleet"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
