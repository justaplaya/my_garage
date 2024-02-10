import { useQuery } from '@tanstack/react-query';
import { getCookie } from '../../../../utils/helpers/auth';
import { Goal } from '../../models/goal';
import { retryFunc } from '../utils';
import { instance } from '../index';

export const useGetGoal = (id: string | null) => {
  return useQuery({
    queryKey: ['goal', 'single'],
    queryFn: async () => {
      const { data } = await instance(getCookie('token')).get<{ data: Goal }>(`getGoal?id=${id}`);
      return data.data;
    },
    retry: retryFunc,
  });
};
