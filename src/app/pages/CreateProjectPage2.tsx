import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { GlitchText } from '../components/GlitchText';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { DraggableItem } from '../components/DraggableItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Link, useNavigate } from 'react-router';
import type { ProjectFormData, ProjectFormMode } from '../data/projectFormData';
import svgPaths from '../../imports/svg-sn64k4dn22';
import gridBg from 'figma:asset/64d422cd649278d2dc98f1f81a8e7ddfd6f1ef61.png';
import darkGridBg from 'figma:asset/c9f5c31924abaf13960f0dbfc47a54853bc08bcc.png';
import {
  Plus,
  Image as ImageIcon,
  Trash,
  User,
  TwitterLogo,
  GithubLogo,
  Globe,
  File,
  FilmStrip,
  CaretDown,
  CheckSquare,
  Square,
  CopySimple,
  GitBranch,
  ListChecks,
  Basket,
  Eye,
  Play,
  Pause,
  SpeakerHigh,
  ArrowsOut,
  ArrowsIn,
  Note,
  ListNumbers,
  X,
  ArrowLeft,
  Timer,
  ArrowUp,
  PencilSimple,
} from '@phosphor-icons/react';

// Category options for projects
const categories = [
  '3D PRINTING',
  'ROBOTICS',
  'RASPBERRY PI',
  'ARDUINO',
  'CODING',
  'ELECTRONICS',
  'WOODWORKING',
  'METALWORKING',
  'IOT',
  'AI/ML'
];

const experienceLevels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

// Mock creator data
const creator = {
  name: 'Sarah Chen',
  avatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  projectCount: 12,
  bio: 'Robotics researcher and maker with 10+ years of experience building autonomous systems. I share projects to help others learn advanced robotics concepts.',
  socials: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    website: 'https://example.com',
  }
};

interface Annotation {
  id: string;
  type: 'note' | 'step';
  x: number;
  y: number;
  title: string;
  text: string;
  startTime?: number;
  endTime?: number | null;
}

interface Step {
  id: string;
  content: string;
  textSubmitted?: boolean;
  imageUrl?: string;
  image?: File | null;
  annotations?: Annotation[];
}

interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  link: string;
}

interface CreateProjectPageProps {
  mode?: ProjectFormMode;
  initialData?: ProjectFormData | null;
}

function formatTime(s: number) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
}

function parseTime(str: string): number {
  const parts = str.split(':');
  if (parts.length === 2) return Math.max(0, parseInt(parts[0], 10) * 60 + parseFloat(parts[1]));
  return Math.max(0, parseFloat(str) || 0);
}

function getDirection(x: number, y: number): 'right' | 'left' | 'up' | 'down' {
  const edges = [
    { dir: 'right' as const, dist: (100 - x) * 0.8 },
    { dir: 'left' as const, dist: x * 0.8 },
    { dir: 'down' as const, dist: 100 - y },
    { dir: 'up' as const, dist: y },
  ];
  const nearest = edges.reduce((a, b) => a.dist < b.dist ? a : b);
  const opposite = { right: 'left' as const, left: 'right' as const, up: 'down' as const, down: 'up' as const };
  return opposite[nearest.dir];
}

