import { SetState } from 'global/typesWithImports';
import { ControllerProps } from 'Components/Controller/types';
import { Brand } from '../../../models/car';
import { ReactNode } from 'react';
import { PropsType } from '../types';

export type CtxType = {
  show: boolean;
  text: Record<string, string>;
  apply: () => void;
  onClickOutside: () => void;
  close: () => void;
  showBrandSelect: boolean;
  setShowBrandSelect: SetState<boolean>;
  applyDisable: boolean;
  localLoading: boolean;
  brand: ControllerProps<Brand | null>;
  model: ControllerProps<string>;
  year: ControllerProps<string>;
  maxSpeed: ControllerProps<string>;
  timeUpTo100: ControllerProps<string>;
  brands: Brand[];
};
export type CtxProps = PropsType & {
  children?: ReactNode;
};
