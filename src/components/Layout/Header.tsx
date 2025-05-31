import { Logo } from '../Logo/Logo';
import { NavigationMenu } from '../Navigation/NavigationMenu';
import { ThemeToggle } from '../Toggle/ThemeToggle';
import { LanguageToggle } from '../Toggle/LanguageToggle';

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
  isDarkTheme,
  onThemeToggle,
  isPortuguese,
  onSwitchToPortuguese,
  onSwitchToEnglish,
}: HeaderProps) => {
  return (
    <header className="h-[210px] flex px-[80px]">
      <nav className="flex w-full">
        <div className="justify-self-start grow flex items-center text-4xl font-semibold">
          <Logo />
        </div>

        <NavigationMenu 
          items={navigationItems} 
          onItemClick={onNavigationClick}
        />
      </nav>
    </header>
  );
};