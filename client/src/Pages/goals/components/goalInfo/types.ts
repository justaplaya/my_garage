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
    setShow: SetState<boolean>;
  };

  export type RangeSlider = {
    goal: Goal;
  };

  export type DropArea = {
    goal: Goal;
  };

  export type ButtonsSection = {
    setIsCreateModal: SetState<boolean>;
    setShow: SetState<boolean>;
    goal: Goal;
  };
}
