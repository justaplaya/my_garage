import styled from 'styled-components';
import { scrollBar } from 'mixins';

export const Wrapper = styled.div<{ $show: boolean }>`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  transition: 0.3s ease-in-out;
  opacity: ${({ $show }) => ($show ? '1' : '0')};
  pointer-events: ${({ $show }) => ($show ? 'all' : 'none')};
`;
export const Container = styled.div<{ $show: boolean }>`
  z-index: 2;
  height: 100%;
  width: 25vw;
  transition: 0.3s ease-in-out;
  transform: translateX(${({ $show }) => ($show ? '0%' : '100%')});
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  right: 0;
  gap: 10px;
  background: ${(props) => props.theme.colors.secondary(0.75)};
  backdrop-filter: blur(6px);
`;
export const Data = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${scrollBar('light')}
`;
