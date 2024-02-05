import { Content } from './content';
import { SideModal } from 'Components/SideModal';
import { Props } from './types';
import { useCreateUpdateModal } from './useCreateUpdate';

export const CreateUpdateModal = (_props: Props.Common) => {
  const { show } = _props;
  const { apply, applyText, applyDisable, close, localLoading, onClickOutside, inputs } = useCreateUpdateModal(_props);
  const props = {
    sideModal: {
      show,
      apply,
      applyText,
      applyDisable,
      close,
      localLoading,
      onClickOutside,
    },
  };
  return (
    <SideModal {...props.sideModal}>
      <Content inputs={inputs} />
    </SideModal>
  );
};
