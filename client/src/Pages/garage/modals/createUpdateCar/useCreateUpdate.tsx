import { useState } from 'react';
import { Brand } from '../../models/car';
import { useMutation } from '@apollo/client';
import { CREATE_CAR as CREATE_CAR_MUTATION, UPDATE_CAR as UPDATE_CAR_MUTATION } from 'Apollo/mutations/mutcar';
import { useTranslation } from 'react-i18next';
import { getBrandIcon } from '../../components/carPage/utils';
import { Controller } from 'Components/Controller';
import { toStr } from 'utils/helpers';
import { CtxType } from './ctx/types';
import { PropsType } from './types';
import { brands as _brands } from '../../config';

export const useCreateUpdate = ({ show, setShow, refetch, setLoading, car }: PropsType): CtxType => {
  const { t } = useTranslation();
  const text = {
    applyText: car ? t('components.createUpdateCarModal.update') : t('components.createUpdateCarModal.create'),
    brand: t('components.createUpdateCarModal.brand'),
    model: t('components.createUpdateCarModal.model'),
    year: t('components.createUpdateCarModal.year'),
    maxSpeed: t('components.createUpdateCarModal.maxSpeed'),
    timeUpTo100: t('components.createUpdateCarModal.timeUpTo100'),
  };
  const brands = Object.values(_brands).flat();

  const {
    brand: carBrand,
    model: carModel,
    year: carYear,
    maxSpeed: carMaxSpeed,
    timeUpTo100: carTimeUpTo100,
  } = car ?? {};

  const brand = Controller<Brand | null>(carBrand ?? null);
  const model = Controller<string>(toStr(carModel));
  const year = Controller<string>(toStr(carYear));
  const maxSpeed = Controller<string>(toStr(carMaxSpeed));
  const timeUpTo100 = Controller<string>(toStr(carTimeUpTo100));

  const inputs = [brand, model, year, maxSpeed, timeUpTo100];

  const [showBrandSelect, setShowBrandSelect] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);

  const [createCar] = useMutation(CREATE_CAR_MUTATION);
  const [updateCar] = useMutation(UPDATE_CAR_MUTATION);

  const applyDisable = car ? !inputs.filter((item) => item.isChanged).length : !brand.value;

  const close = () => {
    if (localLoading) return;
    setShow(false);
    setShowBrandSelect(false);
    document.body.style.overflow = 'visible';
    const handler = setTimeout(() => {
      !car && inputs.forEach((item) => item.setToDefault());
      setLocalLoading(false);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  };

  const numOrNull = (arg) => (!arg || isNaN(Number(arg)) ? null : Number(arg));

  const action = car ? updateCar : createCar;

  const apply = () => {
    setLocalLoading(true);
    if (!brand.value) return;
    action({
      variables: {
        input: {
          ...(car && { id: car.id }),
          brand: brand.value,
          model: model.value || null,
          year: numOrNull(year.value),
          maxSpeed: numOrNull(maxSpeed.value),
          timeUpTo100: numOrNull(timeUpTo100.value),
        },
      },
    })
      .then(() => {
        refetch();
        setLoading(true);
        close();
      })
      .catch(() => console.error(`Failed to create car`));
  };

  const onClickOutside = () => close();

  return {
    show,
    text,
    apply,
    onClickOutside,
    close,
    showBrandSelect,
    setShowBrandSelect,
    applyDisable,
    localLoading,
    brand,
    model,
    year,
    maxSpeed,
    timeUpTo100,
    brands,
  };
};

export const iconSrc = (brand: Brand | null) => getBrandIcon(brand);
