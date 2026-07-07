import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Headphones, Map, BadgePercent, Target, Award, Sparkles } from 'lucide-react';

export default function About() {
  const trustBadges = [
    {
      title: 'Verified Brands',
      description: 'Rigorous 15-point auditing of financials, legalities, and growth curves before onboarding.',
      icon: ShieldCheck,
      color: 'bg-brand-green/10 text-brand-green',
    },
    {
      title: 'End-to-End Support',
      description: 'Comprehensive help with site selection, staff recruitment, operational audits, and launching.',
      icon: Headphones,
      color: 'bg-brand-blue/15 text-brand-blue-dark',
    },
    {
      title: 'Pan-India Presence',
      description: 'Consulting opportunities across Tier 1, 2, and 3 cities with local demographic profiling.',
      icon: Map,
      color: 'bg-brand-orange/10 text-brand-orange',
    },
    {
      title: 'Transparent Pricing',
      description: 'Zero hidden commissions, direct agreements with parent brands, and fully disclosed expenditures.',
      icon: BadgePercent,
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariants}
            className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover EBG Group</span>
          </motion.div>
          
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariants}
            className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight"
          >
            Bridging Premium Investors with Proven Franchise Opportunities
          </motion.h2>
          
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariants}
            className="font-sans text-base text-slate-500"
          >
            EBG Franchise Group is India's leading consulting and provider firm, dedicated to guiding investors
            through the complex landscape of franchising. We filter, audit, and represent high-growth brands.
          </motion.p>
        </div>

        {/* Info Grid (Company Desc and Mission) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Text Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariants}
            className="space-y-6"
          >
            <div className="border-l-4 border-brand-blue pl-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800">
                Our Corporate Mandate
              </h3>
            </div>
            
            <p className="font-sans text-slate-600 leading-relaxed">
              At EBG, we believe that franchise investment should be predictable, secure, and structured. 
              Our advisory network analyzes hundreds of brand models every quarter, pruning those with unstable 
              unit economics, and selecting only those with consistent product-market fit.
            </p>
            
            <p className="font-sans text-slate-600 leading-relaxed">
              We specialize in three massive high-growth sectors: Food &amp; Beverage (F&amp;B) containing fast-moving, 
              scalable fast-food concepts; Electric Vehicle (EV) Dealerships aligning with the green mobility wave; 
              and global Home Appliances distributing durable, household technologies.
            </p>

            {/* Mission Statement Block */}
            <div className="bg-[#EBF8FF] border border-brand-blue/20 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-brand-blue">
                <Target className="w-24 h-24" />
              </div>
              <div className="flex gap-4">
                <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0 h-fit">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-brand-blue uppercase tracking-wider">Our Strategic Mission</h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    To democratize premium franchising by providing institutional-grade risk consulting, complete 
                    operational clarity, and verified brand partnerships to individual and corporate investors alike.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Badge Display */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={revealVariants}
            className="relative"
          >
            {/* Visual Backdrops */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-slate-50 rounded-3xl -z-10" />
            
            <div className="bg-white border border-slate-100 rounded-3xl shadow-xl p-8 sm:p-10 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">EBG Shield of Trust</h3>
                  <p className="font-sans text-xs text-slate-400">What makes EBG the absolute gold standard</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="font-display font-bold text-2xl text-brand-blue block">0%</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1 block">Brokerage Markup</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="font-display font-bold text-2xl text-brand-green block">98%</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1 block">Partner Retention</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="font-display font-bold text-2xl text-brand-blue block">100%</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1 block">Legal Protection</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="font-display font-bold text-2xl text-brand-green block">350+</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1 block">Outlets Launched</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3-4 Trust Badges Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-slate-50/60 hover:bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${badge.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-base text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
                  {badge.title}
                </h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
