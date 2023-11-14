import { Car, Incidents } from './car';
import { DefaultSortOptionType, SortOptionType } from '../types';

const periods = ['week', 'month', 'year'];
const incidents = ['evacuation', 'violation', 'crash'];
/** отдаёт объект [период]: количество инцидентов  */
const getIncidentData = () => periods.reduce((acc, item) => ({ ...acc, [item]: 0 }), {});

const firstCar: Car = {
  id: 1,
  brand: 'toyota',
  model: 'raf4',
  year: 2005,
  maxSpeed: null,
  timeUpTo100: 3.2,
  incidents: incidents.reduce((acc, item) => ({ ...acc, [item]: getIncidentData() }), {} as Incidents),
};
const secondCar: Car = {
  id: 2,
  brand: 'haval',
  model: 'wrx',
  year: 2022,
  maxSpeed: null,
  timeUpTo100: 8.6,
  incidents: incidents.reduce((acc, item) => ({ ...acc, [item]: getIncidentData() }), {} as Incidents),
};

const cars = { firstCar, secondCar };

const defaultOption: DefaultSortOptionType = { id: 0, text: '' };
const brandOption: SortOptionType = { id: 1, by: 'brand', direction: 'asc', text: '' };
const modelOption: SortOptionType = { id: 2, by: 'model', direction: 'asc', text: '' };
const yearOption: SortOptionType = { id: 3, by: 'year', direction: 'asc', text: '' };
const maxSpeedOption: SortOptionType = { id: 4, by: 'maxSpeed', direction: 'asc', text: '' };
const timeUpTo100Option: SortOptionType = { id: 5, by: 'timeUpTo100', direction: 'asc', text: '' };

const sortOptions = { defaultOption, brandOption, modelOption, yearOption, maxSpeedOption, timeUpTo100Option };

export { cars, sortOptions };
