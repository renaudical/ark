import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router';
import cardSvgPaths from '../../imports/svg-64kd7g2p36';
import { CategoryBadge } from './CategoryBadge';
import { ThumbsUp } from '@phosphor-icons/react';

interface ProjectCardProps {
  id?: string;
  title: string;
  creator?: string;
  author?: string;
  creatorAvatar?: string;
  category: string;
  difficulty: string;
  hearts?: number;
  rating?: number;
  comments: number;
  image: string;
  description: string;
  index?: number;
  disableAnimation?: boolean;
}

export function ProjectCard({
  id = '1',
  title,
  creator,
  author,
  creatorAvatar,
  category,
  difficulty,
  hearts,
  rating,
  comments,
  image,
  description,
  index = 0,
  disableAnimation = false,
}: ProjectCardProps) {
  const displayLikes = hearts || 0;
  const displayCreator = author || creator || 'UNKNOWN';

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

  const animationProps = disableAnimation
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.4, delay: index * 0.1 },
      };

  return (
    <Link to={`/project/${id}`} className="block">
      <motion.div
        ref={cardRef}
        className="group relative rounded-[2px] p-[2px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: isHovered
            ? undefined
            : 'none',
        }}
        {...animationProps}
      >
        {/* Static border when not hovered */}
        {!isHovered && (
          <div className="absolute inset-0 border border-white/40 dark:border-white/10 rounded-[2px] pointer-events-none" />
        )}
        {/* Animated border - light mode */}
        {isHovered && (
          <>
            <div
              className="absolute inset-0 rounded-[2px] dark:hidden"
              style={{
                background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.9) 0%, rgba(23,130,255,0.35) 45%, transparent 70%)`,
              }}
            />
            <div
              className="absolute inset-0 rounded-[2px] hidden dark:block"
              style={{
                background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(23,130,255,0.5) 0%, rgba(176,43,237,0.3) 35%, transparent 60%)`,
              }}
            />
          </>
        )}
        {/* Inner card content */}
        <div className="relative rounded-[1px] overflow-hidden bg-white/50 dark:bg-black/30 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
          {/* Image Container */}
          <div className="bg-[#ECECF0] h-48 overflow-hidden relative">
            <ImageWithFallback 
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category Badge */}
            <div className="absolute top-3.5 right-3.5">
              <CategoryBadge category={category} overlay />
            </div>
          </div>

          {/* Content Container */}
          <div className="p-4 flex flex-col gap-3">
            {/* Meta Data */}
            <div className="flex items-center gap-2 h-[18px]">
              {/* Difficulty */}
              <div className="flex items-center pr-2 border-r border-[rgba(190,190,200,0.25)]">
                <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                  {difficulty}
                </span>
              </div>
              
              {/* Likes */}
              <div className="flex items-center gap-1 pr-2 border-r border-[rgba(190,190,200,0.25)]">
                <ThumbsUp className="h-3 w-3 text-[#717182] dark:text-[#BEBEC8]" weight="fill" />
                <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                  {displayLikes}
                </span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path 
                    d={cardSvgPaths.p3e661000} 
                    stroke="#BEBEC8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
                <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                  {comments}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-['PP_Monument',sans-serif] font-bold text-lg leading-tight text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm font-['PP_Monument',sans-serif] text-[#212121] dark:text-[#BEBEC8]">
              {description}
            </p>

            {/* Creator */}
            <div className="pt-2 border-t border-[rgba(190,190,200,0.25)]">
              <p className="font-['IBM_Plex_Mono',monospace] font-medium text-xs leading-[18px] tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                BY {displayCreator.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}