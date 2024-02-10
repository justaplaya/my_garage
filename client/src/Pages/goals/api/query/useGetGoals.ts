import { useQuery } from '@tanstack/react-query';
import { getCookie } from '../../../../utils/helpers/auth';
import { Goal } from '../../models/goal';
import { retryFunc } from '../utils';
import { instance } from '../index';

export const useGetGoals = () => {
  return useQuery({
    queryKey: ['goal', 'multiple'],
    queryFn: async () => {
      const { data } = await instance(getCookie('token')).get<{ data: Goal[] }>('getGoals');
      return data.data;
    },
    retry: retryFunc,
  });
};
