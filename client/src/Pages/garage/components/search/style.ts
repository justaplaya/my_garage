import styled from 'styled-components';
import { blurredBack } from '../../../../styles/mixins';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  width: 100%;
  backdrop-filter: blur(4px);
  ${blurredBack()};
  border-radius: 5px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 700;
`;
export const Icon = styled.img`
  height: 100%;
  object-fit: contain;
  padding: 10px 20px;
`;
export const Input = styled.input`
  width: 100%;
  background: transparent;
  height: 100%;
  border: none;
  outline: none;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  &::placeholder {
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
  }
  &::selection {
    background: ${(props) => props.theme.colors.secondary(0.75)};
  }
`;
