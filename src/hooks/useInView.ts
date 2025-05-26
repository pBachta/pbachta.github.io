import { useEffect, useState, RefObject } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(
  ref: RefObject<Element>,
  options: IntersectionOptions = { threshold: 0 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options.rootMargin, options.threshold]);

  return isIntersecting;
}