'use client';

import React from 'react';
import LogoCarousel from './LogoCarousel';

const TrustedByBrandsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Global
            <br />
            Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </div>
    </section>
  );
};

export default TrustedByBrandsSection;
