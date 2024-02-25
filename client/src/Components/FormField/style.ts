import styled from 'styled-components';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

export const FormFieldInput = styled(Input)`
  color: ${(props) => props.theme.colors.secondary()};
  background: ${(props) => props.theme.colors.primary()};
`;
export const FormFieldTextArea = styled(TextArea)`
  color: ${(props) => props.theme.colors.secondary()};
  background: ${(props) => props.theme.colors.primary()};
`;
