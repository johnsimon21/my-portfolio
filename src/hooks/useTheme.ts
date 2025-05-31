import { useState } from 'react';

export type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return {
    theme,
    isDark,
    isLight,
    toggleTheme,
  };
};
