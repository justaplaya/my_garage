import { Container } from './style';
import { Tree } from './components/tree';
import { GoalInfo } from './components/goalInfo';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useGetSearchQueryKey } from '../../Hooks/useGetQueryParam';

export const Goals = () => {
  const querySearchId = useGetSearchQueryKey();

  const [focusedId, setFocusedId] = useState<null | string>(querySearchId);
  const [openedFolderIds, setOpenedFolderIds] = useState<string[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
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

  // console.log('===focusedId', focusedId);
  // useEffect(() => {}, []);
  return (
    <Container>
      <Tree
        focusedId={focusedId}
        setFocusedId={setFocusedId}
        openedFolderIds={openedFolderIds}
        setOpenedFolderIds={setOpenedFolderIds}
      />
      <Routes>
        <Route
          path={'/:id'}
          element={<GoalInfo openedFolderIds={openedFolderIds} setOpenedFolderIds={setOpenedFolderIds} />}
        />
      </Routes>
    </Container>
  );
};
