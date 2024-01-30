import { Route, Routes } from 'react-router-dom';
import Auth from 'Pages/auth';
import { routes } from './config';

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
