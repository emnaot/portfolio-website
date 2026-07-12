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
    items: ["NestJS", "Express.js", ".NET Core", "Flask", "Laravel", "REST APIs"],
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
    title: "SIEM / XDR Cybersecurity Platform",
    subtitle: "AI-driven threat detection at production scale",
    description:
      "A modular detection-and-response platform for Neoxion Technologies — microservices orchestrated with Docker Compose, a React/Ant Design console for hosts, agents, and alerts, and a self-healing Go agent handling automated deployment in the field.",
    highlights: [
      "Kafka Connect streaming security events into OpenSearch, normalized to ECS format for threat detection across 1,500+ Sigma rules",
      "17 Random Cut Forest anomaly detectors mapped to MITRE ATT&CK techniques for real-time coverage",
      "Internal PKI on RSA 4096 with mutual TLS securing every service-to-service connection",
      "Self-healing Go agent (Sysmon/Winlogbeat) using one-time tokens for automated WinRM deployment",
    ],
    stack: ["React", "Ant Design", "NestJS", "PostgreSQL", "Go", "Kafka", "OpenSearch", "Docker Compose", "PKI / mTLS"],
    icon: Radar,
  },
  {
    tag: "AI / TALENT INTELLIGENCE",
    title: "AI-Powered Web Application for Talent Search and CV Management",
    subtitle: "AI-driven talent search & CV management",
    description:
      "Built during an internship at Proged Solutions — a full-stack platform on React and .NET Core with Azure Cosmos DB, designed to turn unstructured CVs into structured, matchable talent data.",
    highlights: [
      "Automated CV data extraction via Azure AI Document Intelligence",
      "Skills-based employee-project matching system",
      "Azure Active Directory and Microsoft Graph API integration for secure auth and automated user sync",
    ],
    stack: ["React", ".NET Core", "Azure Cosmos DB", "Azure AI", "Microsoft Graph"],
    icon: Braces,
  },
  {
    tag: "SAAS PLATFORM",
    title: "Organization & Member Management",
    subtitle: "Multi-tenant workspace infrastructure",
    description:
      "The invisible backbone that lets a company spin up its own secure workspace — organizations, invitations, roles, and permissions handled cleanly at scale.",
    highlights: [
      "Multi-tenant architecture isolating data and access per organization",
      "Invitation and onboarding workflows with granular role management",
      "Fine-grained, permission-based authorization across every endpoint",
    ],
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    icon: Layers,
  },
  {
    tag: "SOCIAL",
    title: "Interactive Forum Social Platform",
    subtitle: "Interactive community platform",
    description:
      "A social space built for conversation — groups, questions, polling, and real-time chat designed to keep communities engaged and connected.",
    highlights: [
      "Real-time chat and notifications powered by Appwrite's real-time backend",
      "Group, question, and comment system with live polling",
      "Modern, responsive interaction model tuned for daily active use",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Appwrite"],
    icon: Network,
  },
  {
    tag: "HEALTHCARE",
    title: "Medical Appointment & Patient Management",
    subtitle: "Clinical operations, simplified",
    description:
      "Built at King Digital YC — a Laravel (MVC) application covering the full patient journey, from online booking to staff scheduling, with access strictly scoped by role.",
    highlights: [
      "Online booking system with a staff calendar view for scheduling and consultations",
      "Patient record and prescription handling with strict data boundaries",
      "Role-based access control separating patients, medical staff, and administrators",
      "Analytics dashboard surfacing appointment and patient activity",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"],
    icon: Activity,
  },
];

export const TIMELINE = [
  {
    period: "Nov 2025 — May 2026",
    role: "Full-Stack & Cybersecurity Engineer Intern",
    org: "Neoxion Technologies · Remote, Tunisia",
    detail:
      "Architected a modular SIEM/XDR platform on Docker Compose microservices, secured with an internal PKI and mutual TLS. Built the React/Ant Design + NestJS/PostgreSQL console for host, agent, and alert management, and configured Kafka Connect pipelines feeding OpenSearch across 1,500+ Sigma rules and 17 MITRE ATT&CK-mapped anomaly detectors.",
    icon: Shield,
  },
  {
    period: "Jan 2025 — Dec 2025",
    role: "Freelance Full-Stack Engineer",
    org: "Upwork · Remote, United States (part-time, parallel)",
    detail:
      "Delivered scalable production applications in React.js, Next.js, and TypeScript for clients on Upwork. Designed reusable, accessible frontend architectures and built secure backend APIs with authentication and third-party integrations end to end.",
    icon: Briefcase,
  },
  {
    period: "Feb 2024 — May 2024",
    role: "Full-Stack & AI Engineer Intern",
    org: "Proged Solutions · Hybrid, Tunisia",
    detail:
      "Built a React.js + .NET Core application on Azure Cosmos DB, integrated Azure Active Directory and Microsoft Graph for secure auth and user sync, and shipped AI-powered CV data extraction via Azure AI Document Intelligence plus a skills-based employee-project matching system.",
    icon: Cpu,
  },
  {
    period: "Jul 2023 — Aug 2023",
    role: "Full-Stack Engineer Intern",
    org: "King Digital YC · On-site, Tunisia",
    detail:
      "Developed a Laravel (MVC) + MySQL medical management application handling patient records and appointments, with authentication, role-based access control, an online booking system, staff calendar, and analytics dashboard.",
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
  { value: "5", label: "Full-scale systems shipped end to end" },
  { value: "3", label: "Domains — AI, security, cloud infra" },
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
