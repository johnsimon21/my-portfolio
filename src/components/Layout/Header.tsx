import { Logo } from '../Logo/Logo';
import { NavigationMenu } from '../Navigation/NavigationMenu';
// import { ThemeToggle } from '../Toggle/ThemeToggle';
// import { LanguageToggle } from '../Toggle/LanguageToggle';

interface HeaderProps {
  navigationItems: Array<{ id: string; label: string; isActive?: boolean }>;
  onNavigationClick: (id: string) => void;
  isDarkTheme: boolean;
  onThemeToggle: () => void;
  isPortuguese: boolean;
  onSwitchToPortuguese: () => void;
  onSwitchToEnglish: () => void;
}

export const Header = ({
  navigationItems,
  onNavigationClick,
  // isDarkTheme,
  // onThemeToggle,
  // isPortuguese,
  // onSwitchToPortuguese,
  // onSwitchToEnglish,
}: HeaderProps) => {
  return (
    <header className="flex flex-col lg:flex-row items-center lg:items-stretch px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[80px] h-auto lg:h-[180px] xl:h-[210px] py-4 lg:py-0 w-full">
      <nav className="flex flex-col lg:flex-row w-full items-center lg:items-center gap-4 lg:gap-0">
        {/* Logo Section - Responsive sizing */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-0">
          <Logo />
        </div>
        
        {/* Navigation Section - Responsive positioning */}
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <NavigationMenu 
            items={navigationItems} 
            onItemClick={onNavigationClick}
          />
        </div>
      </nav>
    </header>
  );
};