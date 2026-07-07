import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FranchiseOpportunities from './components/FranchiseOpportunities';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [selectedFranchiseId, setSelectedFranchiseId] = useState<string>('general');

  const handleEnquire = (franchiseId: string) => {
    setSelectedFranchiseId(franchiseId);
    
    // Smooth scroll to contact form with small delay to allow state sync
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleClearSelectedFranchise = () => {
    setSelectedFranchiseId('general');
  };

  return (
    <div className="min-h-screen bg-[#F8FCFF] text-slate-900 antialiased font-sans selection:bg-brand-orange/20 selection:text-brand-orange-dark">
      {/* Sticky Navigation Bar */}
      <Navbar onNavClick={handleNavClick} />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onExploreClick={() => handleNavClick('opportunities')} />

        {/* 2. About EBG Section */}
        <About />

        {/* 3. Franchise Opportunities Catalog */}
        <FranchiseOpportunities onEnquire={handleEnquire} />

        {/* 4. Financial Tiers & Pricing */}
        <Pricing onEnquire={handleEnquire} />

        {/* 5. How It Works Step-by-Step */}
        <HowItWorks />

        {/* 6. Why Choose Us (Stats & Pitch) */}
        <WhyChooseUs />

        {/* 7. Investor Testimonials */}
        <Testimonials />

        {/* 8. Contact & Advisory form */}
        <ContactForm
          selectedFranchiseId={selectedFranchiseId}
          onClearSelectedFranchise={handleClearSelectedFranchise}
        />
      </main>

      {/* 9. Corporate Footer */}
      <Footer onNavClick={handleNavClick} />

      {/* 10. Persistent Floating WhatsApp widget */}
      <FloatingWhatsApp />
    </div>
  );
}
