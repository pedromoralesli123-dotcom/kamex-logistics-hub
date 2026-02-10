import { Award, Shield, Radio, FileCheck, Map, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Award, titleKey: 'whychoose.proven.title', descKey: 'whychoose.proven.desc' },
    { icon: Shield, titleKey: 'whychoose.reliability.title', descKey: 'whychoose.reliability.desc' },
    { icon: Radio, titleKey: 'whychoose.dispatch.title', descKey: 'whychoose.dispatch.desc' },
    { icon: FileCheck, titleKey: 'whychoose.safety.title', descKey: 'whychoose.safety.desc' },
    { icon: Map, titleKey: 'whychoose.zone.title', descKey: 'whychoose.zone.desc' },
    { icon: Users, titleKey: 'whychoose.family.title', descKey: 'whychoose.family.desc' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            {t('whychoose.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
            {t('whychoose.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 rounded-2xl hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-700/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="h-7 w-7 text-blue-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-800 group-hover:text-white mb-3 transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
