import { DragEvent, useState } from 'react';
import { Folder } from '../../models/folder';
import { Goal } from '../../models/goal';
import { Props } from './types';
import { useNavigate } from 'react-router-dom';
import { useGetFolders } from '../../api/query';
import { useGetGoals } from '../../api/query';
import { useChangeFolder } from '../../api/mutation';
import { useChangeGoal } from '../../api/mutation';

export const useTree = ({ focusedId, setFocusedId, openedFolderIds, setOpenedFolderIds }: Props.Common) => {
  const { data: folders } = useGetFolders();
  const { data: goals } = useGetGoals();
  const { mutate: changeFolder } = useChangeFolder();
  const { mutate: changeGoal } = useChangeGoal();
  const navigate = useNavigate();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<string | null>(null);

  const displayedFolders: Folder[] =
    folders
      ?.sort((a, b) => a.order - b.order)
      ?.map((folder) => ({ ...folder, isOpened: openedFolderIds.includes(folder.id) })) ?? [];
  const getDisplayedGoals = (folderId: string): Goal[] =>
    goals?.filter((goal) => goal.folderId === folderId)?.sort((a, b) => a.order - b.order) ?? [];

  const goalAction = {
    onClick(goalId: string) {
      navigate(`/goals/id=${goalId}`);
      setFocusedId(goalId);
    },
    onDragLeave(goal: Goal) {
      if (draggingId !== goal.id) {
        setDraggedOverId(null);
      }
    },
    onDragEnter(goal: Goal) {
      if (draggingId !== goal.id) {
        setDraggedOverId(goal.id);
      }
    },
    onDragStart(e: DragEvent, goalId: string) {
      e.dataTransfer.setData('goalId', goalId);
      setDraggingId(goalId);
    },
    onDrop(e: DragEvent, folderId: string, id: string) {
      e.preventDefault();
      if (!goals) return;

      const goalId = e.dataTransfer.getData('goalId');

      if (goalId === id) return;

      const receivedGoal = goals.find((goal) => goal.id === goalId);
      const myGoal = goals.find((goal) => goal.id === id);

      if (!myGoal || !receivedGoal) return;

      const myOrder = myGoal.order;

      goals
        .filter((goal) => goal.order > myOrder && goal.folderId === myGoal.folderId)
        .forEach((goal) => changeGoal({ id: goal.id, change: { order: goal.order + 1 } }));
      changeGoal({ id: goalId, change: { folderId, order: myOrder + 1 } });

      setDraggingId(null);
      setDraggedOverId(null);
    },
    onDragOver(e: DragEvent, id: string) {
      e.preventDefault();
    },
  };
  const folderAction = {
    onDragLeave(folder: Folder) {
      if (draggingId !== folder.id) {
        setDraggedOverId(null);
      }
    },
    onDragEnter(folder: Folder) {
      if (draggingId !== folder.id) {
        setDraggedOverId(folder.id);
      }
    },
    onClick(folder: Folder) {
      setOpenedFolderIds((ids) =>
        ids.includes(folder.id) ? ids.filter((id) => id !== folder.id) : [...ids, folder.id],
      );
      setFocusedId(folder.id);
    },
    onDragStart(e: DragEvent, folderId: string) {
      e.dataTransfer.setData('folderId', folderId);
      setDraggingId(folderId);
    },
    onDragOver(e: DragEvent, folderId: string) {
      e.preventDefault();
    },
    onDrop(e: DragEvent, folderId: string) {
      e.preventDefault();
      if (!goals || !folders) return;

      const goalId = e.dataTransfer.getData('goalId');
      const receivedFolderId = e.dataTransfer.getData('folderId');

      if (receivedFolderId === folderId) return;

      if (goalId) {
        changeGoal({ id: goalId, change: { folderId, order: 0 } });

        goals
          .filter((goal) => goal.id !== goalId && goal.folderId === folderId)
          .forEach((goal) =>
            changeGoal({
              id: goal.id,
              change: { order: goal.order + 1 },
            }),
          );
        setOpenedFolderIds((ids) => [...new Set([...ids, folderId])]);
      }
      if (receivedFolderId) {
        const myOrder = folders.find((folder) => folder.id === folderId)?.order;
        if (typeof myOrder !== 'number') return;

        changeFolder({
          id: receivedFolderId,
          change: { id: receivedFolderId, order: myOrder + 1 },
        });

        folders
          .filter((folder) => folder.order > myOrder && folder.id !== receivedFolderId)
          .forEach((folder) =>
            changeFolder({
              id: folder.id,
              change: { order: folder.order + 1 },
            }),
          );
      }

      setDraggedOverId(null);
      setDraggingId(null);
    },
  };

  const getFolderProps = (folder: Folder) => ({
    onClick: () => folderAction.onClick(folder),
    onDragOver: (e) => folderAction.onDragOver(e, folder.id),
    onDrop: (e) => folderAction.onDrop(e, folder.id),
    onDragStart: (e) => folderAction.onDragStart(e, folder.id),
    draggable: true,
    $draggedOverDown: folder.id === draggedOverId,
    onDragLeave: () => folderAction.onDragLeave(folder),
    onDragEnter: () => folderAction.onDragEnter(folder),
  });

  const getGoalProps = (goal: Goal, folderId: string) => ({
    $status: goal.status,
    draggable: true,
    onClick: () => goalAction.onClick(goal.id),
    onDragStart: (e) => goalAction.onDragStart(e, goal.id),
    onDragOver: (e) => goalAction.onDragOver(e, goal.id),
    onDrop: (e) => goalAction.onDrop(e, folderId, goal.id),
    onDragLeave: () => goalAction.onDragLeave(goal),
    onDragEnter: () => goalAction.onDragEnter(goal),
    $draggedOverDown: goal.id === draggedOverId,
    $isFinished: goal.status === 'finished',
  });

  return {
    displayedFolders,
    getDisplayedGoals,
    getFolderProps,
    getGoalProps,
  };
};
