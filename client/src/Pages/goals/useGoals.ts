import { useGetSearchQueryKey } from 'Hooks/useGetQueryParam';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoals = () => {
  const navigate = useNavigate();
  const querySearchId = useGetSearchQueryKey();

  const [focusedId, setFocusedId] = useState<null | string>(querySearchId);
  const [openedFolderIds, setOpenedFolderIds] = useState<string[]>([]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFocusedId(null);
        navigate('/goals');
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const props = {
    tree: {
      focusedId,
      setFocusedId,
      openedFolderIds,
      setOpenedFolderIds,
    },
    goalInfo: {
      focusedId,
      setFocusedId,
      openedFolderIds,
      setOpenedFolderIds,
    },
  };

  return { props };
};
