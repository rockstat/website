import React, { useEffect, useRef } from 'react';

/**
 * IntersectionObserver-based replacement for `react-visibility-sensor`,
 * which relied on `findDOMNode` (removed in React 19).
 */
export function VisibilitySensor({ children, onChange, threshold = 0, rootMargin = '0px' }) {
  const ref = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (onChangeRef.current) onChangeRef.current(entry.isIntersecting);
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return <div ref={ref}>{children}</div>;
}
