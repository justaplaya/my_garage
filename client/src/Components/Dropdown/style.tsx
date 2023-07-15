import styled, { css } from 'styled-components';
import { scrollBar } from '../../styles/mixins';

export const Select = styled.div<{ $show: boolean; $width?: string; $side?: 'left' | 'right' }>`
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  z-index: 3;
  height: fit-content;
  top: calc(100% + 10px);
  overflow: hidden;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  opacity: 0;
  max-height: 400px;
  overflow-y: auto;
  ${({ $show }) =>
    $show &&
    css`
      pointer-events: all;
      opacity: 1;
    `}
  ${({ $side }) =>
    $side === 'right'
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
  ${scrollBar('dark')}
 width:${({ $width }) => ($width ? $width : 'auto')}
`;

export const Option = styled.div<{ $upperCase?: boolean; $padding?: string }>`
  width: 100%;
  height: 100%;
  padding: ${({ $padding }) => ($padding ? $padding : '15px 10px')};
  color: ${(props) => props.theme.colors.secondary()};
  text-transform: capitalize;
  background: ${(props) => props.theme.colors.primary()};
  &:hover {
    background: ${(props) => props.theme.colors.primaryLight6()};
  } //  /
  ${({ $upperCase }) =>
    $upperCase &&
    css`
      text-transform: uppercase;
    `}
`;
export const Text = styled.p<{ $textWidth?: string }>`
  width: ${({ $textWidth }) => ($textWidth ? $textWidth : 'fit-content')};
  text-align: center;
`;
