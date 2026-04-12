import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { MessageSquare, ChevronDown, Check } from 'lucide-react';
import { ThumbsUp } from '@phosphor-icons/react';
import { ProjectCard } from './ProjectCard';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { CategoryBadge } from './CategoryBadge';
import { AnimatedBorderCard } from './AnimatedBorderCard';

const categories = ['ALL CATEGORIES', 'ROBOTICS', '3D PRINTING', 'RASPBERRY PI', 'CODING'];

const featuredProject = {
  id: '1',
  title: 'Autonomous Robot Arm with Vision',
  creator: 'Sarah Chen',
  creatorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  category: 'ROBOTICS',
  difficulty: 'ADVANCED',
  hearts: 1247,
  comments: 234,
  image: 'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGVsZWN0cm9uaWNzJTIwY2lyY3VpdHxlbnwxfHx8fDE3NzI0NDI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  description: 'Complete build guide for a 6-axis precision robot arm featuring computer vision, real-time object detection, and custom inverse kinematics solver. Includes full parts list, wiring diagrams, and Python control software.',
};

const allProjects = [
  {
    id: '1',
    title: 'Arduino Obstacle Robot',
    description: 'Build a simple bot that navigates around objects using ultrasonic sensors',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXklMjByb2JvdCUyMGFyZHVpbm98ZW58MXx8fHwxNzcyOTc5MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'BEGINNER',
    rating: 4.9,
    comments: 234,
    author: 'MIKE JOHNSON'
  },
  {
    id: '2',
    title: 'Custom Miniature Terrain',
    description: 'Design and print highly detailed tabletop game terrain pieces',
    category: '3D PRINTING',
    image: 'https://images.unsplash.com/photo-1642969164999-979483e21601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50ZXIlMjBwcmludGluZ3xlbnwxfHx8fDE3NzI5NjA4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'INTERMEDIATE',
    rating: 4.7,
    comments: 189,
    author: 'ALEX RIVERA'
  },
  {
    id: '3',
    title: 'Smart Home Hub',
    description: 'Central control system for IoT devices using Pi 4',
    category: 'RASPBERRY PI',
    image: 'https://images.unsplash.com/photo-1675339424025-35bb39fd7b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBwaSUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3Mjk3OTEwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'INTERMEDIATE',
    rating: 4.8,
    comments: 312,
    author: 'MARCUS WONG'
  },
  {
    id: '4',
    title: 'Real-Time Chat App',
    description: 'Build a scalable messaging platform with React and WebSockets',
    category: 'CODING',
    image: 'https://images.unsplash.com/photo-1603351130949-476794ec3dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzI5NjM4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'ADVANCED',
    rating: 4.6,
    comments: 156,
    author: 'JENNY PARK'
  },
  {
    id: '5',
    title: 'Self-Balancing Bike Robot',
    description: 'Two-wheeled robot that maintains balance using gyroscope and PID control',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHdoZWVsc3xlbnwxfHx8fDE3NzI5NzkzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'ADVANCED',
    rating: 4.8,
    comments: 278,
    author: 'DAVID LEE'
  },
  {
    id: '6',
    title: 'Functional Prosthetic Hand',
    description: 'Print a working prosthetic hand with articulated fingers and tendon system',
    category: '3D PRINTING',
    image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50JTIwcHJvc3RoZXRpY3xlbnwxfHx8fDE3NzI5NzkzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'INTERMEDIATE',
    rating: 4.9,
    comments: 412,
    author: 'SARAH MARTINEZ'
  },
  {
    id: '7',
    title: 'Retro Gaming Console',
    description: 'Build a RetroPie-powered arcade cabinet with custom controls',
    category: 'RASPBERRY PI',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFyY2FkZXxlbnwxfHx8fDE3NzI5NzkzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'BEGINNER',
    rating: 4.7,
    comments: 294,
    author: 'CHRIS THOMPSON'
  },
  {
    id: '8',
    title: 'AI Image Classifier',
    description: 'Train a neural network to recognize objects using TensorFlow and Python',
    category: 'CODING',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc3Mjk3OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'ADVANCED',
    rating: 4.5,
    comments: 203,
    author: 'PRIYA PATEL'
  },
  {
    id: '9',
    title: 'Hexapod Spider Robot',
    description: 'Six-legged walking robot with inverse kinematics and remote control',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHNwaWRlcnxlbnwxfHx8fDE3NzI5NzkzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'ADVANCED',
    rating: 4.6,
    comments: 167,
    author: 'MIKE JOHNSON'
  },
  {
    id: '10',
    title: 'Parametric Desk Organizer',
    description: 'Customizable modular organizer system designed in Fusion 360',
    category: '3D PRINTING',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50JTIwb3JnYW5pemVyfGVufDF8fHx8MTc3Mjk3OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'BEGINNER',
    rating: 4.4,
    comments: 145,
    author: 'ALEX RIVERA'
  },
  {
    id: '11',
    title: 'Network-Wide Ad Blocker',
    description: 'Set up Pi-hole for DNS-level ad blocking on your entire network',
    category: 'RASPBERRY PI',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VydmVyfGVufDF8fHx8MTc3Mjk3OTMwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'BEGINNER',
    rating: 4.8,
    comments: 321,
    author: 'MARCUS WONG'
  },
  {
    id: '12',
    title: 'E-Commerce REST API',
    description: 'Full-featured backend with Node.js, Express, and MongoDB',
    category: 'CODING',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBhcGl8ZW58MXx8fHwxNzcyOTc5MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'INTERMEDIATE',
    rating: 4.3,
    comments: 187,
    author: 'JENNY PARK'
  },
];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL CATEGORIES');
  const [sortBy, setSortBy] = useState('NEW_PROJECTS');
  const [isFeaturedHearted, setIsFeaturedHearted] = useState(false);
  const [featuredHeartCount, setFeaturedHeartCount] = useState(featuredProject.hearts);

  const handleFeaturedHeart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFeaturedHearted(!isFeaturedHearted);
    setFeaturedHeartCount(isFeaturedHearted ? featuredHeartCount - 1 : featuredHeartCount + 1);
  };

  const filteredProjects = selectedCategory === 'ALL CATEGORIES' 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-12 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Project */}
        <div className="mb-12">
          <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>
            <span className="label-text">FEATURED PROJECT</span>
          </div>
          
          <Link 
            to={`/project/${featuredProject.id}`}
            className="block group"
          >
            <AnimatedBorderCard innerClassName="relative rounded-[1px] overflow-hidden m-px">
              <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2px]">
                {/* Image Section */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="size-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <CategoryBadge category={featuredProject.category} overlay />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border-l border-white/30 dark:border-white/10">
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem' }}>
                      <span>{featuredProject.difficulty}</span>
                      <span>•</span>
                      <button 
                        onClick={handleFeaturedHeart}
                        className="flex items-center gap-1.5 hover:text-[#1782FF] transition-colors"
                        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem' }}
                      >
                        <ThumbsUp
                          size={16}
                          weight={isFeaturedHearted ? "fill" : "regular"}
                          className={isFeaturedHearted ? "text-[#1782FF]" : ""}
                        />
                        <span>{isFeaturedHearted ? featuredProject.hearts + 1 : featuredProject.hearts}</span>
                      </button>
                      <button className="flex items-center gap-1.5 hover:text-[#1782FF] transition-colors">
                        <MessageSquare size={16} />
                        <span>{featuredProject.comments}</span>
                      </button>
                    </div>
                    
                    <h2 className="mb-4 text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '2rem', fontWeight: 'bold', lineHeight: '1.2' }}>
                      {featuredProject.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}>
                      {featuredProject.description}
                    </p>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                        <ImageWithFallback 
                          src={featuredProject.creatorAvatar}
                          alt={featuredProject.creator}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}>
                          CREATED BY
                        </div>
                        <div className="text-[#212121] dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 600 }}>
                          {featuredProject.creator.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedBorderCard>
          </Link>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            {/* Desktop Category Buttons */}
            <div className="hidden md:flex items-center gap-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 border transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? 'border-[#1782FF] bg-[#1782FF]/10 text-[#1782FF]'
                      : 'border-border hover:border-[#1782FF] hover:text-[#1782FF] text-[#212121] dark:text-white'
                  }`}
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Dropdowns Container */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Category Dropdown - Mobile Only */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="md:hidden flex items-center gap-2 px-4 py-2 border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 hover:border-[#1782FF] transition-colors cursor-pointer focus:outline-none focus:border-[#1782FF] flex-1 text-[#212121] dark:text-white"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                >
                  <span>CATEGORIES</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="backdrop-blur-md bg-card/95 min-w-[200px]">
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="py-3 cursor-pointer flex items-center justify-between text-[#212121] dark:text-white"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                    >
                      {category}
                      {selectedCategory === category && <Check className="h-4 w-4 text-[#1782FF]" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  className="flex items-center gap-2 px-4 py-2 border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 hover:border-[#1782FF] transition-colors cursor-pointer focus:outline-none focus:border-[#1782FF] flex-1 md:flex-none text-[#212121] dark:text-white"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                >
                  {sortBy.replace('_', ' ')}
                  <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="backdrop-blur-md bg-card/95 min-w-[240px]">
                  <DropdownMenuItem
                    onClick={() => setSortBy('NEW_PROJECTS')}
                    className="py-3 cursor-pointer flex items-center justify-between text-[#212121] dark:text-white"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                  >
                    NEW PROJECTS
                    {sortBy === 'NEW_PROJECTS' && <Check className="h-4 w-4 text-[#1782FF]" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortBy('POPULAR')}
                    className="py-3 cursor-pointer flex items-center justify-between text-[#212121] dark:text-white"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                  >
                    POPULAR
                    {sortBy === 'POPULAR' && <Check className="h-4 w-4 text-[#1782FF]" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setSortBy('FOLLOWING')}
                    className="py-3 cursor-pointer flex items-center justify-between text-[#212121] dark:text-white"
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                  >
                    FOLLOWING
                    {sortBy === 'FOLLOWING' && <Check className="h-4 w-4 text-[#1782FF]" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}