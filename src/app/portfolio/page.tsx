'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter } from 'lucide-react';
import Partners from '@/components/ui/Partners';
import { filterProjects } from '@/data/projectsData';
import Navbar from '@/components/layout/Navbar';

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
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-[#F5F5F5] pt-32 pb-20">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full space-y-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>/</span>
              <span className="uppercase tracking-wider">PROJECTS</span>
            </div>

            {/* Main Heading - Full Width */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-6xl">
              <span style={{ color: colors.primary }}>NO MORE CHIT-CHAT,</span>
              <br />
              <span style={{ color: colors.secondary }}>
                WHAT DOES OUR WORK
              </span>
              <br />
              <span style={{ color: colors.primary }}>REALLY LOOK LIKE?</span>
            </h1>

            {/* Description on the Right Side - With Icon */}
            <div className="flex justify-end">
              <div className="flex gap-4 items-start max-w-xl">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-gray-800"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>

                {/* Description Text */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  It&#39;s time to prove that we&#39;re good at what we do.
                  Check out our case studies and browse the list of our projects
                  below.
                </p>
              </div>
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
                className="columns-1 md:columns-2 gap-20 mb-16 space-y-20"
                style={{ columnFill: 'balance' }}
              >
                {filteredProjects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <Link
                      key={project.id}
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <div
                        className={`group overflow-hidden transition-all duration-500 break-inside-avoid cursor-pointer ${
                          index % 2 === 0 ? 'md:mt-25' : ''
                        }`}
                      >
                        {/* Project Image */}
                        <div className="relative h-[600px] overflow-hidden">
                          {project.image && (
                            <>
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:opacity-0"
                              />
                              <Image
                                src="/GoodRandomImageHover.png"
                                alt={`${project.title} hover`}
                                fill
                                className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                              />
                            </>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>

                        {/* Project Info Below Image */}
                        <div className="p-6 bg-white">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3
                                className="text-xl font-bold uppercase mb-2"
                                style={{ color: colors.primary }}
                              >
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-500 uppercase">
                                {project.industry} | {project.category}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-sm text-gray-400 leading-tight">
                                Showcase
                              </p>
                              <p className="text-sm text-gray-400 leading-tight">
                                website
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
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

            <div className="flex flex-col md:flex-row gap-20">
              {/* Right Column - Even indexes (0, 2, 4...) - First, Third, Fifth... */}
              <div className="flex-1 space-y-16">
                {displayedProjects
                  .filter((_, index) => index % 2 === 0)
                  .map((project) => (
                    <Link
                      key={project.id}
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <div className="group overflow-hidden transition-all duration-300">
                        {/* Project Image */}
                        <div className="relative h-96 overflow-hidden">
                          {project.image && (
                            <>
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:opacity-0"
                              />
                              <Image
                                src="/GoodRandomImageHover.png"
                                alt={`${project.title} hover`}
                                fill
                                className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              />
                            </>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>

                        {/* Project Info Below Image */}
                        <div className="p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3
                                className="text-lg font-bold uppercase mb-2"
                                style={{ color: colors.primary }}
                              >
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-500 uppercase">
                                {project.industry} | {project.category}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-sm text-gray-400 leading-tight">
                                Showcase
                              </p>
                              <p className="text-sm text-gray-400 leading-tight">
                                website
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* Left Column - Odd indexes (1, 3, 5...) - Second, Fourth, Sixth... */}
              <div className="flex-1 space-y-20 md:mt-25">
                {displayedProjects
                  .filter((_, index) => index % 2 === 1)
                  .map((project) => (
                    <Link
                      key={project.id}
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <div className="group overflow-hidden transition-all duration-300">
                        {/* Project Image */}
                        <div className="relative h-96 overflow-hidden">
                          {project.image && (
                            <>
                              <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:opacity-0"
                              />
                              <Image
                                src="/GoodRandomImageHover.png"
                                alt={`${project.title} hover`}
                                fill
                                className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                              />
                            </>
                          )}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>

                        {/* Project Info Below Image */}
                        <div className="p-4 bg-white">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3
                                className="text-lg font-bold uppercase mb-2"
                                style={{ color: colors.primary }}
                              >
                                {project.title}
                              </h3>
                              <p className="text-sm text-gray-500 uppercase">
                                {project.industry} | {project.category}
                              </p>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-sm text-gray-400 leading-tight">
                                Showcase
                              </p>
                              <p className="text-sm text-gray-400 leading-tight">
                                website
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
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
