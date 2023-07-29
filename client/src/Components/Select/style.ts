import styled, { css } from 'styled-components';

export const Container = styled.div<{ $disabled: boolean }>`
  height: 50px;
  position: relative;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  text-transform: capitalize;
  cursor: pointer; 
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}}
`;
export const Placeholder = styled.div`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
  text-transform: capitalize;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  }
`;
