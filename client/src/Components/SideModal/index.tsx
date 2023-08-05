import { Container, Data, Wrapper } from './style';
import { BottomRow } from './bottomRow';
import React, { useRef } from 'react';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { Props } from './types';

export const SideModal = ({
  show,
  apply,
  applyText,
  applyDisable,
  close,
  localLoading,
  onClickOutside,
  children,
}: Props.Common) => {
  const container = useRef<HTMLDivElement>(null);

  useOnClickOutside(container, () => {
    onClickOutside();
  });

  const props = {
    bottonRow: { apply, close, applyDisable, applyText, loading: localLoading },
  };

  return (
    <Wrapper $show={show}>
      <Container $show={show} ref={container}>
        <Data>{children}</Data>
        <BottomRow {...props.bottonRow} />
      </Container>
    </Wrapper>
  );
};
