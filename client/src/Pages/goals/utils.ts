import { GoalStatus } from './models/goal';
import { useTheme } from 'styled-components';

export const useGoalStatusToColor = (status: GoalStatus) => {
  const { colors } = useTheme();

  switch (status) {
    case 'notStarted':
      return colors.secondary(0.5);
    case 'inProgress':
      return colors.secondary(0.7);
    case 'nearlyFinished':
      return colors.secondary(0.9);
    case 'finished':
      return colors.secondary(1);
    default:
      return colors.secondary(0.25);
  }
};
export const goalStatusToTitle = (status: GoalStatus) => {
  switch (status) {
    case 'notStarted':
      return 'Not started';
    case 'inProgress':
      return 'In progress';
    case 'nearlyFinished':
      return 'Nearly finished';
    case 'finished':
      return 'Finished';
    default:
      return 'Not started';
  }
};

export const statusRangeValueToGoalStatus = (value: number): GoalStatus => {
  switch (value) {
    case 0:
      return 'notStarted';
    case 25:
      return 'inProgress';
    case 50:
      return 'nearlyFinished';
    case 75:
      return 'finished';
    default:
      return 'notStarted';
  }
};

export const goalStatusToStatusRangeValue = (status: GoalStatus): number => {
  switch (status) {
    case 'notStarted':
      return 0;
    case 'inProgress':
      return 25;
    case 'nearlyFinished':
      return 50;
    case 'finished':
      return 75;
    default:
      return 0;
  }
};
