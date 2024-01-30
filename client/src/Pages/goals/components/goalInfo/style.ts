import styled from 'styled-components';
import { blurredBack } from 'mixins';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  ${blurredBack()};
  gap: 10px;
  padding: 15px;
  transition: all 0.3s ease-in-out;
  background: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary(0.75) : props.theme.colors.primary(0.75)};
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.secondary(1) : props.theme.colors.secondary(1)};
  text-decoration: underline;
  display: -webkit-box;
  overflow: hidden;
  line-height: 48px;
  max-height: 96px;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;
export const ImportanceTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.secondary(1) : props.theme.colors.secondary(1)};
`;
export const StatusTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.secondary(1) : props.theme.colors.secondary(1)};
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.secondary(1) : props.theme.colors.secondary(1)};
`;
export const DropAreaComponent = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoalImage = styled.img`
  object-fit: contain;
  object-position: center;
  height: 100%;
  border-radius: 10px;
`;
export const Separator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
`;
export const RangeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
