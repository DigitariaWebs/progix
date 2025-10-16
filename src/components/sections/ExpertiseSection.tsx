'use client';

import React from 'react';
import Image from 'next/image';
import { colors } from '@/config/colors';
import ScrollFloat from '@/components/ui/ScrollFloat';
import CardsScroll from '@/components/cards-scroll/CardsScroll';

const ExpertiseSection = () => {
  const [activeDark, setActiveDark] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Fallback scroll detection that's robust with pinned content
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      const centerTop = vh * 0.45;
      const centerBottom = vh * 0.55;
      const isCentered = rect.top < centerBottom && rect.bottom > centerTop;
      setActiveDark(isCentered);
      
      // Remove global dark mode - keep only local section dark mode
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      {/* Header section */}
      <div className={activeDark ? 'bg-gray-900 text-white transition-colors duration-500' : 'bg-white text-gray-900 transition-colors duration-500'}>
        <section ref={sectionRef} className={activeDark ? 'relative bg-gray-900 bg-grid-lines grid-lines-6 grid-lines-on-dark py-20 rounded-t-[60px] rounded-b-[60px]' : 'relative bg-white bg-grid-lines grid-lines-6 py-20 rounded-t-[60px] rounded-b-[60px]'}>
          {/* Background color layer to guarantee visible switch */}
          <div className={activeDark ? 'absolute inset-0 bg-gray-900 transition-colors duration-500' : 'absolute inset-0 bg-white transition-colors duration-500'} aria-hidden="true" />
          {/* Yield blur behind second card only: position via absolute layer */}
          <div className={activeDark ? 'pointer-events-none absolute inset-0 bg-blur-yield opacity-10' : 'pointer-events-none absolute inset-0 bg-blur-yield opacity-50'} aria-hidden="true" />
          {/* Header */}
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
            <div className="text-center mb-16">
              {/* Static title for all screen sizes */}
              <h2 className={activeDark ? 'text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6' : 'text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6'}>
                Expertise pour surmonter vos obstacles de croissance
              </h2>
            </div>
          </div>
        </section>
      </div>

      {/* Cards scroll animation - separate from header for proper GSAP context */}
      <CardsScroll
        hideHero
        hideIntro
        hideOutro
        isDark={activeDark}
        items={[
          {
            title: 'Management & automation software',
            copy:
              "Solutions d'entreprise & automatisation intelligente — Solutions sur mesure (ERP, CRM, Intranet) adaptées à vos processus d'affaires. Nous intégrons et personnalisons Microsoft Dynamics 365, SAP Business One ou Odoo, tout en automatisant vos flux internes.",
            imageSrc: '/images/management_automation_software_illustration (1).svg',
          },
          {
            title: 'Witify Lab',
            copy:
              'Laboratoire PROGIX – Innovation et R&D logicielle — Applications web et mobiles intelligentes, prototypes innovants et expériences numériques sur mesure.',
            imageSrc: '/images/witify_lab_illustration (1).svg',
          },
          {
            title: 'Application web & mobile',
            copy:
              'Next.js, React, Node.js — Flutter, React Native. Prototypage & R&D IA.',
            imageSrc: '/images/LogoEle-1024x724.webp',
          },
          {
            title: 'Data management',
            copy:
              'Données, analytique et intelligence d\'affaires — Stratégie, gouvernance, modélisation, visualisation et tableaux de bord.',
            imageSrc: '/images/data_management_illustration.svg',
          },
        ]}
      />
    </>
  );
};

export default ExpertiseSection;
