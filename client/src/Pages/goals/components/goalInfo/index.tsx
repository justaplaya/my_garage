import { Container, Title } from './style';
import { Props } from './types';
import { useGoalInfo } from './useGoalInfo';
import { Content } from './components/content';

export const GoalInfo = (_props: Props.Commom) => {
  const { isLoading, goal, querySearchId } = useGoalInfo(_props);

  return (
    <Container>
      {isLoading || !goal || !querySearchId ? (
        <Title>Loading...</Title>
      ) : (
        <Content querySearchId={querySearchId} goal={goal} />
      )}
    </Container>
  );
};
