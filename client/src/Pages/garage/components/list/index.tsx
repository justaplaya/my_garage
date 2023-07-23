import React from 'react';
import { CardLoader } from 'Pages/garage/loaders';
import { getBrandIcon } from 'Pages/garage/components/Car/utils';
import { NotFound } from 'Pages/garage/components/notFound';
import { Container, CardWrapper, Icon, Separator, Brand, Model } from './style';
import { Car } from 'Pages/garage/models/car';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = { cars: Car[]; loading: boolean; searchValue: string };
export const List = ({ cars, loading, searchValue }: Props) => {
  const centerItems = !cars.length && !loading;
  return (
    <Container $centerItems={centerItems}>
      {loading ? <Loading /> : cars.length ? <Content cars={cars} /> : <NotFound searchValue={searchValue} />}
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
