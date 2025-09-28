'use client';

import React from 'react';
import { LayoutGrid } from './layout-grid';

export const Projects = [
  {
    id: 1, 
    className: "md:col-span-2",
    thumbnail: "p1.jpg",
    title: "Remorca – Instant Tow Truck Assistance",
    description: "Stranded on the road? Remorca connects you instantly with nearby tow trucks and roadside assistance professionals. Whether it's a flat tire, dead battery, or emergency towing, help is just a tap away. No long waits, no hassle—just fast, reliable service when you need it most.",
    images: [ "p1.jpg", "/remorca/1.png", "/remorca/2.png", "/remorca/3.png", "/remorca/4.png",
  "/remorca/5.png", "/remorca/6.png", "/remorca/7.png", "/remorca/8.png",
  "/remorca/9.png", "/remorca/10.png", "/remorca/11.png", "/remorca/12.png",
  "/remorca/13.png", "/remorca/14.png", "/remorca/15.png", "/remorca/16.png",
  "/remorca/17.png", "/remorca/18.png", "/remorca/19.png", "/remorca/20.png"],
    type: "mobile" ,
    techStack: ["/flutter.svg","/express.svg","node.svg"],
  },
  {
    id: 2, 
    className: "md:col-span-1",
    thumbnail: "p2.jpg",
    title: "Business Titans – Learn, Earn & Grow",
    description: "Business Titans is the ultimate e-learning and e-commerce platform powered by multi-level marketing. Buy and watch courses, shop for exclusive products, and track your productivity, income, and network growth in real-time. Our built-in CRM allows businesses to manage clients, sell courses, process payouts, and expand effortlessly. Whether you're learning, selling, or scaling. Business Titans has you covered.",
    images: [ "p2.jpg", "/bt/1.png", "/bt/2.png", "/bt/3.png", "/bt/4.png", "/bt/5.png", "/bt/6.png",
  "/bt/7.png", "/bt/8.png", "/bt/9.png", "/bt/10.png", "/bt/11.png", "/bt/12.png",
  "/bt/13.png", "/bt/14.png", "/bt/15.png", "/bt/16.png", "/bt/77.png", "/bt/88.png",
  "/bt/19.png", "/bt/20.png", "/bt/21.png", "/bt/22.png"],
    type: "mobile" ,
    techStack: ["/flutter.svg","/express.svg","node.svg"],
  },
  {
    id: 3, 
    className: "md:col-span-1",
    thumbnail: "p3.jpg",
    title: "Psynet – Connect with Professional Psychologists Online",
    description: "Need expert mental health support? Psynet connects clients with licensed psychologists for secure online sessions via Google Meet. Browse a list of professionals, book appointments, and manage payments through a simple subscription system,For psychologists, Psynet offers powerful tools to manage profiles, track appointments, and monitor productivity—all in one place. Get the help you need or grow your practice with Psynet.",
    images: [ "p3.jpg", "/psynet/1.png", "/psynet/2.png", "/psynet/3.png", "/psynet/4.png", "/psynet/5.png", "/psynet/6.png",
  "/psynet/7.png", "/psynet/8.png", "/psynet/9.png", "/psynet/10.png", "/psynet/11.png", "/psynet/12.png",
  "/psynet/13.png", "/psynet/14.png", "/psynet/15.png", "/psynet/16.png", "/psynet/17.png", "/psynet/18.png",],
    type: "mobile" ,
    techStack: ["/flutter.svg","/express.svg","node.svg"],
  }, 
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-16 text-center">
          {/* Background Text */}
          <div className="absolute -top-13 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-gray-200 select-none pointer-events-none">
            PORTFOLIO
          </div>
          
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Gallery, Previews and Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>
        </div>

        {/* LayoutGrid Component */}
        <LayoutGrid cards={Projects} />

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
            See More Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;