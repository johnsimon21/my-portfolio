import { useState } from 'react';
import { Project } from '../../constants/projects';

interface ProjectCardProps {
    project: Project;
    isPortuguese: boolean;
    index: number;
    onViewDetails: (project: Project) => void;
}

export const ProjectCard = ({ project, isPortuguese, index, onViewDetails }: ProjectCardProps) => {
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
        const statusMap = {
            completed: { pt: 'Concluído', en: 'Completed' },
            'in-progress': { pt: 'Em Andamento', en: 'In Progress' },
            planned: { pt: 'Planejado', en: 'Planned' }
        };
        return statusMap[status as keyof typeof statusMap]?.[isPortuguese ? 'pt' : 'en'] || status;
    };

    // Generate delay class based on index
    const getDelayClass = (index: number) => {
        const delay = Math.min(index * 100, 1500); // Cap at 1500ms
        return `animate-delay-${delay}`;
    };

    return (
        <div
            className={`group relative bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl overflow-hidden border border-[#2E3B63]/50 hover:border-[#208FBB]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up ${getDelayClass(index)} ${
                project.featured ? 'ring-2 ring-[#208FBB]/20' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Featured Badge */}
            {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-[#208FBB] text-white text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ {isPortuguese ? 'Destaque' : 'Featured'}
                </div>
            )}

            {/* Status Badge */}
            <div
                className="absolute top-4 right-4 z-10 text-white text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: getStatusColor(project.status) }}
            >
                {getStatusText(project.status)}
            </div>

            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-40'}`} />

                {/* Placeholder while loading */}
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-[#2E3B63] animate-pulse flex items-center justify-center">
                        <div className="text-[#B1BDDF] text-4xl">🖼️</div>
                    </div>
                )}

                <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(true)}
                />

                {/* Overlay Content */}
                <div className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="flex gap-3">
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#208FBB] hover:bg-[#1A7A9A] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#333] hover:bg-[#24292e] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        <button
                            onClick={() => onViewDetails(project)}
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-[#D0D8EA] group-hover:text-[#208FBB] transition-colors duration-300">
                        {project.title}
                    </h3>
                    <span className="text-sm text-[#B1BDDF] bg-[#0A1428] px-2 py-1 rounded">
                        {project.year}
                    </span>
                </div>

                <p className="text-[#B1BDDF] text-sm mb-4 line-clamp-2">
                    {project.shortDescription[isPortuguese ? 'pt' : 'en']}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-[#208FBB]/20 text-[#208FBB] px-2 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs bg-[#2E3B63] text-[#B1BDDF] px-2 py-1 rounded-full">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-[#4277DE]/20 text-[#4277DE] px-3 py-1 rounded-full capitalize">
                        {project.category.replace('-', ' ')}
                    </span>

                    {/* Project highlights count */}
                    {project.highlights && (
                        <div className="flex items-center gap-1 text-xs text-[#B1BDDF]">
                            <span>✨</span>
                            <span>{project.highlights[isPortuguese ? 'pt' : 'en'].length} highlights</span>
                        </div>
                    )}
                </div>

                {/* View Details Button */}
                <button
                    onClick={() => onViewDetails(project)}
                    className="w-full bg-gradient-to-r from-[#208FBB] to-[#4277DE] hover:from-[#1A7A9A] hover:to-[#3A6BC7] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105"
                >
                    {isPortuguese ? 'Ver Detalhes' : 'View Details'}
                </button>
            </div>
        </div>
    );
};
