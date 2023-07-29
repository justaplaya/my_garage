import { useDispatch } from 'react-redux';
import { changeTheme } from 'reducer';
import { Line, Moon, Sun, Toggle } from '../style';
import React from 'react';

export const PickTheme = () => {
  const dispatch = useDispatch();

  const toggleTheme = () => dispatch(changeTheme());

  return (
    <Line onClick={toggleTheme}>
      <Toggle>
        <Moon />
        <Sun />
      </Toggle>
    </Line>
  );
};
