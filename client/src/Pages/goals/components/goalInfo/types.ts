import { SetState } from 'global/typesWithImports';

export type Props = {
  openedFolderIds: string[];
  setOpenedFolderIds: SetState<string[]>;
};
