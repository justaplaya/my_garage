import styled, { css } from 'styled-components';
export const Background = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw !important;
  max-width: 100vw !important;
  height: 100vh !important;
  max-height: 100vh !important;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
export const Container = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(45deg);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  padding: 15px 30px;
  gap: 15px;
  max-width: 50vw;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-in-out;

  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translate(-50%, -50%) rotateX(0deg);
    `}
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary(1)};
`;
export const Description = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.secondary(1)};
`;
export const CloseButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.primary()};
  background: ${(props) => props.theme.colors.secondary()};
  cursor: pointer;
`;
