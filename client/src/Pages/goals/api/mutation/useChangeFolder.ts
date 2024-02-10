import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FolderOutDTO } from '../../models/folder';
import { getCookie } from '../../../../utils/helpers/auth';
import { instance } from '../index';

export const useChangeFolder = (onSuccess?: () => void) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['folder', 'change'],
    mutationFn: async (data: { id: string; change: Partial<FolderOutDTO> }) => {
      const { id, change } = data;
      await instance(getCookie('token')).post<{ message: string }>('changeFolder', { id, change });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['folder'] });
      onSuccess && onSuccess();
    },
  });
};
