import { Car } from 'Pages/garage/models/car';
import { Brand, HeaderBottom, Icon, InfoText, InfoWrapper, Model, XSeparator, YSeparator } from './style';
import { getBrandIcon } from '../../utils';
import { Img } from 'Pages/garage/loaders/Img';
import React from 'react';
import { ApolloError } from '@apollo/client';
import { Text as TextType } from './useHeader';
import { Text } from 'Pages/garage/loaders/Text';

type Props = {
  loading: boolean;
  error: ApolloError | undefined;
  car: Car | null;
  text: TextType;
};

export const Bottom = ({ loading, error, car, text }: Props) => {
  const renderContent = !loading && !error && car;
  return <>{renderContent ? <Content car={car} text={text} /> : <Loading text={text} />}</>;
};

type ContentProps = { car: Car; text: TextType };
const Content = ({ car, text }: ContentProps) => {
  const { brand, model, year, timeUpTo100, maxSpeed } = car;
  const brandIcon = getBrandIcon(brand);
  const show = {
    year: year !== null,
    speed: maxSpeed !== null,
    time: timeUpTo100 !== null,
  };
  const showInfo = car ? !!Object.values(show).filter((i) => i).length : false;
  return (
    <HeaderBottom>
      <Icon src={brandIcon} />
      <YSeparator />
      <InfoWrapper>
        <Brand>{brand}</Brand>
        {model && (
          <>
            <XSeparator />
            <Model>{model}</Model>
          </>
        )}
      </InfoWrapper>
      {showInfo && <Info car={car} show={show} text={text} />}
    </HeaderBottom>
  );
};
type InfoProps = {
  car: Car;
  show;
  text: TextType;
};
const Info = ({ car, show, text }: InfoProps) => {
  const { year, timeUpTo100, maxSpeed } = car;
  return (
    <>
      <YSeparator />
      <InfoWrapper>
        {show.year && <InfoText>{text.year}</InfoText>}
        {show.year && <InfoText>{year}</InfoText>}
        {show.year && (show.speed || show.time) && <XSeparator />}
        {show.speed && <InfoText>{text.maxSpeed}</InfoText>}
        {show.speed && (
          <InfoText>
            {maxSpeed} {text.kmPerHour}
          </InfoText>
        )}
        {show.speed && show.time && <XSeparator />}
        {show.time && <InfoText>{text.timeUpTo100}</InfoText>}
        {show.time && (
          <InfoText>
            {timeUpTo100} {text.seconds}
          </InfoText>
        )}
      </InfoWrapper>
    </>
  );
};
type LoadingProps = { text: TextType };
const Loading = ({ text }: LoadingProps) => {
  return (
    <HeaderBottom>
      <Img width={250} height={250} />
      <YSeparator />
      <InfoWrapper>
        <Text width={210} height={55} />
        <XSeparator />
        <Text width={90} height={30} />
      </InfoWrapper>
      <YSeparator />
      <InfoWrapper>
        <InfoText>{text.year}</InfoText>
        <Text width={50} height={25} />
        <XSeparator />
        <InfoText>{text.maxSpeed}</InfoText>
        <Text width={120} height={25} />
        <XSeparator />
        <InfoText>{text.timeUpTo100}</InfoText>
        <Text width={95} height={25} />
      </InfoWrapper>
    </HeaderBottom>
  );
};
