import { ChangeEvent, useEffect } from 'react';
import { InputKey, InputType, Props } from '../types';
import { getInitValueByType, inputChange } from './utils';
import { useGetStates } from './useGetStates';
import { applyText, schemas } from './config';
import { InputHandler } from './types';
import { useChangeFolder } from '../../../api/mutation';
import { useCreateFolder } from '../../../api/mutation';
import { useChangeGoal } from '../../../api/mutation';
import { useCreateGoal } from '../../../api/mutation';

export const useCreateUpdateModal = (props: Props.Common) => {
  const { type, show, setShow } = props;
  const { initTitle, title, setTitle, initDescription, description, setDescription, localLoading, setLocalLoading } =
    useGetStates({ props });

  const setAllToDefault = () => Object.values(inputs).forEach((item) => item.setToDefault());
  const onClickOutside = () => close(true);
  const onSuccess = () => close(true);

  const { mutate: changeGoal } = useChangeGoal(onSuccess);
  const { mutate: createGoal } = useCreateGoal(onSuccess);
  const { mutate: changeFolder } = useChangeFolder(onSuccess);
  const { mutate: createFolder } = useCreateFolder(onSuccess);

  const inputHandlers: Record<InputKey, InputHandler> = {
    title: {
      validator: schemas.title,
      change: setTitle,
    },
    description: {
      validator: schemas.description,
      change: setDescription,
    },
  };

  const inputs: Record<string, InputType> = {
    title: {
      initValue: initTitle,
      value: title,
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChange(e, 'title', inputHandlers),
      setToDefault: () => setTitle(initTitle),
    },
    description: {
      initValue: initDescription,
      value: description,
      onChange: (e: ChangeEvent<HTMLInputElement>) => inputChange(e, 'description', inputHandlers),
      setToDefault: () => setDescription(initDescription),
    },
  };

  const isCreate = !getInitValueByType(props, type, 'id');
  const applyDisable = !Object.values(inputs).find((input) => input.value !== input.initValue);
  const createAction = type === 'goal' ? createGoal : createFolder;
  const changeAction = type === 'goal' ? changeGoal : changeFolder;

  /**
   * @param out - флаг закрытия модалки после выполнения экшена
   */
  const close = (out?: boolean) => {
    if (!show || (localLoading && !out)) return;

    setShow(false);
    const handler = setTimeout(() => {
      setAllToDefault();
      setLocalLoading(false);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  };

  const apply = () => {
    setLocalLoading(true);
    isCreate
      ? createAction({
          title,
          description,
        })
      : changeAction({
          id: getInitValueByType(props, type, 'id'),
          change: {
            ...(initTitle !== title && { title }),
            ...(initDescription !== description && { description }),
          },
        });
  };

  useEffect(() => {
    setTitle(initTitle);
    setDescription(initDescription);
  }, [initTitle, initDescription]);

  return {
    show,
    apply,
    applyText,
    applyDisable,
    close,
    localLoading,
    onClickOutside,
    inputs,
  };
};
