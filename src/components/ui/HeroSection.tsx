'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';

const HeroSection = () => {
  return (
    <>
      {/* Blue Banner */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        <span>NOUVEAU ! Découvrez </span>
        <a href="#" className="underline hover:no-underline">ici</a>
        <span> notre pôle Data & IA</span>
      </div>

      {/* Hero Section with Grid Design */}
      <section className="relative overflow-hidden bg-white   ">
        {/* Binary code background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-xs font-mono text-gray-400 leading-4 p-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="whitespace-nowrap">
                {'01010101010 '.repeat(50)}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-0 ">
          {/* Split layout into two vertical halves */}
          <div className="grid grid-cols-6 md:grid-cols-12  ">
            {/* ================= Left side ================= */}
            <div className="col-span-6 md:col-span-6 flex flex-col">
              {/* Main Headline - Top Left */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="row-span-6 p-4 md:p-8 flex flex-col justify-center border-r md:border-r border-b border-gray-200"
              > 
                {/* Header */}
                <div className="grid grid-cols-4 justify-start items-start border-x border-b border-slate-800">
                  <Image src="/images/logo.png" alt="Team working" width={200} height={100}  className='border-r justify-start items-start  border-slate-800' />
                  <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-black leading-tight border-r   border-slate-800 py-4 px-10">APROPOS</h1>
                  <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-black leading-tight border-r   border-slate-800 py-4 px-10">SERVICES</h1>
                  <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-black leading-tight border-   border-slate-800 py-4 px-10">PROJETS</h1> 
                </div>
                {/* Main Title */}
                <div className="text-xs text-cyan-500 font-mono mb-2 md:mb-4 tracking-wide justify-start items-start">
                    01010101010101010
                  </div>
                <div className="flex flex-col items-center justify-center text-center">
                   
                  <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-slate-800 leading-tight text-left">
                    PROGIX, L&apos;AGENCE TECH QUI 
                    <br />
                    MAÎTRISE L&apos;ART DE CODER
                    <br />
                    L&apos;INNOVATION.
                  </h1>
                  <div className="text-xs text-cyan-500 font-mono mt-2 md:mt-4 tracking-wide">
                    01010101010101010
                  </div>
                </div>
              </motion.div>

              {/* Binary Pattern Bottom - Hidden on mobile */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden md:block row-span-2 border-gray-200 flex items-center px-8"
              >
                <div className="text-xs text-gray-400 font-mono tracking-widest">
                  01010101010&nbsp;&nbsp;&nbsp;01010101010&nbsp;&nbsp;&nbsp;01010101010&nbsp;&nbsp;&nbsp;01010101010&nbsp;&nbsp;&nbsp;01010101010&nbsp;&nbsp;&nbsp;01010101010
                </div>
              </motion.div>
            </div>

            {/* ================= Right side ================= */}
            <div className="col-span-6 md:col-span-6 grid grid-cols-6 grid-rows-8">
              {/* P Letter - Top Right */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-3 row-span-2 border-r md:border-r border-b border-gray-200 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-4xl lg:text-5xl font-bold text-slate-800">P</span>
              </motion.div>

              {/* Innovation Text - Top Right Corner */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-span-3 row-span-2 border-b border-gray-200 p-2 md:p-4 flex flex-col justify-center"
              >
                <div className="text-xs text-cyan-500 font-mono mb-1 md:mb-2">
                  01010101010
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-700 leading-relaxed">
                  PROGRAMMATION,
                  <br />
                  INNOVATION,
                  <br />
                  EXÉCUTION.
                </p>
              </motion.div>

              {/* Team Image 1 - Middle Right */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-3 row-span-2 border-r md:border-r border-b border-gray-200 overflow-hidden"
              >
                <Image
                  src="/images/premierbloc.jpg"
                  alt="Team working"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* R Letter */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-3 row-span-2 border-b border-gray-200 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800">R</span>
              </motion.div>

              {/* Video Play Button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="col-span-3 row-span-2 border-r md:border-r border-gray-200 flex items-center justify-center bg-slate-50"
              >
                <button className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </motion.div>

              {/* J Letter */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="col-span-3 row-span-2 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800">J</span>
              </motion.div>
            </div>
          </div>

          {/* Logo Carousel Component */}
          <div className="py-16">
            <LogoCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
