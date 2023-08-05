import React from 'react';
import { Container, Title, Separator, Description, AddText } from './style';
import { useNotFound } from './useNotFound';
import { Props } from './types';

export const NotFound = (props: Props) => {
  const { searchValue: value } = props;
  const { getTitle, getDesc, openModal, text } = useNotFound(props);

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
