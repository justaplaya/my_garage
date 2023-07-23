import React, { ChangeEvent } from 'react';
import { Item, Wrapper } from './style';

type PropsType = {
  value: string;
  onChange: (x: ChangeEvent) => void;
  placeholder?: string;
  disabled: boolean;
};
//TODO избавься от обёртки
export const Input = ({ value, onChange, placeholder, disabled }: PropsType) => {
  return (
    <Wrapper $disabled={disabled}>
      <Item value={value} onChange={onChange} placeholder={placeholder} />
    </Wrapper>
  );
};
