import { figureSortOutput, getCountry } from './utils';
import { brands } from './config';
import { Car, Incidents } from './models/car';
import { Incident } from '../incidents/models/incident';
import { DefaultSortOptionType, SortOptionType } from './types';

describe('in Garage utils', () => {
  it('getCountry works correctly', () => {
    const { japan, korea, china } = brands;

    expect(japan.map((brand) => getCountry(brand))).toStrictEqual(Array(japan.length).fill('japan'));
    expect(korea.map((brand) => getCountry(brand))).toStrictEqual(Array(korea.length).fill('korea'));
    expect(china.map((brand) => getCountry(brand))).toStrictEqual(Array(china.length).fill('china'));
    expect(getCountry(null)).toBeNull();
  });
  it('figureSortOutput works correctly', () => {
    const periods = ['week', 'month', 'year'];
    const incidents = ['evacuation', 'violation', 'crash'];
    /** отдаёт объект [период]: количество инцидентов  */
    const getIncidentData = () =>
      periods.reduce((acc, item, index) => {
        return { ...acc, [item]: 0 };
      }, {});

    const first: Car = {
      id: 1,
      brand: 'toyota',
      model: 'raf4',
      year: 2005,
      maxSpeed: null,
      timeUpTo100: 3.2,
      incidents: incidents.reduce((acc, item) => {
        return { ...acc, [item]: getIncidentData() };
      }, {} as Incidents),
    };
    const second: Car = {
      id: 2,
      brand: 'haval',
      model: 'wrx',
      year: 2022,
      maxSpeed: null,
      timeUpTo100: 8.6,
      incidents: incidents.reduce((acc, item) => {
        return { ...acc, [item]: getIncidentData() };
      }, {} as Incidents),
    };
    const defaultOption: DefaultSortOptionType = { id: 0, text: '' };
    const brandOption: SortOptionType = { id: 1, by: 'brand', direction: 'asc', text: '' };
    const modelOption: SortOptionType = { id: 2, by: 'model', direction: 'asc', text: '' };
    const yearOption: SortOptionType = { id: 3, by: 'year', direction: 'asc', text: '' };
    const maxSpeedOption: SortOptionType = { id: 4, by: 'maxSpeed', direction: 'asc', text: '' };
    const timeUpTo100Option: SortOptionType = { id: 5, by: 'timeUpTo100', direction: 'asc', text: '' };

    expect(figureSortOutput(first, second, defaultOption)).toBe(0);
    expect(figureSortOutput(first, second, brandOption)).toBe(1);
    expect(figureSortOutput(first, second, modelOption)).toBe(-1);
    expect(figureSortOutput(first, second, yearOption)).toBe(-1);
    expect(figureSortOutput(first, second, maxSpeedOption)).toBe(0);
    expect(figureSortOutput(first, second, timeUpTo100Option)).toBe(-1);
  });
});
