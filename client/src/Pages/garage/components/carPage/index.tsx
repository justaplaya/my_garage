import { Container } from './style';
import { Header } from './components/header';
import { Body } from './components/body';
import { useCar } from './useCar';
import { CreateUpdateCarModal } from '../../modals/createUpdateCar';

export const CarPage = () => {
  const { car, props } = useCar();
  return (
    <Container {...props.container}>
      <Header {...props.header} />
      <Body {...props.body} />
      {car && <CreateUpdateCarModal car={car} {...props.modal} />}
    </Container>
  );
};
// TODO little context here?
