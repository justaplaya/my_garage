import React, { useEffect, useRef } from 'react';
import { AllCarBrands } from '../../utils';
import { CarBrandType } from '../../Pages/garage/types';
import styled, { css } from 'styled-components';
import { scrollBar } from '../../styles/mixins';
import { useOnClickOutside } from '../../Hooks/useOnClickOutside';
import { Dropdown } from '../Dropdown';
import { useTranslation } from 'react-i18next';

type PropsType = {
  show: boolean;
  setShow: (x: boolean) => void;
  pick: (x: CarBrandType) => void;
  brand: CarBrandType | null;
  disabled: boolean;
};

export const BrandSelect = ({ show, setShow, pick, brand, disabled }: PropsType) => {
  const container = useRef<HTMLDivElement>(null);
  const containerClick = () => {
    setShow(!show);
  };
  useOnClickOutside(container, () => {
    setShow(false);
  });
  const { t } = useTranslation();

  return (
    <Container onClick={containerClick} ref={container} $disabled={disabled}>
      {brand ?? <PlaceholderOption>{t('components.brandSelect.brand')}</PlaceholderOption>}
      <Dropdown show={show} data={AllCarBrands} pick={(brand) => pick(brand as CarBrandType)} />
    </Container>
  );
};

const Container = styled.div<{ $disabled: boolean }>`
  height: 50px;
  position: relative;
  background: rgba(245, 245, 245, 0.5);
  border-radius: 5px;
  padding: 15px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  text-transform: capitalize;
  cursor: pointer; 
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}}
`;
const BrandOptionsWrapper = styled.div<{ $show: boolean }>`
  cursor: pointer;
  z-index: 3;
  height: fit-content;
  top: calc(100% + 10px);
  overflow: hidden;
  border-radius: 5px;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  opacity: 0;
  max-height: 400px;
  overflow-y: scroll;
  ${({ $show }) =>
    $show &&
    css`
      pointer-events: all;
      opacity: 1;
    `}
  ${scrollBar('dark')}
`;
const PlaceholderOption = styled.div`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary(0.5) : props.theme.colors.primaryContrast(0.5)};
  text-transform: capitalize;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: ${(props) =>
      props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  }
`;
const BrandOption = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  color: ${(props) => props.theme.colors.secondary()};
  text-transform: capitalize;
  background: ${(props) => props.theme.colors.primary()};
  &:hover {
    background: ${(props) => props.theme.colors.primaryLight6()};
  }
`;
