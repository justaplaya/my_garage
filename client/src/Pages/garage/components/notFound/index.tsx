import React from 'react';
import { Container, Title, Separator, Description, AddText } from './style';
import { SetState } from 'utils/types';
import { useNotFound } from './useNotFound';

type Props = {
  searchValue: string;
  setShowModal: SetState<boolean>;
};

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
