import { useState } from 'react';
import coffeeMakerImg from '@/assets/3d_coffee.webp';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { CategoryBadge } from '../components/CategoryBadge';
import { AnimatedBorderCard } from '../components/AnimatedBorderCard';
import {
  TrendUp,
  ChatCircle,
  Heart,
  Users,
  Star,
  CaretDown,
  Lightning,
  ArrowUp,
  Clock,
  Eye,
  BookmarkSimple,
  Share,
  Rocket,
  Fire,
  Bell,
  CurrencyDollar,
  UserPlus,
  ArrowRight,
  Megaphone,
  PencilSimple,
  PaperPlaneTilt,
  Image,
  ThumbsUp,
  HandWaving,
} from '@phosphor-icons/react';

// ─── Types ───────────────────────────────────────────────────────────
type FeedFilter = 'new' | 'following';
type FeedCardType = 'new_project' | 'updated_project' | 'trending_project' | 'milestone' | 'community_challenge' | 'weekly_roundup' | 'creator_post';

type CreatorPostType = 'New Project' | 'Project Update' | 'Announcement' | 'Shameless Self-Promotion';

interface FeedItem {
  id: string;
  type: FeedCardType;
  timestamp: string;
  // Project fields
  projectTitle?: string;
  projectImage?: string;
  projectCategory?: string;
  projectDescription?: string;
  projectDifficulty?: string;
  projectId?: string;
  versionNote?: string;
  version?: string;
  // Creator fields
  creatorName?: string;
  creatorAvatar?: string;
  creatorId?: string;
  creatorBio?: string;
  creatorCategories?: string[];
  creatorProjectCount?: number;
  creatorFollowers?: number;
  // Engagement
  comments?: number;
  hearts?: number;
  backers?: number;
  views?: number;
  // Trending reason
  trendingReason?: string;
  // Milestone
  milestoneText?: string;
  milestoneIcon?: string;
  // Challenge
  challengeTitle?: string;
  challengeDescription?: string;
  challengeDeadline?: string;
  challengeParticipants?: number;
  // Weekly roundup
  roundupProjects?: { title: string; image: string; category: string }[];
  // Creator post
  creatorPostType?: CreatorPostType;
  creatorPostContent?: string;
  creatorPostImage?: string;
}

interface SidebarCreator {
  id: string;
  name: string;
  avatar: string;
  categories: string[];
  followers: number;
}

interface SidebarProject {
  id: string;
  title: string;
  image: string;
  category: string;
  creator: string;
  hearts: number;
}

// ─── Categories ──────────────────────────────────────────────────────
const categories = [
  'ALL CATEGORIES',
  'ROBOTICS',
  '3D PRINTING',
  'RASPBERRY PI',
  'CODING',
  'ELECTRONICS',
  'CNC & LASER',
  'DRONES',
  'IOT & SMART HOME',
];

// ─── Post Type Filters ───────────────────────────────────────────────
const postTypeFilters = [
  'ALL POST TYPES',
  'NEW PROJECT',
  'PROJECT UPDATE',
  'ANNOUNCEMENT',
  'SHAMELESS SELF-PROMOTION',
  'TRENDING',
  'MILESTONE',
  'CHALLENGES',
  'TOP PROJECTS',
];

