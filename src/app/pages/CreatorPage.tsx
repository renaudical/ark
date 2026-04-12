import { ThumbsUp, ChatCircle, GithubLogo, TwitterLogo, LinkedinLogo, YoutubeLogo, InstagramLogo, Globe, MapPin, CalendarBlank, Users, Eye, ArrowRight, Money, Gift } from '@phosphor-icons/react';
import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import coverImageSrc from 'figma:asset/b767d3eff5636a47e9f2d57acbe928002e53f4f9.png';
import { ThemeInitializer } from '../components/ThemeInitializer';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedNumber } from '../components/AnimatedNumber';
import { CategoryBadge } from '../components/CategoryBadge';

// Card SVG Paths
const cardSvgPaths = {
  p295e8380: "M6 1.5L7.326 4.827L10.5 5.649L8.559 8.058L8.829 11.625L6 10.227L3.171 11.625L3.441 8.058L1.5 5.649L4.674 4.827L6 1.5Z",
  p3e661000: "M10.5 5.25C10.5 8.016 6 11.25 6 11.25C6 11.25 1.5 8.016 1.5 5.25C1.5 4.4554 1.8161 3.69757 2.34835 3.13418C2.8806 2.57079 3.59674 2.25 4.35 2.25C5.259 2.25 6.057 2.679 6.6 3.36C6.87226 3.71539 7.12774 3.71539 7.4 3.36C7.943 2.679 8.741 2.25 9.65 2.25C10.4033 2.25 11.1194 2.57079 11.6516 3.13418C12.1839 3.69757 12.5 4.4554 12.5 5.25H10.5Z"
};

// Mock creator data
const creatorData = {
  id: '1',
  name: 'Sarah Chen',
  username: '@sarahchen',
  avatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  coverImage: coverImageSrc,
  bio: 'Robotics engineer and educator passionate about making advanced robotics accessible to everyone. 10+ years building autonomous systems, computer vision solutions, and teaching the next generation of makers.',
  location: 'San Francisco, CA',
  joinDate: 'January 2024',
  followers: 897, // Updated follower count
  following: 342,
  totalViews: 125847,
  socialLinks: {
    twitter: 'https://twitter.com/sarahchen',
    github: 'https://github.com/sarahchen',
    linkedin: 'https://linkedin.com/in/sarahchen',
    youtube: 'https://youtube.com/@sarahchen',
    instagram: 'https://instagram.com/sarahchen',
    website: 'https://sarahchen.dev'
  }
};

const creatorProjects = [
  {
    id: '1',
    title: 'Autonomous Robot Arm with Vision',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    difficulty: 'ADVANCED',
    hearts: 489,
    comments: 234,
    supporters: 487
  },
  {
    id: '2',
    title: 'Self-Balancing Bike Robot',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    difficulty: 'ADVANCED',
    hearts: 512,
    comments: 278,
    supporters: 392
  },
  {
    id: '3',
    title: 'RC Mini-Wall-E',
    category: 'ROBOTICS',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
    difficulty: 'ADVANCED',
    hearts: 298,
    comments: 167,
    supporters: 314
  }
];

const donationTiers = [
  {
    amount: 3,
    label: 'BUY ME A COFFEE',
    description: 'Show your appreciation'
  },
  {
    amount: 10,
    label: 'SUPPORT MY WORK',
    description: 'Help fund new projects'
  },
  {
    amount: 25,
    label: 'PREMIUM SUPPORTER',
    description: 'Early access to content'
  },
  {
    amount: 0,
    label: 'CUSTOM AMOUNT',
    description: 'Enter your own amount'
  }
];

