import { useTranslation } from 'react-i18next';
import { Head, Link, LinkIconWrapper } from '../style';
import { ReactComponent as GarageIcon } from 'img/pageIcons/garage.svg';
import { useAppSelector } from 'reducer';
import { AuthSelectors } from 'Pages/auth/reducer/selectors';

export const Left = () => {
  const { t } = useTranslation();
  const text = {
    garage: t('links.garage'),
    incidents: t('links.incidents'),
    goals: t('links.goals'),
  };

  const isLoggedIn = useAppSelector(AuthSelectors.login);

  return (
    <Head.Left>
      {isLoggedIn && (
        <>
          <Link to={'/garage'}>
            <LinkIconWrapper>
              <GarageIcon />
            </LinkIconWrapper>
            {text.garage}
          </Link>
          <Link to={'/incidents'}>{text.incidents}</Link>
          <Link to={'/goals'}>{text.goals}</Link>
        </>
      )}
    </Head.Left>
  );
};
