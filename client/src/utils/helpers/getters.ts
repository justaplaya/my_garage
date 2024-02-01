import { AxiosError } from 'axios';

export const getAxiosErrorStatus = (error: AxiosError | null): number | undefined => error?.response?.status;
