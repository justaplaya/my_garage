import { Route, Routes } from 'react-router-dom';
import { CarPage as GarageCar } from 'Pages/garage/components/Car';
import { Scratch } from 'Pages/scratch';
import React from 'react';
import Garage from 'Pages/garage';
import { NotFound } from './notFound';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/garage/:id" element={<GarageCar />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/scratch" element={<Scratch />} />
    </Routes>
  );
};
