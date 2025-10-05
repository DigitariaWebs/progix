export interface TeamMember {
  id: string;
  name: string;
  role: string;
  skills: string;
  image: string;
  linkedinUrl: string;
  description: string;
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
  }[];
  mainSkills: string[];
  education: {
    degree: string;
    institution: string;
    period?: string;
    details?: string;
  };
  methodologies?: {
    title: string;
    description: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ilyes',
    name: 'Ilyes Ghorieb',
    role: 'Full-Stack Software Engineer',
    skills: 'React • Node.js • TypeScript • PostgreSQL',
    image: '/images of the team/1719935496854.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/ilyes-ghorieb-95b470244/',
    description: 'Salut ! Je suis Ilyes, un développeur full-stack passionné par la création de solutions logicielles innovantes. Chez PROGIX, je conçois et développe des systèmes CRM et ERP sur mesure, des plateformes SaaS et des applications mobiles performantes et évolutives.',
    experience: [
      {
        title: 'Ingénieur logiciel',
        company: 'PROGIX',
        period: 'Juillet 2024 - Présent',
        location: 'Montréal, QC (Hybride)',
        description: 'Conception et développement de solutions logicielles SaaS, d\'applications et de sites web sur mesure. Gestion complète du cycle de développement, de la planification à la mise en production.'
      },
      {
        title: 'Responsable produit',
        company: 'iBusiness Consulting Inc.',
        period: 'Janvier 2024 - Juillet 2024',
        location: 'Longueuil, QC',
        description: 'Gestion et suivi des projets de l\'équipe de développement. Coordination entre besoins métier et équipe technique en méthodologie Agile.'
      }
    ],
    mainSkills: [
      'React.js',
      'Node.js',
      'Express.js',
      'Flask',
      'Next.js',
      'PostgreSQL',
      'MongoDB',
      'Docker',
      'GraphQL',
      'JWT',
      'CI/CD'
    ],
    education: {
      degree: 'Baccalauréat en Génie informatique et logiciel',
      institution: 'UQAM | Université du Québec à Montréal',
      period: '2025',
      details: 'GPA: 3.1 • Membre de l\'AGEEI'
    }
  },
  {
    id: 'fadi',
    name: 'Fadi Atmania',
    role: 'Développeur Web Full-Stack',
    skills: 'Flutter • React Native • Swift • Kotlin',
    image: '/images of the team/1755055191293.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/fadi-atmania-011756354/',
    description: 'Salut ! Je suis Fadi, un développeur web full-stack passionné par les technologies modernes. Chez PROGIX, je me spécialise dans la création de solutions robustes, efficaces et scalables en utilisant Java, Python, React et Docker.',
    experience: [
      {
        title: 'Administrator',
        company: 'PROGIX',
        period: 'Septembre 2024 - Présent',
        location: 'Montréal, QC (Hybride)',
        description: 'Développement de services IT et solutions logicielles. Conception d\'applications web full-stack avec les dernières technologies et frameworks.'
      }
    ],
    mainSkills: [
      'Java',
      'Python',
      'React',
      'Docker',
      'Git',
      'Flutter',
      'React Native',
      'Swift',
      'Kotlin',
      'Software Development',
      'IT Services'
    ],
    education: {
      degree: 'Computer Software Engineering',
      institution: 'UQAM | Université du Québec à Montréal'
    }
  },
  {
    id: 'daani',
    name: 'Daani Abderrahmane',
    role: 'Consultant logiciels',
    skills: 'AWS • Docker • Kubernetes • CI/CD',
    image: '/images of the team/1758914011397.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/daani-abderrahmane-4ab295315/',
    description: 'Salut ! Je suis Daani, un développeur full-stack passionné par l\'apprentissage et les projets collaboratifs. Spécialisé en JavaScript, React, Node.js et Express.js, j\'aime créer des solutions web performantes et innovantes.',
    experience: [
      {
        title: 'Consultant logiciels',
        company: 'PROGIX',
        period: 'Septembre 2024 - Présent',
        location: 'Montréal, QC',
        description: 'Analyste-Programmeur | Spécialiste Microsoft .NET. Accompagnement de clients dans les secteurs RH, paie et énergie. Conception et maintenance de solutions logicielles performantes avec expertise en C#, ASP.NET, VB.NET et développement web.'
      }
    ],
    mainSkills: [
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'C#',
      'ASP.NET',
      'VB.NET',
      'SQL Server',
      'REST APIs',
      'Microservices',
      'MVC',
      'HTML/CSS',
      'JQuery',
      'AJAX',
      'Gravitee',
      'TFS',
      'GitLab',
      'BitBucket',
      'Tests unitaires'
    ],
    education: {
      degree: 'Études en cours',
      institution: 'UQAM | Université du Québec à Montréal',
      period: '2021 - 2026',
      details: 'Spécialisation en Communication et Ventes externes'
    },
    methodologies: [
      {
        title: 'Agile & SAFe',
        description: 'Méthodologies SAFe, Agile, Train avec approche orientée DDD/ATDD'
      },
      {
        title: 'Qualité',
        description: 'Développement orienté qualité avec tests unitaires et d\'intégration'
      }
    ]
  },
  {
    id: 'islem',
    name: 'Islem Deneche',
    role: 'UX/UI Designer',
    skills: 'Figma • Adobe XD • Prototyping • User Research',
    image: '/images of the team/1757886357065.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/islem-deneche-097701384/',
    description: 'Salut ! Je suis Islem, un designer UX/UI passionné par la création d\'expériences utilisateur exceptionnelles. Chez PROGIX, je conçois des interfaces intuitives et esthétiques qui améliorent l\'engagement utilisateur.',
    experience: [
      {
        title: 'UX/UI Designer',
        company: 'PROGIX',
        period: '2024 - Présent',
        location: 'Montréal, QC',
        description: 'Conception d\'interfaces utilisateur et d\'expériences utilisateur pour nos applications web et mobiles. Collaboration étroite avec l\'équipe de développement pour assurer une implémentation fidèle aux designs.'
      }
    ],
    mainSkills: [
      'Figma',
      'Adobe XD',
      'Prototyping',
      'User Research',
      'UI Design',
      'UX Design',
      'Design Systems',
      'Wireframing',
      'User Testing',
      'Accessibility'
    ],
    education: {
      degree: 'Design Graphique',
      institution: 'École de design'
    }
  },
  {
    id: 'arselene',
    name: 'Arselene Meghlaoui',
    role: 'Full Stack Developer',
    skills: 'Full Stack Developer • Network Security',
    image: '/images of the team/WhatsApp Image 2025-09-29 at 12.30.27.jpeg',
    linkedinUrl: 'https://www.linkedin.com/in/arselene-meghlaoui-b20b1a259/',
    description: 'Salut ! Je suis Arselene, une développeuse full-stack spécialisée en sécurité réseau. Chez PROGIX, je développe des applications sécurisées et performantes en utilisant les dernières technologies.',
    experience: [
      {
        title: 'Full Stack Developer',
        company: 'PROGIX',
        period: '2024 - Présent',
        location: 'Montréal, QC',
        description: 'Développement d\'applications web et mobiles avec un focus sur la sécurité et les performances. Implémentation de solutions de sécurité réseau et de bonnes pratiques de développement.'
      }
    ],
    mainSkills: [
      'JavaScript',
      'React',
      'Node.js',
      'Network Security',
      'Cybersecurity',
      'Full Stack Development',
      'API Development',
      'Database Design',
      'System Architecture'
    ],
    education: {
      degree: 'Computer Science',
      institution: 'Université'
    }
  },
  {
    id: 'data-engineer',
    name: 'Data Engineer',
    role: 'Data Engineer',
    skills: 'Python • Machine Learning • ETL • Analytics',
    image: '',
    linkedinUrl: '#',
    description: 'Notre équipe de data engineering se spécialise dans la création de pipelines de données robustes et l\'implémentation de solutions d\'intelligence artificielle pour nos clients.',
    experience: [
      {
        title: 'Data Engineer',
        company: 'PROGIX',
        period: '2024 - Présent',
        location: 'Montréal, QC',
        description: 'Conception et implémentation de pipelines ETL, développement de modèles de machine learning et création de solutions d\'analytics avancées.'
      }
    ],
    mainSkills: [
      'Python',
      'Machine Learning',
      'ETL',
      'Analytics',
      'Data Pipeline',
      'SQL',
      'Big Data',
      'TensorFlow',
      'PyTorch',
      'Apache Spark'
    ],
    education: {
      degree: 'Data Science & Engineering',
      institution: 'Université'
    }
  }
];
