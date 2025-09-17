'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.primary }}>
              À propos de PROGIX
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Depuis 2020, PROGIX accompagne les entreprises dans leur transformation digitale. 
              Notre équipe de passionnés combine expertise technique et vision business pour 
              créer des solutions qui font la différence.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold mb-2" style={{ color: colors.secondary }}>
                  100+
                </div>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold mb-2" style={{ color: colors.secondary }}>
                  50+
                </div>
                <p className="text-gray-600">Clients satisfaits</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400">Photo équipe {i}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
