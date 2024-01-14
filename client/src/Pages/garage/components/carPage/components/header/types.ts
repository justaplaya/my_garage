import { Car } from 'Pages/garage/models/car';
import { SetState } from 'global/typesWithImports';
import { ApolloError } from '@apollo/client';

export type Props = {
  car: Car | null;
  loading: boolean;
  setShowModal: SetState<boolean>;
  error: ApolloError | undefined;
};
export type TextField = 'back' | 'edit' | 'delete' | 'year' | 'maxSpeed' | 'timeUpTo100' | 'kmPerHour' | 'seconds';
export type Text = Record<TextField, string>;

export namespace ApiTypes {
  export type Props = {
    onDeleteSuccess: () => void;
  };
}

export namespace TopTypes {
  export type Props = {
    loading: boolean;
    car: Car | null;
    text: Text;
    setShowModal: SetState<boolean>;
    onDeleteSuccess: () => void;
  };
}

export namespace BottomTypes {
  export type Props = {
    loading: boolean;
    error: ApolloError | undefined;
    car: Car | null;
    text: Text;
  };
  export type Content = { car: Car; text: Text };
  export type Info = {
    car: Car;
    show;
    text: Text;
  };
  export type Loading = { text: Text };
}
