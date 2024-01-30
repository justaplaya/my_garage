import { useGetSearchQueryKey } from 'Hooks/useGetQueryParam';
import { useLocation } from 'react-router-dom';
import { useGetGoal } from '../../api';
import { useEffect } from 'react';
import { Props } from './types';

export const useGoalInfo = ({ openedFolderIds, setOpenedFolderIds }: Props.Commom) => {
  const querySearchId = useGetSearchQueryKey();
  const location = useLocation();

  const { data: goal, isLoading, refetch } = useGetGoal(querySearchId);

  useEffect(() => {
    refetch();
  }, [location.pathname]);

  useEffect(() => {
    goal?.folderId && setOpenedFolderIds((p) => [...new Set([...p, goal.folderId])]);
  }, [goal?.folderId]);
  return { isLoading, goal, querySearchId };
};
