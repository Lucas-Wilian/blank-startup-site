'use client';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '@/components/Layout/Layout';
import { ThemeContext } from './ThemeContext';

import { darkTheme, lightTheme } from './theme';

type ThemeName = 'dark' | 'light';

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTheme, setActiveTheme] = useState(darkTheme);
  const [activeThemeName, setActiveThemeName] =
    useState<ThemeName>('dark');

  const handleSetActiveTheme = (themeName: ThemeName) => {
    setActiveThemeName(themeName);
    switch (themeName) {
      case 'dark':
        setActiveTheme(darkTheme);
        break;
      case 'light':
        setActiveTheme(lightTheme);
        break;
    }
  };

  return (
    <ThemeProvider theme={activeTheme}>
      <ThemeContext.Provider
        value={{
          activeTheme,
          activeThemeName,
          setActiveTheme: handleSetActiveTheme,
        }}
      >
        <Layout>{children}</Layout>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
