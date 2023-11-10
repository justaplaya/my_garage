import { useMutation } from '@apollo/client';
import { DELETE_CAR } from 'Apollo/mutations/mutcar.js';
import { ApiTypes } from './types';

export const Api = ({ onDeleteSuccess }: ApiTypes.Props) => {
  const [deleteCar] = useMutation(DELETE_CAR);

  const deleteCarFunction = (id: number) => {
    const action = deleteCar({
      variables: {
        input: {
          id,
        },
      },
    });
    action.then(() => onDeleteSuccess());
  };
  return { deleteCarFunction };
};
