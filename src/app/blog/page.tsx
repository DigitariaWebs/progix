'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { colors } from '@/config/colors';

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const nav = navRef.current;
      if (nav) {
        if (scrollTop > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Navigation Header */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
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
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-gray-900 hover:text-gray-700"
                >
                  Services
                </Link>
                <Link
                  href="/team"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-gray-900 hover:text-gray-700"
                >
                  Notre équipe
                </Link>
                <Link
                  href="/landing#portfolio"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-gray-900 hover:text-gray-700"
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-gray-900 hover:text-gray-700"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="font-heading font-bold inline-flex items-center justify-center text-center text-base menu-scroll transition-colors text-gray-900 hover:text-gray-700"
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
                className="transition-colors text-gray-900 hover:text-gray-700"
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
                <Link
                  href="/services"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Services
                </Link>
                <Link
                  href="/team"
                  className="font-heading font-bold text-gray-700 hover:text-primary inline-flex items-center justify-center text-center text-base menu-scroll transition-colors"
                  style={{ color: colors.primary }}
                >
                  Notre équipe
                </Link>
                <Link
                  href="/landing#portfolio"
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
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background decoration - stars */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-5 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{
              fontFamily: 'Hubot Sans, Inter, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Notre Blogue
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez nos derniers articles sur le développement web, la technologie et nos projets.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="bg-transparent overflow-hidden cursor-pointer group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="py-6">
                    <p className="text-sm text-gray-300 mb-3 font-medium">
                      {post.date}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-4 leading-snug min-h-[3.5rem] text-justify">
                      {post.title}
                    </h3>
                    <span className="inline-block text-sm font-semibold text-[#00d4ff] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#00d4ff] after:transition-all after:duration-300 group-hover:after:w-full">
                      Lire la suite
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 text-center">
          <p className="text-gray-400">
            © 2025 Progix. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
