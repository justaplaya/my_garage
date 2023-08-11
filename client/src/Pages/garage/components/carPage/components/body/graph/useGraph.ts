import { useState } from 'react';
import { IncidentPeriod, IncidentType } from 'Pages/garage/models/car';
import { IncidentsPerPeriod, Props } from './types';
import { initData } from './config';
import { incidentTypes } from 'Pages/garage/config';

export const useGraph = ({ incidents, baseLeftOffset, height }: Props.UseGraph) => {
  const [period, setPeriod] = useState<IncidentPeriod>('week');

  const pickPeriod = (item: IncidentPeriod) => () => setPeriod(item);
  const isIncidentType = (arg): arg is IncidentType => incidentTypes.includes(arg);

  const data: IncidentsPerPeriod = Object.entries(incidents)
    .filter(([key, value]) => isIncidentType(key))
    .reduce((acc, [key, value]) => {
      return { ...acc, [key]: value[period] };
    }, initData);

  const topValue = Math.max(...Object.values(data));
  const topValueRounded = Math.round(Math.ceil(topValue / 10)) * 10;

  const props = {
    header: { period, pickPeriod, baseLeftOffset },
    columns: { height, data, topValueRounded },
    lines: { height, topValueRounded },
  };

  return { props };
};
