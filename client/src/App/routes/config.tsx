import { Navigate, RouteProps } from 'react-router-dom';
import { CarPage as GarageCar } from 'Pages/garage/components/carPage';
import Garage from 'Pages/garage';
import Incidents from 'Pages/incidents';
import Goals from 'Pages/goals';
import { NotFound } from './notFound';

export const routes: RouteProps[] = [
  { path: '/garage', element: <Garage /> },
  { path: '/garage/:id', element: <GarageCar /> },
  { path: '/incidents', element: <Incidents /> },
  { path: '/goals', element: <Goals /> },
  { path: '/', element: <Navigate to={'/garage'} /> },
  { path: '*', element: <NotFound /> },
];
