import React, { ChangeEvent } from 'react';
import { InputStyle } from './style';

type PropsType = {
  value: string;
  onChange: (x: ChangeEvent) => void;
  placeholder?: string;
  disabled: boolean;
};

export const Input = ({ value, onChange, placeholder, disabled }: PropsType) => {
  return (
    <InputStyle.Wrapper $disabled={disabled}>
      <InputStyle.Input value={value} onChange={onChange} placeholder={placeholder} />
    </InputStyle.Wrapper>
  );
};
