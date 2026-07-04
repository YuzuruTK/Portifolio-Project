import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getSystemTheme = () => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const getInitialTheme = () => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    return getSystemTheme();
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (event) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeValues = {
    dark: {
      primary: '#2D0C57',
      secondary: '#8A2BE2',
      background: '#121212',
      text: '#FFFFFF',
      accent: '#FF5252',
      cardBg: '#1E1E1E',
      navBg: '#0A0A0A',
    },
    light: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      background: '#FAFAFA',
      text: '#333333',
      accent: '#FFD700',
      cardBg: '#FFFFFF',
      navBg: '#F0F0F0',
    },
  };

  const value = {
    theme,
    toggleTheme,
    colors: themeValues[theme],
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
