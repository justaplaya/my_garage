import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getCookie } from '../../../../utils/helpers/auth';
import { Goal } from '../../models/goal';
import { instance } from '../index';

export const useDeleteGoal = (onSuccess?: () => void) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['goal', 'delete'],
    mutationFn: async (id: string) => {
      await instance(getCookie('token')).delete<{ message: string }>(`deleteGoal?id=${id}`);
      return id;
    },
    onSuccess: (deletedId) => {
      onSuccess && onSuccess();
      client.setQueriesData<Goal[]>(
        {
          queryKey: ['goal', 'multiple'],
        },
        (p) => {
          if (!p) return p;

          return p.filter((goal) => goal.id !== deletedId);
        },
      );
      client.invalidateQueries({
        queryKey: ['goal', deletedId],
        refetchType: 'none',
      });
    },
  });
};
