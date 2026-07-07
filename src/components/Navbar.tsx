import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Building2, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Opportunities', id: 'opportunities' },
    { name: 'Investment', id: 'investment' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm py-3 border-b border-brand-blue/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-brand-orange text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-brand-blue leading-none">
                EBG<span className="text-brand-orange">.</span>
              </span>
              <span className="font-sans font-semibold text-[10px] tracking-widest text-brand-blue-dark leading-none mt-1 uppercase">
                Franchise Group
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="font-sans font-medium text-sm text-gray-600 hover:text-brand-blue transition-colors duration-200 cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-2 font-sans font-medium text-xs text-gray-700 bg-gray-50 border border-gray-200 py-2 px-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-green" />
              <span>+91 95333 32300</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-brand-orange text-white font-sans font-bold text-sm px-5 py-2 rounded-full shadow-lg shadow-brand-orange/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span>Get Franchise Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-brand-orange text-white p-2 rounded-full cursor-pointer hover:bg-brand-orange-dark transition-all"
              title="Get Details"
            >
              <Building2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-blue p-2 rounded-lg focus:outline-none transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-100 shadow-inner overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="block w-full text-left font-sans font-semibold text-base text-gray-700 hover:text-brand-blue hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-4">
                <a
                  href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-2 font-sans font-medium text-sm text-gray-700 bg-gray-50 border border-gray-200 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-green" />
                  <span>Call/WhatsApp: +91 95333 32300</span>
                </a>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full justify-center bg-brand-orange hover:bg-brand-orange-dark text-white font-sans font-bold text-sm py-3 px-5 rounded-xl flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>Get Franchise Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
