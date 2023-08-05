import styled, { css } from 'styled-components';
import { blurredBack } from 'mixins';

export const Container = styled.div<{ $centerItems: boolean }>`
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  gap: 20px;
  align-items: flex-start;
  ${({ $centerItems }) =>
    $centerItems &&
    css`
      justify-content: center;
    `};
`;
export const CardWrapper = styled.div`
  position: relative;
  height: fit-content;
  width: calc(calc(100% - calc(20px * 5)) / 6); // 20px - gap
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 5px;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  gap: 10px;
  ${blurredBack()};
  &:hover {
    transform: scale(1.025);
    ${blurredBack(0.75)};
    cursor: pointer;
  }
`;
export const Icon = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const Brand = styled.p`
  width: 100%;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 30px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;
export const Model = styled.p`
  width: 100%;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 25px;
  font-weight: 700;
  text-transform: capitalize;
  display: -webkit-box;
  overflow: hidden;
  height: 58px;
  max-height: 58px;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;
export const Separator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
`;
