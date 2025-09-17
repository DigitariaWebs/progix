'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/ui/HeroSection';
import ServicesSection from '@/components/ui/ServicesSection';
import WhyProgixSection from '@/components/ui/WhyProgixSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import AboutSection from '@/components/ui/AboutSection';
import CtaSection from '@/components/ui/CtaSection';
import Footer from '@/components/ui/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Navigation */}
      {/* <Navbar /> */}

      {/* Hero Section with Blue Banner */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why PROGIX Section */}
      <WhyProgixSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;