function TimeInput({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [editing, setEditing] = useState(false);
  const [display, setDisplay] = useState(formatTime(value));

  useEffect(() => {
    if (!editing) setDisplay(formatTime(value));
  }, [value, editing]);

  const commit = () => {
    setEditing(false);
    onChange(parseTime(display));
  };

  if (editing) {
    return (
      <input
        value={display}
        onChange={e => setDisplay(e.target.value)}
        onBlur={commit}
        onKeyDown={e => {
          if (e.key === 'Enter') commit();
          if (e.key === 'Escape') { setEditing(false); setDisplay(formatTime(value)); }
        }}
        autoFocus
        className="w-[44px] text-white text-center bg-transparent focus:outline-none"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', border: '1px solid white', borderRadius: '2px', padding: '0 2px' }}
        onClick={e => e.stopPropagation()}
      />
    );
  }

  return (
    <span
      onClick={e => { e.stopPropagation(); setEditing(true); }}
      className="text-white cursor-pointer"
      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', border: '1px solid rgba(255,255,255,0.4)', borderRadius: '2px', padding: '0 3px' }}
    >
      {formatTime(value)}
    </span>
  );
}

function SectionDetailedView({
  step,
  onAnnotationsChange,
  onRemoveFile,
}: {
  step: Step;
  onAnnotationsChange: (annotations: Annotation[]) => void;
  onRemoveFile: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoStateRef = useRef<{ time: number; playing: boolean }>({ time: 0, playing: false });
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [addMode, setAddMode] = useState<'note' | 'step' | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>(step.annotations ?? []);
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pseudoFs, setPseudoFs] = useState(false);
  const isFs = isFullscreen || pseudoFs;

  const captureVideoState = () => {
    const v = videoRef.current;
    if (!v) return;
    videoStateRef.current = { time: v.currentTime, playing: !v.paused };
  };

  const isVideo = step.image ? step.image.type.startsWith('video/') : /\.(mp4|mov|wmv)$/i.test(step.imageUrl ?? '');
  const mediaUrl = useMemo(() => step.image ? URL.createObjectURL(step.image) : (step.imageUrl ?? null), [step.image, step.imageUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) { videoRef.current.pause(); } else { videoRef.current.play(); }
    setIsPlaying(!isPlaying);
  };

  // Track real-fullscreen state (desktop / Android Chrome)
  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // Lock body scroll while in pseudo-fullscreen (iOS fallback)
  useEffect(() => {
    if (!pseudoFs) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [pseudoFs]);

  // After portal toggle, restore captured video time + play state
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const { time, playing } = videoStateRef.current;
    if (time > 0) {
      try { v.currentTime = time; } catch {}
    }
    if (playing) {
      v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [pseudoFs]);

  // ESC exits pseudo-fullscreen
  useEffect(() => {
    if (!pseudoFs) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        captureVideoState();
        setPseudoFs(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [pseudoFs]);

  const enterFullscreen = () => {
    const el = containerRef.current as (HTMLDivElement & { webkitRequestFullscreen?: () => Promise<void> }) | null;
    const req = el?.requestFullscreen ?? el?.webkitRequestFullscreen;
    if (req) {
      req.call(el).catch(() => {
        captureVideoState();
        setPseudoFs(true);
      });
    } else {
      captureVideoState();
      setPseudoFs(true);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    if (pseudoFs) {
      captureVideoState();
      setPseudoFs(false);
    }
  };

  // Auto-open / auto-close tooltips based on video time and dismissal state
  useEffect(() => {
    if (!isVideo) return;
    setOpenIds(prev => {
      const next = new Set(prev);
      let changed = false;
      for (const ann of annotations) {
        if (ann.startTime === undefined) continue;
        const inRange = currentTime >= ann.startTime && (ann.endTime == null || currentTime <= ann.endTime);
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
  }, [currentTime, isVideo, annotations, dismissedIds]);

  const isInRange = useCallback((ann: Annotation) => {
    if (!isVideo || ann.startTime === undefined) return true;
    return currentTime >= ann.startTime && (ann.endTime == null || currentTime <= ann.endTime);
  }, [currentTime, isVideo]);

  const handleMediaClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!addMode || !mediaRef.current) return;
    e.stopPropagation();
    const rect = mediaRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const startTime = isVideo ? (videoRef.current?.currentTime ?? 0) : undefined;
    const ann: Annotation = {
      id: `ann-${Date.now()}`,
      type: addMode,
      x, y,
      title: '',
      text: '',
      startTime,
      endTime: startTime !== undefined ? startTime + 10 : undefined,
    };
    const updated = [...annotations, ann];
    setAnnotations(updated);
    onAnnotationsChange(updated);
    setOpenIds(prev => {
      const next = new Set(prev);
      next.add(ann.id);
      return next;
    });
    setAddMode(null);
  };

  const toggleMarker = useCallback((id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      const wasOpen = next.has(id);
      if (wasOpen) next.delete(id);
      else next.add(id);
      return next;
    });
    setDismissedIds(prev => {
      const next = new Set(prev);
      const wasOpen = openIds.has(id);
      if (wasOpen) next.add(id); // dismissing
      else next.delete(id); // re-opening
      return next;
    });
  }, [openIds]);

  const updateAnn = useCallback((id: string, patch: Partial<Annotation>) => {
    setAnnotations(prev => {
      const updated = prev.map(a => a.id === id ? { ...a, ...patch } : a);
      onAnnotationsChange(updated);
      return updated;
    });
  }, [onAnnotationsChange]);

  const deleteAnn = useCallback((id: string) => {
    setAnnotations(prev => {
      const updated = prev.filter(a => a.id !== id);
      onAnnotationsChange(updated);
      return updated;
    });
    setOpenIds(prev => { const next = new Set(prev); next.delete(id); return next; });
    setDismissedIds(prev => { const next = new Set(prev); next.delete(id); return next; });
  }, [onAnnotationsChange]);

  const stepAnns = annotations.filter(a => a.type === 'step');

  const playerContent = (
    <div
      ref={containerRef}
      className={`rounded-[2px] overflow-hidden ${isFs ? 'flex flex-col bg-black' : ''} ${isFullscreen ? 'h-screen w-screen' : ''} ${pseudoFs ? 'fixed inset-0 z-[9999] h-[100dvh] w-screen' : ''}`}
      style={!isFs ? { border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.4)' } : undefined}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 h-[46px] px-4 flex-shrink-0"
        style={{ background: 'linear-gradient(29.48deg, #1782FF 0.23%, #B02BED 100.23%)' }}
      >
        <button onClick={onRemoveFile} className="text-white/60 hover:text-white transition-colors flex-shrink-0">
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Eye className="h-4 w-4 text-white flex-shrink-0" weight="fill" />
          <span className="text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.056em' }}>
            DETAILED VIEW
          </span>
        </div>
        {/* ADD A NOTE — transparent by default, highlighted when active */}
        <button
          onClick={() => setAddMode(addMode === 'note' ? null : 'note')}
          className="flex items-center gap-1.5 h-[26px] px-2 rounded-[2px] transition-all flex-shrink-0"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            border: addMode === 'note' ? '1px solid white' : '1px solid rgba(255,255,255,0.45)',
            background: addMode === 'note' ? 'rgba(255,255,255,0.2)' : 'transparent',
          }}
        >
          <Note className="h-3.5 w-3.5 text-white flex-shrink-0" />
          <span className="text-white">ADD A NOTE</span>
        </button>
        {/* ADD A STEP — transparent by default, white fill when active */}
        <button
          onClick={() => setAddMode(addMode === 'step' ? null : 'step')}
          className="flex items-center gap-1.5 h-[26px] px-2 rounded-[2px] transition-all flex-shrink-0"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            border: addMode === 'step' ? '1px solid transparent' : '1px solid rgba(255,255,255,0.45)',
            background: addMode === 'step' ? '#ffffff' : 'transparent',
          }}
        >
          <ListNumbers className="h-3.5 w-3.5 flex-shrink-0" style={{ color: addMode === 'step' ? '#0d0e24' : 'white' }} />
          <span style={{ color: addMode === 'step' ? '#0d0e24' : 'white' }}>ADD A STEP</span>
        </button>
      </div>

      {/* Media area */}
      <div
        ref={mediaRef}
        className={`relative bg-black select-none ${addMode ? 'cursor-crosshair' : 'cursor-default'} ${isFs ? 'flex-1 flex items-center justify-center' : ''}`}
        style={!isFs ? { minHeight: '260px' } : undefined}
        onClick={handleMediaClick}
      >
        {isVideo ? (
          <video
            ref={videoRef}
            src={mediaUrl ?? undefined}
            playsInline
            // @ts-expect-error legacy iOS attribute
            webkit-playsinline="true"
            className={`w-full object-contain pointer-events-none ${isFs ? 'h-full max-h-full' : 'max-h-[448px]'}`}
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
            onEnded={() => setIsPlaying(false)}
          />
        ) : mediaUrl ? (
          <img src={mediaUrl} alt="Section media" className={`w-full object-contain pointer-events-none ${isFs ? 'h-full max-h-full' : 'max-h-[448px]'}`} />
        ) : (
          <div className="flex items-center justify-center h-64 text-white/30" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>
            No media uploaded
          </div>
        )}

        {/* Add mode hint */}
        {addMode && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-[2px] pointer-events-none" style={{ background: 'rgba(23,130,255,0.9)', zIndex: 20 }}>
            <span className="text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.04em' }}>
              Click to place {addMode === 'note' ? 'note' : 'step'}
            </span>
          </div>
        )}

        {/* Annotation markers */}
        {annotations.map((ann) => {
          // Video annotations only visible within their time range
          if (isVideo && !isInRange(ann)) return null;

          const stepNum = ann.type === 'step' ? stepAnns.findIndex(a => a.id === ann.id) + 1 : null;
          const isOpen = openIds.has(ann.id);
          const dir = getDirection(ann.x, ann.y);

          const tooltipPos: React.CSSProperties = {};
          if (dir === 'right') { tooltipPos.left = '30px'; tooltipPos.top = '50%'; tooltipPos.transform = 'translateY(-50%)'; }
          else if (dir === 'left') { tooltipPos.right = '30px'; tooltipPos.top = '50%'; tooltipPos.transform = 'translateY(-50%)'; }
          else if (dir === 'down') { tooltipPos.top = '30px'; tooltipPos.left = '50%'; tooltipPos.transform = 'translateX(-50%)'; }
          else { tooltipPos.bottom = '30px'; tooltipPos.left = '50%'; tooltipPos.transform = 'translateX(-50%)'; }

          return (
            <div
              key={ann.id}
              className="absolute z-10"
              style={{ left: `${ann.x}%`, top: `${ann.y}%`, transform: 'translate(-50%, -50%)' }}
              onClick={e => { e.stopPropagation(); toggleMarker(ann.id); }}
            >
              {/* Marker */}
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
                  style={{ color: 'white', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.8))' }}
                />
              )}

              {/* Tooltip — Figma design 189:664 */}
              {isOpen && (
                <div
                  className="absolute z-20"
                  style={{ ...tooltipPos, width: '300px' }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* White header — steps only */}
                  {ann.type === 'step' && (
                    <div className="px-3 py-1.5" style={{ background: 'white', borderRadius: '4px 4px 0 0' }}>
                      <input
                        value={ann.title}
                        onChange={e => updateAnn(ann.id, { title: e.target.value })}
                        placeholder="Step title..."
                        autoFocus
                        className="w-full bg-transparent focus:outline-none"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', fontWeight: 600, color: '#0d0e24' }}
                        onClick={e => e.stopPropagation()}
                      />
                    </div>
                  )}
                  {/* Dark body */}
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      border: '1px solid white',
                      borderRadius: ann.type === 'step' ? '0 0 4px 4px' : '4px',
                      boxShadow: '2px 2px 0px 0px #0d0e24',
                      padding: '12px 13px',
                    }}
                  >
                    <textarea
                      value={ann.text}
                      onChange={e => updateAnn(ann.id, { text: e.target.value })}
                      placeholder={ann.type === 'step' ? 'Describe this step…' : 'Add a note…'}
                      autoFocus={ann.type === 'note'}
                      rows={3}
                      className="w-full bg-transparent text-white placeholder-white/30 focus:outline-none resize-none"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', lineHeight: '1.35' }}
                      onClick={e => e.stopPropagation()}
                    />
                    {/* Footer: timestamps + delete */}
                    <div
                      className="flex items-center gap-2 pt-2 mt-1"
                      style={{ borderTop: '1px solid rgba(128,128,128,0.5)' }}
                    >
                      <Timer className="h-4 w-4 text-white flex-shrink-0" />
                      {isVideo && ann.startTime !== undefined ? (
                        <div className="flex items-center gap-1">
                          <TimeInput value={ann.startTime} onChange={v => updateAnn(ann.id, { startTime: v })} />
                          <span className="text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px' }}> – </span>
                          <TimeInput
                            value={ann.endTime != null ? ann.endTime : ann.startTime + 10}
                            onChange={v => updateAnn(ann.id, { endTime: v })}
                          />
                        </div>
                      ) : (
                        <span className="text-white/30" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px' }}>
                          No timestamp
                        </span>
                      )}
                      <div className="flex-1" />
                      <button
                        onClick={e => { e.stopPropagation(); deleteAnn(ann.id); }}
                        className="text-white/40 hover:text-red-400 transition-colors"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Video controls */}
      {isVideo && (
        <div className="bg-black px-6 py-2 flex flex-col gap-2 flex-shrink-0">
          {/* Progress bar with annotation dots */}
          <div
            className="relative h-4 flex items-center cursor-pointer"
            onClick={(e) => {
              if (!videoRef.current || !duration) return;
              const rect = e.currentTarget.getBoundingClientRect();
              videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration;
            }}
          >
            <div className="absolute w-full h-2 rounded-[10px] bg-[#c8c8c8]" />
            <div className="absolute h-2 rounded-[10px] bg-red-500" style={{ width: duration ? `${(currentTime / duration) * 100}%` : '0%' }} />
            {duration > 0 && (
              <div className="absolute w-3 h-3 bg-red-500 rounded-full -translate-x-1/2 shadow" style={{ left: `${(currentTime / duration) * 100}%` }} />
            )}
            {/* Dots for each annotation on progress bar */}
            {duration > 0 && annotations.filter(a => a.startTime !== undefined).map(ann => (
              <div
                key={ann.id}
                className="absolute w-2 h-2 rounded-full pointer-events-none"
                style={{
                  left: `${((ann.startTime ?? 0) / duration) * 100}%`,
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
              <button onClick={togglePlay} className="flex items-center justify-center w-[35px] h-[35px] text-white hover:text-white/70 transition-colors">
                {isPlaying ? <Pause size={22} weight="fill" /> : <Play size={22} weight="fill" />}
              </button>
              <button className="flex items-center justify-center w-[35px] h-[35px] text-white hover:text-white/70 transition-colors">
                <SpeakerHigh size={22} />
              </button>
              <div className="flex items-center px-3 h-[35px] rounded-[48px]" style={{ background: 'rgba(40,40,40,0.6)' }}>
                <span className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}>
                  {formatTime(currentTime)} / {formatTime(duration || 0)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center px-5 h-[35px] w-[60px] rounded-[48px]" style={{ background: 'rgba(40,40,40,0.6)' }}>
              {isFs ? (
                <ArrowsIn
                  size={20}
                  className="text-white cursor-pointer hover:text-white/70"
                  onClick={exitFullscreen}
                />
              ) : (
                <ArrowsOut
                  size={20}
                  className="text-white cursor-pointer hover:text-white/70"
                  onClick={enterFullscreen}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return pseudoFs ? createPortal(playerContent, document.body) : playerContent;
}

function InstructionSections({
  steps, setSteps, addStep, deleteStep, updateStep, addStepImage,
}: {
  steps: Step[];
  setSteps: React.Dispatch<React.SetStateAction<Step[]>>;
  addStep: () => void;
  deleteStep: (id: string) => void;
  updateStep: (id: string, content: string) => void;
  addStepImage: (id: string, file: File) => void;
}) {
  const [draggingOver, setDraggingOver] = useState<string | null>(null);

  const handleDrop = (id: string, e: React.DragEvent) => {
    e.preventDefault();
    setDraggingOver(null);
    const file = e.dataTransfer.files?.[0];
    if (file) addStepImage(id, file);
  };

  const hasMedia = (step: Step) => !!(step.image || step.imageUrl);

  const submitText = (id: string) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, textSubmitted: true } : s));
  };

  const editText = (id: string) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, textSubmitted: false } : s));
  };

  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.id} className="relative">
          {/* Floating delete button — only when more than one section */}
          {steps.length > 1 && (
            <div className="flex justify-end mb-2">
              <button onClick={() => deleteStep(step.id)} className="text-white/30 hover:text-red-400 transition-colors">
                <Trash className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          {hasMedia(step) ? (
            /* ── Detailed View (after file upload) ── */
            <SectionDetailedView
              step={step}
              onAnnotationsChange={(annotations) =>
                setSteps(prev => prev.map(s => s.id === step.id ? { ...s, annotations } : s))
              }
              onRemoveFile={() => addStepImage(step.id, null as any)}
            />
          ) : step.textSubmitted && step.content.trim() ? (
            /* ── Text Section (after submission) ── */
            <div
              className="rounded-[2px] relative p-5"
              style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="absolute top-2 right-2 flex items-center gap-1">
                <button
                  onClick={() => editText(step.id)}
                  className="w-7 h-7 flex items-center justify-center text-[#717182] hover:text-[#0d0e24] hover:bg-black/5 rounded-[2px] transition-colors"
                  aria-label="Edit text"
                >
                  <PencilSimple className="h-3.5 w-3.5" weight="bold" />
                </button>
              </div>
              <p
                className="whitespace-pre-wrap pr-8"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: '1.6',
                  color: '#0d0e24',
                  margin: 0,
                }}
              >
                {step.content}
              </p>
            </div>
          ) : (
            /* ── Drop Zone ── */
            <div
              className={`rounded-[2px] transition-all border-[3px] ${draggingOver === step.id ? 'border-[#1782FF]' : 'border-[rgba(255,255,255,0.4)]'}`}
              style={{ borderStyle: 'dashed', background: 'rgba(3,2,19,0.5)' }}
            >
              <div className="flex flex-col sm:flex-row items-stretch gap-4 p-6">
                {/* Left: Drop zone */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-3"
                  onDragOver={(e) => { e.preventDefault(); setDraggingOver(step.id); }}
                  onDragLeave={() => setDraggingOver(null)}
                  onDrop={(e) => handleDrop(step.id, e)}
                >
                  <div className="flex items-center gap-3 text-[#fafafa]">
                    <ImageIcon size={24} weight="light" />
                    <File size={24} weight="light" />
                    <FilmStrip size={24} weight="light" />
                  </div>
                  <p className="text-[#fafafa]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}>
                    Drag &amp; Drop File
                  </p>
                  <p className="text-[#bebec8]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}>
                    .jpg, .png, .mp4, .wmv, .mov
                  </p>
                  <input
                    type="file"
                    id={`section-file-${step.id}`}
                    accept="image/jpeg,image/png,video/mp4,video/x-ms-wmv,video/quicktime"
                    className="hidden"
                    onChange={(e) => { if (e.target.files?.[0]) addStepImage(step.id, e.target.files[0]); }}
                  />
                  <button
                    onClick={() => document.getElementById(`section-file-${step.id}`)?.click()}
                    className="mt-1 px-4 h-8 bg-[#060930] border border-[rgba(255,255,255,0.5)] text-white hover:bg-[#0A0F4A] transition-colors rounded-[2px]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6875rem', letterSpacing: '-0.02em' }}
                  >
                    Browse Files
                  </button>
                </div>

                {/* OR divider */}
                <div className="flex sm:flex-col items-center justify-center">
                  <div className="hidden sm:block w-px flex-1" style={{ background: 'rgba(190,190,200,0.2)' }} />
                  <div
                    className="flex items-center justify-center mx-3 sm:mx-0 w-[30px] h-[34px] shrink-0"
                    style={{ background: '#030213', borderTop: '1px solid rgba(190,190,200,0.2)', borderBottom: '1px solid rgba(190,190,200,0.2)' }}
                  >
                    <span className="text-[#bebec8]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>OR</span>
                  </div>
                  <div className="hidden sm:block w-px flex-1" style={{ background: 'rgba(190,190,200,0.2)' }} />
                  <div className="block sm:hidden flex-1 h-px" style={{ background: 'rgba(190,190,200,0.2)' }} />
                </div>

                {/* Right: Text area with submit button */}
                <div className="flex-1 relative">
                  <textarea
                    value={step.content}
                    onChange={(e) => updateStep(step.id, e.target.value)}
                    placeholder="Add a text step"
                    className="w-full h-full min-h-[132px] px-4 py-3 pr-10 resize-none focus:outline-none rounded-[2px] bg-[#060930] text-[rgba(250,250,250,0.5)] placeholder-[rgba(250,250,250,0.5)] focus:bg-white focus:text-[#0d0e24] focus:placeholder-[#717182] border border-[rgba(190,190,200,0.2)] focus:border-[#1782FF] transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}
                  />
                  <button
                    onClick={() => step.content.trim() && submitText(step.id)}
                    disabled={!step.content.trim()}
                    aria-label="Submit text section"
                    className="absolute bottom-3 right-3 w-7 h-7 rounded-full flex items-center justify-center transition-all disabled:cursor-not-allowed"
                    style={{
                      background: step.content.trim()
                        ? 'linear-gradient(135deg, #1782FF 0%, #B02BED 100%)'
                        : 'rgba(113, 113, 130, 0.6)',
                      boxShadow: step.content.trim() ? '0 2px 8px rgba(23, 130, 255, 0.4)' : 'none',
                    }}
                  >
                    <ArrowUp className="h-3.5 w-3.5 text-white" weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Add Another Section */}
      <button
        onClick={addStep}
        className="w-full h-9 flex items-center justify-center gap-2 bg-[#060930] border border-[rgba(255,255,255,0.5)] text-white hover:bg-[#0A0F4A] transition-colors rounded-[2px]"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
      >
        <Plus className="h-4 w-4" weight="bold" />
        ADD ANOTHER SECTION
      </button>
    </div>
  );
}

// Mode-dependent content config
const modeConfig: Record<ProjectFormMode, { badge: string; headline: string; glitch: string; submitLabel: string }> = {
  create: { badge: 'CREATE A PROJECT', headline: "Let's Get", glitch: 'Building', submitLabel: 'PUBLISH PROJECT' },
  edit:   { badge: 'EDIT PROJECT',     headline: 'Refine Your',  glitch: 'Build',    submitLabel: 'UPDATE PROJECT' },
  duplicate: { badge: 'DUPLICATE PROJECT', headline: 'Clone Your', glitch: 'Build', submitLabel: 'PUBLISH PROJECT' },
  draft:  { badge: 'CONTINUE DRAFT',  headline: "Let's Keep",  glitch: 'Building', submitLabel: 'PUBLISH PROJECT' },
};

export function CreateProjectPage2({ mode = 'create', initialData }: CreateProjectPageProps) {
  const navigate = useNavigate();
  const config = modeConfig[mode];

  const [projectTitle, setProjectTitle] = useState(initialData?.projectTitle ?? '');
  const [description, setDescription] = useState(initialData?.description ?? '');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.selectedCategories ?? []);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const [experienceLevel, setExperienceLevel] = useState(initialData?.experienceLevel ?? '');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverImageUrl, setCoverImageUrl] = useState<string | undefined>(initialData?.coverImageUrl);
  const [youtubeLink, setYoutubeLink] = useState(initialData?.youtubeLink ?? '');
  const [steps, setSteps] = useState<Step[]>(
    initialData?.steps?.length
      ? initialData.steps.map((s) => ({ id: s.id, content: s.content, imageUrl: s.imageUrl, image: null }))
      : [{ id: 'step-1', content: '' }]
  );
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>(
    initialData?.shoppingItems?.length
      ? initialData.shoppingItems
      : [{ id: 'item-1', name: '', quantity: '', link: '' }]
  );
  const [dragActive, setDragActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(true);
  const [shoppingListOpen, setShoppingListOpen] = useState(true);
  const stepCounter = useRef(initialData?.steps?.length ?? 1);
  const itemCounter = useRef(initialData?.shoppingItems?.length ?? 1);

  // Detect touch device for DnD backend
  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  const dndBackend = isTouchDevice ? TouchBackend : HTML5Backend;
  const dndOptions = isTouchDevice ? { enableMouseEvents: true } : undefined;

  // Close category dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setCoverFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const addStep = () => {
    stepCounter.current += 1;
    const newStep: Step = {
      id: `step-${stepCounter.current}`,
      content: ''
    };
    setSteps([...steps, newStep]);
  };

  const updateStep = (id: string, content: string) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, content } : step
    ));
  };

  const deleteStep = (id: string) => {
    if (steps.length > 1) {
      setSteps(steps.filter(step => step.id !== id));
    }
  };

  const addStepImage = (id: string, file: File) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, image: file } : step
    ));
  };

  const addShoppingItem = () => {
    itemCounter.current += 1;
    const newItem: ShoppingItem = {
      id: `item-${itemCounter.current}`,
      name: '',
      quantity: '',
      link: ''
    };
    setShoppingItems([...shoppingItems, newItem]);
  };

  const updateShoppingItem = (id: string, field: keyof ShoppingItem, value: string) => {
    setShoppingItems(shoppingItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const deleteShoppingItem = (id: string) => {
    if (shoppingItems.length > 1) {
      setShoppingItems(shoppingItems.filter(item => item.id !== id));
    }
  };

  const moveStep = useCallback((dragIndex: number, hoverIndex: number) => {
    setSteps((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, removed);
      return updated;
    });
  }, []);

  const moveShoppingItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setShoppingItems((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, removed);
      return updated;
    });
  }, []);

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    console.log('Submitting project:', { mode, projectTitle, description, selectedCategories, experienceLevel });
    navigate('/project/123');
  };

  const handleSaveDraft = () => {
    // In a real app, this would persist the draft state
    console.log('Draft saved:', { projectTitle, description });
    navigate('/create-project/draft/123');
  };

  return (
    <>
      {/* Grid Background */}
      <div 
        className="fixed inset-0 z-0 opacity-100 dark:opacity-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${gridBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div 
        className="fixed inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${darkGridBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dust and Cloud Animation Layer */}
      <MoonDustBackground className="z-[1]" showBackground={false} />
      
      <NewHeader />
      
      <DndProvider backend={dndBackend} options={dndOptions}>
      <div className="min-h-screen w-full relative pt-16">
        <div className="relative z-10 w-full">
          <section className="py-6 sm:py-12 min-h-screen relative">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-3 gap-4 sm:gap-8 overflow-visible">
                {/* Main Content */}
                <div className="lg:col-span-2 min-w-0 overflow-visible">
                  {/* Header */}
                  <motion.div
                    className="mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="mb-3">
                      <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4">
                        <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">{config.badge}</span>
                      </div>
                    </div>
                    <h1 className="font-normal text-[40px] tracking-tight uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", lineHeight: '1.1' }}>
                      {config.headline}{' '}
                      <GlitchText 
                        className="gradient-text" 
                        style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900 }}
                      >
                        {config.glitch}
                      </GlitchText>
                    </h1>
                  </motion.div>

                  {/* Quick Actions - shown in edit/duplicate/draft modes */}
                  {mode !== 'create' && (
                    <motion.div
                      className="flex justify-start sm:justify-end gap-3 mb-6"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      <Button
                        className="bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em', fontSize: '0.8125rem' }}
                        onClick={() => navigate('/create-project/duplicate/123')}
                      >
                        <CopySimple className="mr-2 h-4 w-4 hidden sm:inline" weight="bold" />
                        DUPLICATE PROJECT
                      </Button>
                      <Button
                        className="bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em', fontSize: '0.8125rem' }}
                        onClick={() => navigate('/create-project/edit/123')}
                      >
                        <GitBranch className="mr-2 h-4 w-4 hidden sm:inline" weight="bold" />
                        CREATE NEW VERSION
                      </Button>
                    </motion.div>
                  )}

                  {/* Project Basics Form */}
                  <motion.div
                    className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-4 sm:p-6 mb-6 rounded-[2px] overflow-visible"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <h2 className="mb-6" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
                      Project Basics
                    </h2>

                    {/* Project Title */}
                    <div className="mb-8">
                      <label 
                        className="block mb-2"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                      >
                        PROJECT TITLE *
                      </label>
                      <input
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="Enter your project title"
                        className="w-full px-4 py-3 border border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                        style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                      />
                    </div>

                    {/* Project Description */}
                    <div className="mb-8">
                      <label 
                        className="block mb-2"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                      >
                        PROJECT DESCRIPTION *
                      </label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe your project in detail"
                        className="w-full min-h-[120px] px-4 py-3 border border-border bg-background focus:border-[#1782FF] focus:outline-none resize-y transition-colors rounded-[2px]"
                        style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}
                      />
                    </div>

                    {/* Category and Experience Level */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {/* Category Dropdown */}
                      <div>
                        <label 
                          htmlFor="category-select"
                          className="block mb-2"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                        >
                          CATEGORY *
                        </label>
                        <div className="relative" ref={categoryDropdownRef}>
                          <button
                            id="category-select"
                            type="button"
                            className={`w-full px-4 py-3 border-2 bg-background focus:outline-none transition-colors rounded-[2px] flex items-center justify-between text-left ${categoryDropdownOpen ? 'border-[#1782FF]' : 'border-border'}`}
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                            onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                          >
                            <span className={`truncate ${selectedCategories.length === 0 ? 'text-muted-foreground' : ''}`}>
                              {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Select categories'}
                            </span>
                            <CaretDown className={`h-4 w-4 flex-shrink-0 ml-2 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {categoryDropdownOpen && (
                            <div
                              className="absolute z-50 mt-1 w-full bg-background border border-border rounded-[2px] shadow-lg max-h-[240px] overflow-y-auto"
                            >
                              <div className="py-1">
                                {categories.map((category) => {
                                  const isSelected = selectedCategories.includes(category);
                                  return (
                                    <button
                                      key={category}
                                      type="button"
                                      className={`flex items-center gap-2.5 w-full px-3 py-2 text-left cursor-pointer transition-colors ${isSelected ? 'bg-[#1782FF]/10 text-[#1782FF]' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8125rem', letterSpacing: '-0.02em' }}
                                      onClick={() => toggleCategory(category)}
                                    >
                                      {isSelected ? (
                                        <CheckSquare className="h-4 w-4 text-[#1782FF] flex-shrink-0" weight="fill" />
                                      ) : (
                                        <Square className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                      )}
                                      {category}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div>
                        <label 
                          htmlFor="experience-select"
                          className="block mb-2"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                        >
                          EXPERIENCE LEVEL *
                        </label>
                        <select
                          id="experience-select"
                          value={experienceLevel}
                          onChange={(e) => setExperienceLevel(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                        >
                          <option value="">Select level</option>
                          {experienceLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Cover Image/Video Upload */}
                    <div className="mb-4">
                      <label 
                        className="block mb-2"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                      >
                        COVER IMAGE / VIDEO *
                      </label>
                      
                      {/* Horizontal Layout */}
                      <div 
                        className={`relative p-8 rounded-[2px] min-h-[196px] transition-all border-[3px] ${
                          dragActive 
                            ? 'border-[#1782FF] bg-[#1782FF]/5' 
                            : isHovering
                            ? 'border-white/90 bg-background/50'
                            : 'border-white/40 bg-background/50'
                        }`}
                        style={{
                          borderStyle: 'dashed',
                          borderSpacing: '8px'
                        }}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
                          {/* Drag & Drop Section */}
                          <div 
                            className="flex flex-col items-center justify-center gap-3 p-6 flex-1"
                          >
                            {coverFile ? (
                              <>
                                {coverFile.type.startsWith('video/') ? (
                                  <FilmStrip size={32} weight="fill" className="text-[#1782FF]" />
                                ) : coverFile.type.startsWith('image/') ? (
                                  <ImageIcon size={32} weight="fill" className="text-[#1782FF]" />
                                ) : (
                                  <File size={32} weight="fill" className="text-[#1782FF]" />
                                )}
                                <p className="text-sm text-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                  {coverFile.name.length > 20 ? coverFile.name.substring(0, 20) + '...' : coverFile.name}
                                </p>
                                <button
                                  onClick={() => setCoverFile(null)}
                                  className="text-red-500 hover:text-red-600 text-xs underline"
                                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                                >
                                  Remove
                                </button>
                              </>
                            ) : coverImageUrl ? (
                              <>
                                <div className="w-full max-w-[200px] aspect-video rounded-[2px] overflow-hidden border border-[#1782FF]/40">
                                  <ImageWithFallback src={coverImageUrl} alt="Current cover" className="w-full h-full object-cover" />
                                </div>
                                <p className="text-xs text-[#1782FF]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                  CURRENT COVER IMAGE
                                </p>
                                <div className="flex gap-2">
                                  <input
                                    type="file"
                                    id="cover-upload"
                                    accept="image/*,video/*"
                                    onChange={handleFileInput}
                                    className="hidden"
                                  />
                                  <Button
                                    size="sm"
                                    onClick={() => document.getElementById('cover-upload')?.click()}
                                    className="bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em', fontSize: '0.6875rem' }}
                                  >
                                    Replace
                                  </Button>
                                  <button
                                    onClick={() => setCoverImageUrl(undefined)}
                                    className="text-red-500 hover:text-red-600 text-xs underline"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex gap-3">
                                  <ImageIcon size={24} weight="regular" className="text-muted-foreground" />
                                  <File size={24} weight="regular" className="text-muted-foreground" />
                                  <FilmStrip size={24} weight="regular" className="text-muted-foreground" />
                                </div>
                                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem' }}>
                                  Drag & Drop File
                                </p>
                                <p className="text-xs text-muted-foreground" style={{ fontFamily: "'PP Monument', sans-serif" }}>
                                  .jpg, .png, .mp4, .wmv, .mov
                                </p>
                                <input
                                  type="file"
                                  id="cover-upload"
                                  accept="image/*,video/*"
                                  onChange={handleFileInput}
                                  className="hidden"
                                />
                                <Button
                                  size="sm"
                                  onClick={() => document.getElementById('cover-upload')?.click()}
                                  className="mt-1 bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                                  style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em', fontSize: '0.6875rem' }}
                                >
                                  Browse Files
                                </Button>
                              </>
                            )}
                          </div>

                          {/* Mobile Horizontal Divider */}
                          <div className="md:hidden w-full flex items-center gap-2">
                            <div className="flex-1 h-px bg-border" />
                            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                              OR
                            </span>
                            <div className="flex-1 h-px bg-border" />
                          </div>

                          {/* OR Divider - Desktop */}
                          <div className="hidden md:flex flex-col items-center">
                            <div className="h-20 w-px bg-border" />
                            <div className="bg-background border-y border-border px-2 py-1">
                              <span className="text-xs text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                OR
                              </span>
                            </div>
                            <div className="h-20 w-px bg-border" />
                          </div>

                          {/* YouTube URL Section */}
                          <div className="flex flex-col items-center justify-center gap-3 flex-1 p-6">
                            <div className="relative w-[120px] h-[26px]">
                              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95 21">
                                <g>
                                  <path clipRule="evenodd" d={svgPaths.p158fe4f0} fill="currentColor" fillRule="evenodd" className="text-foreground" />
                                  <path clipRule="evenodd" d={svgPaths.p2c34bb00} fill="currentColor" fillRule="evenodd" className="text-background" />
                                  <g>
                                    <path clipRule="evenodd" d={svgPaths.p2d7d2200} fill="currentColor" fillRule="evenodd" className="text-foreground" />
                                    <path clipRule="evenodd" d={svgPaths.p382be680} fill="currentColor" fillRule="evenodd" className="text-foreground" />
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <input
                              type="url"
                              value={youtubeLink}
                              onChange={(e) => setYoutubeLink(e.target.value)}
                              placeholder="YouTube URL"
                              className="w-full max-w-xs px-3 py-2 border border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Detailed Instructions Section */}
                  <motion.div
                    className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] mb-6 rounded-[2px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <button
                      onClick={() => setInstructionsOpen(!instructionsOpen)}
                      className="w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-3 flex items-center justify-between hover:bg-muted/20 transition-colors border-b border-white/30 dark:border-white/10 rounded-[2px]"
                    >
                      <div className="flex items-center gap-3">
                        <ListChecks size={24} weight="fill" className="text-[#1782FF] sm:w-7 sm:h-7" />
                        <h2 style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
                          Detailed Instructions
                        </h2>
                      </div>
                      <CaretDown 
                        className={`h-5 w-5 transition-transform ${instructionsOpen ? 'rotate-180' : ''}`}
                      />
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
                          <div className="p-4 sm:p-6">
                            <InstructionSections
                              steps={steps}
                              setSteps={setSteps}
                              addStep={addStep}
                              deleteStep={deleteStep}
                              updateStep={updateStep}
                              addStepImage={addStepImage}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Shopping List Section */}
                  <motion.div
                    className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] mb-6 rounded-[2px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <button
                      onClick={() => setShoppingListOpen(!shoppingListOpen)}
                      className="w-full pt-4 sm:pt-6 px-4 sm:px-6 pb-2 sm:pb-3 flex items-center justify-between hover:bg-muted/20 transition-colors border-b border-white/30 dark:border-white/10 rounded-[2px]"
                    >
                      <div className="flex items-center gap-3">
                        <Basket size={24} weight="fill" className="text-[#1782FF] sm:w-7 sm:h-7" />
                        <h2 style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
                          Shopping List
                        </h2>
                      </div>
                      <CaretDown 
                        className={`h-5 w-5 transition-transform ${shoppingListOpen ? 'rotate-180' : ''}`}
                      />
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
                          <div className="p-4 sm:p-6">

                    <div className="space-y-4">
                      {shoppingItems.map((item, index) => (
                        <DraggableItem key={item.id} id={item.id} index={index} type="SHOPPING_ITEM" moveItem={moveShoppingItem}>
                          <div className="border border-border p-4 rounded-[2px]">
                            <div className="flex items-center justify-between mb-3">
                              <label 
                                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                              >
                                ITEM {index + 1}
                              </label>
                              {shoppingItems.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => deleteShoppingItem(item.id)}
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                                >
                                  <Trash className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid sm:grid-cols-2 gap-3 mb-3">
                              <div>
                                <label 
                                  className="block mb-1.5 text-xs text-muted-foreground"
                                  style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                                >
                                  PRODUCT NAME
                                </label>
                                <input
                                  type="text"
                                  value={item.name}
                                  onChange={(e) => updateShoppingItem(item.id, 'name', e.target.value)}
                                  placeholder="e.g., Arduino Mega 2560"
                                  className="w-full px-3 py-2 border border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                                  style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem' }}
                                />
                              </div>
                              <div>
                                <label 
                                  className="block mb-1.5 text-xs text-muted-foreground"
                                  style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                                >
                                  QUANTITY
                                </label>
                                <input
                                  type="text"
                                  value={item.quantity}
                                  onChange={(e) => updateShoppingItem(item.id, 'quantity', e.target.value)}
                                  placeholder="e.g., 2"
                                  className="w-full px-3 py-2 border border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                                  style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem' }}
                                />
                              </div>
                            </div>

                            <div>
                              <label 
                                className="block mb-1.5 text-xs text-muted-foreground"
                                style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                              >
                                LINK TO STORE
                              </label>
                              <input
                                type="url"
                                value={item.link}
                                onChange={(e) => updateShoppingItem(item.id, 'link', e.target.value)}
                                placeholder="https://store.com/product"
                                className="w-full px-3 py-2 border border-border bg-background focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                                style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem' }}
                              />
                            </div>
                          </div>
                        </DraggableItem>
                      ))}
                    </div>

                    <Button
                      onClick={addShoppingItem}
                      className="w-full mt-4 bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                    >
                      <Plus className="mr-2 h-4 w-4" weight="bold" />
                      ADD AN ITEM
                    </Button>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Button
                      className="flex-1 bg-gray-100 dark:bg-[#060930] text-foreground dark:text-white border border-gray-300 dark:border-white/50 hover:bg-gray-200 dark:hover:bg-[#0A0F4A] rounded-[2px]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                      onClick={handleSaveDraft}
                    >
                      SAVE DRAFT
                    </Button>
                    <Button
                      className="flex-1 text-white relative overflow-hidden group"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                      onClick={handleSubmit}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="relative z-10">{config.submitLabel}</span>
                    </Button>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="lg:sticky lg:top-6 space-y-6">
                    {/* Creator Bio */}
                    <div className="block lg:hidden mt-2 pt-6" />
                    <motion.div
                      className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6 rounded-[2px]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="mb-4 gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                        YOUR PROFILE
                      </h3>

                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                            <ImageWithFallback 
                              src={creator.avatar}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 700 }}>
                              {creator.name}
                            </div>
                            <div className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                              {creator.projectCount} PROJECTS
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                          {creator.bio}
                        </p>

                        <div className="flex gap-3 mb-4">
                          <a 
                            href={creator.socials.twitter}
                            className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors rounded-[2px]"
                            aria-label="Twitter"
                          >
                            <TwitterLogo className="h-4 w-4" />
                          </a>
                          <a 
                            href={creator.socials.github}
                            className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors rounded-[2px]"
                            aria-label="GitHub"
                          >
                            <GithubLogo className="h-4 w-4" />
                          </a>
                          <a 
                            href={creator.socials.website}
                            className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors rounded-[2px]"
                            aria-label="Website"
                          >
                            <Globe className="h-4 w-4" />
                          </a>
                        </div>

                        <Link to="/edit-profile" className="w-full">
                          <Button 
                            className="w-full text-white relative overflow-hidden group transition-opacity"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                          >
                            <div
                              className="absolute inset-0"
                              style={{
                                background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                              }}
                            />
                            <div
                              className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <span className="relative z-10 flex items-center justify-center">
                              <User className="mr-2 h-4 w-4" weight="bold" />
                              EDIT YOUR PROFILE
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    {/* Get Paid Section */}
                    <motion.div
                      className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6 rounded-[2px]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="mb-4 gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                        GET PAID
                      </h3>

                      <p className="text-muted-foreground mb-4" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                        Connect your bank account to receive payments from makers who support your projects.
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          className="w-full text-white border-none relative overflow-hidden group"
                          style={{ 
                            fontFamily: "'IBM Plex Mono', monospace", 
                            letterSpacing: '-0.02em',
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
                          }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(135deg, #10B981, #1782FF, #10B981, #1782FF)',
                              backgroundSize: '300% 300%',
                            }}
                            animate={{
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                          <Plus className="mr-2 h-5 w-5 relative z-10" weight="bold" />
                          <span className="relative z-10">ADD YOUR BANK DETAILS</span>
                        </Button>
                      </motion.div>

                      <div className="mt-3 flex items-center justify-center gap-2">
                        <span className="text-muted-foreground italic" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.75rem' }}>
                          Powered by
                        </span>
                        <svg className="h-4" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill="currentColor"/>
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <NewFooter />
        </div>
      </div>
      </DndProvider>
    </>
  );
}