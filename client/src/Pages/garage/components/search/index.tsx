import SearchIcon from 'img/garage/search.png';
import React, { ChangeEvent } from 'react';
import { Icon, CustomInput } from './style';
import { useTranslation } from 'react-i18next';
import { Props } from './types';

export const Search = ({ displayValue, setDisplayValue }: Props) => {
  const { t } = useTranslation();
  const placeholder = t('pages.garage.main.search');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setDisplayValue(e.target.value);

  return (
    <CustomInput
      leftAddon={<Icon src={SearchIcon} />}
      value={displayValue}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
