import { useGetSearchQueryKey } from 'Hooks/useGetQueryParam';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetGoal } from '../../api';
import { useEffect } from 'react';
import { Props } from './types';
import { getAxiosErrorStatus } from 'utils/helpers/getters';
import { toast } from 'react-toastify';

export const useGoalInfo = ({ openedFolderIds, setOpenedFolderIds }: Props.Commom) => {
  const querySearchId = useGetSearchQueryKey();
  const navigate = useNavigate();
  const location = useLocation();
  const { data: goal, isLoading, refetch, error } = useGetGoal(querySearchId);

  useEffect(() => {
    if (getAxiosErrorStatus(error) === 404 && !isLoading) {
      navigate('/goals');
      toast.error('Not found');
    }
  }, [error, isLoading]);

  useEffect(() => {
    refetch();
  }, [location.pathname]);

  useEffect(() => {
    goal?.folderId && setOpenedFolderIds((p) => [...new Set([...p, goal.folderId])]);
  }, [goal?.folderId]);

  return { isLoading, goal, querySearchId };
};
