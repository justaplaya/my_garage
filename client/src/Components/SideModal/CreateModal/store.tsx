import { ChangeEvent, Dispatch, SetStateAction, useReducer } from 'react';
import { CarBrandType, CarType } from '../../../Pages/garage/types';

type InputCarType = Record<keyof Omit<CarType, 'id' | 'brand'>, string> & { brand: CarBrandType | null };
interface ResetAction {
  type: 'RESET';
}
interface UpdateAction {
  type: 'UPDATE';
  target: keyof CarType;
  value: string | number;
}
type ActionType = ResetAction | UpdateAction;

type Output = {
  initialCar: InputCarType;
  newCar: InputCarType;
  dispatch: Dispatch<ActionType>;
};

export const useSetupNewCar = (): Output => {
  const reducer = (state: InputCarType, action: ActionType) => {
    switch (action.type) {
      case 'RESET':
        return { ...initialCar };
      case 'UPDATE':
        return { ...state, [action.target]: action.value };
    }
  };

  const initialCar: InputCarType = {
    brand: null,
    model: '',
    year: '',
    maxSpeed: '',
    timeUpTo100: '',
  };

  const [newCar, dispatch] = useReducer(reducer, initialCar);

  return { initialCar, newCar, dispatch };
};

export const addCarFunction = (
  createCar: (x: {
    variables: {
      input: Omit<CarType, 'id'>;
    };
  }) => Promise<any>,
  newCar: InputCarType,
  setShow: (x: boolean) => void,
  refetch: () => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setLocalLoading: Dispatch<SetStateAction<boolean>>,
  dispatch: Dispatch<ActionType>,
) => {
  if (!newCar.brand) return;
  createCar({
    variables: {
      input: {
        brand: newCar.brand,
        model: newCar.model || null,
        year: !newCar.year || isNaN(Number(newCar.year)) ? null : Number(newCar.year),
        maxSpeed: !newCar.maxSpeed || isNaN(Number(newCar.maxSpeed)) ? null : Number(newCar.maxSpeed),
        timeUpTo100: !newCar.timeUpTo100 || isNaN(Number(newCar.timeUpTo100)) ? null : Number(newCar.timeUpTo100),
      },
    },
  })
    .then(() => {
      refetch();
      setLoading(true);
      setShow(false);
      document.body.style.overflow = 'visible';
      const handler = setTimeout(() => {
        dispatch({ type: 'RESET' });
        setLocalLoading(false);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    })
    .catch(() => console.log(`Failed to create car`));
};

export const ModelChange = (e: ChangeEvent, dispatch: Dispatch<ActionType>) => {
  const target = e.target as HTMLInputElement;
  dispatch({ type: 'UPDATE', target: 'model', value: target.value });
};

export const YearChange = (e: ChangeEvent, dispatch: Dispatch<ActionType>) => {
  const target = e.target as HTMLInputElement;
  !isNaN(Number(target.value)) &&
    target.value.length <= 4 &&
    dispatch({ type: 'UPDATE', target: 'year', value: target.value });
};

export const MaxSpeedChange = (e: ChangeEvent, dispatch: Dispatch<ActionType>) => {
  const target = e.target as HTMLInputElement;
  !isNaN(Number(target.value)) &&
    target.value.length <= 3 &&
    dispatch({ type: 'UPDATE', target: 'maxSpeed', value: target.value });
};

export const TimeUpTo100Change = (e: ChangeEvent, dispatch: Dispatch<ActionType>) => {
  const target = e.target as HTMLInputElement;
  !isNaN(Number(target.value)) &&
    target.value.length <= 5 &&
    dispatch({ type: 'UPDATE', target: 'timeUpTo100', value: target.value });
};

export const CloseButtonClick = (
  setShow: (x: boolean) => void,
  setShowBrandSelect: (x: boolean) => void,
  dispatch: Dispatch<ActionType>,
) => {
  setShow(false);
  setShowBrandSelect(false);
  document.body.style.overflow = 'visible';
  const handler = setTimeout(() => {
    dispatch({ type: 'RESET' });
  }, 500);
  return () => {
    clearTimeout(handler);
  };
};

export const BrandOptionClick = (brand: CarBrandType, dispatch: Dispatch<ActionType>) =>
  dispatch({ type: 'UPDATE', target: 'brand', value: brand });
