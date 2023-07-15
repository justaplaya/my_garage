import React from 'react';
import styled from 'styled-components';
import { PhotoSkeletonLoading } from './photoSkeletonLoading';
import { NameSkeletonLoading } from './nameSkeletonLoading';
import { TimeSkeletonLoading } from './timeSkeletonLoading';
import { TimeAllSkeletonLoading } from './timeAllSkeletonLoading';

export const RowDesktopSkeleton: React.FC = () => {
  return (
    <Content>
      <WrapperPhoto>
        <PhotoSkeletonLoading />
      </WrapperPhoto>
      <Wrapper>
        <NameSkeletonLoading />
      </Wrapper>
      <Wrapper>
        <TimeSkeletonLoading />
      </Wrapper>
      <Wrapper>
        <TimeSkeletonLoading />
      </Wrapper>
      <Wrapper>
        <TimeAllSkeletonLoading />
      </Wrapper>
      <Wrapper>
        <TimeSkeletonLoading />
      </Wrapper>
    </Content>
  );
};
const Wrapper = styled.div`
  margin-right: 20px;
`;
const WrapperPhoto = styled.div`
  margin-right: 15px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin-bottom: 30px;
`;
