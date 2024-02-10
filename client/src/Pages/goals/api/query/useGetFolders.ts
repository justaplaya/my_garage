import { useQuery } from '@tanstack/react-query';
import { getCookie } from '../../../../utils/helpers/auth';
import { FolderOutDTO } from '../../models/folder';
import { retryFunc } from '../utils';
import { instance } from '../index';

export const useGetFolders = () => {
  return useQuery({
    queryKey: ['folder', 'multiple'],
    queryFn: async () => {
      const { data } = await instance(getCookie('token')).get<{ data: FolderOutDTO[] }>('getFolders');
      return data.data;
    },
    retry: retryFunc,
  });
};
