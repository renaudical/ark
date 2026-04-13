import { ArrowRight, Sparkle, ShoppingBag, Chats, FileText, ShoppingCart, GitBranch, CurrencyDollar, GraduationCap, Check, Upload } from '@phosphor-icons/react';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { Button } from '../components/ui/button';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { GlitchText } from '../components/GlitchText';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { CategoryBadge } from '../components/CategoryBadge';
import { ProjectCard } from '../components/ProjectCard';
import svgPaths from '../../imports/svg-eyw8om6eyq';
import svgPathsMission from '../../imports/svg-mz4slkaxz9';
import cardSvgPaths from '../../imports/svg-64kd7g2p36';

const projects = [
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
];

export function NewHomePage() {
  return (
    <>
      <MoonDustBackground />
      <NewHeader />
      
      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <main>
            {/* Hero Section */}
            <section className="pt-16 md:pt-24 pb-12 md:pb-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#1782FF] mb-8">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                  </svg>
                  <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">
                    <span className="font-semibold text-[#1782FF]">MISSION:</span>
                    <span className="text-[#212121] dark:text-white"> DEMOCRATIZE STEM KNOWLEDGE</span>
                  </p>
                </div>

                {/* Headline - spans full width */}
                <h1 className="font-['PP_Monument_Extended',sans-serif] font-normal text-[40px] tracking-tight mb-8 uppercase">
                  Share. Learn.{' '}
                  <GlitchText 
                    className="gradient-text" 
                    style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900 }}
                  >
                    Create.
                  </GlitchText>
                </h1>

                {/* Two Column Grid - Left Content and Right Stats */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column: Description + Bullet Points + CTAs */}
                  <div className="space-y-8">
                    {/* Description */}
                    <p className="font-['PP_Monument',sans-serif] text-lg text-muted-foreground">
                      A community platform where STEM creators earn by sharing detailed project documentation, while makers get low-priced access to comprehensive guides, shopping lists, and project Q&A.
                    </p>

                    {/* Feature Points */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground">Detailed Instructions</p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">Step-by-step guides with visuals and code</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground">Complete Shopping Lists</p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">All materials and tools you'll need, quantified</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground">Community Q&A</p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">Ask questions directly to project and fellow makers</p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-row flex-wrap gap-4">
                      <Link to="/projects" className="flex-1 md:flex-none min-w-[140px]">
                        <Button className="w-full text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group">
                          <div
                            className="absolute inset-0"
                            style={{
                              background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                            }}
                          />
                          <div
                            className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                          <span className="relative z-10">FIND A PROJECT</span>
                        </Button>
                      </Link>
                      <Link to="/create-project-2" className="flex-1 md:flex-none min-w-[140px]">
                        <Button className="w-full font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white transition-colors" variant="outline">
                          START CREATING
                          <ArrowRight size={14} weight="bold" className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Stats Card */}
                  <div className="relative">
                    <div className="relative bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-6 rounded-[2px]">
                      {/* Top-left corner bracket */}
                      <div className="absolute -top-[7px] -left-[7px] w-4 h-4 border-l-2 border-t-2 border-[#1782FF]" />
                      {/* Top-right corner bracket */}
                      <div className="absolute -top-[7px] -right-[7px] w-4 h-4 border-r-2 border-t-2 border-[#B02BED]" />
                      {/* Bottom-left corner bracket */}
                      <div className="absolute -bottom-[7px] -left-[7px] w-4 h-4 border-l-2 border-b-2 border-[#1782FF]" />
                      {/* Bottom-right corner bracket */}
                      <div className="absolute -bottom-[7px] -right-[7px] w-4 h-4 border-r-2 border-b-2 border-[#B02BED]" />
                      
                      {/* Mission Status Label */}
                      <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF] mb-4">
                        MISSION STATUS
                      </p>

                      {/* Status - Active */}
                      <div className="mb-6 flex items-center gap-3">
                        <div className="w-1 h-8 bg-[#1782FF] animate-[cursor-blink_1.5s_steps(1)_infinite]" />
                        <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[32px] leading-[32px] text-foreground tracking-wider">
                          ACTIVE
                        </p>
                      </div>

                      {/* Stats Grid - 2x2 */}
                      <div className="grid grid-cols-2 gap-6 mb-4 pb-4">
                        <div>
                          <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[32px] leading-[48px] text-foreground tracking-wider">
                            <AnimatedNumber value={1247} />
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            PROJECTS
                          </p>
                        </div>
                        <div>
                          <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[32px] leading-[48px] text-foreground tracking-wider">
                            <AnimatedNumber value={8794} />
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            MAKERS
                          </p>
                        </div>
                        <div>
                          <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[32px] leading-[48px] text-foreground tracking-wider">
                            <AnimatedNumber value={493} />
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            CREATORS
                          </p>
                        </div>
                        <div>
                          <p className="font-['IBM_Plex_Mono',monospace] font-bold text-[32px] leading-[48px] text-foreground tracking-wider">
                            <AnimatedNumber value={11365} />
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            CONVERSATIONS
                          </p>
                        </div>
                      </div>

                      {/* Live Status */}
                      <div className="pt-4 border-t border-[rgba(190,190,200,0.25)] flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }} />
                        <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">
                          LIVE: <AnimatedNumber value={342} /> CREATORS ONLINE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Projects Section */}
            <section className="py-16 md:py-24 bg-white/40 dark:bg-black/20 backdrop-blur-lg">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4">
                        <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">TRENDING</span>
                      </div>
                      <h2 className="font-['PP_Monument_Extended',sans-serif] font-normal text-2xl md:text-3xl tracking-tight uppercase">
                        Popular Projects
                      </h2>
                    </div>
                    <Link to="/projects" className="hidden sm:block">
                      <Button
                        variant="outline"
                        className="font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white transition-colors"
                      >
                        ALL PROJECTS
                        <ArrowRight size={14} weight="bold" className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex justify-end mt-6 sm:hidden">
                    <Link to="/projects">
                      <Button
                        variant="outline"
                        className="font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white transition-colors"
                      >
                        ALL PROJECTS
                        <ArrowRight size={14} weight="bold" className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      image={project.image}
                      difficulty={project.difficulty}
                      rating={project.rating}
                      comments={project.comments}
                      author={project.author}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* For Creators Section */}
            <section className="py-16 md:py-24 bg-white/40 dark:bg-black/20 backdrop-blur-lg">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - For Creators */}
                  <div>
                    {/* Section Label */}
                    <div className="inline-block border border-[#1782FF] px-4 py-1 mb-6">
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">FOR CREATORS</span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-['PP_Monument_Extended',sans-serif] font-normal text-3xl md:text-4xl tracking-tight mb-4 uppercase">
                      Turn Your Projects Into <span className="gradient-text font-black">Revenue</span>
                    </h2>

                    {/* Description */}
                    <p className="font-['PP_Monument',sans-serif] text-lg text-muted-foreground mb-8">
                      Stop letting YouTube take all the value from your hard work. Share detailed documentation and earn money while helping thousands of makers build amazing things.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#1782FF] rounded-[2px] flex-shrink-0">
                          <Check size={16} weight="bold" className="text-white" />
                        </div>
                        <p className="font-['PP_Monument',sans-serif] text-base text-[#212121] dark:text-white">
                          Get paid monthly based on project engagement
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#1782FF] rounded-[2px] flex-shrink-0">
                          <Check size={16} weight="bold" className="text-white" />
                        </div>
                        <p className="font-['PP_Monument',sans-serif] text-base text-[#212121] dark:text-white">
                          Build your reputation in the maker community
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-[#1782FF] rounded-[2px] flex-shrink-0">
                          <Check size={16} weight="bold" className="text-white" />
                        </div>
                        <p className="font-['PP_Monument',sans-serif] text-base text-[#212121] dark:text-white">
                          Connect with fellow creators and enthusiasts
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link to="/create-project-2">
                      <Button className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group">
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                        <span className="relative z-10 flex items-center">
                          <Upload size={16} weight="bold" className="mr-2" />
                          START CREATING
                        </span>
                      </Button>
                    </Link>
                  </div>

                  {/* Right Side - Stats Card */}
                  <div className="relative">
                    <div className="relative bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-8 rounded-[2px]">
                      {/* Top-left corner bracket */}
                      <div className="absolute -top-[7px] -left-[7px] w-4 h-4 border-l-2 border-t-2 border-[#1782FF]" />
                      {/* Top-right corner bracket */}
                      <div className="absolute -top-[7px] -right-[7px] w-4 h-4 border-r-2 border-t-2 border-[#B02BED]" />
                      {/* Bottom-left corner bracket */}
                      <div className="absolute -bottom-[7px] -left-[7px] w-4 h-4 border-l-2 border-b-2 border-[#1782FF]" />
                      {/* Bottom-right corner bracket */}
                      <div className="absolute -bottom-[7px] -right-[7px] w-4 h-4 border-r-2 border-b-2 border-[#B02BED]" />
                      
                      {/* Earnings Label */}
                      <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF] mb-4">
                        AVERAGE CREATOR EARNINGS
                      </p>

                      {/* Main Stat */}
                      <div className="mb-8">
                        <p className="font-['PP_Monument_Extended',sans-serif] font-black text-5xl mb-2">
                          <span className="gradient-text">$847</span>
                          <span className="font-['PP_Monument',sans-serif] text-xl text-muted-foreground">/month</span>
                        </p>
                        <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                          FOR 5-10 QUALITY PROJECTS
                        </p>
                      </div>

                      {/* Secondary Stats */}
                      <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-[rgba(190,190,200,0.25)]">
                        <div>
                          <p className="font-['PP_Monument_Extended',sans-serif] font-black text-3xl gradient-text mb-1">
                            $2.4K
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            TOP 10% EARN
                          </p>
                        </div>
                        <div>
                          <p className="font-['PP_Monument_Extended',sans-serif] font-black text-3xl gradient-text mb-1">
                            $156
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                            FIRST PROJECT AVG
                          </p>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="relative pl-4 border-l-2 border-[#1782FF]">
                        <p className="font-['PP_Monument',sans-serif] text-sm text-[#212121] dark:text-white mb-3 italic">
                          "I've made more from 3 detailed projects on ARK than I ever did from my YouTube channel with 50K subscribers."
                        </p>
                        <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-muted-foreground">
                          — JAMES M., ROBOTICS CREATOR
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile App Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                  {/* Section Label */}
                  <div className="inline-block border border-[#1782FF] px-4 py-1 mb-6">
                    <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">MOBILE APP</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-['PP_Monument_Extended',sans-serif] font-normal text-2xl md:text-3xl tracking-tight mb-4 uppercase text-[#212121] dark:text-white">
                    Take ARK Anywhere
                  </h2>

                  {/* Description */}
                  <p className="font-['PP_Monument',sans-serif] text-lg text-muted-foreground mb-8">
                    Access projects in the workshop, follow instructions on the go, and stay connected with the maker community.
                  </p>

                  {/* App Store Badges */}
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a href="#" className="inline-block">
                      <div className="bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-[2px] flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <div className="text-left">
                          <p className="text-[10px] text-white/80 font-['PP_Monument',sans-serif]">Download on the</p>
                          <p className="text-base font-['PP_Monument',sans-serif] font-bold text-white">App Store</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="inline-block">
                      <div className="bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-[2px] flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <div className="text-left">
                          <p className="text-[10px] text-white/80 font-['PP_Monument',sans-serif]">GET IT ON</p>
                          <p className="text-base font-['PP_Monument',sans-serif] font-bold text-white">Google Play</p>
                        </div>
                      </div>
                    </a>
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