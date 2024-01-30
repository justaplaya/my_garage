import { SetState } from 'global/typesWithImports';
import { GoalImportance } from '../../models/goal';

export namespace Props {
  export type Common = {
    focusedId: string | null;
    setFocusedId: SetState<string | null>;
    openedFolderIds: string[];
    setOpenedFolderIds: SetState<string[]>;
  };

  export type GoalImportanceImg = {
    importance: GoalImportance;
  };
}
