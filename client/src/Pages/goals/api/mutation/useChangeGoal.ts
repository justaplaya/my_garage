import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Goal } from '../../models/goal';
import { getCookie } from '../../../../utils/helpers/auth';
import { instance } from '../index';

export const useChangeGoal = (onSuccess?: () => void) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['goal', 'change'],
    mutationFn: async (data: { id: string; change: Partial<Goal> }) => {
      const { id, change } = data;
      await instance(getCookie('token')).post<{ message: string }>('changeGoal', { id, change });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['goal'] });
      onSuccess && onSuccess();
    },
  });
};
