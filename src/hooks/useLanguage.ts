import { useState } from 'react';

export const useLanguage = () => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true);

  const switchToPortuguese = () => setIsPortuguese(true);
  const switchToEnglish = () => setIsPortuguese(false);

  return {
    isPortuguese,
    isEnglish: !isPortuguese,
    switchToPortuguese,
    switchToEnglish,
  };
};
