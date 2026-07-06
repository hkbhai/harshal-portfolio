import { useEffect } from 'react';

export function useLockBodyScroll(lock) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (lock) {
      const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [lock]);
}
