import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Folder } from '../../models/folder';
import { getCookie } from '../../../../utils/helpers/auth';
import { instance } from '../index';

export const useCreateFolder = (onSuccess?: () => void) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['folder', 'create'],
    mutationFn: async (data: Pick<Folder, 'title' | 'description'>) => {
      await instance(getCookie('token')).post<{ folder: Folder }>('createFolder', { data });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['folder'] });
      onSuccess && onSuccess();
    },
  });
};
