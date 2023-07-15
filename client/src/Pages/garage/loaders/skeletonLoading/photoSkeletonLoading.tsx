import React from 'react';
import ContentLoader from 'react-content-loader';

export const PhotoSkeletonLoading: React.FC = () => {
  return (
    <ContentLoader
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      backgroundColor={'#eaeaea'}
      foregroundColor={'#f5f5f5'}
      title={'Загрузка...'}
    >
      <rect width="70" height="70" rx="4" fill="#EAEAEA" />
    </ContentLoader>
  );
};
