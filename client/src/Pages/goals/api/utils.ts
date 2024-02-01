import { AxiosError } from 'axios';
import { VALID_ERROR_CODES } from './config';
import { getAxiosErrorStatus } from 'utils/helpers/getters';

export const retryFunc = (count, error: AxiosError) => {
  const status = getAxiosErrorStatus(error);
  if (count > 3 || !status || !VALID_ERROR_CODES.includes(status)) return false;

  return true;
};
