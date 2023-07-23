import React from 'react';
import { CardLoader } from 'Pages/garage/loaders';
import { getBrandIcon } from 'Pages/garage/components/Car/utils';
import { NotFound } from 'Pages/garage/components/notFound';
import { Container, CardWrapper, Icon, Separator, Brand, Model } from './style';
import { Car } from 'Pages/garage/models/car';
import { useLocation, useNavigate } from 'react-router-dom';
import { SetState } from 'utils';

type Props = { cars: Car[]; loading: boolean; searchValue: string; setShowModal: SetState<boolean> };
export const List = ({ cars, loading, searchValue, setShowModal }: Props) => {
  const centerItems = !cars.length && !loading;
  const props = { notFound: { searchValue, setShowModal } };
  return (
    <Container $centerItems={centerItems}>
      {loading ? <Loading /> : cars.length ? <Content cars={cars} /> : <NotFound {...props.notFound} />}
    </Container>
  );
};
type ContentProps = { cars: Car[] };
const Content = ({ cars }: ContentProps) => {
  return (
    <>
      {cars.map((car, index) => (
        <Card car={car} key={index} />
      ))}
    </>
  );
};
type CardProps = { car: Car };
const Card = ({ car }: CardProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cardClick = (car: Car) =>
    navigate(`/garage/id=${car.id}`, {
      state: {
        from: pathname,
      },
    });
  return (
    <CardWrapper onClick={() => cardClick(car)}>
      <Icon src={getBrandIcon(car.brand)} />
      <Separator />
      <Brand>{car.brand}</Brand>
      <Model>{car.model}</Model>
    </CardWrapper>
  );
};
const Loading = () => {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((card, index) => (
          <CardLoader key={index} />
        ))}
    </>
  );
};
