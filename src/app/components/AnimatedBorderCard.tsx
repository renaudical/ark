import { useRef, useState, useCallback, type ReactNode } from 'react';
import { motion } from 'motion/react';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export function AnimatedBorderCard({ children, className = '', innerClassName }: AnimatedBorderCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className={`relative rounded-[2px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Gradient border layer */}
      <div
        className="absolute -inset-px rounded-[2px] transition-opacity duration-500 dark:hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.9) 0%, rgba(23,130,255,0.35) 45%, transparent 70%)`,
        }}
      />
      <div
        className="absolute -inset-px rounded-[2px] transition-opacity duration-500 hidden dark:block"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(23,130,255,0.5) 0%, rgba(176,43,237,0.3) 35%, transparent 60%)`,
        }}
      />
      {/* Static border layer (visible when not hovered) */}
      <div
        className="absolute inset-0 rounded-[2px] border border-white/40 dark:border-white/10 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0 : 1 }}
      />
      {/* Inner card content */}
      <div className={innerClassName || "relative rounded-[2px] overflow-hidden m-px bg-white/40 dark:bg-black/20 backdrop-blur-lg"}>
        {children}
      </div>
    </motion.div>
  );
}