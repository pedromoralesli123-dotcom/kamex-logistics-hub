import { useLanguage } from '@/contexts/LanguageContext';
import amazonLogo from '@/assets/clients/amazon-logo.svg';
import samsungLogo from '@/assets/clients/samsung-logo.png';

// Placeholder for additional client logos - replace these with actual imports
// import client3Logo from '@/assets/clients/client3-logo.png';
// import client4Logo from '@/assets/clients/client4-logo.png';
// import client5Logo from '@/assets/clients/client5-logo.png';

interface ClientLogo {
  src: string;
  alt: string;
  name: string;
}

const ClientLogosCarousel = () => {
  const { t } = useLanguage();

  const clients: ClientLogo[] = [
    { src: amazonLogo, alt: 'Amazon logo', name: 'Amazon' },
    { src: samsungLogo, alt: 'Samsung logo', name: 'Samsung' },
    { src: '/placeholder.svg', alt: 'Client logo placeholder', name: 'Client 3' },
    { src: '/placeholder.svg', alt: 'Client logo placeholder', name: 'Client 4' },
    { src: '/placeholder.svg', alt: 'Client logo placeholder', name: 'Client 5' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            {t('clients.badge')}
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mt-2">
            {t('clients.title')}
          </h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 -mx-4 md:justify-center md:overflow-visible">
            {clients.map((client, index) => (
              <div key={index} className="flex-shrink-0 snap-center w-[180px] md:w-[200px]">
                <div className="bg-slate-50 rounded-xl p-6 h-28 flex items-center justify-center hover:bg-slate-100 transition-colors border border-slate-100">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-12 max-w-[140px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
        </div>

        <p className="text-center text-sm text-slate-500 mt-4 md:hidden">
          {t('clients.swipe')}
        </p>
      </div>
    </section>
  );
};

export default ClientLogosCarousel;
