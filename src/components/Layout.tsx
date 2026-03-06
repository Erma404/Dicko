import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DevisModal from './DevisModal';
import { useDevis } from '@/contexts/DevisContext';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, openDevis, closeDevis } = useDevis();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/a-propos', label: 'À propos' },
    { path: '/services', label: 'Services' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#0a0f14] text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0f14]/95 backdrop-blur-md border-b border-[#d6a527]/20 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo-dicko.png" 
                  alt="DICKO" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl tracking-wider font-['Chakra_Petch']">DICKO</span>
                <span className="block text-[10px] text-gray-400 tracking-widest">PLOMBERIE • CHAUFFAGE • VMC</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#d6a527] ${
                    isActive(link.path) ? 'text-[#d6a527]' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                onClick={openDevis}
                className="bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] px-6 py-2 rounded font-semibold transition-all hover:shadow-lg hover:shadow-[#d6a527]/30"
              >
                <Phone size={18} className="mr-2" />
                Demande de devis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f14]/98 backdrop-blur-md border-t border-[#d6a527]/20 mt-3">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors ${
                    isActive(link.path) ? 'text-[#d6a527]' : 'text-gray-300 hover:text-[#d6a527]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDevis();
                }}
                className="w-full bg-[#d6a527] hover:bg-[#b88a1f] text-[#0a0f14] mt-4 font-semibold"
              >
                <Phone size={18} className="mr-2" />
                Demande de devis
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#070a0d] border-t border-[#d6a527]/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo-dicko.png" 
                    alt="DICKO" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-xl tracking-wider font-['Chakra_Petch']">DICKO</span>
                  <span className="block text-[10px] text-gray-400 tracking-widest">PLOMBERIE • CHAUFFAGE • VMC</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm max-w-md mb-4">
                Entreprise spécialisée en travaux d'installation d'eau, gaz, chauffage et ventilation pour bâtiments professionnels en Île-de-France.
              </p>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <span>25 RUE ARCHEREAU, 75019 PARIS</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-[#d6a527] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Nos Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/plomberie" className="hover:text-[#d6a527] transition-colors">Plomberie</Link></li>
                <li><Link to="/chauffage" className="hover:text-[#d6a527] transition-colors">Chauffage</Link></li>
                <li><Link to="/vmc" className="hover:text-[#d6a527] transition-colors">VMC</Link></li>
                <li><Link to="/gaz" className="hover:text-[#d6a527] transition-colors">Gaz</Link></li>
                <li><Link to="/depannage" className="hover:text-[#d6a527] transition-colors">Dépannage</Link></li>
              </ul>
            </div>

            {/* Zones d'intervention */}
            <div>
              <h4 className="font-semibold text-white mb-4">Zones d'intervention</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-[#d6a527] transition-colors">Paris (75)</li>
                <li className="hover:text-[#d6a527] transition-colors">Hauts-de-Seine (92)</li>
                <li className="hover:text-[#d6a527] transition-colors">Seine-Saint-Denis (93)</li>
                <li className="hover:text-[#d6a527] transition-colors">Val-de-Marne (94)</li>
              </ul>
            </div>
          </div>

          {/* SEO Footer Text */}
          <div className="border-t border-[#d6a527]/10 pt-8">
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              <strong className="text-gray-400">Entreprise plomberie Île-de-France</strong> | 
              <strong className="text-gray-400"> Entreprise chauffage IDF</strong> | 
              <strong className="text-gray-400"> Installation VMC bâtiment</strong> | 
              <strong className="text-gray-400"> Installation gaz professionnel</strong> | 
              <strong className="text-gray-400"> Plomberie B2B Île-de-France</strong> | 
              <strong className="text-gray-400"> Travaux CVC Île-de-France</strong> | 
              <strong className="text-gray-400"> Sous-traitant plomberie IDF</strong> | 
              <strong className="text-gray-400"> Entreprise plomberie marché public</strong> | 
              <strong className="text-gray-400"> Installation chauffage collectif</strong> | 
              <strong className="text-gray-400"> Entreprise CVC bâtiment tertiaire</strong>
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Interventions : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), 
              Yvelines (78), Essonne (91), Val-d'Oise (95), Seine-et-Marne (77)
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 DICKO. Tous droits réservés.
              </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <Link to="/mentions-legales" className="hover:text-[#d6a527] transition-colors">Mentions légales</Link>
                <Link to="/politique-confidentialite" className="hover:text-[#d6a527] transition-colors">Politique de confidentialité</Link>
                <a href="https://ernestine.framer.website/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6a527] transition-colors">Réalisé par Ernestine</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Devis Modal */}
      <DevisModal 
        isOpen={isOpen} 
        onClose={closeDevis} 
      />
    </div>
  );
}
