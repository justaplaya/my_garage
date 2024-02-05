import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'utils/helpers/auth';
import { Folder, FolderOutDTO } from '../models/folder';
import { Goal } from '../models/goal';
import { retryFunc } from './utils';

export const instance = (token: string | null) =>
  axios.create({
    baseURL: 'http://localhost:6060/api/',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

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
        queryKey: ['goal', 'single'],
        refetchType: 'none',
      });
    },
  });
};
