'use client';

import React from 'react';
import Image from 'next/image';
import { colors } from '@/config/colors';

const ExpertiseSection = () => {
  return (
    <div className="bg-white">
      <section className="bg-white py-20 rounded-t-[60px] rounded-b-[60px] ">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span style={{ color: colors.secondary }}>Expertise</span> pour
              surmonter
              <br />
              vos obstacles de croissance
            </h2>
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
                Logiciels de gestion & d&apos;automatisation
              </h3>

              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Logiciels de gestion sur mesure (Intranet, ERP etc.) qui
                assurent la synergie entre vos opérations, votre équipe et
                votre nouvelle réalité numérique.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700 ">
                    Analyse métier et technique
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
                    Développement logiciel sur mesure
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
                    Développement ERP personnalisé
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
                    Support et maintenance logicielle
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
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
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
                Laboratoire PROGIX
              </h3>

              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Le laboratoire PROGIX est dédié à l&apos;innovation logicielle
                sous toutes ses formes. La recherche et développement ainsi
                que la conception innovante sont au cœur de notre approche.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Application web
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
                    Application mobile
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
                Gestion des données
              </h3>

              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                Notre expertise tire parti des données à votre disposition
                grâce à un accompagnement ciblé pour une compréhension
                complète et une prise de décision efficace.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm front-semibold text-cyan-700">
                    Stratégie de données
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
                    Analyse de données
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
                    Visualisation de données
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
