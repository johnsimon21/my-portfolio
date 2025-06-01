import { Project } from '../../constants/projects';

interface FeaturedProjectsProps {
    projects: Project[];
    isPortuguese: boolean;
}

export const FeaturedProjects = ({ projects, isPortuguese }: FeaturedProjectsProps) => {
    const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

    if (featuredProjects.length === 0) return null;

    return (
        <div className="mb-16">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#208FBB] mb-4">
                    {isPortuguese ? 'Projetos em Destaque' : 'Featured Projects'}
                </h3>
                <p className="text-[#B1BDDF] text-lg">
                    {isPortuguese
                        ? 'Meus projetos mais importantes e inovadores'
                        : 'My most important and innovative projects'
                    }
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="group relative bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 border-[#208FBB]/30"
                        style={{
                            animationDelay: `${index * 200}ms`,
                            animation: 'fadeInUp 0.8s ease-out forwards'
                        }}
                    >
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#208FBB] to-[#4277DE] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            ⭐ {isPortuguese ? 'Destaque' : 'Featured'}
                        </div>

                        {/* Project Image */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h4 className="text-2xl font-bold text-[#D0D8EA] mb-3 group-hover:text-[#208FBB] transition-colors duration-300">
                                {project.title}
                            </h4>

                            <p className="text-[#B1BDDF] mb-4 leading-relaxed">
                                {isPortuguese ? project.description.pt : project.description.en}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-[#208FBB]/20 text-[#208FBB] px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#208FBB] hover:bg-[#1A7A9A] text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center"
                                    >
                                        {isPortuguese ? 'Ver Demo' : 'View Demo'}
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#2E3B63] hover:bg-[#3A4A73] text-[#D0D8EA] p-3 rounded-lg transition-colors duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
