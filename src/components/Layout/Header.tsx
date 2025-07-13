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
    <header className="flex flex-col md:flex-row items-center md:items-stretch px-4 sm:px-8 md:px-[80px] h-auto md:h-[210px] py-4 md:py-0 w-full">
      <nav className="flex flex-col md:flex-row w-full items-center md:items-center">
        <div className="flex justify-center md:justify-start w-full md:w-auto items-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-0">
          <Logo />
        </div>
        <div className="flex-1 flex justify-center  md:justify-end w-full">
          <NavigationMenu 
            items={navigationItems} 
            onItemClick={onNavigationClick}
          />
        </div>
      </nav>
    </header>
  );
};