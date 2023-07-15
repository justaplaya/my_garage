import React from 'react';
import styled from 'styled-components';
import { blurredBack } from '../../styles/mixins';

type PropsType = {
  searchValue: string;
};
export const NotFound = ({ searchValue }: PropsType) => {
  const cutSearchValue = (searchValue: string) => {
    return searchValue.length > 45 ? `${searchValue.slice(0, 45)}...` : searchValue;
  };
  const titleText = (searchValue: string) =>
    searchValue ? `По запросу «${cutSearchValue(searchValue)}» ничего не найдено` : `Машины не найдены`;
  const descriptionText = (searchValue: string) =>
    searchValue ? `Попробуйте ввести другой запрос` : `Вы можете их создать`;

  return (
    <Container>
      <Title>{titleText(searchValue)}</Title>
      <Separator />
      <Description>{descriptionText(searchValue)}</Description>
    </Container>
  );
};
const Container = styled.div`
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
const Title = styled.p`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 40px;
  font-weight: 700;
`;
const Separator = styled.div`
  content: '';
  width: 100%;
  height: 2px;
  background: ${(props) =>
    `linear-gradient(to right, transparent 0%, ${props.theme.colors.secondary()} 50%, transparent 100%)`};
`;
const Description = styled.p`
  color: ${(props) =>
    props.theme.theme === 'dark' ? props.theme.colors.primary() : props.theme.colors.primaryContrast()};
  font-size: 30px;
  font-weight: 700;
`;
