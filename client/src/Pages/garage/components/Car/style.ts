import styled from 'styled-components';
import { Country } from 'Pages/garage/types';
import { getCountryBg } from 'Pages/garage/components/Car/utils';
import { blurredBack, scrollBar } from 'mixins';

export const Container = styled.div<{ $country: Country | null }>`
  position: relative;
  min-height: calc(100vh - 75px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ $country, ...props }) =>
    $country ? `url(${getCountryBg($country)})` : `${props.theme.colors.primary()}`};
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  background-attachment: fixed;
  background-position: top;
  ${scrollBar('dark')};
  overflow: auto;
  height: calc(100vh - 75px);
  padding: 10px 20px;
  gap: 10px;
`;
export const Icon = styled.img`
  object-fit: contain;
  height: 250px;
`;
export const Brand = styled.p`
  width: 100%;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 50px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
  user-select: all;
`;
const BodyRadius = `5px`;
export const BodyWrapper = styled.div`
  width: 100%;
  border-radius: ${BodyRadius};
  background-attachment: fixed;
  ${blurredBack()};
  background-size: cover;
  position: relative;
  height: fit-content;
  padding: 20px;
`;
export const BodyTxt = styled.p`
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
