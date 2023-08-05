import React from 'react';
import { CreateCtxProvider } from './ctx';
import { CreateUpdateCar } from './createUpdateCar';
import { PropsType } from './types';

export const CreateUpdateCarModal = (props: PropsType) => {
  return (
    <CreateCtxProvider {...props}>
      <CreateUpdateCar />
    </CreateCtxProvider>
  );
};
