import { useEffect, useState, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectsSlider = ({ isPortuguese = false }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: isPortuguese ? 'E-commerce Moderno' : 'Modern E-commerce',
      image: '/images/projects/ecommerce.png',
      description: isPortuguese ? 'Plataforma completa de vendas online' : 'Complete online sales platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/johnsimon21/ecommerce',
      liveUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: isPortuguese ? 'App de Tarefas' : 'Task Management App',
      image: '/images/projects/taskapp.jpg',
      description: isPortuguese ? 'Gerenciamento inteligente de tarefas' : 'Smart task management system',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com/johnsimon21/task-app',
      liveUrl: 'https://taskapp-demo.com'
    },
    {
      id: 3,
      title: isPortuguese ? 'Dashboard Analytics' : 'Analytics Dashboard',
      image: '/images/projects/dashboard.jpg',
      description: isPortuguese ? 'Análise de dados em tempo real' : 'Real-time data analysis',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/johnsimon21/analytics-dashboard',
      liveUrl: 'https://dashboard-demo.com'
    },
    {
      id: 4,
      title: isPortuguese ? 'App Mobile Social' : 'Social Mobile App',
      image: '/images/projects/socialapp.jpg',
      description: isPortuguese ? 'Rede social mobile moderna' : 'Modern mobile social network',
      technologies: ['React Native', 'Redux', 'Socket.io', 'AWS'],
      githubUrl: 'https://github.com/johnsimon21/social-app',
      liveUrl: 'https://socialapp-demo.com'
    },
    {
      id: 5,
      title: isPortuguese ? 'Sistema de Blog' : 'Blog System',
      image: '/images/projects/blog.jpg',
      description: isPortuguese ? 'CMS personalizado para blogs' : 'Custom CMS for blogs',
      technologies: ['Next.js', 'Prisma', 'MySQL', 'Vercel'],
      githubUrl: 'https://github.com/johnsimon21/blog-system',
      liveUrl: 'https://blog-demo.com'
    },
    {
      id: 6,
      title: isPortuguese ? 'API RESTful' : 'RESTful API',
      image: '/images/projects/api.jpg',
      description: isPortuguese ? 'API robusta e escalável' : 'Robust and scalable API',
      technologies: ['Node.js', 'Express', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/johnsimon21/restful-api',
      liveUrl: 'https://api-demo.com'
    }
  ];

  const duplicatedProjects = [...projects, ...projects, ...projects]; // Triple for smoother loop
  const projectsLength = projects.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslateX = prev - 0.5; // Slower, smoother movement
        if (Math.abs(newTranslateX) >= (projectsLength * 350)) {
        return 0
        }
        return newTranslateX;
      });
    }, 16); // 60fps

    return () => clearInterval(interval);
  }, [isPaused, projectsLength]);

  return (
    <div className="mt-16 w-full">
      <h3 className="text-2xl font-semibold text-[#D0D8EA] mb-8 text-center">
        {isPortuguese ? 'Galeria de Projetos' : 'Projects Gallery'}
      </h3>

      <div
        ref={containerRef}
        className="relative w-full h-[320px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 h-full transition-transform duration-100 ease-linear"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${duplicatedProjects.length * 350}px`
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="w-[330px] h-full flex-shrink-0 bg-gradient-to-br from-[#1A2B5C] to-[#0E1F52] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="h-[180px] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement!;
                    parent.style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
                    parent.innerHTML = `
                      <div class="flex items-center justify-center h-full text-white">
                        <div class="text-center">
                          <div class="text-4xl mb-2">🚀</div>
                          <div class="text-sm font-medium">${project.title}</div>
                        </div>
                      </div>
                    `;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Quick Action Buttons */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#D0D8EA] mb-2 group-hover:text-[#208FBB] transition-colors duration-200">
                  {project.title}
                </h4>

                <p className="text-sm text-[#B1BDDF] mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#208FBB]/20 border border-[#208FBB]/50 rounded-md text-xs text-[#208FBB]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[#666]/20 border border-[#666]/50 rounded-md text-xs text-[#999]">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#208FBB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-sm font-medium">
                    {isPortuguese ? 'Ver Detalhes' : 'View Details'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#141E46] to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#141E46] to-transparent pointer-events-none z-10" />

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {isPortuguese ? '⏸️ Pausado' : '⏸️ Paused'}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="text-center mt-4 text-[#B1BDDF] text-sm">
        {isPortuguese ? 'Passe o mouse sobre um projeto para pausar a animação' : 'Hover over a project to pause animation'}
      </div>
    </div>
  );
};
