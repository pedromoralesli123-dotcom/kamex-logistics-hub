import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Manhattan, New York, NY 10001',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@kamextrucking.com',
    },
    {
      icon: Clock,
      label: t('contact.available'),
      value: 'Monday - Sunday, 24/7',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-blue-700">
        <div className="container-custom">
          <div className="text-center text-white">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">
              {t('contact.subtitle')}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">
              {t('contact.title')}
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Contact Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl card-shadow">
              <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">
                {t('contact.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="h-12 border-gray-200 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      {t('contact.email')} *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="h-12 border-gray-200 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      {t('contact.phone')}
                    </label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="h-12 border-gray-200 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      {t('contact.company')}
                    </label>
                    <Input
                      type="text"
                      placeholder="Company Inc."
                      className="h-12 border-gray-200 focus:border-blue-700 focus:ring-blue-700"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-2">
                    {t('contact.message')} *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us about your logistics needs..."
                    className="min-h-[150px] resize-none border-gray-200 focus:border-blue-700 focus:ring-blue-700"
                  />
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : t('contact.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="flex flex-col">
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-100 rounded-xl hover:bg-blue-700/5 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-700/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">{info.label}</p>
                      <p className="text-slate-800 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Map */}
              <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden card-shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.34194156103!2d-74.03927096447748!3d40.75904032920102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1706489876543!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kamex Trucking Location - Manhattan, NY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
