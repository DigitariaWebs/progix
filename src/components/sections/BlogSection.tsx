'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

const BlogSection = () => {
  return (
    <section className="bg-[#0a1628] py-20 relative overflow-hidden">
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left side - Header */}
          <div className="lg:w-1/4 flex-shrink-0">
            <h2
              className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-5 leading-tight"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                letterSpacing: '0.02em',
              }}
            >
              QU&apos;EST-CE QU&apos;IL SE PASSE
              <br />
              CHEZ PROGIX?
            </h2>
            <Link
              href="/blog"
              className="inline-block text-[#0a1628] bg-[#00d4ff] px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl transform hover:scale-105"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              Blog
            </Link>
          </div>

          {/* Right side - Blog Posts Grid */}
          <div className="flex-1 grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-transparent overflow-hidden cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
