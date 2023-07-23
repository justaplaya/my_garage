import React, { useMemo } from 'react';
import { Container, Title, Separator, Description } from './style';

type Props = {
  searchValue: string;
};

export const NotFound = ({ searchValue: value }: Props) => {
  const maxLength = 45;
  const cut = (value: string) => (value.length > maxLength ? `${value.slice(0, maxLength)}...` : value);
  const getTitle = (value: string) => (value ? `По запросу «${cut(value)}» ничего не найдено` : `Машины не найдены`);
  const getDesc = (value: string) => (value ? `Попробуйте ввести другой запрос` : `Вы можете их создать`);
  // TODO "создать" с underline
  const text = {
    title: getTitle(value),
    desc: getDesc(value),
  };

  return (
    <Container>
      <Title>{text.title}</Title>
      <Separator />
      <Description>{text.desc}</Description>
    </Container>
  );
};
