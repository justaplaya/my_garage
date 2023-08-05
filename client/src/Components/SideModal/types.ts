import { ReactNode } from 'react';

export namespace Props {
  export type Common = {
    show: boolean;
    applyText: string;
    apply: () => void;
    close: () => void;
    onClickOutside: () => void;
    applyDisable: boolean;
    localLoading: boolean;
    children?: ReactNode;
  };
  export type BottomRow = {
    apply: () => void;
    close: () => void;
    applyDisable: boolean;
    applyText?: string;
    loading: boolean;
  };
}
