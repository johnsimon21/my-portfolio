interface LanguageToggleProps {
  isPortuguese: boolean;
  onSwitchToPortuguese: () => void;
  onSwitchToEnglish: () => void;
}

export const LanguageToggle = ({ 
  isPortuguese, 
  onSwitchToPortuguese, 
  onSwitchToEnglish 
}: LanguageToggleProps) => {
  const baseClasses = "lang flex justify-center items-center basis-1/2 w-full h-full cursor-pointer transition-all duration-300";
  const activeClasses = "lang-active";

  return (
    <div className="toggle shadow-button bg-[#141E46] text-[#B1BDDF] text-[9px] sm:text-[10px] md:text-[11px] w-24 sm:w-28 md:w-32 h-5 sm:h-6 rounded-full flex items-center">
      <button
        onClick={onSwitchToPortuguese}
        className={`${baseClasses} bg-[#0D0D0D] rounded-l-full ${isPortuguese ? activeClasses : ''}`}
        aria-label="Switch to Portuguese"
      >
        PT
      </button>

      <button
        onClick={onSwitchToEnglish}
        className={`${baseClasses} bg-[#ffffff] rounded-r-full ${!isPortuguese ? activeClasses : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};