import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/kamex-logo.png';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.portfolio'), href: '/portfolio' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-slate-800 text-white relative overflow-hidden isolate" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Kamex Trucking LLC"
              className="h-14 object-contain mb-6 bg-white p-2 rounded"
            />
            <p className="text-white/80 max-w-md leading-relaxed">
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">{t('footer.quicklinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">{t('footer.contact')}</h4>
            {/* Tagline */}
            <p className="text-white/70 text-sm italic mb-4 leading-relaxed">
              {t('footer.contactTagline')}
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Manhattan, New York<br />NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-white/80">info@kamextrucking.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>
            © {new Date().getFullYear()} Kamex Trucking LLC. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
