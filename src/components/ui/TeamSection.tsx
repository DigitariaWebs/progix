'use client';

import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Olivia Andrium',
      title: 'Project Manager',
      image: '/images/team-1.jpg',
      description: 'Experienced project manager with expertise in agile methodologies and team coordination.'
    },
    {
      id: 2,
      name: 'Jemse Kemorun',
      title: 'Frontend Developer',
      image: '/images/team-2.jpg',
      description: 'Creative frontend developer specializing in React, Vue.js, and modern web technologies.'
    },
    {
      id: 3,
      name: 'Avi Pestarica',
      title: 'Product Designer',
      image: '/images/team-3.jpg',
      description: 'Innovative product designer focused on user experience and interface design.'
    },
    {
      id: 4,
      name: 'Liam Turner',
      title: 'Backend Developer',
      image: '/images/team-4.jpg',
      description: 'Skilled backend developer with a passion for building scalable and efficient server-side applications.'
    },
    {
      id: 5,
      name: 'Sophia Martinez',
      title: 'Marketing Specialist',
      image: '/images/team-5.jpg',
      description: 'Dynamic marketing specialist with a knack for crafting compelling brand stories and strategies.'
    },
    {
      id: 6,
      name: 'Noah Johnson',
      title: 'Data Analyst',
      image: '/images/team-6.jpg',
      description: 'Detail-oriented data analyst with expertise in data visualization and statistical analysis.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative mb-16 text-center">
          {/* Background Text */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-8xl font-bold text-blue-100 select-none pointer-events-none">
            OUR
          </div>
          
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Meet With Our Creative
              <br />
              Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Team Member Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                  <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-8xl text-gray-400">👤</div>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Team Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
