'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Quote {
  id: number;
  text: string;
  author: string;
  title: string;
  image: string;
  color: string;
}

const quotes: Quote[] = [
  {
    id: 1,
    text: "Innovation distinguishes between a leader and a follower. The way to get started is to quit talking and begin doing.",
    author: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "/images/steve-jobs.jpg",
    color: "bg-cyan-600"
  },
  {
    id: 2,
    text: "The future belongs to those who believe in the beauty of their dreams. Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Eleanor Roosevelt",
    title: "Former First Lady & Diplomat",
    image: "/images/eleanor-roosevelt.jpg",
    color: "bg-cyan-600"
  },
  {
    id: 3,
    text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    author: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "/images/steve-jobs.jpg",
    color: "bg-cyan-600"
  },
  {
    id: 4,
    text: "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "/images/steve-jobs.jpg",
    color: "bg-cyan-600"
  }
];

const InspirationalQuotesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentQuote = quotes[currentIndex];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
            style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
          >
            Inspiration from{' '}
            <span className="relative">
              Great Minds
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-purple-200 -z-10"></span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Words of wisdom from visionaries who shaped our world
          </motion.p>
        </div>

        {/* Main Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`${currentQuote.color} rounded-3xl overflow-hidden shadow-2xl`}
          >
            <div className="grid lg:grid-cols-2 gap-0 min-h-[400px]">
              {/* Left Side - Quote Content */}
              <div className="p-12 flex flex-col justify-center relative">
                {/* Quote Marks */}
                <div className="absolute top-6 left-6 text-6xl text-white/20 font-bold">"</div>
                <div className="absolute bottom-6 right-6 text-6xl text-white/20 font-bold transform rotate-180">"</div>
                
                {/* Quote Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-white leading-relaxed mb-8 relative z-10"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  {currentQuote.text}
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative z-10"
                >
                  <div className="text-white font-semibold text-lg mb-1">
                    {currentQuote.author}
                  </div>
                  <div className="text-white/80 text-sm">
                    {currentQuote.title}
                  </div>
                </motion.div>

                {/* Play Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                >
                  <svg 
                    className="w-5 h-5 text-white ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.button>
              </div>

              {/* Right Side - Author Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 z-10"></div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p className="text-sm">Portrait of {currentQuote.author}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-6 right-16 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-20"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gray-800 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationalQuotesSlider;
