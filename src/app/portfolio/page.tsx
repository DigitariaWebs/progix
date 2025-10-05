'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Partners from '@/components/Partners';
import { projects, filterProjects } from '@/data/projectsData';

const colors = {
  primary: '#1B363C',
  secondary: '#4FA3D1',
};

const categories = [
  'ALL',
  'E-COMMERCE',
  'HEALTHCARE',
  'FINTECH',
  'IOT',
  'EDUCATION',
  'HOSPITALITY',
];

const industries = [
  'ALL',
  'RETAIL',
  'MEDICAL',
  'FINANCE',
  'GOVERNMENT',
  'EDUCATION',
  'FOOD',
];

const PortfolioPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    const filtered = filterProjects(activeFilter, activeCategory);
    // Sort alphabetically by title
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [activeFilter, activeCategory]);

  // Projects to display (either 4 or all)
  const displayedProjects = useMemo(() => {
    if (showAllProjects) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, 4);
  }, [filteredProjects, showAllProjects]);

  // Reset showAllProjects when filters change
  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter, activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Header */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-md scrolled:bg-white/95 scrolled:shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 ">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center relative z-10">
              <Image
                src="/images/logo (3).webp"
                alt="PROGIX Logo"
                priority
                onClick={() => (window.location.href = '/landing')}
                width={130}
                height={130}
                className="h-20 w-auto cursor-pointer"
              />
              <Image
                src="/CertifiedLogo.webp"
                alt="GPTW Certification"
                width={100}
                height={40}
                className="h-14 w-auto ml-4 mt-4 cursor-pointer"
              />
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                <Link
                  href="/services"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                >
                  Services
                </Link>
                <a
                  href="/team"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                >
                  Notre équipe
                </a>
                <a
                  href="#portfolio"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                >
                  Portfolio
                </a>
                <Link
                  href="/contact"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
                >
                  Blogue
                </Link>
              </div>
            </div>

            {/* Right side button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                style={{
                  backgroundColor: colors.secondary,
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                Démarrer un projet
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="transition-colors text-black hover:text-black/80 scrolled:text-gray-900 scrolled:hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#services"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Services
                </a>
                <a
                  href="/team"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Notre équipe
                </a>
                <Link
                  href="/portfolio"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Contact
                </Link>
                <div className="flex space-x-4 pt-4">
                  <Link
                    href="/contact"
                    className="text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex-1 inline-block text-center"
                    style={{ backgroundColor: colors.secondary }}
                  >
                    Démarrer un projet
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:bg-gray-50 flex-1 inline-block text-center"
                    style={{
                      borderColor: colors.primary,
                      color: colors.primary,
                    }}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HeroSection.png"
            alt="Projects Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay - Strong from left, fading to right */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, rgba(230, 242, 255, 1.0) 0%, rgba(230, 242, 255, 0.8) 15%, rgba(230, 242, 255, 0.5) 30%, rgba(230, 242, 255, 0.2) 45%, transparent 100%)`,
          }}
        ></div>

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span style={{ color: colors.primary }}>
                  NO MORE CHIT-CHAT,
                </span>
                <br />
                <span style={{ color: colors.secondary }}>
                  WHAT DOES OUR WORK
                </span>
                <br />
                <span style={{ color: colors.primary }}>REALLY LOOK LIKE?</span>
              </h1>
              <p
                className="text-xl leading-relaxed mb-12 max-w-3xl"
                style={{ color: colors.primary }}
              >
                It&#39;s time to prove that we&#39;re good at what we do. Check
                out our case studies and browse the list of our projects below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <Partners />
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div
              className="flex items-center gap-2"
              style={{ color: colors.primary }}
            >
              <Filter className="w-5 h-5" style={{ color: colors.secondary }} />
              <span className="font-semibold">FILTER BY</span>
            </div>

            {/* Types Dropdown */}
            <div className="flex items-center gap-2">
              <select
                className="border-b-2 bg-transparent px-2 py-2 font-semibold cursor-pointer focus:outline-none transition-all duration-300"
                style={{
                  borderColor: colors.secondary,
                  color: colors.primary,
                }}
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                <option value="ALL">ALL TYPES</option>
                <option value="FEATURED">FEATURED</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Ampersand */}
            <span
              className="text-2xl font-bold"
              style={{ color: colors.secondary }}
            >
              &
            </span>

            {/* Industries Dropdown */}
            <div className="flex items-center gap-2">
              <select
                className="border-b-2 bg-transparent px-2 py-2 font-semibold cursor-pointer focus:outline-none transition-all duration-300"
                style={{
                  borderColor: colors.secondary,
                  color: colors.primary,
                }}
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                <option value="ALL">ALL INDUSTRIES</option>
                {industries.slice(1).map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Projects */}
          {activeFilter === 'ALL' || activeFilter === 'FEATURED' ? (
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span style={{ color: colors.secondary }}>OUR FAVORITES</span>
                <span className="text-gray-800">
                  {' '}
                  (EVEN IF WE LOVE THEM ALL)
                </span>
              </h2>

              <div
                className="columns-1 md:columns-2 gap-8 mb-16 space-y-8"
                style={{ columnFill: 'balance' }}
              >
                {filteredProjects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <div
                      key={project.id}
                      className={`group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 break-inside-avoid ${
                        index % 2 === 0 ? 'md:mt-12' : ''
                      }`}
                    >
                      {/* Project Image */}
                      <div className="relative h-[600px] overflow-hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        )}
                        {project.video && (
                          <video
                            src={project.video}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loop
                            muted
                            playsInline
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white text-2xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{
                                  backgroundColor: colors.secondary,
                                  color: 'white',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : null}

          {/* All Projects */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span style={{ color: colors.secondary }}>EVEN MORE</span>
              <span className="text-gray-800"> PROJECTS</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Right Column - Even indexes (0, 2, 4...) - First, Third, Fifth... */}
              <div className="flex-1 space-y-8">
                {displayedProjects
                  .filter((_, index) => index % 2 === 0)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Project Image */}
                      <div className="relative h-96 overflow-hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        {project.video && (
                          <video
                            src={project.video}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loop
                            muted
                            playsInline
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white text-xl font-bold mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{
                                  backgroundColor: colors.secondary,
                                  color: 'white',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Left Column - Odd indexes (1, 3, 5...) - Second, Fourth, Sixth... */}
              <div className="flex-1 space-y-8 md:mt-12">
                {displayedProjects
                  .filter((_, index) => index % 2 === 1)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Project Image */}
                      <div className="relative h-96 overflow-hidden">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        {project.video && (
                          <video
                            src={project.video}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loop
                            muted
                            playsInline
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Project Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="text-white text-xl font-bold mb-1">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-1 rounded-full"
                                style={{
                                  backgroundColor: colors.secondary,
                                  color: 'white',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Load More */}
          {filteredProjects.length > 4 && !showAllProjects && (
            <div className="text-center mt-16">
              <button
                onClick={() => setShowAllProjects(true)}
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: colors.primary }}
              >
                SHOW MORE PROJECTS ({filteredProjects.length - 4} MORE)
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
