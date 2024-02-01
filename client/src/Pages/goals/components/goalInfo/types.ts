import { SetState } from 'global/typesWithImports';
import { Goal } from '../../models/goal';

export namespace Props {
  export type Commom = {
    focusedId: string | null;
    setFocusedId: SetState<string | null>;
    openedFolderIds: string[];
    setOpenedFolderIds: SetState<string[]>;
  };

  export type Content = {
    focusedId: string | null;
    querySearchId: string;
    goal: Goal;
  };

  export type RangeSlider = {
    querySearchId: string;
    goal: Goal;
  };

  export type DropArea = {
    querySearchId: string;
    goal: Goal;
  };
}
