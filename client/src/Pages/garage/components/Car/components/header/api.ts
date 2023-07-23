import { useMutation } from '@apollo/client';
import { DELETE_CAR } from 'Apollo/mutations/mutcar';

type Props = {
  onDeleteSuccess: () => void;
};

export const Api = ({ onDeleteSuccess }: Props) => {
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
