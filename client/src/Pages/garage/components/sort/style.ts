import styled, { css } from 'styled-components';
import { scrollBar } from 'styles/mixins';

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 30%;
  max-width: 30%;
  text-align: center;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.primary()};
  background: ${(props) => props.theme.colors.secondary(0.75)};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary()};
  }
`;
export const Wrapper = styled.div<{ $show: boolean }>`
  cursor: pointer;
  z-index: 3;
  height: fit-content;
  top: calc(100% + 10px);
  border-radius: 5px;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  opacity: 0;
  max-height: 400px;
  width: 100%;
  text-align: left;
  overflow: hidden;
  overflow-y: auto;
  ${scrollBar('dark')}
  ${({ $show }) =>
    $show &&
    css`
      pointer-events: all;
      opacity: 1;
    `}
`;
export const Placeholder = styled.div<{ $smallFontSize: boolean }>`
  position: relative;
  color: ${(props) => props.theme.colors.primary()};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  font-size: 20px;
  ${({ $smallFontSize }) =>
    $smallFontSize &&
    css`
      font-size: 16.5px;
    `}};
`;
export const Option = styled.div<{ $smallFontSize: boolean }>`
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  color: ${(props) => props.theme.colors.secondary()};
  background: ${(props) => props.theme.colors.primary()};
  &:hover {
    background: ${(props) => props.theme.colors.primaryLight6()};
  }
  font-size: 20px;
  ${({ $smallFontSize }) =>
    $smallFontSize &&
    css`
      font-size: 17.5px;
    `}};
`;
