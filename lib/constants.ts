import {
  Shield,
  Cpu,
  Database,
  Cloud,
  Code2,
  Server,
  GraduationCap,
  Award,
  Radar,
  Braces,
  Layers,
  Network,
  Activity,
  Mail,
  Send,
  Linkedin,
  Github,
  Briefcase,
  MonitorSmartphone,
  Workflow,
  ShoppingCart,
} from "lucide-react";

export const NAV = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];

export const SKILL_GROUPS = [
  {
    key: "lang",
    title: "Programming Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "C#", "PHP", "SQL"],
  },
  {
    key: "frontend",
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Ant Design"],
  },
  {
    key: "backend",
    title: "Backend",
    icon: Server,
    items: ["NestJS", "Express.js", ".NET Core", "Flask", "Laravel", "Node.js", "REST APIs", "Stripe"],
  },
  {
    key: "ai",
    title: "AI & Machine Learning",
    icon: Cpu,
    items: ["Deep Learning", "Neural Networks", "CNNs", "NLP", "Transformer Models", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
  },
  {
    key: "data",
    title: "Data & Messaging",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "OpenSearch", "Kafka", "Kafka Connect", "Appwrite"],
  },
  {
    key: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["Docker", "Docker Compose", "Microsoft Azure", "CI/CD", "Git"],
  },
  {
    key: "sec",
    title: "Security",
    icon: Shield,
    items: ["Sigma Rules", "MITRE ATT&CK", "mTLS / PKI", "JWT", "WinRM", "DPAPI"],
  },
  {
    key: "tools",
    title: "Tools & Methods",
    icon: Workflow,
    items: ["Jira (Kanban/Agile)", "Postman", "OpenSearch Dashboards", "DBeaver"],
  },
];

export const PROJECTS = [
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
    stack: ["React", "Ant Design", "NestJS", "PostgreSQL", "Go", "Kafka", "OpenSearch", "Docker Compose", "PKI / mTLS"],
    icon: Radar,
    youtubeId: "YWNBsZoMcng",
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
    stack: ["React", ".NET Core", "Azure Cosmos DB", "Azure AI", "Microsoft Graph"],
    icon: Braces,
    youtubeId: "iz_Qoo0w5eo",
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
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    icon: Layers,
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
    stack: ["React", "TypeScript", "Tailwind CSS", "Appwrite"],
    icon: Network,
    youtubeId: "uTFDQSRoYm8",
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
    stack: ["React", "Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS", "JWT"],
    icon: ShoppingCart,
    youtubeId: "9yBf5LDiSpw",
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
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"],
    icon: Activity,
  },
];

export const TIMELINE = [
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
    icon: Shield,
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
    icon: Briefcase,
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
    icon: Cpu,
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
    icon: Code2,
  },
];

export const EDUCATION = [
  {
    icon: GraduationCap,
    title: "Master's Degree — Information Systems & Network Development",
    org: "Higher Institute of Technological Studies, Tunisia · Software Engineering",
    period: "2024 — 2026",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree — Computer Science",
    org: "Higher Institute of Informatics and Multimedia, Tunisia · Data Analysis & Big Data",
    period: "2021 — 2024",
  },
];

export const CERTS = [
  { icon: Award, label: "Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp — Udemy" },
  { icon: Award, label: "React – The Complete Guide (incl. Next.js, Redux) — Udemy" },
];

export const STATS = [
  { value: "2+", label: "Years building production software" },
  { value: "6", label: "Full-scale systems shipped end to end" },
  { value: "4", label: "Domains — AI, security, e-commerce, cloud" },
  { value: "4", label: "Internships & engagements across industries" },
];

export const CONTACTS = [
  { icon: Mail, label: "emnaothmenn@gmail.com", href: "mailto:emnaothmenn@gmail.com" },
  { icon: Send, label: "+216 25-550-155", href: "tel:+21625550155" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emna-othmen-121545275/" },
  { icon: Github, label: "GitHub", href: "https://github.com/emnaot" },
  { icon: Briefcase, label: "Upwork", href: "https://www.upwork.com/freelancers/~016ab1505c187d59c2?mp_source=share" },
];

export const LANGUAGES = [
  { label: "Arabic", level: "Native" },
  { label: "English", level: "Professional" },
  { label: "French", level: "Professional" },
];
