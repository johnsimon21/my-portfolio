import { useState, useMemo } from 'react';
import { Section } from "../Layout/Section";
import { AboutHero } from './AboutHero';
import { AboutStats } from './AboutStats';
import { ProjectsFilter } from './ProjectsFilter';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA, Project } from '../../constants/projects';

interface AboutSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const AboutSection = ({ id, isPortuguese }: AboutSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  // Calculate project counts for each category
  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PROJECTS_DATA.length,
      web: 0,
      mobile: 0,
      fullstack: 0,
      api: 0,
      'ui-ux': 0
    };

    PROJECTS_DATA.forEach(project => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });

    return counts;
  }, []);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Section id={id} className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <AboutHero isPortuguese={isPortuguese} />

          {/* Stats Section */}
          <AboutStats isPortuguese={isPortuguese} />

          {/* Projects Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#D0D8EA] mb-4">
                {isPortuguese ? 'Meus Projetos' : 'My Projects'}
              </h3>
              <p className="text-[#B1BDDF] text-lg max-w-2xl mx-auto">
                {isPortuguese 
                  ? 'Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes tecnologias e abordagens.'
                  : 'A selection of my most recent work, showcasing different technologies and approaches.'
                }
              </p>
            </div>

            {/* Projects Filter */}
            <ProjectsFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              isPortuguese={isPortuguese}
              projectCounts={projectCounts}
            />

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isPortuguese={isPortuguese}
                  index={index}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-[#D0D8EA] mb-2">
                  {isPortuguese ? 'Nenhum projeto encontrado' : 'No projects found'}
                </h3>
                <p className="text-[#B1BDDF]">
                  {isPortuguese 
                    ? 'Tente selecionar uma categoria diferente.'
                    : 'Try selecting a different category.'
                  }
                </p>
              </div>
            )}
          </div>

          {/* Rest of the component remains the same... */}
        </div>
      </Section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isPortuguese={isPortuguese}
      />
    </>
  );
};
