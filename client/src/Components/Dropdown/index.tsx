import React from 'react';
import { Option, Select, Text } from './style';

type Props = {
  show: boolean;
  data: string[];
  pick: (x: string) => void;
  side?: 'left' | 'right';
  width?: string;
  upperCase?: boolean;
  padding?: string;
  textWidth?: string;
};

export const Dropdown = ({ show, data, pick, side, width, upperCase, padding, textWidth }: Props) => {
  return (
    <Select $show={show} $width={width} $side={side}>
      {data.map((item, index) => (
        <Option key={index} onClick={() => pick(item)} $upperCase={upperCase} $padding={padding}>
          <Text $textWidth={textWidth}>{item}</Text>
        </Option>
      ))}
    </Select>
  );
};
