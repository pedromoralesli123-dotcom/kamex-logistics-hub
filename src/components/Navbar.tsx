import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import logo from '@/assets/kamex-logo.png';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '/' },
    { key: 'nav.about', href: '/about' },
    { key: 'nav.services', href: '/services' },
    { key: 'nav.portfolio', href: '/portfolio' },
    { key: 'nav.contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Kamex Trucking LLC"
              className="h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === link.href
                    ? 'text-blue-700'
                    : isScrolled || !isHomePage
                    ? 'text-slate-800'
                    : 'text-white'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-slate-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium uppercase">{language}</span>
            </button>

            <Button
              variant="accent"
              asChild
            >
              <Link to="/contact">{t('nav.quote')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${
              isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors font-medium ${
                    location.pathname === link.href ? 'text-blue-700' : 'text-slate-800'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex items-center justify-between px-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <Globe className="h-4 w-4" />
                  <span className="font-medium uppercase">{language === 'en' ? 'Español' : 'English'}</span>
                </button>
                <Button
                  variant="accent"
                  size="sm"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('nav.quote')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
