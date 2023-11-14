import { Loader } from 'Components/Loader';
import { useTranslation } from 'react-i18next';
import { ApplyButton, CloseButton, Container } from './style';
import { Props } from '../types';

export const BottomRow = ({ apply, close, applyDisable, applyText, loading }: Props.BottomRow) => {
  const { t } = useTranslation();

  const text = {
    apply: applyText ?? t('components.bottomRow.apply'),
    close: t('components.bottomRow.close'),
  };

  return (
    <Container>
      <ApplyButton $isDisabled={applyDisable} onClick={apply}>
        {loading ? <Loader /> : text.apply}
      </ApplyButton>
      <CloseButton onClick={close}>{text.close}</CloseButton>
    </Container>
  );
};
