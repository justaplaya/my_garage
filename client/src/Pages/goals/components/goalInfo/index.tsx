import { Container, Title } from './style';
import { Props } from './types';
import { useGoalInfo } from './useGoalInfo';
import { Content } from './components/content';
import { CreateUpdateModal } from '../../modals/createUpdate';
import { ButtonsSection } from './components/buttonsSection';

export const GoalInfo = (props: Props.Commom) => {
  const { focusedId } = props;
  const { isLoading, goal, querySearchId, show, setShow, isCreateModal, setIsCreateModal } = useGoalInfo(props);

  if (isLoading || !goal || !querySearchId) return <Title>Loading...</Title>;

  const _props = {
    buttonsSection: {
      setIsCreateModal,
      setShow,
      goal,
    },
    content: {
      querySearchId,
      goal,
      focusedId,
      setShow,
    },
    modal: {
      ...(!isCreateModal && { goal }),
      show,
      setShow,
    },
  };

  return (
    <Container>
      <>
        <ButtonsSection {..._props.buttonsSection} />
        <Content {..._props.content} />
        <CreateUpdateModal type={'goal'} {..._props.modal} />
      </>
    </Container>
  );
};
