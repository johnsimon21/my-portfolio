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
    <div className="flex items-center">
      <div className="flex grow">
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
      
      <div className="auto-control border border-[#2E3B63] text-[#B1BDDF] font-semibold w-[200px] h-[60px] ms-[15px] rounded-full flex items-center justify-center cursor-pointer">
        Automatic control
      </div>
    </div>
  );
};