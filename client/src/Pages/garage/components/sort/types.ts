import { SetState } from 'utils/types';
import { SortOptionType } from '../../utils';

export type Props = {
  showSort: boolean;
  setShowSort: SetState<boolean>;
  sortValue: SortOptionType;
  setSortValue: SetState<SortOptionType>;
};
