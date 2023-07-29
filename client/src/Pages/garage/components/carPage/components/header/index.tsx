import React from 'react';
import { HeaderContainer } from './style';
import { useHeader } from './useHeader';
import { Top } from './top';
import { Bottom } from './bottom';
import { Props } from './types';

export const Header = (_props: Props) => {
  const { props } = useHeader(_props);

  return (
    <HeaderContainer>
      <Top {...props.top} />
      <Bottom {...props.bottom} />
    </HeaderContainer>
  );
};
