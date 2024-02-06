import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren & {
  show: boolean;
  title: string;
  closeAction: () => void;
  description?: string;
  closeText?: string;
};
