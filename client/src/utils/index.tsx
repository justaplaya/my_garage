import { Brand, CarType } from '../Pages/garage/models/car';
import { Country } from '../Pages/garage/types';
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

export type SetState<T> = Dispatch<SetStateAction<T>>;

const brands: Record<Country, Brand[]> = {
  japan: ['subaru', 'mitsubishi', 'toyota'],
  korea: ['kia', 'hyundai', 'ssangyong'],
  china: ['haval', 'chery', 'exeed'],
};

const japaneseBrand = ['subaru', 'mitsubishi', 'toyota'];
const koreanBrand = ['kia', 'hyundai', 'ssangyong'];
const chineseBrand = ['haval', 'chery', 'exeed'];

export const figureCountry = (brand: Brand | null): Country | null => {
  if (!brand) return null;
  const { japan, korea, china } = brands;
  if (japan.includes(brand)) return 'japan';
  if (korea.includes(brand)) return 'korea';
  if (china.includes(brand)) return 'china';
  return null;
};
export type DirectionType = 'asc' | 'desc';
export type SortOptionType = {
  id: number;
  by: keyof Omit<CarType, 'id'> & string;
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
/**
 * отдаёт true если прокинутые аргументы равны и наоборот;
 * аргументы должны быть примитивами, объектами или массивами
 * НЕ РАБОТАЕТ с объектами: Date, Blob, File, Map, WeakMap, Set, WeakSet, etc
 */
export type IsEqualInput = null | undefined | boolean | number | string | symbol | bigint | object;
export const isEqual = (first: IsEqualInput, second: IsEqualInput): boolean => {
  const getType = (item) => {
    return Object.prototype.toString.call(item).slice(8, -1).toLowerCase();
  };

  const areArraysEqual = () => {
    // Check length
    if (!Array.isArray(first) || !Array.isArray(second) || first.length !== second.length) return false;

    // Check each item in the array
    for (let i = 0; i < first.length; i++) {
      if (!isEqual(first[i], second[i])) return false;
    }

    // If no errors, return true
    return true;
  };

  const areObjectsEqual = () => {
    if (
      typeof first !== 'object' ||
      typeof second !== 'object' ||
      first === null ||
      second === null ||
      Object.keys(first).length !== Object.keys(second).length
    )
      return false;

    // Check each item in the object
    for (let key in first) {
      if (Object.prototype.hasOwnProperty.call(first, key)) {
        if (!isEqual(first[key], second[key])) return false;
      }
    }

    // If no errors, return true
    return true;
  };

  const areFunctionsEqual = () => {
    if (typeof first !== 'function' || typeof second !== 'function') return false;
    return first.toString() === second.toString();
  };

  const arePrimitivesEqual = () => {
    return first === second;
  };

  // Get the object type
  let type = getType(first);

  // If the two items are not the same type, return false
  if (type !== getType(second)) return false;

  // Compare based on type
  if (type === 'array') return areArraysEqual();
  if (type === 'object') return areObjectsEqual();
  if (type === 'function') return areFunctionsEqual();
  return arePrimitivesEqual();
};
