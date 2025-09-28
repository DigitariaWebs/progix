'use client';

import React from 'react';
import { colors } from '@/config/colors';

const CollaborationCTA = () => {
  return (
    <section 
      className="py-20 my-10"
      style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 25%, rgba(79, 70, 229, 0.1) 50%, #e2e8f0 75%, #ffffff 100%)',
        backdropFilter: 'blur(50px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Looking for a collaboration?
              <br />
              Get Started Today!
            </h2>
            <p className="text-gray-500 text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button 
              className="px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90 text-white"
              style={{ backgroundColor: '#4F46E5' }}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationCTA;