export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      stack: "Stack",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      status: "AVAILABLE FOR NEW ENGAGEMENTS",
      roleTypes: ["AI SYSTEMS", "SECURE INFRASTRUCTURE", "CLOUD PLATFORMS", "MODERN WEB APPS"],
      subtitle:
        "Full-Stack & AI Engineer designing production-grade software — from secure backend systems to AI-assisted applications and modern, resilient web platforms.",
      cta1: "View the work",
      cta2: "Start a conversation",
      meta: {
        ai: {
          value: "AI / ML",
          label: "Detection systems & intelligent tooling"
        },
        security: {
          value: "SECURITY",
          label: "SIEM/XDR, PKI, zero-trust architecture"
        },
        cloud: {
          value: "CLOUD",
          label: "Containerized, scalable infrastructure"
        },
        web: {
          value: "WEB",
          label: "Modern, accessible product engineering"
        },
        base: {
          value: "BASE",
          label: "Sfax, Tunisia — open to remote & relocation"
        }
      }
    },
    skills: {
      eyebrow: "02 — Technical Stack",
      title: "A toolkit built for AI-driven, secure systems.",
      desc: "Grouped by the role each layer plays — from language choice to the cybersecurity practices woven through everything above it.",
      groups: [
        {
          title: "Programming Languages",
        },
        {
          title: "Frontend",
        },
        {
          title: "Backend",
        },
        {
          title: "AI & Machine Learning",
        },
        {
          title: "Data & Messaging",
        },
        {
          title: "Cloud & DevOps",
        },
        {
          title: "Security",
        },
        {
          title: "Tools & Methods",
        },
      ]
    },
    work: {
      eyebrow: "03 — Featured Work",
      title: "Five systems. Five domains. One engineering standard.",
      desc:
        "Each project shipped as a complete product — architecture, security, and interface treated as one problem, not three.",
      showMore: "Show More",
      showLess: "Show Less",
      projects: [
        {
          tag: "SECURITY OPERATIONS",
          title: "SIEM/XDR Cybersecurity Platform with AI Detection System",
          subtitle: "Real-time threat detection at scale",
          description:
            "Built a scalable SIEM/XDR cybersecurity platform using a microservices architecture for real-time Windows threat detection. Developed backend services with NestJS and a React.js + Ant Design dashboard for alert monitoring, agent management, and analytics. Created a Go-based Windows agent integrating Sysmon/Winlogbeat with secure Kafka (mTLS) communication and self-healing capabilities. Implemented ML-based anomaly detection (Random Cut Forest) and integrated 1500+ Sigma rules mapped to MITRE ATT&CK. Deployed a zero-trust system using internal PKI, mutual TLS, and Docker infrastructure.",
          highlights: [
            "Modular microservices architecture orchestrated with Docker Compose",
            "Go-based self-healing Windows agent with Sysmon/Winlogbeat integration",
            "17 Random Cut Forest anomaly detectors mapped to MITRE ATT&CK techniques",
            "1500+ Sigma rules for threat detection in OpenSearch with ECS normalization",
            "Internal PKI (RSA 4096) and mutual TLS for zero-trust security",
          ],
        },
        {
          tag: "AI / TALENT INTELLIGENCE",
          title: "AI-Powered Web Application for Talent Search and CV Management",
          subtitle: "Automated talent management & CV generation",
          description:
            "ProfilFlow is a web application developed to automate and optimize talent management. It features a search and selection system, enabling efficient identification of suitable employees for specific missions. I implemented functionalities for comprehensive CV management, automatic updates with new skills and projects, AI-driven generation of professional CVs, and management of user roles and permissions, optimizing resource allocation and ensuring secure access while reducing administrative workload.",
          highlights: [
            "Automated CV data extraction via Azure AI Document Intelligence",
            "AI-powered professional CV generation",
            "Skills-based employee-project matching algorithm",
            "Role-based access control system",
          ],
        },
        {
          tag: "SAAS PLATFORM",
          title: "Organization & Member Management Platform",
          subtitle: "Secure multi-tenant workspace management",
          description:
            "OrgManager is a platform that helps users create and manage organizations, invite members, and control access through clearly defined roles. I built the system to support secure sign-up, joining organizations through invitations, and managing permissions for owners, admins, users, and viewers. The goal was to provide a clean and easy way for teams to organize their members and maintain clear access levels.",
          highlights: [
            "Create and manage multiple organizations",
            "Invite members via email with secure onboarding",
            "Granular role management (Owner, Admin, User, Viewer)",
            "Multi-tenant architecture with data isolation",
          ],
        },
        {
          tag: "SOCIAL",
          title: "Interactive Forum Social Platform",
          subtitle: "Engaging community interaction",
          description:
            "LifeQs is an interactive social forum that allows users to ask questions, comment, chat privately, join groups, and create polls. I designed and built the platform to deliver a smooth, engaging experience with real-time communication, customizable profiles, and community interaction features. The goal was to create a modern, user-friendly space that encourages participation and connection.",
          highlights: [
            "Real-time chat and notifications powered by Appwrite",
            "Group creation and management",
            "Question, comment, and live polling system",
            "Customizable user profiles",
          ],
        },
        {
          tag: "E-COMMERCE",
          title: "Vape Store E-commerce Platform",
          subtitle: "Modern online shopping experience",
          description:
            "Developed an e-commerce platform for a vape store with key features like product filtering, search, add-to-cart, and a secure checkout with Stripe integration. The platform includes image zoom for detailed product views, full CRUD operations for product management, and role-based access for admins and users. JWT token authentication ensures secure access, and the clean, modern UI enhances the shopping experience, making it easy and enjoyable for customers.",
          highlights: [
            "Product filtering, search, and image zoom",
            "Add-to-cart and Stripe checkout integration",
            "Full CRUD product management for admins",
            "JWT-based authentication and role-based access control",
          ],
        },
        {
          tag: "HEALTHCARE",
          title: "Medical Appointment and Patient Management System",
          subtitle: "Streamlined clinical operations",
          description:
            "The web application was developed to simplify medical appointment booking and patient record management for healthcare facilities. Patients can book and confirm appointments online, while administrators have tools to manage appointments comprehensively. The system handles patient information, consultations, and prescriptions. A calendar view enhances the scheduling process, and user role management ensures secure access. My contributions improved operational efficiency and streamlined patient care coordination.",
          highlights: [
            "Online appointment booking and confirmation for patients",
            "Staff calendar view for scheduling and consultations",
            "Patient record, consultation, and prescription management",
            "Role-based access control for patients and medical staff",
          ],
        },
      ]
    },
    about: {
      eyebrow: "01 — About",
      title: "Building end-to-end solutions across domains.",
      p1:
        "I'm a Full-Stack & AI Engineer with over two years of experience building production-grade software across various domains — from cybersecurity platforms and AI-driven tools to e-commerce solutions, social platforms, and medical management systems.",
      p2:
        "My expertise spans full-stack web development, applied AI & machine learning, secure backend architecture, and cloud infrastructure. I love turning complex problems into simple, scalable, and user-friendly solutions.",
      p3:
        "I work end to end — from designing data models and APIs to building responsive, modern interfaces — and I always prioritize clean code, performance, and security in everything I build.",
    },
    experience: {
      eyebrow: "02 — Path",
      title: "Experience, education, and certifications.",
      educationLabel: "Education",
      certificationsLabel: "Certifications",
      languagesLabel: "Languages",
      timeline: [
        {
          period: "Nov 2025 — May 2026",
          role: "Full-Stack & Cybersecurity Engineer Intern",
          org: "Remote, Tunisia",
          detail: [
            "Worked on the development of a scalable SIEM/XDR security platform using a microservices architecture for real-time Windows threat detection and monitoring.",
            "Built backend services using NestJS and developed a full React.js + Ant Design frontend including dashboards, alert management, agent monitoring, and detection systems.",
            "Developed a Windows agent in Go integrating Sysmon and Winlogbeat with secure Kafka communication (mTLS) and self-healing mechanisms.",
            "Implemented machine learning-based anomaly detection (Random Cut Forest) and integrated 1500+ Sigma rules into OpenSearch for MITRE ATT&CK threat detection.",
            "Designed and deployed a zero-trust security architecture using internal PKI, mutual TLS, and Docker-based infrastructure for scalable deployment.",
          ],
        },
        {
          period: "Jan 2025 — Dec 2025",
          role: "Freelance Full-Stack Engineer",
          org: "Remote, United States (part-time, parallel)",
          detail: [
            "Developed and delivered scalable full-stack web applications for clients using React.js, Next.js, and TypeScript.",
            "Built modern frontend architectures with reusable components, responsive UI, and optimized performance using Tailwind CSS.",
            "Developed secure backend APIs and integrated third-party services to support dynamic and data-driven applications.",
            "Implemented authentication systems, session management, and API integrations for production-ready web applications.",
            "Collaborated directly with clients to define requirements, improve system design, and deliver maintainable solutions.",
          ],
        },
        {
          period: "Feb 2024 — May 2024",
          role: "Full-Stack & AI Engineer Intern",
          org: "Hybrid, Tunisia",
          detail: [
            "Developed a full-stack web application using React.js for the frontend and .NET for the backend, with Azure Cosmos DB for data storage.",
            "Integrated Azure Active Directory for secure authentication and Microsoft Graph API for user synchronization.",
            "Implemented Azure AI Document Intelligence to automatically extract and structure CV data from PDFs.",
            "Automated CV updates using Power Automate workflows triggered by Azure DevOps project changes.",
            "Built a role-based access control system and an AI-powered matching algorithm to identify suitable collaborators for specific missions based on extracted skills and project experience.",
          ],
        },
        {
          period: "Jul 2023 — Aug 2023",
          role: "Full-Stack Engineer Intern",
          org: "On-site, Tunisia",
          detail: [
            "Developed a full-stack medical management web application using Laravel PHP framework with MVC architecture for the backend and HTML5, CSS, and JavaScript for the frontend.",
            "Implemented user authentication and authorization systems for patients and medical staff.",
            "Designed and managed the MySQL database using phpMyAdmin to handle patient records, appointments, consultations, and prescriptions.",
            "Created interactive features including online appointment booking, calendar view for medical staff, and dynamic dashboard with statistics.",
            "Built responsive interfaces for both patients and medical staff with dedicated modules for managing appointments, medical records, and prescriptions.",
          ],
        },
      ],
      educationItems: [
        {
          title: "Master's Degree — Information Systems & Network Development",
          org: "Higher Institute of Technological Studies, Tunisia · Software Engineering",
          period: "2024 — 2026",
        },
        {
          title: "Bachelor's Degree — Computer Science",
          org: "Higher Institute of Informatics and Multimedia, Tunisia · Data Analysis & Big Data",
          period: "2021 — 2024",
        },
      ],
      certificationsItems: [
        { label: "Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp — Udemy" },
        { label: "React – The Complete Guide (incl. Next.js, Redux) — Udemy" },
      ],
      languagesItems: [
        { label: "Arabic", level: "Native" },
        { label: "English", level: "Professional" },
        { label: "French", level: "Professional" },
      ],
    },
    contact: {
      eyebrow: "04 — Contact",
      title: "Let's build something<br />that has to work.",
      desc:
        "Open to full-time roles, contract engagements, and collaborations with teams building serious AI, security, or cloud products.",
      contacts: {
        email: "emnaothmenn@gmail.com",
        phone: "+216 25-550-155",
        linkedin: "LinkedIn",
        github: "GitHub",
        upwork: "Upwork",
      },
    },
    footer: {
      copyright: "© {year} Emna Othmen — Full-Stack & AI Engineer",
      systemStatus: "SYSTEM STATUS: ONLINE",
    },
    stats: [
      { value: "2+", label: "Years building production software" },
      { value: "6", label: "Full-scale systems shipped end to end" },
      { value: "4", label: "Domains — AI, security, e-commerce, cloud" },
      { value: "4", label: "Internships & engagements across industries" },
    ],
  },
  fr: {
    nav: {
      work: "Projets",
      about: "À propos",
      stack: "Stack",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      status: "DISPONIBLE POUR DE NOUVEAUX PROJETS",
      roleTypes: ["SYSTÈMES D'IA", "INFRASTRUCTURE SÉCURISÉE", "PLATEFORMES CLOUD", "APPS WEB MODERNES"],
      subtitle:
        "Ingénieure Full-Stack & IA concevant des logiciels de qualité production — des systèmes backend sécurisés aux applications assistées par IA et aux plateformes web modernes et résilientes.",
      cta1: "Voir les projets",
      cta2: "Commencer une conversation",
      meta: {
        ai: {
          value: "IA / ML",
          label: "Systèmes de détection et outils intelligents"
        },
        security: {
          value: "SÉCURITÉ",
          label: "SIEM/XDR, PKI, architecture zero-trust"
        },
        cloud: {
          value: "CLOUD",
          label: "Infrastructure conteneurisée et évolutive"
        },
        web: {
          value: "WEB",
          label: "Ingénierie de produits moderne et accessible"
        },
        base: {
          value: "BASE",
          label: "Sfax, Tunisie — ouverte au remote & réinstallation"
        }
      }
    },
    skills: {
      eyebrow: "02 — Stack Technique",
      title: "Une boîte à outils conçue pour les systèmes sécurisés et pilotés par l'IA.",
      desc: "Regroupés par le rôle que joue chaque couche — du choix du langage aux pratiques de cybersécurité tissées à travers tout ce qui précède.",
      groups: [
        {
          title: "Langages de programmation",
        },
        {
          title: "Frontend",
        },
        {
          title: "Backend",
        },
        {
          title: "IA & Machine Learning",
        },
        {
          title: "Données & Messagerie",
        },
        {
          title: "Cloud & DevOps",
        },
        {
          title: "Sécurité",
        },
        {
          title: "Outils & Méthodes",
        },
      ]
    },
    work: {
      eyebrow: "03 — Projets en vedette",
      title: "Cinq systèmes. Cinq domaines. Un standard d'ingénierie.",
      desc:
        "Chaque projet livré en tant que produit complet — architecture, sécurité et interface traités comme un seul problème, pas trois.",
      showMore: "Voir plus",
      showLess: "Voir moins",
      projects: [
        {
          tag: "OPÉRATIONS DE SÉCURITÉ",
          title: "Plateforme de cybersécurité SIEM/XDR avec système de détection IA",
          subtitle: "Détection de menaces en temps réel à grande échelle",
          description:
            "Construite une plateforme de cybersécurité SIEM/XDR évolutive utilisant une architecture microservices pour la détection de menaces Windows en temps réel. Développé des services backend avec NestJS et un tableau de bord React.js + Ant Design pour la surveillance des alertes, la gestion des agents et l'analyse. Créé un agent Windows basé sur Go intégrant Sysmon/Winlogbeat avec une communication Kafka sécurisée (mTLS) et des capacités d'auto-réparation. Implémenté une détection d'anomalies basée sur le ML (Random Cut Forest) et intégré plus de 1500 règles Sigma mappées à MITRE ATT&CK. Déployé un système zero-trust utilisant une PKI interne, TLS mutuel et une infrastructure Docker.",
          highlights: [
            "Architecture microservices modulaire orchestrée avec Docker Compose",
            "Agent Windows auto-réparateur basé sur Go avec intégration Sysmon/Winlogbeat",
            "17 détecteurs d'anomalies Random Cut Forest mappés aux techniques MITRE ATT&CK",
            "Plus de 1500 règles Sigma pour la détection de menaces dans OpenSearch avec normalisation ECS",
            "PKI interne (RSA 4096) et TLS mutuel pour la sécurité zero-trust",
          ],
        },
        {
          tag: "IA / INTELLIGENCE TALENTS",
          title: "Application web IA pour la recherche de talents et la gestion de CV",
          subtitle: "Gestion automatisée des talents et génération de CV",
          description:
            "ProfilFlow est une application web développée pour automatiser et optimiser la gestion des talents. Elle propose un système de recherche et de sélection, permettant une identification efficace des employés adaptés à des missions spécifiques. J'ai implémenté des fonctionnalités de gestion complète des CV, de mises à jour automatiques avec de nouvelles compétences et projets, de génération IA de CV professionnels, et de gestion des rôles et permissions des utilisateurs, optimisant l'allocation des ressources et assurant un accès sécurisé tout en réduisant la charge administrative.",
          highlights: [
            "Extraction automatisée des données de CV via Azure AI Document Intelligence",
            "Génération de CV professionnels pilotée par l'IA",
            "Algorithme de correspondance employé-projet basé sur les compétences",
            "Système de contrôle d'accès basé sur les rôles",
          ],
        },
        {
          tag: "PLATEFORME SAAS",
          title: "Plateforme de gestion d'organisations et de membres",
          subtitle: "Gestion sécurisée d'espaces de travail multi-locataires",
          description:
            "OrgManager est une plateforme qui aide les utilisateurs à créer et gérer des organisations, inviter des membres et contrôler l'accès via des rôles clairement définis. J'ai construit le système pour prendre en charge l'inscription sécurisée, l'adhésion à des organisations via invitations et la gestion des permissions pour les propriétaires, administrateurs, utilisateurs et spectateurs. L'objectif était de fournir un moyen propre et facile pour les équipes d'organiser leurs membres et de maintenir des niveaux d'accès clairs.",
          highlights: [
            "Créer et gérer plusieurs organisations",
            "Inviter des membres par e-mail avec intégration sécurisée",
            "Gestion granulaire des rôles (Propriétaire, Admin, Utilisateur, Spectateur)",
            "Architecture multi-locataire avec isolation des données",
          ],
        },
        {
          tag: "SOCIAL",
          title: "Plateforme sociale de forum interactif",
          subtitle: "Interaction communautaire engageante",
          description:
            "LifeQs est un forum social interactif qui permet aux utilisateurs de poser des questions, commenter, discuter en privé, rejoindre des groupes et créer des sondages. J'ai conçu et construit la plateforme pour offrir une expérience fluide et engageante avec communication en temps réel, profils personnalisables et fonctionnalités d'interaction communautaire. L'objectif était de créer un espace moderne et convivial qui encourage la participation et la connexion.",
          highlights: [
            "Chat en temps réel et notifications alimentés par Appwrite",
            "Création et gestion de groupes",
            "Système de questions, commentaires et sondages en direct",
            "Profils utilisateur personnalisables",
          ],
        },
        {
          tag: "E-COMMERCE",
          title: "Plateforme e-commerce de magasin de vape",
          subtitle: "Expérience d'achat en ligne moderne",
          description:
            "Développé une plateforme e-commerce pour un magasin de vape avec des fonctionnalités clés comme le filtrage des produits, la recherche, l'ajout au panier et un paiement sécurisé avec intégration Stripe. La plateforme inclut un zoom d'image pour des vues détaillées des produits, des opérations CRUD complètes pour la gestion des produits et un accès basé sur les rôles pour les administrateurs et les utilisateurs. L'authentification par token JWT assure un accès sécurisé, et l'UI moderne et propre améliore l'expérience d'achat, la rendant facile et agréable pour les clients.",
          highlights: [
            "Filtrage, recherche et zoom d'image des produits",
            "Ajout au panier et intégration du paiement Stripe",
            "Gestion complète des produits CRUD pour les administrateurs",
            "Authentification JWT et contrôle d'accès basé sur les rôles",
          ],
        },
        {
          tag: "SANTÉ",
          title: "Système de gestion de rendez-vous médicaux et de patients",
          subtitle: "Opérations cliniques rationalisées",
          description:
            "L'application web a été développée pour simplifier la prise de rendez-vous médicaux et la gestion des dossiers patients pour les établissements de santé. Les patients peuvent réserver et confirmer des rendez-vous en ligne, tandis que les administrateurs disposent d'outils pour gérer les rendez-vous de manière complète. Le système gère les informations patients, les consultations et les ordonnances. Une vue calendrier améliore le processus de planification, et la gestion des rôles utilisateur assure un accès sécurisé. Mes contributions ont amélioré l'efficacité opérationnelle et rationalisé la coordination des soins aux patients.",
          highlights: [
            "Réservation et confirmation de rendez-vous en ligne pour les patients",
            "Vue calendrier du personnel pour la planification et les consultations",
            "Gestion des dossiers patients, consultations et ordonnances",
            "Contrôle d'accès basé sur les rôles pour les patients et le personnel médical",
          ],
        },
      ]
    },
    about: {
      eyebrow: "01 — À propos",
      title: "Construire des solutions de bout en bout dans tous les domaines.",
      p1:
        "Je suis une ingénieure Full-Stack & IA avec plus de deux ans d'expérience dans la construction de logiciels de qualité production dans divers domaines — des plateformes de cybersécurité et des outils basés sur l'IA aux solutions e-commerce, plateformes sociales et systèmes de gestion médicale.",
      p2:
        "Mon expertise couvre le développement web full-stack, l'IA appliquée et le machine learning, l'architecture backend sécurisée et l'infrastructure cloud. J'aime transformer des problèmes complexes en solutions simples, évolutives et conviviales.",
      p3:
        "Je travaille de bout en bout — de la conception des modèles de données et des APIs à la création d'interfaces réactives et modernes — et je priorise toujours le code propre, la performance et la sécurité dans tout ce que je construis.",
    },
    experience: {
      eyebrow: "02 — Parcours",
      title: "Expérience, éducation et certifications.",
      educationLabel: "Éducation",
      certificationsLabel: "Certifications",
      languagesLabel: "Langues",
      timeline: [
        {
          period: "Nov 2025 — Mai 2026",
          role: "Stagiaire Ingénieure Full-Stack & Cybersécurité",
          org: "Distant, Tunisie",
          detail: [
            "Travaillé sur le développement d'une plateforme de sécurité SIEM/XDR évolutive utilisant une architecture microservices pour la détection et la surveillance de menaces Windows en temps réel.",
            "Construit des services backend utilisant NestJS et développé un frontend complet React.js + Ant Design incluant des tableaux de bord, la gestion des alertes, la surveillance des agents et les systèmes de détection.",
            "Développé un agent Windows en Go intégrant Sysmon et Winlogbeat avec une communication Kafka sécurisée (mTLS) et des mécanismes d'auto-réparation.",
            "Implémenté une détection d'anomalies basée sur le machine learning (Random Cut Forest) et intégré plus de 1500 règles Sigma dans OpenSearch pour la détection de menaces MITRE ATT&CK.",
            "Conçu et déployé une architecture de sécurité zero-trust utilisant une PKI interne, TLS mutuel et une infrastructure basée sur Docker pour un déploiement évolutif.",
          ],
        },
        {
          period: "Jan 2025 — Déc 2025",
          role: "Ingénieure Full-Stack Freelance",
          org: "Distant, États-Unis (temps partiel, parallèle)",
          detail: [
            "Développé et livré des applications web full-stack évolutives pour les clients utilisant React.js, Next.js et TypeScript.",
            "Construit des architectures frontend modernes avec des composants réutilisables, une UI responsive et des performances optimisées utilisant Tailwind CSS.",
            "Développé des APIs backend sécurisées et intégré des services tiers pour prendre en charge des applications dynamiques et pilotées par les données.",
            "Implémenté des systèmes d'authentification, la gestion de session et des intégrations API pour des applications web prêtes pour la production.",
            "Collaboré directement avec les clients pour définir les exigences, améliorer la conception du système et livrer des solutions maintenables.",
          ],
        },
        {
          period: "Fév 2024 — Mai 2024",
          role: "Stagiaire Ingénieure Full-Stack & IA",
          org: "Hybride, Tunisie",
          detail: [
            "Développé une application web full-stack utilisant React.js pour le frontend et .NET pour le backend, avec Azure Cosmos DB pour le stockage des données.",
            "Intégré Azure Active Directory pour une authentification sécurisée et Microsoft Graph API pour la synchronisation des utilisateurs.",
            "Implémenté Azure AI Document Intelligence pour extraire et structurer automatiquement les données de CV à partir de PDF.",
            "Automatisé les mises à jour de CV utilisant des flux Power Automate déclenchés par les modifications de projet Azure DevOps.",
            "Construit un système de contrôle d'accès basé sur les rôles et un algorithme de correspondance piloté par l'IA pour identifier les collaborateurs adaptés à des missions spécifiques basées sur les compétences extraites et l'expérience projet.",
          ],
        },
        {
          period: "Juil 2023 — Août 2023",
          role: "Stagiaire Ingénieure Full-Stack",
          org: "Sur site, Tunisie",
          detail: [
            "Développé une application web de gestion médicale full-stack utilisant le framework Laravel PHP avec architecture MVC pour le backend et HTML5, CSS et JavaScript pour le frontend.",
            "Implémenté des systèmes d'authentification et d'autorisation des utilisateurs pour les patients et le personnel médical.",
            "Conçu et géré la base de données MySQL utilisant phpMyAdmin pour traiter les dossiers patients, rendez-vous, consultations et ordonnances.",
            "Créé des fonctionnalités interactives incluant la réservation de rendez-vous en ligne, la vue calendrier pour le personnel médical et un tableau de bord dynamique avec statistiques.",
            "Construit des interfaces responsives pour les patients et le personnel médical avec des modules dédiés pour la gestion des rendez-vous, des dossiers médicaux et des ordonnances.",
          ],
        },
      ],
      educationItems: [
        {
          title: "Master — Développement des Systèmes d'Information et Réseaux",
          org: "Institut Supérieur des Études Technologiques, Tunisie · Génie Logiciel",
          period: "2024 — 2026",
        },
        {
          title: "Licence — Informatique",
          org: "Institut Supérieur d'Informatique et Multimédia, Tunisie · Analyse de Données & Big Data",
          period: "2021 — 2024",
        },
      ],
      certificationsItems: [
        { label: "Bootcamp complet Data Science, Machine Learning, Deep Learning & NLP — Udemy" },
        { label: "React – Le Guide Complet (incl. Next.js, Redux) — Udemy" },
      ],
      languagesItems: [
        { label: "Arabe", level: "Natif" },
        { label: "Anglais", level: "Professionnel" },
        { label: "Français", level: "Professionnel" },
      ],
    },
    contact: {
      eyebrow: "04 — Contact",
      title: "Construisons ensemble quelque chose<br />qui doit fonctionner.",
      desc:
        "Ouverte à des postes à temps plein, des contrats et des collaborations avec des équipes construisant des produits AI, de sécurité ou cloud sérieux.",
      contacts: {
        email: "emnaothmenn@gmail.com",
        phone: "+216 25-550-155",
        linkedin: "LinkedIn",
        github: "GitHub",
        upwork: "Upwork",
      },
    },
    footer: {
      copyright: "© {year} Emna Othmen — Ingénieure Full-Stack & IA",
      systemStatus: "ÉTAT DU SYSTÈME : EN LIGNE",
    },
    stats: [
      { value: "2+", label: "Années de construction de logiciels de production" },
      { value: "6", label: "Systèmes complets livrés de bout en bout" },
      { value: "4", label: "Domaines — IA, sécurité, e-commerce, cloud" },
      { value: "4", label: "Stages & engagements dans divers secteurs" },
    ],
  },
};