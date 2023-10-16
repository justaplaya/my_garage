import { Props } from './types';
import { getBrandIcon } from 'Pages/garage/components/carPage/utils';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { IncidentCard } from './style';

export const Card = ({ incident }: Props.Card) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const brandIcon = useMemo(() => getBrandIcon(incident.car.brand), [incident.car.brand]);
  const click = useCallback(() => navigate(`/garage/id=${incident.car.id}`), [incident.car.id, navigate]);

  const { Container, Icon, Model, IncName } = IncidentCard;

  return (
    <Container key={incident.id} onClick={click}>
      <Icon src={brandIcon} />
      {incident.car.model && <Model>{incident.car.model}</Model>}
      <IncName>{t(`incidents.types.${incident.incident}`)}</IncName>
    </Container>
  );
};
