import { createContext, useCallback, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

const STORAGE_KEY = 'hk-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => getInitialTheme());

  useEffect(() => {
    const initial = getInitialTheme();
    setThemeState(initial);
    applyThemeClass(initial);
  }, []);

  const applyThemeClass = (nextTheme) => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(nextTheme);

    // Update theme-color meta for mobile browsers
    const themeColor = nextTheme === 'dark' ? '#0A0A0F' : '#FAFAFB';
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', themeColor);
  };

  const setTheme = useCallback((nextTheme) => {
    setThemeState(nextTheme);
    applyThemeClass(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
