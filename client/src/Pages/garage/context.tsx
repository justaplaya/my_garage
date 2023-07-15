import React, { createContext, ReactNode, useState } from 'react';
import { CarType } from './types';
import { ThemeType } from 'globalContext';

export type ContextType = {
  theme: ThemeType;
  setTheme: (x: ThemeType) => void;
  // openedCar: CarType | null;
  // setOpenedCar: (x: CarType) => void;
};

type PropsType = {
  children?: ReactNode;
};

export const GarageContext = createContext<ContextType | null>(null);

export const GarageContextProvider = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  // const [openedCar, setOpenedCar] = useState<CarType | null>(null);
  // const value = { theme, setTheme, openedCar, setOpenedCar };
  const value = { theme, setTheme };

  return <GarageContext.Provider value={value}>{children}</GarageContext.Provider>;
};
