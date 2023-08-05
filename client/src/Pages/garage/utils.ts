import { Country, SortOptionType } from './types';
import { Brand, Car } from './models/car';
import { useTranslation } from 'react-i18next';
import { brands } from './config';

/** отдаёт страну бренда */
export const getCountry = (brand: Brand | null): Country | null => {
  if (!brand) return null;
  const { japan, korea, china } = brands;
  if (japan.includes(brand)) return 'japan';
  if (korea.includes(brand)) return 'korea';
  if (china.includes(brand)) return 'china';
  return null;
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
/** форматирует сортируемые значения */
const convert = (arg: string | number | null, typeOfOutput: 'string' | 'number'): string | number => {
  switch (typeof arg) {
    case 'string':
      return arg.toLowerCase();
    case 'number':
      return arg;
    default:
      return typeOfOutput === 'string' ? '' : 0;
  }
};
/** функция сортировки машин исходя из выбранной опции сортировки */
export const figureSortOutput = (_first: Car, _second: Car, option: SortOptionType) => {
  const { id, by, direction } = option;
  if (!id) return 0;

  const numberFields = ['year', 'maxSpeed', 'timeUpTo100'];
  const typeOfOutput = numberFields.includes(by) ? 'number' : 'string';

  const first = convert(_first[by], typeOfOutput);
  const second = convert(_second[by], typeOfOutput);

  if (first === second) return 0;
  if (direction === 'asc') return first > second ? 1 : -1;
  if (direction === 'desc') return first < second ? 1 : -1;
  console.error(`invalid direction field of the sort option`);

  return 0;
};
