import { Description, ImportanceTitle, RangeContainer, Separator, StatusTitle, Title } from '../style';
import { DropArea } from './dropArea';
import { goalStatusToTitle } from '../../../utils';
import { RangeSlider } from './rangeSlider';
import { Props } from '../types';

export const Content = (_props: Props.Content) => {
  const { goal, querySearchId } = _props;
  const { title, importance, status, description } = goal;
  const props = {
    dropArea: { goal, querySearchId },
    rangeSlider: { goal, querySearchId },
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
