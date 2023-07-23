import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

type PropsType = {
  to: string;
};

export const NavigateTo = ({ to }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  }, [to]);

  return <></>;
};
// TODO очень похоже на костыль
