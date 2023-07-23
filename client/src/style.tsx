import styled from 'styled-components';
import MoonIcon from './img/moon.png';
import SunIcon from './img/sun.png';
import { NavLink } from 'react-router-dom';

export const HeaderHeight = '75px';

export namespace Head {
  export const Container = styled.div`
    position: sticky;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: ${HeaderHeight};
    background: ${(props) => props.theme.colors.primary()};
    backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.3s ease-in-out;
  `;
  export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  `;
  export const Right = styled(Left)`
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
}
export const Link = styled(NavLink)`
  color: ${(props) => props.theme.colors.primaryContrast()};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  text-decoration: none;
  padding: 5px 20px;
  background: ${(props) => props.theme.colors.primary()};
  &.active {
    color: ${(props) => props.theme.colors.secondary()};
    background: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primaryLite6() : props.theme.colors.primaryLite12()};
    font-weight: 700;
  }
  &.active:hover {
    background: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primaryLite6() : props.theme.colors.primaryLite12()};
  }
  &:hover {
    background: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primaryLite3() : props.theme.colors.primaryLite6()};
  }
  svg g {
    fill: ${(props) => props.theme.colors.primaryContrast()};
  }
  &.active svg g {
    fill: ${(props) => props.theme.colors.secondary()};
  }
  height: 100%;
  transition: background 0.3s ease-in-out;
  gap: 10px;
  position: relative;
`;
export const LinkIconWrapper = styled.div<{ $side?: string }>`
  position: relative;
  height: ${({ $side }) => ($side ? $side : `${HeaderHeight}`)};
  width: ${({ $side }) => ($side ? $side : `${HeaderHeight}`)};
  cursor: pointer;
  font-weight: 700;
  > svg {
    height: ${({ $side }) => ($side ? $side : `${HeaderHeight}`)};
    width: ${({ $side }) => ($side ? $side : `${HeaderHeight}`)};
    fill: ${(props) => props.theme.colors.secondary()};
  }
`;
export const ToggleDiameter = '45px';
export const LineWidth = '65px';
export const Toggle = styled.div`
  height: ${ToggleDiameter};
  width: ${ToggleDiameter};
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary()};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => (props.theme.theme === 'dark' ? 'calc(100% - 30px)' : 0)};
  left: ${(props) => (props.theme.theme === 'dark' ? 0 : 'calc(100% - 30px)')};
  left: ${(props) => (props.theme.theme === 'dark' ? 0 : `calc(100% - ${ToggleDiameter})`)};
  transition: all 0.3s ease-in-out;
`;
export const Line = styled.div`
  position: relative;
  height: 25px;
  width: ${LineWidth};
  background-color: ${(props) => props.theme.colors.primaryLite24()};
  border-radius: 50px;
  cursor: pointer;
`;
export const Moon = styled.div`
  position: absolute;
  height: ${ToggleDiameter};
  width: ${ToggleDiameter};
  border-radius: 50%;
  background: ${`url(${MoonIcon}) center no-repeat`};
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => Number(props.theme.theme === 'light')};
`;
export const Sun = styled(Moon)`
  background: ${`url(${SunIcon}) center no-repeat`};
  opacity: ${(props) => Number(props.theme.theme === 'dark')};
`;
