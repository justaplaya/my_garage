import { useTranslation } from 'react-i18next';
import { Head, Link, LinkIconWrapper } from '../style';
import React from 'react';
import { ReactComponent as GarageIcon } from 'img/pageIcons/garage.svg';

export const Left = () => {
  const { t } = useTranslation();
  const text = {
    garage: t('links.garage'),
    scratch: t('links.scratch'),
  };

  return (
    <Head.Left>
      <Link to={'/garage'}>
        <LinkIconWrapper>
          <GarageIcon />
        </LinkIconWrapper>
        {text.garage}
      </Link>
      <Link to={'/scratch'}>{text.scratch}</Link>
    </Head.Left>
  );
};
