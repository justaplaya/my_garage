import React, { createContext } from 'react';
import { useCreateUpdate } from '../useCreateUpdate';
import { CtxProps, CtxType } from './types';
import { initialCtx } from './config';

export const CreateCtx = createContext<CtxType>(initialCtx);

export const CreateCtxProvider = ({ children, show, setShow, refetch, setLoading, car }: CtxProps) => {
  const ctxProps = useCreateUpdate({ show, setShow, refetch, setLoading, car });

  return <CreateCtx.Provider value={ctxProps}>{children}</CreateCtx.Provider>;
};
