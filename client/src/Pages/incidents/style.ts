import styled from 'styled-components';
import TextureDark from '../../img/garage/textures/dark.webp';
import TextureLight from '../../img/garage/textures/light.webp';
import { scrollBar } from 'mixins';

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 75px);
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
