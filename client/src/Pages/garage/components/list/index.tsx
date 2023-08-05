import React from 'react';
import { CardLoader } from 'Pages/garage/loaders';
import { getBrandIcon } from 'Pages/garage/components/carPage/utils';
import { NotFound } from 'Pages/garage/components/notFound';
import { Container, CardWrapper, Icon, Separator, Brand, Model } from './style';
import { Car } from 'Pages/garage/models/car';
import { useLocation, useNavigate } from 'react-router-dom';
import { Props } from './types';

export const List = ({ cars, loading, searchValue, setShowModal }: Props.Common) => {
  const centerItems = !cars.length && !loading;
  const props = { notFound: { searchValue, setShowModal } };
  return (
    <Container $centerItems={centerItems}>
      {loading ? <Loading /> : cars.length ? <Content cars={cars} /> : <NotFound {...props.notFound} />}
    </Container>
  );
};

const Content = ({ cars }: Props.Content) => {
  return (
    <>
      {cars.map((car, index) => (
        <Card car={car} key={index} />
      ))}
    </>
  );
};

const Card = ({ car }: Props.Card) => {
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
