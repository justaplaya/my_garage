import styled from 'styled-components';
import { HeaderHeight } from 'mixins/config';

export const Container = styled.div`
  @property --myColor1 {
    syntax: '<color>';
    initial-value: ${(props) => props.theme.colors.primary()};
    inherits: true;
  }
  @property --myColor2 {
    syntax: '<color>';
    initial-value: ${(props) => props.theme.colors.secondary()};
    inherits: false;
  }

  display: flex;
  height: calc(100vh - ${HeaderHeight});
  background-attachment: fixed;
  background-size: cover;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  overflow: auto;
  background: linear-gradient(var(--myColor1), var(--myColor2));
  --myColor1: ${(props) => props.theme.colors.primary()};
  --myColor2: ${(props) => props.theme.colors.secondary()};
  transition:
    --myColor1 0.3s ease-in-out,
    --myColor2 0.3s ease-in-out;
`;

export namespace Form {
  export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  `;
  export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 50px;
    padding: 10px 20px;
    font-size: 25px;
    font-weight: 700;
    transition: 0.3s ease-in-out;
    color: ${(props) => props.theme.colors.secondary()};
    background: ${(props) => props.theme.colors.primary()};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
}
