import { useState } from 'react';
import { Project } from '../../constants/projects';

interface ProjectCardProps {
  project: Project;
  isPortuguese: boolean;
  index: number;
}

export const ProjectCard = ({ project, isPortuguese, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'planned': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return isPortuguese ? 'Concluído' : 'Completed';
      case 'in-progress': return isPortuguese ? 'Em Desenvolvimento' : 'In Progress';
      case 'planned': return isPortuguese ? 'Planejado' : 'Planned';
      default: return status;
    }
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-[#2E3B63]/50 hover:border-[#208FBB]/50 ${
        project.featured ? 'ring-2 ring-[#208FBB]/30' : ''
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-[#208FBB] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {isPortuguese ? 'Destaque' : 'Featured'}
        </div>
      )}

      {/* Status Badge */}
      <div 
        className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold text-white"
        style={{ backgroundColor: getStatusColor(project.status) }}
      >
        {getStatusText(project.status)}
      </div>

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-[#0A1428]">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#208FBB]/30 border-t-[#208FBB] rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Quick Actions */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#208FBB] hover:bg-[#1A7A9A] text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
            >
              {isPortuguese ? 'Ver Demo' : 'View Demo'}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A1428]/80 hover:bg-[#0A1428] text-white p-2 rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Year */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-[#D0D8EA] group-hover:text-[#208FBB] transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-sm text-[#B1BDDF] bg-[#0A1428] px-2 py-1 rounded">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#B1BDDF] text-sm mb-4 line-clamp-3">
          {isPortuguese ? project.shortDescription.pt : project.shortDescription.en}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-[#208FBB]/20 text-[#208FBB] px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-[#2E3B63] text-[#B1BDDF] px-2 py-1 rounded text-xs">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 bg-[#208FBB]/20 hover:bg-[#208FBB]/30 text-[#208FBB] py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
            {isPortuguese ? 'Ver Detalhes' : 'View Details'}
          </button>
          <button className="bg-[#2E3B63] hover:bg-[#3A4A73] text-[#D0D8EA] p-2 rounded-lg transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};