import { css } from 'styled-components';

type ScrollBarMode = 'light' | 'dark';

export const blurredBack = (alpha?: number) => css`
  background: rgba(245, 245, 245, ${alpha || 0.5});
  backdrop-filter: blur(6px);
`;

export const scrollBarWidth = `10px`;

export const scrollBar = (mode: ScrollBarMode) => css`
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: ${scrollBarWidth};
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => (mode === 'dark' ? props.theme.colors.primary() : props.theme.colors.secondary())};
    border-radius: 2.5px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => (mode === 'dark' ? props.theme.colors.secondary() : props.theme.colors.primary())};
    border-radius: 2.5px;
  }
`;
