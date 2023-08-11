import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
export const Title = styled.p`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;
`;
export const ActiveLine = styled.div<{ $offset: number; $width: number }>`
  position: absolute;
  height: 2px;
  background: ${(props) => props.theme.colors.secondary()};
  bottom: -2.5px;
  transition: 0.3s ease-in-out all;
  ${({ $offset, $width }) =>
    css`
      left: ${$offset}px;
      width: ${$width}px;
    `};
`;
export const Period = styled.div<{ $active: boolean }>`
  text-transform: capitalize;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  ${({ $active }) =>
    !$active &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;
export const Periods = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
`;
