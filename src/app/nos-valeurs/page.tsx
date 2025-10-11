'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import StaggeredMenu from '@/components/StaggeredMenu';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/feature-section-with-hover-effects';
import DecorativeElements from '@/components/DecorativeElements';
import InspirationalQuotesSlider from '@/components/InspirationalQuotesSlider';
import BlobCursor from '@/components/BlobCursor';

const NosValeursPage = () => {
  const menuItems = [
    { label: 'Accueil', ariaLabel: 'Aller à la page d\'accueil', link: '/' },
    { label: 'Services', ariaLabel: 'Voir nos services', link: '/services' },
    { label: 'Portfolio', ariaLabel: 'Voir notre portfolio', link: '/portfolio' },
    { label: 'Équipe', ariaLabel: 'Découvrir notre équipe', link: '/team' },
    { label: 'Valeurs', ariaLabel: 'Connaître nos valeurs', link: '/nos-valeurs' },
    { label: 'ConFoo', ariaLabel: 'Découvrir ConFoo 2025', link: '/confoo-2025' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com/company/progix' },
    { label: 'GitHub', link: 'https://github.com/progix' },
    { label: 'Twitter', link: 'https://twitter.com/progix' }
  ];
  const [isProgressSectionVisible, setIsProgressSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const progressSection = document.getElementById('principles');
      if (progressSection) {
        const rect = progressSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if the section is in view (when it's 50% visible)
        const isVisible = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
        setIsProgressSectionVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-white font-montserrat relative">
      <div className="fixed inset-0 z-50 pointer-events-none">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#1B363C"
          openMenuButtonColor="#1B363C"
          changeMenuColorOnOpen={false}
          colors={['#4FA3D1', '#1B363C']}
          logoUrl="/images/logo.png"
          accentColor="#4FA3D1"
        />
      </div>
      
      {/* BlobCursor avec couleur bleue Progix */}
      <div className="fixed inset-0 pointer-events-none z-60">
        <BlobCursor
          blobType="circle"
          fillColor="#4FA3D1"
          trailCount={3}
          sizes={[60, 125, 75]}
          innerSizes={[20, 35, 25]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={100}
        />
      </div>
      
      {/* Hero Section - Geometric Style */}
      <div className="relative">
        <HeroGeometric 
          badge="Progix Values"
          title1="Our Core Values"
          description="We are a team of strategists, developers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe."
        />
      
      </div>

      {/* Tomorrow Section - Left Aligned */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Demain devrait être{' '}
                <span className="relative">
                  meilleur
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
                </span>{' '}
                qu&apos;aujourd&apos;hui
                <span className="relative">
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-green-200 -z-10"></span>
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-black leading-relaxed mb-8"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Nous sommes une équipe de stratèges, développeurs, communicateurs et chercheurs. 
                Ensemble, nous croyons que le progrès ne se produit que lorsque vous refusez de jouer la sécurité.
              </motion.p>

              <motion.a
                href="#principles"
                className="inline-flex items-center text-black font-semibold text-lg hover:underline"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Circular Image */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/imagesculture/Picsart_25-09-29_19-34-34-749.jpg"
                  alt="Équipe Progix en collaboration"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section - Right Aligned */}
      <motion.section 
        id="principles" 
        className={`pt-20 transition-all duration-1000 ease-in-out ${
          isProgressSectionVisible ? 'bg-cyan-800' : 'bg-white'
        }`}
        animate={{
          backgroundColor: isProgressSectionVisible ? '#155e75' : '#ffffff'
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Circular Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/imagesculture/Picsart_25-09-29_19-40-21-097.jpg"
                  alt="Équipe Progix en action"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight transition-colors duration-1000 ${
                  isProgressSectionVisible ? 'text-white' : 'text-black'
                }`}
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Voyez comment nous{' '}
                <span className="relative">
                  pouvons
                  <motion.span 
                    className={`absolute -bottom-2 left-0 w-full h-3 -z-10 transition-colors duration-1000 ${
                      isProgressSectionVisible ? 'bg-green-400' : 'bg-green-200'
                    }`}
                    animate={{
                      backgroundColor: isProgressSectionVisible ? '#4ade80' : '#bbf7d0'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </span>{' '}
                vous aider à{' '}
                <span className="relative">
                  progresser
                  <motion.span 
                    className={`absolute -bottom-2 left-0 w-full h-3 -z-10 transition-colors duration-1000 ${
                      isProgressSectionVisible ? 'bg-yellow-400' : 'bg-yellow-300'
                    }`}
                    animate={{
                      backgroundColor: isProgressSectionVisible ? '#facc15' : '#fde047'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl leading-relaxed mb-8 transition-colors duration-1000 ${
                  isProgressSectionVisible ? 'text-gray-200' : 'text-black'
                }`}
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Nous ajoutons une couche d&apos;insights et d&apos;actions audacieuses qui permet aux 
                créateurs de changement d&apos;accélérer leur progrès dans des domaines tels que 
                le développement, la conception, le numérique, les communications et la recherche.
              </motion.p>

              <motion.a
                href="#values"
                className={`inline-flex items-center font-semibold text-lg hover:underline transition-colors duration-1000 ${
                  isProgressSectionVisible ? 'text-white' : 'text-black'
                }`}
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        <DecorativeElements type="wave-bottom" />
      </motion.section>

      {/* Values Section with Hover Effects */}
      <section id="values" className="  bg-cyan-800">
      <DecorativeElements type="wave-top" />
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Nos{' '}
              <span className="relative">
                Valeurs
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-white/30 -z-10"></span>
              </span>{' '}
              Fondamentales
              <span className="relative">
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-white/20 -z-10"></span>
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Les principes qui guident notre approche du développement logiciel et façonnent notre culture d&apos;entreprise.
            </motion.p>
          </div>

          {/* Features Section with Hover Effects */}
          <FeaturesSectionWithHoverEffects />
        </div>
        <DecorativeElements type="wave-bottom" />
      </section>

      {/* Inspirational Quotes Slider */}
      <InspirationalQuotesSlider />

      {/* Newsletter Section */}
      <section className="py-20 bg-cyan-800">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
          >
            Abonnez-vous à notre newsletter
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white mb-8"
            style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
          >
            Pour rendre votre expérience spéciale et encore plus mémorable
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              />
              <button
                className="px-6 py-3 bg-white text-cyan-800 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                S&apos;abonner
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosValeursPage;
