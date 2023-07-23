import { Country } from './types';
import { Brand, Car } from './models/car';
import { useTranslation } from 'react-i18next';

export const brands: Record<Country, Brand[]> = {
  japan: ['subaru', 'mitsubishi', 'toyota'],
  korea: ['kia', 'hyundai', 'ssangyong'],
  china: ['haval', 'chery', 'exeed'],
};

/** отдаёт страну бренда */
export const getCountry = (brand: Brand | null): Country | null => {
  if (!brand) return null;
  const { japan, korea, china } = brands;
  if (japan.includes(brand)) return 'japan';
  if (korea.includes(brand)) return 'korea';
  if (china.includes(brand)) return 'china';
  return null;
};
export type Direction = 'asc' | 'desc';
export type SortOptionType = {
  id: number;
  by: keyof Omit<Car, 'id'> & string;
  direction: Direction;
  text: string;
};
/** отдаёт массив всех опций сортировки */
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
