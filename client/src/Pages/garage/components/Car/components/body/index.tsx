import { BodyTxt, BodyWrapper } from '../../style';
import { Text } from '../../../../loaders/text';
import React from 'react';
import { Props } from './types';

export const Body = ({ car }: Props) => {
  return (
    <BodyWrapper>
      <BodyTxt>{car ? <Content /> : <Loading />}</BodyTxt>
    </BodyWrapper>
  );
};
const Content = () => {
  return (
    <>
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate enim non obcaecati quod soluta
      suscipit vitae voluptatum? Animi aperiam asperiores at consectetur culpa cupiditate debitis eligendi est eum
      excepturi expedita incidunt laboriosam magni maiores maxime modi non quae quas quasi quisquam repellat repudiandae,
      sapiente vel veniam vero. Accusamus aliquam autem cumque, eius est ex maiores possimus quo repellat. A adipisci
      alias aperiam architecto blanditiis distinctio enim, eveniet explicabo fugit labore maiores maxime minima nobis non
      praesentium quis repellendus rerum saepe sit ut! Ab accusantium doloremque dolores fugit numquam officia
      perspiciatis quia repellendus saepe voluptate? Id, molestias mollitia! Ad, necessitatibus.'
    </>
  );
};
const Loading = () => {
  return (
    <>
      <Text width={'100%'} height={25} />
      <Text width={'100%'} height={25} />
      <Text width={'59%'} height={25} />
    </>
  );
};
