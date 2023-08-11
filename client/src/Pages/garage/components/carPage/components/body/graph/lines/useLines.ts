import { Props } from '../types';

export const useLines = ({ height, topValueRounded }: Props.Lines) => {
  const lines = Array(11)
    .fill(null)
    .map((i, index) => ({
      offset: height - (index / 10) * height,
      value: Math.round(topValueRounded - (index / 10) * topValueRounded),
    }));

  return { lines };
};
