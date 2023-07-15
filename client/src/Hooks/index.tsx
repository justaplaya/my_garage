import { RefObject, useEffect, useState } from 'react';

export const useMeasure = <A extends Element>(ref: RefObject<A>, dependencies: any[]) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    setWidth(width);
    setHeight(height);
  }, [ref, ...dependencies]);

  return {
    width,
    height,
  };
};
