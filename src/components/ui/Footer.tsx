'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/config/assets';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src={assets.logo}
                alt="PROGIX Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">PROGIX</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Votre partenaire de confiance pour tous vos projets digitaux. 
              Nous transformons vos idées en solutions innovantes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Products</a></li>
              <li className="flex items-center">
                <a href="#" className="hover:text-gray-900 transition-colors">Careers</a>
                <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">Hiring</span>
              </li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Support</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Press Media</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Our Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Account</a></li>
            </ul>
          </div>

          {/* Column 4: Get in touch */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Get in touch</h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="text-sm text-gray-500">Toll Free Customer Care</p>
                <p className="text-gray-900 font-medium">+(1) 123 456 7890</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Need live support?</p>
                <p className="text-gray-900 font-medium">support@progix.pro</p>
              </div>
            </div>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to receive future updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-r-md transition-colors">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="flex flex-wrap items-center space-x-4 mb-4 md:mb-0">
              <span>English</span>
              <span>Privacy Policy</span>
              <span>Support</span>
            </div>
            <div>
              <p>&copy; 2025 PROGIX. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
