import { Container, Title } from './style';
import { Props } from './types';
import { useGoalInfo } from './useGoalInfo';
import { Content } from './components/content';

export const GoalInfo = (props: Props.Commom) => {
  const { focusedId } = props;
  const { isLoading, goal, querySearchId } = useGoalInfo(props);
  console.log(focusedId);
  return (
    <Container>
      {isLoading || !goal || !querySearchId ? (
        <Title>Loading...</Title>
      ) : (
        <Content querySearchId={querySearchId} goal={goal} focusedId={focusedId} />
      )}
    </Container>
  );
};
