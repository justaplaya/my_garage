import { GoalImage } from '../style';
import NoImage from 'img/goals/noimage.jpg';
import { DropAreaComponent } from '../style';
import { DragEvent } from 'react';
import { useChangeGoalWithId } from '../../../api';
import { Props } from '../types';

export const DropArea = ({ querySearchId, goal }: Props.DropArea) => {
  const { mutate: changeGoal } = useChangeGoalWithId(querySearchId);
  const reader = new FileReader();
  const loadImage = (result: string | ArrayBuffer | null) => {
    typeof result === 'string' && changeGoal({ id: goal.id, change: { imageDataUrl: result } });
  };
  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    reader.readAsDataURL(file);
    reader.addEventListener('load', () => loadImage(reader.result), { once: true });
  };

  return (
    <DropAreaComponent onDrop={onDrop} onDragOver={onDragOver}>
      <GoalImage alt={'GoalImage'} src={goal.imageDataUrl ?? NoImage} />
    </DropAreaComponent>
  );
};
