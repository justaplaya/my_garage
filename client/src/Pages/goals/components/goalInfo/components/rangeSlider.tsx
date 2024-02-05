import {
  RangeSlider as RangeSliderComponent,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useTheme } from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { goalStatusToStatusRangeValue, statusRangeValueToGoalStatus } from '../../../utils';
import { useChangeGoal } from '../../../api';
import { Props } from '../types';

export const RangeSlider = ({ goal }: Props.RangeSlider) => {
  const { mutate: changeGoal, isPending: isChangeGoalPending } = useChangeGoal();
  const { colors } = useTheme();

  const defaultRangeValue = useMemo(() => goalStatusToStatusRangeValue(goal.status), [goal.status]);
  const [prevDefs, setPrevDefs] = useState(defaultRangeValue);

  const onChangeEnd = (value: number[]) => {
    changeGoal({
      id: goal.id,
      change: {
        status: statusRangeValueToGoalStatus(value[0]),
      },
    });
  };

  useEffect(() => {
    setPrevDefs(defaultRangeValue);
  }, [defaultRangeValue]);

  return (
    <>
      {prevDefs === defaultRangeValue && (
        <RangeSliderComponent
          defaultValue={[defaultRangeValue]}
          min={0}
          max={75}
          step={25}
          width={'75%'}
          isDisabled={isChangeGoalPending}
          onChangeEnd={onChangeEnd}
        >
          <RangeSliderTrack bg={colors.secondary()}>
            <RangeSliderFilledTrack bg={colors.primaryContrast()} />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
        </RangeSliderComponent>
      )}
    </>
  );
};
