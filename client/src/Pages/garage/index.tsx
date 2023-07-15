import React from 'react';
import { GarageContextProvider } from './context';
import { Garage } from './Garage';
const GarageIndex = () => {
  return (
    <GarageContextProvider>
      <Garage />
    </GarageContextProvider>
  );
};
export default GarageIndex;
