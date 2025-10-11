'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
// Navbar removed to use global StaggeredMenu header
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import { colors } from '@/config/colors';
import Navbar from '@/components/layout/NavbarNew';

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
          {project.heroImage && (
            <div className="relative w-full mt-10 lg:mt-15">
              <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-md">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
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

      {/* Project Video Preview */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0A2456] to-[#4FA3D1] rounded-xl py-16 lg:py-20 px-8 lg:px-12">
              <div className="relative aspect-[16/10] w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
                <video
                  src={project.video || '/fruitexo.mp4'}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  poster={project.posterImage}
                >
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandat Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Large Title */}
            <div className="flex items-start">
              <h2 className="text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-900 leading-[0.9]">
                MANDAT
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="font-semibold lg:text-lg leading-relaxed text-gray-800">
                Concevoir une plateforme numérique bilingue et accessible, tout
                en repensant l&apos;expérience utilisateur pour la rendre plus
                intuitive. Le site devait refléter la nouvelle image de marque
                du cégep, réalisée en 2024 par{' '}
                <a
                  href="#"
                  className="underline hover:text-gray-600 transition-colors"
                >
                  Lemay Michaud
                </a>
                , et mettre en valeur son positionnement distinctif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Images Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {project.twoImages &&
              project.twoImages.map((image, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg">
                    <Image
                      src={image}
                      alt={`${project.title} - Vue ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Large Title */}
            <div className="flex items-start">
              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[0.9]">
                OBJECTIFS
              </h2>
            </div>

            {/* Right Column - Bullet Points */}
            <div className="flex items-center">
              <ul className="space-y-6 font-semibold lg:text-lg leading-relaxed text-gray-800">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Respecter l&apos;ensemble des normes gouvernementales en
                    matière de sécurité et d&apos;accessibilité.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Offrir une expérience 100 % bilingue (français et anglais).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Simplifier et moderniser la navigation pour une utilisation
                    intuitive.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Mettre en lumière la mission, la vision et les valeurs du
                    cégep.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Soutenir les efforts de recrutement d&apos;étudiants et
                    d&apos;employés.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Intégrer et respecter la nouvelle identité visuelle du
                    cégep.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Moderniser l&apos;image numérique afin de la rendre plus
                    attrayante et pertinente.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 flex-shrink-0">•</span>
                  <span>
                    Fournir des indicateurs de performance (KPI) permettant
                    d&apos;analyser la fréquentation et la convivialité du site.
                  </span>
                </li>
              </ul>
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