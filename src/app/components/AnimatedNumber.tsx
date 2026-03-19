import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({ value, duration = 2000, className = '' }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const currentTime = Date.now();
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              
              const current = Math.floor(startValue + (value - startValue) * easeOut);
              setDisplayValue(current);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };
            
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue.toLocaleString()}
    </span>
  );
}