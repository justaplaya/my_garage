import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Goal } from '../../models/goal';
import { getCookie } from '../../../../utils/helpers/auth';
import { instance } from '../index';

export const useCreateGoal = (onSuccess?: () => void) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['goal', 'create'],
    mutationFn: async (data: Pick<Goal, 'title' | 'description'>) => {
      await instance(getCookie('token')).post<{ goal: Goal }>('createGoal', { data });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['goal'] });
      onSuccess && onSuccess();
    },
  });
};
