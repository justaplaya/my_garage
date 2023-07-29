import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Props, Text } from './types';

export const useHeader = ({ car, loading, setShowModal, error }: Props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const onDeleteSuccess = () => {
    navigate(location.state?.from || '/garage', {
      state: {
        refetchRequired: true,
      },
    });
  };

  const text: Text = {
    back: t('pages.garage.car.back'),
    edit: t('pages.garage.car.edit'),
    delete: t('pages.garage.car.delete'),
    year: t('pages.garage.car.year'),
    maxSpeed: t('pages.garage.car.maxSpeed'),
    timeUpTo100: t('pages.garage.car.timeUpTo100'),
    kmPerHour: t('pages.garage.car.kmPerHour'),
    seconds: t('pages.garage.car.seconds'),
  };

  const props = {
    top: {
      loading,
      car,
      text,
      setShowModal,
      onDeleteSuccess,
    },
    bottom: {
      loading,
      error,
      car,
      text,
    },
  };

  return { onDeleteSuccess, props };
};
