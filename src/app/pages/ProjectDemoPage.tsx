import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { ThemeInitializer } from '../components/ThemeInitializer';
import { Toaster } from '../components/ui/sonner';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { CategoryBadge } from '../components/CategoryBadge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProjectCard } from '../components/ProjectCard';
import {
  Heart,
  ChatCircle,
  ShareNetwork,
  Rocket,
  CaretDown,
  CaretLeft,
  CaretRight,
  TwitterLogo,
  GithubLogo,
  YoutubeLogo,
  Globe,
  ListChecks,
  Basket,
  ChatsCircle,
  FilePdf,
  PaperPlaneTilt,
  UserPlus,
  Play,
  Pause,
  SpeakerHigh,
  ArrowsOut,
  Note,
  Eye,
  Timer,
  ListBullets,
} from '@phosphor-icons/react';

interface DemoAnnotation {
  id: string;
  type: 'note' | 'step';
  x: number;
  y: number;
  title: string;
  text: string;
  startTime: number;
  endTime: number;
}

const demoAnnotations: DemoAnnotation[] = [
  // 10 steps + 3 notes spread across the full ~305s video timeline
  { id: 's1', type: 'step', x: 22, y: 30, title: 'Inventory the kit', text: 'Open the SiCK-68 kit and verify all 68 switches, keycaps, stabilizers, and the PCB are present.', startTime: 5, endTime: 20 },
  { id: 'n1', type: 'note', x: 78, y: 28, title: '', text: 'Tip: keep a small parts tray nearby — it is far too easy to lose a stab insert on a dark workbench.', startTime: 18, endTime: 32 },
  { id: 's2', type: 'step', x: 68, y: 60, title: 'Lube the stabilizers', text: 'Apply a thin coat of dielectric grease to each stabilizer wire to eliminate rattle.', startTime: 35, endTime: 52 },
  { id: 's3', type: 'step', x: 42, y: 25, title: 'Clip the stabs to the PCB', text: 'Snap each lubed stabilizer firmly into the PCB until you hear it click into place.', startTime: 60, endTime: 78 },
  { id: 'n2', type: 'note', x: 18, y: 65, title: '', text: 'Heads up: rotate the plate 180° if your switches feel tight on one side. Manufacturing tolerance varies.', startTime: 75, endTime: 92 },
  { id: 's4', type: 'step', x: 78, y: 45, title: 'Seat the FR4 plate', text: 'Lower the FR4 plate over the stabilizers, aligning the switch holes with the PCB sockets.', startTime: 95, endTime: 115 },
  { id: 's5', type: 'step', x: 25, y: 50, title: 'Insert the switches', text: 'Press each switch through the plate and into the hot-swap sockets, working in a grid pattern.', startTime: 122, endTime: 142 },
  { id: 's6', type: 'step', x: 55, y: 70, title: 'Connect the daughterboard', text: 'Plug the JST cable from the USB-C daughterboard into the PCB header.', startTime: 150, endTime: 168 },
  { id: 'n3', type: 'note', x: 80, y: 25, title: '', text: 'Pro tip: stress-test the firmware before closing the case — re-flashing inside is annoying.', startTime: 165, endTime: 182 },
  { id: 's7', type: 'step', x: 45, y: 35, title: 'Drop into the case', text: 'Lay the assembly into the gasket-mounted case, making sure the foam strips align.', startTime: 188, endTime: 208 },
  { id: 's8', type: 'step', x: 72, y: 55, title: 'Flash the firmware', text: 'Connect over USB-C and flash QMK with the SiCK-68 keymap from the GitHub repo.', startTime: 215, endTime: 235 },
  { id: 's9', type: 'step', x: 28, y: 70, title: 'Test every key', text: 'Use VIA or an online tester to confirm every single key registers a clean keypress.', startTime: 245, endTime: 265 },
  { id: 's10', type: 'step', x: 60, y: 45, title: 'Install the keycaps', text: 'Press each PBT keycap firmly onto its switch stem, working from the spacebar outward.', startTime: 275, endTime: 298 },
];

