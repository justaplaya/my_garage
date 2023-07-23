import styled from 'styled-components';
import { blurredBack } from 'mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  transition: 0.3s ease-in-out;
  gap: 10px;
  ${blurredBack()};
  border-radius: 5px;
  text-align: center;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Title = styled.p`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 40px;
  font-weight: 700;
`;
export const Separator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
`;
export const Description = styled.p`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 30px;
  font-weight: 700;
`;
export const AddText = styled.p`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
