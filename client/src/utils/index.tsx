import { CarBrandType, CarType, CountryType } from '../Pages/garage/types';
import { useTranslation } from 'react-i18next';

export type TypeFromConst<T> = T[keyof T];

export const AllCarBrands: CarBrandType[] = [
  'subaru',
  'mitsubishi',
  'toyota',
  'kia',
  'hyundai',
  'ssangyong',
  'haval',
  'chery',
  'exeed',
];

const japaneseBrand = ['subaru', 'mitsubishi', 'toyota'];
const koreanBrand = ['kia', 'hyundai', 'ssangyong'];
const chineseBrand = ['haval', 'chery', 'exeed'];

export const figureCountry = (brand: CarBrandType | null): CountryType | null => {
  if (!brand) return null;
  if (japaneseBrand.includes(brand)) return 'japan';
  if (koreanBrand.includes(brand)) return 'korea';
  if (chineseBrand.includes(brand)) return 'china';
  return null;
};
export type DirectionType = 'asc' | 'desc';
export type SortOptionType = {
  id: number;
  by: keyof Omit<CarType, 'id'>;
  direction: DirectionType;
  text: string;
};

export const useSortOptions = (): SortOptionType[] => {
  const { t } = useTranslation();
  return [
    { id: 0, by: 'brand', direction: 'asc', text: t('sortOptions.0') },
    { id: 1, by: 'brand', direction: 'asc', text: t('sortOptions.1') },
    { id: 2, by: 'brand', direction: 'desc', text: t('sortOptions.2') },
    { id: 3, by: 'model', direction: 'asc', text: t('sortOptions.3') },
    { id: 4, by: 'model', direction: 'desc', text: t('sortOptions.4') },
    { id: 5, by: 'year', direction: 'asc', text: t('sortOptions.5') },
    { id: 6, by: 'year', direction: 'desc', text: t('sortOptions.6') },
    { id: 7, by: 'maxSpeed', direction: 'asc', text: t('sortOptions.7') },
    { id: 8, by: 'maxSpeed', direction: 'desc', text: t('sortOptions.8') },
    { id: 9, by: 'timeUpTo100', direction: 'asc', text: t('sortOptions.9') },
    { id: 10, by: 'timeUpTo100', direction: 'desc', text: t('sortOptions.10') },
  ];
};
export const toString = (argument: unknown): string => {
  return argument === null || argument === undefined ? '' : String(argument);
};
