import { CarType } from 'Pages/garage/types';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_CAR as UPDATE_CAR_MUTATION } from 'Apollo/mutations/mutcar';
import { BottomRow } from '../BottomRow';
import { BrandSelect } from '../BrandSelect';
import { Common } from '../style';
import { Input } from '../Input';
import {
  useSetupNewCar,
  updateCarFunction,
  applyDisable,
  BrandOptionClick,
  CloseButtonClick,
  TimeUpTo100Change,
  ModelChange,
  YearChange,
  MaxSpeedChange,
} from './store';
import * as CommonStore from '../commonStore';
import { useOnClickOutside } from 'Hooks/useOnClickOutside';
import { useTranslation } from 'react-i18next';

type PropsType = {
  car: CarType;
  show: boolean;
  setShow: (x: boolean) => void;
};

export const EditModal = ({ car, show, setShow }: PropsType) => {
  const { initialCar, newCar, dispatch } = useSetupNewCar(car);
  const [showBrandSelect, setShowBrandSelect] = useState(false);
  const [updateCar, { error }] = useMutation(UPDATE_CAR_MUTATION);
  const container = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useOnClickOutside(container, () => {
    if (!loading) {
      setShow(false);
      setShowBrandSelect(false);
      document.body.style.overflow = 'visible';
      const handler = setTimeout(() => {
        dispatch({ type: 'RESET' });
        setLoading(false);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    }
  });

  const applyClick = () => {
    setLoading(true);
    updateCarFunction(updateCar, newCar, setShow, setLoading, dispatch);
  };
  const { t } = useTranslation();

  return (
    <Common.Wrapper $show={show}>
      <Common.Container $show={show} ref={container}>
        <Common.Data>
          <Common.Icon src={CommonStore.iconSrc(newCar.brand)} />
          <BrandSelect
            show={showBrandSelect}
            setShow={setShowBrandSelect}
            pick={(brand) => BrandOptionClick(brand, dispatch)}
            brand={newCar.brand}
            disabled={loading}
          />
          <Input
            disabled={loading}
            value={newCar.model}
            onChange={(event) => ModelChange(event, dispatch)}
            placeholder={t('components.editModal.model') ?? ''}
          />
          <Input
            disabled={loading}
            value={newCar.year}
            onChange={(event) => YearChange(event, dispatch)}
            placeholder={t('components.editModal.year') ?? ''}
          />
          <Input
            disabled={loading}
            value={newCar.maxSpeed}
            onChange={(event) => MaxSpeedChange(event, dispatch)}
            placeholder={t('components.editModal.maxSpeed') ?? ''}
          />
          <Input
            disabled={loading}
            value={newCar.timeUpTo100}
            onChange={(event) => TimeUpTo100Change(event, dispatch)}
            placeholder={t('components.editModal.timeUpTo100') ?? ''}
          />
        </Common.Data>
        <BottomRow
          apply={() => (loading ? {} : applyClick())}
          close={() => (loading ? {} : CloseButtonClick(setShow, setShowBrandSelect, dispatch))}
          applyDisable={applyDisable(newCar, initialCar)}
          loading={loading}
        />
      </Common.Container>
    </Common.Wrapper>
  );
};
