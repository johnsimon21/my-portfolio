import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
}

interface ContinuousProjectsSliderProps {
  isPortuguese?: boolean;
}

export const ContinuousProjectsSlider = ({ isPortuguese = false }: ContinuousProjectsSliderProps) => {
  const [translateX, setTranslateX] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: isPortuguese ? 'E-commerce Moderno' : 'Modern E-commerce',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: isPortuguese ? 'App de Tarefas' : 'Task Management App',
      image: '/images/projects/taskapp.jpg',
      technologies: ['React', 'TypeScript', 'Firebase']
    },
    {
      id: 3,
      title: isPortuguese ? 'Dashboard Analytics' : 'Analytics Dashboard',
      image: '/images/projects/dashboard.jpg',
      technologies: ['Vue.js', 'D3.js', 'Express']
    },
    {
      id: 4,
      title: isPortuguese ? 'App Mobile Social' : 'Social Mobile App',
      image: '/images/projects/socialapp.jpg',
      technologies: ['React Native', 'Redux', 'Socket.io']
    },
    {
      id: 5,
      title: isPortuguese ? 'Sistema de Blog' : 'Blog System',
      image: '/images/projects/blog.jpg',
      technologies: ['Next.js', 'Prisma', 'MySQL']
    },
    {
      id: 6,
      title: isPortuguese ? 'API RESTful' : 'RESTful API',
      image: '/images/projects/api.jpg',
      technologies: ['Node.js', 'Express', 'JWT']
    }
  ];

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX(prev => {
        const newTranslateX = prev - 1; // Move 1px to the left every frame
        // Reset when we've moved one full set of projects
        if (Math.abs(newTranslateX) >= (projects.length * 320)) {
          return 0;
        }
        return newTranslateX;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="mt-16 w-full">
      <h3 className="text-2xl font-semibold text-[#D0D8EA] mb-8 text-center">
        {isPortuguese ? 'Meus Projetos' : 'My Projects'}
      </h3>
      
      <div className="relative w-full h-[280px] overflow-hidden">
        <div 
          className="flex gap-6 h-full"
          style={{ 
            transform: `translateX(${translateX}px)`,
            width: `${duplicatedProjects.length * 320}px`
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`}
              className="w-[300px] h-full flex-shrink-0 bg-gradient-to-br from-[#1A2B5C] to-[#0E1F52] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="h-[160px] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 
                      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#D0D8EA] mb-3 group-hover:text-[#208FBB] transition-colors duration-200">
                  {project.title}
                </h4>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
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
      </div>

      {/* Pause on Hover Instructions */}
      <div className="text-center mt-4 text-[#B1BDDF] text-sm">
        {isPortuguese ? 'Passe o mouse sobre um projeto para pausar' : 'Hover over a project to pause'}
      </div>
    </div>
  );
};