import styled, { css } from 'styled-components';

export const Label = styled.label<{ $required?: boolean }>`
  color: ${(props) => props.theme.colors.secondary()};
  font-size: 20px;
  font-weight: 700;
  ${({ $required }) =>
    $required &&
    css`
      &::after {
        content: '*';
      }
    `}
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
