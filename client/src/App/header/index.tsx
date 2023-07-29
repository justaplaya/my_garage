import { Head } from '../style';
import React from 'react';
import { Right } from './right';
import { Left } from './left';

export const Header = () => {
  return (
    <Head.Container>
      <Left />
      <Right />
    </Head.Container>
  );
};
