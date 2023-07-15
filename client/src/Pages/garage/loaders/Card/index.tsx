import React from 'react';
import { Container, ImgWrapper, TextWrapper } from './style';
import { Img } from './Img';
import { Card } from '../../style';
import { Text } from './Text';

export const CardLoader = () => {
  return (
    <Container>
      <ImgWrapper>
        <Img width={210} height={210} />
      </ImgWrapper>
      <Card.Separator />
      <TextWrapper>
        <Text width={140} height={25} />
        <Text width={210} height={25} />
        {/*<Text width={60} height={25} />*/}
      </TextWrapper>
    </Container>
  );
};
