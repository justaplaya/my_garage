import styled, { css } from 'styled-components';

export const LineValue = styled.div<{ $offset: number; $value: number }>`
  position: absolute;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary(0.75) : props.theme.colors.primaryContrast(0.75)};
  ${({ $offset, $value }) =>
    $offset &&
    $value &&
    css`
      bottom: ${$offset}px;
    `};
  z-index: 10;
  left: 15px;
  font-size: 25px;
`;
export const Line = styled.div<{ $offset: number; $value: number }>`
  position: absolute;
  background: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary(0.25) : props.theme.colors.primaryContrast(0.25)};
  width: 100%;
  height: 1px;
  ${({ $offset, $value }) =>
    $offset &&
    $value &&
    css`
      bottom: ${$offset}px;
    `};
  z-index: 10;
  left: 0;
`;
