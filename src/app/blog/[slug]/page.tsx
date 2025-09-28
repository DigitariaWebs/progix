'use client';

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  content: string;
  slug: string;
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  // Mock blog data - in a real app, this would come from a CMS or API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Exploring MERN Stack: Powering Modern Web Development",
      author: "Jhon Doee",
      date: "Jun 18, 2023",
      category: "test",
      slug: "exploring-mern-stack-powering-modern-web-development",
      content: `
        <h2>Introduction to MERN Stack</h2>
        <p>The MERN stack is a popular JavaScript stack for building dynamic web applications. It consists of four key technologies:</p>
        <ul>
          <li><strong>MongoDB</strong> - A NoSQL database for storing data</li>
          <li><strong>Express.js</strong> - A web framework for Node.js</li>
          <li><strong>React</strong> - A JavaScript library for building user interfaces</li>
          <li><strong>Node.js</strong> - A JavaScript runtime for server-side development</li>
        </ul>
        
        <h3>Why Choose MERN Stack?</h3>
        <p>The MERN stack offers several advantages for modern web development:</p>
        <ul>
          <li>Full-stack JavaScript development</li>
          <li>Fast development and deployment</li>
          <li>Large community support</li>
          <li>Scalable architecture</li>
        </ul>
        
        <h3>Getting Started</h3>
        <p>To get started with MERN stack development, you'll need to set up your development environment and install the necessary tools. Start by creating a new project directory and initializing your package.json file.</p>
      `
    },
    {
      id: 2,
      title: "Test webhook",
      author: "Amrin",
      date: "Jun 25, 2023",
      category: "test",
      slug: "test-webhook",
      content: `
        <h2>Understanding Webhooks</h2>
        <p>Webhooks are HTTP callbacks that are triggered by specific events. They allow applications to communicate with each other in real-time.</p>
        
        <h3>How Webhooks Work</h3>
        <p>When an event occurs in a source application, it sends an HTTP POST request to a URL you specify. This URL is called a webhook endpoint.</p>
        
        <h3>Testing Webhooks</h3>
        <p>Testing webhooks is crucial for ensuring your integration works correctly. Here are some best practices:</p>
        <ul>
          <li>Use tools like ngrok for local testing</li>
          <li>Implement proper error handling</li>
          <li>Log webhook events for debugging</li>
          <li>Validate webhook signatures</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "The Power of UI/UX: Elevating Digital Experiences",
      author: "Jhon Doee",
      date: "Jun 18, 2023",
      category: "test",
      slug: "the-power-of-ui-ux-elevating-digital-experiences",
      content: `
        <h2>What is UI/UX Design?</h2>
        <p>UI (User Interface) and UX (User Experience) design are two closely related but distinct disciplines in digital product development.</p>
        
        <h3>UI Design</h3>
        <p>UI design focuses on the visual elements of a product - the buttons, icons, typography, colors, and layout that users interact with.</p>
        
        <h3>UX Design</h3>
        <p>UX design is about the overall experience a user has when interacting with a product. It encompasses usability, accessibility, and user satisfaction.</p>
        
        <h3>Key Principles</h3>
        <ul>
          <li>User-centered design approach</li>
          <li>Consistency across the interface</li>
          <li>Clear and intuitive navigation</li>
          <li>Accessibility for all users</li>
          <li>Performance optimization</li>
        </ul>
        
        <h3>Best Practices</h3>
        <p>To create exceptional digital experiences, designers should focus on understanding user needs, conducting thorough research, and iterating based on feedback.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Post Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <div className="w-8 h-8 bg-gray-400 rounded-full mr-3"></div>
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-400 rounded mr-2"></div>
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Post Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
            
            <div className="flex space-x-4">
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                Share on Twitter
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogPostPage;
