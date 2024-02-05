import { InputKey, ModalType, Props } from '../types';
import { ChangeEvent } from 'react';
import { InputHandler } from './types';
import { toast } from 'react-toastify';

export const getInitValueByType = (props: Props.Common, modalType: ModalType, field: string, initValue: string = '') =>
  props[modalType]?.[field] ?? initValue;

export const inputChange = async (
  e: ChangeEvent<HTMLInputElement>,
  type: InputKey,
  inputHandlers: Record<InputKey, InputHandler>,
) => {
  const value = e.target.value;
  try {
    await inputHandlers[type].validator.validate(value);
    inputHandlers[type].change(value);
  } catch (e) {
    toast.error(e.message);
  }
};
