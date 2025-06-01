export interface Project {
  id: number;
  title: string;
  description: {
    pt: string;
    en: string;
  };
  shortDescription: {
    pt: string;
    en: string;
  };
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'api' | 'ui-ux';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  year: number;
  highlights: {
    pt: string[];
    en: string[];
  };
  images?: {
    gallery: string[];
  };
  links?: {
    live?: string;
    github?: string;
  };
  role?: {
    pt: string;
    en: string;
  };
  duration?: string;
  metrics?: {
    performance?: number;
    users?: string;
    rating?: number;
  };
}

export interface ProjectCategory {
  key: string;
  label: {
    pt: string;
    en: string;
  };
  icon: string;
  color: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: {
      pt: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e dashboard de analytics em tempo real.",
      en: "Complete e-commerce platform with admin panel, integrated payment system and real-time analytics dashboard."
    },
    shortDescription: {
      pt: "Plataforma de e-commerce moderna e responsiva",
      en: "Modern and responsive e-commerce platform"
    },
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript", "Tailwind CSS"],
    category: "fullstack",
    image: "/projects/ecommerce-preview.jpg",
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/johnsimon21/ecommerce-platform",
    status: "completed",
    featured: true,
    year: 2024,
    highlights: {
      pt: [
        "Sistema de pagamentos seguro",
        "Dashboard administrativo completo",
        "Analytics em tempo real",
        "Design responsivo"
      ],
      en: [
        "Secure payment system",
        "Complete admin dashboard",
        "Real-time analytics",
        "Responsive design"
      ]
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: {
      pt: "Aplicativo mobile para gerenciamento de tarefas com sincronização em tempo real, notificações push e colaboração em equipe.",
      en: "Mobile task management app with real-time sync, push notifications and team collaboration features."
    },
    shortDescription: {
      pt: "App de produtividade para equipes",
      en: "Productivity app for teams"
    },
    technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
    category: "mobile",
    image: "/projects/task-app-preview.jpg",
    demoUrl: "https://task-app-demo.com",
    githubUrl: "https://github.com/johnsimon21/task-management",
    status: "completed",
    featured: true,
    year: 2024,
    highlights: {
      pt: [
        "Sincronização em tempo real",
        "Notificações push",
        "Colaboração em equipe",
        "Interface intuitiva"
      ],
      en: [
        "Real-time synchronization",
        "Push notifications",
        "Team collaboration",
        "Intuitive interface"
      ]
    }
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: {
      pt: "Site portfolio pessoal com design moderno, animações suaves e sistema de tema escuro/claro. Totalmente responsivo e otimizado para SEO.",
      en: "Personal portfolio website with modern design, smooth animations and dark/light theme system. Fully responsive and SEO optimized."
    },
    shortDescription: {
      pt: "Portfolio pessoal moderno e responsivo",
      en: "Modern and responsive personal portfolio"
    },
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "web",
    image: "/projects/portfolio-preview.jpg",
    demoUrl: "https://johnsimon-portfolio.com",
    githubUrl: "https://github.com/johnsimon21/my-portfolio",
    status: "in-progress",
    featured: false,
    year: 2024,
    highlights: {
      pt: [
        "Design responsivo",
        "Animações suaves",
        "Tema escuro/claro",
        "Otimizado para SEO"
      ],
      en: [
        "Responsive design",
        "Smooth animations",
        "Dark/light theme",
        "SEO optimized"
      ]
    }
  },
  {
    id: 4,
    title: "Weather API",
    description: {
      pt: "API RESTful para dados meteorológicos com cache inteligente, rate limiting e documentação interativa. Suporta múltiplas fontes de dados.",
      en: "RESTful API for weather data with intelligent caching, rate limiting and interactive documentation. Supports multiple data sources."
    },
    shortDescription: {
      pt: "API de dados meteorológicos",
      en: "Weather data API"
    },
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Swagger"],
    category: "api",
    image: "/projects/weather-api-preview.jpg",
    githubUrl: "https://github.com/johnsimon21/weather-api",
    status: "completed",
    featured: false,
    year: 2023,
    highlights: {
      pt: [
        "Cache inteligente",
        "Rate limiting",
        "Documentação interativa",
        "Múltiplas fontes de dados"
      ],
      en: [
        "Intelligent caching",
        "Rate limiting",
        "Interactive documentation",
        "Multiple data sources"
      ]
    }
  },
  {
    id: 5,
    title: "Design System",
    description: {
      pt: "Sistema de design completo com componentes reutilizáveis, guia de estilo e documentação interativa para acelerar o desenvolvimento.",
      en: "Complete design system with reusable components, style guide and interactive documentation to accelerate development."
    },
    shortDescription: {
      pt: "Sistema de design modular",
      en: "Modular design system"
    },
    technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
    category: "ui-ux",
    image: "/projects/design-system-preview.jpg",
    demoUrl: "https://design-system-demo.com",
    githubUrl: "https://github.com/johnsimon21/design-system",
    status: "in-progress",
    featured: true,
    year: 2024,
    highlights: {
      pt: [
        "Componentes reutilizáveis",
        "Documentação interativa",
        "Guia de estilo",
        "Temas customizáveis"
      ],
      en: [
        "Reusable components",
        "Interactive documentation",
        "Style guide",
        "Customizable themes"
      ]
    }
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: {
      pt: "Dashboard para análise de redes sociais com métricas em tempo real, relatórios automatizados e integração com múltiplas plataformas.",
      en: "Social media analytics dashboard with real-time metrics, automated reports and integration with multiple platforms."
    },
    shortDescription: {
      pt: "Dashboard de analytics para redes sociais",
      en: "Social media analytics dashboard"
    },
    technologies: ["Vue.js", "Python", "FastAPI", "Chart.js", "PostgreSQL"],
    category: "fullstack",
    image: "/projects/social-dashboard-preview.jpg",
    demoUrl: "https://social-dashboard-demo.com",
    githubUrl: "https://github.com/johnsimon21/social-dashboard",
    status: "planned",
    featured: false,
    year: 2024,
    highlights: {
      pt: [
        "Métricas em tempo real",
        "Relatórios automatizados",
        "Múltiplas plataformas",
        "Visualizações interativas"
      ],
      en: [
        "Real-time metrics",
        "Automated reports",
        "Multiple platforms",
        "Interactive visualizations"
      ]
    }
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    key: 'all',
    label: { pt: 'Todos', en: 'All' },
    icon: '🚀',
    color: '#208FBB'
  },
  {
    key: 'web',
    label: { pt: 'Web', en: 'Web' },
    icon: '🌐',
    color: '#10B981'
  },
  {
    key: 'mobile',
    label: { pt: 'Mobile', en: 'Mobile' },
    icon: '📱',
    color: '#8B5CF6'
  },
  {
    key: 'fullstack',
    label: { pt: 'Full Stack', en: 'Full Stack' },
    icon: '⚡',
    color: '#F59E0B'
  },
  {
    key: 'api',
    label: { pt: 'API', en: 'API' },
    icon: '🔌',
    color: '#EF4444'
  },
  {
    key: 'ui-ux',
    label: { pt: 'UI/UX', en: 'UI/UX' },
    icon: '🎨',
    color: '#EC4899'
  }
];