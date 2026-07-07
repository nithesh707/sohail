import React from 'react';
import { Building2, MessageSquare, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      
      {/* Primary Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <div
              onClick={() => onNavClick('home')}
              className="flex items-center gap-2.5 cursor-pointer group w-fit"
            >
              <div className="bg-brand-orange text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform duration-300">
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

            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              EBG Franchise Group is the nation's premier corporate franchise consulting and logistics advisory network. 
              We empower investors to secure scalable business assets with full legal and financial auditing.
            </p>

            {/* Social media icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                title="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                title="Twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300"
                title="Linkedin"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Corporate Links
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm">
              {[
                { name: 'Home Banner', id: 'home' },
                { name: 'About EBG Group', id: 'about' },
                { name: 'Brand Opportunities', id: 'opportunities' },
                { name: 'Investment Pricing', id: 'investment' },
                { name: 'Onboarding Workflow', id: 'how-it-works' },
                { name: 'Contact Consulting', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-brand-blue hover:translate-x-1 transition-all duration-200 cursor-pointer text-left block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Office Contacts
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Level 7, Block B, Premium Corporate Plaza, MG Road, Bengaluru, 560001, India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-green shrink-0" />
                <span className="font-semibold text-slate-200">+91 95333 32300</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-blue shrink-0" />
                <span className="text-slate-300">partnerships@ebgfranchise.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: CTA and Quick Subscribe */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              WhatsApp Desk
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Connect directly with our senior investment analysts on WhatsApp for faster inquiry routing.
            </p>
            <a
              href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
              target="_blank"
              referrerPolicy="no-referrer"
              className="w-full bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-sans font-bold text-xs py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-whatsapp/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white text-brand-whatsapp" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Legal & Bottom bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="space-y-1.5">
            <p className="font-sans text-xs text-slate-500">
              &copy; {currentYear} EBG Franchise Group Pvt. Ltd. All rights reserved.
            </p>
            <p className="font-sans text-[10px] text-slate-600 leading-normal max-w-2xl">
              Disclaimer: All financial figures, setup capex, operating margins, and payback periods listed are projections based on historical brand audit logs. Real returns depend on exact localized demographic demand, retail real estate lease rates, and operational discipline. EBG charges flat advisory consultation fees with zero markups on brand license costs.
            </p>
          </div>

          <button
            onClick={handleScrollTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>

        </div>
      </div>

    </footer>
  );
}
