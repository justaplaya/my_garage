import { Description, ImportanceTitle, RangeContainer, Separator, StatusTitle, Title } from '../style';
import { DropArea } from './dropArea';
import { goalStatusToTitle } from '../../../utils';
import { RangeSlider } from './rangeSlider';
import { Props } from '../types';

export const Content = (_props: Props.Content) => {
  const { title, importance, status, description } = _props.goal;
  const props = {
    dropArea: _props,
    rangeSlider: _props,
  };
  return (
    <>
      <Title>{title}</Title>
      <ImportanceTitle>Importance: {importance}</ImportanceTitle>
      <Separator />
      <DropArea {...props.dropArea} />
      <Separator />
      <RangeContainer>
        <StatusTitle>Status: {goalStatusToTitle(status)}</StatusTitle>
        <RangeSlider {...props.rangeSlider} />
      </RangeContainer>
      <Separator />
      <Description>{description}</Description>
    </>
  );
};
