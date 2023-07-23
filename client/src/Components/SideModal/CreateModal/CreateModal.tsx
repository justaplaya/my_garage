import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CAR as CREATE_CAR_MUTATION } from 'Apollo/mutations/mutcar';
import { BottomRow } from '../BottomRow';
import { Select } from '../../Select';
import { Input } from '../../Input';
import { Common } from '../style';
import {
  addCarFunction,
  BrandOptionClick,
  CloseButtonClick,
  MaxSpeedChange,
  ModelChange,
  TimeUpTo100Change,
  useSetupNewCar,
  YearChange,
} from './store';
import * as CommonStore from '../commonStore';
import { useOnClickOutside } from '../../../Hooks/useOnClickOutside';
import { useTranslation } from 'react-i18next';
import { brands } from 'Pages/garage/utils';

type PropsType = {
  show: boolean;
  setShow: (x: boolean) => void;
  refetch: () => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
export const CreateModal = ({ show, setShow, refetch, setLoading }: PropsType) => {
  const { newCar, dispatch } = useSetupNewCar();
  const [showBrandSelect, setShowBrandSelect] = useState<boolean>(false);
  const [createCar] = useMutation(CREATE_CAR_MUTATION);
  const container = useRef<HTMLDivElement>(null);
  const applyDisable = !newCar.brand;
  const [localLoading, setLocalLoading] = useState(false);

  useOnClickOutside(container, () => {
    if (!localLoading) {
      setShow(false);
      setShowBrandSelect(false);
      document.body.style.overflow = 'visible';
      const handler = setTimeout(() => {
        dispatch({ type: 'RESET' });
        setLocalLoading(false);
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    }
  });
  const applyClick = () => {
    setLocalLoading(true);
    addCarFunction(createCar, newCar, setShow, refetch, setLoading, setLocalLoading, dispatch);
  };
  const { t } = useTranslation();
  const _brands = Object.values(brands).flat();

  return (
    <Common.Wrapper $show={show}>
      <Common.Container $show={show} ref={container}>
        <Common.Data>
          <Common.Icon src={CommonStore.iconSrc(newCar.brand)} />
          <Select
            show={showBrandSelect}
            setShow={setShowBrandSelect}
            pick={(brand) => BrandOptionClick(brand, dispatch)}
            brand={newCar.brand}
            disabled={localLoading}
            data={_brands}
          />
          <Input
            disabled={localLoading}
            value={newCar.model}
            onChange={(event) => ModelChange(event, dispatch)}
            placeholder={t('components.createModal.model') ?? ''}
          />
          <Input
            disabled={localLoading}
            value={newCar.year}
            onChange={(event) => YearChange(event, dispatch)}
            placeholder={t('components.createModal.year') ?? ''}
          />
          <Input
            disabled={localLoading}
            value={newCar.maxSpeed}
            onChange={(event) => MaxSpeedChange(event, dispatch)}
            placeholder={t('components.createModal.maxSpeed') ?? ''}
          />
          <Input
            disabled={localLoading}
            value={newCar.timeUpTo100}
            onChange={(event) => TimeUpTo100Change(event, dispatch)}
            placeholder={t('components.createModal.timeUpTo100') ?? ''}
          />
        </Common.Data>
        <BottomRow
          apply={() => (localLoading ? {} : applyClick())}
          close={() => (localLoading ? {} : CloseButtonClick(setShow, setShowBrandSelect, dispatch))}
          applyDisable={applyDisable}
          applyText={t('components.createModal.create') ?? ''}
          loading={localLoading}
        />
      </Common.Container>
    </Common.Wrapper>
  );
};