// ─── Mock Data ───────────────────────────────────────────────────────
const feedItems: FeedItem[] = [
  {
    id: '10',
    type: 'creator_post',
    timestamp: '3 hours ago',
    creatorName: 'Sarah Chen',
    creatorAvatar: 'https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'sarah',
    projectTitle: '3D Printed Planetary Gear Train',
    projectImage: 'https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: '3D PRINTING',
    projectDescription: 'Design and 3D print a fully functional planetary gear train with customizable ratios. Includes parametric OpenSCAD files and FDM-optimized tolerances.',
    projectDifficulty: 'INTERMEDIATE',
    projectId: '108',
    creatorPostType: 'Project Update',
    version: 'v3.0',
    creatorPostContent: 'Just finished a major revision to the gear tolerances — prints are now buttery smooth on any FDM printer down to 0.2mm layer height. Also added a parametric OpenSCAD version so you can customize the gear ratios. Check it out!',
    comments: 34,
    hearts: 156,
    backers: 22,
    views: 890,
  },
  {
    id: '2',
    type: 'trending_project',
    timestamp: '4 hours ago',
    projectTitle: 'Custom Mechanical Keyboard from Scratch',
    projectImage: 'https://images.unsplash.com/photo-1649269234922-3d3a6ed5ebb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'ELECTRONICS',
    projectDescription: 'Design and build a fully custom mechanical keyboard with hand-wired matrix, custom PCB, CNC aluminum case, and QMK firmware.',
    projectDifficulty: 'INTERMEDIATE',
    projectId: '102',
    creatorName: 'Jenny Park',
    creatorAvatar: 'https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'jenny',
    comments: 312,
    hearts: 891,
    backers: 156,
    views: 8420,
    trendingReason: '312 comments in 48 hours',
  },
  {
    id: '3',
    type: 'milestone',
    timestamp: '5 hours ago',
    milestoneText: 'The ARK community just passed 10,000 published projects! Thank you to every creator and maker who has contributed to making STEM knowledge accessible.',
    milestoneIcon: 'rocket',
  },
  {
    id: '4',
    type: 'updated_project',
    timestamp: '6 hours ago',
    projectTitle: 'Raspberry Pi Weather Station Network',
    projectImage: 'https://images.unsplash.com/photo-1682971829405-42b40b5f0895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'RASPBERRY PI',
    projectDescription: 'Connect multiple Pi-based weather stations into a mesh network with real-time dashboard and historical data analysis.',
    projectDifficulty: 'INTERMEDIATE',
    projectId: '103',
    version: 'v2.3',
    versionNote: 'Added LoRa radio support for long-range mesh networking between stations. New solar panel charging circuit included.',
    creatorName: 'Alex Rivera',
    creatorAvatar: 'https://images.unsplash.com/photo-1656313826909-1f89d1702a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'alex',
    comments: 89,
    hearts: 445,
    backers: 78,
    views: 3210,
  },
  {
    id: '6',
    type: 'community_challenge',
    timestamp: '12 hours ago',
    challengeTitle: 'March Maker Madness: Under $25 Robot Challenge',
    challengeDescription: 'Build the most creative autonomous robot using only $25 worth of components. Community votes determine the winner. Top 3 get featured on the homepage!',
    challengeDeadline: 'March 31, 2026',
    challengeParticipants: 347,
  },
  {
    id: '7',
    type: 'trending_project',
    timestamp: '14 hours ago',
    projectTitle: 'LED Matrix Art Display with Spotify Integration',
    projectImage: 'https://images.unsplash.com/photo-1705871433057-4bf8911f136f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'ELECTRONICS',
    projectDescription: 'A 64x64 LED matrix display that visualizes your currently playing Spotify track with custom pixel art album covers and audio-reactive effects.',
    projectDifficulty: 'INTERMEDIATE',
    projectId: '105',
    creatorName: 'Marcus Wong',
    creatorAvatar: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'marcus',
    comments: 198,
    hearts: 723,
    backers: 201,
    views: 6100,
    trendingReason: '201 new backers this week',
  },
  {
    id: '8',
    type: 'updated_project',
    timestamp: '18 hours ago',
    projectTitle: 'CNC Laser Engraver Conversion Kit',
    projectImage: 'https://images.unsplash.com/photo-1615553926216-31d23b97a564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'CNC & LASER',
    projectDescription: 'Convert a cheap 3018 CNC router into a powerful laser engraver with a diode laser module and custom GRBL firmware.',
    projectDifficulty: 'INTERMEDIATE',
    projectId: '106',
    version: 'v3.0',
    versionNote: 'Major update: Added rotary attachment plans for engraving cylindrical objects like tumblers and bottles.',
    creatorName: 'Jenny Park',
    creatorAvatar: 'https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'jenny',
    comments: 156,
    hearts: 567,
    backers: 89,
    views: 4500,
  },
  {
    id: '9',
    type: 'weekly_roundup',
    timestamp: '1 day ago',
    roundupProjects: [
      { title: 'Smart Home Hub v4', image: 'https://images.unsplash.com/photo-1739083168122-f1f59db99e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', category: 'IOT & SMART HOME' },
      { title: 'Soldering Practice Kit', image: 'https://images.unsplash.com/photo-1650530415027-dc9199f473ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', category: 'ELECTRONICS' },
      { title: '3D Printed Gear Train', image: 'https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400', category: '3D PRINTING' },
    ],
  },
  {
    id: '11',
    type: 'creator_post',
    timestamp: '8 hours ago',
    creatorName: 'Marcus Wong',
    creatorAvatar: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'marcus',
    projectTitle: '6-DOF Robot Arm with Computer Vision',
    projectImage: 'https://images.unsplash.com/photo-1768323102290-3b6ad7d1c5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'ROBOTICS',
    projectDescription: 'Build a fully articulated 6-degree-of-freedom robot arm with integrated camera and OpenCV object tracking. Includes 3D printed parts, Arduino control, and Python vision pipeline.',
    projectDifficulty: 'ADVANCED',
    projectId: '101',
    creatorPostType: 'Shameless Self-Promotion',
    creatorPostContent: 'Hey makers! \u{1F44B} I just hit 1,000 backers on my robot arm project and I\'m celebrating with a live build stream this Saturday at 2PM EST. Come hang out, ask questions, and watch me inevitably drop a tiny screw into the void. Link in my profile!',
    comments: 89,
    hearts: 312,
    backers: 1000,
    views: 5430,
  },
  {
    id: '12',
    type: 'creator_post',
    timestamp: '4 hours ago',
    creatorName: 'Priya Nair',
    creatorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'priya',
    projectCategory: 'ELECTRONICS',
    creatorPostType: 'Announcement',
    creatorPostContent: 'Almost there! \u{1F3C1} I\'ve been heads-down building a custom electronic device that displays live sports scores in real time \u2014 think minimal hardware, clean display, and zero lag. Just wrapping up final testing. Look forward to a new project next week!',
    comments: 47,
    hearts: 198,
  },
  {
    id: '13',
    type: 'creator_post',
    timestamp: '13 hours ago',
    creatorName: 'Jayden Phillips',
    creatorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'jayden',
    projectCategory: '3D PRINTING',
    creatorPostType: 'New Project',
    creatorPostImage: coffeeMakerImg,
    creatorPostContent: 'After months of designing, iterating, and refining, I\'m thrilled to share that my 3D printed coffee maker is officially in its final prototype stage! What started as a passion project has come a long way \u2014 from early sketches to a fully functional machine that actually brews a great cup. We\'re just two weeks away from launch, and I honestly couldn\'t be more excited to share the final product with everyone. Stay tuned \u2014 the best is almost here! \u2615 \uD83D\uDE80',
    comments: 62,
    hearts: 245,
  },
];

// Following feed
const followingFeedItems: FeedItem[] = [
  feedItems[3], // updated project from Alex
  feedItems[6], // updated project from Jenny
  {
    id: 'f1',
    type: 'new_project',
    timestamp: '3 hours ago',
    projectTitle: 'Smart Home Automation Hub v4.0',
    projectImage: 'https://images.unsplash.com/photo-1739083168122-f1f59db99e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
    projectCategory: 'IOT & SMART HOME',
    projectDescription: 'Complete redesign of the home automation hub with Matter protocol support, local voice control, and energy monitoring dashboard.',
    projectDifficulty: 'ADVANCED',
    projectId: '107',
    creatorName: 'Marcus Wong',
    creatorAvatar: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    creatorId: 'marcus',
    comments: 34,
    hearts: 156,
    backers: 22,
    views: 890,
  },
];

const sidebarCreators: SidebarCreator[] = [
  {
    id: 'sarah',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1712174766230-cb7304feaafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    categories: ['ROBOTICS', 'CODING'],
    followers: 3240,
  },
  {
    id: 'marcus',
    name: 'Marcus Wong',
    avatar: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    categories: ['RASPBERRY PI', 'IOT'],
    followers: 2180,
  },
  {
    id: 'jenny',
    name: 'Jenny Park',
    avatar: 'https://images.unsplash.com/photo-1729337531424-198f880cb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    categories: ['ELECTRONICS', 'CNC'],
    followers: 5670,
  },
  {
    id: 'alex',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1656313826909-1f89d1702a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    categories: ['3D PRINTING', 'DRONES'],
    followers: 1890,
  },
];

const sidebarProjects: SidebarProject[] = [
  {
    id: '201',
    title: 'Soldering Practice Board',
    image: 'https://images.unsplash.com/photo-1650530415027-dc9199f473ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    category: 'ELECTRONICS',
    creator: 'Sarah Chen',
    hearts: 234,
  },
  {
    id: '202',
    title: '3D Printed Gear Train',
    image: 'https://images.unsplash.com/photo-1739515054273-a2956b1e094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    category: '3D PRINTING',
    creator: 'Alex Rivera',
    hearts: 189,
  },
  {
    id: '203',
    title: 'CNC Wood Sign Maker',
    image: 'https://images.unsplash.com/photo-1764115424769-ebdd2683d5a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    category: 'CNC & LASER',
    creator: 'Jenny Park',
    hearts: 312,
  },
];

// ─── Helper Components ───────────────────────────────────────────────

// CategoryBadge is now imported from shared component

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  return (
    <span className="text-white/50" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', lineHeight: '16.8px' }}>
      {difficulty}
    </span>
  );
}

