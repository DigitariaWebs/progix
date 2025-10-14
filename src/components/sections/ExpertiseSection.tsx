'use client';

import React from 'react';
import Image from 'next/image';
import { colors } from '@/config/colors';
import ScrollFloat from '@/components/ui/ScrollFloat';

const ExpertiseSection = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-white bg-grid-lines grid-lines-6 py-20 rounded-t-[60px] rounded-b-[60px] ">
        {/* Yield blur behind second card only: position via absolute layer */}
        <div className="pointer-events-none absolute inset-0 bg-blur-yield opacity-50" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={1}
              ease={'back.inOut(2)'}
              scrollStart={'center bottom+=50%'}
              scrollEnd={'bottom bottom-=40%'}
              stagger={0.03}
              containerClassName="mb-6"
              textClassName="text-5xl md:text-6xl font-bold text-gray-900"
            >{`Expertise pour surmonter\nvos obstacles de croissance`}</ScrollFloat>
          </div>

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Management & automation software Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-8">
                <Image
                  src="/images/management_automation_software_illustration (1).svg"
                  alt="Management & automation software"
                  width={200}
                  height={150}
                  className="w-full h-40 object-contain"
                  style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Solutions d’entreprise & automatisation intelligente
              </h3>

              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Solutions sur mesure (ERP, CRM, Intranet) adaptées à vos processus d’affaires. Nous intégrons et personnalisons des plateformes telles que Microsoft Dynamics 365, SAP Business One ou Odoo, tout en automatisant vos flux internes pour relier vos opérations, vos équipes et vos systèmes existants.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700 ">
                    Analyse et architecture d’affaires
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700 ">
                    Développement et intégration ERP/CRM
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700  ">
                    Automatisation des processus (RPA, Power Automate)
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Support et maintenance applicative
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Witify Lab Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Blur SVG background layer */}
              <div className="pointer-events-none absolute inset-0 bg-blur-yield opacity-50" aria-hidden="true" />
              <div className="relative z-10">
                <div className="mb-8">
                  <Image
                    src="/images/witify_lab_illustration (1).svg"
                    alt="Witify Lab"
                    width={200}
                    height={150}
                    className="w-full h-40 object-contain"
                    style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Laboratoire PROGIX – Innovation et R&D logicielle
                </h3>

                <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                  Le laboratoire PROGIX explore les nouvelles frontières du développement logiciel et de l’intelligence artificielle. Nos équipes conçoivent des applications web et mobiles intelligentes, des prototypes innovants et des expériences numériques sur mesure pour les organisations québécoises et canadiennes.
                </p>

                <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Application web (Next.js, React, Node.js)
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Application mobile (Flutter, React Native)
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Prototypage & R&D IA
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              </div>
            </div>

            {/* Data management Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-8">
                <Image
                  src="/images/data_management_illustration.svg"
                  alt="Data management"
                  width={200}
                  height={150}
                  className="w-full h-40 object-contain"
                  style={{ filter: `hue-rotate(200deg) saturate(1.2)` }}
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Données, analytique et intelligence d’affaires
              </h3>

              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Nos experts transforment vos données en leviers décisionnels. De la migration cloud à la visualisation Power BI en passant par l’analyse prédictive, nous vous aidons à structurer, comprendre et exploiter vos données pour améliorer vos performances et anticiper vos besoins.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Stratégie et gouvernance de données
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Analytique et modélisation
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Visualisation et tableaux de bord
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: colors.secondary }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertiseSection;
