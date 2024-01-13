import { useErrorComponent } from './useErrorComponent';
import { Container, Title, Description } from './style';

export const ErrorComponent = () => {
  const { text } = useErrorComponent();

  return (
    <Container>
      <Title>{text.title}</Title>
      <Description>{text.description}</Description>
    </Container>
  );
};
