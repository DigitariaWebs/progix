'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '@/config/colors';
import { teamMembers, TeamMember } from '@/data/teamData';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const getSelectedMemberData = (): TeamMember | null => {
    return teamMembers.find(member => member.id === selectedMember) || null;
  };

  const renderTeamMemberCard = (member: TeamMember) => (
    <motion.div
      key={member.id}
      className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="text-center">
        {/* Photo */}
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              style={member.id === 'arselene' ? {
                objectPosition: 'center top',
                transform: 'scale(1.1)',
              } : {}}
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {member.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {member.skills}
        </p>

        <div className="flex space-x-3 justify-center">
          <button
            onClick={() => setSelectedMember(member.id)}
            className="px-4 py-2 text-sm font-bold text-white rounded-lg transition-colors duration-200 hover:opacity-90"
            style={{
              backgroundColor: colors.secondary,
              fontFamily: 'Hubot Sans, Inter, sans-serif',
            }}
          >
            Voir profil
          </button>
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  const renderMemberModal = (member: TeamMember) => (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full overflow-hidden">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            )}
          </div>
          <div>
            <h2
              className="text-2xl font-bold text-gray-900"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              {member.name}
            </h2>
            <p
              className="text-lg text-gray-600"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              {member.role}
            </p>
            <p
              className="text-sm text-gray-500"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              PROGIX • Montréal, Québec, Canada
            </p>
          </div>
        </div>
        <button
          onClick={() => setSelectedMember(null)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* About */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Notre équipe
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {member.description}
        </p>
        {member.id === 'ilyes' && (
          <p className="text-gray-700 leading-relaxed mt-4">
            Mon expertise couvre les technologies modernes comme React.js, Node.js, Express.js, Flask, PostgreSQL et MongoDB. Je maîtrise également Docker, les APIs REST/GraphQL, l&apos;authentification sécurisée (JWT, OAuth2, RBAC) et les pipelines CI/CD.
          </p>
        )}
        {member.id === 'fadi' && (
          <p className="text-gray-700 leading-relaxed mt-4">
            Mon approche consiste à concevoir des applications performantes qui répondent aux besoins métier tout en maintenant une architecture propre et maintenable. J&apos;aime travailler sur des projets challengeants qui me permettent d&apos;explorer de nouvelles technologies.
          </p>
        )}
        {member.id === 'daani' && (
          <p className="text-gray-700 leading-relaxed mt-4">
            En tant qu&apos;Analyste-Programmeur et spécialiste Microsoft .NET chez PROGIX, j&apos;accompagne nos clients dans les secteurs RH, paie et énergie en concevant des solutions logicielles robustes. Mon expertise couvre C#, ASP.NET, les microservices et les architectures modernes.
          </p>
        )}
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Expérience
        </h3>
        <div className="space-y-6">
          {member.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h4
                className="font-semibold text-gray-900"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                {exp.title} - {exp.company}
              </h4>
              <p
                className="text-sm text-gray-600"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                {exp.period} • {exp.location}
              </p>
              <p
                className="text-gray-700 mt-2"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                {exp.description}
              </p>
              {member.id === 'daani' && index === 0 && (
                <p
                  className="text-gray-700 mt-2"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  <strong>Technologies :</strong> SQL Server, REST API, Gravitee, microservices, architecture MVC, méthodologies SAFe/Agile, DDD/ATDD, TFS/GitLab/BitBucket.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Compétences principales
        </h3>
        <div className="flex flex-wrap gap-2">
          {member.mainSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Formation
        </h3>
        <div className="border-l-4 border-purple-500 pl-4">
          <h4 className="font-semibold text-gray-900">
            {member.education.degree}
          </h4>
          <p className="text-sm text-gray-600">
            {member.education.institution}
            {member.education.period && ` • ${member.education.period}`}
          </p>
          {member.education.details && (
            <p className="text-gray-700 mt-1">
              {member.education.details}
            </p>
          )}
        </div>
      </div>

      {/* Methodologies (for Daani) */}
      {member.methodologies && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Méthodologies & Approches
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {member.methodologies.map((method, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4
                  className="font-semibold text-gray-900 mb-2"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  {method.title}
                </h4>
                <p
                  className="text-sm text-gray-600"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact */}
      <div className="flex space-x-4 pt-6 border-t">
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>Voir LinkedIn</span>
        </a>
        <a
          href="https://www.progix.pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Site web</span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="team-title text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Une petite équipe d&apos;ingénieurs montréalais
              <br />
              <span style={{ color: colors.secondary }}>
                (et un gentil designer)
              </span>
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(renderTeamMemberCard)}
          </div>
        </div>
      </section>

      {/* Team Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {getSelectedMemberData() && renderMemberModal(getSelectedMemberData()!)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection;
