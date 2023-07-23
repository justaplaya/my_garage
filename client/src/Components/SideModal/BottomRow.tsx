import styled, { css } from 'styled-components';
import { scrollBarWidth } from 'styles/mixins';
import React from 'react';
import { Loader } from '../Loader';
import { useTranslation } from 'react-i18next';

type Props = {
  apply: () => void;
  close: () => void;
  applyDisable: boolean;
  applyText?: string;
  loading: boolean;
};

export const BottomRow = ({ apply, close, applyDisable, applyText, loading }: Props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <ApplyButton $isDisabled={applyDisable} onClick={apply}>
        {loading ? <Loader /> : applyText || t('components.bottomRow.apply')}
      </ApplyButton>
      <CloseButton onClick={close}>{t('components.bottomRow.close')}</CloseButton>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background: ${(props) => props.theme.colors.secondary(0.75)};
  backdrop-filter: blur(2px);
  width: calc(100% - ${scrollBarWidth});
`;
const ApplyButton = styled.button<{ $isDisabled: boolean }>`
  position: relative;
  width: 175px;
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.secondary()};
  background: ${(props) => props.theme.colors.primary()};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.3;
    `};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseButton = styled.button`
  width: 40%;
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  background: rgba(245, 245, 245, 0.5);
  cursor: pointer;
`;
