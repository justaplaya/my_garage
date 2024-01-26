import styled from 'styled-components';
import { HeaderHeight } from 'mixins/config';
import TextureDark from 'img/garage/textures/dark.webp';
import TextureLight from 'img/garage/textures/light.webp';

export const Container = styled.div`
  display: grid;
  grid-template: 1fr / 30vw 60vw;
  height: calc(100vh - ${HeaderHeight});
  background: ${(props) =>
    props.theme.theme === 'dark' ? `url(${TextureDark}) no-repeat` : `url(${TextureLight}) no-repeat`};
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
`;
