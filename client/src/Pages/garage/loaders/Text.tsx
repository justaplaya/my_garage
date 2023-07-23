import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {
  width: number | string;
  height: number | string;
};

export const Text = ({ width, height }: Props) => {
  return (
    <ContentLoader
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      backgroundColor={'rgba(133,141,143,0.75)'}
      foregroundColor={'#f5f5f5'}
      title={'Загрузка...'}
    >
      <rect width={width} height={height} fill="#D2E1E4" rx="2.5" />
    </ContentLoader>
  );
};
