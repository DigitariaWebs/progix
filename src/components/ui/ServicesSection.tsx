'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';
import { FaMobile, FaRocket } from 'react-icons/fa';
import { MdWeb, MdAnalytics, MdSecurity, MdSupport } from 'react-icons/md';

const ServicesSection = () => {
  const services = [
    {
      icon: <MdWeb size={48} />,
      title: "Développement Web",
      description: "Sites web modernes, applications web complexes et e-commerce performants"
    },
    {
      icon: <FaMobile size={48} />,
      title: "Applications Mobile",
      description: "Apps iOS et Android natives ou cross-platform avec React Native"
    },
    {
      icon: <MdAnalytics size={48} />,
      title: "Data & Analytics",
      description: "Solutions de data science, BI et intelligence artificielle"
    },
    {
      icon: <MdSecurity size={48} />,
      title: "Sécurité",
      description: "Audit de sécurité, protection des données et conformité RGPD"
    },
    {
      icon: <FaRocket size={48} />,
      title: "DevOps & Cloud",
      description: "Déploiement cloud, CI/CD et infrastructure scalable"
    },
    {
      icon: <MdSupport size={48} />,
      title: "Support & Maintenance",
      description: "Accompagnement continu et maintenance évolutive"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Nos services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète pour tous vos besoins digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 flex justify-center" style={{ color: colors.secondary }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.primary }}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
