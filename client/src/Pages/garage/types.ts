import { TypeFromConst } from '../../utils';

export type CarType = {
  id: number;
  brand: CarBrandType;
  model: string | null;
  year: number | null;
  maxSpeed: number | null;
  timeUpTo100: number | null;
};

const countries = ['japan', 'korea', 'china'] as const;

const initialCars = [
  'subaru',
  'mitsubishi',
  'toyota',
  'kia',
  'hyundai',
  'ssangyong',
  'haval',
  'chery',
  'exeed',
] as const;

export type CarBrandType = TypeFromConst<typeof initialCars> & string;
export type CountryType = TypeFromConst<typeof countries> & string;
