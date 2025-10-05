'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const colors = {
  primary: '#1B363C',
  secondary: '#4FA3D1',
};

const TeamPage = () => {

  const certifications = [
    'AWS Certified Solutions Architect – Professional',
    'Microsoft Certified: Azure Solutions Architect Expert',
    'Google Professional Cloud Architect',
    'CKA / CKAD (Kubernetes)',
    'HashiCorp Terraform Associate',
    'PMI-PMP',
    'Professional Scrum Master (PSM I/II)',
  ];

  const techStack = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Go', 'Java', 'C#', 'Kotlin', 'Swift', 'Dart', 'C/C++', 'Rust', 'SQL'],
    frameworks: ['Node.js', 'Deno', '.NET', 'Spring Boot', 'NestJS', 'Express', 'FastAPI', 'Django', 'Flask', 'Ruby on Rails', 'Laravel', 'Phoenix/Elixir'],
    frontend: ['React', 'Next.js', 'Vue', 'Nuxt', 'Svelte/SvelteKit', 'Angular', 'React Native', 'Flutter', 'SwiftUI', 'Kotlin Multiplatform'],
    data: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'MLflow', 'Kubeflow', 'Airflow', 'dbt', 'Great Expectations'],
    cloud: ['AWS (EKS, ECS, Lambda, RDS, S3)', 'Azure (AKS, Functions, SQL)', 'GCP (GKE, Cloud Run, BigQuery)', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Pulumi', 'Ansible'],
    databases: ['PostgreSQL', 'MySQL', 'SQL Server', 'MariaDB', 'SQLite', 'MongoDB', 'Redis', 'DynamoDB', 'Cassandra', 'Kafka', 'RabbitMQ', 'NATS'],
  };

  return (
    <div className="bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/landing" className="flex items-center">
              <Image
                src="/images/logo (3).webp"
                alt="PROGIX Logo"
                priority
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
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="font-heading font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="font-heading font-bold transition-colors"
                style={{ color: colors.secondary }}
              >
                Notre équipe
              </Link>
              <Link
                href="/portfolio"
                className="font-heading font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="font-heading font-bold text-gray-900 hover:text-gray-700 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ backgroundColor: colors.secondary }}
              >
                Démarrer un projet
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Faire du code
                <br />
                <span style={{ color: colors.secondary }}>pour être bien.</span>
                <br />
                <span className="text-3xl md:text-4xl text-gray-300">
                  Être bien pour faire du code.
                </span>
              </h1>
              <p
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                On est Progix — 9 ingénieurs logiciels basés à Montréal,
                bilingues français/anglais, qui transforment des problèmes
                costauds en logiciels qui tournent en prod.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ backgroundColor: colors.secondary }}
                >
                  Travaillons ensemble
                </Link>
                <Link
                  href="#story"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  Notre histoire
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images of the team/WhatsApp Image 2025-09-29 at 12.30.27.jpeg"
                  alt="Équipe PROGIX"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">L&apos;équipe PROGIX</p>
                  <p className="text-sm text-gray-300">Montréal, 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section id="story" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.primary,
              }}
            >
              Notre histoire
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              On a longtemps cherché notre mission. On voulait savoir à tout
              prix ce qu&apos;on allait accomplir à long terme, quelle était
              notre destination ?
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* Nous, en deux mots */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/images of the team/1719935496854.jpg"
                    alt="Équipe PROGIX au travail"
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center">
                      <div
                        className="text-4xl font-bold mb-1"
                        style={{ color: colors.secondary }}
                      >
                        9
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: colors.primary }}
                      >
                        Ingénieurs
                        <br />
                        Logiciels
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    / À propos
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold mb-6"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  Nous, en deux mots
                </h3>
                <p
                  className="text-lg leading-relaxed mb-8 text-gray-600"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  On est Progix — 9 ingénieurs logiciels basés à Montréal,
                  bilingues français/anglais, qui aiment transformer des
                  problèmes costauds en logiciels qui tournent en prod. Web,
                  mobile, DevOps, desktop, data/ML, blockchain, intégration
                  complexe : on vit pour ça.
                </p>
                <div
                  className="p-6 rounded-xl border-l-4"
                  style={{
                    backgroundColor: 'rgba(79, 163, 209, 0.05)',
                    borderColor: colors.secondary,
                  }}
                >
                  <p
                    className="text-base text-gray-700 font-medium"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    <strong>Ancien nom :</strong> Digitaria.
                    <br />
                    On a switché pour Progix en août 2025 pour refléter qui on
                    est vraiment : une équipe d&apos;expertise logicielle, pas
                    une agence web/marketing.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Ce qu'on fait - avec image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-1">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    / Expertise
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold mb-6"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  Ce qu&apos;on fait (et bien)
                </h3>
                <p
                  className="text-lg leading-relaxed mb-8 text-gray-600"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  On a découvert au fil des années qu&apos;une des choses qui
                  unit tous les membres de notre équipe, ce n&apos;est pas
                  seulement de faire du code, mais plutôt de rendre nos clients
                  heureux et d&apos;avoir un impact.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Produits web & mobiles',
                      desc: 'front/back, APIs, microservices',
                      icon: '🌐',
                    },
                    {
                      title: 'DevOps & SRE',
                      desc: 'CI/CD, IaC, observabilité, fiabilité',
                      icon: '⚙️',
                    },
                    {
                      title: 'Migration & intégration',
                      desc: 'API, legacy → cloud, modernisation',
                      icon: '🔄',
                    },
                    {
                      title: 'Data & ML en production',
                      desc: 'pipelines, MLOps, déploiement',
                      icon: '📊',
                    },
                    {
                      title: 'Blockchain',
                      desc: "permissionnée, cas d'usage métier",
                      icon: '⛓️',
                    },
                    {
                      title: 'CRM/ERP & outils métiers',
                      desc: 'custom, interop, perf',
                      icon: '🛠️',
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <div className="text-2xl">{service.icon}</div>
                      <div>
                        <h4
                          className="font-semibold mb-1 group-hover:text-blue-600 transition-colors"
                          style={{
                            color: colors.primary,
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="order-2">
                <div className="relative">
                  <Image
                    src="/images of the team/1755055191293.jpg"
                    alt="Équipe PROGIX en action"
                    width={600}
                    height={500}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">En mode focus</p>
                    <p className="text-sm text-gray-200">
                      Quand le code coule de source
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pour qui & Notre façon de bosser - Section avec background */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {/* Pour qui */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <Image
                    src="/images of the team/1757886357065.jpg"
                    alt="Équipe PROGIX en réunion"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">
                      Brainstorming session
                    </p>
                    <p className="text-sm text-gray-200">
                      Résoudre des problèmes complexes
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    / Clients
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold mb-6"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  Pour qui ?
                </h3>
                <p
                  className="text-lg leading-relaxed mb-8 text-gray-600"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Honnêtement, pour toute organisation qui a un vrai enjeu
                  logiciel, avec un focus naturel sur les moyennes et grandes
                  entreprises au Canada. On adore quand il y a de la complexité,
                  des contraintes réelles et un impact concret.
                </p>
                <div className="space-y-4">
                  {[
                    '🏢 Moyennes et grandes entreprises',
                    '🇨🇦 Partout au Canada',
                    '🧩 Problèmes complexes',
                    '🎯 Impact concret',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{item.split(' ')[0]}</span>
                      <span className="text-gray-700 font-medium">
                        {item.substring(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Notre façon de bosser */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="order-1">
                <div className="mb-4">
                  <span
                    className="text-sm font-bold uppercase tracking-wide"
                    style={{ color: colors.secondary }}
                  >
                    / Méthode
                  </span>
                </div>
                <h3
                  className="text-4xl font-bold mb-6"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  Notre façon de bosser
                </h3>
                <p
                  className="text-lg leading-relaxed mb-8 text-gray-600"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                >
                  Remote-first, avec 2–3 présences/semaine au bureau pour les
                  ateliers d&apos;archi, les revues et les sprints critiques. On
                  livre tôt, on mesure, on itère. Pas de blabla inutile, des
                  incréments qui valent quelque chose.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: '🏠', text: 'Remote-first avec flexibilité' },
                    { icon: '🤝', text: '2-3 présences/semaine au bureau' },
                    { icon: '🚀', text: 'On livre tôt, on mesure, on itère' },
                    {
                      icon: '💎',
                      text: 'Des incréments qui valent quelque chose',
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-700 font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-2">
                <div className="relative">
                  <Image
                    src="/images of the team/1758914011397.jpg"
                    alt="Équipe PROGIX en collaboration"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-semibold">Collaboration</p>
                    <p className="text-sm text-gray-200">
                      Remote-first, mais ensemble quand ça compte
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Progix Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Pourquoi Progix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4">
                <span
                  className="text-sm font-bold uppercase tracking-wide"
                  style={{ color: colors.secondary }}
                >
                  / Valeurs
                </span>
              </div>
              <h2
                className="text-5xl font-bold mb-6"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                  color: colors.primary,
                }}
              >
                Pourquoi Progix
              </h2>
              <p
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Notre objectif n&apos;est pas la croissance à tout prix, mais
                d&apos;assurer le bien-être de notre équipe et de nos clients.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: 'Seniorité compacte',
                    description: '9 profils qui se complètent, zéro silos.',
                    icon: '🎯',
                    color: 'from-blue-500 to-cyan-500',
                  },
                  {
                    title: 'Ingénierie exigeante',
                    description: 'Qualité, tests, sécurité by default.',
                    icon: '⚡',
                    color: 'from-purple-500 to-pink-500',
                  },
                  {
                    title: 'Time-to-value court',
                    description: 'On livre rapidement du tangible.',
                    icon: '🚀',
                    color: 'from-green-500 to-teal-500',
                  },
                  {
                    title: 'Accompagnement complet',
                    description: "Du cadrage à l'exploitation.",
                    icon: '🤝',
                    color: 'from-orange-500 to-red-500',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                      {/* Background gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      ></div>

                      {/* Icon */}
                      <div className="relative z-10 mb-6">
                        <div
                          className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white shadow-lg`}
                        >
                          {item.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3
                          className="text-xl font-bold mb-4 group-hover:text-gray-800 transition-colors"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                            color: colors.primary,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-gray-600 leading-relaxed"
                          style={{
                            fontFamily: 'Hubot Sans, Inter, sans-serif',
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Stack Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-32 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wide text-blue-400">
                / Expertise reconnue
              </span>
            </div>
            <h2
              className="text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Certifications & distinctions
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Selon les profils de l&apos;équipe ; exemples représentatifs
              appréciés au Canada.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {certifications.slice(0, 6).map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <p
                    className="text-sm font-medium text-center text-white"
                    style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  >
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'OCTAS (Réseau Action TI)',
                'Prix NUMIX',
                'Deloitte Technology Fast 50',
                'Great Place to Work',
              ].map((distinction, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium shadow-lg"
                >
                  {distinction}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="mb-4">
              <span
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: colors.secondary }}
              >
                / Technologies
              </span>
            </div>
            <h2
              className="text-5xl font-bold mb-6"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.primary,
              }}
            >
              Notre stack (on aime quand c&apos;est varié)
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Une palette technologique riche pour répondre à tous vos défis
              logiciels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(
              ([category, technologies], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3
                    className="text-xl font-bold mb-6 capitalize"
                    style={{
                      fontFamily: 'Hubot Sans, Inter, sans-serif',
                      color: colors.primary,
                    }}
                  >
                    {category === 'frontend'
                      ? '🎨 Front & mobile'
                      : category === 'data'
                        ? '📊 Data & ML'
                        : category === 'cloud'
                          ? '☁️ Cloud & DevOps'
                          : category === 'databases'
                            ? '🗄️ Bases de données'
                            : category === 'languages'
                              ? '💻 Langages'
                              : category === 'frameworks'
                                ? '🏗️ Frameworks'
                                : category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.slice(0, 8).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {technologies.length > 8 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">
                        +{technologies.length - 8} autres
                      </span>
                    )}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-800 to-cyan-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Montréal, bilingues, proches
            </h2>
            <p
              className="text-xl text-white/90 mb-8"
              style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              On travaille depuis Montréal, en français et en anglais. On
              connaît bien les réalités locales (sécurité, conformité,
              bilinguisme, délais, budgets publics/privés) et on sait naviguer
              avec vos équipes partout au Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-white px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  color: colors.primary,
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                }}
              >
                Travaillons ensemble
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-white/10"
                style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
              >
                Nous recrutons
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo (3).webp"
                alt="PROGIX Logo"
                width={120}
                height={120}
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                Solutions logicielles sur mesure pour les organisations
                ambitieuses
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Tous les services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-software"
                    className="hover:text-white transition-colors"
                  >
                    Logiciels sur mesure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/web-application"
                    className="hover:text-white transition-colors"
                  >
                    Applications web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-application"
                    className="hover:text-white transition-colors"
                  >
                    Applications mobiles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="/team"
                    className="hover:text-white transition-colors"
                  >
                    Notre équipe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Montréal, Québec</li>
                <li>
                  <a
                    href="mailto:info@progix.ca"
                    className="hover:text-white transition-colors"
                  >
                    info@progix.ca
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 PROGIX. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;
