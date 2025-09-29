'use client';

import React from 'react';
import HeroSection from '@/components/ui/HeroSection';
import CtaSection from '@/components/ui/CtaSection';
import Footer from '@/components/ui/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Navigation */}
      {/* <Navbar /> */}

      {/* Hero Section with Blue Banner */}
      <HeroSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;