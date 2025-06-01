import { useState } from 'react';

interface SkillCardProps {
  skill: {
    id: number;
    name: string;
    level: number;
    icon: string;
    color: string;
    description?: string;
  };
  isAnimated: boolean;
  isPortuguese: boolean;
  index: number;
}

export const SkillCard = ({ skill, isAnimated, isPortuguese, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return isPortuguese ? 'Especialista' : 'Expert';
    if (level >= 80) return isPortuguese ? 'Avançado' : 'Advanced';
    if (level >= 70) return isPortuguese ? 'Intermediário' : 'Intermediate';
    return isPortuguese ? 'Básico' : 'Basic';
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return '#10B981';
    if (level >= 80) return '#3B82F6';
    if (level >= 70) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div
      className="group bg-gradient-to-br from-[#1A2B5C] to-[#0F1B3C] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-[#2E3B63]/50 hover:border-[#208FBB]/50 skill-card"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div 
            className={`text-3xl p-2 rounded-lg transition-transform duration-300 ${isHovered ? 'float-animation' : ''}`}
            style={{ backgroundColor: `${skill.color}20` }}
          >
            {skill.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#D0D8EA] group-hover:text-[#208FBB] transition-colors duration-300">
              {skill.name}
            </h3>
            <p className="text-sm text-[#B1BDDF]">
              {skill.description}
            </p>
          </div>
        </div>
        
        {/* Skill Level Badge */}
        <div 
          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: getSkillLevelColor(skill.level) }}
        >
          {skill.level}%
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-[#B1BDDF]">
            {getSkillLevelText(skill.level)}
          </span>
          <span className="text-sm font-semibold" style={{ color: skill.color }}>
            {skill.level}%
          </span>
        </div>
        
        <div className="w-full bg-[#0A1428] rounded-full h-3 overflow-hidden">
          <div
            className="h-full rounded-full progress-bar relative overflow-hidden"
            style={{
              width: isAnimated ? `${skill.level}%` : '0%',
              backgroundColor: skill.color,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>

      {/* Skill Actions */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="flex-1 bg-[#208FBB]/20 hover:bg-[#208FBB]/30 text-[#208FBB] py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
          {isPortuguese ? 'Ver Projetos' : 'View Projects'}
        </button>
        <button className="bg-[#208FBB]/20 hover:bg-[#208FBB]/30 text-[#208FBB] p-2 rounded-lg transition-colors duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};