import SearchIcon from 'img/garage/search.png';
import React, { ChangeEvent } from 'react';
import { Container, Icon } from './style';
import { useTranslation } from 'react-i18next';
import { Input } from 'Components/Input';
import { Props } from './types';

export const Search = ({ displayValue, setDisplayValue }: Props) => {
  const { t } = useTranslation();
  const placeholder = t('pages.garage.main.search');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setDisplayValue(e.target.value);

  return (
    <Container>
      <Icon src={SearchIcon} />
      <Input value={displayValue} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};
