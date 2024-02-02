import { Container } from './style';
import { Tree } from './components/tree';
import { GoalInfo } from './components/goalInfo';
import { Route, Routes } from 'react-router-dom';
import { useGoals } from './useGoals';

export const Goals = () => {
  const { props } = useGoals();

  return (
    <Container>
      <Tree {...props.tree} />
      <Routes>
        <Route path={'/:id'} element={<GoalInfo {...props.goalInfo} />} />
      </Routes>
    </Container>
  );
};
