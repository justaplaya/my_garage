import { HTMLProps } from 'react';
import styled from 'styled-components';
import { blurredBack } from 'mixins';

interface Props extends HTMLProps<HTMLInputElement> {}

export const Input = styled.input<Props>`
  background: transparent;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  padding: 15px 10px;
  &::placeholder {
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
  }
  &::selection {
    background: ${(props) => props.theme.colors.secondary(0.75)};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  ${blurredBack()};
  border-radius: 5px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 700;
  width: 100%;
  position: relative;
`;
