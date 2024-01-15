import { useErrorComponent } from './useErrorComponent';
import { Container, Title, Description, Separator } from './style';

export const ErrorComponent = () => {
  const { text } = useErrorComponent();

  return (
    <Container>
      <Title>{text.title}</Title>
      <Separator />
      <Description>{text.description}</Description>
    </Container>
  );
};
