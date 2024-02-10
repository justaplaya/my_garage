import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import { FieldError } from 'react-hook-form/dist/types/errors';
import { FieldValues } from 'react-hook-form/dist/types/fields';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { Path } from 'react-hook-form';

export type ComponentType = 'input' | 'textarea';

export type FormFieldProps<T extends FieldValues> = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Partial<RegisterOptions> & {
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    componentType?: ComponentType;
  };
