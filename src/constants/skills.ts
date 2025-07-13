export interface Skill {
  id: number;
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'database';
  color: string;
  description: {
    pt: string;
    en: string;
  };
}

export interface Category {
  key: string;
  label: {
    pt: string;
    en: string;
  };
  icon: string;
}

export const SKILLS_DATA: Skill[] = [
  // Frontend
  {
    id: 1,
    name: 'React',
    level: 90,
    icon: '⚛️',
    category: 'frontend',
    color: '#61DAFB',
    description: {
      pt: 'Biblioteca para interfaces',
      en: 'UI Library'
    }
  },
  {
    id: 2,
    name: 'TypeScript',
    level: 85,
    icon: '🔷',
    category: 'frontend',
    color: '#3178C6',
    description: {
      pt: 'JavaScript tipado',
      en: 'Typed JavaScript'
    }
  },
  {
    id: 3,
    name: 'Next.js',
    level: 80,
    icon: '▲',
    category: 'frontend',
    color: '#000000',
    description: {
      pt: 'Framework React',
      en: 'React Framework'
    }
  },
  {
    id: 4,
    name: 'Vue.js',
    level: 50,
    icon: '💚',
    category: 'frontend',
    color: '#4FC08D',
    description: {
      pt: 'Framework progressivo',
      en: 'Progressive Framework'
    }
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    level: 90,
    icon: '🎨',
    category: 'frontend',
    color: '#06B6D4',
    description: {
      pt: 'Framework CSS',
      en: 'CSS Framework'
    }
  },
  {
    id: 6,
    name: 'HTML5',
    level: 95,
    icon: '🌐',
    category: 'frontend',
    color: '#E34F26',
    description: {
      pt: 'Marcação web',
      en: 'Web Markup'
    }
  },

  // Backend
  {
    id: 7,
    name: 'Node.js',
    level: 85,
    icon: '🟢',
    category: 'backend',
    color: '#339933',
    description: {
      pt: 'Runtime JavaScript',
      en: 'JavaScript Runtime'
    }
  },
  {
    id: 8,
    name: 'Express.js',
    level: 82,
    icon: '🚀',
    category: 'backend',
    color: '#000000',
    description: {
      pt: 'Framework web',
      en: 'Web Framework'
    }
  },
  {
    id: 9,
    name: 'Python',
    level: 55,
    icon: '🐍',
    category: 'backend',
    color: '#3776AB',
    description: {
      pt: 'Linguagem versátil',
      en: 'Versatile Language'
    }
  },
  {
    id: 10,
    name: 'PHP',
    level: 60,
    icon: '🐘',
    category: 'backend',
    color: '#777BB4',
    description: {
      pt: 'Linguagem server-side',
      en: 'Server-side Language'
    }
  },

  // Mobile
  {
    id: 11,
    name: 'React Native',
    level: 80,
    icon: '📱',
    category: 'mobile',
    color: '#61DAFB',
    description: {
      pt: 'Apps mobile',
      en: 'Mobile Apps'
    }
  },
  {
    id: 12,
    name: 'Flutter',
    level: 40,
    icon: '🦋',
    category: 'mobile',
    color: '#02569B',
    description: {
      pt: 'Framework Google',
      en: 'Google Framework'
    }
  },

  // Database
  {
    id: 13,
    name: 'MongoDB',
    level: 85,
    icon: '🍃',
    category: 'database',
    color: '#47A248',
    description: {
      pt: 'Banco NoSQL',
      en: 'NoSQL Database'
    }
  },
  {
    id: 14,
    name: 'PostgreSQL',
    level: 85,
    icon: '🐘',
    category: 'database',
    color: '#336791',
    description: {
      pt: 'Banco relacional',
      en: 'Relational Database'
    }
  },
  {
    id: 15,
    name: 'MySQL',
    level: 80,
    icon: '🗄️',
    category: 'database',
    color: '#4479A1',
    description: {
      pt: 'Banco de dados',
      en: 'Database'
    }
  },
  {
    id: 16,
    name: 'Firebase',
    level: 82,
    icon: '🔥',
    category: 'database',
    color: '#FFCA28',
    description: {
      pt: 'Backend como serviço',
      en: 'Backend as a Service'
    }
  },

  // Tools
  {
    id: 17,
    name: 'Git',
    level: 90,
    icon: '📝',
    category: 'tools',
    color: '#F05032',
    description: {
      pt: 'Controle de versão',
      en: 'Version Control'
    }
  },
  {
    id: 18,
    name: 'Docker',
    level: 60,
    icon: '🐳',
    category: 'tools',
    color: '#2496ED',
    description: {
      pt: 'Containerização',
      en: 'Containerization'
    }
  },
  {
    id: 19,
    name: 'AWS',
    level: 50,
    icon: '☁️',
    category: 'tools',
    color: '#FF9900',
    description: {
      pt: 'Nuvem Amazon',
      en: 'Amazon Cloud'
    }
  },
  {
    id: 20,
    name: 'Figma',
    level: 85,
    icon: '🎨',
    category: 'tools',
    color: '#F24E1E',
    description: {
      pt: 'Design UI/UX',
      en: 'UI/UX Design'
    }
  }
];

export const SKILL_CATEGORIES: Category[] = [
  {
    key: 'all',
    label: { pt: 'Todas', en: 'All' },
    icon: '🚀'
  },
  {
    key: 'frontend',
    label: { pt: 'Frontend', en: 'Frontend' },
    icon: '💻'
  },
  {
    key: 'backend',
    label: { pt: 'Backend', en: 'Backend' },
    icon: '⚙️'
  },
  {
    key: 'mobile',
    label: { pt: 'Mobile', en: 'Mobile' },
    icon: '📱'
  },
  {
    key: 'database',
    label: { pt: 'Banco de Dados', en: 'Database' },
    icon: '🗄️'
  },
  {
    key: 'tools',
    label: { pt: 'Ferramentas', en: 'Tools' },
    icon: '🛠️'
  }
];