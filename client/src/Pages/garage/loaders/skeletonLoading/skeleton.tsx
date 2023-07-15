import React from 'react';
import styled from 'styled-components';
import { RowDesktopSkeleton } from './rowDesktop';
import ContentLoader from 'react-content-loader';

export const Skeleton: React.FC = () => {
  return (
    <Content>
      <InnerContent>
        <WrapperPhoto>
          <ContentLoader
            width="210"
            height="350"
            viewBox="0 0 210 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // backgroundColor={'#eaeaea'}
            // foregroundColor={'#f5f5f5'}
            // backgroundColor={'#000000'}
            // foregroundColor={'#ffffff'}
            backgroundColor={'#858d8f'}
            foregroundColor={'#f5f5f5'}
            title={'Загрузка...'}
          >
            {/*<rect width="70" height="70" rx="4" fill="#EAEAEA" />*/}
            <rect width="210" height="210" fill="#D2E1E4" rx="5" />
          </ContentLoader>
        </WrapperPhoto>
      </InnerContent>
      {/*<RowDesktopSkeleton />*/}
      {/*<RowDesktopSkeleton />*/}
      {/*<RowDesktopSkeleton />*/}
      {/*<RowDesktopSkeleton />*/}
      {/*<RowDesktopSkeleton />*/}
    </Content>
  );
};
const Content = styled.div`
  padding: 15px 0 0;
`;

const WrapperPhoto = styled.div`
  margin-right: 15px;
`;
const InnerContent = styled.div``;
