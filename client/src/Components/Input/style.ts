import styled, { css } from 'styled-components';
import { blurredBack } from 'mixins';

export const Wrapper = styled.div<{ $disabled: boolean }>`
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
    ${({ $disabled }) =>
      $disabled &&
      css`
        pointer-events: none;
      `}}
  `;
export const Item = styled.input`
  width: 100%;
  background: transparent;
  height: 100%;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 700;
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
`;
