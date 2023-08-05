import { SetState } from 'utils/types';
import { Car } from '../../models/car';

export type PropsType = {
  show: boolean;
  setShow: (x: boolean) => void;
  refetch: () => void;
  setLoading: SetState<boolean>;
  car?: Car;
};
