import { IncidentPeriod, Incidents, IncidentType } from 'Pages/garage/models/car';
import { MutableRefObject } from 'react';

export type IncidentsPerPeriod = Record<IncidentType, number>;

export type ObjOfRefs = Record<IncidentPeriod, MutableRefObject<HTMLDivElement | null>>;

export namespace Props {
  export type UseGraph = { incidents: Incidents; height: number; baseLeftOffset: number };
  export type Header = {
    period: IncidentPeriod;
    pickPeriod: (period: IncidentPeriod) => () => void;
    baseLeftOffset: number;
  };
  export type Columns = { height: number; data: IncidentsPerPeriod; topValueRounded: number };
  export type Lines = { height: number; topValueRounded: number };
}
