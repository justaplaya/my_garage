import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
`;
export const Content = styled.div`
  width: 100%;
  height: 500px;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  gap: 5%;
`;
