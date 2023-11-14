import { CreateBtn, Container, Row } from './style';
import 'utils/i18next';
import { Sort } from './components/sort';
import { Search } from './components/search';
import { List } from './components/list';
import { useGarage } from './useGarage';
import { CreateUpdateCarModal } from './modals/createUpdateCar';

export const Garage = () => {
  const { props, text } = useGarage();

  return (
    <Container>
      <Row>
        <Sort {...props.sort} />
        <Search {...props.search} />
        <CreateBtn {...props.createBtn}>{text.create}</CreateBtn>
      </Row>
      <List {...props.list} />
      <CreateUpdateCarModal {...props.createModal} />
    </Container>
  );
};
