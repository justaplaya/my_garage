import { Head, LinkIconWrapper, LogoutLink } from '../style';
import { PickTheme } from './components/pickTheme';
import { PickLanguage } from './components/pickLanguage';
import { AuthActions } from 'Pages/auth/reducer';
import { useDispatch } from 'react-redux';
import { deleteCookie } from 'utils/helpers/auth';
import { useAppSelector } from 'reducer';
import { AuthSelectors } from 'Pages/auth/reducer/selectors';
import { ReactComponent as LogoutIcon } from 'img/shared/logout.svg';
import { ReportIssue } from './components/reportIssue';

export const Right = () => {
  const dispatch = useDispatch();

  const login = useAppSelector(AuthSelectors.login);

  const logout = () => {
    deleteCookie('token');
    dispatch(AuthActions.logout());
  };

  return (
    <Head.Right $isLoggedIn={!!login}>
      <ReportIssue />
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
