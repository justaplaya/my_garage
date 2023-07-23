import { SetState } from 'utils/types';
import SearchIcon from 'img/search.png';
import React, { ChangeEvent } from 'react';
import { Container, Icon, Input } from './style';
import { useTranslation } from 'react-i18next';

type Props = { displayValue: string; setDisplayValue: SetState<string> };

export const Search = ({ displayValue, setDisplayValue }: Props) => {
  const { t } = useTranslation();
  const searchOnChange = (e: ChangeEvent<HTMLInputElement>) => setDisplayValue(e.target.value);
  const placeholder = t('pages.garage.main.search');
  return (
    <Container>
      <Icon src={SearchIcon} />
      <Input value={displayValue} onChange={searchOnChange} placeholder={placeholder} />
    </Container>
  );
};
