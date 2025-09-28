'use client';

import React from 'react';
import Image from 'next/image';

const LogoCarousel = () => {
  // Liste des logos avec leurs informations
  const logos = [
    { src: "/images/barbershop-logo.png", alt: "Barbershop" },
    { src: "/images/crustys.png", alt: "Crustys" },
    { src: "/images/LogoFr.webp", alt: "LogoFr" },
    { src: "/images/logoibox.png", alt: "iBox" },
    { src: "/images/logoaquaa.png", alt: "Aquaa" },
    { src: "/images/logo-gold.png", alt: "Gold Logo" },
    { src: "/images/LogoEle-1024x724.webp", alt: "Ele Logo" },
    { src: "/images/rp-logo-1.png", alt: "RP Logo" },
    { src: "/images/logo (1).png", alt: "Logo 1" }
  ];

  return (
    <div className="mt-10  ">
      <div className="relative overflow-hidden">
        {/* Gradient Masks */} 
          
        {/* Scrolling Container */}
        <div className="flex animate-scroll items-center gap-16 py-8">
          {/* First Set */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex items-center justify-center h-20 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          
          {/* Second Set for Seamless Loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex items-center justify-center h-20 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
          
          {/* Third Set for Seamless Loop */}
          {logos.map((logo, index) => (
            <div key={`third-${index}`} className="flex items-center justify-center h-20 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={100}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
