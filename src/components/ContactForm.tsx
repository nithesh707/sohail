import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';
import { EnquiryFormInput } from '../types';

interface ContactFormProps {
  selectedFranchiseId: string;
  onClearSelectedFranchise: () => void;
}

export default function ContactForm({ selectedFranchiseId, onClearSelectedFranchise }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryFormInput>({
    name: '',
    phone: '',
    email: '',
    franchiseId: selectedFranchiseId || 'general',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormInput, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormInput | null>(null);

  // Sync prop changes to form state
  useEffect(() => {
    if (selectedFranchiseId) {
      setFormData((prev) => ({ ...prev, franchiseId: selectedFranchiseId }));
    }
  }, [selectedFranchiseId]);

  const validateForm = () => {
    const newErrors: Partial<Record<keyof EnquiryFormInput, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.franchiseId === 'general') {
      newErrors.franchiseId = 'Please select a specific sector/brand of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof EnquiryFormInput]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(formData);
      setShowReceipt(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        franchiseId: 'general',
        message: '',
      });
      onClearSelectedFranchise();
    }, 1200);
  };

  const getFranchiseName = (id: string) => {
    switch (id) {
      case 'adhira':
        return 'Adhira (F&B Restaurant)';
      case 'appa':
        return 'Appa (F&B Coffee & Snacks)';
      case 'acer':
        return 'Acer (Electric Vehicle Dealership)';
      case 'daewoo':
        return 'Daewoo (Home Appliances Store)';
      default:
        return 'General Franchise Enquiry';
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-transparent relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue/10 text-brand-blue px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Advisory</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Initiate Your Franchise Journey Today
          </h2>
          
          <p className="font-sans text-base text-slate-500">
            Submit your parameters below. Our investment coordination officers will review your details 
            and contact you within 1 business day.
          </p>
        </div>

        {/* Form and Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-24">
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md space-y-8">
              <h3 className="font-display font-extrabold text-xl text-slate-900">
                EBG Corporate Headquarters
              </h3>

              {/* Detail list */}
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wide">Investment Line</h4>
                    <p className="font-sans text-sm sm:text-base font-bold text-slate-800 mt-1">+91 95333 32300</p>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">Toll-free across India</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wide">Consulting Desk</h4>
                    <p className="font-sans text-sm sm:text-base font-bold text-slate-800 mt-1">partnerships@ebgfranchise.com</p>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">Fast-track response within 4 hours</p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wide">Corporate Office</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      <strong>EBG Franchise Group</strong>, Level 7, Block B, Premium Corporate Plaza, MG Road, Bengaluru, Karnataka, 560001, India.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start border-t border-slate-200/50 pt-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-wide">Operating Hours</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed font-semibold">
                      Monday to Saturday: 9:30 AM to 6:30 PM (IST)
                    </p>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">Closed on Sundays &amp; National Holidays</p>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="bg-brand-whatsapp/10 border border-brand-whatsapp/20 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-whatsapp flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse-ring">
                  <MessageSquare className="w-6 h-6 fill-white text-brand-whatsapp" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-800 leading-snug">Need Instant Answers?</h4>
                  <p className="font-sans text-xs text-slate-500 mt-1">
                    Connect on WhatsApp for real-time portfolio brochure downloads.
                  </p>
                  <a
                    href="https://wa.me/919533332300?text=Hi%20EBG%2C%20I%27m%20interested%20in%20franchise%20opportunities!"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-1 font-sans text-xs font-bold text-brand-green-dark hover:text-brand-green transition-colors mt-2"
                  >
                    <span>Start chat session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Block: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md relative">
              <h3 className="font-display font-extrabold text-xl text-slate-900 mb-6 text-left">
                Advisory Form Parameters
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your first and last name"
                    className={`w-full font-sans text-sm border bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                        : 'border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue-dark'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Phone and Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone-input" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 95333 32300"
                      className={`w-full font-sans text-sm border bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                          : 'border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue-dark'
                      }`}
                    />
                    {errors.phone && (
                      <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. investor@gmail.com"
                      className={`w-full font-sans text-sm border bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                          : 'border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue-dark'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dropdown Select Brand */}
                <div className="space-y-1.5">
                  <label htmlFor="franchiseId-select" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Franchise of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="franchiseId-select"
                    name="franchiseId"
                    value={formData.franchiseId}
                    onChange={handleInputChange}
                    className={`w-full font-sans text-sm border bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                      errors.franchiseId
                        ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                        : 'border-slate-200 focus:ring-brand-blue/20 focus:border-brand-blue-dark'
                    }`}
                  >
                    <option value="general">-- Select premium brand catalog --</option>
                    <option value="adhira">Adhira (F&amp;B Restaurant - Investment Starting ₹15L)</option>
                    <option value="appa">Appa (F&amp;B Coffee &amp; Snacks - Investment Starting ₹12L)</option>
                    <option value="acer">Acer (Electric Vehicle Dealership - Investment Starting ₹50L)</option>
                    <option value="daewoo">Daewoo (Home Appliances - Investment Starting ₹20L)</option>
                  </select>
                  {errors.franchiseId && (
                    <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.franchiseId}</span>
                    </div>
                  )}
                </div>

                {/* message */}
                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="font-sans text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Additional Message / Carpet Area Availability (Optional)
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your current business experience or mention your preferred geographical location."
                    className="w-full font-sans text-sm border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue-dark transition-all resize-none"
                  />
                </div>

                {/* submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans font-bold text-sm py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Reviewing Parameters...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Secure Advisory Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Success Receipt Modal Backdrop overlay */}
      <AnimatePresence>
        {showReceipt && submittedData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowReceipt(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left overflow-hidden z-10"
            >
              {/* Check header */}
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-slate-900 leading-none">Enquiry Lock Success</h3>
                  <span className="font-mono text-[10px] text-slate-400 mt-1 block">TID: EBG-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>

              {/* Receipt Summary body */}
              <div className="space-y-4 mb-6">
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  Hi <strong>{submittedData.name}</strong>, your premium franchise acquisition application parameter has been safely logged in our central directory database.
                </p>

                <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl space-y-3 font-sans text-xs">
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400 font-semibold uppercase">Interested Segment</span>
                    <span className="text-slate-800 font-bold">{getFranchiseName(submittedData.franchiseId)}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400 font-semibold uppercase">Registrant Phone</span>
                    <span className="text-slate-800 font-bold">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-2">
                    <span className="text-slate-400 font-semibold uppercase">Registrant Email</span>
                    <span className="text-slate-800 font-bold">{submittedData.email}</span>
                  </div>
                  {submittedData.message.trim() && (
                    <div className="pt-1">
                      <span className="text-slate-400 font-semibold uppercase block mb-1">Supplied Brief</span>
                      <p className="text-slate-600 italic">"{submittedData.message}"</p>
                    </div>
                  )}
                </div>

                <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-4 flex gap-3 items-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-orange mt-1 animate-pulse shrink-0" />
                  <div className="space-y-1">
                    <h5 className="font-display font-bold text-xs text-brand-orange">What happens next?</h5>
                    <ul className="list-disc list-inside font-sans text-[11px] text-slate-500 space-y-1">
                      <li>An EBG Advisory Executive will contact you on <strong>{submittedData.phone}</strong>.</li>
                      <li>A localized feasibility study guidelines PDF will be sent to your inbox.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowReceipt(false)}
                className="w-full btn-glow-orange bg-brand-orange hover:bg-brand-orange-dark text-white font-sans font-bold text-sm py-3 px-4 rounded-xl cursor-pointer"
              >
                Acknowledge &amp; Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
