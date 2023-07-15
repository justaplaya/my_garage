import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: (e?: any) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = event.target as HTMLElement;
      if (
        !ref.current! ||
        ref.current.contains(el) // если не модалка или модалка не содержит event.target
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
