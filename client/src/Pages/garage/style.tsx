import styled, { css } from 'styled-components';
import { scrollBar } from 'mixins';
import TextureDark from 'img/garage/textures/dark.webp';
import TextureLight from 'img/garage/textures/light.webp';
import { HeaderHeight } from 'mixins/config';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  position: relative;
  height: 50px;
  padding: 0 40px;
  gap: 20px;
`;
export const CreateBtn = styled.button<{ $disabled: boolean }>`
  position: relative;
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  height: 50px;
  width: 12.5%;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.primary()};
  background: ${(props) => props.theme.colors.secondary(0.75)};
  &:hover {
    transform: scale(1.025);
    cursor: pointer;
    background: ${(props) => props.theme.colors.secondary()};
  }
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}
`;
export const Container = styled.div`
  display: flex;
  height: calc(100vh - ${HeaderHeight});
  background: ${(props) =>
    props.theme.theme === 'dark' ? `url(${TextureDark}) no-repeat` : `url(${TextureLight}) no-repeat`};
  background-attachment: fixed;
  background-size: cover;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  ${scrollBar('dark')};
  overflow: auto;
`;
