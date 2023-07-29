import styled from 'styled-components';
import { blurredBack } from 'mixins';

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
  input {
    background: transparent;
    backdrop-filter: none;
  }
`;
export const Icon = styled.img`
  height: 100%;
  object-fit: contain;
  padding: 10px 20px;
`;
