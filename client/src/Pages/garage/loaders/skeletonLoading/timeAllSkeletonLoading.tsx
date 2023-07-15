import React from 'react';
import ContentLoader from 'react-content-loader';

export const TimeAllSkeletonLoading: React.FC = () => {
  return (
    <ContentLoader
      width="100"
      height="40"
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      backgroundColor={'#eaeaea'}
      foregroundColor={'#f5f5f5'}
      title={'Загрузка...'}
    >
      <rect width="100" height="17" fill="#EAEAEA" />
      <rect y="23" width="60" height="17" fill="#EAEAEA" />
    </ContentLoader>
  );
};
