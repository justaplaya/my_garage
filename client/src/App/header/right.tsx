import { Head, LinkIconWrapper, LogoutLink } from '../style';
import { PickTheme } from './pickTheme';
import { PickLanguage } from './pickLanguage';
import { AuthActions } from 'Pages/auth/reducer';
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'utils/helpers/auth';
import { useAppSelector } from 'reducer';
import { AuthSelectors } from 'Pages/auth/reducer/selectors';
import { ReactComponent as LogoutIcon } from 'img/shared/logout.svg';

export const Right = () => {
  const dispatch = useDispatch();

  const login = useAppSelector(AuthSelectors.login);

  const logout = () => {
    deleteCookie('token');
    dispatch(AuthActions.logout());
  };

  return (
    <Head.Right $isLoggedIn={!!login}>
      <PickLanguage />
      <PickTheme />
      {login && (
        <LogoutLink onClick={logout} to={'/auth'}>
          <LinkIconWrapper $width={60} $height={60}>
            <LogoutIcon />
          </LinkIconWrapper>
        </LogoutLink>
      )}
    </Head.Right>
  );
};
