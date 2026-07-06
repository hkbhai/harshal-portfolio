import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, options = {}) {
  const { rootMargin = '-20% 0px -70% 0px', threshold = 0 } = options;
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.querySelector(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin, threshold }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, rootMargin, threshold]);

  return activeSection;
}
