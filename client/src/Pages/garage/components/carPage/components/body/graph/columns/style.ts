import styled, { css } from 'styled-components';

export const ColumnWrap = styled.div<{ $height: number }>`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &:first-child {
    margin-left: 75px;
  }
  transition: 0.75s ease-in-out all;
  ${({ $height }) =>
    $height &&
    css`
      height: ${$height}px;
    `};
  position: relative;
  z-index: 20;
`;
export const Column = styled.div<{ $height: number }>`
  width: 100%;
  background: ${(props) => props.theme.colors.secondary()};
  transition: 0.3s ease-in-out all;
  height: 100%;
`;
const columnDataOffset = '-30px';
export const ColumnName = styled.div`
  position: absolute;
  bottom: ${columnDataOffset};
  text-transform: capitalize;
`;
export const ColumnCount = styled.div`
  position: absolute;
  top: ${columnDataOffset};
`;
