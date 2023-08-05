import { Props } from '../types';
import React, { useEffect } from 'react';

export const Graph = ({ incidents }: Props.Graph) => {
  useEffect(() => {
    console.log(incidents);
  }, [incidents]);
  return <div></div>;
};
