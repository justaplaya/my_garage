import React, { createContext, ReactNode, useState } from 'react';
import { CarType } from './models/car';
import { ThemeType } from 'globalContext';

export type ContextType = {};

type PropsType = {
  children?: ReactNode;
};

export const GarageContext = createContext<ContextType | null>(null);

export const GarageContextProvider = ({ children }: PropsType) => {
  const [cars, setCars] = useState<CarType[]>([]);
  const value = {};

  return <GarageContext.Provider value={value}>{children}</GarageContext.Provider>;
};
