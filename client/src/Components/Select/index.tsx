import React, { useRef } from 'react';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { Dropdown } from '../Dropdown';
import { useTranslation } from 'react-i18next';
import { Container, Placeholder } from './style';
import { Props } from './types';

export const Select = <T,>({ show, setShow, pick, picked, disabled, data, placeholder }: Props<T>) => {
  const container = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const text = {
    placeholder: placeholder ?? t('components.select.placeholder'),
  };

  const containerClick = () => setShow((prev) => !prev);

  useOnClickOutside(container, () => {
    setShow(false);
  });

  return (
    <Container onClick={containerClick} ref={container} $disabled={disabled}>
      {!!picked ? String(picked) : <Placeholder>{text.placeholder}</Placeholder>}
      <Dropdown<T> show={show} data={data} pick={(brand) => pick(brand)} />
    </Container>
  );
};
