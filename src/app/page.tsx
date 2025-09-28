'use client';

import React from 'react';
import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/ui/HeroSection';
import ServicesSection from '@/components/ui/ServicesSection';
import WhyProgixSection from '@/components/ui/WhyProgixSection';
import TestimonialsSection from '@/components/ui/TestimonialsSection';
import TrustedByBrandsSection from '@/components/ui/TrustedByBrandsSection';
import PortfolioSection from '@/components/ui/PortfolioSection';
import TeamSection from '@/components/ui/TeamSection';
import AboutSection from '@/components/ui/AboutSection';
import CtaSection from '@/components/ui/CtaSection';
import BlogSection from '@/components/ui/BlogSection';
import SupportSection from '@/components/ui/SupportSection';
import CollaborationCTA from '@/components/ui/CollaborationCTA';
import Footer from '@/components/ui/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Navigation */}
      {/* <Navbar /> */}

      {/* Hero Section with Blue Banner */}
      <HeroSection />
      {/* Trusted by Global Brands Section */}
      <TrustedByBrandsSection /> 
      
 
      {/* About Section */}
      <AboutSection />
      {/* Services Section */}
      <ServicesSection />

      {/* Why PROGIX Section */}
      <WhyProgixSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection /> 

      {/* CTA Section 
      <CtaSection /> */}

      {/* Blog Section */}
      <BlogSection />

      {/* Support Section */}
      <SupportSection />

      {/* Collaboration CTA */}
      <CollaborationCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;