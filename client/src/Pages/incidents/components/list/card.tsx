import { Props } from './types';
import { getBrandIcon } from 'Pages/garage/components/carPage/utils';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IncidentCard } from './style';

export const Card = memo(({ incident: incidentObj }: Props.Card) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { incident, car, id } = incidentObj;
  const brandIcon = getBrandIcon(car.brand);
  const click = () => navigate(`/garage/id=${car.id}`);

  const { Container, Icon, Model, IncName } = IncidentCard;

  return (
    <Container key={id} onClick={click}>
      <Icon src={brandIcon} />
      {car.model && <Model>{car.model}</Model>}
      <IncName>{t(`incidents.types.${incident}`)}</IncName>
    </Container>
  );
});
