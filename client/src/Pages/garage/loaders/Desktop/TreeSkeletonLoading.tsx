import React from 'react';
import ContentLoader from 'react-content-loader';
import { GeometryOfTreeSkeletonLoading } from './GeometryOfTreeSkeletonLoading';
// /
export const TreeSkeletonLoading = () => {
  return (
    <ContentLoader
      speed={0.9}
      backgroundColor={'#858d8f'}
      foregroundColor={'#f5f5f5'}
      title={'Загрузка...'}
      width="210"
      height="350"
      viewBox="0 0 210 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <GeometryOfTreeSkeletonLoading />
    </ContentLoader>
  );
};
