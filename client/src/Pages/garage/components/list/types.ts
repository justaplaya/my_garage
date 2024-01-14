import { SetState } from 'global/typesWithImports';
import { Car } from '../../models/car';

export namespace Props {
  export type List = {
    cars: Car[];
    loading: boolean;
    searchValue: string;
    setShowModal: SetState<boolean>;
  };
  export type Content = { cars: Car[] };
  export type Card = { car: Car };
}
