import { Section } from "../Layout/Section";

interface ProjectsSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const ProjectsSection = ({ id, isPortuguese }: ProjectsSectionProps) => {
  return (
    <Section id={id} className="flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-[#D0D8EA]">
          <h2 className="text-4xl font-bold mb-8 text-[#208FBB]">
            {isPortuguese ? 'Meus Projetos' : 'My Projects'}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {isPortuguese 
              ? 'Aqui estão alguns dos meus projetos mais recentes...'
              : 'Here are some of my latest projects...'
            }
          </p>
          {/* More content */}
        </div>
        <div className="flex justify-center">
          {/* About image or animation */}
        </div>
      </div>
    </Section>
  );
};