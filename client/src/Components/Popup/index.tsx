import { Background, CloseButton, Container, Description, Title } from './style';
import { Props } from './types';
import { DEFAULT_CLOSE_BUTTON_TEXT } from './config';
import { Separator } from '../Separator';

export const Popup = ({ show, title, description, closeText, closeAction, children, noClose }: Props) => {
  const backgroundClick = () => {
    show && closeAction();
  };
  const containerClick = (e) => e.stopPropagation();

  return (
    <Background $show={show} onClick={backgroundClick}>
      <Container $show={show} onClick={containerClick}>
        <Title>{title}</Title>
        {!!description && (
          <>
            <Separator />
            <Description>{description}</Description>
          </>
        )}
        {children && (
          <>
            <Separator />
            {children}
          </>
        )}
        {!noClose && <CloseButton onClick={closeAction}>{closeText ?? DEFAULT_CLOSE_BUTTON_TEXT}</CloseButton>}
      </Container>
    </Background>
  );
};
