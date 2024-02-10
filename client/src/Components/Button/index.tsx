import styled from 'styled-components';

export const Button = styled.button`
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