function EngagementBar({ comments, hearts, backers, views, difficulty, category }: { comments?: number; hearts?: number; backers?: number; views?: number; difficulty?: string; category?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#717182] dark:text-white/50" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
      {difficulty && <DifficultyBadge difficulty={difficulty} />}
      {hearts !== undefined && (
        <span className="flex items-center gap-1 shrink-0">
          <Heart className="h-3.5 w-3.5 shrink-0" weight="fill" /> {hearts.toLocaleString()}
        </span>
      )}
      {comments !== undefined && (
        <span className="flex items-center gap-1 shrink-0">
          <ChatCircle className="h-3.5 w-3.5 shrink-0" weight="fill" /> {comments.toLocaleString()}
        </span>
      )}
      {backers !== undefined && (
        <span className="flex items-center gap-1 shrink-0 hidden sm:flex">
          <CurrencyDollar className="h-3.5 w-3.5 shrink-0" weight="fill" /> {backers.toLocaleString()} Backers
        </span>
      )}
      {views !== undefined && (
        <span className="flex items-center gap-1 shrink-0 hidden sm:flex">
          <Eye className="h-3.5 w-3.5 shrink-0" /> {views.toLocaleString()} Views
        </span>
      )}
      {category && (
        <>
          <div className="flex-1" />
          <CategoryBadge category={category} />
        </>
      )}
    </div>
  );
}

