'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import ScrollAnimation from '../ScrollAnimation';

const Partners: React.FC = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { id: 1, name: 'Partner 1', image: '/images/BAnQ-gray.svg' },
    { id: 2, name: 'Partner 2', image: '/images/crustys (1).png' },
    { id: 3, name: 'Partner 3', image: '/images/cfaqlogo.png' },
    { id: 4, name: 'Partner 4', image: '/images/download.png' }, 
    { id: 5, name: 'Partner 5', image: "/images/photo_2019-03-21_11-48-55-2-6-233x91.jpg"},  
    { id: 6, name: 'Partner 6', image: "/images/ibusinesslogo.png"},  
  ];

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4"> 
        
        <ScrollAnimation animation="zoomIn" delay={0.5}>
          <div className="relative overflow-hidden">
            {/* Mobile: Table layout with clean borders */}
            <div className="block md:hidden">
              <div className="overflow-hidden">
                {/* Row 1 */}
                <div className="flex border-b border-gray-200">
                  <div className="flex-1 border-r border-gray-200 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 0 ? 1.1 : 0.9,
                        opacity: currentIndex === 0 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(0)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 0 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[0].image}
                          alt={partners[0].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 1 ? 1.1 : 0.9,
                        opacity: currentIndex === 1 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(1)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 1 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[1].image}
                          alt={partners[1].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="flex border-b border-gray-200">
                  <div className="flex-1 border-r border-gray-200 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 2 ? 1.1 : 0.9,
                        opacity: currentIndex === 2 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(2)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 2 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[2].image}
                          alt={partners[2].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 3 ? 1.1 : 0.9,
                        opacity: currentIndex === 3 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(3)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 3 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[3].image}
                          alt={partners[3].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="flex">
                  <div className="flex-1 border-r border-gray-200 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 4 ? 1.1 : 0.9,
                        opacity: currentIndex === 4 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(4)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 4 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[4].image}
                          alt={partners[4].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ 
                        scale: currentIndex === 5 ? 1.1 : 0.9,
                        opacity: currentIndex === 5 ? 1 : 0.6
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20,
                        duration: 0.5 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="cursor-pointer"
                      onClick={() => setCurrentIndex(5)}
                    >
                      <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        animate={{ 
                          filter: currentIndex === 5 ? "grayscale(0%)" : "grayscale(100%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20"
                      >
                        <Image
                          src={partners[5].image}
                          alt={partners[5].name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:grid md:grid-cols-4 lg:flex lg:items-center lg:justify-center lg:space-x-16 gap-6 md:gap-8 justify-items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  animate={{ 
                    scale: index === currentIndex ? 1.1 : 0.9,
                    opacity: index === currentIndex ? 1 : 0.6
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    duration: 0.5 
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 cursor-pointer"
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="w-30 h-30 md:w-30 md:h-30 flex items-center justify-center relative">
                    <motion.div
                      initial={{ filter: "grayscale(100%)" }}
                      animate={{ 
                        filter: index === currentIndex ? "grayscale(0%)" : "grayscale(100%)"
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    {/* Color reveal overlay */}
                    <AnimatePresence>
                      {index === currentIndex && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute inset-0 rounded-lg"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Partners;
