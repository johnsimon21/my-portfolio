export const getSkillLevelText = (level: number, isPortuguese: boolean): string => {
  if (level >= 90) return isPortuguese ? 'Especialista' : 'Expert';
  if (level >= 80) return isPortuguese ? 'Avançado' : 'Advanced';
  if (level >= 70) return isPortuguese ? 'Intermediário' : 'Intermediate';
  return isPortuguese ? 'Básico' : 'Basic';
};

export const getSkillLevelColor = (level: number): string => {
  if (level >= 90) return '#10B981'; // Green
  if (level >= 80) return '#3B82F6'; // Blue
  if (level >= 70) return '#F59E0B'; // Yellow
  return '#EF4444'; // Red
};

export const calculateAverageSkillLevel = (skills: any[]): number => {
  return Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length);
};

export const getAdvancedSkillsCount = (skills: any[]): number => {
  return skills.filter(skill => skill.level >= 80).length;
};