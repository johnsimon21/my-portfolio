import { SKILLS_DATA } from '../../constants/skills';
import { calculateAverageSkillLevel, getAdvancedSkillsCount } from '../../utils/skillsUtils';

interface SkillsStatsProps {
  isPortuguese: boolean;
}

export const SkillsStats = ({ isPortuguese }: SkillsStatsProps) => {
  const averageLevel = calculateAverageSkillLevel(SKILLS_DATA);
  const advancedSkillsCount = getAdvancedSkillsCount(SKILLS_DATA);

  const stats = [
    {
      value: `${SKILLS_DATA.length}+`,
      title: isPortuguese ? 'Tecnologias' : 'Technologies',
      subtitle: isPortuguese ? 'Dominadas' : 'Mastered'
    },
    {
      value: `${averageLevel}%`,
      title: isPortuguese ? 'Nível Médio' : 'Average Level',
      subtitle: isPortuguese ? 'De Proficiência' : 'Of Proficiency'
    },
    {
      value: advancedSkillsCount,
      title: isPortuguese ? 'Avançadas' : 'Advanced',
      subtitle: isPortuguese ? 'Habilidades' : 'Skills'
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="text-center bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-xl p-8 border border-[#2E3B63]/50 hover:border-[#208FBB]/50 transition-all duration-300 hover:scale-105"
        >
          <div className="text-4xl font-bold text-[#208FBB] mb-2">
            {stat.value}
          </div>
          <div className="text-[#D0D8EA] font-semibold mb-1">
            {stat.title}
          </div>
          <div className="text-sm text-[#B1BDDF]">
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};