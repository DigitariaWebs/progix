export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  hero: {
    subtitle: string;
    description: string;
  };
  whySection: {
    title: string;
    reasons: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  process: {
    title: string;
    description: string;
    steps: {
      number: string;
      title: string;
      description: string;
      points: string[];
    }[];
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    image: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'business-technical-analysis',
    title: 'Analyse métier et technique',
    category: 'Logiciels de gestion & d\'automatisation',
    hero: {
      subtitle: 'Nous construisons vos fondations',
      description:
        'La phase d\'analyse métier et technique assure une base stable pour tout le développement ultérieur. Pour nous, c\'est une étape essentielle pour valider la vision du système et capturer l\'essence du projet. Pour vous, c\'est une étape cruciale pour comprendre les enjeux techniques et valider les implications de chaque module. À la fin de cette étape, vous repartez avec une cartographie de vos processus, ainsi qu\'un document technique expliquant toutes les règles métier, les diagrammes de base de données et les détails fonctionnels.',
    },
    whySection: {
      title: 'Pourquoi commencer par une analyse métier et technique?',
      reasons: [
        {
          title: 'Comprendre la situation',
          description:
            'Le bon logiciel nécessite une compréhension approfondie de la situation actuelle.',
          icon: '🔍',
        },
        {
          title: 'Identifier les opportunités',
          description:
            'De nombreuses opportunités d\'optimisation attendent d\'être découvertes pour gagner en efficacité et en qualité.',
          icon: '💡',
        },
        {
          title: 'Planifier avec clarté',
          description:
            'Un projet précisément défini permet une planification détaillée pour garder le contrôle.',
          icon: '📋',
        },
      ],
    },
    process: {
      title: 'Notre processus d\'analyse métier et technique',
      description:
        'Notre méthodologie est adaptée aux besoins de votre entreprise et aux objectifs futurs souhaités. Les audits et plans de transformation sont toujours réalisés dans le but de préparer la phase suivante et de vous donner les moyens de mettre en œuvre une solution concrète dans un avenir proche.',
      steps: [
        {
          number: '01',
          title: 'Ateliers de découverte',
          description:
            'Cette phase comprend une étude approfondie rigoureuse de toutes les exigences fonctionnelles et règles métier de chaque département.',
          points: [
            'Réunions avec l\'équipe de direction',
            'Visite sur le terrain et observation (si applicable)',
            'Entretiens avec différents départements',
            'Recueillir les retours sur l\'état actuel',
          ],
        },
        {
          number: '02',
          title: 'Formalisation des procédures & données',
          description:
            'Cette étape nécessite un inventaire des documents d\'information et outils technologiques existants de l\'entreprise.',
          points: [
            'Liste des sources de données et types de fichiers',
            'Analyse des outils et de leur utilisation',
            'Cartographie des processus',
            'Schématisation des données',
          ],
        },
        {
          number: '03',
          title: 'Architecture de la solution',
          description:
            'Le livrable final contient l\'architecture proposée, fournissant une définition claire du projet et de son plan de mise en œuvre.',
          points: [
            'Spécifications (architecture fonctionnelle)',
            'Architecture technique',
            'Planification détaillée des calendriers/budgets',
          ],
        },
      ],
    },
    testimonial: {
      quote:
        'Progix a compris nos besoins dès le premier jour, en nous éduquant, en nous guidant et en nous accompagnant dans l\'évolution de notre système depuis plus de 7 ans maintenant. Ils sont la pierre angulaire de notre développement technologique.',
      author: 'Yves Hennekens',
      position: 'Président',
      company: 'YHC Environnement',
      image: '/imagesreview/1517492082228.jpg',
    },
    faqs: [
      {
        question: 'Quelle est la durée et le coût moyen d\'une analyse métier et/ou technique?',
        answer:
          'La durée et le coût de l\'analyse varient selon les objectifs recherchés et la situation actuelle de l\'entreprise. Les analyses les plus simples prennent généralement 2 semaines et coûtent quelques milliers de dollars, tandis que les analyses plus intensives peuvent nécessiter quelques mois et plusieurs dizaines de milliers de dollars.',
      },
      {
        question: 'Dans quelle mesure mon équipe doit-elle être impliquée?',
        answer:
          'Selon le type de mandat, il sera probablement important pour l\'un de nos experts de rencontrer les superviseurs de vos différents départements et équipes. Vous pouvez donc vous attendre à avoir un point de contact principal qui devra agir en tant que coordinateur interne.',
      },
      {
        question: 'Une analyse métier et/ou technique peut-elle être réalisée à distance?',
        answer:
          'Pour de nombreux mandats, il suffit de réaliser les ateliers d\'exploration à distance et de tenir les réunions par vidéoconférence. Cependant, pour certains mandats impliquant la cartographie d\'opérations physiques, des sessions d\'observation et des visites sont souvent nécessaires.',
      },
      {
        question: 'Quelle est la prochaine étape après une analyse métier et technique?',
        answer:
          'Suite à une telle analyse, vous disposerez de toutes les informations nécessaires pour faire des choix stratégiques pour vos prochaines actions. Notre équipe met notre équipe de développement technique à votre disposition pour la programmation de votre logiciel sur mesure.',
      },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Développement logiciel sur mesure',
    category: 'Logiciels de gestion & d\'automatisation',
    hero: {
      subtitle: 'Votre solution unique, développée pour vous',
      description:
        'Le développement de logiciels sur mesure vous permet de créer une solution parfaitement adaptée à vos besoins spécifiques. Contrairement aux solutions standardisées, un logiciel personnalisé s\'intègre parfaitement à vos processus existants, évolue avec votre entreprise et vous donne un avantage concurrentiel significatif.',
    },
    whySection: {
      title: 'Pourquoi opter pour un logiciel sur mesure?',
      reasons: [
        {
          title: 'Adaptation parfaite',
          description:
            'Un logiciel développé spécifiquement pour vos besoins et processus uniques.',
          icon: '🎯',
        },
        {
          title: 'Évolutivité garantie',
          description:
            'Votre solution grandit et s\'adapte avec votre entreprise au fil du temps.',
          icon: '📈',
        },
        {
          title: 'Avantage compétitif',
          description:
            'Démarquez-vous avec des fonctionnalités uniques que vos concurrents n\'ont pas.',
          icon: '🚀',
        },
      ],
    },
    process: {
      title: 'Notre processus de développement',
      description:
        'Nous suivons une méthodologie éprouvée qui garantit la qualité, la transparence et la livraison dans les délais de votre solution logicielle personnalisée.',
      steps: [
        {
          number: '01',
          title: 'Analyse et conception',
          description:
            'Nous commençons par une compréhension approfondie de vos besoins et objectifs.',
          points: [
            'Recueil des exigences détaillées',
            'Conception de l\'architecture technique',
            'Création de prototypes et maquettes',
            'Validation avec les parties prenantes',
          ],
        },
        {
          number: '02',
          title: 'Développement itératif',
          description:
            'Développement agile avec des démonstrations régulières et ajustements continus.',
          points: [
            'Sprints de développement courts',
            'Revues régulières avec le client',
            'Tests continus et assurance qualité',
            'Ajustements basés sur les retours',
          ],
        },
        {
          number: '03',
          title: 'Déploiement et support',
          description:
            'Mise en production sécurisée et accompagnement post-lancement.',
          points: [
            'Déploiement progressif et sécurisé',
            'Formation des utilisateurs',
            'Documentation complète',
            'Support technique continu',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Combien de temps prend le développement d\'un logiciel sur mesure?',
        answer:
          'La durée varie selon la complexité du projet. Un logiciel simple peut prendre 3-6 mois, tandis qu\'une solution complexe peut nécessiter 12-18 mois ou plus. Nous fournissons un calendrier détaillé après l\'analyse initiale.',
      },
      {
        question: 'Quel est le coût d\'un logiciel sur mesure?',
        answer:
          'Le coût dépend de nombreux facteurs : complexité, fonctionnalités, intégrations nécessaires, etc. Nous proposons toujours un devis détaillé après l\'analyse de vos besoins spécifiques.',
      },
      {
        question: 'Puis-je demander des modifications pendant le développement?',
        answer:
          'Absolument! Notre approche agile permet des ajustements tout au long du projet. Nous organisons des révisions régulières pour nous assurer que le produit final correspond exactement à vos attentes.',
      },
      {
        question: 'Qui possède le code source du logiciel développé?',
        answer:
          'Vous êtes le propriétaire complet du code source et de tous les droits intellectuels liés au logiciel développé pour vous. Nous vous fournissons également toute la documentation nécessaire.',
      },
    ],
  },
  {
    slug: 'custom-erp',
    title: 'Développement ERP personnalisé',
    category: 'Logiciels de gestion & d\'automatisation',
    hero: {
      subtitle: 'Un ERP qui s\'adapte à vous, pas l\'inverse',
      description:
        'Un ERP (Enterprise Resource Planning) personnalisé centralise et automatise tous vos processus d\'affaires dans une seule plateforme intégrée. Contrairement aux ERP commerciaux rigides, notre solution est conçue pour s\'adapter parfaitement à vos méthodes de travail, offrant une flexibilité totale et une scalabilité sans limite.',
    },
    whySection: {
      title: 'Pourquoi choisir un ERP personnalisé?',
      reasons: [
        {
          title: 'Centralisation complète',
          description:
            'Tous vos départements et processus connectés dans un seul système unifié.',
          icon: '🔗',
        },
        {
          title: 'Flexibilité totale',
          description:
            'Adapté à vos processus uniques sans compromis ni limitations.',
          icon: '⚙️',
        },
        {
          title: 'ROI supérieur',
          description:
            'Investissement à long terme plus rentable que les licences récurrentes.',
          icon: '💰',
        },
      ],
    },
    process: {
      title: 'Notre méthodologie de développement ERP',
      description:
        'Nous suivons une approche structurée et modulaire qui permet une mise en œuvre progressive et un déploiement par phase, minimisant les risques et assurant une adoption réussie.',
      steps: [
        {
          number: '01',
          title: 'Audit et cartographie',
          description:
            'Analyse complète de vos processus actuels et identification des besoins.',
          points: [
            'Analyse des flux de travail actuels',
            'Identification des points de friction',
            'Cartographie des départements et interactions',
            'Définition des priorités et modules',
          ],
        },
        {
          number: '02',
          title: 'Développement modulaire',
          description:
            'Construction progressive de l\'ERP par modules fonctionnels.',
          points: [
            'Développement par ordre de priorité',
            'Tests rigoureux de chaque module',
            'Intégration continue des composants',
            'Validation utilisateur régulière',
          ],
        },
        {
          number: '03',
          title: 'Déploiement et formation',
          description:
            'Mise en production contrôlée et accompagnement de vos équipes.',
          points: [
            'Migration sécurisée des données',
            'Formation approfondie des utilisateurs',
            'Période d\'accompagnement post-lancement',
            'Optimisations continues',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quelle est la différence entre un ERP commercial et un ERP personnalisé?',
        answer:
          'Un ERP commercial vous oblige à adapter vos processus au logiciel, tandis qu\'un ERP personnalisé est conçu autour de vos processus existants. Vous obtenez exactement ce dont vous avez besoin, sans fonctionnalités inutiles.',
      },
      {
        question: 'Combien coûte le développement d\'un ERP personnalisé?',
        answer:
          'L\'investissement initial est généralement plus élevé qu\'un ERP commercial, mais sans licences récurrentes et avec une adaptation parfaite, le ROI à long terme est supérieur. Le coût dépend de la complexité et du nombre de modules.',
      },
      {
        question: 'Peut-on développer l\'ERP par phases?',
        answer:
          'Absolument! Nous recommandons une approche modulaire qui permet de déployer les fonctionnalités critiques en premier, puis d\'ajouter progressivement d\'autres modules selon vos priorités et votre budget.',
      },
      {
        question: 'L\'ERP peut-il s\'intégrer avec nos systèmes existants?',
        answer:
          'Oui, nous concevons l\'ERP pour s\'intégrer harmonieusement avec vos outils et systèmes actuels (comptabilité, CRM, e-commerce, etc.) via des API et connecteurs personnalisés.',
      },
    ],
  },
  {
    slug: 'software-support',
    title: 'Support et maintenance logicielle',
    category: 'Logiciels de gestion & d\'automatisation',
    hero: {
      subtitle: 'Votre tranquillité d\'esprit technologique',
      description:
        'Un logiciel performant nécessite un support continu et une maintenance régulière. Notre équipe assure la stabilité, la sécurité et l\'évolution de vos solutions logicielles, vous permettant de vous concentrer sur votre cœur de métier en toute sérénité.',
    },
    whySection: {
      title: 'Pourquoi un support et une maintenance professionnels?',
      reasons: [
        {
          title: 'Disponibilité garantie',
          description:
            'Interventions rapides pour minimiser les interruptions de service.',
          icon: '⚡',
        },
        {
          title: 'Sécurité renforcée',
          description:
            'Mises à jour régulières pour protéger contre les vulnérabilités.',
          icon: '🔒',
        },
        {
          title: 'Évolution continue',
          description:
            'Améliorations et nouvelles fonctionnalités selon vos besoins changeants.',
          icon: '🔄',
        },
      ],
    },
    process: {
      title: 'Notre approche de support et maintenance',
      description:
        'Nous offrons différents niveaux de service adaptés à vos besoins et priorités, avec des temps de réponse garantis et une expertise technique approfondie.',
      steps: [
        {
          number: '01',
          title: 'Surveillance proactive',
          description:
            'Monitoring continu pour identifier et résoudre les problèmes avant qu\'ils n\'impactent vos opérations.',
          points: [
            'Surveillance des performances 24/7',
            'Alertes automatiques en cas d\'anomalies',
            'Analyse des logs et métriques',
            'Rapports de santé réguliers',
          ],
        },
        {
          number: '02',
          title: 'Maintenance préventive',
          description:
            'Actions régulières pour maintenir votre système optimal et à jour.',
          points: [
            'Mises à jour de sécurité',
            'Optimisation des performances',
            'Sauvegardes automatiques',
            'Tests de fonctionnement réguliers',
          ],
        },
        {
          number: '03',
          title: 'Support réactif',
          description:
            'Assistance rapide et efficace en cas de problème ou de question.',
          points: [
            'Support multi-canal (email, téléphone, chat)',
            'Temps de réponse garantis selon SLA',
            'Résolution de bugs et incidents',
            'Assistance utilisateur et formation',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quels sont les temps de réponse pour le support?',
        answer:
          'Nos temps de réponse varient selon le niveau de service choisi. Pour les incidents critiques, nous garantissons une réponse en moins de 2 heures avec notre forfait premium, et en moins de 4 heures avec notre forfait standard.',
      },
      {
        question: 'La maintenance inclut-elle les nouvelles fonctionnalités?',
        answer:
          'La maintenance couvre les corrections de bugs, mises à jour de sécurité et optimisations. Les nouvelles fonctionnalités font l\'objet de projets séparés, mais nous pouvons inclure des améliorations mineures dans les forfaits premium.',
      },
      {
        question: 'Proposez-vous des contrats de support flexibles?',
        answer:
          'Oui, nous offrons plusieurs formules adaptables : support basique, standard et premium. Chaque niveau offre différents temps de réponse, canaux de support et services inclus.',
      },
      {
        question: 'Que se passe-t-il si mon logiciel tombe en panne hors des heures ouvrables?',
        answer:
          'Avec nos forfaits standard et premium, nous offrons un support d\'urgence 24/7 pour les incidents critiques. Vous disposez d\'un numéro d\'urgence dédié pour joindre notre équipe à tout moment.',
      },
    ],
  },
  {
    slug: 'web-application',
    title: 'Application web',
    category: 'Laboratoire PROGIX',
    hero: {
      subtitle: 'Des applications web modernes et performantes',
      description:
        'Nous créons des applications web sur mesure qui offrent une expérience utilisateur exceptionnelle, des performances optimales et une scalabilité sans limites. De la simple application métier au portail complexe, nous transformons vos idées en réalité digitale.',
    },
    whySection: {
      title: 'Pourquoi une application web personnalisée?',
      reasons: [
        {
          title: 'Accessibilité universelle',
          description:
            'Accessible depuis n\'importe quel appareil avec un navigateur, sans installation.',
          icon: '🌐',
        },
        {
          title: 'Mises à jour instantanées',
          description:
            'Tous les utilisateurs bénéficient immédiatement des nouvelles fonctionnalités.',
          icon: '⚡',
        },
        {
          title: 'Technologies modernes',
          description:
            'Interface réactive, rapide et intuitive avec les dernières technologies web.',
          icon: '💻',
        },
      ],
    },
    process: {
      title: 'Notre processus de développement web',
      description:
        'Nous combinons design moderne, architecture robuste et technologies de pointe pour créer des applications web qui impressionnent et performent.',
      steps: [
        {
          number: '01',
          title: 'UX/UI Design',
          description:
            'Conception d\'une interface intuitive et attrayante centrée sur l\'utilisateur.',
          points: [
            'Recherche utilisateur et personas',
            'Wireframes et prototypes interactifs',
            'Design system et charte graphique',
            'Tests d\'utilisabilité',
          ],
        },
        {
          number: '02',
          title: 'Développement Full-Stack',
          description:
            'Construction de l\'application avec les technologies les plus adaptées.',
          points: [
            'Frontend moderne et responsive',
            'Backend robuste et sécurisé',
            'API RESTful ou GraphQL',
            'Base de données optimisée',
          ],
        },
        {
          number: '03',
          title: 'Tests et déploiement',
          description:
            'Assurance qualité rigoureuse et mise en production optimisée.',
          points: [
            'Tests automatisés et manuels',
            'Tests de performance et sécurité',
            'Déploiement cloud évolutif',
            'Monitoring et analytics',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quelle est la différence entre une application web et un site web?',
        answer:
          'Une application web offre des fonctionnalités interactives complexes et permet aux utilisateurs d\'accomplir des tâches spécifiques, tandis qu\'un site web présente principalement de l\'information. Une application web est plus dynamique et interactive.',
      },
      {
        question: 'Quelles technologies utilisez-vous pour le développement web?',
        answer:
          'Nous utilisons des technologies modernes comme React, Next.js, Node.js, Python, et PostgreSQL. Le choix exact dépend des besoins spécifiques de votre projet et de vos préférences.',
      },
      {
        question: 'L\'application sera-t-elle responsive et mobile-friendly?',
        answer:
          'Absolument! Toutes nos applications web sont conçues avec une approche "mobile-first" et s\'adaptent parfaitement à tous les types d\'écrans, des smartphones aux grands écrans desktop.',
      },
      {
        question: 'Peut-on transformer l\'application web en application mobile plus tard?',
        answer:
          'Oui, nous pouvons concevoir l\'architecture pour faciliter cette transition future. Nous pouvons également créer une Progressive Web App (PWA) qui fonctionne comme une application mobile sans développement natif.',
      },
    ],
  },
  {
    slug: 'mobile-application',
    title: 'Application mobile',
    category: 'Laboratoire PROGIX',
    hero: {
      subtitle: 'Applications mobiles natives et performantes',
      description:
        'Nous développons des applications mobiles innovantes pour iOS et Android qui offrent une expérience utilisateur fluide et engageante. Que ce soit une application grand public ou une solution d\'entreprise, nous créons des applications qui se démarquent.',
    },
    whySection: {
      title: 'Pourquoi investir dans une application mobile?',
      reasons: [
        {
          title: 'Engagement accru',
          description:
            'Les utilisateurs passent 90% de leur temps mobile dans des applications.',
          icon: '📱',
        },
        {
          title: 'Fonctionnalités natives',
          description:
            'Accès à la caméra, GPS, notifications push et autres fonctionnalités du device.',
          icon: '🎯',
        },
        {
          title: 'Performance optimale',
          description:
            'Expérience ultra-rapide et fluide, même hors ligne.',
          icon: '⚡',
        },
      ],
    },
    process: {
      title: 'Notre processus de développement mobile',
      description:
        'De l\'idée au lancement sur les stores, nous vous accompagnons à chaque étape pour créer une application mobile exceptionnelle.',
      steps: [
        {
          number: '01',
          title: 'Stratégie et design',
          description:
            'Définition de la stratégie mobile et création d\'une expérience utilisateur optimale.',
          points: [
            'Définition des objectifs et KPIs',
            'Recherche concurrentielle et positionnement',
            'Design iOS et Android natifs',
            'Prototypes interactifs',
          ],
        },
        {
          number: '02',
          title: 'Développement natif ou cross-platform',
          description:
            'Construction de l\'application avec les technologies les plus adaptées à vos besoins.',
          points: [
            'Développement Swift/Kotlin ou React Native',
            'Intégration API et services backend',
            'Fonctionnalités natives (caméra, GPS, etc.)',
            'Tests sur devices réels',
          ],
        },
        {
          number: '03',
          title: 'Publication et croissance',
          description:
            'Lancement sur les stores et stratégies d\'acquisition d\'utilisateurs.',
          points: [
            'Préparation et soumission aux stores',
            'Optimisation ASO (App Store Optimization)',
            'Analytics et tracking',
            'Itérations basées sur les retours utilisateurs',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Faut-il développer pour iOS et Android séparément?',
        answer:
          'Pas nécessairement. Nous pouvons utiliser React Native pour développer une seule application qui fonctionne sur les deux plateformes, ou opter pour du développement natif si les performances maximales sont critiques.',
      },
      {
        question: 'Combien coûte le développement d\'une application mobile?',
        answer:
          'Le coût varie considérablement selon la complexité : une application simple peut coûter 30 000$ - 50 000$, tandis qu\'une application complexe peut dépasser 150 000$. Nous fournissons toujours un devis détaillé après analyse.',
      },
      {
        question: 'Combien de temps prend le développement d\'une application mobile?',
        answer:
          'En moyenne, une application simple prend 3-4 mois, une application de complexité moyenne 4-6 mois, et une application complexe 6-12 mois ou plus. Cela inclut le design, le développement, les tests et la publication.',
      },
      {
        question: 'Aidez-vous avec la publication sur les stores?',
        answer:
          'Oui, nous nous occupons de toute la préparation technique, la création des comptes développeurs, la soumission et le processus de validation sur l\'App Store et Google Play Store.',
      },
    ],
  },
  {
    slug: 'ai-integration',
    title: 'Intégration de l\'Intelligence Artificielle (IA)',
    category: 'Laboratoire PROGIX',
    hero: {
      subtitle: 'Propulsez votre entreprise avec l\'IA',
      description:
        'L\'intelligence artificielle n\'est plus réservée aux géants technologiques. Nous intégrons des solutions d\'IA pratiques et accessibles dans vos systèmes existants pour automatiser les tâches, améliorer la prise de décision et créer de nouvelles opportunités de croissance.',
    },
    whySection: {
      title: 'Pourquoi intégrer l\'IA dans vos opérations?',
      reasons: [
        {
          title: 'Automatisation intelligente',
          description:
            'Automatisez les tâches répétitives et libérez du temps pour des activités à valeur ajoutée.',
          icon: '🤖',
        },
        {
          title: 'Insights prédictifs',
          description:
            'Anticipez les tendances et prenez des décisions basées sur des données.',
          icon: '📊',
        },
        {
          title: 'Expérience améliorée',
          description:
            'Offrez des expériences personnalisées et des services plus rapides à vos clients.',
          icon: '✨',
        },
      ],
    },
    process: {
      title: 'Notre approche d\'intégration IA',
      description:
        'Nous adoptons une approche pragmatique de l\'IA, en commençant par identifier les cas d\'usage à fort impact et en développant des solutions sur mesure qui génèrent un ROI mesurable.',
      steps: [
        {
          number: '01',
          title: 'Évaluation et stratégie',
          description:
            'Identification des opportunités d\'IA les plus prometteuses pour votre entreprise.',
          points: [
            'Audit des processus et données',
            'Identification des cas d\'usage à fort ROI',
            'Évaluation de la maturité IA',
            'Roadmap d\'implémentation',
          ],
        },
        {
          number: '02',
          title: 'Développement et entraînement',
          description:
            'Création et entraînement de modèles d\'IA adaptés à vos besoins spécifiques.',
          points: [
            'Préparation et nettoyage des données',
            'Développement de modèles personnalisés',
            'Entraînement et optimisation',
            'Tests de performance et précision',
          ],
        },
        {
          number: '03',
          title: 'Déploiement et monitoring',
          description:
            'Intégration dans vos systèmes et surveillance continue des performances.',
          points: [
            'Intégration avec systèmes existants',
            'Déploiement progressif et sécurisé',
            'Formation des équipes',
            'Monitoring et amélioration continue',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quels types de solutions IA proposez-vous?',
        answer:
          'Nous offrons diverses solutions : chatbots intelligents, systèmes de recommandation, analyse prédictive, traitement du langage naturel, vision par ordinateur, automatisation de processus, et plus encore.',
      },
      {
        question: 'Avons-nous besoin de beaucoup de données pour utiliser l\'IA?',
        answer:
          'Cela dépend du type de solution. Certaines applications d\'IA nécessitent des volumes importants de données, tandis que d\'autres peuvent fonctionner avec des ensembles de données plus modestes ou en utilisant des modèles pré-entraînés.',
      },
      {
        question: 'L\'IA peut-elle s\'intégrer à nos systèmes existants?',
        answer:
          'Oui, nous concevons nos solutions d\'IA pour s\'intégrer harmonieusement avec vos systèmes et outils existants via des API, sans nécessiter une refonte complète de votre infrastructure.',
      },
      {
        question: 'Quel est le retour sur investissement de l\'IA?',
        answer:
          'Le ROI varie selon le cas d\'usage, mais nos clients observent généralement des gains de productivité de 20-40%, des réductions de coûts opérationnels et une amélioration de l\'expérience client dans les 6-12 mois suivant l\'implémentation.',
      },
    ],
  },
  {
    slug: 'data-strategy',
    title: 'Stratégie de données',
    category: 'Gestion des données',
    hero: {
      subtitle: 'Transformez vos données en actif stratégique',
      description:
        'Une stratégie de données solide est la fondation de toute transformation numérique réussie. Nous vous aidons à définir une vision claire pour la gouvernance, la qualité et l\'utilisation de vos données, alignée sur vos objectifs d\'affaires.',
    },
    whySection: {
      title: 'Pourquoi une stratégie de données est essentielle?',
      reasons: [
        {
          title: 'Décisions éclairées',
          description:
            'Basez vos décisions sur des données fiables et accessibles, pas sur l\'intuition.',
          icon: '🎯',
        },
        {
          title: 'Conformité assurée',
          description:
            'Respectez les réglementations sur la protection des données et la vie privée.',
          icon: '🔒',
        },
        {
          title: 'Avantage concurrentiel',
          description:
            'Exploitez vos données pour identifier de nouvelles opportunités de marché.',
          icon: '📈',
        },
      ],
    },
    process: {
      title: 'Notre approche de stratégie de données',
      description:
        'Nous développons une stratégie de données pragmatique et actionnable qui tient compte de votre maturité actuelle et de vos ambitions futures.',
      steps: [
        {
          number: '01',
          title: 'Évaluation de la maturité',
          description:
            'Diagnostic complet de votre écosystème de données actuel.',
          points: [
            'Audit des sources et systèmes de données',
            'Évaluation de la qualité des données',
            'Analyse des processus de gouvernance',
            'Identification des lacunes et risques',
          ],
        },
        {
          number: '02',
          title: 'Définition de la vision',
          description:
            'Élaboration d\'une vision stratégique alignée sur vos objectifs d\'affaires.',
          points: [
            'Ateliers avec les parties prenantes',
            'Définition des cas d\'usage prioritaires',
            'Architecture cible de données',
            'Framework de gouvernance',
          ],
        },
        {
          number: '03',
          title: 'Roadmap d\'implémentation',
          description:
            'Plan d\'action détaillé pour réaliser votre vision de données.',
          points: [
            'Priorisation des initiatives',
            'Estimation des ressources et budgets',
            'Plan de gestion du changement',
            'KPIs et métriques de succès',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Qu\'est-ce qu\'une stratégie de données exactement?',
        answer:
          'Une stratégie de données est un plan directeur qui définit comment votre organisation collecte, stocke, gère, partage et utilise ses données pour atteindre ses objectifs d\'affaires et créer de la valeur.',
      },
      {
        question: 'Combien de temps prend l\'élaboration d\'une stratégie de données?',
        answer:
          'Typiquement, l\'élaboration d\'une stratégie de données complète prend 6-12 semaines, selon la taille de l\'organisation et la complexité de l\'écosystème de données existant.',
      },
      {
        question: 'Qui devrait être impliqué dans ce processus?',
        answer:
          'Idéalement, les dirigeants (CEO, CTO), les responsables métier, l\'équipe IT, et les utilisateurs clés de données. L\'engagement de la direction est crucial pour le succès.',
      },
      {
        question: 'Quelle est la différence avec une stratégie BI?',
        answer:
          'Une stratégie de données est plus large et englobe la stratégie BI. Elle couvre la gouvernance, la qualité, l\'architecture et la sécurité des données, tandis que la BI se concentre sur l\'analyse et le reporting.',
      },
    ],
  },
  {
    slug: 'data-analysis',
    title: 'Analyse de données',
    category: 'Gestion des données',
    hero: {
      subtitle: 'Transformez vos données en insights actionnables',
      description:
        'L\'analyse de données révèle les patterns cachés, les tendances et les opportunités dans vos données. Nous combinons expertise statistique et connaissance métier pour extraire des insights qui génèrent des actions concrètes et mesurables.',
    },
    whySection: {
      title: 'Pourquoi investir dans l\'analyse de données?',
      reasons: [
        {
          title: 'Compréhension approfondie',
          description:
            'Découvrez ce qui se passe vraiment dans votre entreprise et pourquoi.',
          icon: '🔍',
        },
        {
          title: 'Prédictions précises',
          description:
            'Anticipez les tendances futures et préparez-vous en conséquence.',
          icon: '🔮',
        },
        {
          title: 'Optimisation continue',
          description:
            'Identifiez les opportunités d\'amélioration et mesurez l\'impact de vos actions.',
          icon: '📊',
        },
      ],
    },
    process: {
      title: 'Notre méthodologie d\'analyse de données',
      description:
        'Nous suivons une approche structurée qui garantit des analyses rigoureuses et des recommandations actionnables basées sur vos données.',
      steps: [
        {
          number: '01',
          title: 'Cadrage et préparation',
          description:
            'Définition des questions d\'affaires et préparation des données.',
          points: [
            'Identification des objectifs analytiques',
            'Collecte et consolidation des données',
            'Nettoyage et validation des données',
            'Exploration initiale des données',
          ],
        },
        {
          number: '02',
          title: 'Analyse approfondie',
          description:
            'Application de techniques analytiques avancées pour découvrir des insights.',
          points: [
            'Analyse statistique et descriptive',
            'Modélisation prédictive si applicable',
            'Identification de patterns et corrélations',
            'Tests d\'hypothèses',
          ],
        },
        {
          number: '03',
          title: 'Insights et recommandations',
          description:
            'Communication des findings et plan d\'action pour capitaliser sur les insights.',
          points: [
            'Synthèse des découvertes clés',
            'Recommandations actionnables',
            'Estimation de l\'impact potentiel',
            'Plan de mise en œuvre',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quelle est la différence entre analyse de données et science des données?',
        answer:
          'L\'analyse de données se concentre sur l\'examen des données historiques pour comprendre le passé et le présent. La science des données va plus loin avec des modèles prédictifs et du machine learning pour anticiper le futur.',
      },
      {
        question: 'Avons-nous besoin d\'outils spéciaux pour l\'analyse de données?',
        answer:
          'Nous utilisons des outils professionnels d\'analyse (Python, R, SQL, etc.), mais nous pouvons aussi travailler avec vos outils existants comme Excel pour des analyses plus simples. Le choix dépend de la complexité de l\'analyse.',
      },
      {
        question: 'Combien de temps prend une analyse de données typique?',
        answer:
          'Une analyse exploratoire simple peut prendre 1-2 semaines, tandis qu\'une analyse approfondie avec modélisation peut nécessiter 4-8 semaines. La durée dépend de la qualité des données et de la complexité des questions posées.',
      },
      {
        question: 'Que faire si nos données sont de mauvaise qualité?',
        answer:
          'Nous commençons toujours par évaluer la qualité des données. Si nécessaire, nous incluons une phase de nettoyage et d\'amélioration de la qualité avant l\'analyse proprement dite.',
      },
    ],
  },
  {
    slug: 'data-visualization',
    title: 'Visualisation de données',
    category: 'Gestion des données',
    hero: {
      subtitle: 'Donnez vie à vos données',
      description:
        'Une visualisation de données efficace transforme des chiffres complexes en histoires visuelles compréhensibles et mémorables. Nous créons des tableaux de bord interactifs et des visualisations personnalisées qui facilitent la compréhension et accélèrent la prise de décision.',
    },
    whySection: {
      title: 'Pourquoi la visualisation de données est cruciale?',
      reasons: [
        {
          title: 'Compréhension instantanée',
          description:
            'Saisissez les tendances et anomalies en un coup d\'œil, sans analyses complexes.',
          icon: '👁️',
        },
        {
          title: 'Communication efficace',
          description:
            'Communiquez des insights complexes de manière claire à tous les niveaux.',
          icon: '💬',
        },
        {
          title: 'Décisions plus rapides',
          description:
            'Accédez aux métriques clés en temps réel pour agir rapidement.',
          icon: '⚡',
        },
      ],
    },
    process: {
      title: 'Notre processus de création de visualisations',
      description:
        'Nous combinons design thinking et expertise en données pour créer des visualisations qui sont à la fois belles et fonctionnelles.',
      steps: [
        {
          number: '01',
          title: 'Définition des besoins',
          description:
            'Compréhension des utilisateurs, des décisions à prendre et des métriques importantes.',
          points: [
            'Identification des audiences cibles',
            'Définition des KPIs et métriques',
            'Compréhension du contexte décisionnel',
            'Audit des sources de données',
          ],
        },
        {
          number: '02',
          title: 'Design et prototypage',
          description:
            'Conception de visualisations intuitives et impactantes.',
          points: [
            'Choix des types de graphiques appropriés',
            'Design de l\'interface utilisateur',
            'Prototypes interactifs',
            'Validation avec les utilisateurs',
          ],
        },
        {
          number: '03',
          title: 'Développement et déploiement',
          description:
            'Construction de tableaux de bord interactifs et mise en production.',
          points: [
            'Intégration des sources de données',
            'Développement des dashboards',
            'Tests de performance',
            'Formation des utilisateurs',
          ],
        },
      ],
    },
    faqs: [
      {
        question: 'Quels outils de visualisation utilisez-vous?',
        answer:
          'Nous utilisons divers outils selon les besoins : Power BI, Tableau pour les solutions d\'entreprise, ou des solutions sur mesure avec D3.js, Plotly, et autres bibliothèques de visualisation modernes.',
      },
      {
        question: 'Peut-on connecter nos tableaux de bord à nos systèmes existants?',
        answer:
          'Absolument! Nous créons des connexions en temps réel ou programmées avec vos bases de données, ERP, CRM et autres systèmes pour que vos dashboards affichent toujours les données les plus récentes.',
      },
      {
        question: 'Les visualisations seront-elles accessibles sur mobile?',
        answer:
          'Oui, nous concevons toutes nos visualisations avec une approche responsive qui garantit une expérience optimale sur desktop, tablette et smartphone.',
      },
      {
        question: 'Combien coûte le développement d\'un tableau de bord?',
        answer:
          'Le coût varie selon la complexité : un dashboard simple avec quelques métriques peut coûter 5 000$ - 10 000$, tandis qu\'une solution complète avec multiples dashboards et intégrations complexes peut atteindre 50 000$ ou plus.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
