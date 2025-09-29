

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/config/colors';

const getSatelliteIcon = (index: number) => {
  const icons = [
    "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", // Layers
    "M13 2L3 14h9l-1 8 10-12h-9l1-8z", // Lightning
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", // Bulb
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", // Heart
    "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // Book
    "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check circle
  ];
  return icons[index % icons.length];
};

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const faheVideoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All images from imagesculture folder (excluding videos)
  const cultureImages = [
    '1756818096483.jpg',
    'volunteers (1).png',
    'WhatsApp Image 2025-09-27 at 21.58.48.jpeg',
    'WhatsApp Image 2025-09-28 at 11.59.54.jpeg',
    'WhatsApp Image 2025-09-28 at 11.59.55 (1).jpeg',
    'WhatsApp Image 2025-09-28 at 11.59.55 (2).jpeg',
    'WhatsApp Image 2025-09-28 at 11.59.55 (3).jpeg',
    'WhatsApp Image 2025-09-28 at 11.59.55.jpeg',
    'WhatsApp Image 2025-09-28 at 12.08.36.jpeg',
    'WhatsApp Image 2025-09-28 at 12.11.24.jpeg',
    'WhatsApp Image 2025-09-28 at 12.18.54.jpeg',
    'WhatsApp Image 2025-09-28 at 12.19.05.jpeg',
    'WhatsApp-Image-2025-03-03-at-02.33.54_2e01351d-1024x768.jpg',
    'WhatsApp-Image-2025-03-03-at-02.33.57_883147e9-768x1024.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Dynamic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cultureImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [cultureImages.length]);


  return (
    <>
      {/* Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center relative z-10">
              <Image 
                src="/images/logo (3).webp"
                alt="PROGIX Logo"
                width={130}
                height={130}
                className="h-20 w-auto"
              />
      </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <a href="#services" className={`font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`} style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>Services</a>
                <a href="#about" className={`font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`} style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>À propos</a>
                <a href="#portfolio" className={`font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`} style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>Portfolio</a>
                <a href="#contact" className={`font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`} style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>Contact</a>
                <a href="#blog" className={`font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`} style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>Blog</a>
                  </div>
                  </div>
                  
            {/* Right side button */}
            <div className="hidden md:flex items-center">
              <button className="text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ backgroundColor: colors.secondary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Démarrer un projet
              </button>
                </div>
                
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`transition-colors ${
                  isScrolled ? 'text-gray-900 hover:text-gray-700' : 'text-white hover:text-white/80'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors" style={{ color: colors.primary }}>Services</a>
                <a href="#about" className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors" style={{ color: colors.primary }}>À propos</a>
                <a href="#portfolio" className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors" style={{ color: colors.primary }}>Portfolio</a>
                <a href="#contact" className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors" style={{ color: colors.primary }}>Contact</a>
                <div className="flex space-x-4 pt-4">
                  <button className="text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1" style={{ backgroundColor: colors.secondary }}>
                    Démarrer un projet
                  </button>
                  <button className="border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 flex-1" style={{ borderColor: colors.primary, color: colors.primary }}>
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="min-h-screen pt-16 relative"
        style={{
          backgroundImage: 'url(https://witify.imgix.net//bg-city.jpg?fit=clip&fm=webp&height=&q=80&sharp=10&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start justify-center min-h-screen py-12">
            {/* Main Content */}
            <div className="max-w-4xl">

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading mb-5 text-3xl font-semibold sm:text-5xl md:text-[55px] md:leading-[65px] text-white -mt-16"
                style={{ 
                  fontFamily: 'Hubot Sans, Inter, sans-serif', 
                  letterSpacing: '-0.02em',
                  textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                Développement<br />
                logiciel sur mesure<br />
                <span style={{ color: colors.secondary }}>
                  pour les organisations<br />
                  ambitieuses
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl mb-8 leading-relaxed text-white/90 max-w-3xl"
              style={{ 
                fontFamily: 'Hubot Sans, Inter, sans-serif', 
                fontWeight: '300',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
              >
                Progix est une entreprise de développement logiciel basée à Montréal. Notre mission est de concevoir et de développer des solutions logicielles sur mesure, sécurisées et évolutives, créées de zéro pour s&apos;intégrer parfaitement à vos processus, vos équipes et vos clients.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  className="text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ 
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif'
                  }}
                >
                  Discuter de votre projet
                </button>
                <button 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  style={{ 
                    fontFamily: 'Hubot Sans, Inter, sans-serif'
                  }}
                >
                  Nos services
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between opacity-60">
            {/* BAnQ Logo */}
            <div className="flex items-center justify-center flex-1">
              <Image
                src="/images/BAnQ-gray.svg"
                alt="BAnQ"
                width={120}
                height={35}
                className="h-10 w-auto grayscale"
              />
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            {/* Crustys Logo */}
            <div className="flex items-center justify-center flex-1">
              <Image
                src="/images/crustys (1).png"
                alt="Crustys"
                width={120}
                height={40}
                className="h-10 w-auto grayscale opacity-70"
              />
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            <div className="flex items-center justify-center flex-1">
              <Image
                src="/images/cfaqlogo.png"
                alt="CFAQ"
                width={120}
                height={40}
                className="h-10 w-auto grayscale opacity-70"
              />
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            <div className="flex items-center justify-center flex-1">
              <div className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center grayscale">
                <span className="text-sm text-gray-500 font-medium">QUÉBEC</span>
              </div>
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            <div className="flex items-center justify-center flex-1">
              <div className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center grayscale">
                <span className="text-sm text-gray-500 font-medium">BANQ</span>
              </div>
            </div>
            
            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>
            
            <div className="flex items-center justify-center flex-1">
              <div className="h-10 w-32 bg-gray-200 rounded flex items-center justify-center grayscale">
                <span className="text-sm text-gray-500 font-medium">HEC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              Optimize your business processes<br />
              with a <span style={{ color: colors.secondary }}>customized system</span>
            </h2>
            <p className="text-lg leading-relaxed font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.primary }}>
              Whatever the size of your business, we design and develop secure, reliable and scalable software solutions to meet your long-term objectives.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', backgroundColor: colors.secondary }}>
              Discuss your project
            </button>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* SMES Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${colors.secondary}20` }}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                SMES
              </h3>
              <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                For companies that want to automate their processes, reduce delays, make informed decisions and stabilize their operations.
              </p>
            </div>

            {/* Institutional Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${colors.secondary}20` }}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Institutional
              </h3>
              <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                For institutions that want to add value to their data, make the most of their infrastructure and maximize the impact of their resources.
              </p>
          </div>

            {/* Startup Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: `${colors.secondary}20` }}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Startup
              </h3>
              <p className="text-gray-600 leading-relaxed font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                For start-ups who want to change the world of tomorrow, break the status quo and innovate through software technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-100 py-20 rounded-t-[60px] rounded-b-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              <span style={{ color: colors.secondary }}>Expertise</span> to address<br />
              your growth obstacles
            </h2>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Management & automation software Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-8">
                <Image
                  src="/images/management_automation_software_illustration (1).svg"
                  alt="Management & automation software"
                  width={200}
                  height={150}
                  className="w-full h-40 object-contain"
                  style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Management & automation software
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Tailor-made management software (Intranet, ERP etc.) that ensures synergy between your operations, your team and your new digital reality.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Business and technical analysis
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Custom software development
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  </div>
                
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Custom ERP development
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Software support and maintenance
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
                  </div>

            {/* Witify Lab Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-8">
                <Image
                  src="/images/witify_lab_illustration (1).svg"
                  alt="Witify Lab"
                  width={200}
                  height={150}
                  className="w-full h-40 object-contain"
                  style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                />
                  </div>
                  
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Witify Lab
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                The Witify Lab is dedicated to software innovation in all its forms. Research and development as well as innovative design are at the heart of our approach.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Web application
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Mobile application
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Data management Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-8">
                <Image
                  src="/images/data_management_illustration.svg"
                  alt="Data management"
                  width={200}
                  height={150}
                  className="w-full h-40 object-contain"
                  style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                />
              </div>
              
              <h3 className="text-xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Data management
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Our expertise takes advantage of the data at your disposal through targeted support for full understanding and effective decision making.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Data strategy
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Data analysis
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
          </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-light" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.secondary }}>
                    Data visualization
                  </span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                UNE PETITE ÉQUIPE<br />
                AUX <span style={{ color: colors.secondary }}>GRANDES<br />
                AMBITIONS</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Notre pire cauchemar est d'un jour se réveiller et être une équipe de 100 et devenir, ce qu'on appelle à l'interne, une usine à saucisses. On préfère avoir une petite équipe de joueurs AAA et faire une vingtaine de projets par année qui nous tiennent à cœur.
              </p>

              <div className="flex items-center space-x-6">
                <button 
                  className="text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ 
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif'
                  }}
                >
                  En savoir plus
                </button>
                
                <button 
                  className="text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Notre équipe
                </button>
              </div>
            </div>

            {/* Right Creative Gallery */}
            <div className="relative">
              {/* Main Gallery Container */}
              <div className="relative h-96 rounded-3xl overflow-hidden">
                {/* Layered Images with Creative Transitions */}
                <div className="absolute inset-0">
                  {cultureImages.map((image, index) => {
                    const isActive = index === currentImageIndex;
                    const isPrev = index === (currentImageIndex - 1 + cultureImages.length) % cultureImages.length;
                    const isNext = index === (currentImageIndex + 1) % cultureImages.length;
                    
                    return (
              <motion.div 
                        key={index}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          x: isActive ? 0 : isPrev ? '-100%' : isNext ? '100%' : '200%',
                          opacity: isActive ? 1 : isPrev ? 0.3 : isNext ? 0.3 : 0,
                          scale: isActive ? 1 : 0.8,
                          filter: isActive ? 'brightness(1) contrast(1.1)' : 'brightness(0.7) contrast(0.8)',
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 30,
                        }}
                      >
                        <Image
                          src={`/imagesculture/${image}`}
                          alt={`PROGIX Culture ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Organic Gradient Overlays */}
                        <div 
                          className="absolute inset-0"
                          style={{
                            background: isActive 
                              ? 'linear-gradient(135deg, transparent 0%, rgba(79, 163, 209, 0.1) 50%, transparent 100%)'
                              : 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Creative Corner Accents */}
                <div className="absolute top-0 left-0 w-24 h-24 opacity-20">
                  <div 
                    className="w-full h-full rounded-br-full"
                    style={{ backgroundColor: colors.secondary }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <div 
                    className="w-full h-full rounded-tl-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                </div>

                {/* Minimal Info Display */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-1 h-8 rounded-full"
                      style={{ backgroundColor: colors.secondary }}
                    />
                    <div>
                      <div className="text-white text-xs opacity-80" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        Culture
                      </div>
                      <div className="text-white text-sm font-medium" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        PROGIX
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elegant Counter */}
                <div className="absolute top-6 right-6">
                  <div className="text-right">
                    <div className="text-white text-xs opacity-60" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      {String(currentImageIndex + 1).padStart(2, '0')}
                    </div>
                    <div className="text-white text-xs opacity-40" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      — {String(cultureImages.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button 
                    className="text-white/70 hover:text-white transition-colors p-2"
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + cultureImages.length) % cultureImages.length)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="flex space-x-1">
                    {cultureImages.map((_, index) => (
                      <button
                        key={index}
                        className="h-0.5 transition-all duration-300 rounded-full"
                        style={{
                          width: index === currentImageIndex ? '24px' : '8px',
                          backgroundColor: index === currentImageIndex ? colors.secondary : 'rgba(255,255,255,0.3)'
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>

                  <button 
                    className="text-white/70 hover:text-white transition-colors p-2"
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % cultureImages.length)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating Year Badge - Simplified */}
              <div 
                className="absolute -top-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="text-center">
                  <div className="text-white font-bold text-sm" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    2025
                  </div>
                </div>
              </div>

              {/* Side Texture Elements */}
              <div className="absolute -left-2 top-1/4 w-1 h-16 rounded-full opacity-30" style={{ backgroundColor: colors.secondary }} />
              <div className="absolute -right-2 bottom-1/4 w-1 h-12 rounded-full opacity-20" style={{ backgroundColor: colors.primary }} />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                50+
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Projets réalisés
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                5+
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Années d'expérience
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                15+
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Clients satisfaits
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                100%
              </div>
              <div className="text-gray-400 text-sm" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Sur mesure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              <span style={{ color: colors.secondary }}>Digital success stories</span> : testimonials from<br />
              companies in the midst of digitalization
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              {/* Avatar */}
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/imagesreview/1517492082228.jpg"
                    alt="Yves Hennekens"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-700 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  J'ai développé une plateforme web pour ma société spécialisée dans l'acquisition d'actifs immobiliers résidentiels et fonciers. <span style={{ color: colors.secondary }}>L'équipe a su m'éduquer et même prendre des initiatives</span> pour mon site. Je recommande.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      David Manianga
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Gestion de Patrimoine chez Desjardins
                    </div>
                  </div>
                  <a 
                    href="https://ca.linkedin.com/in/david-manianga-ba2249126" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              {/* Avatar */}
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/imagesreview/1751852017364.jpg"
                    alt="Maude Rondeau"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-700 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Ilyes avait travaillé en tant que product owner pour iBusiness Consulting et avait su gérer mon équipe IT à la perfection. <span style={{ color: colors.secondary }}>Je n'ai pas hésité une seule seconde à le contacter</span> pour développer un CRM interne pour ma deuxième entreprise RecrutementPlus. Toute l'équipe est plus que satisfaite du résultat.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Hakim Safa
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      CEO de iBusiness Consulting Inc.
                    </div>
                  </div>
                  <a 
                    href="https://ca.linkedin.com/in/hakim-safa-85b46b17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              {/* Avatar */}
              <div className="absolute -top-6 left-8">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <Image
                    src="/imagesreview/images.jpg"
                    alt="Kenya Kondo"
                    width={64}
                    height={64}
                  className="w-full h-full object-cover"
                />
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-700 leading-relaxed font-light mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  L'équipe était à l'écoute et réactive. Le projet a pris un petit peu plus de temps que prévu mais <span style={{ color: colors.secondary }}>on en ressort avec un produit complet sans dettes techniques</span> et c'est ce qui m'importait. Donc bravo et merci à tous !
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Daniel Dekasse
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Economist-Fiscal Policy Advisor<br />
                      Ministère des Finances du Québec (MFQ)
                    </div>
                  </div>
                  <a 
                    href="https://ca.linkedin.com/in/daniel-dekasse-economiste/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button 
              className="text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ 
                backgroundColor: colors.secondary,
                fontFamily: 'Hubot Sans, Inter, sans-serif'
              }}
            >
              Voir plus de témoignages
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                Discover our<br />
                latest <span style={{ color: colors.secondary }}>achievements</span>
              </h2>
            </div>
            <button 
              className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ 
                backgroundColor: colors.secondary,
                fontFamily: 'Hubot Sans, Inter, sans-serif'
              }}
            >
              View all projects
            </button>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {/* Centre Fahe Mechanics */}
              <motion.div 
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-none"
              style={{ 
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ 
                backgroundColor: '#1B363C'
              }}
              onMouseEnter={() => {
                setHoveredImage('fahe');
                if (faheVideoRef.current) {
                  faheVideoRef.current.play();
                }
              }}
              onMouseLeave={() => {
                setHoveredImage(null);
                if (faheVideoRef.current) {
                  faheVideoRef.current.pause();
                  faheVideoRef.current.currentTime = 0;
                }
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Case Study
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Custom CRM Development
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Centre Fahe Mechanics
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Centre Fahe Mechanics est une référence à Rivière-des-Prairies dans le domaine de la réparation automobile. Nous avons développé pour eux un CRM complet permettant de tracker leur visibilité en ligne, gérer leurs prospects, automatiser le check-in des véhicules et optimiser leur processus de service client.
                  </p>
                  
                  <button 
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: colors.secondary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Read case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      <video
                        ref={faheVideoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        style={{ 
                          filter: 'brightness(0.9) contrast(1.1)',
                          transform: 'scaleX(-1) rotate(-90deg)'
                        }}
                      >
                        <source src="/imagesculture/WhatsApp Video 2025-09-28 at 11.59.54 (1).mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture vidéo.
                      </video>
                    </div>
                  </div>
                </div>
              </div>

              </motion.div>

            {/* Confortplus65 */}
              <motion.div 
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-none"
              style={{ 
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ 
                backgroundColor: '#1B363C'
              }}
              onMouseEnter={() => setHoveredImage('confortplus')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Case Study
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Healthcare Management System
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Confortplus65
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Confortplus65 a pour mission d'offrir des services de maintien à domicile adaptés aux besoins des personnes âgées de 65 ans et plus. Nous avons développé un système complet de suivi et de gestion permettant d'optimiser l'accompagnement, l'entretien et leur programme exclusif d'activité physique pour personnes autonomes, semi-autonomes et alitées.
                  </p>
                  
                  <button 
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: colors.secondary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Read case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                </div>
                
                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/imagesculture/WhatsApp Image 2025-09-28 at 16.17.34.jpeg"
                        alt="Confortplus65 Dashboard"
                        fill
                        className="object-cover"
                        style={{ 
                          filter: 'brightness(0.9) contrast(1.1)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              </motion.div>

            {/* CoRide */}
              <motion.div 
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-none"
              style={{ 
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ 
                backgroundColor: '#1B363C'
              }}
              onMouseEnter={() => setHoveredImage('coride')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Case Study
                    </span>
                    <span className="text-sm text-gray-500 uppercase tracking-wide" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Mobile App & Web Development
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-medium text-gray-900 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    CoRide
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    CoRide est une application de mobilité multi-services révolutionnaire. Notre équipe a développé une solution complète incluant une app mobile Flutter (transport privé, livraison, food delivery), un backend Node.js robuste et une refonte totale de leur site vitrine, créant un écosystème digital intégré et évolutif.
                  </p>
                  
                  <button 
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: colors.secondary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Read case study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative">
                      {/* Phone mockup */}
                      <div className="w-28 h-48 bg-gray-800 rounded-3xl mx-auto relative shadow-xl">
                        <div className="absolute inset-1 bg-white rounded-2xl overflow-hidden">
                          {/* Screen content */}
                          <div className="h-full bg-gradient-to-b from-purple-400 to-blue-500 relative">
                            {/* Header */}
                            <div className="absolute top-3 left-3 right-3">
                              <div className="flex items-center justify-between">
                                <div className="h-3 bg-white/90 rounded w-12 flex items-center justify-center">
                                  <span className="text-xs font-bold text-purple-600">CoRide</span>
                                </div>
                                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              </div>
                            </div>
                            
                            {/* Service icons */}
                            <div className="absolute top-12 left-3 right-3">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-white/20 rounded p-1 flex flex-col items-center">
                                  <div className="w-4 h-4 bg-yellow-400 rounded mb-1">🚗</div>
                                  <span className="text-xs text-white">Transport</span>
                                </div>
                                <div className="bg-white/20 rounded p-1 flex flex-col items-center">
                                  <div className="w-4 h-4 bg-orange-400 rounded mb-1">📦</div>
                                  <span className="text-xs text-white">Livraison</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom section */}
                            <div className="absolute bottom-4 left-3 right-3">
                              <div className="bg-white/90 rounded-lg p-2">
                                <div className="flex items-center space-x-2">
                                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-xs text-white">📍</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="h-1 bg-gray-200 rounded mb-1"></div>
                                    <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Home indicator */}
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-600 rounded-full"></div>
                      </div>
                      
                      {/* App Store badges */}
                      <div className="absolute -bottom-4 -left-6 flex space-x-1">
                        <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
                          <span className="text-xs text-white">📱</span>
                        </div>
                        <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center">
                          <span className="text-xs text-white">▶️</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Custom Cursor for Case Studies */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div 
            className="fixed pointer-events-none z-50 w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: '#333',
              left: mousePosition.x,
              top: mousePosition.y,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
