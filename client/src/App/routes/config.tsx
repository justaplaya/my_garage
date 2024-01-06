import { RouteProps } from 'react-router-dom';
import { CarPage as GarageCar } from 'Pages/garage/components/carPage';
import Garage from 'Pages/garage';
import Incidents from 'Pages/incidents';
import { NotFound } from './notFound';

export const routes: RouteProps[] = [
  { path: '/garage', element: <Garage /> },
  { path: '/incidents', element: <Incidents /> },
  { path: '/garage/:id', element: <GarageCar /> },
  { path: '/', element: <Garage /> },
  { path: '*', element: <NotFound /> },
];
