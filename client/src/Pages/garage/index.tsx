import React from 'react';
import { GarageCtxProvider } from './context';
import { Garage } from './Garage';
const GarageIndex = () => {
  return (
    <GarageCtxProvider>
      <Garage />
    </GarageCtxProvider>
  );
};
export default GarageIndex;
