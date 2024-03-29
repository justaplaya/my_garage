import { useMemo, useState } from 'react';
import { ControllerProps } from './types';
import { isEvent } from 'utils/helpers/checks';

export const Controller = <T,>(initialValue: T): ControllerProps<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const change = (payload: T) => (isEvent(payload) ? setValue(payload.target.value as T) : setValue(payload));

  const setToDefault = () => setValue(initialValue);

  const isChanged = useMemo(() => value !== initialValue, [value, initialValue]);

  return {
    value,
    change,
    isChanged,
    setToDefault,
  };
};
