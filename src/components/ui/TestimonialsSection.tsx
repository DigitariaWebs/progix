'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/config/colors';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart",
      rating: 5,
      text: "PROGIX a transformé notre vision en une application mobile exceptionnelle. Leur expertise technique et leur accompagnement ont dépassé nos attentes."
    },
    {
      name: "Jean Martin",
      company: "E-Commerce Plus",
      rating: 5,
      text: "Grâce à PROGIX, notre site e-commerce a vu ses ventes augmenter de 300%. Une équipe professionnelle et réactive."
    },
    {
      name: "Sophie Leroy",
      company: "DataCorp",
      rating: 5,
      text: "L'expertise data de PROGIX nous a permis d'optimiser nos processus et de prendre de meilleures décisions stratégiques."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: colors.primary }}>
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Leurs témoignages parlent pour nous
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="mb-4">
                <FaQuoteLeft size={24} style={{ color: colors.secondary }} />
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold" style={{ color: colors.primary }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
