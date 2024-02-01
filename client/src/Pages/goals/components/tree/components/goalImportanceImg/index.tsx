import { ReactComponent as Lightning } from 'img/goals/lightning.svg';
import { ReactComponent as Tilde } from 'img/goals/tilde.svg';
import { ReactComponent as Sleeping } from 'img/goals/zzz.svg';
import { Props } from '../../types';

export const GoalImportanceImg = ({ importance }: Props.GoalImportanceImg) => {
  switch (importance) {
    case 'high':
      return <Lightning />;
    case 'medium':
      return <Tilde />;
    case 'low':
      return <Sleeping />;
    default:
      return <Sleeping />;
  }
};
