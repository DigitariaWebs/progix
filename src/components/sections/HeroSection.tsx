'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';

const HeroSection = () => {
 
 


  // Mobile video autoplay is now handled in CaseStudiesSection component

  return (
    <>
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
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <div className="flex flex-col items-start justify-center min-h-screen py-12">
            {/* Main Content */}
            <div className="max-w-4xl">
              {/* Main Heading */}
              <h1
                className="font-heading mb-5 text-3xl font-bold sm:text-5xl md:text-[55px] md:leading-[65px] text-black -mt-16"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                Développement logiciel sur mesure pour les organisations ambitieuses
              </h1>

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
                Progix est une entreprise de développement logiciel basée à
                Montréal.
                <br />
                Notre mission est de concevoir et de développer des solutions
                logicielles sur mesure, sécurisées et évolutives, créées de zéro
                pour s&apos;intégrer parfaitement à vos processus, vos équipes
                et vos clients.
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
 
    </>
  );
};

export default HeroSection;