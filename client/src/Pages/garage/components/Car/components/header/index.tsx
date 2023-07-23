import React from 'react';
import { HeaderContainer } from './style';
import { useHeader } from './useHeader';
import { SetState } from 'utils/types';
import { Car } from 'Pages/garage/models/car';
import { Top } from './top';
import { Bottom } from './bottom';
import { ApolloError } from '@apollo/client';

type Props = { car: Car | null; loading: boolean; setShowModal: SetState<boolean>; error: ApolloError | undefined };

export const Header = ({ car, loading, setShowModal, error }: Props) => {
  const { props } = useHeader({ car, loading, setShowModal, error });
  return (
    <HeaderContainer>
      <Top {...props.top} />
      <Bottom {...props.bottom} />
    </HeaderContainer>
  );
};
