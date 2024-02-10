import { FormFieldProps } from './types';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { getComponentByComponentType } from './utils';
import { DEFAULT_COMPONENT_TYPE } from './config';

export const FormField = <T extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
  componentType,
}: FormFieldProps<T>) => {
  const Component = getComponentByComponentType(componentType ?? DEFAULT_COMPONENT_TYPE);

  return (
    <>
      <Component type={type} placeholder={placeholder} {...register(name, { valueAsNumber })} />
      {error && <h1 style={{ color: 'red' }}>{error.message}</h1>}
    </>
  );
};
