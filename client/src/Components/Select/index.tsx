import React, { useRef } from 'react';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { Dropdown } from '../Dropdown';
import { useTranslation } from 'react-i18next';
import { Container, Placeholder } from './style';
import { SetState } from '../../utils/types';

type PropsType<T = string> = {
  show: boolean;
  setShow: SetState<boolean>;
  pick: (x: T) => void;
  picked: T | null;
  disabled: boolean;
  data: string[];
};

export const Select = <T,>({ show, setShow, pick, picked, disabled, data }: PropsType<T & string>) => {
  const container = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const text = {
    placeholder: t('components.brandSelect.brand'),
  };

  const containerClick = () => setShow((prev) => !prev);

  useOnClickOutside(container, () => {
    setShow(false);
  });

  return (
    <Container onClick={containerClick} ref={container} $disabled={disabled}>
      {picked ?? <Placeholder>{text.placeholder}</Placeholder>}
      <Dropdown<T & string> show={show} data={data} pick={(brand) => pick(brand)} />
    </Container>
  );
};
