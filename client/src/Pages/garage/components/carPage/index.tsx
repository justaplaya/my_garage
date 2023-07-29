import React from 'react';
import { EditModal } from 'Components/SideModal/EditModal/EditModal';
import { Container } from './style';
import { Header } from './components/header';
import { Body } from './components/body';
import { useCar } from './useCar';

export const CarPage = () => {
  const { car, props } = useCar();
  return (
    <Container {...props.container}>
      <Header {...props.header} />
      <Body {...props.body} />
      {car && <EditModal car={car} {...props.editModal} />}
    </Container>
  );
};
// TODO little context here?
