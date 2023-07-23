import { SetState } from 'utils';
import { useTranslation } from 'react-i18next';

type Props = {
  setShowModal: SetState<boolean>;
};

export const useNotFound = ({ setShowModal }: Props) => {
  const { t } = useTranslation();
  const text = {
    search: {
      top: t('pages.garage.main.404SearchTop'),
      bottom: t('pages.garage.main.404SearchBottom'),
    },
    all: {
      top: t('pages.garage.main.404AllTop'),
      bottomStatic: t('pages.garage.main.404AllBottomStatic'),
      bottomActive: t('pages.garage.main.404AllBottomInteractive'),
    },
  };
  const maxLength = 45;
  const cut = (value: string) => (value.length > maxLength ? `${value.slice(0, maxLength)}...` : value);
  const getTitle = (value: string) => (value ? `${text.search.top} «${cut(value)}»` : text.all.top);
  const getDesc = (value: string) => (value ? text.search.bottom : `${text.all.bottomStatic}`);
  const openModal = () => setShowModal(true);

  return { getTitle, getDesc, openModal, text };
};
