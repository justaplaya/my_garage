import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector, ThemeType } from './reducer';

/**
 * каждый цвет это функция, опционально принимающая альфа-канал. если аргумент не пришёл, в альфа-канал ставится 1
 */
type Alpha = number | undefined;
export type GlobalThemeType = {
  theme: ThemeType;
  colors: {
    primary: (Alpha) => string;
    primaryLite3: (Alpha) => string;
    primaryLite6: (Alpha) => string;
    primaryLite12: (Alpha) => string;
    primaryLite24: (Alpha) => string;
    secondary: (Alpha) => string;
    primaryContrast: (Alpha) => string;
  };
};

export const useTheme = (): GlobalThemeType => {
  const theme = useAppSelector((state) => state.common.theme);
  const isDark = theme === 'dark';
  const darkBlue = {
    original: '16, 24, 39',
    lite3: '20 , 30, 49',
    lite6: '24, 36, 58',
    lite12: '32,48,78',
    lite24: '48,72,116',
  };
  const raspberry = {
    original: '255, 0, 80',
    lite3: '244,217,168',
    lite6: '242,212,156',
    lite12: '239,202,134',
    lite24: '233,183,89',
  };
  const wheat = '245, 222, 179';
  const maroon = '135, 0, 10';
  const white = '245, 245, 245';
  const black = '0, 0, 0';
  const darkOr = (dark: string, light: string, alpha: Alpha) => `rgba(${isDark ? dark : light}, ${alpha ?? 1})`;

  const primary = (alpha: Alpha) => darkOr(darkBlue.original, wheat, alpha);
  const primaryContrast = (alpha: Alpha) => darkOr(white, black, alpha);
  const secondary = (alpha: Alpha) => darkOr(raspberry.original, maroon, alpha);
  /** цвета, осветлённые/затемнённые на x % в зависимости от выбранной темы
   * eg при тёмной теме primaryLite3 будет на 3% светлее primary, при светлой - темнее
   */
  const primaryLite3 = (alpha: Alpha) => darkOr(darkBlue.lite3, raspberry.lite3, alpha);
  const primaryLite6 = (alpha: Alpha) => darkOr(darkBlue.lite6, raspberry.lite6, alpha);
  const primaryLite12 = (alpha: Alpha) => darkOr(darkBlue.lite12, raspberry.lite12, alpha);
  const primaryLite24 = (alpha: Alpha) => darkOr(darkBlue.lite24, raspberry.lite24, alpha);

  return {
    theme,
    colors: {
      primary,
      primaryLite3,
      primaryLite6,
      primaryLite12,
      primaryLite24,
      secondary,
      primaryContrast,
    },
  };
};
export const Theme = ({ children }: any) => <ThemeProvider theme={useTheme()}>{children}</ThemeProvider>;
