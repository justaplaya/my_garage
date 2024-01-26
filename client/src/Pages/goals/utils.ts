import { GoalStatus } from './models/goal';

export const goalStatusToColor = (status: GoalStatus) => {
  switch (status) {
    case 'notStarted':
      return '125,125,125';
    case 'inProgress':
      return '175,255,0';
    case 'nearlyFinished':
      return '255, 97, 56';
    case 'finished':
      return '75, 255, 75';
  }
};
