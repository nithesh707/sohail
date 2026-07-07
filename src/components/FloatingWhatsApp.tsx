import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
      target="_blank"
      referrerPolicy="no-referrer"
      className="fixed bottom-6 right-6 z-40 bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group border border-emerald-400/20"
      aria-label="Chat on WhatsApp"
    >
      {/* Decorative pulse ring backdrop */}
      <span className="absolute inset-0 rounded-full bg-brand-whatsapp/40 animate-ping -z-10 opacity-75" />

      <MessageSquare className="w-6 h-6 fill-white text-brand-whatsapp group-hover:rotate-6 transition-transform" />
    </a>
  );
}
