import { Navigate, RouteProps } from 'react-router-dom';
import { CarPage as GarageCar } from 'Pages/garage/components/carPage';
import Garage from 'Pages/garage';
import Incidents from 'Pages/incidents';
import Goals from 'Pages/goals';
import { NotFound } from './notFound';
import { RequireAuth } from './requireAuth';

export const routes: RouteProps[] = [
  {
    path: '/garage',
    element: (
      <RequireAuth>
        <Garage />
      </RequireAuth>
    ),
  },
  {
    path: '/garage/:id',
    element: (
      <RequireAuth>
        <GarageCar />
      </RequireAuth>
    ),
  },
  {
    path: '/incidents',
    element: (
      <RequireAuth>
        <Incidents />
      </RequireAuth>
    ),
  },
  {
    path: '/goals/*',
    element: (
      <RequireAuth>
        <Goals />
      </RequireAuth>
    ),
  },
  { path: '/', element: <Navigate to={'/garage'} /> },
  { path: '*', element: <NotFound /> },
];
