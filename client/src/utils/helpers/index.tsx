import { ChangeEvent } from 'react';
import { InputOrTextArea } from '../types';

export const isEvent = (arg): arg is ChangeEvent<InputOrTextArea> => arg?.target?.name && !isNullish(arg?.target?.value);

/** arg === undefined || arg === null */
export const isNullish = (arg) => arg === undefined || arg === null;

/** !isNullish(arg) ? String(arg) : ''  */
export const toStr = (arg): string => (!isNullish(arg) ? String(arg) : '');

export type IsEqualInput = null | undefined | boolean | number | string | symbol | bigint | object;
/**
 * отдаёт тождество аргументов;
 * аргументы должны быть примитивами, объектами или массивами;
 * НЕ РАБОТАЕТ с объектами: Date, Blob, File, Map, WeakMap, Set, WeakSet, etc
 */
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
