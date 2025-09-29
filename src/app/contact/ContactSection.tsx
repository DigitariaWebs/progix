'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { colors } from '@/config/colors';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    projectType: '',
    companyType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [progress, setProgress] = useState(0);
  const [projectSpecificAnswers, setProjectSpecificAnswers] = useState<Record<string, string>>({});

  const projectTypes = [
    { 
      id: 'web-app', 
      name: 'Application Web', 
      description: 'Sites web, plateformes SaaS',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      id: 'mobile-app', 
      name: 'Application Mobile', 
      description: 'iOS, Android, React Native',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
        </svg>
      )
    },
    { 
      id: 'crm', 
      name: 'CRM', 
      description: 'Gestion de la relation client',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 'erp', 
      name: 'ERP', 
      description: 'Planification des ressources',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      id: 'api', 
      name: 'Intégration API', 
      description: 'Connexions et automatisation',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    { 
      id: 'ecommerce', 
      name: 'E-commerce', 
      description: 'Boutiques en ligne',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      )
    },
    { 
      id: 'data', 
      name: 'Data & Analytics', 
      description: 'BI, tableaux de bord',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      id: 'other', 
      name: 'Autre', 
      description: 'Projet personnalisé',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const companyTypes = [
    { 
      id: 'startup', 
      name: 'Startup', 
      description: 'Jeune entreprise innovante',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'pme', 
      name: 'PME', 
      description: 'Petite et moyenne entreprise',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 'corporation', 
      name: 'Grande Entreprise', 
      description: 'Corporation établie',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l8-4v18M9 9h1m0 0h1m-1 0v1m0-1V8M9 13h1m0 0h1m-1 0v1m0-1v-1M9 17h1m0 0h1m-1 0v1m0-1v-1M13 9h1m0 0h1m-1 0v1m0-1V8M13 13h1m0 0h1m-1 0v1m0-1v-1M13 17h1m0 0h1m-1 0v1m0-1v-1" />
        </svg>
      )
    },
    { 
      id: 'institution', 
      name: 'Institution', 
      description: 'Organisme public/privé',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
        </svg>
      )
    },
    { 
      id: 'nonprofit', 
      name: 'OBNL', 
      description: 'Organisation à but non lucratif',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    { 
      id: 'freelance', 
      name: 'Indépendant', 
      description: 'Travailleur autonome',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  // Questions spécifiques par type de projet
  const projectSpecificQuestions: Record<string, { question: string; options: { id: string; name: string; description: string }[] }> = {
    'web-app': {
      question: 'Quel type d\'application web souhaitez-vous ?',
      options: [
        { id: 'site-vitrine', name: 'Site vitrine', description: 'Présentation de votre entreprise' },
        { id: 'plateforme-saas', name: 'Plateforme SaaS', description: 'Application avec abonnements' },
        { id: 'ecommerce-web', name: 'E-commerce', description: 'Boutique en ligne complète' },
        { id: 'intranet', name: 'Intranet', description: 'Plateforme interne d\'entreprise' }
      ]
    },
    'mobile-app': {
      question: 'Quelle plateforme mobile privilégiez-vous ?',
      options: [
        { id: 'ios-android', name: 'iOS + Android', description: 'Application sur les deux plateformes' },
        { id: 'ios-only', name: 'iOS uniquement', description: 'App Store seulement' },
        { id: 'android-only', name: 'Android uniquement', description: 'Google Play seulement' },
        { id: 'web-mobile', name: 'Web mobile', description: 'PWA responsive' }
      ]
    },
    'crm': {
      question: 'Quelles fonctionnalités CRM sont prioritaires ?',
      options: [
        { id: 'gestion-contacts', name: 'Gestion contacts', description: 'Base de données clients' },
        { id: 'suivi-ventes', name: 'Suivi des ventes', description: 'Pipeline et opportunités' },
        { id: 'marketing-auto', name: 'Marketing automation', description: 'Campagnes automatisées' },
        { id: 'service-client', name: 'Service client', description: 'Support et tickets' }
      ]
    },
    'erp': {
      question: 'Quels modules ERP vous intéressent le plus ?',
      options: [
        { id: 'comptabilite', name: 'Comptabilité', description: 'Gestion financière' },
        { id: 'inventaire', name: 'Inventaire', description: 'Gestion des stocks' },
        { id: 'ressources-humaines', name: 'Ressources Humaines', description: 'Gestion du personnel' },
        { id: 'production', name: 'Production', description: 'Planification manufacturière' }
      ]
    },
    'api': {
      question: 'Quel type d\'intégration API recherchez-vous ?',
      options: [
        { id: 'paiement', name: 'Paiement', description: 'Stripe, PayPal, etc.' },
        { id: 'communication', name: 'Communication', description: 'Email, SMS, notifications' },
        { id: 'donnees', name: 'Données', description: 'Synchronisation bases de données' },
        { id: 'personnalisee', name: 'Personnalisée', description: 'API sur mesure' }
      ]
    },
    'ecommerce': {
      question: 'Quelle est votre priorité e-commerce ?',
      options: [
        { id: 'catalogue', name: 'Catalogue produits', description: 'Présentation et organisation' },
        { id: 'paiement-securise', name: 'Paiement sécurisé', description: 'Transactions fiables' },
        { id: 'gestion-commandes', name: 'Gestion commandes', description: 'Workflow de vente' },
        { id: 'multi-vendeurs', name: 'Multi-vendeurs', description: 'Marketplace' }
      ]
    },
    'data': {
      question: 'Quel aspect data vous préoccupe le plus ?',
      options: [
        { id: 'tableaux-bord', name: 'Tableaux de bord', description: 'Visualisation en temps réel' },
        { id: 'analyse-predictive', name: 'Analyse prédictive', description: 'Machine learning' },
        { id: 'migration-donnees', name: 'Migration données', description: 'Transfert sécurisé' },
        { id: 'reporting', name: 'Reporting', description: 'Rapports automatisés' }
      ]
    },
    'other': {
      question: 'Dans quelle catégorie se situe votre projet ?',
      options: [
        { id: 'automatisation', name: 'Automatisation', description: 'Processus métier' },
        { id: 'intelligence-artificielle', name: 'Intelligence artificielle', description: 'IA et ML' },
        { id: 'blockchain', name: 'Blockchain', description: 'Technologies distribuées' },
        { id: 'iot', name: 'IoT', description: 'Objets connectés' }
      ]
    }
  };

  const getSuccessMessage = () => {
    const projectTypeNames = {
      'web-app': 'application web',
      'mobile-app': 'application mobile',
      'crm': 'CRM',
      'erp': 'ERP',
      'api': 'intégration API',
      'ecommerce': 'e-commerce',
      'data': 'data & analytics',
      'other': 'projet personnalisé'
    };

    const projectName = projectTypeNames[selectedProjectType] || 'projet';
    
    return `Merci ${formData.firstName} ! Votre demande pour ${projectName} a bien été reçue. Un consultant spécialisé vous contactera dans les 24 heures pour discuter de votre ${projectName} et vous proposer une solution sur mesure.`;
  };

  // Fonction de vibration tactile
  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibration légère de 50ms
    }
  };

  // Calcul du progrès
  const calculateProgress = () => {
    let completedFields = 0;
    let totalFields = 6; // firstName, lastName, company, email, projectType, companyType

    if (formData.firstName.trim()) completedFields++;
    if (formData.lastName.trim()) completedFields++;
    if (formData.company.trim()) completedFields++;
    if (formData.email.trim()) completedFields++;
    if (selectedProjectType) completedFields++;
    if (selectedCompanyType) completedFields++;

    // Si un projet est sélectionné, ajouter la question spécifique
    if (selectedProjectType && projectSpecificQuestions[selectedProjectType]) {
      totalFields = 7;
      if (projectSpecificAnswers[selectedProjectType]) completedFields++;
    }

    const newProgress = (completedFields / totalFields) * 100;
    setProgress(newProgress);
  };

  // Mise à jour du progrès à chaque changement
  React.useEffect(() => {
    calculateProgress();
  }, [formData, selectedProjectType, selectedCompanyType, projectSpecificAnswers]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vibration plus forte pour la soumission
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]); // Pattern de vibration: vibrer-pause-vibrer
    }
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    triggerHapticFeedback();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" 
           style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              Message envoyé avec succès !
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              {getSuccessMessage()}
            </p>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ backgroundColor: colors.secondary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" 
         style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)` }}>
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              Parlons de votre{' '}
              <span className="bg-white text-transparent bg-clip-text">projet</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              Racontez-nous votre vision et nous la transformerons en réalité digitale. 
              Notre équipe d'experts est prête à vous accompagner dans votre transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Barre de progression */}
            <div className="bg-gray-100 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Progression du formulaire
                </h3>
                <span className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${progress}%`, 
                    background: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                    boxShadow: progress > 0 ? '0 0 10px rgba(79, 163, 209, 0.3)' : 'none'
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                <span className={progress >= 14.29 ? 'text-blue-600 font-medium' : ''}>Infos</span>
                <span className={progress >= 28.57 ? 'text-blue-600 font-medium' : ''}>Entreprise</span>
                <span className={progress >= 42.86 ? 'text-blue-600 font-medium' : ''}>Email</span>
                <span className={progress >= 57.14 ? 'text-blue-600 font-medium' : ''}>Profil</span>
                <span className={progress >= 71.43 ? 'text-blue-600 font-medium' : ''}>Projet</span>
                <span className={progress >= 85.71 ? 'text-blue-600 font-medium' : ''}>Détails</span>
                <span className={progress >= 100 ? 'text-blue-600 font-medium' : ''}>Terminé</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              
              {/* Personal Info */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  Faisons connaissance
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Company Type */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  Quel type d'organisation vous correspond le mieux ?
                </h2>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Choisissez la catégorie qui décrit le mieux votre entreprise
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {companyTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedCompanyType(type.id);
                        setFormData({ ...formData, companyType: type.id });
                        triggerHapticFeedback();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedCompanyType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" 
                           style={{ backgroundColor: selectedCompanyType === type.id ? `${colors.secondary}20` : '#f3f4f6' }}>
                        <div style={{ color: selectedCompanyType === type.id ? colors.secondary : '#6b7280' }}>
                          {type.icon}
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        {type.name}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        {type.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  Quel type de projet vous intéresse ?
                </h2>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Choisissez le type de solution que vous souhaitez développer
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {projectTypes.map((project) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => {
                        setSelectedProjectType(project.id);
                        setFormData({ ...formData, projectType: project.id });
                        // Réinitialiser les réponses spécifiques si on change de type de projet
                        setProjectSpecificAnswers({});
                        triggerHapticFeedback();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedProjectType === project.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" 
                           style={{ backgroundColor: selectedProjectType === project.id ? `${colors.secondary}20` : '#f3f4f6' }}>
                        <div style={{ color: selectedProjectType === project.id ? colors.secondary : '#6b7280' }}>
                          {project.icon}
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                        {project.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions spécifiques au projet */}
              {selectedProjectType && projectSpecificQuestions[selectedProjectType] && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.secondary}20` }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {projectSpecificQuestions[selectedProjectType].question}
                  </h2>
                  <p className="text-gray-600 mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Cette information nous aide à mieux comprendre vos besoins spécifiques
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectSpecificQuestions[selectedProjectType].options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setProjectSpecificAnswers({ 
                            ...projectSpecificAnswers, 
                            [selectedProjectType]: option.id 
                          });
                          triggerHapticFeedback();
                        }}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                          projectSpecificAnswers[selectedProjectType] === option.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" 
                             style={{ backgroundColor: projectSpecificAnswers[selectedProjectType] === option.id ? `${colors.secondary}20` : '#f3f4f6' }}>
                          <div className="w-3 h-3 rounded-full" 
                               style={{ backgroundColor: projectSpecificAnswers[selectedProjectType] === option.id ? colors.secondary : '#9ca3af' }}>
                          </div>
                        </div>
                        <div className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                          {option.name}
                        </div>
                        <div className="text-sm text-gray-600" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                          {option.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${colors.secondary}20` }}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.secondary }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  Parlez-nous de votre projet
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}
                  placeholder="Décrivez votre vision, vos objectifs, vos contraintes ou toute information qui nous aiderait à mieux comprendre vos besoins..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={!formData.firstName || !formData.lastName || !formData.company || !formData.email || !selectedProjectType || !selectedCompanyType}
                  className="px-12 py-4 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  style={{ 
                    backgroundColor: colors.secondary, 
                    fontFamily: 'Hubot Sans, Inter, sans-serif' 
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lancer mon projet
                </button>
                <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Réponse garantie sous 24h • Consultation gratuite • Devis personnalisé
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
