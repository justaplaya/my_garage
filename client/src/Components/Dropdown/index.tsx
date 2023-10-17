import React, { useRef } from 'react';
import { Option, Select, Text } from './style';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { SetState } from 'utils/types';

export type Props<T> = {
  show: boolean;
  data: string[];
  pick: (x: T) => void;
  side?: 'left' | 'right';
  setShow?: SetState<boolean>;
};

export const Dropdown = <T,>({ show, data, pick, side, setShow }: Props<T>) => {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setShow && setShow(false);
  });
  const click = (item) => () => pick(item);

  return (
    <Select $show={show} $side={side} ref={ref}>
      {data.map((item, index) => (
        <Option key={index} onClick={click(item)}>
          <Text>{item}</Text>
        </Option>
      ))}
    </Select>
  );
};
