import { CtxType } from './types';

const getInitController = <T>(initValue: T) => ({
  value: initValue,
  change: () => {},
  isChanged: false,
  setToDefault: () => {},
});

export const initialCtx: CtxType = {
  show: false,
  text: {},
  apply: () => {},
  onClickOutside: () => {},
  close: () => {},
  showBrandSelect: false,
  setShowBrandSelect: () => {},
  applyDisable: false,
  localLoading: false,
  brand: getInitController<null>(null),
  model: getInitController<string>(''),
  year: getInitController<string>(''),
  maxSpeed: getInitController<string>(''),
  timeUpTo100: getInitController<string>(''),
  brands: [],
};
