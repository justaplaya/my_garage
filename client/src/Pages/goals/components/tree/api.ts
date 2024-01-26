import axios from 'axios';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getCookie } from 'utils/helpers/auth';
import { Folder } from '../../models/folder';
import { Goal } from '../../models/goal';

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
    queryKey: ['folder'],
    queryFn: async () => {
      const { data } = await instance(getCookie('token')).get<{ data: Folder[] }>('getFolders');
      const folders: Folder[] = data.data;

      return folders;
    },
  });
};

export const useGetGoals = () => {
  return useQuery({
    queryKey: ['goal'],
    queryFn: async () => {
      const { data } = await instance(getCookie('token')).get<{ data: Goal[] }>('getGoals');
      const goals: Goal[] = data.data;

      return goals;
    },
  });
};

export const useChangeFolder = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['folder'],
    mutationFn: async (data: { id: string; change: Partial<Folder> }) => {
      const { id, change } = data;
      await instance(getCookie('token')).post<{ message: string }>('changeFolder', { id, change });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['folder'] });
    },
  });
};

export const useChangeGoal = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['goal'],
    mutationFn: async (data: { id: string; change: Partial<Goal> }) => {
      const { id, change } = data;
      await instance(getCookie('token')).post<{ message: string }>('changeGoal', { id, change });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['goal'] });
    },
  });
};
