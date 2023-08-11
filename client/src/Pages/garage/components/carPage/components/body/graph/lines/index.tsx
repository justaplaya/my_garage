import React, { Fragment } from 'react';
import { Props } from '../types';
import { Line, LineValue } from './style';
import { useLines } from './useLines';

export const Lines = (props: Props.Lines) => {
  const { lines } = useLines(props);

  return (
    <>
      {lines.map(({ offset, value }, index) => (
        <Fragment key={index}>
          <LineValue $offset={offset} $value={value}>
            {value}
          </LineValue>
          <Line $offset={offset} $value={value} />
        </Fragment>
      ))}
    </>
  );
};
