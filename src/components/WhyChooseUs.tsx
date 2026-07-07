import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, HeartHandshake, MapPin, BadgePercent, Check } from 'lucide-react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ value, suffix = '', duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl sm:text-5xl text-brand-blue tracking-tight block">
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const stats = [
    { value: 15, suffix: '+', label: 'Premium Brands' },
    { value: 350, suffix: '+', label: 'Successful Investors' },
    { value: 45, suffix: '+', label: 'Cities Covered' },
    { value: 12, suffix: '+', label: 'Years Experience' },
  ];

  const benefits = [
    {
      title: 'Vetted High-Growth Brands Only',
      desc: 'We filter out risky or unproven business formats. Every brand on EBG represents exceptional demand, audited accounts, and highly predictable setup costs.',
      icon: ShieldCheck,
      color: 'text-brand-green bg-brand-green/10',
    },
    {
      title: 'Zero Hidden Commission Structures',
      desc: 'EBG maintains full pricing transparency. We charge a flat consulting/onboarding fee with absolutely zero markup on initial license fees or setup capex.',
      icon: BadgePercent,
      color: 'text-brand-orange bg-brand-orange/10',
    },
    {
      title: 'End-to-End Operational Launch',
      desc: 'Our advisory group assists in real estate legal checks, staffing guidelines, chef/operator sourcing, and localized micro-marketing programs.',
      icon: HeartHandshake,
      color: 'text-brand-blue bg-brand-blue/10',
    },
    {
      title: 'Pan-India Supply & Setup Resiliency',
      desc: 'Leverage our national network to procure high-end raw materials and machinery at wholesale rates, minimizing your setup and recurring costs.',
      icon: MapPin,
      color: 'text-brand-green bg-brand-green/10',
    },
  ];

  return (
    <section id="why-choose-ebg" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Stat Counters Grid */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20 relative">
          <div className="absolute top-0 right-1/4 w-0.5 h-full bg-brand-blue/10 hidden lg:block" />
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-brand-blue/10 hidden lg:block" />
          <div className="absolute top-0 right-1/2 w-0.5 h-full bg-brand-blue/10 hidden lg:block" />
          
          {stats.map((stat, idx) => (
            <div key={stat.label} className="space-y-2">
              <StatCounter value={stat.value} suffix={stat.suffix} />
              <span className="block font-sans text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Two-Column Pitch Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Pitch */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Check className="w-3.5 h-3.5" />
              <span>The EBG Advantage</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Why Corporate Investors Put Their Trust in EBG
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              Franchising represents the safest wealth-generation mechanism when executed correctly. 
              However, 80% of independent franchise failures originate from poor demographic matching and 
              opaque parent-brand agreements. 
            </p>

            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              EBG acts as your institutional shield. We combine market research, legal reviews, and raw material 
              supply logistics to guarantee a seamless operational runway.
            </p>

            {/* Quick trust metrics list */}
            <div className="space-y-3 pt-3">
              {[
                'National-scale purchasing power',
                'No-risk legal contract disclosures',
                'Certified local audit assistance teams',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Detailed Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 hover:border-brand-blue/20 p-6 rounded-2xl transition-all duration-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${benefit.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-800 leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
