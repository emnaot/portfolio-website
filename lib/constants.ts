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
  { id: "about" },
  { id: "stack" },
  { id: "work" },
  { id: "experience" },
  { id: "contact" },
];

export const SKILL_GROUPS = [
  {
    key: "lang",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "C#", "PHP", "SQL"],
  },
  {
    key: "frontend",
    icon: MonitorSmartphone,
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Ant Design"],
  },
  {
    key: "backend",
    icon: Server,
    items: ["NestJS", "Express.js", ".NET Core", "Flask", "Laravel", "Node.js", "REST APIs", "Stripe"],
  },
  {
    key: "ai",
    icon: Cpu,
    items: ["Deep Learning", "Neural Networks", "CNNs", "NLP", "Transformer Models", "TensorFlow", "PyTorch", "Scikit-learn", "MLOps"],
  },
  {
    key: "data",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "OpenSearch", "Kafka", "Kafka Connect", "Appwrite"],
  },
  {
    key: "cloud",
    icon: Cloud,
    items: ["Docker", "Docker Compose", "Microsoft Azure", "CI/CD", "Git"],
  },
  {
    key: "sec",
    icon: Shield,
    items: ["Sigma Rules", "MITRE ATT&CK", "mTLS / PKI", "JWT", "WinRM", "DPAPI"],
  },
  {
    key: "tools",
    icon: Workflow,
    items: ["Jira (Kanban/Agile)", "Postman", "OpenSearch Dashboards", "DBeaver"],
  },
];

export const PROJECTS_METADATA = [
  {
    icon: Radar,
    youtubeId: "YWNBsZoMcng",
    stack: ["React", "Ant Design", "NestJS", "PostgreSQL", "Go", "Kafka", "OpenSearch", "Docker Compose", "PKI / mTLS"],
  },
  {
    icon: Braces,
    youtubeId: "iz_Qoo0w5eo",
    stack: ["React", ".NET Core", "Azure Cosmos DB", "Azure AI", "Microsoft Graph", "Azure Document Intelligence", "Azure Active Directory", "Azure Power Automate"],
  },
  {
    icon: Layers,
    stack: ["Next.js", "React", "Supabase", "Tailwind CSS"],
  },
  {
    icon: Network,
    youtubeId: "uTFDQSRoYm8",
    stack: ["React", "TypeScript", "Tailwind CSS", "Appwrite"],
  },
  {
    icon: ShoppingCart,
    youtubeId: "9yBf5LDiSpw",
    stack: ["React", "Next.js", "Node.js", "Stripe", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    icon: Activity,
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap", "RBAC"],
  },
];

export const TIMELINE_METADATA = [
  {
    icon: Shield,
  },
  {
    icon: Briefcase,
  },
  {
    icon: Cpu,
  },
  {
    icon: Code2,
  },
];

export const EDUCATION_METADATA = [
  {
    icon: GraduationCap,
  },
  {
    icon: GraduationCap,
  },
];

export const CERTS_METADATA = [
  { icon: Award },
  { icon: Award },
];

export const CONTACTS = [
  { icon: Mail, href: "mailto:emnaothmenn@gmail.com", label: "email" },
  { icon: Send, href: "tel:+21625550155", label: "phone" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/emna-othmen-121545275/", label: "linkedin" },
  { icon: Github, href: "https://github.com/emnaot", label: "github" },
  { icon: Briefcase, href: "https://www.upwork.com/freelancers/~016ab1505c187d59c2?mp_source=share", label: "upwork" },
];
