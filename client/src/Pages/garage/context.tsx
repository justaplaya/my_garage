import React, { createContext, ReactNode } from 'react';

type CtxType = {};
type PropsType = {
  children?: ReactNode;
};

const initialCtx: CtxType = {};
export const GarageCtx = createContext<CtxType>(initialCtx);

export const GarageCtxProvider = ({ children }: PropsType) => {
  const value = {};
  return <GarageCtx.Provider value={value}>{children}</GarageCtx.Provider>;
};