const project = {
  title: 'SICK-68 Hot-Swappable Mechanical Keyboard',
  creator: 'Fedor Sosnin',
  creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
  category: 'ELECTRONICS',
  difficulty: 'INTERMEDIATE',
  hearts: 892,
  comments: 147,
  videoUrl: '/sample_video.mov',
  image: '/keyboard-hero.png',
  description:
    'Build a compact 68-key hot-swappable mechanical keyboard featuring custom STL files, gasket-mounted FR4 plate, lubed Gateron Yellows, and a fully programmable QMK firmware. A perfect weekend project that doubles as your daily driver.',
  suggestedDonation: 14.99,
  creatorBio:
    'Keyboard designer and electronics maker. I design and share open-source mechanical keyboard projects so others can build great typing tools without an enthusiast-tier budget.',
  creatorSocials: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    youtube: 'https://youtube.com',
    website: 'https://example.com',
  },
  shoppingList: [
    {
      category: 'Switches & Keycaps',
      items: [
        { name: 'Gateron Yellow Pro Switches (70-pack)', quantity: 1, price: 35.0, link: '#' },
        { name: 'PBT Double-Shot Keycap Set (68 keys)', quantity: 1, price: 49.99, link: '#' },
        { name: 'Krytox 205g0 Lube (5g)', quantity: 1, price: 9.99, link: '#' },
      ],
    },
    {
      category: 'PCB & Electronics',
      items: [
        { name: 'SiCK-68 Hot-Swap PCB', quantity: 1, price: 39.99, link: '#' },
        { name: 'USB-C Daughterboard', quantity: 1, price: 7.99, link: '#' },
        { name: 'Durock V2 Stabilizers', quantity: 1, price: 12.99, link: '#' },
      ],
    },
    {
      category: '3D Printed Case & Plate',
      items: [
        { name: '3D Printed Case (STL files included)', quantity: 1, price: 0, link: '#' },
        { name: 'FR4 Plate', quantity: 1, price: 15.0, link: '#' },
        { name: 'Gasket Foam Strip Kit', quantity: 1, price: 4.99, link: '#' },
      ],
    },
    {
      category: 'Cables & Tools',
      items: [
        { name: 'Braided USB-C Cable', quantity: 1, price: 12.99, link: '#' },
        { name: 'Keycap & Switch Puller Set', quantity: 1, price: 6.99, link: '#' },
      ],
    },
  ],
};

const creatorProjects = [
  {
    id: '20',
    title: 'Wireless Split Keyboard',
    creator: 'Fedor Sosnin',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    category: 'ELECTRONICS',
    difficulty: 'ADVANCED',
    hearts: 612,
    comments: 89,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=1080',
    description: 'Open-source ergonomic split with Bluetooth and 30-day battery life',
  },
  {
    id: '21',
    title: 'Macro Pad Mini',
    creator: 'Fedor Sosnin',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    category: 'ELECTRONICS',
    difficulty: 'BEGINNER',
    hearts: 318,
    comments: 47,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=1080',
    description: 'A 6-key starter macro pad — perfect first soldering project',
  },
];

const mockComments = [
  {
    id: 1,
    author: 'Hannah Lee',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    isCreator: false,
    content: 'Just finished my SiCK-68 build this weekend! The annotated video made the stab clipping step so much easier than reading a wall of text. Thank you!',
    timestamp: '4 hours ago',
    replies: [
      {
        id: 2,
        author: 'Fedor Sosnin',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
        isCreator: true,
        content: 'So happy to hear it! Drop a photo in the discord if you can — would love to see your color scheme.',
        timestamp: '2 hours ago',
      },
    ],
  },
  {
    id: 3,
    author: 'Marcus Wong',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    isCreator: false,
    content: 'Quick question — does the FR4 plate work with Cherry-profile keycaps or only OEM? Trying to figure out if my GMK set will fit.',
    timestamp: '1 day ago',
    replies: [],
  },
  {
    id: 4,
    author: 'Fedor Sosnin',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    isCreator: true,
    content: 'Heads up everyone — I just pushed v1.2 of the firmware with per-key RGB and better encoder handling. Re-flash when you get a chance!',
    timestamp: '3 days ago',
    replies: [],
  },
];

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

function getDirection(x: number, y: number): 'right' | 'left' | 'up' | 'down' {
  const edges = [
    { dir: 'right' as const, dist: (100 - x) * 0.8 },
    { dir: 'left' as const, dist: x * 0.8 },
    { dir: 'down' as const, dist: 100 - y },
    { dir: 'up' as const, dist: y },
  ];
  const nearest = edges.reduce((a, b) => (a.dist < b.dist ? a : b));
  const opposite = {
    right: 'left' as const,
    left: 'right' as const,
    up: 'down' as const,
    down: 'up' as const,
  };
  return opposite[nearest.dir];
}

