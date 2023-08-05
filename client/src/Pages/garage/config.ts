import { Country } from './types';
import { Brand, IncidentPeriod, IncidentType } from './models/car';

export const brands: Record<Country, Brand[]> = {
  japan: ['subaru', 'mitsubishi', 'toyota'],
  korea: ['kia', 'hyundai', 'ssangyong'],
  china: ['haval', 'chery', 'exeed'],
};

export const incidentTypes: IncidentType[] = ['evacuation', 'violation', 'crash'];

export const periods: IncidentPeriod[] = ['week', 'month', 'year'];
