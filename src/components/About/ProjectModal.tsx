import { useState, useEffect } from 'react';
import { Project } from '../../constants/projects';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    isPortuguese: boolean;
}

export const ProjectModal = ({ project, isOpen, onClose, isPortuguese }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !project) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.gallery.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.gallery.length - 1 : prev - 1
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#2E3B63]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image Gallery */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.images.gallery[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {/* Gallery Navigation */}
                    {project.images.gallery.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.gallery.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                            <h2 className="text-3xl font-bold text-[#D0D8EA] mb-2">{project.title}</h2>
                            <p className="text-[#208FBB] font-semibold">
                                {project.role[isPortuguese ? 'pt' : 'en']} • {project.duration}
                            </p>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0">
                            {project.links.live && (
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#208FBB] hover:bg-[#1A7A9A] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    {isPortuguese ? 'Ver Live' : 'View Live'}
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#333] hover:bg-[#24292e] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-[#D0D8EA] mb-3">
                            {isPortuguese ? 'Sobre o Projeto' : 'About the Project'}
                        </h3>
                        <p className="text-[#B1BDDF] leading-relaxed">
                            {project.description[isPortuguese ? 'pt' : 'en']}
                        </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-[#D0D8EA] mb-3">
                            {isPortuguese ? 'Tecnologias Utilizadas' : 'Technologies Used'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-[#208FBB]/20 text-[#208FBB] px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#D0D8EA] mb-3">
                                {isPortuguese ? 'Métricas do Projeto' : 'Project Metrics'}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {project.metrics.performance && (
                                    <div className="bg-[#0A1428] rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#10B981] mb-1">
                                            {project.metrics.performance}%
                                        </div>
                                        <div className="text-[#B1BDDF] text-sm">
                                            {isPortuguese ? 'Performance' : 'Performance'}
                                        </div>
                                    </div>
                                )}
                                {project.metrics.users && (
                                    <div className="bg-[#0A1428] rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#208FBB] mb-1">
                                            {project.metrics.users}
                                        </div>
                                        <div className="text-[#B1BDDF] text-sm">
                                            {isPortuguese ? 'Usuários' : 'Users'}
                                        </div>
                                    </div>
                                )}
                                {project.metrics.rating && (
                                    <div className="bg-[#0A1428] rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-[#F59E0B] mb-1">
                                            {project.metrics.rating}
                                        </div>
                                        <div className="text-[#B1BDDF] text-sm">
                                            {isPortuguese ? 'Avaliação' : 'Rating'}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-[#D0D8EA] mb-2">
                                {isPortuguese ? 'Categoria' : 'Category'}
                            </h4>
                            <p className="text-[#B1BDDF] capitalize">{project.category}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#D0D8EA] mb-2">
                                {isPortuguese ? 'Status' : 'Status'}
                            </h4>
                            <span
                                className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                                style={{
                                    backgroundColor: project.status === 'completed' ? '#10B981' :
                                        project.status === 'in-progress' ? '#F59E0B' : '#6B7280'
                                }}
                            >
                                {project.status === 'completed' ? (isPortuguese ? 'Concluído' : 'Completed') :
                                    project.status === 'in-progress' ? (isPortuguese ? 'Em Andamento' : 'In Progress') :
                                        (isPortuguese ? 'Planejado' : 'Planned')}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#D0D8EA] mb-2">
                                {isPortuguese ? 'Ano' : 'Year'}
                            </h4>
                            <p className="text-[#B1BDDF]">{project.year}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#D0D8EA] mb-2">
                                {isPortuguese ? 'Duração' : 'Duration'}
                            </h4>
                            <p className="text-[#B1BDDF]">{project.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
