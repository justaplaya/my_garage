import React from 'react';
import { Container, Title, Separator, Description, AddText } from './style';
import { useNotFound } from './useNotFound';
import { Props } from './types';

export const NotFound = ({ searchValue: value, setShowModal }: Props) => {
  const { getTitle, getDesc, openModal, text } = useNotFound({ setShowModal });
  return (
    <Container>
      <Title>{getTitle(value)}</Title>
      <Separator />
      <Description>
        {getDesc(value)}
        {!value && <AddText onClick={openModal}>{text.all.bottomActive}</AddText>}
      </Description>
    </Container>
  );
};
