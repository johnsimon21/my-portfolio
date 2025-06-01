import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <div className="toggle shadow-button bg-[#141E46] w-32 h-6 rounded-full flex items-center relative">
      <div className="switch-button border-1 border-[#39559D] w-5 h-5 border border-[#39559D] rounded-full absolute mx-0.5"></div>
      
      <button
        onClick={onToggle}
        className="dark flex justify-center items-center basis-1/2 w-full h-full bg-[#0D0D0D] rounded-l-full"
        aria-label="Switch to dark theme"
      >
        <MoonIcon />
      </button>
      
      <button
        onClick={onToggle}
        className="light flex justify-center items-center basis-1/2 w-full h-full bg-[#ffffff] rounded-r-full"
        aria-label="Switch to light theme"  
      >
        <SunIcon />
      </button>
    </div>
  );
};