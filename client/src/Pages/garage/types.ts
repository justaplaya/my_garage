import { Car } from './models/car';

export type Country = 'japan' | 'korea' | 'china';

export type Direction = 'asc' | 'desc';

export type SortOptionType = {
  id: number;
  by: keyof Pick<Car, 'brand' | 'model' | 'year' | 'maxSpeed' | 'timeUpTo100'> & string;
  direction: Direction;
  text: string;
};

export type DefaultSortOptionType = Omit<SortOptionType, 'by' | 'direction'>;
