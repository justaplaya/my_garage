import React, { HTMLProps } from 'react';
import styled, { css } from 'styled-components';

interface Props extends HTMLProps<HTMLButtonElement> {}
export const Button = styled.button<Props>`
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `}
`;
