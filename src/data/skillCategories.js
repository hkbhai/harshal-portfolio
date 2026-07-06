import {
  siLaravel,
  siPhp,
  siReact,
  siJavascript,
  siHtml5,
  siCss,
  siTailwindcss,
  siBootstrap,
  siMysql,
  siElasticsearch,
  siCloudflare,
  siGit,
  siGithub,
  siClaude,
  siGooglegemini,
} from 'simple-icons';

export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      {
        name: 'Laravel',
        icon: siLaravel,
        description: 'Enterprise-grade PHP framework',
      },
      {
        name: 'PHP',
        icon: siPhp,
        description: 'Server-side scripting language',
      },
      {
        name: 'REST API Development',
        lucideIcon: 'Webhook',
        description: 'Secure API design and integration',
      },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: siReact,
        description: 'Component-based UI library',
      },
      {
        name: 'JavaScript (ES6+)',
        icon: siJavascript,
        description: 'Modern client-side scripting',
      },
      {
        name: 'HTML5',
        icon: siHtml5,
        description: 'Semantic web markup',
      },
      {
        name: 'CSS3',
        icon: siCss,
        description: 'Modern styling and layouts',
      },
      {
        name: 'Tailwind CSS',
        icon: siTailwindcss,
        description: 'Utility-first CSS framework',
      },
      {
        name: 'Bootstrap',
        icon: siBootstrap,
        description: 'Responsive CSS framework',
      },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      {
        name: 'MySQL',
        icon: siMysql,
        description: 'Relational database management',
      },
    ],
  },
  {
    id: 'search-cloud',
    label: 'Search & Cloud',
    skills: [
      {
        name: 'Elasticsearch',
        icon: siElasticsearch,
        description: 'Distributed search and analytics',
      },
      {
        name: 'Amazon S3',
        lucideIcon: 'Cloud',
        description: 'Scalable cloud object storage',
      },
      {
        name: 'Cloudflare CDN',
        icon: siCloudflare,
        description: 'Global content delivery network',
      },
      {
        name: 'Wasabi',
        lucideIcon: 'HardDrive',
        description: 'Cloud storage solution',
      },
    ],
  },
  {
    id: 'version-control',
    label: 'Version Control',
    skills: [
      {
        name: 'Git',
        icon: siGit,
        description: 'Distributed version control',
      },
      {
        name: 'GitHub',
        icon: siGithub,
        description: 'Code hosting and collaboration',
      },
    ],
  },
  {
    id: 'ai-development',
    label: 'AI-Assisted Development',
    skills: [
      {
        name: 'ChatGPT',
        lucideIcon: 'MessageSquare',
        description: 'AI pair programming assistant',
      },
      {
        name: 'Cursor AI',
        lucideIcon: 'MousePointer2',
        description: 'AI-powered code editor',
      },
      {
        name: 'Claude AI',
        icon: siClaude,
        description: 'Advanced AI coding assistant',
      },
      {
        name: 'GitHub Copilot',
        icon: siGithub,
        description: 'AI code completion tool',
      },
      {
        name: 'Gemini',
        icon: siGooglegemini,
        description: 'Google AI coding assistant',
      },
      {
        name: 'Kiro IDE',
        lucideIcon: 'Code2',
        description: 'AI-native integrated development environment',
      },
      {
        name: 'Kimi Code',
        lucideIcon: 'Bot',
        description: 'AI coding assistant for intelligent development',
      },
    ],
  },
];
