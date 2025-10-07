'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { colors } from '@/config/colors';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { slug } = use(params);

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* Hero Section - Title then Image */}
      <section className="relative w-full bg-white pt-32 pb-0">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Title */}
          <div className="mb-26 lg:mb-30 mt-8 lg:mt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[0.95] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
              {project.title}
            </h1>
          </div>

          {/* Image - Almost Full Width */}
          {project.image && (
            <div className="relative w-full mt-10 lg:mt-15">
              <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar - Left Column */}
            <aside className="lg:col-span-3 space-y-12">
              {/* Client */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  CLIENT
                </div>
                <div className="text-base text-gray-900">{project.client}</div>
              </div>

              {/* Industry */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  INDUSTRIE
                </div>
                <div className="text-base text-gray-900">
                  {project.industry}
                </div>
              </div>

              {/* Technology */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  TECHNOLOGIE
                </div>
                <div className="text-base text-gray-900">
                  {project.tags[0] || 'Web Development'}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  TYPE DE PROJET
                </div>
                <div className="text-base text-gray-900">
                  {project.category}
                </div>
              </div>

              {/* Year */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-3">
                  ANNÉE
                </div>
                <div className="text-base text-gray-900">{project.year}</div>
              </div>

              {/* Team - Placeholder for now */}
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 mb-4">
                  ÉQUIPE
                </div>
                <div className="flex flex-wrap gap-2">
                  {/* Placeholder team avatars */}
                  {[1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gray-200"
                    />
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content - Right Column */}
            <div className="lg:col-span-9 space-y-16">
              {/* Project Introduction */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-800">
                  {project.fullDescription}
                </p>
                <div className="pt-8">
                  <Link
                    href={project.projectUrl || '#'}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] transition-colors"
                    style={{ color: colors.primary }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = colors.secondary)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = colors.primary)
                    }
                  >
                    VOIR LE SITE
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Section: MANDAT */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  MANDAT
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {project.description}
                </p>
              </div>

              {/* Section: OBJECTIFS */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  OBJECTIFS
                </h2>
                <div className="space-y-4">
                  {project.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-lg text-gray-700 mt-1">■</span>
                      <p className="text-lg leading-relaxed text-gray-700">
                        {service}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Section */}
              {project.results && project.results.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    RÉSULTATS
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.results.map((result, index) => (
                      <div key={index} className="space-y-2">
                        <div
                          className="text-4xl font-bold"
                          style={{ color: colors.secondary }}
                        >
                          {result.value}
                        </div>
                        <div className="text-base text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video Section */}
              {project.video && (
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    DÉMO
                  </h2>
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                    <video
                      src={project.video}
                      controls
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  TECHNOLOGIES
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white border-t border-gray-200 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
            {/* Left - CTA */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 whitespace-nowrap">
                  VOUS AVEZ UN PROJET ?
                </h2>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 border-2 transition-all duration-300"
                  style={{
                    borderColor: colors.primary,
                    color: colors.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.secondary;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = colors.secondary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.primary;
                    e.currentTarget.style.borderColor = colors.primary;
                  }}
                >
                  DEMANDEZ UNE SOUMISSION
                </Link>
              </div>
            </div>

            {/* Right - Next Project */}
            <div className="space-y-6 flex flex-col items-center justify-center">
              <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900">
                PROCHAIN PROJET
              </div>
              <Link
                href="/portfolio"
                className="block"
                onMouseEnter={(e) => {
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) h3.style.color = colors.secondary;
                }}
                onMouseLeave={(e) => {
                  const h3 = e.currentTarget.querySelector('h3');
                  if (h3) h3.style.color = colors.primary;
                }}
              >
                <h3
                  className="text-2xl lg:text-3xl font-bold transition-colors"
                  style={{ color: colors.primary }}
                >
                  Voir plus de projets
                </h3>
                <div className="text-sm uppercase tracking-wider text-gray-600 mt-2">
                  {project.industry}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProjectPage;