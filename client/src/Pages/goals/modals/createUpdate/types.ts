import { Goal } from '../../models/goal';
import { Folder } from '../../models/folder';
import { ChangeEvent } from 'react';

export type ModalType = 'folder' | 'goal';
export type InputKey = 'title' | 'description';

export type CommonPropsGoal = {
  type: 'goal';
  goal?: Goal;
};
export type CommonPropsFolder = {
  type: 'folder';
  folder?: Folder;
};
export type SideModalProps = {
  show: boolean;
  setShow: (x: boolean) => void;
};
export type InputType = {
  initValue: string;
  value: string;
  onChange: (e: ChangeEvent<InputOrTextArea>) => void;
  setToDefault: () => void;
};

export namespace Props {
  export type Common = SideModalProps & (CommonPropsGoal | CommonPropsFolder);
  export type Content = { inputs: Record<InputKey, InputType> };
}
