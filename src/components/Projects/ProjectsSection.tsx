import { useState } from 'react';
import { Section } from '../Layout/Section';
import { ProjectCard } from './ProjectCard';
import { ProjectCategoryFilter } from './ProjectCategoryFilter';
import { FeaturedProjects } from './FeaturedProjects';
import { ProjectsStats } from './ProjectsStats';
import { ProjectsCTA } from './ProjectsCTA';
import { PROJECTS_DATA } from '../../constants/projects';

interface ProjectsSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const ProjectsSection = ({ id, isPortuguese }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleProjects(6); // Reset visible projects when category changes
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 6);
      setIsLoading(false);
    }, 500);
  };

  return (
    <Section id={id} className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
                   <h2 className="text-5xl font-bold text-[#208FBB] mb-6">
            {isPortuguese ? 'Meus Projetos' : 'My Projects'}
          </h2>
          <p className="text-[#D0D8EA] text-xl max-w-3xl mx-auto leading-relaxed">
            {isPortuguese 
              ? 'Uma coleção dos meus trabalhos mais recentes, demonstrando criatividade, inovação e expertise técnica'
              : 'A collection of my latest work, showcasing creativity, innovation and technical expertise'
            }
          </p>
        </div>

        {/* Stats */}
        <ProjectsStats isPortuguese={isPortuguese} />

        {/* Featured Projects */}
        <FeaturedProjects 
          projects={PROJECTS_DATA} 
          isPortuguese={isPortuguese} 
        />

        {/* All Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#D0D8EA] mb-4">
              {isPortuguese ? 'Todos os Projetos' : 'All Projects'}
            </h3>
            <p className="text-[#B1BDDF] text-lg">
              {isPortuguese 
                ? 'Explore meu portfólio completo por categoria'
                : 'Explore my complete portfolio by category'
              }
            </p>
          </div>

          {/* Category Filter */}
          <ProjectCategoryFilter 
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            isPortuguese={isPortuguese}
          />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isPortuguese={isPortuguese}
                index={index}
              />
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="bg-[#208FBB] hover:bg-[#1A7A9A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {isPortuguese ? 'Carregando...' : 'Loading...'}
                  </div>
                ) : (
                  <>
                    {isPortuguese ? 'Carregar Mais' : 'Load More'} 
                    ({filteredProjects.length - visibleProjects} {isPortuguese ? 'restantes' : 'remaining'})
                  </>
                )}
              </button>
            </div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-[#D0D8EA] mb-4">
                {isPortuguese ? 'Nenhum projeto encontrado' : 'No projects found'}
              </h3>
              <p className="text-[#B1BDDF]">
                {isPortuguese 
                  ? 'Tente selecionar uma categoria diferente'
                  : 'Try selecting a different category'
                }
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <ProjectsCTA isPortuguese={isPortuguese} />
      </div>
    </Section>
  );
};
