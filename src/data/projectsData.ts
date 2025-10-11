export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  industry: string;
  description: string;
  fullDescription: string;
  imageLogo?: string;
  posterImage: string;
  posterImageHover: string;
  heroImage: string;
  twoImages: string[];
  video: string;
  tags: string[];
  year: string;
  featured: boolean;
  client: string;
  services: string[];
  projectUrl?: string;
  results?: {
    metric: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'CoRide',
    slug: 'coride',
    category: 'IOT',
    industry: 'GOVERNMENT',
    description:
      'Application mobile multi-services disponible sur App Store et Play Store',
    fullDescription:
      "Application mobile multi-services développée avec Flutter offrant transport privé, livraison, food delivery et bien plus. Notre équipe a accompagné le client dans la création de son application mobile ainsi que dans la refonte complète de sa vitrine web. Un backend robuste basé sur Node.js/Express avec une architecture moderne assure fluidité et évolutivité. Le nouveau site vitrine reflète parfaitement l'identité de la marque et présente clairement les services, les valeurs et l'expansion de CoRide.",
    imageLogo: '/Projects/CoRide/CoRideLogo.png',
    heroImage: '/Projects/CoRide/HeroImage.png',
    posterImage: '/Projects/CoRide/PosterImage.png',
    posterImageHover: '/Projects/CoRide/PosterImageHover.png',
    twoImages: [
      '/Projects/CoRide/PosterImage.png',
      '/Projects/CoRide/PosterImageHover.png',
    ],
    video: '/Projects/CoRide/CoRideVideo.mp4',
    tags: [
      'Flutter',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Google Maps',
    ],
    year: '2024',
    featured: true,
    client: 'CoRide Inc.',
    services: [
      'Développement Mobile Flutter',
      'Backend Node.js/Express',
      'Refonte Site Web',
      'Architecture Moderne',
      'Multi-services',
    ],
    projectUrl: 'https://coride-pink.vercel.app',
    results: [
      {
        metric: 'Utilisateurs actifs',
        value: '5000+',
      },
      {
        metric: 'Trajets complétés',
        value: '15000+',
      },
    ],
  },
  {
    id: '2',
    title: 'Centre Fahe Mechanics',
    slug: 'centre-fahe-mechanics',
    category: 'E-COMMERCE',
    industry: 'RETAIL',
    description: 'Un système de gestion complet pour centre automobile',
    fullDescription:
      "Développement d'une plateforme web complète de gestion pour un centre automobile, incluant la gestion des rendez-vous, l'inventaire des pièces, le suivi des réparations et la facturation client.",
    imageLogo: '/Projects/CentreFaheMechanics/CentreFaheMechanicsLogo.png',
    heroImage: '/Projects/CentreFaheMechanics/HeroImage.png',
    posterImage: '/Projects/CentreFaheMechanics/PosterImage.png',
    posterImageHover: '/Projects/CentreFaheMechanics/PosterImageHover.png',
    twoImages: [
      '/Projects/CentreFaheMechanics/PosterImage.png',
      '/Projects/CentreFaheMechanics/PosterImageHover.png',
    ],
    video: '/Projects/CentreFaheMechanics/CentreFaheMechanicsVideo.mp4',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2024',
    featured: true,
    client: 'Centre Fahe',
    services: [
      'Développement Web',
      'Système de Gestion',
      'Intégration Paiement',
    ],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Réduction du temps de traitement',
        value: '60%',
      },
      {
        metric: 'Satisfaction client',
        value: '95%',
      },
    ],
  },
  {
    id: '3',
    title: 'Confortplus65',
    slug: 'confortplus65',
    category: 'HEALTHCARE',
    industry: 'MEDICAL',
    description: 'Plateforme de gestion pour services de soins à domicile',
    fullDescription:
      'Application web complète pour la gestion des services de soins à domicile incluant la planification des interventions, le suivi des patients, la gestion du personnel et la facturation.',
    imageLogo: '/Projects/Confortplus65/Confortplus65Logo.png',
    heroImage: '/Projects/Confortplus65/HeroImage.png',
    posterImage: '/Projects/Confortplus65/PosterImage.png',
    posterImageHover: '/Projects/Confortplus65/PosterImageHover.png',
    twoImages: [
      '/Projects/Confortplus65/PosterImage.png',
      '/Projects/Confortplus65/PosterImageHover.png',
    ],
    video: '/Projects/Confortplus65/Confortplus65Video.mp4',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    year: '2024',
    featured: true,
    client: 'Confortplus65',
    services: ['Développement Web', 'UX/UI Design', 'Analyse Métier'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Efficacité opérationnelle',
        value: '+75%',
      },
      {
        metric: 'Satisfaction utilisateurs',
        value: '92%',
      },
    ],
  },
  {
    id: '4',
    title: 'iBusiness Consulting CRM',
    slug: 'ibusiness-crm',
    category: 'FINTECH',
    industry: 'FINANCE',
    description: 'CRM personnalisé pour cabinet de conseil',
    fullDescription:
      "Développement d'un CRM sur mesure incluant la gestion des clients, le suivi des projets, la facturation, les rapports analytiques et l'intégration avec les outils existants.",
    imageLogo: '/Projects/iBusinessCRM/iBusinessCRMLogo.png',
    heroImage: '/Projects/iBusinessCRM/HeroImage.png',
    posterImage: '/Projects/iBusinessCRM/PosterImage.png',
    posterImageHover: '/Projects/iBusinessCRM/PosterImageHover.png',
    twoImages: [
      '/Projects/iBusinessCRM/PosterImage.png',
      '/Projects/iBusinessCRM/PosterImageHover.png',
    ],
    video: '/Projects/iBusinessCRM/iBusinessCRMVideo.mp4',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Charts.js'],
    year: '2023',
    featured: true,
    client: 'iBusiness Consulting',
    services: [
      'Product Management',
      'Développement Full-Stack',
      'Intégrations',
    ],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Productivité équipe',
        value: '+80%',
      },
      {
        metric: 'Temps de facturation',
        value: '-70%',
      },
    ],
  },
  {
    id: '5',
    title: 'RecrutementPlus CRM',
    slug: 'recrutementplus-crm',
    category: 'EDUCATION',
    industry: 'EDUCATION',
    description: 'Système de gestion pour agence de recrutement',
    fullDescription:
      "CRM interne complet pour agence de recrutement avec gestion des candidats, des offres d'emploi, suivi du processus de recrutement et reporting avancé.",
    imageLogo: '/Projects/RecrutementPlusCRM/RecrutementPlusCRMLogo.png',
    heroImage: '/Projects/RecrutementPlusCRM/HeroImage.png',
    posterImage: '/Projects/RecrutementPlusCRM/PosterImage.png',
    posterImageHover: '/Projects/RecrutementPlusCRM/PosterImageHover.png',
    twoImages: [
      '/Projects/RecrutementPlusCRM/PosterImage.png',
      '/Projects/RecrutementPlusCRM/PosterImageHover.png',
    ],
    video: '/Projects/RecrutementPlusCRM/RecrutementPlusCRMVideo.mp4',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Vue Router', 'Vuex'],
    year: '2023',
    featured: false,
    client: 'RecrutementPlus',
    services: ['Développement Web', 'Analyse Métier', 'Formation'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Placements réussis',
        value: '+120%',
      },
      {
        metric: 'Temps de recrutement',
        value: '-50%',
      },
    ],
  },
  {
    id: '6',
    title: 'BAnQ Digital Archive',
    slug: 'banq-digital-archive',
    category: 'EDUCATION',
    industry: 'GOVERNMENT',
    description: 'Plateforme de numérisation et archivage',
    fullDescription:
      "Système de gestion documentaire pour la Bibliothèque et Archives nationales du Québec, incluant la numérisation, l'indexation, la recherche avancée et l'accès public.",
    imageLogo: '/Projects/BAnQDigitalArchive/BAnQDigitalArchiveLogo.png',
    heroImage: '/Projects/BAnQDigitalArchive/HeroImage.png',
    posterImage: '/Projects/BAnQDigitalArchive/PosterImage.png',
    posterImageHover: '/Projects/BAnQDigitalArchive/PosterImageHover.png',
    twoImages: [
      '/Projects/BAnQDigitalArchive/PosterImage.png',
      '/Projects/BAnQDigitalArchive/PosterImageHover.png',
    ],
    video: '/Projects/BAnQDigitalArchive/BAnQDigitalArchiveVideo.mp4',
    tags: ['React', 'Django', 'PostgreSQL', 'Elasticsearch', 'AWS S3'],
    year: '2023',
    featured: false,
    client: 'Bibliothèque et Archives nationales du Québec',
    services: ['Développement Web', 'Architecture Cloud', 'Recherche Avancée'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Documents numérisés',
        value: '50000+',
      },
      {
        metric: 'Recherches par jour',
        value: '2000+',
      },
    ],
  },
  {
    id: '7',
    title: "Crusty's Restaurant Management",
    slug: 'crustys-restaurant',
    category: 'HOSPITALITY',
    industry: 'FOOD',
    description: 'Système de gestion pour restaurant',
    fullDescription:
      'Plateforme complète de gestion pour restaurant incluant les commandes en ligne, la gestion de menu, les réservations, le point de vente (POS) et les statistiques de vente.',
    imageLogo: '/Projects/CrustysRestaurant/CrustysRestaurantLogo.png',
    heroImage: '/Projects/CrustysRestaurant/HeroImage.png',
    posterImage: '/Projects/CrustysRestaurant/PosterImage.png',
    posterImageHover: '/Projects/CrustysRestaurant/PosterImageHover.png',
    twoImages: [
      '/Projects/CrustysRestaurant/PosterImage.png',
      '/Projects/CrustysRestaurant/PosterImageHover.png',
    ],
    video: '/Projects/CrustysRestaurant/CrustysRestaurantVideo.mp4',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Twilio'],
    year: '2024',
    featured: false,
    client: "Crusty's Restaurant",
    services: ['Développement Web', 'Application Mobile', 'Intégration POS'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Commandes en ligne',
        value: '+200%',
      },
      {
        metric: 'Satisfaction client',
        value: '96%',
      },
    ],
  },
  {
    id: '8',
    title: 'CFAQ Platform',
    slug: 'cfaq-platform',
    category: 'EDUCATION',
    industry: 'EDUCATION',
    description: 'Plateforme éducative interactive',
    fullDescription:
      "Développement d'une plateforme d'apprentissage en ligne avec gestion de cours, vidéos interactives, quiz, suivi de progression et certifications.",
    imageLogo: '/Projects/CFAQPlatform/CFAQPlatformLogo.png',
    heroImage: '/Projects/CFAQPlatform/HeroImage.png',
    posterImage: '/Projects/CFAQPlatform/PosterImage.png',
    posterImageHover: '/Projects/CFAQPlatform/PosterImageHover.png',
    twoImages: [
      '/Projects/CFAQPlatform/PosterImage.png',
      '/Projects/CFAQPlatform/PosterImageHover.png',
    ],
    video: '/Projects/CFAQPlatform/CFAQPlatformVideo.mp4',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
    year: '2023',
    featured: false,
    client: 'CFAQ',
    services: ['Développement Web', 'Streaming Vidéo', 'LMS'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Étudiants inscrits',
        value: '3000+',
      },
      {
        metric: 'Cours complétés',
        value: '8000+',
      },
    ],
  },
  {
    id: '9',
    title: 'Premier Bloc Real Estate',
    slug: 'premier-bloc-real-estate',
    category: 'FINTECH',
    industry: 'FINANCE',
    description: "Plateforme de gestion d'actifs immobiliers",
    fullDescription:
      "Système de gestion pour l'acquisition et la gestion d'actifs immobiliers résidentiels et fonciers, incluant le suivi des propriétés, les analyses financières et les rapports.",
    imageLogo: '/Projects/PremierBlocRealEstate/PremierBlocRealEstateLogo.png',
    heroImage: '/Projects/PremierBlocRealEstate/HeroImage.png',
    posterImage: '/Projects/PremierBlocRealEstate/PosterImage.png',
    posterImageHover: '/Projects/PremierBlocRealEstate/PosterImageHover.png',
    twoImages: [
      '/Projects/PremierBlocRealEstate/PosterImage.png',
      '/Projects/PremierBlocRealEstate/PosterImageHover.png',
    ],
    video: '/Projects/PremierBlocRealEstate/PremierBlocRealEstateVideo.mp4',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'PDF Generation'],
    year: '2023',
    featured: false,
    client: 'Premier Bloc',
    services: ['Développement Web', 'Analyse de Données', 'Reporting'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Propriétés gérées',
        value: '150+',
      },
      {
        metric: 'Efficacité gestion',
        value: '+90%',
      },
    ],
  },
  {
    id: '10',
    title: 'Aqua Solutions',
    slug: 'aqua-solutions',
    category: 'IOT',
    industry: 'GOVERNMENT',
    description: "Système de monitoring de qualité de l'eau",
    fullDescription:
      "Application IoT pour le monitoring en temps réel de la qualité de l'eau avec capteurs connectés, alertes automatiques, dashboards analytiques et rapports de conformité.",
    imageLogo: '/Projects/AquaSolutions/AquaSolutionsLogo.png',
    heroImage: '/Projects/AquaSolutions/HeroImage.png',
    posterImage: '/Projects/AquaSolutions/PosterImage.png',
    posterImageHover: '/Projects/AquaSolutions/PosterImageHover.png',
    twoImages: [
      '/Projects/AquaSolutions/PosterImage.png',
      '/Projects/AquaSolutions/PosterImageHover.png',
    ],
    video: '/Projects/AquaSolutions/AquaSolutionsVideo.mp4',
    tags: ['React', 'Node.js', 'IoT', 'InfluxDB', 'Grafana', 'MQTT'],
    year: '2024',
    featured: false,
    client: 'Aqua Solutions',
    services: ['Développement IoT', 'Data Analytics', 'Cloud Infrastructure'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Capteurs déployés',
        value: '200+',
      },
      {
        metric: 'Alertes traitées',
        value: '1000+',
      },
    ],
  },
  {
    id: '11',
    title: 'Éléonore Barbershop',
    slug: 'eleonore-barbershop',
    category: 'HOSPITALITY',
    industry: 'RETAIL',
    description: 'Système de réservation pour salon de coiffure',
    fullDescription:
      'Application de gestion et réservation en ligne pour salon de coiffure avec calendrier interactif, notifications SMS, gestion des employés et programme de fidélité.',
    imageLogo: '/Projects/EleonoreBarbershop/EleonoreBarbershopLogo.png',
    heroImage: '/Projects/EleonoreBarbershop/HeroImage.png',
    posterImage: '/Projects/EleonoreBarbershop/PosterImage.png',
    posterImageHover: '/Projects/EleonoreBarbershop/PosterImageHover.png',
    twoImages: [
      '/Projects/EleonoreBarbershop/PosterImage.png',
      '/Projects/EleonoreBarbershop/PosterImageHover.png',
    ],
    video: '/Projects/EleonoreBarbershop/EleonoreBarbershopVideo.mp4',
    tags: ['React', 'Firebase', 'Stripe', 'Twilio', 'Calendar API'],
    year: '2024',
    featured: false,
    client: 'Éléonore Barbershop',
    services: ['Développement Web', 'Système de Réservation', 'Marketing'],
    projectUrl: 'https://google.com',
    results: [
      {
        metric: 'Réservations en ligne',
        value: '+300%',
      },
      {
        metric: 'No-shows réduits',
        value: '-85%',
      },
    ],
  },
  {
    id: '12',
    title: 'Fruit Exotic',
    slug: 'fruitexo-ecommerce',
    category: 'E-COMMERCE',
    industry: 'FOOD',
    description: 'Plateforme e-commerce de fruits exotiques',
    fullDescription:
      "Nous sommes fiers d'avoir accompagné Fruit Exotic Inc, un acteur majeur de l'importation de fruits exotiques à Montréal, dans la réalisation complète de leur nouveau site web. Notre équipe a conçu une vitrine moderne, claire et responsive qui met en valeur la diversité et la fraîcheur de leurs produits, leur chaîne logistique efficace et transparente, ainsi que leur engagement envers une agriculture durable et équitable.",
    imageLogo: '/Projects/FruitExotic/FruitExoticLogo.png',
    heroImage: '/Projects/FruitExotic/HeroImage.png',
    posterImage: '/Projects/FruitExotic/PosterImage.png',
    posterImageHover: '/Projects/FruitExotic/PosterImageHover.png',
    twoImages: [
      '/Projects/FruitExotic/PosterImage.png',
      '/Projects/FruitExotic/PosterImageHover.png',
    ],
    video: '/Projects/FruitExotic/FruitExoticVideo.mp4',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive Design', 'SEO'],
    year: '2024',
    featured: false,
    client: 'FruitExotic Inc.',
    services: ['E-commerce', 'Développement Web', 'Marketing Digital'],
    projectUrl: 'https://fruitexotic.com',
    results: [
      {
        metric: 'Visibilité en ligne',
        value: 'Améliorée',
      },
      {
        metric: 'Présentation produits',
        value: 'Optimisée',
      },
    ],
  },
];

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'ALL' || category === 'FEATURED') return projects;
  return projects.filter((project) => project.category === category);
};

export const getProjectsByIndustry = (industry: string): Project[] => {
  if (industry === 'ALL') return projects;
  return projects.filter((project) => project.industry === industry);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const filterProjects = (
  category: string,
  industry: string,
): Project[] => {
  let filtered = projects;

  if (category !== 'ALL') {
    if (category === 'FEATURED') {
      filtered = filtered.filter((project) => project.featured);
    } else {
      filtered = filtered.filter((project) => project.category === category);
    }
  }

  if (industry !== 'ALL') {
    filtered = filtered.filter((project) => project.industry === industry);
  }

  return filtered;
};
