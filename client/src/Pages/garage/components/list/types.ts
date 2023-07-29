import { SetState } from 'utils/types';
import { Car } from '../../models/car';

export type Props = { cars: Car[]; loading: boolean; searchValue: string; setShowModal: SetState<boolean> };
