'use client';

import React, { useState } from 'react';

const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-16">
          {/* Background Text */}
          <div className="absolute -top-10 -left-20 text-8xl font-bold text-gray-200 select-none pointer-events-none">
            SUPPORT
          </div>
          
          <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Need Any Help?
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Say hello
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Donec vitae tortor aliquam ante.
              </p>
            </div>
            
            {/* Contact Email */}
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="border-t-2 border-gray-300 pt-4">
                <p className="text-lg text-gray-900">info@gostartup.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h4>
            <p className="text-gray-600">support@startup.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h4>
            <p className="text-gray-600">+009 8754 3433 223</p>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h4>
              <p className="text-gray-600">76/A, Green valle, Califonia USA.</p>
            </div>
            <div className="flex space-x-4 ml-4">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">f</div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">X</div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">in</div>
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-white text-sm font-bold">Bē</div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Type Subject"
                  className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Message Area */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type Message"
                rows={6}
                className="w-full px-0 py-3 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none text-gray-600 placeholder-gray-400 resize-none"
                required
              />
            </div>

            {/* Terms and Privacy Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label htmlFor="acceptTerms" className="text-sm text-gray-600">
                I have read the terms of the Service & I accept Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
