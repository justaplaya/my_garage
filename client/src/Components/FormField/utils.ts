import { ComponentType } from './types';
import { FormFieldInput, FormFieldTextArea } from './style';
import { DefaultTheme, StyledComponent } from 'styled-components';

export const getComponentByComponentType = (
  type: ComponentType,
): StyledComponent<'input' | 'textarea', DefaultTheme> => {
  switch (type) {
    case 'input':
      return FormFieldInput;
    case 'textarea':
      return FormFieldTextArea;
    default:
      return FormFieldInput;
  }
};
