import styled from 'styled-components';
import { MyInput } from 'gt-ui-kit';

export const CustomInput = styled(MyInput)`
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
export const Icon = styled.img`
  height: 100%;
  object-fit: contain;
  padding: 10px 20px;
`;
