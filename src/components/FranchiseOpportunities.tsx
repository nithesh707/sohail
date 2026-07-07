import React from 'react';
import { motion } from 'motion/react';
import { Flame, Coffee, Zap, Laptop, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { FranchiseOpportunity } from '../types';

interface FranchiseOpportunitiesProps {
  onEnquire: (franchiseId: string) => void;
}

export const FRANCHISES: FranchiseOpportunity[] = [
  {
    id: 'adhira',
    name: 'Adhira',
    sector: 'Food & Beverage (F&B)',
    description: 'A rapid-growth traditional QSR franchise featuring an optimized kitchen model, premium spices, and scalable regional recipes with high daily volumes.',
    investmentRange: '₹30,00,000 - ₹40,00,000',
    initialFee: '₹4,00,000',
    setupCost: '₹26,00,000',
    spaceRequired: '300 - 500 sq. ft.',
    highRoi: true,
    logoType: 'f&b-bowl',
  },
  {
    id: 'appa',
    name: 'Appa Coffee & Snacks',
    sector: 'Food & Beverage (F&B)',
    description: 'A contemporary high-yield coffee shop format capturing massive daily footfall. Famous for premium south Indian filter coffee, tea, and quick-serve bites.',
    investmentRange: '₹12,00,000 - ₹18,00,000',
    initialFee: '₹3,00,000',
    setupCost: '₹9,00,000',
    spaceRequired: '250 - 400 sq. ft.',
    logoType: 'f&b-coffee',
  },
  {
    id: 'acer',
    name: 'Acer EV Dealership',
    sector: 'Electric Vehicle (EV) Dealership',
    description: 'Establish a certified retail showroom and servicing hub for Acer high-efficiency electric two-wheelers and smart three-wheelers, powered by government green initiatives.',
    investmentRange: '₹50,00,000 - ₹75,00,000',
    initialFee: '₹10,00,000',
    setupCost: '₹40,00,000',
    spaceRequired: '1,500 - 2,500 sq. ft.',
    trending: true,
    logoType: 'ev-car',
  },
  {
    id: 'daewoo',
    name: 'Daewoo Appliances',
    sector: 'Home Appliances',
    description: 'Become an authorized master dealer/distributor for Daewoo consumer electronics, refrigerators, washing machines, and HVAC systems in major demographic clusters.',
    investmentRange: '₹20,00,000 - ₹35,00,000',
    initialFee: '₹5,00,000',
    setupCost: '₹15,00,000',
    spaceRequired: '800 - 1,200 sq. ft.',
    logoType: 'home-appliance',
  },
];

export default function FranchiseOpportunities({ onEnquire }: FranchiseOpportunitiesProps) {
  
  const getLogo = (type: FranchiseOpportunity['logoType']) => {
    switch (type) {
      case 'f&b-bowl':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-orange to-red-500 flex items-center justify-center text-white shadow-md">
            <Flame className="w-7 h-7" />
          </div>
        );
      case 'f&b-coffee':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-md">
            <Coffee className="w-7 h-7" />
          </div>
        );
      case 'ev-car':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-green to-emerald-700 flex items-center justify-center text-white shadow-md">
            <Zap className="w-7 h-7" />
          </div>
        );
      case 'home-appliance':
        return (
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-indigo-600 flex items-center justify-center text-white shadow-md">
            <Laptop className="w-7 h-7" />
          </div>
        );
    }
  };

  return (
    <section id="opportunities" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Investment Catalog</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Premium Franchises Vetted for Success
            </h2>
            
            <p className="font-sans text-base text-slate-500">
              Select from our highly structured franchise verticals. Each brand carries institutional backing, 
              robust supply chain mechanisms, and EBG comprehensive operational setup guidelines.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-medium text-slate-500 shadow-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>SLA Verified</span>
            </div>
            <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-xs font-medium text-slate-500 shadow-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-orange" />
              <span>Highest ROI Gaps</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FRANCHISES.map((brand, idx) => {
            return (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 relative group overflow-hidden ${
                  brand.trending
                    ? 'border border-brand-orange/30 ring-2 ring-brand-orange/5'
                    : 'border border-gray-100 hover:shadow-md'
                }`}
              >
                
                {/* Floating Badges */}
                {brand.trending && (
                  <span className="absolute top-6 right-6 font-display font-bold text-[9px] tracking-tighter uppercase bg-brand-orange text-white px-2.5 py-1 rounded-full shadow-md">
                    Trending / High ROI
                  </span>
                )}
                {brand.highRoi && (
                  <span className="absolute top-6 right-6 font-display font-bold text-[9px] tracking-tighter uppercase bg-brand-green text-white px-2.5 py-1 rounded-full shadow-md">
                    High ROI
                  </span>
                )}

                <div>
                  {/* Brand Logo & Basic details */}
                  <div className="flex items-center gap-4 mb-6">
                    {getLogo(brand.logoType)}
                    <div>
                      <span className="text-[10px] bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                        {brand.sector}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl text-slate-800 mt-1.5">
                        {brand.name}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="font-sans text-sm text-slate-500 leading-relaxed mb-6">
                    {brand.description}
                  </p>

                  {/* Structural details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-50 mb-6">
                    <div>
                      <span className="block text-[11px] font-sans font-medium text-slate-400 uppercase tracking-wide">Investment Range</span>
                      <span className="block font-display font-extrabold text-base text-slate-800 mt-1">
                        {brand.investmentRange}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-sans font-medium text-slate-400 uppercase tracking-wide">Space Required</span>
                      <span className="block font-display font-bold text-sm text-slate-800 mt-1">
                        {brand.spaceRequired}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enquire Now Action */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                    <span className="font-sans text-xs font-semibold text-slate-500">Franchise Kit Ready</span>
                  </div>
                  <button
                    onClick={() => onEnquire(brand.id)}
                    className={`font-sans font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                      brand.trending
                        ? 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/25 hover:scale-105 active:scale-95'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50 hover:scale-105 active:scale-95'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
