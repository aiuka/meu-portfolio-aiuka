
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-portfolio-primary-accent group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
