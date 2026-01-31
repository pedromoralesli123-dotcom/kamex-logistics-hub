import { Award, Shield, Radio, FileCheck, Map, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Proven Contract Performance',
      description:
        'With over 15 years of experience, we have successfully executed and sustained delivery contracts in metropolitan and regional markets, meeting strict service-level, safety, and performance requirements.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Level Reliability',
      description:
        'Our operations are built around consistency and accountability. We understand that missed deliveries impact downstream operations, which is why reliability is embedded into every process we run.',
    },
    {
      icon: Radio,
      title: 'Real-Time Dispatch & Visibility',
      description:
        'We utilize real-time dispatch coordination and monitoring to maintain route control, rapid issue resolution, and clear communication throughout the delivery lifecycle.',
    },
    {
      icon: FileCheck,
      title: 'Safety & Compliance First',
      description:
        'We operate under strict highway safety standards and regulatory compliance protocols, reducing operational risk and ensuring dependable service for our partners.',
    },
    {
      icon: Map,
      title: 'Zone Mapping & Route Control',
      description:
        'Our zone-based mapping and route optimization systems allow us to maintain efficiency, predictability, and coverage accuracy across all service areas.',
    },
    {
      icon: Users,
      title: 'Family-Owned, Professionally Operated',
      description:
        'While family-owned, we operate with the structure, discipline, and performance standards expected by enterprise-level partners such as Amazon PIP and Microsoft.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            Our Commitment
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mt-2">
            Why Choose Us
          </h2>
        </div>

        {/* Features Grid */}
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
                {feature.title}
              </h3>
              <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
