import { SetState } from 'utils/types';
import { DefaultSortOptionType, SortOptionType } from '../../types';

export type Props = {
  showSort: boolean;
  setShowSort: SetState<boolean>;
  sortValue: SortOptionType | DefaultSortOptionType;
  setSortValue: SetState<SortOptionType | DefaultSortOptionType>;
};