export function CreatorPage() {
  const { id } = useParams();
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleDonation = (amount: number) => {
    setSelectedDonation(amount);
    if (amount > 0) {
      setCustomAmount('');
    }
  };

  return (
    <>
      <ThemeInitializer />
      <MoonDustBackground className="z-[5]" />
      <NewHeader />
      
      <div className="min-h-screen w-full relative overflow-x-hidden pt-16">
        <div className="relative z-10 w-full">
          <main className="relative">
            {/* Gradient Overlay - Lowest layer (dark mode only) */}
            <div 
              className="absolute inset-x-0 pointer-events-none z-0 hidden dark:block"
              style={{
                top: '160px',
                height: '640px',
                background: 'linear-gradient(to bottom, rgba(10, 12, 41, 1) 0%, rgba(10, 12, 41, 0) 100%)'
              }}
            />
            
            {/* Cover Image */}
            <div className="h-[160px] md:h-[200px] relative overflow-hidden z-[2]">
              <div className="absolute inset-0 gradient-bg opacity-20" />
              <ImageWithFallback
                src={creatorData.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Profile Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="relative -mt-16 md:-mt-20 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-[#0A0A0A] overflow-hidden bg-[#ECECF0] relative">
                      <ImageWithFallback
                        src={creatorData.avatar}
                        alt={creatorData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name & Actions */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
                    <div>
                      <h1 className="font-['PP_Monument_Extended',sans-serif] font-black text-3xl md:text-4xl tracking-tight uppercase text-[#212121] dark:text-white mb-1">
                        {creatorData.name}
                      </h1>
                      <p className="font-['IBM_Plex_Mono',monospace] text-sm text-[#717182] dark:text-[#BEBEC8]">
                        {creatorData.username}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={handleFollow}
                        className="px-6 py-2.5 rounded-[2px] font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider transition-all flex items-center gap-2 border border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white"
                      >
                        <ThumbsUp size={16} weight={isFollowing ? 'fill' : 'bold'} />
                        <span>
                          {isFollowing ? 'FOLLOWING CREATOR' : 'FOLLOW CREATOR'}
                        </span>
                      </button>
                      <button
                        className="px-6 py-2.5 rounded-[2px] font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider transition-all flex items-center gap-2 border border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white"
                      >
                        <ChatCircle size={16} weight="bold" />
                        <span>
                          MESSAGE
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-[rgba(190,190,200,0.25)]">
                  <div>
                    <AnimatedNumber 
                      value={creatorData.followers} 
                      className="font-['IBM_Plex_Mono',monospace] font-bold text-2xl text-[#212121] dark:text-white"
                    />
                    <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">
                      FOLLOWERS
                    </p>
                  </div>
                  <div>
                    <AnimatedNumber 
                      value={creatorData.following} 
                      className="font-['IBM_Plex_Mono',monospace] font-bold text-2xl text-[#212121] dark:text-white"
                    />
                    <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">
                      FOLLOWING
                    </p>
                  </div>
                  <div>
                    <AnimatedNumber 
                      value={creatorProjects.length} 
                      className="font-['IBM_Plex_Mono',monospace] font-bold text-2xl text-[#212121] dark:text-white"
                    />
                    <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 pb-16">
                {/* Projects - Shows first on mobile, second on desktop */}
                <div className="order-1 lg:order-2 lg:col-span-2">
                  <div className="mb-6">
                    <h2 className="font-['PP_Monument',sans-serif] font-bold text-lg uppercase text-[#212121] dark:text-white">
                      Projects
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {creatorProjects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="group block bg-white/40 dark:bg-[rgba(0,0,0,0.4)] border border-[rgba(190,190,200,0.25)] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.05)] dark:shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)] hover:border-[#1782FF] transition-colors rounded-[2px] overflow-hidden"
                      >
                        {/* Image Container */}
                        <div className="bg-[#ECECF0] h-48 overflow-hidden relative">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Category Badge */}
                          <div className="absolute top-3.5 right-3.5">
                            <CategoryBadge category={project.category} overlay />
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-4 flex flex-col gap-3">
                          {/* Meta Data */}
                          <div className="flex items-center gap-2 h-[18px]">
                            {/* Difficulty */}
                            <div className="flex items-center pr-2 border-r border-[rgba(190,190,200,0.25)]">
                              <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                                {project.difficulty}
                              </span>
                            </div>
                            
                            {/* Likes */}
                            <div className="flex items-center gap-1 pr-2 border-r border-[rgba(190,190,200,0.25)]">
                              <ThumbsUp className="h-3 w-3 text-[#717182] dark:text-[#BEBEC8]" weight="fill" />
                              <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">
                                {project.hearts}
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
                                {project.comments}
                              </span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="font-['PP_Monument',sans-serif] font-bold text-lg leading-tight text-[#212121] dark:text-white group-hover:text-[#1782FF] transition-colors">
                            {project.title}
                          </h3>

                          {/* Supporters */}
                          <div className="pt-2 border-t border-[rgba(190,190,200,0.25)]">
                            <div className="flex items-center gap-2">
                              <ThumbsUp size={14} weight="fill" className="text-[#1782FF]" />
                              <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">
                                {project.supporters} SUPPORTERS
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sidebar - Shows second on mobile, first on desktop */}
                <div className="order-2 lg:order-1 lg:col-span-1 space-y-6">
                  {/* About */}
                  <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-6 rounded-[2px]">
                    <h2 className="font-['PP_Monument',sans-serif] font-bold text-lg uppercase mb-4 text-[#212121] dark:text-white">
                      About
                    </h2>
                    <p className="font-['PP_Monument',sans-serif] text-sm leading-relaxed text-[#212121] dark:text-[#BEBEC8] mb-4">
                      {creatorData.bio}
                    </p>
                    
                    <div className="space-y-2 pt-4 border-t border-[rgba(190,190,200,0.25)]">
                      <div className="flex items-center gap-2 text-[#717182] dark:text-[#BEBEC8]">
                        <MapPin size={16} weight="fill" className="text-[#1782FF]" />
                        <span className="font-['IBM_Plex_Mono',monospace] text-xs">
                          {creatorData.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#717182] dark:text-[#BEBEC8]">
                        <CalendarBlank size={16} weight="fill" className="text-[#1782FF]" />
                        <span className="font-['IBM_Plex_Mono',monospace] text-xs">
                          Joined {creatorData.joinDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-6 rounded-[2px]">
                    <h2 className="font-['PP_Monument',sans-serif] font-bold text-lg uppercase mb-4 text-[#212121] dark:text-white">
                      Connect
                    </h2>
                    <div className="flex items-center justify-between gap-4">
                      {creatorData.socialLinks.twitter && (
                        <a
                          href={creatorData.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <TwitterLogo size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                      {creatorData.socialLinks.github && (
                        <a
                          href={creatorData.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <GithubLogo size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                      {creatorData.socialLinks.linkedin && (
                        <a
                          href={creatorData.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <LinkedinLogo size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                      {creatorData.socialLinks.youtube && (
                        <a
                          href={creatorData.socialLinks.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <YoutubeLogo size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                      {creatorData.socialLinks.instagram && (
                        <a
                          href={creatorData.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <InstagramLogo size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                      {creatorData.socialLinks.website && (
                        <a
                          href={creatorData.socialLinks.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity"
                        >
                          <Globe size={20} weight="fill" className="text-[#1782FF] dark:text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Support Creator */}
                  <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] p-6 rounded-[2px]">
                    <h2 className="font-['PP_Monument',sans-serif] font-bold text-lg uppercase mb-4 text-[#212121] dark:text-white">
                      Support Creator
                    </h2>
                    <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8] mb-4">
                      Help fund future projects and get early access to new content.
                    </p>

                    <div className="space-y-3 mb-4">
                      {donationTiers.map((tier, index) => (
                        <button
                          key={index}
                          onClick={() => handleDonation(tier.amount)}
                          className={`w-full p-4 border rounded-[2px] transition-all text-left ${
                            selectedDonation === tier.amount
                              ? 'border-[#1782FF] bg-[#1782FF]/10'
                              : 'border-[rgba(190,190,200,0.25)] hover:border-[#1782FF]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-['IBM_Plex_Mono',monospace] font-bold text-sm text-[#212121] dark:text-white">
                              {tier.amount > 0 ? `$${tier.amount}` : tier.label}
                            </span>
                            {tier.amount > 0 && (
                              <Gift
                                size={16}
                                weight={selectedDonation === tier.amount ? 'fill' : 'regular'}
                                className={selectedDonation === tier.amount ? 'text-[#1782FF]' : 'text-[#717182]'}
                              />
                            )}
                          </div>
                          <p className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">
                            {tier.amount > 0 ? tier.label : tier.description}
                          </p>
                        </button>
                      ))}
                    </div>

                    {selectedDonation === 0 && (
                      <div className="mb-4">
                        <input
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full p-3 border border-[rgba(190,190,200,0.25)] rounded-[2px] bg-white/40 dark:bg-black/40 font-['IBM_Plex_Mono',monospace] text-sm focus:outline-none focus:border-[#1782FF] text-[#212121] dark:text-white"
                        />
                      </div>
                    )}

                    <Button className="w-full text-white relative overflow-hidden group font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">
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
                        <Gift size={16} weight="fill" className="mr-2" />
                        SEND SUPPORT
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <NewFooter />
        </div>
      </div>
    </>
  );
}