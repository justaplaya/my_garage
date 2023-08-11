import { Props } from '../types';
import React, { MutableRefObject, useMemo, useRef } from 'react';
import { useMeasure } from 'Hooks';
import { Header } from './header';
import { Columns } from './columns';
import { Lines } from './lines';
import { Body, Content } from './style';
import { useGraph } from './useGraph';

export const Graph = ({ incidents }: Props.Graph) => {
  const ref = useRef(null);
  const bodyRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const { height } = useMeasure(ref, []);
  const baseLeftOffset = useMemo(() => bodyRef.current?.getBoundingClientRect()?.left ?? 0, [bodyRef.current]);

  const useGraphProps = { incidents, baseLeftOffset, height };
  const { props } = useGraph(useGraphProps);

  return (
    <Body ref={bodyRef}>
      <Header {...props.header} />
      <Content ref={ref}>
        <Columns {...props.columns} />
        <Lines {...props.lines} />
      </Content>
    </Body>
  );
};