function FeedCardActions({ item }: { item: FeedItem }) {
  const [bookmarked, setBookmarked] = useState(false);
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-h-[41px] border-t border-[rgba(190,190,200,0.25)] px-4 sm:px-6 py-2 relative">
      <div className="flex items-center gap-3 shrink-0">
        {item.creatorAvatar && (
          <Link to={`/creator/${item.creatorId}`}>
            <ImageWithFallback src={item.creatorAvatar} alt={item.creatorName || ''} className="w-7 h-7 rounded-full object-cover" />
          </Link>
        )}
        {item.creatorName && (
          <Link to={`/creator/${item.creatorId}`} className="hover:text-[#1782FF] transition-colors">
            <span className="text-[#212121] dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>
              {item.creatorName}
            </span>
          </Link>
        )}
        {item.type === 'new_project' && (
          <span className="text-[#717182] dark:text-white/40 hidden sm:inline" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            published a new project
          </span>
        )}
        {item.type === 'updated_project' && (
          <span className="text-[#717182] dark:text-white/40 hidden sm:inline" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            updated their project
          </span>
        )}
        {item.type === 'trending_project' && (
          <span className="text-[#717182] dark:text-white/40 hidden sm:inline" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            published a new project
          </span>
        )}
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-1">
        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-[2px] transition-all ${
            bookmarked ? 'text-[#1782FF]' : 'text-[#717182] dark:text-white/50 hover:text-[#212121] dark:hover:text-white'
          }`}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 500 }}
        >
          <BookmarkSimple className="h-3.5 w-3.5" weight={bookmarked ? 'fill' : 'regular'} /> SAVE
        </button>
        <button
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-[2px] text-[#717182] dark:text-white/50 hover:text-[#212121] dark:hover:text-white transition-all"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 500 }}
        >
          <Share className="h-3.5 w-3.5" /> SHARE
        </button>
      </div>
    </div>
  );
}

// ─── Feed Card Components ────────────────────────────────────────────

function NewProjectCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-tl-[2px] rounded-tr-[2px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(30deg, #1782FF 0%, #B02BED 100%)' }}>
        <Rocket className="h-6 w-6 text-white shrink-0" weight="fill" />
        <span className="text-white truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          NEW PROJECT
        </span>
        <div className="flex-1 min-w-0" />
        <span className="text-white/75 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
          {item.timestamp}
        </span>
      </div>

      <Link to={`/project/${item.projectId}`} className="block">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <ImageWithFallback src={item.projectImage || ''} alt={item.projectTitle || ''} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-3 left-3 flex gap-2">
            <CategoryBadge category={item.projectCategory || ''} overlay />
            <CategoryBadge category={item.projectDifficulty || ''} overlay />
          </div>
        </div>
      </Link>

      <div className="p-6 flex flex-col gap-2">
        <EngagementBar comments={item.comments} hearts={item.hearts} backers={item.backers} views={item.views} />
        <Link to={`/project/${item.projectId}`}>
          <h3 className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 900, lineHeight: '1.45' }}>
            {item.projectTitle}
          </h3>
        </Link>
        <p className="text-[#717182] dark:text-[#BEBEC8]" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
          {item.projectDescription}
        </p>
      </div>

      <FeedCardActions item={item} />
    </AnimatedBorderCard>
  );
}

function UpdatedProjectCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-tl-[2px] rounded-tr-[2px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(30deg, #1782FF 0%, #B02BED 100%)' }}>
        <ArrowUp className="h-6 w-6 text-white shrink-0" weight="bold" />
        <span className="text-white truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          PROJECT UPDATED
        </span>
        {item.version && (
          <span className="px-2 py-1 rounded-[2px] bg-white/10 border border-white/40 text-white shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            {item.version}
          </span>
        )}
        <div className="flex-1 min-w-0" />
        <span className="text-white/75 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
          {item.timestamp}
        </span>
      </div>

      <div className="p-4 sm:p-6 flex flex-col gap-3">
        <EngagementBar comments={item.comments} hearts={item.hearts} backers={item.backers} views={item.views} category={item.projectCategory} />
        <div className="flex gap-4">
          <Link to={`/project/${item.projectId}`} className="shrink-0">
            <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[100px] rounded-[2px] overflow-hidden">
              <ImageWithFallback src={item.projectImage || ''} alt={item.projectTitle || ''} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </Link>
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <Link to={`/project/${item.projectId}`}>
              <h3 className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 900, lineHeight: '1.45' }}>
                {item.projectTitle}
              </h3>
            </Link>
            <p className="text-[#717182] dark:text-[#BEBEC8]" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
              {item.versionNote}
            </p>
          </div>
        </div>
      </div>

      <FeedCardActions item={item} />
    </AnimatedBorderCard>
  );
}

function TrendingProjectCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-tl-[2px] rounded-tr-[2px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(30deg, #D47509 0%, #FF8904 100%)' }}>
        <Fire className="h-6 w-6 text-white shrink-0" weight="fill" />
        <span className="text-white truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          TRENDING
        </span>
        <div className="flex-1 min-w-0" />
        <span className="text-white/75 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
          {item.trendingReason || item.timestamp}
        </span>
      </div>

      <Link to={`/project/${item.projectId}`} className="block">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <ImageWithFallback src={item.projectImage || ''} alt={item.projectTitle || ''} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-3 left-3 flex gap-2">
            <CategoryBadge category={item.projectCategory || ''} overlay />
            <CategoryBadge category={item.projectDifficulty || ''} overlay />
          </div>
          <div className="absolute bottom-3 right-3 flex items-center gap-2 px-2.5 py-1.5 rounded-[2px] bg-black/40 border border-[#FF8904]/40">
            <TrendUp className="h-3.5 w-3.5 text-[#FF8904]" weight="bold" />
            <span className="text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
              {item.hearts?.toLocaleString()} Follows
            </span>
          </div>
        </div>
      </Link>

      <div className="px-6 py-4 flex flex-col gap-2">
        <EngagementBar comments={item.comments} hearts={item.hearts} backers={item.backers} views={item.views} />
        <Link to={`/project/${item.projectId}`}>
          <h3 className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 900, lineHeight: '1.45' }}>
            {item.projectTitle}
          </h3>
        </Link>
        <p className="text-[#717182] dark:text-[#BEBEC8]" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
          {item.projectDescription}
        </p>
      </div>

      <FeedCardActions item={item} />
    </AnimatedBorderCard>
  );
}

function MilestoneCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="absolute top-[1px] left-[1px] right-[1px] h-[2px]" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
      <div className="p-6 flex items-start gap-4">
        <motion.div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundImage: 'linear-gradient(45deg, #1782FF 0%, #1782FF 50%, #B02BED 100%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Rocket className="h-5 w-5 text-white" weight="fill" />
        </motion.div>
        <div className="flex flex-col gap-2">
          <span className="gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em', fontWeight: 600 }}>
            COMMUNITY MILESTONE
          </span>
          <p className="text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.5' }}>
            {item.milestoneText}
          </p>
          <span className="text-[#717182] dark:text-white/40" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            {item.timestamp}
          </span>
        </div>
      </div>
    </AnimatedBorderCard>
  );
}

function CommunityChallengeCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #1782FF, #B02BED)' }} />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-[#1782FF]/20 flex items-center justify-center">
            <Lightning className="h-3 w-3 text-[#1782FF]" weight="fill" />
          </div>
          <span className="text-[#1782FF]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            COMMUNITY CHALLENGE
          </span>
          <span className="text-[#717182] dark:text-white/40 ml-auto" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem' }}>
            {item.timestamp}
          </span>
        </div>
        <h3 className="text-[#212121] dark:text-white mb-2 uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '1.05rem' }}>
          {item.challengeTitle}
        </h3>
        <p className="text-[#717182] dark:text-[#BEBEC8] mb-4" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
          {item.challengeDescription}
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="flex items-center gap-1 text-[#717182] dark:text-white/50" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
            <Clock className="h-3.5 w-3.5" /> Deadline: {item.challengeDeadline}
          </span>
          <span className="flex items-center gap-1 text-[#717182] dark:text-white/50" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
            <Users className="h-3.5 w-3.5" /> {item.challengeParticipants} participants
          </span>
        </div>
        <Button
          className="text-white relative overflow-hidden group rounded-[2px]"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-1.5">
            <Lightning className="h-3.5 w-3.5" weight="fill" /> JOIN CHALLENGE
          </span>
        </Button>
      </div>
    </AnimatedBorderCard>
  );
}

function WeeklyRoundupCard({ item }: { item: FeedItem }) {
  return (
    <AnimatedBorderCard>
      <div className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-tl-[2px] rounded-tr-[2px] overflow-hidden" style={{ backgroundImage: 'linear-gradient(30deg, #1782FF 0%, #B02BED 100%)' }}>
        <Rocket className="h-6 w-6 text-white shrink-0" weight="fill" />
        <span className="text-white truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          OUT OF THIS WORLD PROJECTS
        </span>
        <div className="flex-1 min-w-0" />
        <span className="text-white/75 shrink-0 hidden sm:inline" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
          {item.timestamp === '1 day ago' ? 'March 15 – March 22' : item.timestamp}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <h3 className="text-[#212121] dark:text-white uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '1rem' }}>
          Top Projects This Week
        </h3>
      </div>
      <div className="hidden sm:flex flex-wrap gap-2 px-6 pb-6">
        {item.roundupProjects?.map((proj, i) => (
          <div key={i} className="group cursor-pointer flex-1 min-w-[200px] flex flex-col gap-2">
            <div className="aspect-square rounded-[2px] overflow-hidden">
              <ImageWithFallback src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <CategoryBadge category={proj.category} />
            <p className="text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.75rem', fontWeight: 900, lineHeight: '1.3' }}>
              {proj.title}
            </p>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden flex-col gap-4 px-4 pb-4">
        {item.roundupProjects?.map((proj, i) => (
          <div key={i} className="group cursor-pointer flex gap-4">
            <div className="w-[80px] h-[80px] shrink-0 rounded-[2px] overflow-hidden">
              <ImageWithFallback src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-2 items-start">
              <CategoryBadge category={proj.category} />
              <p className="text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 900, lineHeight: '1.45' }}>
                {proj.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBorderCard>
  );
}

function CreatorPostCard({ item }: { item: FeedItem }) {
  const postType = item.creatorPostType || 'New Project';

  const headerConfig: Record<CreatorPostType, { gradient: string; icon: React.ReactNode }> = {
    'New Project': {
      gradient: 'linear-gradient(30deg, rgb(52, 168, 83) 0%, rgb(0, 101, 27) 100%)',
      icon: <Rocket className="h-6 w-6 text-white shrink-0" weight="fill" />,
    },
    'Project Update': {
      gradient: 'linear-gradient(30deg, #1782FF 0%, #B02BED 100%)',
      icon: <Fire className="h-6 w-6 text-white shrink-0" weight="fill" />,
    },
    'Announcement': {
      gradient: 'linear-gradient(30deg, rgb(255, 105, 0) 0%, rgb(193, 140, 1) 100%)',
      icon: <Megaphone className="h-6 w-6 text-white shrink-0" weight="fill" />,
    },
    'Shameless Self-Promotion': {
      gradient: 'linear-gradient(30deg, #1782FF 0%, #B02BED 50%, rgb(255, 105, 0) 100%)',
      icon: <HandWaving className="h-6 w-6 text-white shrink-0" weight="fill" />,
    },
  };

  const config = headerConfig[postType];
  const [liked, setLiked] = useState(false);

  return (
    <AnimatedBorderCard>
      {/* Header bar */}
      <div
        className="flex items-center gap-2 px-3 sm:px-6 py-2.5 rounded-tl-[2px] rounded-tr-[2px] overflow-hidden"
        style={{ backgroundImage: config.gradient }}
      >
        <div className="shrink-0">{config.icon}</div>
        <span className="text-white truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          {postType.toUpperCase()}
        </span>
        {postType === 'Project Update' && item.version && (
          <span
            className="px-2 py-1 rounded-[2px] bg-white/10 border border-white/40 text-white shrink-0"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}
          >
            {item.version}
          </span>
        )}
        <div className="flex-1 min-w-0" />
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1.5 rounded-[2px] transition-all shrink-0 ${liked ? 'text-white' : 'text-white/80 hover:text-white'}`}
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
        >
          <ThumbsUp className="h-3.5 w-3.5" weight={liked ? 'fill' : 'regular'} /> <span className="hidden sm:inline">LIKE</span>
        </button>
        <button
          className="flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1.5 rounded-[2px] text-white/80 hover:text-white transition-all shrink-0"
          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
        >
          <ChatCircle className="h-3.5 w-3.5" /> <span className="hidden sm:inline">COMMENT</span>
        </button>
      </div>

      {/* Uploaded image (no linked project) */}
      {!item.projectTitle && item.creatorPostImage && (
        <div className="w-full overflow-hidden">
          <ImageWithFallback
            src={item.creatorPostImage}
            alt=""
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Message body */}
      <div className="px-4 sm:px-6 pt-4 pb-4">
        <p className="text-[#717182] dark:text-white/70" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.5' }}>
          {item.creatorPostContent}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/20 mx-0" />

      {/* Embedded project card */}
      {item.projectTitle && (
        <div className="mx-4 sm:mx-6 my-4 bg-[rgba(13,14,36,0.9)] border border-white/20 rounded-[2px] overflow-hidden">
          <div className="p-4 flex flex-col gap-4">
            <EngagementBar
              difficulty={item.projectDifficulty}
              hearts={item.hearts}
              comments={item.comments}
              backers={item.backers}
              views={item.views}
              category={item.projectCategory}
            />
            <div className="flex gap-4">
              <Link to={`/project/${item.projectId}`} className="shrink-0">
                <div className="w-[80px] h-[80px] sm:w-[140px] sm:h-[100px] rounded-[2px] overflow-hidden">
                  <ImageWithFallback
                    src={item.projectImage || ''}
                    alt={item.projectTitle}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <Link to={`/project/${item.projectId}`}>
                  <h3
                    className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors"
                    style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 900, lineHeight: '1.5' }}
                  >
                    {item.projectTitle}
                  </h3>
                </Link>
                <p className="text-[#717182] dark:text-white/70 line-clamp-3" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {item.projectDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <FeedCardActions item={item} />
        </div>
      )}

      {/* Simplified footer for posts without a linked project */}
      {!item.projectTitle && (
        <div className="flex items-center gap-3 px-4 sm:px-6 py-2 border-t border-white/5">
          {item.creatorAvatar && (
            <Link to={`/creator/${item.creatorId}`}>
              <ImageWithFallback src={item.creatorAvatar} alt={item.creatorName || ''} className="w-7 h-7 rounded-full object-cover" />
            </Link>
          )}
          {item.creatorName && (
            <Link to={`/creator/${item.creatorId}`} className="hover:text-[#1782FF] transition-colors">
              <span className="text-[#212121] dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>
                {item.creatorName}
              </span>
            </Link>
          )}
          <span className="text-[#717182] dark:text-white/40" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem' }}>
            {item.timestamp}
          </span>
          <div className="flex-1" />
          {item.projectCategory && <CategoryBadge category={item.projectCategory} />}
        </div>
      )}
    </AnimatedBorderCard>
  );
}

