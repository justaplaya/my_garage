import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { changeTheme, useAppSelector } from './store';
import { useDispatch } from 'react-redux';

export type ThemeType = 'light' | 'dark';
export type ContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

type PropsType = {
  children?: ReactNode;
};
const initialContext: ContextType = {
  theme: 'dark',
  toggleTheme: () => {},
};
export const GlobalContext = createContext<ContextType>(initialContext);

export const GlobalContextProvider = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<ThemeType>('dark');
  const reduxTheme = useAppSelector((state) => state.common.theme);
  const dispatch = useDispatch();
  const [reduxThemeLoaded, setReduxThemeLoaded] = useState(false);
  useEffect(() => {
    if (reduxTheme && !reduxThemeLoaded) {
      setTheme(reduxTheme);
      setReduxThemeLoaded(true);
    }
  }, [reduxTheme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    dispatch(changeTheme());
  };
  const value = { theme, toggleTheme };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
