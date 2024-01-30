import { GoalImportance, GoalStatus } from './models/goal';
import HighStatusImg from 'img/goals/statusHigh.png';
import MediumStatusImg from 'img/goals/statusMedium.png';
import LowStatusImg from 'img/goals/statusLow.png';

export const goalStatusToColor = (status: GoalStatus) => {
  switch (status) {
    case 'notStarted':
      return '115,115,115';
    case 'inProgress':
      return '75,175,0';
    case 'nearlyFinished':
      return '255, 97, 56';
    case 'finished':
      return '75, 255, 75';
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
  }
};

export const goalImportanceToImg = (importance: GoalImportance) => {
  switch (importance) {
    case 'high':
      return HighStatusImg;
    case 'medium':
      return MediumStatusImg;
    case 'low':
      return LowStatusImg;
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
  }
};
