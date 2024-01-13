import { useTranslation } from 'react-i18next';

export const useErrorComponent = () => {
  const { t } = useTranslation();

  const text = {
    title: t('components.errorBoundary.title'),
    description: t('components.errorBoundary.description'),
  };

  return { text };
};
