import React from 'react';
import { Props } from '../types';
import { Column, ColumnCount, ColumnName, ColumnWrap } from './style';
import { useColumns } from './useColumns';
import { useTranslation } from 'react-i18next';

export const Columns = (props: Props.Columns) => {
  const { height, data } = props;
  const { getHeight } = useColumns(props);
  const { t } = useTranslation();

  return (
    <>
      {!!height &&
        Object.entries(data).map(([name, count], index) => (
          <ColumnWrap key={index} $height={getHeight(count)}>
            <ColumnCount>{count}</ColumnCount>
            <Column $height={getHeight(count)} />
            <ColumnName>{t(`incidents.types.${name}`)}</ColumnName>
          </ColumnWrap>
        ))}
    </>
  );
};
