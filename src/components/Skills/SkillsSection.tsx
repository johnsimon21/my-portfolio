import { useState, useEffect } from 'react';
import { Section } from '../Layout/Section';
import { SkillCard } from './SkillCard';
import { CategoryFilter } from './CategoryFilter';
import { SkillsStats } from './SkillsStats';
import { SkillsCTA } from './SkillsCTA';
import { SKILLS_DATA } from '../../constants/skills';

interface SkillsSectionProps {
  id: string;
  isPortuguese: boolean;
}

export const SkillsSection = ({ id, isPortuguese }: SkillsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  // Animate skill bars on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(SKILLS_DATA.map(skill => skill.id));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Re-animate when category changes
  useEffect(() => {
    setAnimatedSkills([]);
    const timer = setTimeout(() => {
      setAnimatedSkills(filteredSkills.map(skill => skill.id));
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <Section id={id} backgroundColor="bg-[#0E1F52]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#208FBB] mb-6">
            {isPortuguese ? 'Minhas Habilidades' : 'My Skills'}
          </h2>
          <p className="text-[#D0D8EA] text-xl max-w-3xl mx-auto leading-relaxed">
            {isPortuguese 
              ? 'Tecnologias e ferramentas que domino para criar soluções digitais inovadoras e eficientes'
              : 'Technologies and tools I master to create innovative and efficient digital solutions'
            }
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          isPortuguese={isPortuguese}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              skill={{
                ...skill,
                description: isPortuguese ? skill.description.pt : skill.description.en
              }}
              isAnimated={animatedSkills.includes(skill.id)}
              isPortuguese={isPortuguese}
              index={index}
            />
          ))}
        </div>

        {/* Skills Summary Stats */}
        <SkillsStats isPortuguese={isPortuguese} />

        {/* Call to Action */}
        <SkillsCTA isPortuguese={isPortuguese} />
      </div>
    </Section>
  );
};
