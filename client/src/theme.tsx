import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, ThemeType } from './reducer';

export interface GlobalThemeType {
  theme: ThemeType;
  colors: {
    primary: (x?: number) => string;
    primaryLight3: (x?: number) => string;
    primaryLight6: (x?: number) => string;
    primaryLight12: (x?: number) => string;
    primaryLight24: (x?: number) => string;
    secondary: (x?: number) => string;
    primaryContrast: (x?: number) => string;
  };
  fonts: {};
  fontSizes: {};
}

export const useTheme = (): GlobalThemeType => {
  // const { theme } = useContext(GlobalContext);
  const theme = useAppSelector((state) => state.common.theme);
  const isDark = theme === 'dark';
  const darkBlue = '16, 24, 39';
  const raspberry = '255, 0, 80';
  const wheat = '245, 222, 179';
  const maroon = '135, 0, 10';
  const white = '245, 245, 245';
  const black = '0, 0, 0';

  const primary = (alpha?: number) => `rgba(${isDark ? darkBlue : wheat}, ${alpha || 1})`;
  const primaryContrast = (alpha?: number) => `rgba(${isDark ? white : black}, ${alpha || 1})`;
  const secondary = (alpha?: number) => `rgba(${isDark ? raspberry : maroon}, ${alpha || 1})`;
  const primaryLight3 = (alpha?: number) => `rgba(${isDark ? '20 , 30, 49' : '244,217,168'}, ${alpha || 1})`;
  const primaryLight6 = (alpha?: number) => `rgba(${isDark ? '24, 36, 58' : '242,212,156'}, ${alpha || 1})`;
  const primaryLight12 = (alpha?: number) => `rgba(${isDark ? '32,48,78' : '239,202,134'}, ${alpha || 1})`;
  const primaryLight24 = (alpha?: number) => `rgba(${isDark ? '48,72,116' : '233,183,89'}, ${alpha || 1})`;

  return {
    theme,
    colors: {
      primary,
      primaryLight3,
      primaryLight6,
      primaryLight12,
      primaryLight24,
      secondary,
      primaryContrast,
    },
    fonts: {},
    fontSizes: {},
  };
};
export const Theme = ({ children }: any) => <ThemeProvider theme={useTheme()}>{children}</ThemeProvider>;
