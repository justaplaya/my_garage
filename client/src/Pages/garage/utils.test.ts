import { figureSortOutput, getCountry } from './utils';
import { brands } from './config';
import { cars, sortOptions } from './models/mock';

describe('in Garage utils', () => {
  it('getCountry works correctly', () => {
    const { japan, korea, china } = brands;

    expect(japan.map((brand) => getCountry(brand))).toStrictEqual(Array(japan.length).fill('japan'));
    expect(korea.map((brand) => getCountry(brand))).toStrictEqual(Array(korea.length).fill('korea'));
    expect(china.map((brand) => getCountry(brand))).toStrictEqual(Array(china.length).fill('china'));
    expect(getCountry(null)).toBeNull();
  });
  it('figureSortOutput works correctly', () => {
    const { firstCar: first, secondCar: second } = cars;
    const { defaultOption, brandOption, modelOption, yearOption, maxSpeedOption, timeUpTo100Option } = sortOptions;

    expect(figureSortOutput(first, second, defaultOption)).toBe(0);
    expect(figureSortOutput(first, second, brandOption)).toBe(1);
    expect(figureSortOutput(first, second, modelOption)).toBe(-1);
    expect(figureSortOutput(first, second, yearOption)).toBe(-1);
    expect(figureSortOutput(first, second, maxSpeedOption)).toBe(0);
    expect(figureSortOutput(first, second, timeUpTo100Option)).toBe(-1);
  });
});
