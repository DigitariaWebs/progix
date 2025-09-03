'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { assets } from '@/config/assets';
import { colors } from '@/config/colors';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Squares } from '@/components/ui/squares-background';

const MaintenancePage = () => {
  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={60}
          borderColor="#e2e8f0"
          hoverFillColor="#4fa3d1"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center justify-center flex-1 w-full max-w-3xl mx-auto text-center space-y-6"
        >
          {/* Logo */}
          <div className="flex justify-center">
            <Image
              src={assets.logo}
              alt="Projix Logo"
              width={120}
              height={120}
              className="h-20 w-auto sm:h-24 md:h-28"
              priority
            />
          </div>

          {/* Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm">
              <DotLottieReact
                src="https://lottie.host/ca65bbdf-b3dd-42e9-a762-050bfb216905/g8RzlWETDm.lottie"
                loop
                autoplay
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* French Message Only */}
          <div>
            <p
              className="text-base sm:text-lg md:text-xl italic font-light leading-relaxed max-w-2xl"
              style={{ color: colors.primary }}
            >
              Nous construisons quelque chose d&apos;extraordinaire pour vous
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex justify-center">
            <div
              className="px-6 py-3 rounded-full border-2 inline-flex items-center bg-white/90 backdrop-blur-sm shadow-lg"
              style={{
                borderColor: colors.secondary,
              }}
            >
              <span
                className="font-medium text-xs sm:text-sm tracking-wide"
                style={{ color: colors.secondary }}
              >
                COMING SOON
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg border border-gray-200">
              <MdEmail size={16} style={{ color: colors.secondary }} />
              <span
                className="text-xs sm:text-sm font-medium"
                style={{ color: colors.tertiary }}
              >
                contact@progix.pro
              </span>
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons - Bottom */}
        <div className="flex justify-center pb-4">
          <div className="flex space-x-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg">
            <a
              href="https://www.linkedin.com/company/progix-inc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-80"
              style={{ backgroundColor: colors.secondary }}
              aria-label="Connect with us on LinkedIn"
            >
              <FaLinkedin size={16} style={{ color: colors.white }} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:opacity-80"
              style={{ backgroundColor: colors.secondary }}
              aria-label="Subscribe to our YouTube channel"
            >
              <FaYoutube size={16} style={{ color: colors.white }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
