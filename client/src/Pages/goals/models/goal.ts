export type GoalImportance = 'high' | 'medium' | 'low';

export type GoalStatus = 'notStarted' | 'inProgress' | 'nearlyFinished' | 'finished';

export type Goal = {
  id: string;
  folderId: string;
  order: number;
  title: string;
  description?: string;
  isDone: boolean;
  status: GoalStatus;
  importance: GoalImportance;
  imageDataUrl?: string;
};
