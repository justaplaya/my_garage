import { Props } from '../types';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useMeasure } from 'Hooks';
import { IncidentPeriod } from 'Pages/garage/models/car';
import { isIncidentType } from './utils';
import { IncidentsPerPeriod } from './types';
import { periods } from 'Pages/garage/config';

export const Graph = ({ incidents }: Props.Graph) => {
  const [period, setPeriod] = useState<IncidentPeriod>('week');
  const ref = useRef(null);
  const { height } = useMeasure(ref, []);
  const data: IncidentsPerPeriod = Object.entries(incidents)
    .filter(([key, value]) => isIncidentType(key))
    .reduce(
      (acc, [key, value]) => {
        return { ...acc, [key]: value[period] };
      },
      { evacuation: 0, violation: 0, crash: 0 },
    );
  const topValue = Math.max(...Object.values(data));
  const topValueRounded = Math.round(topValue / 10) * 10;

  const lines = Array(11)
    .fill(null)
    .map((i, index) => ({
      offset: height - (index / 10) * height,
      value: topValueRounded - (index / 10) * topValueRounded,
    }));

  useEffect(() => {
    // console.log(incidents);
    console.log(height);
    console.log(data);
    console.log(topValue);
    console.log(lines);
  }, [height, data, topValue, lines]);

  const onePct = (arg: number) => arg / 100;

  const getHeight = (arg: number) => {
    // console.log(topValue);
    // console.log(arg );
    // console.log(height);
    // console.log ((arg / topValue) * height);
    // return (topVal ue / arg)  *  onePct(height);
    return (arg / topValue) * height;
  };

  return (
    <Body>
      <Title>Происшествия за {period}</Title>
      <button onClick={() => setPeriod(periods[Math.floor(Math.random() * 3)])}>change period</button>
      <Content ref={ref}>
        {!!height &&
          Object.entries(data).map(([name, count], index) => (
            <ColumnWrap key={index}>
              {count}
              <Column $height={getHeight(count)} key={index} />
              {name}
            </ColumnWrap>
          ))}
        {lines.map(({ offset, value }, index) => (
          <Fragment key={index}>
            <LineValue $offset={offset} $value={value} key={index}>
              {value}
            </LineValue>
            <Line $offset={offset} $value={value} key={index} />
          </Fragment>
        ))}
      </Content>
    </Body>
  );
};
const padding = '15px';
const LineValue = styled.div<{ $offset: number; $value: number }>`
  position: absolute;
  color: rgba(89, 89, 89, 0.75);
  //width: 100%;
  //heigh t: 1px;
  ${({ $offset, $value }) =>
    $offset &&
    $value &&
    css`
      bottom: ${$offset}px;
    `};
  z-index: 10;
  left: ${padding};
`;
const Line = styled.div<{ $offset: number; $value: number }>`
  position: absolute;
  background: rgba(89, 89, 89, 0.25);
  width: 100%;
  height: 1px;
  ${({ $offset, $value }) =>
    $offset &&
    $value &&
    css`
      bottom: ${$offset}px;
      &::before {
        content: ${$value};
        color: red;
      }
    `};
  z-index: 10;
  left: 0;
`;
const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  &:first-child {
    margin-left: 25px;
  }
  margin-bottom: 25px;
`;
const Column = styled.div<{ $height: number }>`
  width: 50px;
  background: maroon;

  ${({ $height }) =>
    $height &&
    css`
      height: ${$height}px;
    `}
`;
const Body = styled.div`
  width: 100%;
  background: whitesmoke;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Title = styled.p``;
const Content = styled.div`
  margin-top: 50px;
  width: 100%;
  background: wheat;
  height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: ${padding};
`;
