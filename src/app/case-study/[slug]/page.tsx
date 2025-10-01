import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/config/assets';
import { colors } from '@/config/colors';
import Footer from '@/app/landing/Footer';

// Types for case study data
interface Collaborator {
  name: string;
  role: string;
}

interface CaseStudySection {
  title: string;
  subtitle: string;
  content: string;
  images: string[];
  layout: 'single' | 'two-column';
}

interface CaseStudy {
  title: string;
  subtitle: string;
  logo: string;
  heroImage: string;
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
    subtitle: 'SOLUTION DE GESTION',
    logo: '/images/photo_2019-03-21_11-48-55-2-6-233x91.jpg',
    heroImage: '/images/WhatsApp Image 2025-08-12 at 21.39.27_c4662c30.jpg',
    client: 'FAHE Automotive',
    date: '2024',
    role: 'Développement Web & Mobile',
    collaborators: [
      { name: 'Mohamed', role: 'Lead Developer' },
      { name: 'Team', role: 'Design & Development' },
    ],
    description: 'FAHE est un client du domaine automobile. Nous avons développé pour eux un CRM complet permettant de tracker leur visibilité en ligne, gérer leurs prospects, automatiser le check-in des véhicules et optimiser leur processus de service client.',
    mandat: {
      title: 'MANDAT',
      content: 'Concevoir et développer une solution CRM complète et personnalisée pour FAHE Automotive, intégrant la gestion des prospects, le suivi de la visibilité en ligne, l\'automatisation du check-in des véhicules et l\'optimisation du service client. La plateforme devait être intuitive, évolutive et adaptée aux besoins spécifiques du secteur automobile.'
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
        title: 'UN DESIGN MODERNE ET PROFESSIONNEL',
        subtitle: 'UNE INTERFACE PENSÉE POUR L\'UTILISATEUR',
        content: 'Nous avons créé une interface élégante et professionnelle qui reflète l\'image de marque de FAHE. Chaque élément a été soigneusement conçu pour offrir une expérience utilisateur optimale, avec une navigation intuitive et un design responsive adapté à tous les appareils.',
        images: [
          '/images/WhatsApp Image 2025-08-12 at 21.39.28_7f6acfb0.jpg',
          '/images/WhatsApp Image 2025-08-12 at 21.44.32_2de3c4e8.jpg',
        ],
        layout: 'two-column'
      },
      {
        title: 'UNE GESTION COMPLÈTE',
        subtitle: 'DES OUTILS PUISSANTS',
        content: 'Le système intègre tous les outils nécessaires à la gestion quotidienne : tableau de bord analytique, gestion des prospects, suivi des véhicules, et bien plus encore. Chaque fonctionnalité a été développée pour répondre aux besoins spécifiques du secteur automobile.',
        images: [
          '/images/WhatsApp Image 2025-08-12 at 21.44.33_39036a08.jpg',
          '/images/WhatsApp Image 2025-08-13 at 00.44.10_07507c30.jpg',
        ],
        layout: 'two-column'
      },
      {
        title: 'UNE PLATEFORME ÉVOLUTIVE',
        subtitle: 'PRÊTE POUR L\'AVENIR',
        content: 'L\'architecture technique a été conçue pour permettre l\'ajout facile de nouvelles fonctionnalités. La plateforme est scalable et peut s\'adapter à la croissance de l\'entreprise, tout en maintenant des performances optimales.',
        images: [
          '/images/WhatsApp Image 2025-08-02 at 20.14.36_327b3f82.jpg',
        ],
        layout: 'single'
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

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src={assets.logo}
                alt="PROGIX Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold" style={{ color: colors.primary }}>PROGIX</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-sm font-semibold transition-colors" style={{ color: colors.primary }}>
                Accueil
              </Link>
              <Link href="/#services" className="text-sm font-semibold transition-colors hover:opacity-70" style={{ color: colors.primary }}>
                Services
              </Link>
              <Link 
                href="/#contact" 
                className="text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                style={{ backgroundColor: colors.secondary }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-2" style={{ fontFamily: 'Hubot Sans, Inter, sans-serif', color: colors.primary }}>
                {caseStudy.title}
              </h1>
              <p className="text-2xl font-light tracking-wider" style={{ color: colors.secondary }}>
                {caseStudy.subtitle}
              </p>
            </div>
            {caseStudy.logo && (
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-xl border-2" style={{ borderColor: colors.secondary }}>
                <Image
                  src={caseStudy.logo}
                  alt={caseStudy.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            )}
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
          <div className="grid md:grid-cols-2 gap-16 mb-20">
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
                <div className="flex space-x-2">
                  {caseStudy.collaborators.map((collab: Collaborator, idx: number) => (
                    <div 
                      key={idx} 
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold text-white text-sm" 
                      style={{ backgroundColor: colors.secondary, borderColor: colors.primary }}
                      title={`${collab.name} - ${collab.role}`}
                    >
                      {collab.name.charAt(0)}
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

      {/* Mandat Section */}
      <div className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
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

      {/* Visual Divider */}
      <div className="h-2" style={{ backgroundColor: colors.secondary }}></div>

      {/* Objectifs Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12" style={{ color: colors.primary }}>{caseStudy.objectifs.title}</h2>
          <ul className="space-y-4">
            {caseStudy.objectifs.items.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-4" style={{ backgroundColor: colors.secondary }}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-200" style={{ color: colors.tertiary }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dynamic Sections */}
      {caseStudy.sections.map((section: CaseStudySection, idx: number) => (
        <div key={idx} className={`py-20 px-4 sm:px-6 lg:px-8 ${idx % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-blue-50/20 via-white to-cyan-50/10'}`}>
          <div className="max-w-7xl mx-auto">
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

            {/* Images */}
            {section.layout === 'two-column' ? (
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

      {/* CTA Section */}
      <div className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à démarrer votre projet&apos;?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-medium">
            Discutons de vos besoins et créons quelque chose d'exceptionnel ensemble.
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

