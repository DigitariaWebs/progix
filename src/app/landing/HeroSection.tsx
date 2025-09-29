'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/config/colors';

const getSatelliteIcon = (index: number) => {
  const icons = [
    'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', // Layers
    'M13 2L3 14h9l-1 8 10-12h-9l1-8z', // Lightning
    'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', // Bulb
    'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', // Heart
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', // Book
    'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Check circle
  ];
  return icons[index % icons.length];
};

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
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
    }, 0);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
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

  return (
    <>
      {/* Navigation Header */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md scrolled:bg-white/95 scrolled:shadow-lg"
      >
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
                <a
                  href="#services"
                  className="font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  À propos
                </a>
                <a
                  href="#portfolio"
                  className="font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Contact
                </a>
                <a
                  href="#blog"
                  className="font-heading inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Right side button */}
            <div className="hidden md:flex items-center">
              <button
                className="text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  backgroundColor: colors.secondary,
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                Démarrer un projet
              </button>
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
                  className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  À propos
                </a>
                <a
                  href="#portfolio"
                  className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="font-heading text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Contact
                </a>
                <div className="flex space-x-4 pt-4">
                  <button
                    className="text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Démarrer un projet
                  </button>
                  <button
                    className="border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 flex-1"
                    style={{
                      borderColor: colors.primary,
                      color: colors.primary,
                    }}
                  >
                    Nous contacter
                  </button>
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
                className="font-heading mb-5 text-3xl font-semibold sm:text-5xl md:text-[55px] md:leading-[65px] text-black -mt-16"
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
                className="text-xl mb-8 leading-relaxed text-black/90 max-w-3xl"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                  fontWeight: '300',
                }}
              >
                Progix est une entreprise de développement logiciel basée à
                Montréal. Notre mission est de concevoir et de développer des
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
                <button
                  className="text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  Discuter de votre projet
                </button>
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
              <Image
                src="/images/download.png"
                alt="Client Logo"
                width={120}
                height={40}
                className="h-10 w-auto grayscale opacity-70"
              />
            </div>

            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex items-center justify-center flex-1">
              <Image
                src="/images/ibusinesslogo.60b4d9193c14aca92f02.png"
                alt="iBusiness"
                width={120}
                height={40}
                className="h-10 w-auto grayscale opacity-70"
              />
            </div>

            {/* Separator */}
            <div className="h-8 w-px bg-gray-300"></div>

            <div className="flex items-center justify-center flex-1">
              <Image
                src="/images/photo_2019-03-21_11-48-55-2-6-233x91.jpg"
                alt="Client Logo"
                width={120}
                height={40}
                className="h-10 w-auto grayscale opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-12">
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Optimize your business processes
              <br />
              with a{' '}
              <span style={{ color: colors.secondary }}>customized system</span>
            </h2>
            <p
              className="text-lg leading-relaxed font-light"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.primary,
              }}
            >
              Whatever the size of your business, we design and develop secure,
              reliable and scalable software solutions to meet your long-term
              objectives.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                backgroundColor: colors.secondary,
              }}
            >
              Discuss your project
            </button>
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                SMES
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-light"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                For companies that want to automate their processes, reduce
                delays, make informed decisions and stabilize their operations.
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Institutional
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-light"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                For institutions that want to add value to their data, make the
                most of their infrastructure and maximize the impact of their
                resources.
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Startup
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-light"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                For start-ups who want to change the world of tomorrow, break
                the status quo and innovate through software technology.
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
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Logiciels de gestion & d'automatisation
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-light mb-6"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Logiciels de gestion sur mesure (Intranet, ERP etc.) qui
                assurent la synergie entre vos opérations, votre équipe et votre
                nouvelle réalité numérique.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Laboratoire PROGIX
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-light mb-6"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Le laboratoire PROGIX est dédié à l'innovation logicielle sous
                toutes ses formes. La recherche et développement ainsi que la
                conception innovante sont au cœur de notre approche.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                className="text-xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Gestion des données
              </h3>

              <p
                className="text-gray-600 leading-relaxed font-light mb-6"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Notre expertise tire parti des données à votre disposition grâce
                à un accompagnement ciblé pour une compréhension complète et une
                prise de décision efficace.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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
                    className="text-sm font-light"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.secondary,
                    }}
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

      {/* About Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-medium text-white mb-8"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                className="text-lg text-gray-300 leading-relaxed font-light mb-8"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Notre pire cauchemar est d'un jour se réveiller et être une
                équipe de 100 et devenir, ce qu'on appelle à l'interne, une
                usine à saucisses. On préfère avoir une petite équipe de joueurs
                AAA et faire une vingtaine de projets par année qui nous
                tiennent à cœur.
              </p>

              <div className="flex items-center space-x-6">
                <button
                  className="text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
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
                        initial={false}
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
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        Culture
                      </div>
                      <div
                        className="text-white text-sm font-medium"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      {String(currentImageIndex + 1).padStart(2, '0')}
                    </div>
                    <div
                      className="text-white text-xs opacity-40"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                50+
              </div>
              <div
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Projets réalisés
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                5+
              </div>
              <div
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Années d'expérience
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                15+
              </div>
              <div
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Clients satisfaits
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold text-white mb-2"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                100%
              </div>
              <div
                className="text-gray-400 text-sm"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
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
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              <span style={{ color: colors.secondary }}>
                Digital success stories
              </span>{' '}
              : testimonials from
              <br />
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
                <p
                  className="text-gray-700 leading-relaxed font-light mb-6"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  J'ai développé une plateforme web pour ma société spécialisée
                  dans l'acquisition d'actifs immobiliers résidentiels et
                  fonciers.{' '}
                  <span style={{ color: colors.secondary }}>
                    L'équipe a su m'éduquer et même prendre des initiatives
                  </span>{' '}
                  pour mon site. Je recommande.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      David Manianga
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-gray-700 leading-relaxed font-light mb-6"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Ilyes avait travaillé en tant que product owner pour iBusiness
                  Consulting et avait su gérer mon équipe IT à la perfection.{' '}
                  <span style={{ color: colors.secondary }}>
                    Je n'ai pas hésité une seule seconde à le contacter
                  </span>{' '}
                  pour développer un CRM interne pour ma deuxième entreprise
                  RecrutementPlus. Toute l'équipe est plus que satisfaite du
                  résultat.
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Hakim Safa
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-gray-700 leading-relaxed font-light mb-6"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  L'équipe était à l'écoute et réactive. Le projet a pris un
                  petit peu plus de temps que prévu mais{' '}
                  <span style={{ color: colors.secondary }}>
                    on en ressort avec un produit complet sans dettes techniques
                  </span>{' '}
                  et c'est ce qui m'importait. Donc bravo et merci à tous !
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="font-semibold text-gray-900"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Daniel Dekasse
                    </div>
                    <div
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
              className="text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2
                className="text-4xl md:text-5xl font-medium text-gray-900 mb-4"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Discover our
                <br />
                latest{' '}
                <span style={{ color: colors.secondary }}>achievements</span>
              </h2>
            </div>
            <button
              className="text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-sha duration-200 cursor-none"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Custom CRM Development
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-medium text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Centre Fahe Mechanics
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-light mb-8 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Centre Fahe Mechanics est une référence à
                    Rivière-des-Prairies dans le domaine de la réparation
                    automobile. Nous avons développé pour eux un CRM complet
                    permettant de tracker leur visibilité en ligne, gérer leurs
                    prospects, automatiser le check-in des véhicules et
                    optimiser leur processus de service client.
                  </p>

                  <button
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 group-hover:text-white transition-all duration-200"
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
                          transform: 'scaleX(-1) rotate(-90deg)',
                        }}
                      >
                        <source
                          src="/imagesculture/WhatsApp Video 2025-09-28 at 11.59.54 (1).mp4"
                          type="video/mp4"
                        />
                        Votre navigateur ne supporte pas la lecture vidéo.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Confortplus65 */}
            <motion.div
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-200 cursor-none"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Healthcare Management System
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-medium text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Confortplus65
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-light mb-8 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    Confortplus65 a pour mission d'offrir des services de
                    maintien à domicile adaptés aux besoins des personnes âgées
                    de 65 ans et plus. Nous avons développé un système complet
                    de suivi et de gestion permettant d'optimiser
                    l'accompagnement, l'entretien et leur programme exclusif
                    d'activité physique pour personnes autonomes, semi-autonomes
                    et alitées.
                  </p>

                  <button
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-200"
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
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-200 cursor-none"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Case Study
                    </span>
                    <span
                      className="text-sm text-gray-500 group-hover:text-white uppercase tracking-wide transition-colors duration-200"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Mobile App & Web Development
                    </span>
                  </div>

                  <h3
                    className="text-3xl font-medium text-gray-900 group-hover:text-white mb-6 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    CoRide
                  </h3>

                  <p
                    className="text-gray-600 group-hover:text-gray-200 leading-relaxed font-light mb-8 transition-colors duration-200"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    CoRide est une application de mobilité multi-services
                    révolutionnaire. Notre équipe a développé une solution
                    complète incluant une app mobile Flutter (transport privé,
                    livraison, food delivery), un backend Node.js robuste et une
                    refonte totale de leur site vitrine, créant un écosystème
                    digital intégré et évolutif.
                  </p>

                  <button
                    className="inline-flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-200"
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
                  </button>
                </div>

                <div className="relative h-64 lg:h-full bg-white/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-black/10 rounded-lg overflow-hidden shadow-lg">
                      <video
                        ref={coRideVideoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        playsInline
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
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-4"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Une petite équipe d'ingénieurs montréalais
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Ilyes Ghorieb
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  React • Node.js • TypeScript • PostgreSQL
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('ilyes')}
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
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
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Fadi Atmania
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Flutter • React Native • Swift • Kotlin
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('fadi')}
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
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
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Daani Abderrahmane
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  AWS • Docker • Kubernetes • CI/CD
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setSelectedMember('daani')}
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
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
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Islem Deneche
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Figma • Adobe XD • Prototyping • User Research
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
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
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Arselene Meghlaoui
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Full Stack Developer • Network Security
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
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
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                  className="text-xl font-medium text-gray-900 mb-2"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Data Engineer
                </h3>

                <p
                  className="text-gray-600 text-sm mb-4"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Python • Machine Learning • ETL • Analytics
                </p>

                <div className="flex space-x-3 justify-center">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: colors.secondary,
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                    }}
                  >
                    Voir profil
                  </button>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Salut ! Je suis Ilyes, un développeur full-stack passionné
                      par la création de solutions logicielles innovantes. Chez
                      PROGIX, je conçois et développe des systèmes CRM et ERP
                      sur mesure, des plateformes SaaS et des applications
                      mobiles performantes et évolutives.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Mon expertise couvre les technologies modernes comme
                      React.js, Node.js, Express.js, Flask, PostgreSQL et
                      MongoDB. Je maîtrise également Docker, les APIs
                      REST/GraphQL, l'authentification sécurisée (JWT, OAuth2,
                      RBAC) et les pipelines CI/CD.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          SaaS, d'applications et de sites web sur mesure.
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
                          Gestion et suivi des projets de l'équipe de
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        Baccalauréat en Génie informatique et logiciel
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        UQAM | Université du Québec à Montréal • 2025
                      </p>
                      <p
                        className="text-gray-700 mt-1"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        GPA: 3.1 • Membre de l'AGEEI
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Salut ! Je suis Fadi, un développeur web full-stack
                      passionné par les technologies modernes. Chez PROGIX, je
                      me spécialise dans la création de solutions robustes,
                      efficaces et scalables en utilisant Java, Python, React et
                      Docker.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Mon approche consiste à concevoir des applications
                      performantes qui répondent aux besoins métier tout en
                      maintenant une architecture propre et maintenable. J'aime
                      travailler sur des projets challengeants qui me permettent
                      d'explorer de nouvelles technologies.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          Conception d'applications web full-stack avec les
                          dernières technologies et frameworks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        Computer Software Engineering
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      À propos
                    </h3>
                    <p
                      className="text-gray-700 leading-relaxed"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Salut ! Je suis Daani, un développeur full-stack passionné
                      par l'apprentissage et les projets collaboratifs.
                      Spécialisé en JavaScript, React, Node.js et Express.js,
                      j'aime créer des solutions web performantes et innovantes.
                    </p>
                    <p
                      className="text-gray-700 leading-relaxed mt-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      En tant qu'Analyste-Programmeur et spécialiste Microsoft
                      .NET chez PROGIX, j'accompagne nos clients dans les
                      secteurs RH, paie et énergie en concevant des solutions
                      logicielles robustes. Mon expertise couvre C#, ASP.NET,
                      les microservices et les architectures modernes.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                    >
                      Formation
                    </h3>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        Études en cours
                      </h4>
                      <p
                        className="text-sm text-gray-600"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        UQAM | Université du Québec à Montréal • 2021 - 2026
                      </p>
                      <p
                        className="text-gray-700 mt-1"
                        style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      >
                        Spécialisation en Communication et Ventes externes
                      </p>
                    </div>
                  </div>

                  {/* Methodologies */}
                  <div className="mb-8">
                    <h3
                      className="text-xl font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                          d'intégration
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
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
