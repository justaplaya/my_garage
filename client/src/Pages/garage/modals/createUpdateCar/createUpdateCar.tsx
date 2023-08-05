import { SideModal } from 'Components/SideModal';
import { Content } from './content';
import React, { useContext } from 'react';
import { CreateCtx } from './ctx';

export const CreateUpdateCar = () => {
  const { show, text, apply, onClickOutside, close, applyDisable, localLoading } = useContext(CreateCtx);

  const _props = {
    sideModal: {
      show,
      applyText: text.applyText,
      apply,
      onClickOutside,
      close,
      applyDisable,
      localLoading,
    },
  };
  return (
    <SideModal {..._props.sideModal}>
      <Content />
    </SideModal>
  );
};
