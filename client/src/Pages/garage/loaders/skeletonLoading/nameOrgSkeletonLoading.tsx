import React from 'react';
import ContentLoader from 'react-content-loader';

export const NameOrgSkeletonLoading: React.FC = () => {
  return (
    <ContentLoader
      width="270"
      height="63"
      viewBox="0 0 270 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      backgroundColor={'#eaeaea'}
      foregroundColor={'#f5f5f5'}
      title={'Загрузка...'}
    >
      <rect y="23" width="270" height="17" fill="#EAEAEA" />
      <rect y="46" width="230" height="17" fill="#EAEAEA" />
      <rect width="190" height="17" fill="#EAEAEA" />
    </ContentLoader>
  );
};
