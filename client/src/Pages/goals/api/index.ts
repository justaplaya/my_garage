import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCookie } from 'utils/helpers/auth';
import { FolderOutDTO } from '../models/folder';
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

export const useChangeFolder = () => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['folder'],
    mutationFn: async (data: { id: string; change: Partial<FolderOutDTO> }) => {
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
export const useChangeGoalWithId = (goalId: string | null) => {
  const client = useQueryClient();

  return useMutation({
    mutationKey: ['goal', String(goalId)],
    mutationFn: async (data: { id: string; change: Partial<Goal> }) => {
      const { id, change } = data;
      await instance(getCookie('token')).post<{ message: string }>('changeGoal', { id, change });
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['goal'] });
    },
  });
};
