import { useLocation } from 'react-router-dom';

/** Отдаёт search query key; отдаёт null если query не search */
export const useGetSearchQueryKey = (key: string = 'id') => {
  const { pathname } = useLocation();

  if (!pathname.includes(`${key}=`)) return null;

  const chunks = pathname.split(`${key}=`);

  return chunks[chunks.length - 1];
};
