import { ContactLink, Experience, NavItem, Project, SkillGroup } from '../models/portfolio.models';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'Education', href: '#education' },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  { title: 'Application development', skills: ['C#', 'ASP.NET', 'Angular', 'HTML', 'CSS'] },
  { title: 'Cloud & architecture', skills: ['Azure Services', 'SignalR', 'Multi-tenant Architecture'] },
  { title: 'Data & quality', skills: ['SQL Server', 'Unit Testing', 'Git'] },
];

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Devfinity LLC.', role: 'Senior Software Engineer', period: 'Oct 2020 — Present',
    summary: 'Designing and developing scalable web applications with .NET Core and Angular, with a focus on cloud-native and multi-tenant systems.',
    highlights: [
      'Architected Azure solutions across App Services, Functions, Storage, and Cognitive Search.',
      'Developed RESTful APIs and a real-time communication system using SignalR.',
      'Led code reviews, refactoring, and best-practice adoption across the development workflow.',
      'Translated business requirements into scalable technical solutions with cross-functional teams.',
    ],
    technologies: ['.NET Core', 'Angular', 'Azure', 'SignalR', 'REST APIs'],
  },
  {
    company: 'Insight Workshop', role: 'Software Engineer', period: 'May 2018 — Sep 2020',
    summary: 'Developed enterprise applications using .NET Core and Angular, deployed and managed on Microsoft Azure.',
    highlights: [
      'Contributed to system design and architectural decisions with senior developers.',
      'Worked across requirements, development, debugging, and performance optimization.',
      'Refactored modules for scalability and maintainability and implemented unit testing.',
    ],
    technologies: ['.NET Core', 'Angular', 'Microsoft Azure', 'Unit Testing'],
  },
  {
    company: 'GAPSCO', role: 'ASP.NET Developer', period: 'Jun 2017 — Mar 2018',
    summary: 'Worked across the software development lifecycle on web applications built with .NET MVC and SQL Server.',
    highlights: [
      'Wrote complex T-SQL queries and stored procedures for efficient data handling.',
      'Improved existing systems through bug fixes, performance work, and architecture collaboration.',
    ],
    technologies: ['.NET MVC', 'SQL Server', 'T-SQL'],
  },
  {
    company: 'Young Minds Creation', role: 'Jr. ASP.NET Developer', period: 'Jan 2017 — Jun 2017',
    summary: 'Developed and maintained .NET MVC and SQL Server web applications.',
    highlights: ['Supported debugging, testing, system configuration, and application stability.'],
    technologies: ['.NET MVC', 'SQL Server', 'System Testing'],
  },
];

export const PROJECTS: readonly Project[] = [
  {
    index: '01', title: 'Multi-tenant SaaS architecture',
    description: 'Designed, developed, and managed scalable web applications supporting multi-tenant architecture.',
    technologies: ['.NET Core', 'Angular', 'Multi-tenant Architecture'],
  },
  {
    index: '02', title: 'Cloud-native Azure solutions',
    description: 'Architected and maintained solutions using Azure App Services, Azure Functions, Azure Storage, and Azure Cognitive Search.',
    technologies: ['Azure App Services', 'Azure Functions', 'Azure Storage', 'Cognitive Search'],
  },
  {
    index: '03', title: 'Real-time communication system',
    description: 'Built a real-time communication system using SignalR to improve interaction and responsiveness.',
    technologies: ['SignalR', 'RESTful APIs', '.NET Core'],
  },
];

export const CONTACT_LINKS: readonly ContactLink[] = [
  { label: 'Email', value: 'mahendranpandey@gmail.com', href: 'mailto:mahendranpandey@gmail.com' },
  { label: 'Phone', value: '+977 9860659642', href: 'tel:+9779860659642' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pmahendra', href: 'https://linkedin.com/in/pmahendra', external: true },
  { label: 'Website', value: 'mahendrapandey.com.np', href: 'https://mahendrapandey.com.np', external: true },
  { label: 'Location', value: 'Kathmandu, Balkumari 32, Nepal' },
];
