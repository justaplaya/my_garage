import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { isAuthorized } from 'utils/helpers/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './api';
import { LoginResponse } from './types';
import { AuthActions } from './reducer';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const text = {
    login: t('pages.auth.login'),
    password: t('pages.auth.password'),
    logIn: t('pages.auth.logIn'),
    invalidCreds: t('pages.auth.notifications.invalidCreds'),
  };

  const sendCredentials = () => {
    if (!loginRef.current || !passwordRef.current) return;

    setLoading(true);
    const data = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    };

    auth.login(data).then(
      (response: LoginResponse) => {
        const { login, token, expires } = response.data;
        dispatch(AuthActions.login(login));
        navigate('/');
      },
      (error) => {
        if (!loginRef.current || !passwordRef.current) return;

        setLoading(false);
        toast.error(text.invalidCreds);
      },
    );
  };

  useEffect(() => {
    isAuthorized() && navigate('/');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && (loginRef.current?.value || passwordRef.current?.value)) sendCredentials();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return { text, loginRef, passwordRef, sendCredentials, loading };
};
