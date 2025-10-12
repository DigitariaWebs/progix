'use client';

import React from 'react';
import Image from 'next/image';
import CardSwap, { Card } from '@/components/CardSwap';
import ScrollVelocity from '@/components/ScrollVelocity';
import CircularText from '@/components/CircularText';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { colors } from '@/config/colors';
import Footer from '@/components/layout/Footer';
// Navbar removed to use global StaggeredMenu header
import { Squares } from '@/components/ui/squares-background';

// Types for case study data
interface Collaborator {
  name: string;
  role: string;
  image?: string;
}

interface CaseStudySection {
  title: string;
  subtitle: string;
  content: string;
  images: string[];
  layout: 'single' | 'two-column' | 'gallery' | 'architecture';
}

interface CaseStudy {
  title: string;
  subtitle: string;
  logo: string;
  heroImage: string;
  heroVideo?: string;
  client: string;
  date: string;
  role: string;
  collaborators: Collaborator[];
  description: string;
  mandat: {
    title: string;
    content: string;
  };
  objectifs: {
    title: string;
    items: string[];
  };
  sections: CaseStudySection[];
}

// Case study data - you can move this to a separate file or database
const caseStudies: Record<string, CaseStudy> = {
  'fahe-crm': {
    title: 'FAHE CRM',
    subtitle: 'UNE FIRME DE DÉVELOPPEMENT LOGICIEL FIÈREMENT MONTRÉALAISE',
    logo: '/images/photo_2019-03-21_11-48-55-2-6-233x91.jpg',
    heroImage: '/images/WhatsApp Image 2025-10-08 at 20.20.25.jpeg',
    heroVideo: '/images/video.mp4',
    client: 'FAHE Automotive',
    date: '2024',
    role: 'Développement Web & Mobile',
    collaborators: [
      { name: 'Daani Abderrahman', role: 'Lead Developer', image: '/images of the team/1758914011397.jpg' },
      { name: 'Mohamed Duneche', role: 'Full Stack Developer', image: '/images of the team/1757886357065.jpg' },
      { name: 'Jean Boissoneault', role: 'Design & Development', image: '/images of the team/1649105009859.jpg' },
    ],
    description: 'FAHE est un client du domaine automobile. Nous avons développé pour eux un CRM complet permettant de tracker leur visibilité en ligne, gérer leurs prospects, automatiser le check-in des véhicules et optimiser leur processus de service client.',
    mandat: {
      title: 'MANDAT',
      content: 'Concevoir une solution CRM complète et moderne, tout en repensant l\'expérience utilisateur pour la rendre plus intuitive et efficace. La plateforme devait refléter l\'identité de marque de FAHE Automotive et mettre en valeur son positionnement distinctif dans le secteur automobile, tout en intégrant des fonctionnalités avancées de gestion des prospects et d\'automatisation des processus.'
    },
    objectifs: {
      title: 'OBJECTIFS',
      items: [
        'Développer un système de gestion des prospects efficace et automatisé',
        'Intégrer des outils de tracking de la visibilité en ligne en temps réel',
        'Créer un module de check-in des véhicules simplifié et intuitif',
        'Optimiser le processus de service client avec des workflows automatisés',
        'Assurer une interface utilisateur moderne et responsive',
        'Garantir la sécurité et la confidentialité des données clients',
        'Permettre une évolutivité facile pour des fonctionnalités futures'
      ]
    },
    sections: [
      {
        title: 'UNE EXPÉRIENCE IMMERSIVE',
        subtitle: 'DÉCOUVREZ LE CRM EN ACTION',
        content: 'Plongez dans l\'univers FAHE avec cette démonstration interactive qui vous montre toutes les fonctionnalités de notre solution CRM. De la gestion des prospects à l\'automatisation des processus, découvrez comment nous avons transformé leur façon de travailler.',
        images: [
          '/CRMFAHE/CRMSCREEN1.png',
          '/CRMFAHE/Screenshot 2025-10-08 224826.png',
          '/CRMFAHE/Screenshot 2025-10-08 225008.png',
          '/CRMFAHE/Screenshot 2025-10-08 225558.png',
          '/CRMFAHE/Screenshot 2025-10-08 230044.png',
        ],
        layout: 'gallery'
      },
      {
        title: 'ARCHITECTURE ÉVOLUTIVE',
        subtitle: 'PRÊTE POUR L\'AVENIR',
        content: 'L\'architecture technique a été conçue pour permettre l\'ajout facile de nouvelles fonctionnalités. La plateforme est scalable et peut s\'adapter à la croissance de l\'entreprise, tout en maintenant des performances optimales.',
        images: [],
        layout: 'architecture'
      }
    ]
  },
  'fruitexotic': {
    title: 'FruitExotic',
    subtitle: 'SITE WEB MULTILINGUE',
    logo: '/images/crustys.png',
    heroImage: '/fruitexo.mp4',
    client: 'FruitExotic Inc.',
    date: '2024',
    role: 'Développement Web Frontend & UI/UX',
    collaborators: [
      { name: 'Design Team', role: 'UI/UX Design' },
      { name: 'Frontend Team', role: 'Development' },
    ],
    description: 'FruitExotic Inc. est une entreprise spécialisée dans l\'exportation de fruits exotiques de qualité premium. Nous avons développé leur site web international multilingue (7 langues) pour mettre en valeur leurs services de la meilleure façon grâce à nos développeurs frontend et designers UI/UX d\'élite, créant une expérience digitale exceptionnelle qui reflète l\'excellence de leurs produits exotiques.',
    mandat: {
      title: 'MANDAT',
      content: 'Concevoir et développer un site web international multilingue pour FruitExotic Inc., capable de communiquer efficacement dans 7 langues différentes. Le site devait refléter la qualité premium de leurs produits exotiques tout en offrant une expérience utilisateur exceptionnelle à travers différentes cultures et marchés.'
    },
    objectifs: {
      title: 'OBJECTIFS',
      items: [
        'Créer un site web multilingue supportant 7 langues',
        'Développer une interface visuellement captivante reflétant le côté exotique',
        'Optimiser l\'expérience utilisateur pour différents marchés internationaux',
        'Mettre en valeur la qualité premium des produits',
        'Assurer une performance optimale sur tous les appareils',
        'Intégrer une gestion de contenu facile pour les mises à jour multilingues',
        'Créer une identité visuelle forte et cohérente'
      ]
    },
    sections: [
      {
        title: 'UNE EXPÉRIENCE MULTILINGUE',
        subtitle: 'ACCESSIBLE À TOUS',
        content: 'Nous avons développé un système de gestion multilingue sophistiqué permettant une navigation fluide entre 7 langues. Chaque langue a été soigneusement adaptée pour respecter les nuances culturelles et offrir une expérience authentique.',
        images: [
          '/images/crustys.png',
        ],
        layout: 'single'
      },
      {
        title: 'DESIGN VISUEL CAPTIVANT',
        subtitle: 'L\'EXCELLENCE DES PRODUITS EXOTIQUES',
        content: 'Notre équipe de designers UI/UX d\'élite a créé une interface visuellement époustouflante qui met en valeur la beauté et la qualité des fruits exotiques. Chaque élément du design a été pensé pour évoquer l\'exotisme et le premium.',
        images: [
          '/images/crustys (1).png',
        ],
        layout: 'single'
      }
    ]
  },
  'coride': {
    title: 'CoRide',
    subtitle: 'APPLICATION DE MOBILITÉ',
    logo: '/images/logo-gold.png',
    heroImage: '/images/WhatsApp Image 2025-08-12 at 21.44.33_39036a08.jpg',
    client: 'CoRide',
    date: '2024',
    role: 'Développement Mobile & Web Full Stack',
    collaborators: [
      { name: 'Mobile Team', role: 'Flutter Development' },
      { name: 'Backend Team', role: 'Node.js Development' },
      { name: 'Web Team', role: 'Frontend Development' },
    ],
    description: 'CoRide est une application de mobilité multi-services révolutionnaire. Notre équipe a développé une solution complète incluant une app mobile Flutter (transport privé, livraison, food delivery), un backend Node.js robuste et une refonte totale de leur site vitrine, créant un écosystème digital intégré et évolutif.',
    mandat: {
      title: 'MANDAT',
      content: 'Développer un écosystème complet de mobilité multi-services pour CoRide, incluant une application mobile native performante, un backend robuste et scalable, ainsi qu\'un site web vitrine moderne. La solution devait intégrer trois services majeurs : transport privé, livraison de colis et food delivery, le tout dans une interface unifiée et intuitive.'
    },
    objectifs: {
      title: 'OBJECTIFS',
      items: [
        'Développer une application mobile Flutter performante et fluide',
        'Créer un backend Node.js scalable et sécurisé',
        'Intégrer trois services distincts : transport, livraison et food delivery',
        'Développer un système de géolocalisation en temps réel',
        'Implémenter un système de paiement sécurisé et flexible',
        'Créer un tableau de bord pour les chauffeurs et livreurs',
        'Refondre complètement le site vitrine avec une UX moderne',
        'Assurer une synchronisation parfaite entre l\'app et le backend'
      ]
    },
    sections: [
      {
        title: 'APPLICATION MOBILE FLUTTER',
        subtitle: 'PERFORMANCE ET FLUIDITÉ',
        content: 'Nous avons développé une application mobile native avec Flutter, offrant des performances exceptionnelles et une expérience utilisateur fluide sur iOS et Android. L\'application intègre trois services dans une interface intuitive et élégante.',
        images: [
          '/imagesmobileapp/659b09824ee19afb14262ffe_yield-studio-app-levitation-p-800.webp',
          '/imagesmobileapp/appmobile image du bloc 1.png',
        ],
        layout: 'two-column'
      },
      {
        title: 'BACKEND ROBUSTE',
        subtitle: 'NODE.JS & ARCHITECTURE SCALABLE',
        content: 'Notre équipe backend a développé une architecture robuste avec Node.js, capable de gérer des milliers de requêtes simultanées. Le système inclut la gestion en temps réel des courses, la géolocalisation, les notifications push et un système de paiement sécurisé.',
        images: [
          '/images/data_management_illustration.svg',
        ],
        layout: 'single'
      },
      {
        title: 'SITE VITRINE MODERNE',
        subtitle: 'REFONTE COMPLÈTE',
        content: 'Nous avons entièrement repensé le site web de CoRide avec une approche moderne et engageante. Le nouveau site met en avant les trois services offerts, facilite les téléchargements de l\'app et offre une expérience utilisateur exceptionnelle.',
        images: [
          '/imagesmobileapp/images bloc2 app mobile.png',
        ],
        layout: 'single'
      }
    ]
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-rotate {
          animation: rotate 10s linear infinite;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      {/* Navigation */}
      {/* Navbar removed */}
      

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 overflow-hidden">
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

        <div className="max-w-6xl mx-auto relative z-10 pt-6 md:pt-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.primary }}>
                {caseStudy.title}
              </h1>
              <p className="text-2xl font-light tracking-wider" style={{ color: colors.secondary }}>
                {caseStudy.subtitle}
              </p>
            </div>
            {/* Replace small circle logo with CircularText badge */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div className="absolute inset-0">
                <CircularText text="FAHE CRM • PROGIX • " className="text-white" />
              </div>
              </div>
          </div>

          {/* Hero Image/Video */}
          <div className="relative h-[400px] md:h-[500px] mb-16 overflow-hidden rounded-lg shadow-2xl">
            {caseStudy.heroImage.endsWith('.mp4') ? (
              <video
                src={caseStudy.heroImage}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-2 gap-16 mb-20 max-w-5xl mx-auto">
            {/* Left Column - Project Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: colors.secondary }}>Client</h3>
                <p className="text-lg font-semibold" style={{ color: colors.primary }}>{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: colors.secondary }}>Date</h3>
                <p className="text-lg font-semibold" style={{ color: colors.primary }}>{caseStudy.date}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: colors.secondary }}>Rôle</h3>
                <p className="text-lg font-semibold" style={{ color: colors.primary }}>{caseStudy.role}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase mb-2" style={{ color: colors.secondary }}>Collaborateurs</h3>
                <div className="flex space-x-3">
                  {caseStudy.collaborators.map((collab: Collaborator, idx: number) => (
                    <div 
                      key={idx} 
                      className="relative group"
                    >
                      <div 
                        className="w-14 h-14 rounded-full border-3 overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
                        style={{ borderColor: colors.secondary }}
                      >
                        {collab.image ? (
                          <Image
                            src={collab.image}
                            alt={collab.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div 
                            className="w-full h-full flex items-center justify-center font-bold text-white text-sm"
                            style={{ backgroundColor: colors.secondary }}
                    >
                      {collab.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      
                      {/* Tooltip with name */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                          <div className="font-semibold">{collab.name}</div>
                          <div className="text-gray-300">{collab.role}</div>
                          {/* Arrow */}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-lg leading-relaxed font-medium" style={{ color: colors.tertiary }}>
                {caseStudy.description}
              </p>
            </div>
          </div>
        </div>
      </div>

    {/* Transition separator BEFORE Mandat (between previous block and "Notre Mission") */}
    <div className="py-6 md:py-4">
      <ScrollVelocity
        texts={["NOTRE MISSION", "NOTRE MISSION"]}
        velocity={90}
        className=""
        parallaxStyle={{ padding: '0.5rem 0' }}
        scrollerStyle={{ gap: '2rem' }}
      />
    </div>

    {/* Immersive Video Section - Only for FAHE CRM */}
      {caseStudy.heroVideo && (
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src={caseStudy.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
          </div>
          
          {/* Content Layout */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Side - Title */}
                <div className="text-left">
                  <div className="inline-block mb-6">
                    <span className="text-sm font-bold uppercase tracking-wider text-white/80 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                      {caseStudy.mandat.title}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                    Notre
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Mission
                    </span>
                  </h2>
                  
                  {/* Decorative Line */}
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mb-8"></div>
                </div>
                
                {/* Right Side - Content */}
                <div className="relative">
                  {/* Text with underline accent */}
                  <div className="relative">
                    <p className="text-xl md:text-2xl leading-relaxed text-white font-light mb-8">
                      {caseStudy.mandat.content}
                    </p>
                    
                    {/* Decorative underline */}
                    <div className="absolute -bottom-4 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                  </div>
                  
                  {/* Key points as floating elements */}
                  <div className="mt-12 space-y-6">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/80 font-medium">Solution CRM complète et moderne</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/80 font-medium">Expérience utilisateur repensée et intuitive</p>
                    </div>
                    
                    <div className="flex items-start space-x-4 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-white/80 font-medium">Identité de marque FAHE Automotive mise en valeur</p>
                    </div>
                  </div>
                  
                  {/* Floating accent elements */}
                  <div className="absolute -top-8 -right-8 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 border border-white/5 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
              
              {/* Bottom Decorative Elements */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-4">
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse delay-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Traditional Mandat Section - For other case studies */}
      {!caseStudy.heroVideo && (
      <div className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        </div>
          <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">{caseStudy.mandat.title}</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-white/90 font-medium">
                {caseStudy.mandat.content}
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Impact & Résultats - clean white section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
              IMPACT & RÉSULTATS
            </h2>
          </div>
          <ul className="space-y-4 text-gray-900 text-lg leading-relaxed list-none">
            <li className="flex items-start"><span className="mt-3 mr-3 w-2 h-2 bg-gray-900 rounded-full"></span> Vue complète et centralisée des stocks et des historiques.</li>
            <li className="flex items-start"><span className="mt-3 mr-3 w-2 h-2 bg-gray-900 rounded-full"></span> 60% d’absences en moins grâce aux rappels automatiques (SMS / email).</li>
            <li className="flex items-start"><span className="mt-3 mr-3 w-2 h-2 bg-gray-900 rounded-full"></span> Processus d’accueil et de vente simplifiés, temps de traitement réduit.</li>
            <li className="flex items-start"><span className="mt-3 mr-3 w-2 h-2 bg-gray-900 rounded-full"></span> Données client sécurisées et accessibles par autorisations.</li>
            <li className="flex items-start"><span className="mt-3 mr-3 w-2 h-2 bg-gray-900 rounded-full"></span> Indicateurs clairs pour piloter les opérations au quotidien.</li>
          </ul>
        </div>
      </div>

      {/* Objectifs Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/1757001640677.jpg"
                    alt="Objectifs FAHE CRM"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-block mb-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                    {caseStudy.objectifs.title}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.primary, fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                  Nos objectifs
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    stratégiques
                  </span>
                </h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mb-8"></div>
              </div>
              
              <div className="space-y-6">
            {caseStudy.objectifs.items.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 mr-4 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium group-hover:translate-x-2 transition-transform duration-300" style={{ color: colors.tertiary }}>
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom accent */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border-l-4 border-blue-500">
                <p className="text-gray-700 font-medium italic">
                  &ldquo;Chaque objectif a été soigneusement défini pour garantir le succès du projet FAHE CRM et maximiser l&apos;impact sur leur activité.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Sections */}
      {caseStudy.sections.map((section: CaseStudySection, idx: number) => (
        <div key={idx} className={`py-20 px-4 sm:px-6 lg:px-8 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-blue-50/20 via-white to-cyan-50/10'}`}>
          <div className="max-w-6xl mx-auto">
            {section.layout !== 'gallery' && (
              <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                <div>
                  <h2 className="text-5xl font-bold mb-2 leading-tight" style={{ color: colors.primary }}>
                    {section.title}
                  </h2>
                  <p className="text-xl font-light" style={{ color: colors.secondary }}>
                    {section.subtitle}
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed font-medium" style={{ color: colors.tertiary }}>
                    {section.content}
                  </p>
                </div>
              </div>
            )}

            {/* Images */}
            {section.layout === 'gallery' ? (
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  {/* Left column: title + subtitle (restored) */}
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Un CRM pensé pour les vrais besoins du terrain.</h3>
                    <p className="text-gray-600 text-lg">Suivi des clients, automatisation des tâches, facturation, communication interne — tout est intégré. Chaque module a été conçu à partir de retours réels d’entreprises, pour offrir un outil à la fois puissant et intuitif.</p>
                  </div>

                  {/* Right column: CardSwap gallery */}
                  <div style={{ height: '600px', position: 'relative' }}>
                    <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
                      {section.images.slice(0, 6).map((img: string, idx: number) => (
                        <Card key={idx}>
                          <div className="w-full h-full relative rounded-xl bg-white">
                            <Image src={img} alt={`FAHE ${idx + 1}`} fill className="object-contain" />
                            {/* Top-left badge with icon and label */}
                            <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-white/95 border border-[#4FA3D1] rounded-md shadow-sm">
                              <svg className="w-3.5 h-3.5 text-[#4FA3D1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6l-2 4-4 .5 3 3-.8 4.5L12 16l3.8 2-1-4.5 3-3-4-.5z" />
                              </svg>
                              <span className="text-xs font-semibold text-[#1B363C]">
                                {idx === 0 && 'Tableau de bord'}
                                {idx === 1 && 'Gestion clients'}
                                {idx === 2 && 'Rendez-vous'}
                                {idx === 3 && 'Rapports'}
                                {idx === 4 && 'Configuration'}
                                {idx > 4 && 'Aperçu'}
                              </span>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </CardSwap>
                  </div>
                </div>
              </div>
            ) : section.layout === 'architecture' ? (
              <div className="relative">
                {/* Architecture Diagram */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Architecture FAHE CRM</h3>
                    <p className="text-gray-600">Architecture en couches pour une évolutivité optimale</p>
                  </div>
                  
                  {/* Custom Progix Architecture Diagram */}
                  <div className="relative max-w-6xl mx-auto">
                    {/* Custom SVG Architecture */}
                    <svg viewBox="0 0 1000 700" className="w-full h-auto">
                      {/* Background */}
                      <defs>
                        <linearGradient id="progixBg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f8fafc"/>
                          <stop offset="100%" stopColor="#e0f2fe"/>
                        </linearGradient>
                        <linearGradient id="progixPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0A2456"/>
                          <stop offset="100%" stopColor="#1e3a8a"/>
                        </linearGradient>
                        <linearGradient id="progixSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4FA3D1"/>
                          <stop offset="100%" stopColor="#3b82f6"/>
                        </linearGradient>
                        <linearGradient id="progixAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#B2BEC3"/>
                          <stop offset="100%" stopColor="#94a3b8"/>
                        </linearGradient>
                        <filter id="progixShadow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#0A2456" floodOpacity="0.2"/>
                        </filter>
                      </defs>
                      
                      {/* Background */}
                      <rect width="1000" height="700" fill="url(#progixBg)" rx="20"/>
                      
                      {/* Title */}
                      <text x="500" y="40" textAnchor="middle" fill="#0A2456" fontSize="24" fontWeight="bold" fontFamily="Hubot Sans, Inter, sans-serif">
                        Architecture FAHE CRM
                      </text>
                      <text x="500" y="65" textAnchor="middle" fill="#64748b" fontSize="14">
                        Conçue par Progix - Architecture moderne et évolutive
                      </text>
                      
                      {/* Layer 1: Frontend */}
                      <rect x="100" y="100" width="180" height="80" rx="12" fill="url(#progixPrimary)" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="190" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Frontend</text>
                      <text x="190" y="150" textAnchor="middle" fill="white" fontSize="12">React & Next.js</text>
                      <text x="190" y="165" textAnchor="middle" fill="#e2e8f0" fontSize="10">Interface Utilisateur</text>
                      
                      <rect x="320" y="100" width="180" height="80" rx="12" fill="url(#progixPrimary)" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="410" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Mobile App</text>
                      <text x="410" y="150" textAnchor="middle" fill="white" fontSize="12">React Native</text>
                      <text x="410" y="165" textAnchor="middle" fill="#e2e8f0" fontSize="10">Application Mobile</text>
                      
                      <rect x="540" y="100" width="180" height="80" rx="12" fill="url(#progixPrimary)" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="630" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Admin Panel</text>
                      <text x="630" y="150" textAnchor="middle" fill="white" fontSize="12">Dashboard</text>
                      <text x="630" y="165" textAnchor="middle" fill="#e2e8f0" fontSize="10">Gestion & Analytics</text>
                      
                      {/* Layer 2: API Gateway */}
                      <rect x="250" y="220" width="200" height="80" rx="12" fill="url(#progixSecondary)" stroke="#4FA3D1" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="350" y="250" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">API Gateway</text>
                      <text x="350" y="270" textAnchor="middle" fill="white" fontSize="12">Express.js & Node.js</text>
                      <text x="350" y="285" textAnchor="middle" fill="#e2e8f0" fontSize="10">Authentification & Routage</text>
                      
                      <rect x="500" y="220" width="200" height="80" rx="12" fill="url(#progixSecondary)" stroke="#4FA3D1" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="600" y="250" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">WebSocket</text>
                      <text x="600" y="270" textAnchor="middle" fill="white" fontSize="12">Temps Réel</text>
                      <text x="600" y="285" textAnchor="middle" fill="#e2e8f0" fontSize="10">Notifications Live</text>
                      
                      {/* Layer 3: Business Logic */}
                      <rect x="200" y="340" width="180" height="80" rx="12" fill="url(#progixAccent)" stroke="#B2BEC3" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="290" y="370" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">CRM Service</text>
                      <text x="290" y="390" textAnchor="middle" fill="white" fontSize="12">Gestion Clients</text>
                      <text x="290" y="405" textAnchor="middle" fill="#e2e8f0" fontSize="10">Prospects & Ventes</text>
                      
                      <rect x="420" y="340" width="180" height="80" rx="12" fill="url(#progixAccent)" stroke="#B2BEC3" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="510" y="370" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Notification Service</text>
                      <text x="510" y="390" textAnchor="middle" fill="white" fontSize="12">SMS & Email</text>
                      <text x="510" y="405" textAnchor="middle" fill="#e2e8f0" fontSize="10">Alertes Automatiques</text>
                      
                      <rect x="640" y="340" width="180" height="80" rx="12" fill="url(#progixAccent)" stroke="#B2BEC3" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="730" y="370" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Analytics Service</text>
                      <text x="730" y="390" textAnchor="middle" fill="white" fontSize="12">Rapports & Stats</text>
                      <text x="730" y="405" textAnchor="middle" fill="#e2e8f0" fontSize="10">Données & Insights</text>
                      
                      {/* Layer 4: Data Layer */}
                      <rect x="200" y="460" width="180" height="80" rx="12" fill="#0A2456" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="290" y="490" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">PostgreSQL</text>
                      <text x="290" y="510" textAnchor="middle" fill="white" fontSize="12">Base de Données</text>
                      <text x="290" y="525" textAnchor="middle" fill="#e2e8f0" fontSize="10">Données Principales</text>
                      
                      <rect x="420" y="460" width="180" height="80" rx="12" fill="#0A2456" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="510" y="490" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Redis Cache</text>
                      <text x="510" y="510" textAnchor="middle" fill="white" fontSize="12">Cache & Session</text>
                      <text x="510" y="525" textAnchor="middle" fill="#e2e8f0" fontSize="10">Performance</text>
                      
                      <rect x="640" y="460" width="180" height="80" rx="12" fill="#0A2456" stroke="#0A2456" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="730" y="490" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">File Storage</text>
                      <text x="730" y="510" textAnchor="middle" fill="white" fontSize="12">Documents & Images</text>
                      <text x="730" y="525" textAnchor="middle" fill="#e2e8f0" fontSize="10">Stockage Fichiers</text>
                      
                      {/* External Services */}
                      <rect x="50" y="340" width="120" height="60" rx="8" fill="#10b981" stroke="#059669" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="110" y="365" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">SMS API</text>
                      <text x="110" y="380" textAnchor="middle" fill="white" fontSize="10">Twilio</text>
                      <text x="110" y="390" textAnchor="middle" fill="#e2e8f0" fontSize="9">Notifications</text>
                      
                      <rect x="50" y="420" width="120" height="60" rx="8" fill="#10b981" stroke="#059669" strokeWidth="2" filter="url(#progixShadow)"/>
                      <text x="110" y="445" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Email API</text>
                      <text x="110" y="460" textAnchor="middle" fill="white" fontSize="10">SendGrid</text>
                      <text x="110" y="470" textAnchor="middle" fill="#e2e8f0" fontSize="9">Campagnes</text>
                      
                      {/* Arrows */}
                      <defs>
                        <marker id="progixArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0,0 0,6 8,3" fill="#0A2456"/>
                        </marker>
                        <marker id="progixArrowBlue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0,0 0,6 8,3" fill="#4FA3D1"/>
                        </marker>
                        <marker id="progixArrowGray" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                          <polygon points="0,0 0,6 8,3" fill="#B2BEC3"/>
                        </marker>
                        <marker id="progixArrowGreen" markerWidth="4" markerHeight="3" refX="3" refY="1.5" orient="auto">
                          <polygon points="0,0 0,3 4,1.5" fill="#10b981"/>
                        </marker>
                      </defs>
                      
                      {/* Flow arrows - shorter */}
                      <path d="M190 180 L320 220" stroke="#0A2456" strokeWidth="2" fill="none" markerEnd="url(#progixArrow)"/>
                      <path d="M410 180 L380 220" stroke="#0A2456" strokeWidth="2" fill="none" markerEnd="url(#progixArrow)"/>
                      <path d="M630 180 L620 220" stroke="#0A2456" strokeWidth="2" fill="none" markerEnd="url(#progixArrow)"/>
                      
                      <path d="M350 300 L320 340" stroke="#4FA3D1" strokeWidth="2" fill="none" markerEnd="url(#progixArrowBlue)"/>
                      <path d="M600 300 L540 340" stroke="#4FA3D1" strokeWidth="2" fill="none" markerEnd="url(#progixArrowBlue)"/>
                      <path d="M600 300 L680 340" stroke="#4FA3D1" strokeWidth="2" fill="none" markerEnd="url(#progixArrowBlue)"/>
                      
                      <path d="M290 420 L290 450" stroke="#B2BEC3" strokeWidth="2" fill="none" markerEnd="url(#progixArrowGray)"/>
                      <path d="M510 420 L510 450" stroke="#B2BEC3" strokeWidth="2" fill="none" markerEnd="url(#progixArrowGray)"/>
                      <path d="M730 420 L730 450" stroke="#B2BEC3" strokeWidth="2" fill="none" markerEnd="url(#progixArrowGray)"/>
                      
                      {/* External connections - much shorter */}
                      <path d="M170 370 L200 370" stroke="#10b981" strokeWidth="1" fill="none" markerEnd="url(#progixArrowGreen)"/>
                      <path d="M170 450 L200 450" stroke="#10b981" strokeWidth="1" fill="none" markerEnd="url(#progixArrowGreen)"/>
                      
                      {/* Layer labels */}
                      <text x="30" y="140" fill="#64748b" fontSize="12" fontWeight="bold" transform="rotate(-90 30 140)">Frontend</text>
                      <text x="30" y="260" fill="#64748b" fontSize="12" fontWeight="bold" transform="rotate(-90 30 260)">API Layer</text>
                      <text x="30" y="380" fill="#64748b" fontSize="12" fontWeight="bold" transform="rotate(-90 30 380)">Business</text>
                      <text x="30" y="500" fill="#64748b" fontSize="12" fontWeight="bold" transform="rotate(-90 30 500)">Data</text>
                      
                      {/* Progix Logo */}
                      <circle cx="900" cy="100" r="40" fill="url(#progixPrimary)" stroke="#0A2456" strokeWidth="3" filter="url(#progixShadow)"/>
                      <text x="900" y="95" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">P</text>
                      <text x="900" y="110" textAnchor="middle" fill="white" fontSize="12">ROGIX</text>
                    </svg>
                    
                    {/* Architecture Description */}
                    <div className="mt-8 text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Architecture FAHE CRM</h3>
                      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Architecture moderne en couches conçue par Progix pour FAHE Automotive. 
                        Cette structure garantit la scalabilité, la sécurité et les performances optimales 
                        avec une séparation claire des responsabilités et une évolutivité maximale.
                      </p>
                    </div>
                    
                    {/* Architecture Benefits */}
                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">Performance</h4>
                        <p className="text-sm text-gray-600">Architecture optimisée pour des temps de réponse rapides</p>
                      </div>
                      
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">Évolutivité</h4>
                        <p className="text-sm text-gray-600">Facile d&apos;ajouter de nouvelles fonctionnalités</p>
                      </div>
                      
                      <div className="text-center p-4 bg-white/50 rounded-xl">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">Sécurité</h4>
                        <p className="text-sm text-gray-600">Architecture sécurisée avec validation des données</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.layout === 'two-column' ? (
              <div className="grid md:grid-cols-2 gap-8">
                {section.images.map((img: string, imgIdx: number) => (
                  <div key={imgIdx} className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border-2 hover:scale-105 transition-transform duration-300" style={{ borderColor: colors.secondary }}>
                    <Image
                      src={img}
                      alt={`${section.title} ${imgIdx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 hover:scale-[1.02] transition-transform duration-300" style={{ borderColor: colors.secondary }}>
                <Image
                  src={section.images[0]}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

          </div>
        </div>
      ))}

      {/* Immersive CTA Section - Only for FAHE CRM */}
      {caseStudy.heroVideo && (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Parallax Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            
            {/* Floating Geometric Shapes */}
            <div className="absolute top-20 left-20 w-20 h-20 border-2 border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute top-40 right-32 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-40 w-24 h-24 border-2 border-white/30 rotate-12 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/20 rounded-full animate-ping"></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif' }}>
                PRÊT À TRANSFORMER
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VOTRE BUSINESS ?
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 mb-12">
              <p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
                Comme FAHE Automotive, donnez vie à votre vision digitale avec notre équipe d&apos;experts.
                <br />
                <span className="font-semibold text-blue-300">Une solution sur mesure vous attend.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Démarrer mon projet</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/portfolio"
                  className="px-12 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Réponse garantie 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span className="text-sm font-medium">Consultation gratuite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                <span className="text-sm font-medium">Solutions sur mesure</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Traditional CTA Section - For other case studies */}
      {!caseStudy.heroVideo && (
      <div className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet&apos;?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-medium">
            Discutons de vos besoins et créons quelque chose d&apos;exceptionnel ensemble.
          </p>
          <Link
            href="/#contact"
            className="inline-block text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ backgroundColor: colors.secondary }}
          >
            Contactez-nous
          </Link>
        </div>
      </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

