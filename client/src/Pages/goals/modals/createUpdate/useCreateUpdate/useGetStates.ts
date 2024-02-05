import { useMemo, useState } from 'react';
import { getInitValueByType } from './utils';
import { CreateUpdateProps } from './types';

export const useGetStates = ({ props }: CreateUpdateProps.GetStates) => {
  const { type } = props;

  const initTitle = useMemo(() => getInitValueByType(props, type, 'title'), [type, props]);
  const [title, setTitle] = useState(initTitle);

  const initDescription = useMemo(() => getInitValueByType(props, type, 'description'), [type, props]);
  const [description, setDescription] = useState(initDescription);

  const [localLoading, setLocalLoading] = useState(false);

  return {
    initTitle,
    title,
    setTitle,
    initDescription,
    description,
    setDescription,
    localLoading,
    setLocalLoading,
  };
};
