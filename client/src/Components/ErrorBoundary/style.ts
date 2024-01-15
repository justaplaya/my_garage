import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: calc(100vh);
  background-attachment: fixed;
  background-size: cover;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background: linear-gradient(maroon, wheat);
`;
export const Title = styled.p`
  color: black;
  font-size: 5rem;
  font-weight: 700;
  word-break: break-all;
`;
export const Separator = styled.div`
  content: '';
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(to right, transparent 0%, whitesmoke 50%, transparent 100%);
`;
export const Description = styled.p`
  color: black;
  font-size: 2.5rem;
  font-weight: 700;
`;
