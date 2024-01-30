import { SetState } from 'global/typesWithImports';
import { Goal } from '../../models/goal';

export namespace Props {
  export type Commom = {
    openedFolderIds: string[];
    setOpenedFolderIds: SetState<string[]>;
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
