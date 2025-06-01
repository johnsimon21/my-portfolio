interface AboutStatsProps {
  isPortuguese: boolean;
}

export const AboutStats = ({ isPortuguese }: AboutStatsProps) => {
  const stats = [
    {
      number: '20+',
      label: { pt: 'Projetos Concluídos', en: 'Projects Completed' },
      icon: '🚀',
      color: '#208FBB'
    },
    {
      number: '3+',
      label: { pt: 'Anos de Experiência', en: 'Years Experience' },
      icon: '⏱️',
      color: '#10B981'
    },
    {
      number: '15+',
      label: { pt: 'Tecnologias', en: 'Technologies' },
      icon: '⚡',
      color: '#F59E0B'
    },
    {
      number: '100%',
      label: { pt: 'Satisfação do Cliente', en: 'Client Satisfaction' },
      icon: '⭐',
      color: '#EF4444'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-2xl p-6 text-center border border-[#2E3B63]/50 hover:border-[#208FBB]/50 transition-all duration-300 hover:scale-105"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: 'fadeInUp 0.6s ease-out forwards'
          }}
        >
          <div className="text-4xl mb-3">{stat.icon}</div>
          <div 
            className="text-3xl font-bold mb-2"
            style={{ color: stat.color }}
          >
            {stat.number}
          </div>
          <div className="text-[#B1BDDF] text-sm font-medium">
            {stat.label[isPortuguese ? 'pt' : 'en']}
          </div>
        </div>
      ))}
    </div>
  );
};