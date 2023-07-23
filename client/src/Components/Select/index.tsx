import React, { useRef } from 'react';
import { brands } from 'Pages/garage/models/car';
import { Brand } from 'Pages/garage/models/car';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { Dropdown } from '../Dropdown';
import { useTranslation } from 'react-i18next';
import { Container, PlaceholderOption } from './style';

type PropsType = {
  show: boolean;
  setShow: (x: boolean) => void;
  pick: (x: Brand) => void;
  brand: Brand | null;
  disabled: boolean;
};

export const Select = ({ show, setShow, pick, brand, disabled }: PropsType) => {
  const container = useRef<HTMLDivElement>(null);
  const containerClick = () => {
    setShow(!show);
  };
  useOnClickOutside(container, () => {
    setShow(false);
  });
  const { t } = useTranslation();

  return (
    <Container onClick={containerClick} ref={container} $disabled={disabled}>
      {brand ?? <PlaceholderOption>{t('components.brandSelect.brand')}</PlaceholderOption>}
      <Dropdown show={show} data={brands} pick={(brand) => pick(brand as Brand)} />
    </Container>
  );
};
