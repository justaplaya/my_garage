import React, { createContext, ReactNode } from 'react';

type CtxType = {};
type PropsType = {
  children?: ReactNode;
};

const initialCtx: CtxType = {};
export const GlobalCtx = createContext<CtxType>(initialCtx);

export const GlobalCtxProvider = ({ children }: PropsType) => {
  const value = {};
  return <GlobalCtx.Provider value={value}>{children}</GlobalCtx.Provider>;
};
