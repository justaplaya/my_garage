import { Route, Routes } from 'react-router-dom';
import { CarPage as GarageCar } from 'Pages/garage/components/carPage';
import Garage from 'Pages/garage';
import Incidents from 'Pages/incidents';
import { NotFound } from './notFound';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Garage />} />
      <Route path="/garage" element={<Garage />} />
      <Route path="/garage/:id" element={<GarageCar />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/incidents" element={<Incidents />} />
    </Routes>
  );
};
