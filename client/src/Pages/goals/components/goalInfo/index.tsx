import { Container, Description, ImportanceTitle, RangeContainer, Separator, StatusTitle, Title } from './style';
import { Props } from './types';
import { goalStatusToTitle } from '../../utils';
import { RangeSlider } from './components/rangeSlider';
import { DropArea } from './components/dropArea';
import { useGoalInfo } from './useGoalInfo';

export const GoalInfo = (_props: Props.Commom) => {
  const { isLoading, goal, querySearchId } = useGoalInfo(_props);

  return (
    <Container>
      {isLoading && <Title>Loading...</Title>}
      {!!goal && !!querySearchId && (
        <>
          <Title>{goal.title}</Title>
          <ImportanceTitle>Importance: {goal.importance}</ImportanceTitle>
          <Separator />
          <DropArea querySearchId={querySearchId} goal={goal} />
          <Separator />
          <RangeContainer>
            <StatusTitle>Status: {goalStatusToTitle(goal.status)}</StatusTitle>
            <RangeSlider querySearchId={querySearchId} goal={goal} />
          </RangeContainer>
          <Separator />
          <Description>{goal.description}</Description>
        </>
      )}
    </Container>
  );
};
