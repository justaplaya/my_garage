import { Route, Routes } from 'react-router-dom';
import Auth from 'Pages/auth';
import { routes } from './config';
import { RequireAuth } from './requireAuth';

export const AllRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<RequireAuth />} key={route.path}>
          <Route {...route} />
        </Route>
      ))}
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
