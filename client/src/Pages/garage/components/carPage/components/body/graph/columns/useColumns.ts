import { Props } from '../types';

export const useColumns = ({ height, topValueRounded }: Props.Columns) => {
  const getHeight = (arg: number) => (arg / topValueRounded) * height;

  return { getHeight };
};
