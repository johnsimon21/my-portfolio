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
  const baseClasses = "lang flex justify-center items-center basis-1/2 w-full h-full cursor-pointer";
  const activeClasses = "lang-active";

  return (
    <div className="toggle shadow-button bg-[#141E46] text-[#B1BDDF] text-[10px] w-32 h-6 ms-[15px] rounded-full flex items-center">
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