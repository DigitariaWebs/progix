'use client';

import React from 'react';
import { colors } from '@/config/colors';

const CtaSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: colors.secondary }}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Prêt à démarrer votre projet ?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Contactez-nous dès aujourd&apos;hui pour une consultation gratuite
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            style={{ color: colors.secondary }}
          >
            Démarrer un projet
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg transition-all hover:scale-105">
            Planifier un appel
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
