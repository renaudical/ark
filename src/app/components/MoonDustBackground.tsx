import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import lightBg from 'figma:asset/69c3380fc58f9017aaa268bc21fc9902454b2a93.png';
import darkBg from 'figma:asset/8dfb421bd813610c92d6fd92f9dd5a87c3f4d97b.png';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  widthRatio: number;
  heightRatio: number;
  borderRadius: string;
  isBlue?: boolean;
}

// Generate random particles
const generateParticles = (count: number, isDark: boolean): Particle[] => {
  // Light mode: mostly darker sand/khaki with a few blue particles
  const khakiColors = [
    '#6B5D4F', // darker sand
    '#7A6A54', // dark khaki-brown
    '#8B7355', // medium dark sand
    '#5C4E3F', // deep brown-sand
    '#6E5F4D', // rich khaki
  ];
  
  const blueColors = [
    '#1782FF', // ARK blue
    '#4A9EFF', // lighter blue
  ];
  
  // Dark mode: white/beige particles
  const darkColors = [
    '#ffffff', // white
    '#f0f0f0', // light gray
    '#e8e8e8', // lighter gray
  ];
  
  return Array.from({ length: count }, (_, i) => {
    // In light mode: 85% khaki, 15% blue
    const isBlue = !isDark && Math.random() < 0.15;
    const colors = isDark ? darkColors : (isBlue ? blueColors : khakiColors);
    
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 1, // 1-2.5px - much smaller
      duration: Math.random() * 8 + 12, // 12-20 seconds - slower drift
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      widthRatio: Math.random() * 0.6 + 0.7, // 0.7-1.3 - more variation
      heightRatio: Math.random() * 0.6 + 0.7, // 0.7-1.3 - more variation
      borderRadius: `${Math.random() * 60 + 20}%`, // 20-80% - irregular shapes
      isBlue,
    };
  });
};

// Generate twinkle animation for stars
const getTwinkleAnimation = () => {
  const twinkleDuration = Math.random() * 2 + 1; // 1-3 seconds
  const twinkleDelay = Math.random() * 3;
  return { twinkleDuration, twinkleDelay };
};

export function MoonDustBackground({ className = '', showBackground = true }: { className?: string; showBackground?: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is active
    const checkDarkMode = () => {
      const darkMode = document.documentElement.classList.contains('dark');
      setIsDark(darkMode);
      setParticles(generateParticles(40, darkMode));
    };

    // Initial check
    checkDarkMode();

    // Watch for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className || 'z-0'}`}>
      {/* Background image - only visible in light mode */}
      {showBackground && (
        <div 
          className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${lightBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      
      {/* Background image - only visible in dark mode */}
      {showBackground && (
        <div 
          className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${darkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
      
      {/* Nebula cloud layer - subtle moving clouds */}
      <div className="absolute inset-0 opacity-50">
        {/* Cloud 1 - Large slow drift - White */}
        <motion.div
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, 80, -60, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Cloud 2 - Medium speed - Blue */}
        <motion.div
          className="absolute top-[40%] right-[15%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(23,130,255,0.6) 0%, rgba(23,130,255,0.3) 50%, transparent 80%)',
            filter: 'blur(70px)',
          }}
          animate={{
            x: [0, -120, 100, 0],
            y: [0, -90, 70, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Cloud 3 - Diagonal drift - Purple */}
        <motion.div
          className="absolute bottom-[15%] left-[35%] w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(176,43,237,0.6) 0%, rgba(176,43,237,0.3) 60%, transparent 90%)',
            filter: 'blur(90px)',
          }}
          animate={{
            x: [0, 130, -80, 0],
            y: [0, -100, 60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => {
          const { twinkleDuration, twinkleDelay } = getTwinkleAnimation();
          const width = particle.size * particle.widthRatio;
          const height = particle.size * particle.heightRatio;
          
          return (
            <motion.div
              key={particle.id}
              className={`absolute rounded-full ${isDark ? 'shadow-[0_0_8px_rgba(255,255,255,0.4)]' : 'shadow-sm'}`}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: particle.color,
                borderRadius: particle.borderRadius,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Dark mode twinkling overlay */}
              {isDark && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: twinkleDuration,
                    delay: twinkleDelay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}