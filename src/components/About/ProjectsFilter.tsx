import { PROJECT_CATEGORIES } from '../../constants/projects';

interface ProjectsFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isPortuguese: boolean;
  projectCounts: Record<string, number>;
}

export const ProjectsFilter = ({ 
  activeCategory, 
  onCategoryChange, 
  isPortuguese, 
  projectCounts 
}: ProjectsFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category.key
              ? 'bg-[#208FBB] text-white shadow-lg scale-105'
              : 'bg-[#1A2B5C] text-[#B1BDDF] hover:bg-[#2E3B63] hover:text-[#D0D8EA]'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="text-lg">{category.icon}</span>
            {category.label[isPortuguese ? 'pt' : 'en']}
            <span className={`text-xs px-2 py-1 rounded-full ${
              activeCategory === category.key
                ? 'bg-white/20 text-white'
                : 'bg-[#208FBB]/20 text-[#208FBB]'
            }`}>
              {projectCounts[category.key] || 0}
            </span>
          </span>
          
          {/* Hover effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#208FBB] to-[#4277DE] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
            activeCategory === category.key ? 'opacity-100' : ''
          }`} />
        </button>
      ))}
    </div>
  );
};
