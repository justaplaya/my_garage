import { SetState } from 'global/typesWithImports';

export type Props<T> = {
  show: boolean;
  setShow: SetState<boolean>;
  pick: (x: T) => void;
  picked: T | null;
  disabled: boolean;
  data: string[];
  placeholder?: string;
};
