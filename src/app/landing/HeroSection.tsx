'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/config/colors';
import Partners from '@/components/Partners';


const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const faheVideoRef = useRef<HTMLVideoElement>(null);
  const coRideVideoRef = useRef<HTMLVideoElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All images from imagesculture folder (excluding videos)
  const cultureImages = [
    'Picsart_25-09-29_19-34-34-749.jpg',
    'Picsart_25-09-29_19-40-21-097.jpg',
    'Picsart_25-09-29_19-39-46-733.jpg',
    'Picsart_25-09-29_19-39-01-194.jpg',
    'Picsart_25-09-29_19-38-30-170.jpg',
    'Picsart_25-09-29_19-37-55-797.jpg',
    'Picsart_25-09-29_19-37-22-327.jpg',
    'Picsart_25-09-29_19-36-58-899.jpg',
    'Picsart_25-09-29_19-36-22-547.jpg',
    'Picsart_25-09-29_19-35-48-522.jpg',
    'Picsart_25-09-29_19-35-03-422.jpg',
    'WhatsApp-Image-2025-03-03-at-02.33.54_2e01351d-1024x768.jpg',
  ];

  useEffect(() => {
    setIsMounted(true);

    // Mobile detection
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const nav = navRef.current;
      if (nav) {
        if (scrollTop > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    // Delay initial scroll check to ensure we're on client
    const timer = setTimeout(() => {
      handleScroll();
      checkMobile();
    }, 0);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Dynamic image rotation - only start after hydration
  useEffect(() => {
    if (!isMounted) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cultureImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [cultureImages.length, isMounted]);

  // Mobile video autoplay on scroll
  useEffect(() => {
    if (!isMounted || !isMobile) return;

    const videos = [faheVideoRef.current, coRideVideoRef.current].filter(Boolean) as HTMLVideoElement[];
    
    if (videos.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.5, // Play when 50% of video is visible
        rootMargin: '0px 0px -10% 0px'
      }
    );

    videos.forEach((video) => {
      observer.observe(video);
    });

    return () => {
      videos.forEach((video) => {
        observer.unobserve(video);
      });
    };
  }, [isMounted, isMobile]);

  return (
    <>
      {/* Navigation Header */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md scrolled:bg-white/95 scrolled:shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center relative z-10">
              <Image
                src="/images/logo (3).webp"
                alt="PROGIX Logo"
                priority
                onClick={() => window.location.href = '/landing'}
                
                width={130}
                height={130}
                className="h-20 w-auto cursor-pointer"
              />
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  href="/services"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                   
                >
                  Services
                </Link>
                <a
                  href="#about"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                   
                >
                  À propos
                </a>
                <a
                  href="#portfolio"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                   
                >
                  Portfolio
                </a>
                <Link
                  href="/contact"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                   
                >
                  Contact
                </Link>
                <a
                  href="#blog"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                   
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Right side button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                style={{
                  backgroundColor: colors.secondary,
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                Démarrer un projet
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  À propos
                </a>
                <a
                  href="#portfolio"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Portfolio
                </a>
                <Link
                  href="/contact"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Contact
                </Link>
                <div className="flex space-x-4 pt-4">
                  <Link
                    href="/contact"
                    className="text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 inline-block text-center"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Démarrer un projet
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:bg-gray-50 flex-1 inline-block text-center"
                    style={{
                      borderColor: colors.primary,
                      color: colors.primary,
                    }}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HeroSection.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay - Strong from left, fading to right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, rgba(230, 242, 255, 1.0) 0%, rgba(230, 242, 255, 0.8) 15%, rgba(230, 242, 255, 0.5) 30%, rgba(230, 242, 255, 0.2) 45%, transparent 100%)`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start justify-center min-h-screen py-12">
            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading mb-5 text-3xl font-bold sm:text-5xl md:text-[55px] md:leading-[65px] text-black -mt-16"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Développement
                <br />
                logiciel sur mesure
                <br />
                <span style={{ color: colors.secondary }}>
                  pour les organisations
                  <br />
                  ambitieuses
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl mb-8 leading-relaxed text-black/90 max-w-3xl font-medium"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif', 
                }}
              >
                Progix est une entreprise de développement logiciel basée à Montréal.<br />
                 Notre mission est de concevoir et de développer des
                solutions logicielles sur mesure, sécurisées et évolutives,
                créées de zéro pour s&apos;intégrer parfaitement à vos
                processus, vos équipes et vos clients.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  Discuter de votre projet
                </Link>
                <button
                  className="bg-white/10 backdrop-blur-sm border border-black/20 text-black hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
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
           <Partners />
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
               
            >
              Optimisez vos processus métier
              <br />
              avec un{' '}
              <span style={{ color: colors.secondary }}>système personnalisé</span>
            </h2>
            <p
              className="text-lg leading-relaxed font-semibold"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.primary,
              }}
            >
              Quelle que soit la taille de votre entreprise, nous concevons et
              développons des solutions logicielles sécurisées, fiables et évolutives
              pour répondre à vos objectifs à long terme.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="/contact"
              className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                backgroundColor: colors.secondary,
              }}
            >
              Discuter de votre projet
            </Link>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* SMES Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.secondary}20` }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.secondary }}
                >
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                PME
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-semibold"
                 
              >
                Pour les entreprises qui souhaitent automatiser leurs processus, réduire
                les délais, prendre des décisions éclairées et stabiliser leurs opérations.
              </p>
            </div>

            {/* Institutional Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.secondary}20` }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.secondary }}
                >
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                Institutionnel
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-semibold"
                 
              >
                Pour les institutions qui souhaitent valoriser leurs données, tirer
                le meilleur parti de leur infrastructure et maximiser l&apos;impact de leurs
                ressources.
              </p>
            </div>

            {/* Startup Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.secondary}20` }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: colors.secondary }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                Startup
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-semibold"
                 
              >
                Pour les start-ups qui veulent changer le monde de demain, briser
                le statu quo et innover grâce à la technologie logicielle.
              </p>
            </div>
          </div>
        </div>
      </section>
<div className="bg-white">
  {/* Decorative white elements */}
<svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-gray-900"
          ></path>
        </svg>
        <svg
          className="w-full h-16 fill-current text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
</div>
      {/* Expertise Section */}
      <div className="bg-white">
        <section className="bg-white py-20 rounded-t-[60px] rounded-b-[60px] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16"> 
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
               
            >
              <span style={{ color: colors.secondary }}>Expertise</span> pour
              surmonter
              <br />
              vos obstacles de croissance
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

              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                Logiciels de gestion & d&apos;automatisation
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-semibold mb-6"
                 
              >
                Logiciels de gestion sur mesure (Intranet, ERP etc.) qui
                assurent la synergie entre vos opérations, votre équipe et votre
                nouvelle réalité numérique.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700 "
                     
                  >
                    Analyse métier et technique
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700 "
                     
                  >
                    Développement logiciel sur mesure
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700  "
                     
                  >
                    Développement ERP personnalisé
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Support et maintenance logicielle
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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

              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                Laboratoire PROGIX
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-semibold mb-6"
                 
              >
                Le laboratoire PROGIX est dédié à l&apos;innovation logicielle sous
                toutes ses formes. La recherche et développement ainsi que la
                conception innovante sont au cœur de notre approche.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Application web
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Application mobile
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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

              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                 
              >
                Gestion des données
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-semibold mb-6"
                 
              >
                Notre expertise tire parti des données à votre disposition grâce
                à un accompagnement ciblé pour une compréhension complète et une
                prise de décision efficace.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Stratégie de données
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Analyse de données
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm front-semibold text-cyan-700"
                     
                  >
                    Visualisation de données
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* About Section */}
      <section className="bg-gray-900 pb-20 ">
        {/* Decorative white rectangle at top */}
        <div 
          className="w-full h-8 bg-white mb-20"
          style={{
            borderBottomLeftRadius: '100px',
            borderBottomRightRadius: '100px'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                 
              >
                UNE PETITE ÉQUIPE
                <br />
                AUX{' '}
                <span style={{ color: colors.secondary }}>
                  GRANDES
                  <br />
                  AMBITIONS
                </span>
              </h2>

              <p
                className="text-lg text-gray-600 leading-relaxed font-semibold mb-8"
                 
              >
                Notre pire cauchemar est d&apos;un jour se réveiller et être une
                équipe de 100 et devenir, ce qu&apos;on appelle à l&apos;interne, une
                usine à saucisses. On préfère avoir une petite équipe de joueurs
                AAA et faire une vingtaine de projets par année qui nous
                tiennent à cœur.
              </p>

              <div className="flex items-center space-x-6">
                <Link
                  href="/contact"
                  className="text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                  style={{
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  En savoir plus
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block"
                   
                >
                  Notre équipe
                </Link>
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
                    const isPrev =
                      index ===
                      (currentImageIndex - 1 + cultureImages.length) %
                        cultureImages.length;
                    const isNext =
                      index === (currentImageIndex + 1) % cultureImages.length;

                    return (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{
                          x: '200%',
                          opacity: 0,
                          scale: 0.8,
                          filter: 'brightness(0.7) contrast(0.8)'
                        }}
                        animate={{
                          x: isActive
                            ? 0
                            : isPrev
                              ? '-100%'
                              : isNext
                                ? '100%'
                                : '200%',
                          opacity: isActive
                            ? 1
                            : isPrev
                              ? 0.3
                              : isNext
                                ? 0.3
                                : 0,
                          scale: isActive ? 1 : 0.8,
                          filter: isActive
                            ? 'brightness(1) contrast(1.1)'
                            : 'brightness(0.7) contrast(0.8)',
                        }}
                        transition={{
                          type: 'spring',
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
                              : 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
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
                      <div
                        className="text-white text-xs opacity-80"
                         
                      >
                        Culture
                      </div>
                      <div
                        className="text-white text-sm font-bold"
                         
                      >
                        PROGIX
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elegant Counter */}
                <div className="absolute top-6 right-6">
                  <div className="text-right">
                    <div
                      className="text-white text-xs opacity-60"
                       
                    >
                      {String(currentImageIndex + 1).padStart(2, '0')}
                    </div>
                    <div
                      className="text-white text-xs opacity-40"
                       
                    >
                      — {String(cultureImages.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <button
                    className="text-white/70 hover:text-white transition-colors p-2"
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) =>
                          (prev - 1 + cultureImages.length) %
                          cultureImages.length,
                      )
                    }
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <div className="flex space-x-1">
                    {cultureImages.map((_, index) => (
                      <button
                        key={index}
                        className="h-0.5 transition-all duration-300 rounded-full"
                        style={{
                          width: index === currentImageIndex ? '24px' : '8px',
                          backgroundColor:
                            index === currentImageIndex
                              ? colors.secondary
                              : 'rgba(255,255,255,0.3)',
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>

                  <button
                    className="text-white/70 hover:text-white transition-colors p-2"
                    onClick={() =>
                      setCurrentImageIndex(
                        (prev) => (prev + 1) % cultureImages.length,
                      )
                    }
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
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
                  <div
                    className="text-white font-bold text-sm"
                     
                  >
                    2025
                  </div>
                </div>
              </div>

              {/* Side Texture Elements */}
              <div
                className="absolute -left-2 top-1/4 w-1 h-16 rounded-full opacity-30"
                style={{ backgroundColor: colors.secondary }}
              />
              <div
                className="absolute -right-2 bottom-1/4 w-1 h-12 rounded-full opacity-20"
                style={{ backgroundColor: colors.primary }}
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                 
              >
                50+
              </div>
              <div
                className="text-gray-400 text-sm"
                 
              >
                Projets réalisés
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                 
              >
                5+
              </div>
              <div
                className="text-gray-400 text-sm"
                 
              >
                Années d&apos;expérience
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                 
              >
                15+
              </div>
              <div
                className="text-gray-400 text-sm"
                 
              >
                Clients satisfaits
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                 
              >
                100%
              </div>
              <div
                className="text-gray-400 text-sm"
                 
              >
                Sur mesure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white pb-20">
                {/* Decorative white rectangle at top */}
                <div 
          className="w-full h-8 bg-gray-900 mb-20"
          style={{
            borderBottomLeftRadius: '100px',
            borderBottomRightRadius: '100px'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
               
            >
              <span style={{ color: colors.secondary }}>
                Témoignages
              </span>{' '}
              de projets réussis
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
                <p
                  className="text-gray-700 leading-relaxed font-bold mb-6"
                   
                >
                  J&apos;ai développé une plateforme web pour ma société spécialisée
                  dans l&apos;acquisition d&apos;actifs immobiliers résidentiels et
                  fonciers.{' '}
                  <span style={{ color: colors.secondary }}>
                    L&apos;équipe a su m&apos;éduquer et même prendre des initiatives
                  </span>{' '}
                  pour mon site. Je recommande.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                       
                    >
                      David Manianga
                    </div>
                    <div
                      className="text-sm text-gray-500"
                       
                    >
                      Gestion de Patrimoine chez Desjardins
                    </div>
                  </div>
                  <a
                    href="https://ca.linkedin.com/in/david-manianga-ba2249126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                <p
                  className="text-gray-700 leading-relaxed font-bold mb-6"
                   
                >
                  Ilyes avait travaillé en tant que product owner pour iBusiness
                  Consulting et avait su gérer mon équipe IT à la perfection.{' '}
                  <span style={{ color: colors.secondary }}>
                    Je n&apos;ai pas hésité une seule seconde à le contacter
                  </span>{' '}
                  pour développer un CRM interne pour ma deuxième entreprise
                  RecrutementPlus. Toute l&apos;équipe est plus que satisfaite du
                  résultat.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                       
                    >
                      Hakim Safa
                    </div>
                    <div
                      className="text-sm text-gray-500"
                       
                    >
                      CEO de iBusiness Consulting Inc.
                    </div>
                  </div>
                  <a
                    href="https://ca.linkedin.com/in/hakim-safa-85b46b17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                <p
                  className="text-gray-700 leading-relaxed font-bold mb-6"
                   
                >
                  L&apos;équipe était à l&apos;écoute et réactive. Le projet a pris un
                  petit peu plus de temps que prévu mais{' '}
                  <span style={{ color: colors.secondary }}>
                    on en ressort avec un produit complet sans dettes techniques
                  </span>{' '}
                  et c&apos;est ce qui m&apos;importait. Donc bravo et merci à tous !
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                       
                    >
                      Daniel Dekasse
                    </div>
                    <div
                      className="text-sm text-gray-500"
                       
                    >
                      Economist-Fiscal Policy Advisor
                      <br />
                      Ministère des Finances du Québec (MFQ)
                    </div>
                  </div>
                  <a
                    href="https://ca.linkedin.com/in/daniel-dekasse-economiste/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button
              className="text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                backgroundColor: colors.secondary,
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              Voir plus de témoignages
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-cyan-800  ">
      <svg
          className="w-full h-16 fill-current text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                 
              >
                Discover our
                <br />
                latest{' '}
                <span style={{ color: colors.secondary }}>achievements</span>
              </h2>
            </div>
            <button
              className="text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                backgroundColor: colors.secondary,
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              View all projects
            </button>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8">
            {/* Centre Fahe Mechanics */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-sha duration-200"
              style={{
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.2s ease',
              }}
              whileHover={{
                backgroundColor: '#1B363C',
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
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Custom CRM Development
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-bold text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                     
                  >
                    Centre Fahe Mechanics
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-bold mb-8 transition-colors duration-200"
                     
                  >
                    Centre Fahe Mechanics est une référence à
                    Rivière-des-Prairies dans le domaine de la réparation
                    automobile. Nous avons développé pour eux un CRM complet
                    permettant de tracker leur visibilité en ligne, gérer leurs
                    prospects, automatiser le check-in des véhicules et
                    optimiser leur processus de service client.
                  </p>

                  <Link
                    href="/case-study/fahe-crm"
                    className="inline-flex items-center text-sm font-bold group-hover:translate-x-2 group-hover:text-white transition-all duration-200"
                    style={{
                      color: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Read case study
                    <svg
                      className="w-4 h-4 ml-2 group-hover:stroke-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      {isMounted && (
                        <video
                          ref={faheVideoRef}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          autoPlay={isMobile}
                          style={{
                            filter: 'brightness(0.9) contrast(1.1)',
                            transform: 'scaleX(-1) rotate(-90deg)',
                          }}
                        >
                          <source
                            src="/imagesculture/WhatsApp Video 2025-09-28 at 11.59.54 (1).mp4"
                            type="video/mp4"
                          />
                          Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Confortplus65 */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-200"
              style={{
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.2s ease',
              }}
              whileHover={{
                backgroundColor: '#1B363C',
              }}
              onMouseEnter={() => setHoveredImage('confortplus')}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Healthcare Management System
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-bold text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                     
                  >
                    FruitExotic
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-bold mb-8 transition-colors duration-200"
                     
                  >
                    FruitExotic Inc. est une entreprise spécialisée dans l&apos;exportation
                    de fruits exotiques de qualité premium. Nous avons développé leur
                    site web international multilingue (7 langues) pour mettre en valeur
                    leurs services de la meilleure façon grâce à nos développeurs frontend
                    et designers UI/UX d&apos;élite, créant une expérience digitale
                    exceptionnelle qui reflète l&apos;excellence de leurs produits exotiques.
                  </p>

                  <Link
                    href="/case-study/fruitexotic"
                    className="inline-flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform duration-200"
                    style={{
                      color: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Read case study
                    <svg
                      className="w-4 h-4 ml-2 group-hover:stroke-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      {isMounted && (
                        <video
                          ref={coRideVideoRef}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          autoPlay={isMobile}
                          style={{
                            filter: 'brightness(0.9) contrast(1.1)',
                          }}
                        >
                          <source
                            src="/fruitexo.mp4"
                            type="video/mp4"
                          />
                          Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CoRide */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-200 mb-10"
              style={{
                backgroundColor: '#F8F9FA',
                transition: 'background-color 0.2s ease',
              }}
              whileHover={{
                backgroundColor: '#1B363C',
              }}
              onMouseEnter={() => {
                setHoveredImage('coride');
                if (coRideVideoRef.current) {
                  coRideVideoRef.current.play();
                }
              }}
              onMouseLeave={() => {
                setHoveredImage(null);
                if (coRideVideoRef.current) {
                  coRideVideoRef.current.pause();
                  coRideVideoRef.current.currentTime = 0;
                }
              }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-3 mb-6">
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                       
                    >
                      Mobile App & Web Development
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-bold text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                     
                  >
                    CoRide
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-bold mb-8 transition-colors duration-200"
                     
                  >
                    CoRide est une application de mobilité multi-services
                    révolutionnaire. Notre équipe a développé une solution
                    complète incluant une app mobile Flutter (transport privé,
                    livraison, food delivery), un backend Node.js robuste et une
                    refonte totale de leur site vitrine, créant un écosystème
                    digital intégré et évolutif.
                  </p>

                  <Link
                    href="/case-study/coride"
                    className="inline-flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform duration-200"
                    style={{
                      color: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Read case study
                    <svg
                      className="w-4 h-4 ml-2 group-hover:stroke-white transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      {isMounted && (
                        <video
                          ref={coRideVideoRef}
                          className="w-full h-full object-cover"
                          loop
                          muted
                          playsInline
                          autoPlay={isMobile}
                          style={{
                            filter: 'brightness(0.9) contrast(1.1)',
                          }}
                        >
                          <source
                            src="/images/WhatsApp Video 2025-09-26 at 10.22.25.mp4"
                            type="video/mp4"
                          />
                          Votre navigateur ne supporte pas la lecture vidéo.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <svg
          className="relative block w-full h-20 "
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
               
            >
              Une petite équipe d&apos;ingénieurs montréalais
              <br />
              <span style={{ color: colors.secondary }}>
                (et un gentil designer)
              </span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                {/* Photo */}
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images of the team/1719935496854.jpg"
                    alt="Développeur Full-Stack"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Ilyes Ghorieb
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  React • Node.js • TypeScript • PostgreSQL
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('ilyes')}
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="https://www.linkedin.com/in/ilyes-ghorieb-95b470244/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images of the team/1755055191293.jpg"
                    alt="Développeuse Mobile"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Fadi Atmania
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  Flutter • React Native • Swift • Kotlin
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('fadi')}
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="https://www.linkedin.com/in/fadi-atmania-011756354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images of the team/1758914011397.jpg"
                    alt="DevOps Engineer"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Daani Abderrahmane
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  AWS • Docker • Kubernetes • CI/CD
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('daani')}
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="https://www.linkedin.com/in/daani-abderrahmane-4ab295315/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images of the team/1757886357065.jpg"
                    alt="Islem Deneche"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Islem Deneche
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  Figma • Adobe XD • Prototyping • User Research
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="https://www.linkedin.com/in/islem-deneche-097701384/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 5 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src="/images of the team/WhatsApp Image 2025-09-29 at 12.30.27.jpeg"
                    alt="Arselene Meghlaoui"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center top',
                      transform: 'scale(1.1)',
                    }}
                  />
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Arselene Meghlaoui
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  Full Stack Developer • Network Security
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="https://www.linkedin.com/in/arselene-meghlaoui-b20b1a259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Team Member 6 */}
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>

                <h3
                  className="text-xl font-bold text-gray-900 mb-2"
                   
                >
                  Data Engineer
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                   
                >
                  Python • Machine Learning • ETL • Analytics
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                     
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMember === 'ilyes' && (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src="/images of the team/1719935496854.jpg"
                          alt="Ilyes Ghorieb"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Ilyes Ghorieb
                        </h2>
                        <p
                          className="text-lg text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Full-Stack Software Engineer
                        </p>
                        <p
                          className="text-sm text-gray-500"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          PROGIX • Montréal, Québec, Canada
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* About */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                       
                    >
                      Salut ! Je suis Ilyes, un développeur full-stack passionné
                      par la création de solutions logicielles innovantes. Chez
                      PROGIX, je conçois et développe des systèmes CRM et ERP
                      sur mesure, des plateformes SaaS et des applications
                      mobiles performantes et évolutives.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                       
                    >
                      Mon expertise couvre les technologies modernes comme
                      React.js, Node.js, Express.js, Flask, PostgreSQL et
                      MongoDB. Je maîtrise également Docker, les APIs
                      REST/GraphQL, l&apos;authentification sécurisée (JWT, OAuth2,
                      RBAC) et les pipelines CI/CD.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Expérience
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Ingénieur logiciel - PROGIX
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Juillet 2024 - Présent • Montréal, QC (Hybride)
                        </p>
                        <p
                          className="text-gray-700 mt-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Conception et développement de solutions logicielles
                          SaaS, d&apos;applications et de sites web sur mesure.
                          Gestion complète du cycle de développement, de la
                          planification à la mise en production.
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Responsable produit - iBusiness Consulting Inc.
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Janvier 2024 - Juillet 2024 • Longueuil, QC
                        </p>
                        <p
                          className="text-gray-700 mt-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Gestion et suivi des projets de l&apos;équipe de
                          développement. Coordination entre besoins métier et
                          équipe technique en méthodologie Agile.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Compétences principales
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React.js',
                        'Node.js',
                        'Express.js',
                        'Flask',
                        'Next.js',
                        'PostgreSQL',
                        'MongoDB',
                        'Docker',
                        'GraphQL',
                        'JWT',
                        'CI/CD',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                         
                      >
                        Baccalauréat en Génie informatique et logiciel
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                         
                      >
                        UQAM | Université du Québec à Montréal • 2025
                      </p>
                      <p
                        className="text-gray-700 mt-1"
                         
                      >
                        GPA: 3.1 • Membre de l&apos;AGEEI
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-4 pt-6 border-t">
                    <a
                      href="https://www.linkedin.com/in/ilyes-ghorieb-95b470244/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>Voir LinkedIn</span>
                    </a>
                    <a
                      href="https://www.progix.pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Site web</span>
                    </a>
                  </div>
                </div>
              )}

              {selectedMember === 'fadi' && (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src="/images of the team/1755055191293.jpg"
                          alt="Fadi Atmania"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Fadi Atmania
                        </h2>
                        <p
                          className="text-lg text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Développeur Web Full-Stack
                        </p>
                        <p
                          className="text-sm text-gray-500"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          PROGIX • Montréal, Québec, Canada
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* About */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                       
                    >
                      Salut ! Je suis Fadi, un développeur web full-stack
                      passionné par les technologies modernes. Chez PROGIX, je
                      me spécialise dans la création de solutions robustes,
                      efficaces et scalables en utilisant Java, Python, React et
                      Docker.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                       
                    >
                      Mon approche consiste à concevoir des applications
                      performantes qui répondent aux besoins métier tout en
                      maintenant une architecture propre et maintenable. J&apos;aime
                      travailler sur des projets challengeants qui me permettent
                      d&apos;explorer de nouvelles technologies.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Expérience
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Administrator - PROGIX
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Septembre 2024 - Présent • Montréal, QC (Hybride)
                        </p>
                        <p
                          className="text-gray-700 mt-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Développement de services IT et solutions logicielles.
                          Conception d&apos;applications web full-stack avec les
                          dernières technologies et frameworks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Compétences principales
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Java',
                        'Python',
                        'React',
                        'Docker',
                        'Git',
                        'Flutter',
                        'React Native',
                        'Swift',
                        'Kotlin',
                        'Software Development',
                        'IT Services',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                         
                      >
                        Computer Software Engineering
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                         
                      >
                        UQAM | Université du Québec à Montréal
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-4 pt-6 border-t">
                    <a
                      href="https://www.linkedin.com/in/fadi-atmania-011756354/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>Voir LinkedIn</span>
                    </a>
                    <a
                      href="https://www.progix.pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Site web</span>
                    </a>
                  </div>
                </div>
              )}

              {selectedMember === 'daani' && (
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden">
                        <Image
                          src="/images of the team/1758914011397.jpg"
                          alt="Daani Abderrahmane"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h2
                          className="text-2xl font-bold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Daani Abderrahmane
                        </h2>
                        <p
                          className="text-lg text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Consultant logiciels
                        </p>
                        <p
                          className="text-sm text-gray-500"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          PROGIX • Montréal, Québec, Canada
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedMember(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* About */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                       
                    >
                      Salut ! Je suis Daani, un développeur full-stack passionné
                      par l&apos;apprentissage et les projets collaboratifs.
                      Spécialisé en JavaScript, React, Node.js et Express.js,
                      j&apos;aime créer des solutions web performantes et innovantes.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                       
                    >
                      En tant qu&apos;Analyste-Programmeur et spécialiste Microsoft
                      .NET chez PROGIX, j&apos;accompagne nos clients dans les
                      secteurs RH, paie et énergie en concevant des solutions
                      logicielles robustes. Mon expertise couvre C#, ASP.NET,
                      les microservices et les architectures modernes.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Expérience
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4
                          className="font-semibold text-gray-900"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Consultant logiciels - PROGIX
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Septembre 2024 - Présent • Montréal, QC
                        </p>
                        <p
                          className="text-gray-700 mt-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          <strong>
                            Analyste-Programmeur | Spécialiste Microsoft .NET
                          </strong>
                          <br />
                          Accompagnement de clients dans les secteurs RH, paie
                          et énergie. Conception et maintenance de solutions
                          logicielles performantes avec expertise en C#,
                          ASP.NET, VB.NET et développement web.
                        </p>
                        <p
                          className="text-gray-700 mt-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          <strong>Technologies :</strong> SQL Server, REST API,
                          Gravitee, microservices, architecture MVC,
                          méthodologies SAFe/Agile, DDD/ATDD,
                          TFS/GitLab/BitBucket.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Compétences principales
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'JavaScript',
                        'React',
                        'Node.js',
                        'Express.js',
                        'C#',
                        'ASP.NET',
                        'VB.NET',
                        'SQL Server',
                        'REST APIs',
                        'Microservices',
                        'MVC',
                        'HTML/CSS',
                        'JQuery',
                        'AJAX',
                        'Gravitee',
                        'TFS',
                        'GitLab',
                        'BitBucket',
                        'Tests unitaires',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                         
                      >
                        Études en cours
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                         
                      >
                        UQAM | Université du Québec à Montréal • 2021 - 2026
                      </p>
                      <p
                        className="text-gray-700 mt-1"
                         
                      >
                        Spécialisation en Communication et Ventes externes
                      </p>
                    </div>
                  </div>

                  {/* Methodologies */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                       
                    >
                      Méthodologies & Approches
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4
                          className="font-semibold text-gray-900 mb-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Agile & SAFe
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Méthodologies SAFe, Agile, Train avec approche
                          orientée DDD/ATDD
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4
                          className="font-semibold text-gray-900 mb-2"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Qualité
                        </h4>
                        <p
                          className="text-sm text-gray-600"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          Développement orienté qualité avec tests unitaires et
                          d&apos;intégration
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex space-x-4 pt-6 border-t">
                    <a
                      href="https://www.linkedin.com/in/daani-abderrahmane-4ab295315/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>Voir LinkedIn</span>
                    </a>
                    <a
                      href="https://www.progix.pro/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                       
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Site web</span>
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Custom Cursor for Case Studies */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            className="fixed pointer-events-none w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-300"
            style={{
              backgroundColor: '#FFFFFF',
              zIndex: 9999,
              left: 0,
              top: 0,
            }}
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              opacity: 1,
            }}
            transition={{
              x: { type: 'spring', stiffness: 800, damping: 30, mass: 0.1 },
              y: { type: 'spring', stiffness: 800, damping: 30, mass: 0.1 },
              opacity: { duration: 0.05 },
            }}
            initial={{
              opacity: 0,
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
            }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17l9.2-9.2M17 17V7H7"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
