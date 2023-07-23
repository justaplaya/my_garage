import styled from 'styled-components';
import { Country } from 'Pages/garage/types';
import { GetCountryBg } from 'Pages/garage/components/Car/utils';
import { blurredBack, scrollBar } from 'styles/mixins';
import { Button } from 'Components/Button';

export const Container = styled.div<{ $country: Country | null }>`
  position: relative;
  min-height: calc(100vh - 75px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ $country, ...props }) =>
    $country ? `url(${GetCountryBg($country)})` : `${props.theme.colors.primary()}`};
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
// /
export const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 10px;
`;
export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  height: 50px;
  gap: 10px;
`;
export const BackButton = styled.button`
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  background: rgba(245, 245, 245, 0.5);
  cursor: pointer;
`;
export const HeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50px;
  gap: 10px;
`;
export const EditButton = styled(Button)`
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.primary()};
  background: ${(props) => props.theme.colors.secondary()};
  cursor: pointer;
`;
export const DeleteButton = styled(Button)`
  border: none;
  border-radius: 5px;
  height: 50px;
  padding: 10px 20px;
  font-size: 25px;
  font-weight: 700;
  transition: 0.3s ease-in-out;
  color: ${(props) => props.theme.colors.secondary()};
  background: ${(props) => props.theme.colors.primary()};
  cursor: pointer;
`;
export const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  ${blurredBack()};
  border-radius: 5px;
  padding: 10px;
`;
export const Icon = styled.img`
  object-fit: contain;
  height: 250px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;
//  /
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
export const XSeparator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
  transition: background 0.3s ease-in-out;
`;
export const YSeparator = styled.div`
  content: '';
  height: 100%;
  width: 2px;
  background: ${(props) =>
    `linear-gradient(to bottom, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
  transition: background 0.3s ease-in-out;
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
  //height: 58px;
  max-height: 58px;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  user-select: all;
`;
export const InfoText = styled.p`
  width: 100%;
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: all;
`;
const BodyRadius = `5px`;
export const BodyWrapper = styled.div`
  width: 100%;
  //margin: 0 20px 10px;
  border-radius: ${BodyRadius};
  background-attachment: fixed;
  ${blurredBack()};
  background-size: cover;
  position: relative;
  height: fit-content;
  padding: 20px;
`;
export const Body = styled.div`
  width: 100%;
  ${blurredBack()};
  border-radius: ${BodyRadius};
  min-height: 50vh;
  max-height: 50vh;
  height: 40vh;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
