import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { darkTheme } from './theme';

type ThemeName = 'dark' | 'light';

type ThemeContextType = {
  activeTheme: DefaultTheme;
  activeThemeName: ThemeName;
  setActiveTheme: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  activeTheme: darkTheme,
  activeThemeName: 'dark',
  setActiveTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
