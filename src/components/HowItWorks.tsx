import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, PhoneCall, Handshake, Rocket, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Enquire',
      shortDesc: 'Submit your contact credentials and franchise interest.',
      longDesc: 'Complete our simple enquiry form or connect directly via WhatsApp. Within 10 minutes, our automation delivers the premium EBG Franchise Portfolio Catalog to your email/phone containing deep sector overviews.',
      icon: Send,
      color: 'bg-brand-orange/10 text-brand-orange border-brand-orange/35',
    },
    {
      step: '02',
      title: 'Consultation Call',
      shortDesc: 'A diagnostic advisory call to match your profile.',
      longDesc: 'A senior franchise investment counselor schedules a personalized call. We assess your budget, regional experience, carpet area availability, and preferred timeline to match you with the absolute best brand fit.',
      icon: PhoneCall,
      color: 'bg-brand-blue/15 text-brand-blue-dark border-brand-blue/35',
    },
    {
      step: '03',
      title: 'Brand Selection',
      shortDesc: 'Detailed audits and signing the franchise agreement.',
      longDesc: 'Receive multi-unit financials, schedule face-to-face meetups with parent brand directors, conduct localized demographic profiling on your store site, and finalize direct legally protective agreements with zero markups.',
      icon: Handshake,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      step: '04',
      title: 'Launch Your Brand',
      shortDesc: 'Comprehensive setup, training, and grand opening.',
      longDesc: 'Our advisors guide you through layout construction, staff hiring, kitchen/showroom equipment procurement, inventory stocking, localized digital marketing campaigns, and grand opening launch routines.',
      icon: Rocket,
      color: 'bg-brand-green/10 text-brand-green border-brand-green/35',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Path</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            How to Acquire Your Franchise
          </h2>
          
          <p className="font-sans text-base text-slate-500">
            A frictionless, streamlined, 4-step framework backed by veteran advisors. 
            From initial curiosity to high-growth cashflow, we guide your step.
          </p>
        </div>

        {/* Process Timeline Block */}
        <div className="relative mb-16">
          {/* Timeline background line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block" />
          
          {/* Timeline animated active bar */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-brand-orange via-brand-blue-dark to-brand-green -translate-y-1/2 hidden lg:block"
            initial={{ width: '0%' }}
            whileInView={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />

          {/* Interactive Steps Circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;

              return (
                <motion.div
                  key={item.step}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Circle Indicator */}
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-300 relative group shadow-sm cursor-pointer ${
                      isCurrent
                        ? 'bg-white border-brand-blue scale-110 ring-4 ring-brand-blue/20'
                        : isActive
                        ? 'bg-white border-brand-blue/60'
                        : 'bg-slate-100 border-slate-300 text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    {/* Floating step text */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-sm">
                      {item.step}
                    </span>

                    <IconComp className={`w-7 h-7 transition-colors ${
                      isCurrent ? 'text-brand-blue' : isActive ? 'text-brand-blue-dark' : 'text-slate-400'
                    }`} />
                  </button>

                  {/* Title and Short description */}
                  <div className="text-center mt-6 max-w-xs px-2 cursor-pointer" onClick={() => setActiveStep(index)}>
                    <h3 className={`font-display font-extrabold text-lg tracking-tight transition-colors ${
                      isCurrent ? 'text-brand-blue' : 'text-slate-800'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-2 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Detailed Explanation Showcase Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-gray-100 shadow-sm hover:shadow-md rounded-3xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
        >
          {/* Subtle colored background gradient based on active step */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-tr opacity-5 blur-xl -z-10" />

          {/* Icon Badge */}
          <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl shrink-0 flex items-center justify-center border ${steps[activeStep].color} shadow-inner`}>
            {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10 sm:w-12 sm:h-12' })}
          </div>

          {/* Details */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-3xl text-slate-200">
                {steps[activeStep].step}
              </span>
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400 block">Active Phase Detail</span>
                <h3 className="font-display font-extrabold text-2xl text-slate-800 leading-none">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              {steps[activeStep].longDesc}
            </p>

            {/* Quick Helper Tips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="bg-slate-50 border border-slate-100 text-slate-500 font-sans text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
                <span>Estimated Duration: 3-5 Business Days</span>
              </span>
              <span className="bg-slate-50 border border-slate-100 text-slate-500 font-sans text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                <span>EBG Consultant Allocated</span>
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
