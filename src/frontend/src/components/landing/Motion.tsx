import { useEffect, useRef, useState, type ReactNode } from 'react';

interface MotionDivProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionDiv({ children, className = '', delay = 0 }: MotionDivProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`motion-wrapper ${isVisible ? 'motion-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
