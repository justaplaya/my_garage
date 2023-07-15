import { ChangeEvent, Dispatch, SetStateAction, useMemo, useReducer } from 'react';
import { toString } from 'utils';
import { CarBrandType, CarType } from 'Pages/garage/types';

type InputCarType = Record<keyof Omit<CarType, 'id' | 'brand'>, string> & { id: number; brand: CarBrandType };
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

export const useSetupNewCar = (car: CarType): Output => {
  const { id, brand, model, year, maxSpeed, timeUpTo100 }: CarType = car;

  const initialCar: InputCarType = useMemo(
    () => ({
      id: id,
      brand: brand,
      model: toString(model),
      year: toString(year),
      maxSpeed: toString(maxSpeed),
      timeUpTo100: toString(timeUpTo100),
    }),
    [car],
  );

  const reducer = (state: InputCarType, action: ActionType) => {
    switch (action.type) {
      case 'RESET':
        return { ...initialCar };
      case 'UPDATE':
        return { ...state, [action.target]: action.value };
    }
  };

  const [newCar, dispatch] = useReducer(reducer, initialCar);

  return { initialCar, newCar, dispatch };
};

export const updateCarFunction = (
  updateCar: (x: {
    variables: {
      input: CarType;
    };
  }) => Promise<any>,
  newCar: InputCarType,
  setShow: (x: boolean) => void,
  setLoading: Dispatch<SetStateAction<boolean>>,
  dispatch: Dispatch<ActionType>,
) => {
  updateCar({
    variables: {
      input: {
        id: newCar.id,
        brand: newCar.brand,
        model: newCar.model || null,
        year: !newCar.year || isNaN(Number(newCar.year)) ? null : Number(newCar.year),
        maxSpeed: !newCar.maxSpeed || isNaN(Number(newCar.maxSpeed)) ? null : Number(newCar.maxSpeed),
        timeUpTo100: !newCar.timeUpTo100 || isNaN(Number(newCar.timeUpTo100)) ? null : Number(newCar.timeUpTo100),
      },
    },
  })
    .then(() => {
      setShow(false);
      document.body.style.overflow = 'visible';
      const handler = setTimeout(() => {
        dispatch({ type: 'RESET' });
        setLoading(false);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    })
    .catch(() => console.log(`Failed to update car`));
};

export const applyDisable = (newCar: InputCarType, initialCar: InputCarType) => {
  return (
    newCar.brand === initialCar.brand &&
    newCar.model === initialCar.model &&
    newCar.year === initialCar.year &&
    newCar.maxSpeed === initialCar.maxSpeed &&
    newCar.timeUpTo100 === initialCar.timeUpTo100
  );
};

export const BrandOptionClick = (brand: CarBrandType, dispatch: Dispatch<ActionType>) =>
  dispatch({ type: 'UPDATE', target: 'brand', value: brand });

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
