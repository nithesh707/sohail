import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight, TrendingUp, Users, ShieldCheck, Landmark } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-brand-blue/20 via-brand-blue/5 to-[#F8FCFF]"
    >
      {/* Abstract background floating shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-brand-green/5 rounded-full blur-2xl -z-10 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-left space-y-8">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="font-sans font-semibold text-xs tracking-wider uppercase text-slate-800">
                Premium Franchise Advisory Group
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight"
              >
                Own a <span className="text-brand-blue">Franchise.</span><br />
                Build Your <span className="text-brand-green">Future.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-lg text-slate-600 max-w-xl leading-relaxed"
              >
                EBG helps premium investors acquire trusted, high-growth franchise opportunities. 
                We connect you with market-leading brands across premium Food &amp; Beverage, 
                Electric Vehicle Dealerships, and Home Appliances.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreClick}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-brand-orange/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Franchises</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              
              <a
                href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
                target="_blank"
                referrerPolicy="no-referrer"
                className="bg-brand-whatsapp hover:bg-brand-whatsapp/90 text-white font-sans font-bold text-sm sm:text-base px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-brand-whatsapp/20 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-white text-brand-whatsapp" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Value Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-brand-green/10 text-brand-green mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900">100% Verified</h4>
                  <p className="font-sans text-[11px] text-slate-500">Legal &amp; financial audits</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-brand-blue/15 text-brand-blue-dark mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900">High ROI</h4>
                  <p className="font-sans text-[11px] text-slate-500">Proven business models</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-brand-orange/10 text-brand-orange mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-slate-900">End-to-End</h4>
                  <p className="font-sans text-[11px] text-slate-500">Setup &amp; launch support</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Visual background circles */}
            <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-full border border-slate-100/80 -z-10 animate-pulse" />
            <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full border border-slate-100/50 -z-10" />

            {/* Custom Interactive Dashboard Graphic */}
            <div className="relative w-full max-w-[420px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 animate-float-slow">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm">
                    EBG
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-slate-900">Portfolio Tracker</h3>
                    <p className="font-sans text-[11px] text-slate-400">Real-time Growth Index</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono bg-brand-green/10 text-brand-green-dark px-2 py-1 rounded-md font-semibold">
                  +18.4% YoY
                </span>
              </div>

              {/* Graphical Investment Line Chart */}
              <div className="h-44 w-full relative mb-6">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="2,2" />
                  
                  {/* Area fill */}
                  <path
                    d="M 0,38 L 0,32 Q 15,26 25,28 T 50,15 T 75,18 T 100,5 L 100,38 Z"
                    fill="url(#gradient-area)"
                    opacity="0.3"
                  />
                  
                  {/* Chart Line */}
                  <path
                    d="M 0,32 Q 15,26 25,28 T 50,15 T 75,18 T 100,5"
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />

                  {/* Nodes */}
                  <circle cx="50" cy="15" r="2.5" fill="#FF8C00" stroke="#ffffff" strokeWidth="1" className="shadow-lg" />
                  <circle cx="100" cy="5" r="3" fill="#2ECC71" stroke="#ffffff" strokeWidth="1" />

                  {/* Definitions for gradients */}
                  <defs>
                    <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#87CEEB" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#87CEEB" />
                      <stop offset="50%" stopColor="#FF8C00" />
                      <stop offset="100%" stopColor="#2ECC71" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Graphical tooltips */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md font-mono shadow-md flex items-center gap-1.5 border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Setup Success: 98.4%</span>
                </div>
              </div>

              {/* Visual Mini Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                  <span className="block font-sans text-[10px] text-slate-400 uppercase font-medium">Verified Brands</span>
                  <span className="block font-display font-extrabold text-lg text-slate-800 mt-1">15+ Industry-Best</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-3 rounded-2xl">
                  <span className="block font-sans text-[10px] text-slate-400 uppercase font-medium">Pan-India Reach</span>
                  <span className="block font-display font-extrabold text-lg text-slate-800 mt-1">45+ Major Cities</span>
                </div>
              </div>

              {/* Extra Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-slate-100 shadow-lg px-4 py-3 rounded-2xl flex items-center gap-2.5 max-w-[150px] animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-display font-bold text-sm text-slate-800 leading-none">350+</span>
                  <span className="block font-sans text-[9px] text-slate-400 leading-none mt-1">Success Investors</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
