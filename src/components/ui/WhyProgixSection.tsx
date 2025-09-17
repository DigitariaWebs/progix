'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';
import { FaUsers, FaRocket } from 'react-icons/fa';
import { MdSupport, MdSecurity } from 'react-icons/md';

const WhyProgixSection = () => {
  const features = [
    {
      icon: <FaUsers size={32} />,
      title: "Équipe experte",
      description: "Développeurs seniors avec 10+ ans d'expérience"
    },
    {
      icon: <FaRocket size={32} />,
      title: "Livraison rapide",
      description: "Méthodologie agile pour des résultats en temps record"
    },
    {
      icon: <MdSupport size={32} />,
      title: "Support 24/7",
      description: "Accompagnement continu et support technique"
    },
    {
      icon: <MdSecurity size={32} />,
      title: "Sécurité garantie",
      description: "Standards de sécurité les plus élevés"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pourquoi choisir PROGIX ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Notre approche unique garantit le succès de vos projets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="mb-4 flex justify-center" style={{ color: colors.secondary }}>
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-100 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProgixSection;
