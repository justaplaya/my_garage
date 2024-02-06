import styled, { css } from 'styled-components';

type Props = {
  $height?: string;
  $background?: string;
};

export const Separator = styled.div<Props>`
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
  ${({ $background }) =>
    $background &&
    css`
      background: $background;
    `};
  ${({ $height }) =>
    $height &&
    css`
      height: $height;
    `};
`;
