import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Sparkles, Building, FileSpreadsheet, Percent, Calendar } from 'lucide-react';
import { FRANCHISES } from './FranchiseOpportunities';

interface PricingProps {
  onEnquire: (franchiseId: string) => void;
}

export default function Pricing({ onEnquire }: PricingProps) {
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');

  const pricingDetails = [
    {
      ...FRANCHISES[0], // Adhira
      opMargin: '25% - 30%',
      roiPeriod: '12 - 18 Months',
      tenure: '5 Years (Renewable)',
      tagline: 'High Daily Volumes & Fast Margins',
      color: 'border-slate-200 hover:border-brand-blue-dark/50',
    },
    {
      ...FRANCHISES[1], // Appa
      opMargin: '30% - 35%',
      roiPeriod: '10 - 15 Months',
      tenure: '5 Years (Renewable)',
      tagline: 'High Customer Frequency & Simple Supply Chain',
      color: 'border-slate-200 hover:border-brand-blue-dark/50',
    },
    {
      ...FRANCHISES[2], // Acer (EV Dealership) - Trending!
      opMargin: '15% - 20%',
      roiPeriod: '18 - 24 Months',
      tenure: '9 Years (Renewable)',
      tagline: 'High Ticket Deals & Smart Green Industry',
      highlight: true,
      color: 'border-brand-orange shadow-brand-orange/10 bg-gradient-to-b from-brand-orange/5 via-white to-white',
    },
    {
      ...FRANCHISES[3], // Daewoo
      opMargin: '18% - 22%',
      roiPeriod: '15 - 20 Months',
      tenure: '7 Years (Renewable)',
      tagline: 'Premium Consumer Base & Regional Exclusivity',
      color: 'border-slate-200 hover:border-brand-blue-dark/50',
    },
  ];

  return (
    <section id="investment" className="py-20 lg:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Investment Guide</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Comprehensive Financial Comparison
          </h2>
          
          <p className="font-sans text-base text-slate-500">
            Compare setup costs, royalty structures, space specifications, and estimated payback durations 
            to align with your corporate budget and local demographic demand.
          </p>

          {/* Toggle View Switch */}
          <div className="inline-flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner mt-4">
            <button
              onClick={() => setViewType('grid')}
              className={`px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all cursor-pointer ${
                viewType === 'grid'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewType('table')}
              className={`px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all cursor-pointer ${
                viewType === 'table'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Comparison Table
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewType === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingDetails.map((plan, idx) => {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.highlight
                      ? 'shadow-lg border-brand-orange/40 ring-2 ring-brand-orange/5 bg-white transform lg:-translate-y-4'
                      : 'shadow-sm border-gray-100 bg-white hover:shadow-md'
                  }`}
                >
                  {/* Highlight label */}
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white text-[10px] font-display font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Trending • High ROI</span>
                    </div>
                  )}

                  <div>
                    {/* Header Details */}
                    <div className="mb-6">
                      <span className="font-sans font-semibold text-[10px] uppercase tracking-wider text-brand-blue-dark block mb-2">
                        {plan.sector}
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-slate-800">
                        {plan.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-400 mt-1 leading-snug">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Cost Detail block */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100/80 mb-6">
                      <span className="font-sans text-[10px] text-slate-400 uppercase font-medium block">Total Setup Budget</span>
                      <span className="font-display font-extrabold text-2xl text-brand-orange mt-1 block">
                        {plan.investmentRange.split(' - ')[0]}
                      </span>
                      <span className="font-sans text-[10px] text-slate-400 block mt-1">Starting investment</span>
                    </div>

                    {/* Breakdown Checklist */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-sans text-[11px] text-slate-400">Franchise Fee</span>
                          <span className="block font-sans text-xs font-semibold text-slate-700">{plan.initialFee}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-sans text-[11px] text-slate-400">Estimated Capex</span>
                          <span className="block font-sans text-xs font-semibold text-slate-700">{plan.setupCost}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-sans text-[11px] text-slate-400">Min. Carpet Area</span>
                          <span className="block font-sans text-xs font-semibold text-slate-700">{plan.spaceRequired}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-sans text-[11px] text-slate-400">Operating Margin %</span>
                          <span className="block font-sans text-xs font-semibold text-slate-700">{plan.opMargin}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <div>
                          <span className="block font-sans text-[11px] text-slate-400">Estimated ROI Period</span>
                          <span className="block font-sans text-xs font-semibold text-slate-700">{plan.roiPeriod}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <button
                    onClick={() => onEnquire(plan.id)}
                    className={`w-full py-3 rounded-xl font-sans font-bold text-xs transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer ${
                      plan.highlight
                        ? 'bg-brand-orange hover:bg-brand-orange-dark text-white shadow-lg shadow-brand-orange/20'
                        : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Enquire Franchise Kit
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Comparison Table View */}
        {viewType === 'table' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-slate-100 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-sans font-bold text-slate-400 uppercase tracking-widest">
                    <th className="py-5 px-6">Brand Name &amp; Sector</th>
                    <th className="py-5 px-4">Investment range</th>
                    <th className="py-5 px-4">Franchise Fee</th>
                    <th className="py-5 px-4">Est. Setup cost</th>
                    <th className="py-5 px-4">Space required</th>
                    <th className="py-5 px-4">Op. Margin</th>
                    <th className="py-5 px-4">ROI Period</th>
                    <th className="py-5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pricingDetails.map((plan) => (
                    <tr
                      key={plan.id}
                      className={`font-sans text-sm hover:bg-slate-50/50 transition-colors ${
                        plan.highlight ? 'bg-brand-orange/[0.01]' : ''
                      }`}
                    >
                      <td className="py-5 px-6 font-medium">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-8 rounded-full ${plan.highlight ? 'bg-brand-orange' : 'bg-brand-blue'}`} />
                          <div>
                            <span className="block font-display font-bold text-slate-800">{plan.name}</span>
                            <span className="block text-[11px] text-slate-400 mt-0.5">{plan.sector}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-4 font-display font-extrabold text-slate-800">{plan.investmentRange}</td>
                      <td className="py-5 px-4 text-slate-600 font-semibold">{plan.initialFee}</td>
                      <td className="py-5 px-4 text-slate-600 font-semibold">{plan.setupCost}</td>
                      <td className="py-5 px-4 text-slate-600">{plan.spaceRequired}</td>
                      <td className="py-5 px-4">
                        <span className="inline-flex items-center gap-1 bg-brand-green/10 text-brand-green-dark px-2.5 py-1 rounded-md text-xs font-bold">
                          <Percent className="w-3.5 h-3.5" />
                          <span>{plan.opMargin}</span>
                        </span>
                      </td>
                      <td className="py-5 px-4">
                        <span className="inline-flex items-center gap-1 bg-brand-blue/15 text-brand-blue-dark px-2.5 py-1 rounded-md text-xs font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{plan.roiPeriod}</span>
                        </span>
                      </td>
                      <td className="py-5 px-6 text-right">
                        <button
                          onClick={() => onEnquire(plan.id)}
                          className={`btn-glow-orange px-4 py-2.5 rounded-full font-sans font-bold text-xs cursor-pointer ${
                            plan.highlight
                              ? 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                              : 'bg-slate-100 text-slate-700 hover:bg-brand-orange hover:text-white'
                          }`}
                        >
                          Enquire Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