function AnnotatedPlayer({
  videoUrl,
  annotations,
}: {
  videoUrl: string;
  annotations: DemoAnnotation[];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const isInRange = useCallback(
    (a: DemoAnnotation) => currentTime >= a.startTime && currentTime <= a.endTime,
    [currentTime],
  );

  // Track fullscreen state
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Auto-open tooltips when in range, auto-close when out of range, respect dismissals
  useEffect(() => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      let changed = false;
      for (const ann of annotations) {
        const inRange = currentTime >= ann.startTime && currentTime <= ann.endTime;
        if (inRange && !next.has(ann.id) && !dismissedIds.has(ann.id)) {
          next.add(ann.id);
          changed = true;
        } else if (!inRange && next.has(ann.id)) {
          next.delete(ann.id);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [currentTime, annotations, dismissedIds]);

  const toggleMarker = (id: string) => {
    const wasOpen = openIds.has(id);
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (wasOpen) next.delete(id);
      else next.add(id);
      return next;
    });
    setDismissedIds((prev) => {
      const next = new Set(prev);
      if (wasOpen) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const stepAnns = annotations.filter((a) => a.type === 'step');

  return (
    <div
      ref={containerRef}
      className={`rounded-[2px] overflow-hidden ${isFullscreen ? 'flex flex-col h-screen w-screen bg-black' : ''}`}
      style={!isFullscreen ? { border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' } : undefined}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 h-[46px] px-4 flex-shrink-0"
        style={{ background: 'linear-gradient(29.48deg, #1782FF 0.23%, #B02BED 100.23%)' }}
      >
        <Eye className="h-4 w-4 text-white flex-shrink-0" weight="fill" />
        <span
          className="text-white"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.056em',
          }}
        >
          DETAILED VIEW
        </span>
      </div>

      {/* Media area */}
      <div
        className={`relative bg-black select-none ${isFullscreen ? 'flex-1 flex items-center justify-center' : ''}`}
        style={!isFullscreen ? { minHeight: '260px' } : undefined}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          className={`w-full object-contain pointer-events-none ${isFullscreen ? 'h-full max-h-full' : 'max-h-[448px]'}`}
          onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Annotation markers */}
        {annotations.map((ann) => {
          if (!isInRange(ann)) return null;
          const stepNum =
            ann.type === 'step' ? stepAnns.findIndex((a) => a.id === ann.id) + 1 : null;
          const isOpen = openIds.has(ann.id);
          const dir = getDirection(ann.x, ann.y);

          const pos: React.CSSProperties = {};
          if (dir === 'right') {
            pos.left = '30px';
            pos.top = '50%';
            pos.transform = 'translateY(-50%)';
          } else if (dir === 'left') {
            pos.right = '30px';
            pos.top = '50%';
            pos.transform = 'translateY(-50%)';
          } else if (dir === 'down') {
            pos.top = '30px';
            pos.left = '50%';
            pos.transform = 'translateX(-50%)';
          } else {
            pos.bottom = '30px';
            pos.left = '50%';
            pos.transform = 'translateX(-50%)';
          }

          return (
            <div
              key={ann.id}
              className="absolute z-10"
              style={{
                left: `${ann.x}%`,
                top: `${ann.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleMarker(ann.id);
              }}
            >
              {ann.type === 'step' ? (
                <div
                  className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer flex-shrink-0"
                  style={{
                    background: '#ffffff',
                    color: '#0d0e24',
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '12px',
                    fontWeight: 600,
                    filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))',
                  }}
                >
                  {stepNum}
                </div>
              ) : (
                <Note
                  size={22}
                  weight="fill"
                  className="cursor-pointer flex-shrink-0"
                  style={{
                    color: 'white',
                    filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))',
                  }}
                />
              )}

              {isOpen && (
                <div
                  className="absolute z-20"
                  style={{ ...pos, width: '260px' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {ann.type === 'step' && (
                    <div
                      className="px-3 py-1.5"
                      style={{ background: 'white', borderRadius: '4px 4px 0 0' }}
                    >
                      <p
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#0d0e24',
                          margin: 0,
                        }}
                      >
                        {ann.title}
                      </p>
                    </div>
                  )}
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid white',
                      borderRadius: ann.type === 'step' ? '0 0 4px 4px' : '4px',
                      boxShadow: '2px 2px 0px 0px #0d0e24',
                      padding: '10px 12px',
                    }}
                  >
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: '11px',
                        lineHeight: '1.4',
                        margin: 0,
                      }}
                    >
                      {ann.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Video controls */}
      <div className="bg-black px-6 py-2 flex flex-col gap-2 flex-shrink-0">
        <div
          className="relative h-4 flex items-center cursor-pointer"
          onClick={(e) => {
            if (!videoRef.current || !duration) return;
            const rect = e.currentTarget.getBoundingClientRect();
            videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
          }}
        >
          <div className="absolute w-full h-2 rounded-[10px] bg-[#c8c8c8]" />
          <div
            className="absolute h-2 rounded-[10px] bg-red-500"
            style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }}
          />
          {duration > 0 && (
            <div
              className="absolute w-3 h-3 bg-red-500 rounded-full -translate-x-1/2 shadow"
              style={{ left: `${(currentTime / duration) * 100}%` }}
            />
          )}
          {duration > 0 &&
            annotations.map((ann) => (
              <div
                key={ann.id}
                className="absolute w-2 h-2 rounded-full pointer-events-none"
                style={{
                  left: `${(ann.startTime / duration) * 100}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: ann.type === 'step' ? '#ffffff' : '#1782FF',
                  border: '1px solid rgba(0,0,0,0.4)',
                  zIndex: 5,
                }}
              />
            ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={togglePlay}
              className="flex items-center justify-center w-[35px] h-[35px] text-white hover:text-white/70 transition-colors"
            >
              {isPlaying ? <Pause size={22} weight="fill" /> : <Play size={22} weight="fill" />}
            </button>
            <button className="flex items-center justify-center w-[35px] h-[35px] text-white hover:text-white/70 transition-colors">
              <SpeakerHigh size={22} />
            </button>
            <div
              className="flex items-center px-3 h-[35px] rounded-[48px]"
              style={{ background: 'rgba(40,40,40,0.6)' }}
            >
              <span
                className="text-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
              >
                {formatTime(currentTime)} / {formatTime(duration || 0)}
              </span>
            </div>
          </div>
          <div
            className="flex items-center justify-center px-5 h-[35px] w-[60px] rounded-[48px]"
            style={{ background: 'rgba(40,40,40,0.6)' }}
          >
            <ArrowsOut
              size={20}
              className="text-white cursor-pointer hover:text-white/70"
              onClick={() => {
                if (document.fullscreenElement) document.exitFullscreen?.();
                else containerRef.current?.requestFullscreen?.();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepsListExpandable({ annotations }: { annotations: DemoAnnotation[] }) {
  const [open, setOpen] = useState(false);
  const sorted = [...annotations].sort((a, b) => a.startTime - b.startTime);
  const stepAnns = annotations.filter((a) => a.type === 'step');

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 hover:border-[#1782FF] hover:text-[#1782FF] transition-colors rounded-[2px]"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '-0.02em' }}
      >
        <span className="flex items-center gap-2">
          <ListBullets className="h-4 w-4" />
          VIEW LIST OF STEPS
        </span>
        <CaretDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 py-4 mt-2 border border-border bg-white/30 dark:bg-card/30 rounded-[2px] space-y-3">
              {sorted.map((ann) => {
                const stepNum =
                  ann.type === 'step' ? stepAnns.findIndex((a) => a.id === ann.id) + 1 : null;
                return (
                  <div key={ann.id} className="flex items-start gap-3">
                    {/* Marker */}
                    <div className="flex-shrink-0 mt-0.5">
                      {ann.type === 'step' ? (
                        <div
                          className="flex items-center justify-center w-6 h-6 rounded-full"
                          style={{
                            background: '#ffffff',
                            color: '#0d0e24',
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '12px',
                            fontWeight: 600,
                            boxShadow: '0 0 0 2px rgba(0,0,0,0.15)',
                          }}
                        >
                          {stepNum}
                        </div>
                      ) : (
                        <div className="w-6 h-6 flex items-center justify-center">
                          <Note size={20} weight="fill" className="text-[#1782FF]" />
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {ann.type === 'step' ? (
                        <p
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            margin: 0,
                            marginBottom: '2px',
                          }}
                        >
                          {ann.title}
                        </p>
                      ) : (
                        <p
                          className="gradient-text"
                          style={{
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            margin: 0,
                            marginBottom: '2px',
                          }}
                        >
                          NOTE
                        </p>
                      )}
                      <p
                        className="text-muted-foreground"
                        style={{
                          fontFamily: "'PP Monument', sans-serif",
                          fontSize: '0.8125rem',
                          lineHeight: '1.5',
                          margin: 0,
                        }}
                      >
                        {ann.text}
                      </p>
                    </div>
                    {/* Timestamp */}
                    <div className="flex-shrink-0 flex items-center gap-1.5 text-muted-foreground mt-0.5">
                      <Timer className="h-3.5 w-3.5" />
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6875rem' }}>
                        {formatTime(ann.startTime)} – {formatTime(ann.endTime)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProjectDemoPage() {
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(project.hearts);
  const [isFollowing, setIsFollowing] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(true);
  const [shoppingListOpen, setShoppingListOpen] = useState(false);
  const [discussionOpen, setDiscussionOpen] = useState(true);
  const [commentInput, setCommentInput] = useState('');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleHeart = () => {
    setIsHearted(!isHearted);
    setHeartCount(isHearted ? heartCount - 1 : heartCount + 1);
  };

  const totalCost = project.shoppingList.reduce(
    (total, category) =>
      total + category.items.reduce((catTotal, item) => catTotal + item.price * item.quantity, 0),
    0,
  );

  // Auto-rotate creator carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentProjectIndex((prev) => (prev + 1) % creatorProjects.length);
      }, 10000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goToNextProject = () =>
    setCurrentProjectIndex((prev) => (prev + 1) % creatorProjects.length);
  const goToPreviousProject = () =>
    setCurrentProjectIndex((prev) => (prev - 1 + creatorProjects.length) % creatorProjects.length);

  return (
    <>
      <ThemeInitializer />
      <Toaster />
      <MoonDustBackground />
      <NewHeader />

      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <main>
            <section className="py-6 sm:py-12 min-h-screen relative overflow-x-hidden">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 min-w-0">
                    {/* Hero Image */}
                    <motion.div
                      className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden mb-8 rounded-[2px] w-full"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Project Header */}
                    <motion.div
                      className="mb-4 sm:mb-8 backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-4 sm:p-6 rounded-[2px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <div className="flex items-center flex-wrap gap-3 mb-4">
                        <CategoryBadge category={project.category} />
                        <CategoryBadge category={project.difficulty} />
                        <span className="text-muted-foreground">•</span>
                        <button
                          onClick={handleHeart}
                          className="flex items-center gap-1.5 text-muted-foreground hover:text-[#1782FF] transition-colors"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                        >
                          <Heart className={`h-4 w-4 transition-all ${isHearted ? 'fill-[#1782FF] text-[#1782FF]' : ''}`} />
                          <span>{heartCount}</span>
                        </button>
                        <span className="text-muted-foreground">•</span>
                        <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}>
                          <ChatCircle className="h-4 w-4" />
                          {project.comments}
                        </span>
                        <span className="text-muted-foreground hidden sm:inline">•</span>
                        <button
                          className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-[#1782FF] transition-colors"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                          aria-label="Share project"
                        >
                          <ShareNetwork className="h-4 w-4" weight="bold" />
                          <span>SHARE</span>
                        </button>
                      </div>

                      <h1 className="mb-6" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2' }}>
                        {project.title}
                      </h1>

                      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Button
                          variant={isFollowing ? 'outline' : 'default'}
                          className={`w-full sm:w-auto ${isFollowing ? 'border-foreground' : 'text-white relative overflow-hidden group'}`}
                          onClick={() => setIsFollowing(!isFollowing)}
                          style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                        >
                          {!isFollowing && (
                            <>
                              <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }}
                              />
                              <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          )}
                          <Heart className={`mr-2 h-4 w-4 ${!isFollowing ? 'relative z-10' : ''}`} />
                          <span className={!isFollowing ? 'relative z-10' : ''}>{isFollowing ? 'FOLLOWING' : 'FOLLOW PROJECT'}</span>
                        </Button>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                          <Button
                            className="w-full sm:w-auto text-white relative overflow-hidden group"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em', boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                          >
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: 'linear-gradient(135deg, #10B981, #1782FF, #10B981, #1782FF)',
                                backgroundSize: '300% 300%',
                              }}
                              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <Rocket className="mr-2 h-5 w-5 relative z-10" weight="fill" />
                            <span className="relative z-10">SUPPORT ${project.suggestedDonation}</span>
                          </Button>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm text-center sm:text-left" style={{ fontFamily: "'PP Monument', sans-serif" }}>
                            or pay what you want
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mt-6" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Jump Links */}
                    <motion.div
                      className="mb-4 sm:mb-8 flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        {[
                          { label: 'INSTRUCTIONS', id: 'instructions', icon: ListChecks },
                          { label: 'SHOPPING LIST', id: 'shopping-list', icon: Basket },
                          { label: 'DISCUSSION', id: 'comments', icon: ChatsCircle },
                        ].map((link) => (
                          <button
                            key={link.id}
                            onClick={() => {
                              if (link.id === 'instructions') setInstructionsOpen(true);
                              if (link.id === 'shopping-list') setShoppingListOpen(true);
                              if (link.id === 'comments') setDiscussionOpen(true);
                              setTimeout(() => {
                                document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 100);
                            }}
                            className="px-3 sm:px-4 py-2 border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 hover:border-[#1782FF] hover:text-[#1782FF] transition-colors whitespace-nowrap text-xs sm:text-sm flex items-center gap-2 rounded-[2px]"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: '-0.02em' }}
                          >
                            <link.icon className="h-4 w-4" />
                            {link.label}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => window.print()}
                        className="px-3 sm:px-4 py-2 border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 hover:border-[#1782FF] hover:text-[#1782FF] transition-colors whitespace-nowrap text-xs sm:text-sm flex items-center gap-2 rounded-[2px]"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: '-0.02em' }}
                      >
                        <FilePdf className="h-4 w-4" />
                        DOWNLOAD
                      </button>
                    </motion.div>

                    {/* Detailed Instructions Section */}
                    <motion.div
                      id="instructions"
                      className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 mb-4 sm:mb-8 scroll-mt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <button
                        onClick={() => setInstructionsOpen(!instructionsOpen)}
                        className="w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-3 flex items-center justify-between hover:bg-muted/20 transition-colors border-b border-white/30 dark:border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <ListChecks size={24} weight="fill" className="text-white sm:w-7 sm:h-7" />
                          <h2 style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 600 }} className="text-left">
                            Detailed Instructions
                          </h2>
                        </div>
                        <CaretDown className={`h-5 w-5 transition-transform ${instructionsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {instructionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-8">
                              <AnnotatedPlayer videoUrl={project.videoUrl} annotations={demoAnnotations} />
                              <StepsListExpandable annotations={demoAnnotations} />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Shopping List Section */}
                    <motion.div
                      id="shopping-list"
                      className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 mb-4 sm:mb-0 scroll-mt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <button
                        onClick={() => setShoppingListOpen(!shoppingListOpen)}
                        className="w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-3 flex items-center justify-between hover:bg-muted/20 transition-colors border-b border-white/30 dark:border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <Basket size={24} weight="fill" className="text-white sm:w-7 sm:h-7" />
                          <h2 style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 600 }}>
                            Shopping List
                          </h2>
                        </div>
                        <CaretDown className={`h-5 w-5 transition-transform ${shoppingListOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {shoppingListOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-8">
                              <div className="space-y-4 sm:space-y-6">
                                {project.shoppingList.map((category) => (
                                  <div key={category.category}>
                                    <h3 className="mb-3 gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                                      {category.category.toUpperCase()}
                                    </h3>
                                    <div className="space-y-3">
                                      {category.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center justify-between gap-2 p-2 sm:p-3 border border-border hover:border-[#1782FF] transition-colors">
                                          <div className="flex-1 min-w-0">
                                            <div className="text-xs sm:text-sm truncate" style={{ fontFamily: "'PP Monument', sans-serif", fontWeight: 600 }}>
                                              {item.name}
                                            </div>
                                            <div className="text-muted-foreground text-[10px] sm:text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}>
                                              QTY: {item.quantity}
                                            </div>
                                          </div>
                                          <div className="text-right flex-shrink-0">
                                            <div className="text-xs sm:text-sm whitespace-nowrap" style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700, letterSpacing: '-0.02em' }}>
                                              {item.price === 0 ? 'FREE' : `$${(item.price * item.quantity).toFixed(2)}`}
                                            </div>
                                            {item.price > 0 && (
                                              <a href={item.link} className="text-[#1782FF] hover:underline text-[10px] sm:text-xs whitespace-nowrap" style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}>
                                                BUY PART
                                              </a>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="mt-4 sm:mt-6 p-3 sm:p-4 border border-border">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-muted-foreground text-[10px] sm:text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}>
                                    ESTIMATED TOTAL COST:
                                  </span>
                                  <div className="text-right">
                                    <div className="text-base sm:text-lg" style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600, letterSpacing: '-0.02em' }}>
                                      ${totalCost.toFixed(2)}
                                    </div>
                                    <a href="#" className="text-[#1782FF] hover:underline text-[10px] sm:text-xs whitespace-nowrap" style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}>
                                      BUY ALL PARTS
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Discussion Section */}
                    <motion.div
                      id="comments"
                      className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 mt-4 sm:mt-8 mb-4 sm:mb-0 scroll-mt-24"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <button
                        onClick={() => setDiscussionOpen(!discussionOpen)}
                        className="w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-3 flex items-center justify-between hover:bg-muted/20 transition-colors border-b border-white/30 dark:border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <ChatsCircle size={24} weight="fill" className="text-white sm:w-7 sm:h-7" />
                          <h2 style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 600 }}>
                            Discussion
                          </h2>
                          <Badge className="bg-muted text-foreground border-none" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                            {mockComments.reduce((total, c) => total + 1 + c.replies.length, 0)}
                          </Badge>
                        </div>
                        <CaretDown className={`h-5 w-5 transition-transform ${discussionOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {discussionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-8">
                              {/* Comment Form */}
                              <div className="mb-4 sm:mb-6 p-3 sm:p-4 border border-border">
                                <h3 className="mb-3" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', fontWeight: 600 }}>
                                  Add a comment
                                </h3>
                                <textarea
                                  value={commentInput}
                                  onChange={(e) => setCommentInput(e.target.value)}
                                  placeholder="Ask a question or share your experience building this project..."
                                  className="w-full min-h-[100px] p-3 bg-background border border-border focus:border-[#1782FF] focus:outline-none resize-y transition-colors"
                                  style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}
                                />
                                <div className="flex justify-end mt-3">
                                  <Button
                                    className="text-white relative overflow-hidden group"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                                  >
                                    <div
                                      className="absolute inset-0"
                                      style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }}
                                    />
                                    <PaperPlaneTilt className="mr-2 h-4 w-4 relative z-10" />
                                    <span className="relative z-10">POST COMMENT</span>
                                  </Button>
                                </div>
                              </div>

                              {/* Comments */}
                              <div className="space-y-6">
                                {mockComments.map((comment) => (
                                  <div key={comment.id}>
                                    <div className={`p-4 border ${comment.isCreator ? 'border-[#1782FF] bg-[#1782FF]/5' : 'border-border'}`}>
                                      <div className="flex items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                          <ImageWithFallback src={comment.authorAvatar} alt={comment.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                            <div className="flex items-center gap-2 flex-wrap">
                                              <span style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', fontWeight: 600 }}>{comment.author}</span>
                                              {comment.isCreator && (
                                                <Badge className="gradient-bg text-white border-none" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', padding: '0.125rem 0.5rem', letterSpacing: '-0.02em' }}>
                                                  CREATOR
                                                </Badge>
                                              )}
                                            </div>
                                            <span className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                              {comment.timestamp}
                                            </span>
                                          </div>
                                          <p className="text-foreground" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                                            {comment.content}
                                          </p>
                                          <button className="mt-2 text-muted-foreground hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                            REPLY
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    {comment.replies.length > 0 && (
                                      <div className="ml-6 sm:ml-12 mt-3 space-y-3">
                                        {comment.replies.map((reply) => (
                                          <div key={reply.id} className={`p-4 border ${reply.isCreator ? 'border-[#1782FF] bg-[#1782FF]/5' : 'border-border'}`}>
                                            <div className="flex items-start gap-3">
                                              <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                                <ImageWithFallback src={reply.authorAvatar} alt={reply.author} className="w-full h-full object-cover" />
                                              </div>
                                              <div className="flex-1 min-w-0">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                                  <div className="flex items-center gap-2 flex-wrap">
                                                    <span style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', fontWeight: 600 }}>{reply.author}</span>
                                                    {reply.isCreator && (
                                                      <Badge className="gradient-bg text-white border-none" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', padding: '0.125rem 0.5rem', letterSpacing: '-0.02em' }}>
                                                        CREATOR
                                                      </Badge>
                                                    )}
                                                  </div>
                                                  <span className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                                    {reply.timestamp}
                                                  </span>
                                                </div>
                                                <p className="text-foreground" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                                                  {reply.content}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-6 space-y-6">
                      <div className="block lg:hidden mt-2 pt-6" />
                      {/* About Creator */}
                      <motion.div
                        className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h3 className="gradient-text mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                          ABOUT THE CREATOR
                        </h3>

                        <Link to="/creator/1" className="block mb-4 hover:opacity-80 transition-opacity">
                          <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                              <ImageWithFallback src={project.creatorAvatar} alt={project.creator} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <div style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 700 }}>
                                {project.creator}
                              </div>
                              <div className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                {creatorProjects.length + 1} PROJECTS
                              </div>
                            </div>
                          </div>
                        </Link>

                        <p className="text-muted-foreground mb-4" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                          {project.creatorBio}
                        </p>

                        <div className="flex gap-3 mb-4">
                          <a href={project.creatorSocials.twitter} className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors" aria-label="Twitter">
                            <TwitterLogo className="h-4 w-4" />
                          </a>
                          <a href={project.creatorSocials.github} className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors" aria-label="GitHub">
                            <GithubLogo className="h-4 w-4" />
                          </a>
                          <a href={project.creatorSocials.youtube} className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors" aria-label="YouTube">
                            <YoutubeLogo className="h-4 w-4" />
                          </a>
                          <a href={project.creatorSocials.website} className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors" aria-label="Website">
                            <Globe className="h-4 w-4" />
                          </a>
                        </div>

                        <Button
                          variant={isFollowing ? 'outline' : 'default'}
                          className={`w-full ${isFollowing ? 'border-foreground' : 'text-white relative overflow-hidden group'}`}
                          onClick={() => setIsFollowing(!isFollowing)}
                          style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                        >
                          {!isFollowing && (
                            <>
                              <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }}
                              />
                              <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </>
                          )}
                          <UserPlus className={`mr-2 h-4 w-4 ${!isFollowing ? 'relative z-10' : ''}`} />
                          <span className={!isFollowing ? 'relative z-10' : ''}>{isFollowing ? 'FOLLOWING CREATOR' : 'FOLLOW CREATOR'}</span>
                        </Button>
                      </motion.div>

                      {/* More from Creator carousel */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="gradient-text dark:![background:none] dark:![-webkit-text-fill-color:white]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                            MORE FROM {project.creator.toUpperCase()}
                          </h3>
                          <div className="flex gap-2">
                            <button onClick={goToPreviousProject} className="w-8 h-8 border border-border hover:border-[#1782FF] hover:text-[#1782FF] transition-colors flex items-center justify-center" aria-label="Previous project">
                              <CaretLeft className="h-4 w-4" />
                            </button>
                            <button onClick={goToNextProject} className="w-8 h-8 border border-border hover:border-[#1782FF] hover:text-[#1782FF] transition-colors flex items-center justify-center" aria-label="Next project">
                              <CaretRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="relative overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={currentProjectIndex}
                              initial={{ x: 100 }}
                              animate={{ x: 0 }}
                              exit={{ x: -100 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ProjectCard {...creatorProjects[currentProjectIndex]} disableAnimation={true} />
                            </motion.div>
                          </AnimatePresence>
                        </div>

                        <div className="flex justify-center gap-2 mt-4">
                          {creatorProjects.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentProjectIndex(index)}
                              className={`h-1.5 transition-all ${index === currentProjectIndex ? 'w-8 gradient-bg' : 'w-1.5 bg-border hover:bg-muted-foreground'}`}
                              aria-label={`Go to project ${index + 1}`}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <NewFooter />
        </div>
      </div>
    </>
  );
}
