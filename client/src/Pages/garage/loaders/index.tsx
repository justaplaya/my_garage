import React from 'react';
import { Container, ImgWrapper, TextWrapper, Separator } from './style';
import { Img } from './Img';
import { Text } from './Text';

export const CardLoader = () => {
  return (
    <Container>
      <ImgWrapper>
        <Img width={210} height={210} />
      </ImgWrapper>
      <Separator />
      <TextWrapper>
        <Text width={140} height={25} />
        <Text width={210} height={25} />
      </TextWrapper>
    </Container>
  );
};
