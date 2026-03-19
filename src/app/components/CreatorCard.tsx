import { useState } from 'react';
import { CaretRight, CaretDown } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedBorderCard } from './AnimatedBorderCard';
import svgPaths from '../../imports/svg-b4wgn5u213';

interface Project {
  id: string;
  title: string;
}

interface Creator {
  id: string;
  name: string;
  avatar: string;
  likes: string;
  projects: string;
  categories: string[];
  bio: string;
  recentProjects: Project[];
}

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <AnimatedBorderCard innerClassName="relative rounded-[2px] overflow-hidden m-px bg-white/50 dark:bg-black/30 backdrop-blur-lg shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]">
      <div className="p-6 flex flex-col gap-4">
        {/* Main Card Content - Links to Creator Profile */}
        <Link to={`/creator/${creator.id}`} className="group flex flex-col gap-4 cursor-pointer">
          {/* Header: Avatar + Name + Stats */}
          <div className="flex gap-4 items-center">
            <div className="bg-[#262626] rounded-full shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-16 overflow-hidden">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-['PP_Monument',sans-serif] font-black text-[21px] text-[#212121] dark:text-[#fafafa] leading-tight mb-1 group-hover:text-[#1782FF] transition-colors">
                {creator.name}
              </h3>
              <div className="flex items-center gap-6">
                {/* Likes */}
                <div className="flex items-center gap-1">
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p13a22680} fill="#1782FF" />
                  </svg>
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#bebec8] tracking-[-0.12px]">
                    {creator.likes}
                  </span>
                </div>

                {/* Projects Count */}
                <div className="flex items-center gap-1">
                  <svg className="size-4" fill="none" viewBox="0 0 16 16">
                    <g clipPath="url(#clip0_projects)">
                      <path d={svgPaths.p37dec080} fill="#A1A1A1" />
                    </g>
                    <defs>
                      <clipPath id="clip0_projects">
                        <rect fill="white" height="16" width="16" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#bebec8] tracking-[-0.12px]">
                    {creator.projects}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {creator.categories.map((category, index) => (
              <div
                key={index}
                className="border border-[#1782ff] rounded-full px-3 py-0.5"
              >
                <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#1782ff] leading-[13.333px]">
                  {category}
                </span>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="pb-4 border-b border-[rgba(190,190,200,0.25)]">
            <p className="font-['PP_Monument',sans-serif] text-xs text-[#717182] dark:text-[#bebec8] leading-normal">
              {creator.bio}{' '}
              <span className="text-[#717182] dark:text-[#bebec8] cursor-pointer hover:text-[#1782FF] transition-colors">
                +MORE
              </span>
            </p>
          </div>
        </Link>

        {/* Recent Projects Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex gap-2 items-center w-full"
        >
          <p className="font-['IBM_Plex_Mono',monospace] font-medium text-xs text-[#1782ff] tracking-[0.6px] leading-[18px]">
            RECENT PROJECTS ({creator.recentProjects.length})
          </p>
          <div className="flex-1" />
          <div className="size-4 flex items-center justify-center">
            {isExpanded ? (
              <CaretDown size={16} weight="bold" className="text-[#1782FF]" />
            ) : (
              <CaretRight size={16} weight="bold" className="text-[#1782FF]" />
            )}
          </div>
        </button>

        {/* Recent Projects List */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col gap-4 pt-4 border-t border-[rgba(161,161,161,0.25)] overflow-hidden"
            >
              {creator.recentProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/project/${project.id}`}
                  className={`flex gap-2 items-center group ${
                    index < creator.recentProjects.length - 1
                      ? 'pb-4 border-b border-[rgba(161,161,161,0.25)]'
                      : ''
                  }`}
                >
                  <p className="font-['PP_Monument',sans-serif] text-sm text-[#212121] dark:text-white leading-[18px] flex-1 group-hover:text-[#1782FF] transition-colors">
                    {project.title}
                  </p>
                  <CaretRight size={16} weight="bold" className="text-[#212121] dark:text-white shrink-0 group-hover:text-[#1782FF] transition-colors" />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedBorderCard>
  );
}