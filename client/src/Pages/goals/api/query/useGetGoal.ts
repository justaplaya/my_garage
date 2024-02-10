import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'utils/helpers/auth';
import { Goal } from '../../models/goal';
import { retryFunc } from '../utils';
import { instance } from '../index';

export const getGoalQueryFn = async (id: string) => {
  const { data } = await instance(getCookie('token')).get<{ data: Goal }>(`getGoal?id=${id}`);
  return data.data;
};

export const useGetGoal = (id: string) => {
  return useQuery({
    queryKey: ['goal', id],
    queryFn: () => getGoalQueryFn(id),
    retry: retryFunc,
  });
};
