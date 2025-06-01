import { PROJECT_CATEGORIES } from '../../constants/projects';

interface ProjectCategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isPortuguese: boolean;
}

export const ProjectCategoryFilter = ({ 
  activeCategory, 
  onCategoryChange, 
  isPortuguese 
}: ProjectCategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category.key
              ? 'text-white shadow-lg scale-105'
              : 'bg-[#1A2B5C] text-[#B1BDDF] hover:bg-[#208FBB]/20 hover:text-[#208FBB]'
          }`}
          style={{
            backgroundColor: activeCategory === category.key ? category.color : undefined
          }}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{isPortuguese ? category.label.pt : category.label.en}</span>
        </button>
      ))}
    </div>
  );
};