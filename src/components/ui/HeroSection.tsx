'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';
import ShinyText from './shinyText';

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
      <section className="relative overflow-hidden bg-white    ">
        {/* Binary code background pattern */}
     
        
        <div className="relative z-0 ">
          {/* Split layout into two vertical halves */}
          <div className="flex flex-col md:flex-row h-screen">
            {/* ================= Left side ================= */}
            <div className="w-full md:w-1/2 flex flex-col ">
              {/* Main Headline - Top Left */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="row-span-6   flex flex-col   border-r md:border-r border-b border-gray-200"
              > 
                {/* Header */}
                <div className="grid grid-cols-4 justify-items-stretch items-center border-x-2 border-b-2 border-slate-800 w-full ">
                  <div className="flex justify-center">
                    <Image src="/images/logo.svg" alt="Team working" width={150} height={100} className='items-center' />
                  </div>
                  <h1 className="flex justify-center text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight border-x-2 border-slate-800 py-8">APROPOS</h1>
                  <h1 className="flex justify-center text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight border-r-2 border-slate-800 py-8">SERVICES</h1>
                  <h1 className="flex justify-center text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-tight border-slate-800 py-8">PROJETS</h1>
                </div>
                {/* Main Title */}
                 
                <div className="flex flex-col     ">
                <div className="text-xs text-cyan-500 font-mono   tracking-wide justify-start items-start">
                    01010101010101010
                  </div>
                  <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-slate-800 leading-tight text-left">
                    PROGIX, L&apos;AGENCE TECH QUI 
                    <br />
                    MAÎTRISE L&apos;ART DE CODER
                    <br />
                     
                  </h1>
                  <div className="text-xs text-cyan-500 font-mono mt-2 md:mt-4 tracking-wide flex flex-col">
                    <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-5xl font-bold text-slate-800 leading-tight text-left">L&apos;INNOVATION.</h1>
                    <p className="text-xs text-cyan-500 font-mono mt-2 md:mt-4 tracking-wide flex justify-end items-end">01010101010101010</p>
                  </div>
                  
                </div>
                
              </motion.div>
     {/* Binary Pattern Bottom - Hidden on mobile */}
           <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden md:block row-span-2 border-1 border-slate-800  flex justify-center items-center py-4 w-full"
              >
                <div className="text-xs border-slate-800 font-mono tracking-widest flex justify-center items-center w-full">
                   
                  <ShinyText
        text= "01010101010 01010101010 01010101010 01010101010 01010101010 01010101010"                                                
        disabled={false}
        speed={10}
        className="py-2 text-sm font-medium text-center text-slate-800"
      />
                </div>
              </motion.div>
              
            </div>

            {/* ================= Right side ================= */}
            <div className="w-full md:w-1/2 grid grid-cols-9 grid-rows-6">  
              {/* P Letter - Top Right */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-2   md:border-l-2 border-slate-800 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-4xl lg:text-9xl font-bold text-slate-800">P</span>
              </motion.div>

              {/* Innovation Text  */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-span-3 border-b border-x-2 border-slate-800 p-2 md:p-4 flex flex-col justify-center"
              > 
                <p className="text-xs md:text-2xl font-bold text-slate-700 leading-relaxed">
                  PROGRAMMATION
                  <br />
                  INNOVATION
                  <br />
                  EXÉCUTION.
                </p>
              </motion.div>
              {/* contact get started - Top Right Corner */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="col-span-4 border-b-2 border-r-2 border-slate-800     grid grid-cols-2 gap-0"
              >
                <div className="col-span-1 flex flex-col justify-center items-center py-4  border-slate-800">
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed p-4 ">
                    CONTACT 
                  </p>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center border-l-2 border-slate-800">
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed py-4">
                    Get Started
                  </p>
                </div>
                <div className="col-span-2 flex flex-col justify-center items-center border-t-2 border-slate-800">
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-relaxed py-4">
                    Blog
                  </p>
                </div>
              </motion.div>

              {/* Team Image 1 - Middle Right */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-3 border-r md:border-r border-b border-gray-200 overflow-hidden"
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
                className="col-span-3 border-b border-gray-200 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800">R</span>
              </motion.div>

              {/* Video Play Button */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="col-span-3 border-r md:border-r border-gray-200 flex items-center justify-center bg-slate-50"
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
                className="col-span-3 flex items-center justify-center bg-slate-50"
              >
                <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800">J</span>
              </motion.div>
            </div>
          </div>
 
        </div>
      </section>
    </>
  );
};

export default HeroSection;
