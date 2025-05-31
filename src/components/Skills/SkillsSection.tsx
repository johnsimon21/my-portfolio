import { Section } from '../Layout/Section';

interface SkillsSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const SkillsSection = ({ id, isPortuguese }: SkillsSectionProps) => {
  return (
    <Section id={id} backgroundColor="bg-[#0E1F52]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#208FBB] mb-4">
          {isPortuguese ? 'Habilidades' : 'Skills'}
        </h2>
        <p className="text-[#D0D8EA] text-lg">
          {isPortuguese 
            ? 'Tecnologias que domino e uso no dia a dia'
            : 'Technologies I master and use daily'
          }
        </p>
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Skill cards */}
      </div>
    </Section>
  );
};