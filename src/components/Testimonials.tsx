import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Rajesh Kumar',
      city: 'Bengaluru',
      brand: 'Adhira (F&B)',
      quote: 'Acquiring Adhira through EBG was the best decision of my corporate transition. The operational checklists were incredibly precise, and we achieved local break-even within the first four months. The EBG team handled the legal setup flawlessly!',
    },
    {
      id: 'test-2',
      name: 'Preeti Sharma',
      city: 'Pune',
      brand: 'Acer EV Dealership',
      quote: 'With green mobility booming, EBG guided me straight into Acer EV. Their localized demographic intelligence helped us acquire a high-traffic highway showroom site. Our dealership launched on schedule, and we are already expanding to a second hub.',
    },
    {
      id: 'test-3',
      name: 'Amit Patel',
      city: 'Ahmedabad',
      brand: 'Daewoo Appliances',
      quote: "Daewoo has a legendary name. EBG streamlined our master regional distribution agreement and helped negotiate premium inventory financing terms. EBG's absolute pricing transparency on consulting fees was highly reassuring.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investor Testimonials</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Stories of Proven Success
          </h2>
          
          <p className="font-sans text-base text-slate-500">
            Hear from established professionals, corporate executives, and first-time investors who 
            built thriving, high-yield enterprises with EBG.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-md relative text-left w-full"
              >
                {/* Floating quote decoration */}
                <div className="absolute top-8 right-8 text-brand-blue/15">
                  <Quote className="w-16 h-16 transform scale-x-[-1]" />
                </div>

                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-brand-green">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-green" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed italic relative z-10">
                    "{testimonials[currentIdx].quote}"
                  </p>

                  {/* Profile section */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                    {/* Visual custom initial avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-blue to-brand-blue-dark flex items-center justify-center text-white font-display font-bold text-base shadow-inner">
                      {testimonials[currentIdx].name.split(' ').map((n) => n[0]).join('')}
                    </div>

                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-none">
                        {testimonials[currentIdx].name}
                      </h4>
                      <p className="font-sans text-xs text-slate-400 mt-1">
                        Investor, <span className="text-slate-500 font-semibold">{testimonials[currentIdx].brand}</span> — {testimonials[currentIdx].city}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between sm:justify-start gap-4 mt-8 sm:absolute sm:bottom-0 sm:right-12 sm:mt-0 pb-0 z-20">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-slate-500 shadow-sm hover:shadow-md transition-all cursor-pointer"
              title="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-sans text-xs text-slate-400 font-medium">
              {currentIdx + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-slate-500 shadow-sm hover:shadow-md transition-all cursor-pointer"
              title="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
