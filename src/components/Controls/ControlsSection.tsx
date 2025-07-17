import { ThemeToggle } from '../Toggle/ThemeToggle';
import { LanguageToggle } from '../Toggle/LanguageToggle';

interface ControlsSectionProps {
  isDarkTheme: boolean;
  onThemeToggle: () => void;
  isPortuguese: boolean;
  onSwitchToPortuguese: () => void;
  onSwitchToEnglish: () => void;
}

export const ControlsSection = ({
  isDarkTheme,
  onThemeToggle,
  isPortuguese,
  onSwitchToPortuguese,
  onSwitchToEnglish,
}: ControlsSectionProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 sm:gap-4 order-2 sm:order-1 flex-grow">
        <ThemeToggle 
          isDark={isDarkTheme} 
          onToggle={onThemeToggle} 
        />

        <LanguageToggle
          isPortuguese={isPortuguese}
          onSwitchToPortuguese={onSwitchToPortuguese}
          onSwitchToEnglish={onSwitchToEnglish}
        />
      </div>
      
      <div className="auto-control border border-[#2E3B63] text-[#B1BDDF] font-semibold w-full sm:w-[160px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[55px] md:h-[60px] rounded-full flex items-center justify-center cursor-pointer order-1 sm:order-2 text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:border-[#208FBB] hover:text-[#208FBB]">
        <span className="hidden sm:inline">Automatic control</span>
        <span className="sm:hidden">Auto control</span>
      </div>
    </div>
  );
};