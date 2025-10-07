'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './layout/Header';
import LogoCarousel from './LogoCarousel';
import { 
  FaMobile, 
  FaCode,
  FaUsers,
  FaRocket,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaHeart,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';

const MobileAppPage = () => {
  const [competencesProgress, setCompetencesProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculer la progression dans le bloc compétences
      const competencesSection = document.getElementById('competences-section');
      if (competencesSection) {
        const rect = competencesSection.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculer la progression quand on scroll dans la section
        if (rect.top <= 0 && rect.bottom >= windowHeight) {
          // La section est visible et occupe au moins tout l'écran
          const scrolledInSection = Math.abs(rect.top);
          const maxScroll = sectionHeight - windowHeight;
          const progress = maxScroll > 0 ? scrolledInSection / maxScroll : 0;
          setCompetencesProgress(Math.max(0, Math.min(1, progress)));
        } else if (rect.top > 0) {
          // Avant la section
          setCompetencesProgress(0);
        } else {
          // Après la section
          setCompetencesProgress(1);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Calculer la position initiale
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      
      {/* Blue Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        <span>NOUVEAU ! Découvrez </span>
        <a href="#" className="underline hover:no-underline">ici</a>
        <span> notre pôle Data & IA</span>
      </div>

      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/30 to-white pt-8 pb-20">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 pt-4">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-blue-600">Agence application mobile</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 pt-8"
            >
              {/* Badge */}
              <div className="inline-block">
                <span className="text-xs font-bold px-4 py-2 bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                  AGENCE APPLICATION MOBILE
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>
                Lançons votre{' '}
                <span className="text-blue-600">application mobile</span>{' '}
                en un temps record.
              </h1>
              
              {/* Description */}
              <p className="text-lg leading-relaxed max-w-xl" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                PROGIX Studio est l&apos;une des{' '}
                <span className="relative">
                  1<sup className="text-xs">ères</sup>
                </span>{' '}
                équipes à avoir misé sur les technologies 
                cross-platform comme React Native afin de réduire les coûts et les temps de 
                développement, le tout avec un code de grande qualité.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:pt-8 flex justify-center"
            >
              <div className="relative">
                {/* Hero Image - Ready for bloc1.png */}
                <div className="relative">
                  <Image
                    src="/imagesmobileapp/appmobile image du bloc 1.png"
                    alt="Application mobile PROGIX Studio"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                    priority
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center relative overflow-hidden" style={{ display: 'none' }}>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-blue-300 transform rotate-45 rounded-lg"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-blue-200 transform rotate-12 rounded-xl"></div>
                    <div className="text-white text-center">
                      <FaMobile className="text-6xl mb-4 mx-auto" />
                      <p className="text-sm opacity-80">Ajoutez bloc1.png dans /images/mobileapp/</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Logo Carousel */}
        <LogoCarousel />
      </section>

      {/* Bloc 2 - Développement rapide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge Garantie */}
              <div className="inline-block">
                <span className="text-sm font-semibold px-4 py-2 bg-blue-100 text-blue-600 rounded-full uppercase tracking-wider">
                  Garantie
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>
                Développement plus rapide et moins cher
              </h2>
              
              {/* Description Paragraphs */}
              <div className="space-y-6 text-lg leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                <p>
                  Yield Studio a été l&apos;une des premières agences à miser sur React Native 
                  pour <a href="#" className="text-blue-600 underline hover:no-underline">réduire les coûts</a> et accélérer le lancement d&apos;applications mobiles. 
                  Notre approche cross-platform permet de développer simultanément 
                  sur iOS et Android, sans perte de performance.
                </p>
                
                <p>
                  Nos développeurs, passés par les plus belles équipes mobiles, 
                  conçoivent des applications performantes, scalables et maintenables, 
                  tout en réduisant les coûts et les délais.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3">
                  Discutons de votre projet mobile dès maintenant
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <Image
                  src="/imagesmobileapp/images bloc2 app mobile.png"
                  alt="Applications mobiles développées par PROGIX Studio"
                  width={600}
                  height={500}
                  className="w-full h-auto max-w-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bloc intermédiaire - PROGIX Studio Montréal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Grid of 3 Cards - Yield Studio Style */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 - Notre Équipe */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/WhatsApp Image 2025-08-13 at 00.44.10_07507c30.jpg"
                  alt="Équipe PROGIX Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>Notre Équipe</h3>
                <p className="text-sm mb-4" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>3418 Rue Stanley, Montréal, QC H3A 1R8</p>
              </div>
            </motion.div>

            {/* Card 2 - Notre Bureau */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/WhatsApp Image 2025-08-12 at 21.39.27_c4662c30.jpg"
                  alt="Bureau PROGIX Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>Notre Bureau</h3>
                <p className="text-sm mb-4" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>3418 Rue Stanley, Montréal, QC H3A 1R8</p>
              </div>
            </motion.div>

            {/* Card 3 - Nos Projets */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src="/images/WhatsApp Image 2025-08-02 at 20.15.25_5ef95b34.jpg"
                  alt="Projets PROGIX Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>Nos Projets</h3>
                <p className="text-sm mb-4" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>3418 Rue Stanley, Montréal, QC H3A 1R8</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bloc 3 - Confiance / Statistiques */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Blue Blur SVG - Right Side */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -right-20 w-[940px] h-[636px] opacity-80">
            <Image
              src="/images/67daffc416ecbb596d6e0a47_trsu-blur.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Badge Confiance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="text-xs font-semibold px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full uppercase tracking-wider">
                Confiance
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}
            >
              Bénéficiez de notre recul pour vous challenger
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 text-sm leading-relaxed mb-10"
              style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}
            >
              <p>
                Construire une application mobile est un levier stratégique redoutable pour 
                accroître votre business ! Son but ? Vous permettre d&apos;améliorer l&apos;efficience 
                opérationnelle de votre business ou bien développer un nouveau relai de 
                croissance. Avec 15% de hausse annuelle de téléchargement des applications 
                mobiles, il est primordial d&apos;investir dessus.
              </p>
              
              <p>
                Avec plus de 6 ans d&apos;expérience et 70+ applications développées, nous avons 
                acquis un regard stratégique pour vous aider à anticiper les défis 
                technologiques et optimiser la performance de votre application.
              </p>
            </motion.div>

            {/* Statistics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* Stat 1 */}
              <div className="border-l-3 border-blue-500 pl-3">
                <div className="text-lg font-bold text-blue-600 mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                  Plus de 70 apps
                </div>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  mobiles créées et refondues sur lesquelles nos équipes sont intervenues
                </p>
              </div>

              {/* Stat 2 */}
              <div className="border-l-3 border-blue-500 pl-3">
                <div className="text-lg font-bold text-blue-600 mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                  Déjà 6 ans
                </div>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  que PROGIX Studio est un leader dans l&apos;univers des agences de 
                  développement d&apos;application mobile
                </p>
              </div>

              {/* Stat 3 */}
              <div className="border-l-3 border-blue-500 pl-3">
                <div className="text-lg font-bold text-blue-600 mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                  Plus de 600k
                </div>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  utilisateurs cumulés sur toutes les applications que nous avons 
                  développé pour nos clients
                </p>
              </div>

              {/* Stat 4 */}
              <div className="border-l-3 border-blue-500 pl-3">
                <div className="text-lg font-bold text-blue-600 mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                  Plus d&apos;1 million
                </div>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  de requêtes API sont faites chaque jour sur les applications 
                  de nos clients que nous maintenons
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bloc 4 - Pourquoi PROGIX Studio ? */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        {/* Geometric decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Lines and shapes */}
          <div className="absolute top-10 right-10 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M20,20 L180,20 L180,180 L20,180 Z" fill="none" stroke="white" strokeWidth="1"/>
              <path d="M40,40 L160,40 L160,160 L40,160 Z" fill="none" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="1"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              Pourquoi PROGIX Studio ?
            </h2>
          </motion.div>

          {/* 3 Columns */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1 - Code de qualité */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Image
                    src="/imagesmobileapp/images bloc3.webp"
                    alt="Code de qualité"
                    width={300}
                    height={200}
                    className="w-full max-w-xs h-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                Code de qualité
              </h3>
              <p className="text-blue-100 leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
                Nous écrivons un code de qualité dès le départ 
                pour aller plus vite ensuite
              </p>
            </motion.div>

            {/* Column 2 - Focus utilisateur */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Image
                    src="/imagesmobileapp/imagesblc3.webp"
                    alt="Focus utilisateur"
                    width={300}
                    height={200}
                    className="w-full max-w-xs h-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                Focus utilisateur
              </h3>
              <p className="text-blue-100 leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
                Nous identifions les fonctionnalités 
                différenciantes pour les utilisateurs finaux
              </p>
            </motion.div>

            {/* Column 3 - Time To Market */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <Image
                    src="/imagesmobileapp/imagesbloc3.webp"
                    alt="Time To Market"
                    width={300}
                    height={200}
                    className="w-full max-w-xs h-auto"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
                Time To Market
              </h3>
              <p className="text-blue-100 leading-relaxed" style={{ fontFamily: "'Spline Sans', sans-serif" }}>
                Nous mettons très rapidement en production 
                les fonctionnalités grâce à notre LeanLab® ©
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bloc 5 - Compétences avec effet parallax */}
      <section id="competences-section" className="relative min-h-screen bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-screen">
          
          {/* Left Content - Scrollable */}
          <div className="relative z-20 bg-white py-20 px-8 lg:px-16">
            <div className="max-w-xl">
              
              {/* Compétence 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-32"
              >
                <div className="mb-6">
                  <span className="text-sm font-semibold px-4 py-2 bg-blue-100 text-blue-600 rounded-full uppercase tracking-wider">
                    Compétence 1
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>
                  Développement sur mesure
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  Nous créons des applications mobiles entièrement personnalisées selon vos besoins spécifiques. 
                  Notre approche sur mesure garantit une solution parfaitement adaptée à votre business et vos utilisateurs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Architecture scalable et maintenable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Intégration avec vos systèmes existants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Performance optimisée</span>
                  </li>
                </ul>
              </motion.div>

              {/* Compétence 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-32"
              >
                <div className="mb-6">
                  <span className="text-sm font-semibold px-4 py-2 bg-green-100 text-green-600 rounded-full uppercase tracking-wider">
                    Compétence 2
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>
                  UX/UI Design Excellence
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  Notre équipe de designers expérimentés crée des interfaces intuitives et engageantes. 
                  Chaque écran est pensé pour offrir la meilleure expérience utilisateur possible.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Prototypage et tests utilisateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Design system cohérent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Accessibilité et inclusivité</span>
                  </li>
                </ul>
              </motion.div>

              {/* Compétence 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-32"
              >
                <div className="mb-6">
                  <span className="text-sm font-semibold px-4 py-2 bg-purple-100 text-purple-600 rounded-full uppercase tracking-wider">
                    Compétence 3
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', color: '#000b6d' }}>
                  Support & Maintenance
                </h3>
                <p className="text-lg leading-relaxed mb-8" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
                  Nous accompagnons nos clients bien au-delà du lancement. Notre service de maintenance 
                  assure la pérennité et l&apos;évolution continue de votre application mobile.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Monitoring 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Mises à jour régulières</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>Support technique réactif</span>
                  </li>
                </ul>
              </motion.div>

            </div>
          </div>

          {/* Right Image - Sticky with parallax effect */}
          <div className="relative lg:sticky lg:top-0 lg:h-screen">
            <div className="relative w-full h-full min-h-screen">
              <div 
                className="relative w-full h-full"
                style={{
                  transform: `translateY(${competencesProgress * 50}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <Image
                  src="/imagesmobileapp/images bloc4.svg"
                  alt="PROGIX Studio compétences"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Progressive White Filter - disparaît au fur et à mesure */}
              <div 
                className="absolute inset-0 bg-white transition-opacity duration-300 ease-out"
                style={{ 
                  opacity: Math.max(0, Math.min(0.85, 0.85 - (competencesProgress * 0.85)))
                }}
              ></div>
            </div>
          </div>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center mb-12 text-lg" style={{ fontFamily: "'Spline Sans', sans-serif", color: '#425466' }}>
            Ils nous font confiance pour leurs applications mobiles
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Logos will be integrated here once images are provided */}
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 1</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 2</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 3</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 4</span>
            </div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400 text-sm">Logo 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos réalisations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos applications mobiles développées pour nos clients
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-sm font-medium text-gray-900">Voir le projet</p>
                    </div>
                  </div>
                  {/* Placeholder for app screenshot */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <FaMobile className="text-6xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application {item}</h3>
                <p className="text-gray-600 text-sm">Description de l&apos;application et de ses fonctionnalités principales.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Notre expertise en chiffres
            </h2>
            <p className="text-xl text-blue-100">
              Des résultats qui parlent d&apos;eux-mêmes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Applications développées</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Clients satisfaits</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">5M+</div>
              <div className="text-blue-100">Téléchargements générés</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-white"
            >
              <div className="text-5xl font-bold mb-2">6</div>
              <div className="text-blue-100">Années d&apos;expérience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pourquoi choisir PROGIX Studio ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre approche unique garantit le succès de votre application mobile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Performance optimale",
                description: "Applications rapides et fluides sur tous les appareils"
              },
              {
                icon: <FaUsers className="text-3xl" />,
                title: "UX/UI exceptionnelle",
                description: "Interfaces intuitives et design moderne"
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Sécurité renforcée",
                description: "Protection des données et conformité RGPD"
              },
              {
                icon: <FaClock className="text-3xl" />,
                title: "Livraison rapide",
                description: "Développement agile et respect des délais"
              },
              {
                icon: <FaHeart className="text-3xl" />,
                title: "Support continu",
                description: "Accompagnement et maintenance post-lancement"
              },
              {
                icon: <FaCode className="text-3xl" />,
                title: "Technologies modernes",
                description: "Stack technique à la pointe de l'innovation"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre processus de développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analyse & Conception",
                description: "Étude approfondie de vos besoins et conception UX/UI"
              },
              {
                step: "02", 
                title: "Développement",
                description: "Développement agile avec des livraisons régulières"
              },
              {
                step: "03",
                title: "Tests & Optimisation", 
                description: "Tests rigoureux sur tous les appareils et optimisation"
              },
              {
                step: "04",
                title: "Lancement & Support",
                description: "Mise en ligne sur les stores et accompagnement continu"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-6xl font-bold text-blue-100 mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full">
                    <FaArrowRight className="text-blue-200 text-2xl mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Leurs témoignages parlent pour nous
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                company: "CEO, TechStart",
                rating: 5,
                text: "PROGIX Studio a développé notre application mobile avec un professionnalisme exemplaire. Le résultat dépasse nos attentes !",
                avatar: "👩‍💼"
              },
              {
                name: "Marc Dubois", 
                company: "Fondateur, E-Shop Plus",
                rating: 5,
                text: "Une équipe réactive et compétente. Notre app e-commerce cartonne grâce à leur expertise technique.",
                avatar: "👨‍💻"
              },
              {
                name: "Julie Leroy",
                company: "Directrice, HealthApp",
                rating: 5,
                text: "Développement rapide, interface magnifique et support client au top. Je recommande vivement !",
                avatar: "👩‍⚕️"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="text-blue-600 text-2xl" />
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à lancer votre application mobile ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et découvrez 
              comment nous pouvons donner vie à votre projet mobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Démarrer mon projet
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold transition-all hover:scale-105 hover:bg-white/10">
                Planifier un appel
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;
