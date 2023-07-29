import { Brand, HeaderBottom, Icon, InfoText, InfoWrapper, Model, XSeparator, YSeparator } from './style';
import { getBrandIcon } from '../../utils';
import { Img } from 'Pages/garage/loaders/img';
import React from 'react';
import { Text } from 'Pages/garage/loaders/text';
import { BottomTypes } from './types';

export const Bottom = ({ loading, error, car, text }: BottomTypes.Props) => {
  const renderContent = !loading && !error && car;

  return <>{renderContent ? <Content car={car} text={text} /> : <Loading text={text} />}</>;
};

const Content = ({ car, text }: BottomTypes.Content) => {
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

const Info = ({ car, show, text }: BottomTypes.Info) => {
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
const Loading = ({ text }: BottomTypes.Loading) => {
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
