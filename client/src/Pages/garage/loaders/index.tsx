import { Container, ImgWrapper, TextWrapper, Separator } from './style';
import { Img } from './img';
import { Text } from './text';

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
