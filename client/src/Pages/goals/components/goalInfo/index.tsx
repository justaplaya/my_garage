import {
  Container,
  Description,
  DropArea,
  GoalImage,
  ImportanceTitle,
  RangeContainer,
  Separator,
  StatusTitle,
  Title,
} from './style';
import { useGetSearchQueryKey } from '../../../../Hooks/useGetQueryParam';
import { useChangeGoal, useChangeGoalWithId, useGetGoal, useGetGoals } from '../../api';
import { useLocation } from 'react-router-dom';
import { DragEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Props } from './types';
import NoImage from 'img/goals/noimage.jpg';
import { RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react';
import { statusRangeValueToGoalStatus, goalStatusToTitle, goalStatusToStatusRangeValue } from '../../utils';
import { GoalStatus } from '../../models/goal';
import { useTheme } from 'styled-components';
import { GlobalThemeType } from '../../../../theme';
import { Loader } from '../../../../Components/Loader';

export const GoalInfo = ({ openedFolderIds, setOpenedFolderIds }: Props) => {
  const querySearchId = useGetSearchQueryKey();
  const location = useLocation();

  const { data: goal, isLoading, refetch } = useGetGoal(querySearchId);
  const { mutate: changeGoal, isPending: isChangeGoalPending } = useChangeGoalWithId(querySearchId);
  const reader = new FileReader();
  console.log(isChangeGoalPending);
  const dropAreaProps = {
    onDragOver(e: DragEvent) {
      e.preventDefault();
    },
    onDrop(e: DragEvent, goalId: string) {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      const loadImage = () => {
        typeof reader.result === 'string' && changeGoal({ id: goalId, change: { imageDataUrl: reader.result } });
      };
      reader.readAsDataURL(file);
      reader.addEventListener('load', loadImage, { once: true });
    },
  };

  const statusRangeProps = {
    onChangeEnd(goalId: string, value: number) {
      changeGoal({ id: goalId, change: { status: statusRangeValueToGoalStatus(value) } });
    },
  };

  useEffect(() => {
    refetch();
  }, [location.pathname]);

  useEffect(() => {
    goal?.folderId && setOpenedFolderIds((p) => [...new Set([...p, goal.folderId])]);
  }, [goal?.folderId]);

  const [statusState, setStatusState] = useState(0);
  const { theme, colors } = useTheme();
  // console.log(theme.theme);
  const arias = {
    0: 'min',
    100: 'max',
  };

  const defaultRangeValue = useMemo(() => goalStatusToStatusRangeValue(goal?.status ?? 'notStarted'), [goal?.status]);
  const [prevDefs, setPrevDefs] = useState(defaultRangeValue);
  useEffect(() => {
    setPrevDefs(defaultRangeValue);
  }, [defaultRangeValue]);
  return (
    <Container>
      {isLoading && <p>Loading...</p>}
      {!!goal && (
        <>
          <Title>{goal.title}</Title>
          <ImportanceTitle>Importance: {goal.importance}</ImportanceTitle>
          <Separator />
          <DropArea onDrop={(e) => dropAreaProps.onDrop(e, goal.id)} onDragOver={(e) => dropAreaProps.onDragOver(e)}>
            <GoalImage alt={'goal.imageDataUrl'} src={goal.imageDataUrl ?? NoImage} />
          </DropArea>
          <Separator />
          <RangeContainer>
            <StatusTitle>
              Status: {goalStatusToTitle(goal.status)}
              {isChangeGoalPending && <Loader />}
            </StatusTitle>
            {prevDefs === defaultRangeValue && (
              <RangeSlider
                defaultValue={[defaultRangeValue]}
                min={0}
                max={75}
                step={25}
                width={'75%'}
                isDisabled={isChangeGoalPending}
                onChangeEnd={(val) => {
                  console.log(val);
                  statusRangeProps.onChangeEnd(goal.id, val[0]);
                }}
                // onClick={(e) => e.preventDefault()}
              >
                <RangeSliderTrack bg={colors.secondary()}>
                  <RangeSliderFilledTrack bg={colors.primaryContrast()} />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
              </RangeSlider>
            )}
            {/*{getRangeClider(defaultRangeValue, isChangeGoalPending, statusRangeProps, goal, colors)}*/}
          </RangeContainer>
          {/*<RangeSlider*/}
          {/*  aria-label={['min', 'max']}*/}
          {/*  aria-valuetext={['min', 'max']}*/}
          {/*  // onChangeEnd={(val) => console.log(val)}*/}
          {/*  min={0}*/}
          {/*  max={100}*/}
          {/*  step={25}*/}
          {/*  getAriaValueText={(value) => arias[value] ?? ''}*/}
          {/*>*/}
          {/*  <RangeSliderTrack>*/}
          {/*    <RangeSliderFilledTrack />*/}
          {/*  </RangeSliderTrack>*/}
          {/*  <RangeSliderThumb index={0} />*/}
          {/*  <RangeSliderThumb index={1} />*/}
          {/*</RangeSlider>*/}
          <Separator />
          <Description>{goal.description}</Description>
        </>
      )}
    </Container>
  );
};

const GetRangeClider = (defaultRangeValue, isChangeGoalPending, statusRangeProps, goal, colors) => {
  const [prevDefs, setPrevDefs] = useState(defaultRangeValue);
  useEffect(() => {
    setPrevDefs(defaultRangeValue);
  }, [defaultRangeValue]);
  return (
    <>
      {prevDefs === defaultRangeValue && (
        <RangeSlider
          defaultValue={[defaultRangeValue]}
          min={0}
          max={75}
          step={25}
          width={'75%'}
          isDisabled={isChangeGoalPending}
          onChangeEnd={(val) => {
            console.log(val);
            statusRangeProps.onChangeEnd(goal.id, val[0]);
          }}
          // onClick={(e) => e.preventDefault()}
        >
          <RangeSliderTrack bg={colors.secondary()}>
            <RangeSliderFilledTrack bg={colors.primaryContrast()} />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
        </RangeSlider>
      )}
    </>
  );
};