// ─── Feed Card Router ────────────────────────────────────────────────
function FeedCard({ item }: { item: FeedItem }) {
  switch (item.type) {
    case 'new_project':
      return <NewProjectCard item={item} />;
    case 'updated_project':
      return <UpdatedProjectCard item={item} />;
    case 'trending_project':
      return <TrendingProjectCard item={item} />;
    case 'milestone':
      return <MilestoneCard item={item} />;
    case 'community_challenge':
      return <CommunityChallengeCard item={item} />;
    case 'weekly_roundup':
      return <WeeklyRoundupCard item={item} />;
    case 'creator_post':
      return <CreatorPostCard item={item} />;
    default:
      return null;
  }
}

// ──��� Sidebar Components ──────────────────────────────────────────────

function SidebarCreatorCard({ creator }: { creator: SidebarCreator }) {
  const [following, setFollowing] = useState(false);
  return (
    <div className="flex items-center gap-3 py-2.5">
      <Link to={`/creator/${creator.id}`} className="shrink-0">
        <ImageWithFallback src={creator.avatar} alt={creator.name} className="w-9 h-9 rounded-full object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <Link to={`/creator/${creator.id}`} className="block">
          <span className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors block truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.85rem' }}>
            {creator.name}
          </span>
        </Link>
        <span className="text-[#212121]/40 dark:text-white/40 block truncate" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
          {creator.categories.join(' / ')} &middot; {creator.followers.toLocaleString()} followers
        </span>
      </div>
      <button
        onClick={() => setFollowing(!following)}
        className={`shrink-0 px-2 py-1 rounded-[2px] transition-all ${
          following
            ? 'bg-[#1782FF]/10 text-[#1782FF] border border-[#1782FF]/30'
            : 'gradient-bg text-white border border-transparent'
        }`}
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem' }}
      >
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
}

function SidebarProjectCard({ project }: { project: SidebarProject }) {
  return (
    <Link to={`/project/${project.id}`} className="flex items-center gap-3 py-2.5 group">
      <div className="w-12 h-12 rounded-[2px] overflow-hidden shrink-0">
        <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors block truncate" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.85rem' }}>
          {project.title}
        </span>
        <span className="text-[#212121]/40 dark:text-white/40 block" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
          by {project.creator}
        </span>
      </div>
      <span className="flex items-center gap-0.5 text-[#212121]/40 dark:text-white/40 shrink-0" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem' }}>
        <Heart className="h-3 w-3" weight="fill" /> {project.hearts}
      </span>
    </Link>
  );
}

// ─── Main Page ────────────────────────────────────────────────��──────

export function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState<FeedFilter>('new');
  const [selectedCategory, setSelectedCategory] = useState('ALL CATEGORIES');
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState('ALL POST TYPES');
  const [postTypeFilterOpen, setPostTypeFilterOpen] = useState(false);
  const [composerText, setComposerText] = useState('');
  const [composerProject, setComposerProject] = useState('');
  const [composerPostType, setComposerPostType] = useState<CreatorPostType | null>(null);
  const [composerCategory, setComposerCategory] = useState('');
  const [composerImage, setComposerImage] = useState<File | null>(null);
  const [mobileComposerOpen, setMobileComposerOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [postTypeDropdownOpen, setPostTypeDropdownOpen] = useState(false);

  const projectCategoryMap: Record<string, string> = {
    'Custom Mechanical Keyboard from Scratch': 'ELECTRONICS',
    'Raspberry Pi Weather Station Network': 'RASPBERRY PI',
    '3D Printed Planetary Gear Train': '3D PRINTING',
  };

  const composerCategories = categories.filter(c => c !== 'ALL CATEGORIES');

  const handleSelectProject = (proj: string) => {
    setComposerProject(proj);
    setProjectDropdownOpen(false);
    if (projectCategoryMap[proj]) {
      setComposerCategory(projectCategoryMap[proj]);
    }
  };

  const currentFeed = activeFilter === 'new' ? feedItems : followingFeedItems;

  const postTypeToFeedType: Record<string, string[]> = {
    'NEW PROJECT': ['new_project', 'creator_post'],
    'PROJECT UPDATE': ['updated_project', 'creator_post'],
    'ANNOUNCEMENT': ['creator_post'],
    'SHAMELESS SELF-PROMOTION': ['creator_post'],
    'TRENDING': ['trending_project'],
    'MILESTONE': ['milestone'],
    'CHALLENGES': ['community_challenge'],
    'TOP PROJECTS': ['weekly_roundup'],
  };

  const categoryFiltered = selectedCategory === 'ALL CATEGORIES'
    ? currentFeed
    : currentFeed.filter((item) => {
        if (item.projectCategory === selectedCategory) return true;
        if (item.creatorCategories?.includes(selectedCategory)) return true;
        if (item.type === 'milestone' || item.type === 'community_challenge' || item.type === 'weekly_roundup') return true;
        return false;
      });

  const filteredFeed = selectedPostType === 'ALL POST TYPES'
    ? categoryFiltered
    : categoryFiltered.filter((item) => {
        const types = postTypeToFeedType[selectedPostType];
        if (!types) return true;
        if (!types.includes(item.type)) return false;
        if (selectedPostType === 'NEW PROJECT') return item.type === 'new_project' || item.creatorPostType === 'New Project';
        if (selectedPostType === 'ANNOUNCEMENT') return item.creatorPostType === 'Announcement';
        if (selectedPostType === 'SHAMELESS SELF-PROMOTION') return item.creatorPostType === 'Shameless Self-Promotion';
        if (selectedPostType === 'PROJECT UPDATE') return item.type === 'updated_project' || item.creatorPostType === 'Project Update';
        return true;
      });

  return (
    <>
      <MoonDustBackground />
      <NewHeader />

      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <section className="py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page Header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">LIVE FEED</span>
                </div>
                <h1
                  className="text-[32px] sm:text-[40px] tracking-tight uppercase text-[#212121] dark:text-white"
                  style={{ fontFamily: "'PP Monument Extended', sans-serif", lineHeight: '1.1', fontWeight: 400 }}
                >
                  Explore{' '}
                  <span className="gradient-text" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900 }}>
                    ARK
                  </span>
                </h1>
                <p className="mt-3 text-[#212121]/60 dark:text-white/60 max-w-xl" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Discover what the community is building, trending projects, and creators to follow.
                </p>
              </motion.div>

              {/* Mobile Post to Feed Toggle */}
              <div className="sm:hidden mb-4">
                <button
                  onClick={() => setMobileComposerOpen(!mobileComposerOpen)}
                  className="w-full flex items-center justify-between px-5 py-3 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 backdrop-blur-lg bg-white/30 dark:bg-black/20 text-[#1782FF] dark:text-white/70 transition-all"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}
                >
                  <span className="flex items-center gap-2">
                    <PencilSimple className="h-3.5 w-3.5" weight="bold" />
                    POST TO FEED
                  </span>
                  <CaretDown className={`h-3.5 w-3.5 transition-transform duration-300 ${mobileComposerOpen ? 'rotate-180' : ''}`} weight="bold" />
                </button>
                <AnimatePresence>
                  {mobileComposerOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 backdrop-blur-lg bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-[2px] p-5 relative z-20">
                        <div className="relative">
                          <textarea
                            value={composerText}
                            onChange={(e) => setComposerText(e.target.value)}
                            placeholder="Share an update with the community..."
                            className="w-full bg-white/20 dark:bg-white/5 border border-[#d1d1d6] dark:border-white/10 rounded-[2px] p-3 pb-8 text-[#212121] dark:text-white placeholder-[#212121]/30 dark:placeholder-white/30 resize-none focus:outline-none focus:border-[#1782FF]/50 transition-colors"
                            style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.85rem', lineHeight: '1.5', minHeight: '128px' }}
                          />
                          <label
                            className="absolute bottom-3 right-3 cursor-pointer text-[#212121]/30 dark:text-white/30 hover:text-[#1782FF] transition-colors"
                            title={composerImage ? composerImage.name : 'Attach image (GIF, JPG, PNG)'}
                          >
                            <Image className={`h-4 w-4 ${composerImage ? 'text-[#1782FF]' : ''}`} weight="bold" />
                            <input type="file" accept=".gif,.jpg,.jpeg,.png,image/gif,image/jpeg,image/png" className="hidden" onChange={(e) => setComposerImage(e.target.files?.[0] ?? null)} />
                          </label>
                        </div>
                        <div className="relative mt-3">
                          <button
                            onClick={() => { setProjectDropdownOpen(!projectDropdownOpen); setCategoryDropdownOpen(false); setPostTypeDropdownOpen(false); }}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors text-left"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                          >
                            <span className="flex-1">{composerProject || <span>Select Project <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Optional)</span></span>}</span>
                            <CaretDown className={`h-3 w-3 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                          </button>
                          <AnimatePresence>
                            {projectDropdownOpen && (
                              <motion.div className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}>
                                {['Custom Mechanical Keyboard from Scratch', 'Raspberry Pi Weather Station Network', '3D Printed Planetary Gear Train'].map((proj) => (
                                  <button key={proj} onClick={() => handleSelectProject(proj)} className={`w-full text-left px-3 py-2.5 transition-colors ${composerProject === proj ? 'bg-[#1782FF]/10 text-[#1782FF]' : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'}`} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>{proj}</button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="relative mt-3">
                          <button
                            onClick={() => { setCategoryDropdownOpen(!categoryDropdownOpen); setProjectDropdownOpen(false); setPostTypeDropdownOpen(false); }}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                          >
                            {composerCategory || <span>Category <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Optional)</span></span>}
                            <CaretDown className={`h-3 w-3 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                          </button>
                          <AnimatePresence>
                            {categoryDropdownOpen && (
                              <motion.div className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden max-h-[200px] overflow-y-auto" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}>
                                {composerCategories.map((cat) => (
                                  <button key={cat} onClick={() => { setComposerCategory(cat); setCategoryDropdownOpen(false); }} className={`w-full text-left px-3 py-2.5 transition-colors ${composerCategory === cat ? 'bg-[#1782FF]/10 text-[#1782FF]' : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'}`} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>{cat}</button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className="relative mt-3">
                          <button
                            onClick={() => { setPostTypeDropdownOpen(!postTypeDropdownOpen); setProjectDropdownOpen(false); setCategoryDropdownOpen(false); }}
                            className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors"
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                          >
                            {composerPostType || <span>Post Type <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Required)</span></span>}
                            <CaretDown className={`h-3 w-3 transition-transform ${postTypeDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                          </button>
                          <AnimatePresence>
                            {postTypeDropdownOpen && (
                              <motion.div className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }}>
                                {(['New Project', 'Project Update', 'Announcement', 'Shameless Self-Promotion'] as CreatorPostType[]).map((pt) => (
                                  <button key={pt} onClick={() => { setComposerPostType(pt); setPostTypeDropdownOpen(false); }} className={`w-full text-left px-3 py-2.5 transition-colors ${composerPostType === pt ? 'bg-[#1782FF]/10 text-[#1782FF]' : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'}`} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}>
                                    {pt === 'New Project' ? `\u2728 ${pt}` : pt === 'Shameless Self-Promotion' ? `\uD83D\uDE1C ${pt}` : pt === 'Announcement' ? `\uD83D\uDCE3 ${pt}` : pt === 'Project Update' ? `\uD83D\uDE80 ${pt}` : pt}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        <Button
                          className="w-full mt-3 text-white relative overflow-hidden group rounded-[2px]"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
                          disabled={!composerText.trim() || !composerPostType}
                        >
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative z-10 flex items-center justify-center gap-1.5">
                            <PaperPlaneTilt className="h-3.5 w-3.5" weight="fill" /> POST TO FEED
                          </span>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Filter Bar */}
              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                {/* Tab Filters */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-[16px]">
                  <div
                    className="rounded-[2px] transition-all"
                    style={activeFilter === 'following' ? { padding: '1px', background: 'linear-gradient(90deg, #1782FF, #B02BED)' } : {}}
                  >
                    <button
                      onClick={() => setActiveFilter('following')}
                      className={`px-5 py-2.5 rounded-[2px] border transition-all ${
                        activeFilter === 'following'
                          ? 'border-transparent backdrop-blur-lg bg-white/30 dark:bg-black/40 text-white'
                          : 'border-[#d1d1d6] dark:border-white/10 backdrop-blur-lg bg-white/30 dark:bg-black/20 text-[#1782FF] dark:text-white/70 hover:text-[#1246a8] dark:hover:text-white hover:bg-white/10'
                      }`}
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.05em' }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Bell className="h-3.5 w-3.5" weight="fill" />
                        FOLLOWING
                      </span>
                    </button>
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative">
                    <div
                      className="rounded-[2px] transition-all"
                      style={selectedCategory !== 'ALL CATEGORIES' ? { padding: '1px', background: 'linear-gradient(90deg, #1782FF, #B02BED)' } : {}}
                    >
                    <button
                      onClick={() => { setCategoryOpen(!categoryOpen); setPostTypeFilterOpen(false); }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-[2px] transition-all ${
                        selectedCategory !== 'ALL CATEGORIES'
                          ? 'border-transparent backdrop-blur-lg bg-white/30 dark:bg-black/40 text-white'
                          : 'border border-[#d1d1d6] dark:border-white/10 backdrop-blur-lg bg-white/30 dark:bg-black/20 text-[#1782FF] dark:text-white/70 hover:text-[#1246a8] dark:hover:text-white hover:border-[#1782FF]/30'
                      }`}
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.05em' }}
                    >
                      {selectedCategory}
                      <CaretDown className={`h-3.5 w-3.5 transition-transform ${categoryOpen ? 'rotate-180' : ''}`} weight="bold" />
                    </button>
                    </div>
                    <AnimatePresence>
                    {categoryOpen && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 w-56 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.15 }}
                      >
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => { setSelectedCategory(cat); setCategoryOpen(false); }}
                            className={`w-full text-left px-4 py-2.5 transition-colors ${
                              selectedCategory === cat
                                ? 'bg-[#1782FF]/10 text-[#1782FF]'
                                : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'
                            }`}
                            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.02em' }}
                          >
                            {cat}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  </div>

                  {/* Post Type Filter Dropdown */}
                  <div className="relative">
                    <div
                      className="rounded-[2px] transition-all"
                      style={selectedPostType !== 'ALL POST TYPES' ? { padding: '1px', background: 'linear-gradient(90deg, #1782FF, #B02BED)' } : {}}
                    >
                    <button
                      onClick={() => { setPostTypeFilterOpen(!postTypeFilterOpen); setCategoryOpen(false); }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-[2px] transition-all ${
                        selectedPostType !== 'ALL POST TYPES'
                          ? 'border-transparent backdrop-blur-lg bg-white/30 dark:bg-black/40 text-white'
                          : 'border border-[#d1d1d6] dark:border-white/10 backdrop-blur-lg bg-white/30 dark:bg-black/20 text-[#1782FF] dark:text-white/70 hover:text-[#1246a8] dark:hover:text-white hover:border-[#1782FF]/30'
                      }`}
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.05em' }}
                    >
                      {selectedPostType}
                      <CaretDown className={`h-3.5 w-3.5 transition-transform ${postTypeFilterOpen ? 'rotate-180' : ''}`} weight="bold" />
                    </button>
                    </div>
                    <AnimatePresence>
                      {postTypeFilterOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-1 w-64 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                        >
                          {postTypeFilters.map((pt) => (
                            <button
                              key={pt}
                              onClick={() => { setSelectedPostType(pt); setPostTypeFilterOpen(false); }}
                              className={`w-full text-left px-4 py-2.5 transition-colors ${
                                selectedPostType === pt
                                  ? 'bg-[#1782FF]/10 text-[#1782FF]'
                                  : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'
                              }`}
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.02em' }}
                            >
                              {pt}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Main Grid: Feed + Sidebar */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Feed Column */}
                <div className="lg:col-span-2 space-y-8 min-w-0">
                  <AnimatePresence>
                    {filteredFeed.length > 0 ? (
                      filteredFeed.map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="min-w-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.35, delay: index * 0.06 }}
                        >
                          <FeedCard item={item} />
                        </motion.div>
                      ))
                    ) : (
                      <motion.div
                        className="bg-black/40 border border-white/10 rounded-[2px] p-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Megaphone className="h-10 w-10 mx-auto mb-3 text-white/30" />
                        <p className="text-white/50" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.95rem' }}>
                          No results for this filter. Try a different category or switch tabs.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Load More */}
                  {filteredFeed.length > 0 && (
                    <motion.div
                      className="flex justify-center pt-4 pb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Button
                        variant="outline"
                        className="rounded-[2px] border-white/20 dark:border-white/10 backdrop-blur-lg bg-white/30 dark:bg-black/20 text-[#212121] dark:text-white hover:border-[#1782FF]/40"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
                      >
                        LOAD MORE
                      </Button>
                    </motion.div>
                  )}
                </div>

                {/* Right Sidebar */}
                <motion.div
                  className="lg:col-span-1 space-y-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Post to Feed Composer */}
                  <div className="hidden sm:block backdrop-blur-lg bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-[2px] p-5 relative z-20">
                    <div className="flex items-center gap-2 mb-4">
                      <PencilSimple className="h-4 w-4 text-[#1782FF]" weight="bold" />
                      <h3 className="text-[#212121] dark:text-white uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '0.9rem' }}>
                        Post to Feed
                      </h3>
                    </div>
                    <div className="relative">
                      <textarea
                        value={composerText}
                        onChange={(e) => setComposerText(e.target.value)}
                        placeholder="Share an update with the community..."
                        className="w-full bg-white/20 dark:bg-white/5 border border-[#d1d1d6] dark:border-white/10 rounded-[2px] p-3 pb-8 text-[#212121] dark:text-white placeholder-[#212121]/30 dark:placeholder-white/30 resize-none focus:outline-none focus:border-[#1782FF]/50 transition-colors"
                        style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.85rem', lineHeight: '1.5', minHeight: '128px' }}
                      />
                      <label
                        className="absolute bottom-3 right-3 cursor-pointer text-[#212121]/30 dark:text-white/30 hover:text-[#1782FF] transition-colors"
                        title={composerImage ? composerImage.name : 'Attach image (GIF, JPG, PNG)'}
                      >
                        <Image className={`h-4 w-4 ${composerImage ? 'text-[#1782FF]' : ''}`} weight="bold" />
                        <input
                          type="file"
                          accept=".gif,.jpg,.jpeg,.png,image/gif,image/jpeg,image/png"
                          className="hidden"
                          onChange={(e) => setComposerImage(e.target.files?.[0] ?? null)}
                        />
                      </label>
                    </div>

                    {/* Project Dropdown */}
                    <div className="relative mt-3">
                      <button
                        onClick={() => { setProjectDropdownOpen(!projectDropdownOpen); setCategoryDropdownOpen(false); setPostTypeDropdownOpen(false); }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors text-left"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                      >
                        <span className="flex-1">{composerProject || <span>Select Project <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Optional)</span></span>}</span>
                        <CaretDown className={`h-3 w-3 transition-transform ${projectDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                      </button>
                      <AnimatePresence>
                        {projectDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {['Custom Mechanical Keyboard from Scratch', 'Raspberry Pi Weather Station Network', '3D Printed Planetary Gear Train'].map((proj) => (
                              <button
                                key={proj}
                                onClick={() => handleSelectProject(proj)}
                                className={`w-full text-left px-3 py-2.5 transition-colors ${
                                  composerProject === proj
                                    ? 'bg-[#1782FF]/10 text-[#1782FF]'
                                    : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'
                                }`}
                                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                              >
                                {proj}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Category Dropdown */}
                    <div className="relative mt-3">
                      <button
                        onClick={() => { setCategoryDropdownOpen(!categoryDropdownOpen); setProjectDropdownOpen(false); setPostTypeDropdownOpen(false); }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                      >
                        {composerCategory || <span>Category <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Optional)</span></span>}
                        <CaretDown className={`h-3 w-3 transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                      </button>
                      <AnimatePresence>
                        {categoryDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden max-h-[200px] overflow-y-auto"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {composerCategories.map((cat) => (
                              <button
                                key={cat}
                                onClick={() => { setComposerCategory(cat); setCategoryDropdownOpen(false); }}
                                className={`w-full text-left px-3 py-2.5 transition-colors ${
                                  composerCategory === cat
                                    ? 'bg-[#1782FF]/10 text-[#1782FF]'
                                    : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'
                                }`}
                                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                              >
                                {cat}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Post Type Dropdown */}
                    <div className="relative mt-3">
                      <button
                        onClick={() => { setPostTypeDropdownOpen(!postTypeDropdownOpen); setProjectDropdownOpen(false); setCategoryDropdownOpen(false); }}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-[2px] border border-[#d1d1d6] dark:border-white/10 bg-white/20 dark:bg-white/5 text-[#212121] dark:text-white hover:border-[#1782FF]/30 transition-colors"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                      >
                        {composerPostType || <span>Post Type <span style={{ color: '#9ca3af', fontWeight: 400 }}>(Required)</span></span>}
                        <CaretDown className={`h-3 w-3 transition-transform ${postTypeDropdownOpen ? 'rotate-180' : ''}`} weight="bold" />
                      </button>
                      <AnimatePresence>
                        {postTypeDropdownOpen && (
                          <motion.div
                            className="absolute top-full left-0 right-0 mt-1 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/80 dark:bg-black/80 shadow-xl z-50 overflow-hidden"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                          >
                            {(['New Project', 'Project Update', 'Announcement', 'Shameless Self-Promotion'] as CreatorPostType[]).map((pt) => (
                              <button
                                key={pt}
                                onClick={() => { setComposerPostType(pt); setPostTypeDropdownOpen(false); }}
                                className={`w-full text-left px-3 py-2.5 transition-colors ${
                                  composerPostType === pt
                                    ? 'bg-[#1782FF]/10 text-[#1782FF]'
                                    : 'text-[#212121] dark:text-white hover:bg-white/40 dark:hover:bg-white/10'
                                }`}
                                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                              >
                                {pt === 'New Project' ? `\u2728 ${pt}` : pt === 'Shameless Self-Promotion' ? `\uD83D\uDE1C ${pt}` : pt === 'Announcement' ? `\uD83D\uDCE3 ${pt}` : pt === 'Project Update' ? `\uD83D\uDE80 ${pt}` : pt}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Post Button */}
                    <Button
                      className="w-full mt-3 text-white relative overflow-hidden group rounded-[2px]"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
                      disabled={!composerText.trim() || !composerPostType}
                    >
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                      <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center justify-center gap-1.5">
                        <PaperPlaneTilt className="h-3.5 w-3.5" weight="fill" /> POST TO FEED
                      </span>
                    </Button>
                  </div>

                  {/* Creators to Follow */}
                  <div className="backdrop-blur-lg bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-[2px] p-5 sticky top-24">
                    <div className="flex items-center gap-2 mb-4">
                      <UserPlus className="h-4 w-4 text-[#1782FF]" weight="bold" />
                      <h3 className="text-[#212121] dark:text-white uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '0.9rem' }}>
                        Creators to Follow
                      </h3>
                    </div>
                    <div className="divide-y divide-white/10 dark:divide-white/5">
                      {sidebarCreators.map((c) => (
                        <SidebarCreatorCard key={c.id} creator={c} />
                      ))}
                    </div>
                    <Link
                      to="/creators"
                      className="flex items-center justify-center gap-1 mt-3 pt-3 border-t border-white/10 text-[#1782FF] hover:text-[#B02BED] transition-colors"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                    >
                      SEE ALL CREATORS <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Projects to Follow */}
                  <div className="backdrop-blur-lg bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-[2px] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BookmarkSimple className="h-4 w-4 text-[#B02BED]" weight="bold" />
                      <h3 className="text-[#212121] dark:text-white uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '0.9rem' }}>
                        Projects for You
                      </h3>
                    </div>
                    <div className="divide-y divide-white/10 dark:divide-white/5">
                      {sidebarProjects.map((p) => (
                        <SidebarProjectCard key={p.id} project={p} />
                      ))}
                    </div>
                    <Link
                      to="/projects"
                      className="flex items-center justify-center gap-1 mt-3 pt-3 border-t border-white/10 text-[#1782FF] hover:text-[#B02BED] transition-colors"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.8rem' }}
                    >
                      BROWSE ALL PROJECTS <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>

                  {/* Community Stats Mini Card */}
                  <div className="backdrop-blur-lg bg-white/40 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-[2px] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendUp className="h-4 w-4 text-emerald-500" weight="bold" />
                      <h3 className="text-[#212121] dark:text-white uppercase" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '0.9rem' }}>
                        Community Pulse
                      </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'PROJECTS', value: '10,247', icon: Rocket },
                        { label: 'CREATORS', value: '3,891', icon: Users },
                        { label: 'BACKERS', value: '28,403', icon: Heart },
                        { label: 'THIS WEEK', value: '+142', icon: TrendUp },
                      ].map((stat) => (
                        <div key={stat.label} className="text-center p-2.5 rounded-[2px] bg-white/20 dark:bg-white/5">
                          <stat.icon className="h-4 w-4 mx-auto mb-1 text-[#1782FF]" weight="fill" />
                          <p className="gradient-text" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '1.1rem', fontWeight: 700 }}>
                            {stat.value}
                          </p>
                          <p className="text-[#212121]/40 dark:text-white/40" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.05em' }}>
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <NewFooter />
        </div>
      </div>
    </>
  );
}