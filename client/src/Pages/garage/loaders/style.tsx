import styled from 'styled-components';
import { blurredBack } from 'styles/mixins';

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: calc(calc(100% - calc(20px * 5)) / 6); // 20px - gap
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  gap: 10px;
  ${blurredBack()};
  &:hover {
    transform: scale(1.025);
    ${blurredBack(0.75)};
    cursor: pointer;
  }
`;
export const ImgWrapper = styled.div`
  width: 210px;
  height: 210px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
`;
export const Separator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
`;
