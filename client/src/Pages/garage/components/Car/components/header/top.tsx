import { useLocation, useNavigate } from 'react-router-dom';
import { Api } from './api';
import { BackButton, DeleteButton, EditButton, HeaderTop, HeaderTopRow } from './style';
import React from 'react';
import { SetState } from 'utils';
import { Car } from 'Pages/garage/models/car';
import { Text } from './useHeader';

type Props = {
  loading: boolean;
  car: Car | null;
  text: Text;
  setShowModal: SetState<boolean>;
  onDeleteSuccess: () => void;
};

export const Top = ({ loading, car, text, setShowModal, onDeleteSuccess }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { deleteCarFunction } = Api({ onDeleteSuccess });
  const click = {
    back: () => navigate(location.state?.from || '/garage'),
    edit: () => {
      document.body.style.overflow = 'hidden';
      setShowModal(true);
    },
    delete: (id: number | undefined) => {
      const valid = (arg: number | undefined): arg is number => typeof arg !== 'undefined';
      valid(id) && deleteCarFunction(id);
    },
  };
  const props = {
    edit: {
      disabled: loading,
      onClick: click.edit,
    },
    delete: {
      disabled: loading,
      onClick: () => click.delete(car?.id),
    },
  };
  return (
    <HeaderTop>
      <BackButton onClick={click.back}>{text.back}</BackButton>
      <HeaderTopRow>
        <EditButton {...props.edit}>{text.edit}</EditButton>
        <DeleteButton {...props.delete}>{text.delete}</DeleteButton>
      </HeaderTopRow>
    </HeaderTop>
  );
};
// TODO лоадер на delete
