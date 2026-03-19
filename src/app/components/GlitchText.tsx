import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
  style?: React.CSSProperties;
}

export function GlitchText({ children, className = '', style = {} }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if user is on mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Disable glitch on mobile for performance
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let glitchTimeoutId: NodeJS.Timeout;

    const triggerGlitch = () => {
      // Trigger the glitch effect
      setIsGlitching(true);
      
      // End glitch after 200ms
      glitchTimeoutId = setTimeout(() => {
        setIsGlitching(false);
        
        // Schedule next glitch with random delay (6-12 seconds)
        const nextDelay = Math.random() * 6000 + 6000;
        timeoutId = setTimeout(triggerGlitch, nextDelay);
      }, 200);
    };

    // Initial delay before first glitch (3-6 seconds)
    const initialDelay = Math.random() * 3000 + 3000;
    timeoutId = setTimeout(triggerGlitch, initialDelay);

    // Cleanup function to clear all timeouts
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(glitchTimeoutId);
    };
  }, [isMobile]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={style}
      animate={!isMobile && isGlitching ? {
        x: [0, -2, 2, -1, 1, 0],
        textShadow: [
          'none',
          '2px 0 #1782FF, -2px 0 #00FFFF',
          '-2px 0 #1782FF, 2px 0 #00FFFF',
          '2px 0 #1782FF, -2px 0 #00FFFF',
          'none'
        ]
      } : {}}
      transition={{
        duration: 0.2,
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
    >
      {children}
    </motion.span>
  );
}