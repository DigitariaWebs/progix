'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { colors } from '@/config/colors';
import { Squares } from '@/components/ui/squares-background';
import Partners from '@/components/Partners';

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
  const [selectedTimeline, setSelectedTimeline] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
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

  // Options de timeline
  const timelineOptions = [
    { id: '1month', name: "D'ici 1 mois", description: 'Projet urgent' },
    { id: '3months', name: "D'ici 3 mois", description: 'Planning serré' },
    { id: '6months', name: "D'ici 6 mois", description: 'Développement standard' },
    { id: '12months', name: "D'ici 12 mois", description: 'Projet à long terme' }
  ];

  // Options de budget
  const budgetOptions = [
    { id: 'small', name: '5K - 15K CAD', description: 'Projet simple' },
    { id: 'medium', name: '15K - 50K CAD', description: 'Projet standard' },
    { id: 'large', name: '50K - 150K CAD', description: 'Projet complexe' },
    { id: 'enterprise', name: '150K+ CAD', description: 'Solution enterprise' }
  ];

  // Sources de découverte
  const sourceOptions = [
    { id: 'google', name: 'Google', description: 'Recherche en ligne' },
    { id: 'linkedin', name: 'LinkedIn', description: 'Réseau professionnel' },
    { id: 'referral', name: 'Recommandation', description: "Bouche-à-oreille" },
    { id: 'social', name: 'Réseaux sociaux', description: 'Facebook, Instagram...' },
    { id: 'event', name: 'Événement', description: 'Conférence, salon...' },
    { id: 'other', name: 'Autre', description: 'Autre source' }
  ];

  // Questions spécifiques par type de projet
  const projectSpecificQuestions = useMemo(() => ({
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
  }), []);

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

    const projectName = projectTypeNames[selectedProjectType as keyof typeof projectTypeNames] || 'projet';
    
    return `Merci ${formData.firstName} ! Votre demande pour ${projectName} a bien été reçue. Un consultant spécialisé vous contactera dans les 24 heures pour discuter de votre ${projectName} et vous proposer une solution sur mesure.`;
  };

  // Fonction de vibration tactile
  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50); // Vibration légère de 50ms
    }
  };

  // Calcul du progrès
  const calculateProgress = useCallback(() => {
    let completedFields = 0;
    let totalFields = 9; // companyType, projectType, timeline, budget, source, firstName, lastName, company, email

    if (selectedCompanyType) completedFields++;
    if (selectedProjectType) completedFields++;
    if (selectedTimeline) completedFields++;
    if (selectedBudget) completedFields++;
    if (selectedSource) completedFields++;
    if (formData.firstName.trim()) completedFields++;
    if (formData.lastName.trim()) completedFields++;
    if (formData.company.trim()) completedFields++;
    if (formData.email.trim()) completedFields++;

    // Si un projet est sélectionné, ajouter la question spécifique
    if (selectedProjectType && projectSpecificQuestions[selectedProjectType]) {
      totalFields = 10;
      if (projectSpecificAnswers[selectedProjectType]) completedFields++;
    }

    const newProgress = (completedFields / totalFields) * 100;
    setProgress(newProgress);
  }, [formData, selectedProjectType, selectedCompanyType, selectedTimeline, selectedBudget, selectedSource, projectSpecificAnswers, projectSpecificQuestions]);

  // Mise à jour du progrès à chaque changement
  React.useEffect(() => {
    calculateProgress();
  }, [calculateProgress]);

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
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4"  >
              Merci ! L&apos;équipe PROGIX a bien reçu votre demande
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8"  >
              {getSuccessMessage()}
              <br /><br />
              <strong>Prochaines étapes :</strong>
              <br />
              1. Un consultant spécialisé analysera votre demande
              <br />
              2. Nous vous contacterons dans les 24h pour discuter
              <br />
              3. Première consultation gratuite pour définir votre solution
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
    <div className="min-h-screen" style={{ backgroundColor: '#f8fafc' }}>
      {/* Logo PROGIX en haut à gauche */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-30">
        <Image
          src="/images/logo.png"
          onClick={() => (window.location.href = '/landing')}
          alt="PROGIX"
          width={128}
          height={128}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-contain cursor-pointer"
        />
      </div>

      {/* Branded Header */}
      <div className="relative overflow-hidden">
        {/* Squares Background */}
        <div className="absolute inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.2}
            squareSize={50}
            borderColor="#e2e8f0"
            hoverFillColor={colors.secondary}
          />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-1">
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-400 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-400 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
          {/* Badge */}
          <div className="text-center mb-8">
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                color: colors.primary,
              }}
            >
              Développement logiciel sur mesure depuis Montréal
            </div>
          </div>

          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.primary,
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Transformons votre{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                  vision
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-600 rounded-full "></div>
              </span>
              <br />
              en réalité digitale
            </h1>

            <p
              className="text-lg max-w-4xl mx-auto leading-relaxed mb-6"
              style={{
                fontFamily: 'Hubot Sans, Inter, sans-serif',
                color: colors.tertiary,
              }}
            >
              Comme <strong>David de Desjardins</strong>,{' '}
              <strong>Hakim d&apos;iBusiness</strong> et{' '}
              <strong>Daniel du Ministère des Finances</strong>, faites
              confiance à notre équipe d&apos;ingénieurs pour développer des
              solutions sur mesure qui s&apos;intègrent parfaitement à vos
              processus.
            </p>

            {/* Stats/Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  50+
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.secondary,
                  }}
                >
                  Projets réalisés
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  24h
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.secondary,
                  }}
                >
                  Délai de réponse
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.primary,
                  }}
                >
                  100%
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                    color: colors.secondary,
                  }}
                >
                  Sur mesure
                </div>
              </div>
            </div>

            {/* Contact direct */}
            <div
              className="inline-flex items-center gap-4 px-6 py-3 rounded-full"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                color: colors.tertiary,
              }}
            >
              <span className="text-sm">Ou appelez Ilyes directement :</span>
              <a
                href="tel:+15145765993"
                className="font-semibold transition-colors"
                style={{
                  fontFamily: 'Hubot Sans, Inter, sans-serif',
                  color: colors.secondary,
                }}
              >
                +1 514 576 5993
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div
        className="relative pt-8 sm:pt-12 lg:pt-16 pb-20"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Barre de progression */}
            <div className="bg-gray-100 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs sm:text-sm font-medium text-gray-700">
                  L&apos;équipe PROGIX découvre votre projet
                </h3>
                <span className="text-xs sm:text-sm font-medium text-gray-700">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                    boxShadow:
                      progress > 0
                        ? '0 0 10px rgba(79, 163, 209, 0.3)'
                        : 'none',
                  }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs sm:text-xs text-gray-500 gap-1">
                <span
                  className={`truncate ${progress >= 10 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Profil
                </span>
                <span
                  className={`truncate ${progress >= 20 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Projet
                </span>
                <span
                  className={`truncate hidden xs:inline ${progress >= 30 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Quand
                </span>
                <span
                  className={`truncate hidden sm:inline ${progress >= 40 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Budget
                </span>
                <span
                  className={`truncate hidden sm:inline ${progress >= 50 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Source
                </span>
                <span
                  className={`truncate ${progress >= 60 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Détails
                </span>
                <span
                  className={`truncate ${progress >= 70 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Contact
                </span>
                <span
                  className={`truncate hidden xs:inline ${progress >= 90 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Message
                </span>
                <span
                  className={`truncate ${progress >= 100 ? 'text-blue-600 font-medium' : ''}`}
                >
                  Fini
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Company Type */}
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2 sm:mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  Pour qui?
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Chez PROGIX, nous adaptons nos solutions à chaque type
                  d&apos;organisation
                </p>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
                  {companyTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setSelectedCompanyType(type.id);
                        setFormData({ ...formData, companyType: type.id });
                        triggerHapticFeedback();
                      }}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 active:scale-95 ${
                        selectedCompanyType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3"
                        style={{
                          backgroundColor:
                            selectedCompanyType === type.id
                              ? `${colors.secondary}20`
                              : '#f3f4f6',
                        }}
                      >
                        <div
                          style={{
                            color:
                              selectedCompanyType === type.id
                                ? colors.secondary
                                : '#6b7280',
                          }}
                        >
                          {type.icon}
                        </div>
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                        {type.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {type.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  Quoi?
                </h2>
                <p className="text-gray-600 mb-6">
                  Notre expertise couvre tous les domaines du développement
                  logiciel
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          backgroundColor:
                            selectedProjectType === project.id
                              ? `${colors.secondary}20`
                              : '#f3f4f6',
                        }}
                      >
                        <div
                          style={{
                            color:
                              selectedProjectType === project.id
                                ? colors.secondary
                                : '#6b7280',
                          }}
                        >
                          {project.icon}
                        </div>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {project.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Questions spécifiques au projet */}
              {selectedProjectType &&
                projectSpecificQuestions[selectedProjectType] && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                        style={{ backgroundColor: `${colors.secondary}20` }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: colors.secondary }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      {projectSpecificQuestions[selectedProjectType].question}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Nos ingénieurs PROGIX personnalisent chaque solution selon
                      vos préférences
                    </p>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-2">
                      {projectSpecificQuestions[
                        selectedProjectType
                      ].options.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setProjectSpecificAnswers({
                              ...projectSpecificAnswers,
                              [selectedProjectType]: option.id,
                            });
                            triggerHapticFeedback();
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                            projectSpecificAnswers[selectedProjectType] ===
                            option.id
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                            style={{
                              backgroundColor:
                                projectSpecificAnswers[selectedProjectType] ===
                                option.id
                                  ? `${colors.secondary}20`
                                  : '#f3f4f6',
                            }}
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor:
                                  projectSpecificAnswers[
                                    selectedProjectType
                                  ] === option.id
                                    ? colors.secondary
                                    : '#9ca3af',
                              }}
                            ></div>
                          </div>
                          <div className="font-semibold text-gray-900 mb-1">
                            {option.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              {/* Timeline Section - Quand? */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  Quand?
                </h2>
                <p className="text-gray-600 mb-6">
                  PROGIX s&apos;adapte à votre planning, même les projets
                  urgents !
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {timelineOptions.map((timeline) => (
                    <button
                      key={timeline.id}
                      type="button"
                      onClick={() => {
                        setSelectedTimeline(timeline.id);
                        triggerHapticFeedback();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedTimeline === timeline.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          backgroundColor:
                            selectedTimeline === timeline.id
                              ? `${colors.secondary}20`
                              : '#f3f4f6',
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            color:
                              selectedTimeline === timeline.id
                                ? colors.secondary
                                : '#6b7280',
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {timeline.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {timeline.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Section - Combien? */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  Combien?
                </h2>
                <p className="text-gray-600 mb-6">
                  Transparence totale : nos tarifs sont adaptés à chaque budget
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget.id}
                      type="button"
                      onClick={() => {
                        setSelectedBudget(budget.id);
                        triggerHapticFeedback();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedBudget === budget.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          backgroundColor:
                            selectedBudget === budget.id
                              ? `${colors.secondary}20`
                              : '#f3f4f6',
                        }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{
                            color:
                              selectedBudget === budget.id
                                ? colors.secondary
                                : '#6b7280',
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {budget.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {budget.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Source Section - Où? */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  Où?
                </h2>
                <p className="text-gray-600 mb-6">
                  Aidez-nous à améliorer notre présence et à mieux vous servir
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {sourceOptions.map((source) => (
                    <button
                      key={source.id}
                      type="button"
                      onClick={() => {
                        setSelectedSource(source.id);
                        triggerHapticFeedback();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:scale-105 ${
                        selectedSource === source.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                        style={{
                          backgroundColor:
                            selectedSource === source.id
                              ? `${colors.secondary}20`
                              : '#f3f4f6',
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor:
                              selectedSource === source.id
                                ? colors.secondary
                                : '#9ca3af',
                          }}
                        ></div>
                      </div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {source.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {source.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  Qui?
                </h2>
                <p className="text-gray-600 mb-6">
                  Parfait ! L&apos;équipe PROGIX est impatiente de faire votre
                  connaissance
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${colors.secondary}20` }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.secondary }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  Parlez-nous de votre projet
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                  placeholder="Décrivez votre vision, vos objectifs, vos contraintes ou toute information qui nous aiderait à mieux comprendre vos besoins..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.company ||
                    !formData.email ||
                    !selectedProjectType ||
                    !selectedCompanyType
                  }
                  className="px-12 py-4 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  style={{
                    backgroundColor: colors.secondary,
                    fontFamily: 'Hubot Sans, Inter, sans-serif',
                  }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Lancer mon projet
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Réponse garantie sous 24h • Consultation gratuite • Devis
                  personnalisé
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Client Trust Section - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="p-16 text-center bg-white w-full rounded-3xl items-center justify-center">
            <p className="text-2xl font-bold text-gray-900   mb-8">
              <strong>
                Rejoignez les 50+ entreprises qui nous font confiance
              </strong>
            </p>

            {/* Client Logos */}
            <Partners />

            {/* Final CTA */}
            <div
              className="mt-12 p-8 rounded-2xl"
              style={{ backgroundColor: `${colors.primary}10` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Prêt à transformer votre vision en réalité ?
              </h3>
              <p className="text-gray-600 mb-6">
                L&apos;équipe PROGIX vous contactera dans les{' '}
                <strong>24 heures</strong> pour discuter de votre projet.
                <br />
                <em>Première consultation gratuite, toujours.</em>
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  ></div>
                  <span>Réponse garantie 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  ></div>
                  <span>Consultation gratuite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.secondary }}
                  ></div>
                  <span>Solutions sur mesure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
