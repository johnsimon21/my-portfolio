import { PROJECTS_DATA } from '../../constants/projects';

interface ProjectsStatsProps {
  isPortuguese: boolean;
}

export const ProjectsStats = ({ isPortuguese }: ProjectsStatsProps) => {
  const completedProjects = PROJECTS_DATA.filter(p => p.status === 'completed').length;
  const inProgressProjects = PROJECTS_DATA.filter(p => p.status === 'in-progress').length;
  const totalTechnologies = [...new Set(PROJECTS_DATA.flatMap(p => p.technologies))].length;

  const stats = [
    {
      value: completedProjects,
      title: isPortuguese ? 'Projetos' : 'Projects',
      subtitle: isPortuguese ? 'Concluídos' : 'Completed',
      icon: '✅',
      color: '#10B981'
    },
    {
      value: inProgressProjects,
      title: isPortuguese ? 'Em' : 'In',
      subtitle: isPortuguese ? 'Desenvolvimento' : 'Progress',
      icon: '🚧',
      color: '#F59E0B'
    },
    {
      value: totalTechnologies,
      title: isPortuguese ? 'Tecnologias' : 'Technologies',
      subtitle: isPortuguese ? 'Utilizadas' : 'Used',
      icon: '⚡',
      color: '#8B5CF6'
    },
    {
      value: new Date().getFullYear() - 2022,
      title: isPortuguese ? 'Anos de' : 'Years of',
      subtitle: isPortuguese ? 'Experiência' : 'Experience',
      icon: '🎯',
      color: '#208FBB'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-xl p-6 border border-[#2E3B63]/50 hover:border-[#208FBB]/50 transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          <div className="text-3xl mb-3">{stat.icon}</div>
          <div 
            className="text-3xl font-bold mb-2"
            style={{ color: stat.color }}
          >
            {stat.value}+
          </div>
          <div className="text-[#D0D8EA] font-semibold text-sm">
            {stat.title}
          </div>
          <div className="text-[#B1BDDF] text-sm">
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};