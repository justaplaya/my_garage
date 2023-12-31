import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { isAuthorized } from 'utils/helpers/auth';
import { useEffect } from 'react';
import { AuthActions } from 'Pages/auth/reducer';
import { toast } from 'react-toastify';

export const RequireAuth = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const hasToken = isAuthorized();
  const text = {
    noToken: t('pages.auth.notifications.noToken'),
  };

  useEffect(() => {
    if (!hasToken) {
      dispatch(AuthActions.logout());

      if (location.pathname !== '/') toast.info(text.noToken);
    }
  }, [location.pathname]);

  return hasToken ? <Outlet /> : <Navigate to={'/auth'} />;
};
