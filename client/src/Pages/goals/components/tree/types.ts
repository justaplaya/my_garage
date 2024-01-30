import { SetState } from '../../../../global/typesWithImports';

export type Props = {
  focusedId: string | null;
  setFocusedId: SetState<string | null>;
  openedFolderIds: string[];
  setOpenedFolderIds: SetState<string[]>;
};
