'use client';

import React from 'react';
import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring MERN Stack: Powering Modern Web Development",
      author: "Jhon Doee",
      date: "Jun 18, 2023",
      category: "Software development",
      image: "/blog1.svg",
      slug: "exploring-mern-stack-powering-modern-web-development"
    },
    {
      id: 2,
      title: "Test webhook",
      author: "Amrin",
      date: "Jun 25, 2023",
      category: "Artificial intelligence",
      image: "/blog2.jpg",
      slug: "test-webhook"
    },
    {
      id: 3,
      title: "The Power of UI/UX: Elevating Digital Experiences",
      author: "Jhon Doee",
      date: "Jun 18, 2023",
      category: "Api integration",
      image: "/blog3.jpg",
      slug: "the-power-of-ui-ux-elevating-digital-experiences"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-16 text-center">
          {/* Background Text */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-gray-200 select-none pointer-events-none">
            BLOGS
          </div>
          
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Latest News & Articles
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              From Our Blog
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                {/* Blog Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Author and Date */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mr-2"></div>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Separator */}
        <div className="mt-16 border-t border-gray-200"></div>
      </div>
    </section>
  );
};

export default BlogSection;
