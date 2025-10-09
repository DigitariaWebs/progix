'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';

const AboutUsSection = () => {
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

  // Dynamic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % cultureImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [cultureImages.length]);

  return (
    <section className="bg-gray-900 pb-20">
      {/* Decorative white rectangle at top */}
      <div
        className="w-full h-8 bg-white mb-20"
        style={{
          borderBottomLeftRadius: '100px',
          borderBottomRightRadius: '100px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              UNE PETITE ÉQUIPE
              <br />
              AUX{' '}
              <span style={{ color: colors.secondary }}>
                GRANDES
                <br />
                AMBITIONS
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed font-semibold mb-8">
              Progix tire son nom de notre passion pour la programmation et l&apos;innovation technologique. Notre équipe de 9 ingénieurs logiciels, majoritairement diplômés de l&apos;UQAM, forme un collectif soudé où la collaboration et l&apos;excellence technique sont au cœur de notre approche.
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
                        filter: 'brightness(0.7) contrast(0.8)',
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
                    <div className="text-white text-xs opacity-80">
                      Culture
                    </div>
                    <div className="text-white text-sm font-bold">PROGIX</div>
                  </div>
                </div>
              </div>

              {/* Elegant Counter */}
              <div className="absolute top-6 right-6">
                <div className="text-right">
                  <div className="text-white text-xs opacity-60">
                    {String(currentImageIndex + 1).padStart(2, '0')}
                  </div>
                  <div className="text-white text-xs opacity-40">
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
                <div className="text-white font-bold text-sm">2025</div>
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
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400 text-sm">Projets réalisés</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-400 text-sm">
              Années d&apos;expérience
            </div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400 text-sm">Clients satisfaits</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Sur mesure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
