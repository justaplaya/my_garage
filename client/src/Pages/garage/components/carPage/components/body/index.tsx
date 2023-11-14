import { BodyTxt, BodyWrapper } from '../../style';
import { Text } from 'Pages/garage/loaders/text';
import { Props } from './types';
import { Graph } from './graph';

export const Body = (props: Props.Common) => {
  return (
    <BodyWrapper>
      <BodyTxt>{props.car ? <Content car={props.car} /> : <Loading />}</BodyTxt>
    </BodyWrapper>
  );
};
const Content = ({ car }: Props.Content) => {
  //TODO no incs case(falsy or nullish)
  return <Graph incidents={car.incidents} />;
};
const Loading = () => {
  return (
    <>
      <Text width={'100%'} height={25} />
      <Text width={'100%'} height={25} />
      <Text width={'59%'} height={25} />
    </>
  );
};
