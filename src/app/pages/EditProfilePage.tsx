import { useState } from 'react';
import { motion } from 'motion/react';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MoonDustBackground } from '../components/MoonDustBackground';
import gridBg from 'figma:asset/64d422cd649278d2dc98f1f81a8e7ddfd6f1ef61.png';
import darkGridBg from 'figma:asset/c9f5c31924abaf13960f0dbfc47a54853bc08bcc.png';
import coverImageSrc from 'figma:asset/b767d3eff5636a47e9f2d57acbe928002e53f4f9.png';
import presetCircuitBoard from 'figma:asset/16389c466d2a5a1fc73117ffb9e1b55722a22348.png';
import preset3DPrinter from 'figma:asset/2bd1d239bdd7e1cec35e9565f57ce0df20bfdf89.png';
import presetSplatter from 'figma:asset/2eb3edb4cce68980a5ba686d9483505c0232efa4.png';
import presetCyberCore from 'figma:asset/419b04a3e622878fe8352cfab1de7d7c7484c061.png';
import presetNebula from 'figma:asset/b6e2da593efb38a6a7164d3d30f998dc7d701182.png';
import { 
  Pencil,
  Trash,
  Plus,
  YoutubeLogo,
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TwitterLogo,
  FacebookLogo,
  TiktokLogo,
  ThreadsLogo,
  Globe
} from '@phosphor-icons/react';
import { Camera, Upload, Images, X, Check } from '@phosphor-icons/react';

type Section = 'profile' | 'password' | 'social' | 'payouts' | 'projects';

// Preset banner backgrounds
const presetBanners = [
  {
    id: 'current',
    label: 'Current',
    url: '',
  },
  {
    id: 'circuit-board',
    label: 'Circuit Board',
    url: presetCircuitBoard,
  },
  {
    id: '3d-printer',
    label: '3D Printer',
    url: preset3DPrinter,
  },
  {
    id: 'splatter',
    label: 'Neon Splatter',
    url: presetSplatter,
  },
  {
    id: 'cyber-core',
    label: 'Cyber Core',
    url: presetCyberCore,
  },
  {
    id: 'nebula',
    label: 'Nebula',
    url: presetNebula,
  },
];

// Mock project data
const mockProjects = [
  {
    id: '1',
    title: 'Arduino Obstacle Robot',
    category: 'ROBOTICS',
    status: 'Published',
    views: 1234,
    revenue: 127.50
  },
  {
    id: '2',
    title: 'Smart Home Hub with Raspberry Pi',
    category: 'RASPBERRY PI',
    status: 'Published',
    views: 892,
    revenue: 89.20
  },
  {
    id: '3',
    title: '3D Printed Drone Frame',
    category: '3D PRINTING',
    status: 'Draft',
    views: 0,
    revenue: 0
  }
];

export function EditProfilePage() {
  const [activeSection, setActiveSection] = useState<Section>('profile');
  
  // Profile fields
  const [name, setName] = useState('Sarah Chen');
  const [username, setUsername] = useState('@sarahchen');
  const [location, setLocation] = useState('San Francisco, CA');
  const [bio, setBio] = useState('Robotics researcher and maker with 10+ years of experience building autonomous systems. I share projects to help others learn advanced robotics concepts.');
  
  // Photo & Banner
  const [profilePhoto, setProfilePhoto] = useState('https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400');
  const [bannerImage, setBannerImage] = useState(coverImageSrc);
  const [selectedBannerId, setSelectedBannerId] = useState('current');
  const [showBannerPicker, setShowBannerPicker] = useState(false);
  const [profilePhotoHover, setProfilePhotoHover] = useState(false);
  const [bannerHover, setBannerHover] = useState(false);

  // Password field
  const [password, setPassword] = useState('');
  
  // Social profiles
  const [youtube, setYoutube] = useState('https://youtube.com/@sarahchen');
  const [github, setGithub] = useState('https://github.com/sarahchen');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/sarahchen');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('https://twitter.com/sarahchen');
  const [facebook, setFacebook] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [threads, setThreads] = useState('');
  const [website, setWebsite] = useState('https://sarahchen.dev');

  const navItems = [
    { id: 'profile' as Section, label: 'Edit Your Profile' },
    { id: 'password' as Section, label: 'Password' },
    { id: 'social' as Section, label: 'Social Profiles' },
    { id: 'payouts' as Section, label: 'Payouts' },
    { id: 'projects' as Section, label: 'Your Projects' }
  ];

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProfilePhotoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setProfilePhoto(ev.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleBannerUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          setBannerImage(ev.target?.result as string);
          setSelectedBannerId('custom');
          setShowBannerPicker(false);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleSelectPresetBanner = (banner: typeof presetBanners[0]) => {
    setSelectedBannerId(banner.id);
    setBannerImage(banner.id === 'current' ? coverImageSrc : banner.url);
    setShowBannerPicker(false);
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
      
      <div className="min-h-screen w-full relative pt-16">
        <div className="relative z-10 w-full">
          <section className="py-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Page Header */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">ACCOUNT SETTINGS</span>
                </div>
                <h1 className="font-normal text-[40px] tracking-tight uppercase text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument Extended', sans-serif", lineHeight: '1.1' }}>
                  Manage Your{' '}
                  <span className="gradient-text" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900 }}>
                    Profile
                  </span>
                </h1>
              </motion.div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Left Navigation */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 p-4 rounded-[2px] sticky top-24">
                    <nav className="space-y-1">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleSectionChange(item.id)}
                          className={`w-full text-left px-4 py-3 rounded-[2px] transition-all ${
                            activeSection === item.id
                              ? 'gradient-bg text-white'
                              : 'text-foreground hover:bg-white/50 dark:hover:bg-white/10'
                          }`}
                          style={{ 
                            fontFamily: "'IBM Plex Mono', monospace", 
                            fontSize: '0.875rem',
                            letterSpacing: '-0.02em'
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                  className="lg:col-span-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 p-6 sm:p-8 rounded-[2px]">
                    {/* Edit Your Profile Section */}
                    {activeSection === 'profile' && (
                      <div>
                        <h2 className="mb-6 text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}>
                          Edit Your Profile
                        </h2>

                        <div className="space-y-6">
                          {/* Banner Photo */}
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              BANNER PHOTO
                            </label>
                            <div className="relative">
                              {/* Banner image */}
                              <div 
                                className="relative w-full h-[180px] sm:h-[220px] rounded-[2px] overflow-hidden border border-white/20 dark:border-white/10 sm:cursor-pointer"
                                onMouseEnter={() => setBannerHover(true)}
                                onMouseLeave={() => setBannerHover(false)}
                              >
                                <ImageWithFallback
                                  src={bannerImage}
                                  alt="Banner"
                                  className="w-full h-full object-cover"
                                />
                                {/* Desktop hover overlay */}
                                <motion.div
                                  className="absolute inset-0 bg-black/50 hidden sm:flex flex-col items-center justify-center gap-3"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: bannerHover ? 1 : 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex gap-3">
                                    <button
                                      onClick={handleBannerUpload}
                                      className="flex items-center gap-2 px-4 py-2 rounded-[2px] text-white border border-white/30 hover:border-white/60 backdrop-blur-sm bg-white/10 transition-all"
                                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
                                    >
                                      <Upload className="h-4 w-4" weight="bold" />
                                      UPLOAD
                                    </button>
                                    <button
                                      onClick={() => setShowBannerPicker(!showBannerPicker)}
                                      className="flex items-center gap-2 px-4 py-2 rounded-[2px] text-white border border-white/30 hover:border-white/60 backdrop-blur-sm bg-white/10 transition-all"
                                      style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}
                                    >
                                      <Images className="h-4 w-4" weight="bold" />
                                      CHOOSE PRESET
                                    </button>
                                  </div>
                                  <span className="text-white/60 text-xs" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                    Recommended: 1500 x 500px
                                  </span>
                                </motion.div>
                                {/* Mobile edit badge on banner */}
                                <button
                                  onClick={() => setShowBannerPicker(!showBannerPicker)}
                                  className="sm:hidden absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white active:scale-95 transition-transform"
                                >
                                  <Upload className="h-4 w-4" weight="bold" />
                                </button>
                              </div>
                              {/* Profile photo overlapping below banner */}
                              <div className="absolute left-6 -bottom-[50px] sm:-bottom-[60px] z-10">
                                <div 
                                  className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden border-4 border-white dark:border-[#1a1a2e] cursor-pointer shadow-lg"
                                  onMouseEnter={() => setProfilePhotoHover(true)}
                                  onMouseLeave={() => setProfilePhotoHover(false)}
                                  onClick={handleProfilePhotoUpload}
                                >
                                  <ImageWithFallback
                                    src={profilePhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                  />
                                  {/* Desktop hover overlay */}
                                  <motion.div
                                    className="absolute inset-0 bg-black/60 hidden sm:flex flex-col items-center justify-center rounded-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: profilePhotoHover ? 1 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Camera className="h-6 w-6 text-white mb-1" weight="bold" />
                                    <span className="text-white text-[10px]" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>UPDATE</span>
                                  </motion.div>
                                  {/* Mobile camera badge */}
                                  <div className="sm:hidden absolute inset-0 flex items-center justify-center bg-black/40 rounded-full text-white">
                                    <Camera className="h-5 w-5" weight="bold" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Banner Preset Picker */}
                            {showBannerPicker && (
                              <motion.div
                                className="mt-16 p-4 rounded-[2px] border border-white/20 dark:border-white/10 backdrop-blur-lg bg-white/40 dark:bg-black/20"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="flex items-center justify-center mb-3 relative">
                                  <span className="text-[#212121] dark:text-white" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                    CHOOSE A BACKGROUND
                                  </span>
                                  <button onClick={() => setShowBannerPicker(false)} className="absolute right-0 text-[#212121]/60 dark:text-white/60 hover:text-[#212121] dark:hover:text-white transition-colors">
                                    <X className="h-4 w-4" weight="bold" />
                                  </button>
                                </div>
                                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                  {presetBanners.map((banner) => (
                                    <button
                                      key={banner.id}
                                      onClick={() => handleSelectPresetBanner(banner)}
                                      className={`relative aspect-[3/2] rounded-[2px] overflow-hidden border-2 transition-all hover:scale-105 ${
                                        selectedBannerId === banner.id
                                          ? 'border-[#1782FF] shadow-[0_0_12px_rgba(23,130,255,0.4)]'
                                          : 'border-transparent hover:border-white/40'
                                      }`}
                                    >
                                      <ImageWithFallback
                                        src={banner.id === 'current' ? coverImageSrc : banner.url}
                                        alt={banner.label}
                                        className="w-full h-full object-cover"
                                      />
                                      {selectedBannerId === banner.id && (
                                        <div className="absolute inset-0 bg-[#1782FF]/30 flex items-center justify-center">
                                          <Check className="h-5 w-5 text-white" weight="bold" />
                                        </div>
                                      )}
                                      <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1 py-0.5">
                                        <span className="text-white text-[9px] uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{banner.label}</span>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                                <div className="mt-3 flex justify-end">
                                  <button
                                    onClick={handleBannerUpload}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-[#1782FF] border border-[#1782FF]/30 hover:border-[#1782FF] text-xs transition-all"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                                  >
                                    <Upload className="h-3 w-3" weight="bold" />
                                    UPLOAD YOUR OWN
                                  </button>
                                </div>
                              </motion.div>
                            )}

                            {/* Spacer for profile photo overflow */}
                            <div className="h-[40px] sm:h-[45px]" />

                          </div>

                          {/* Name */}
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              NAME
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Username */}
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              USERNAME
                            </label>
                            <input
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Location */}
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              LOCATION
                            </label>
                            <input
                              type="text"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Bio */}
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              BIO
                            </label>
                            <textarea
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              className="w-full min-h-[150px] px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none resize-y transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}
                            />
                          </div>

                          <Button
                            className="text-white relative overflow-hidden group"
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
                            <span className="relative z-10">SAVE</span>
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Password Section */}
                    {activeSection === 'password' && (
                      <div>
                        <h2 className="mb-6 text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}>
                          Password
                        </h2>

                        <div className="space-y-6">
                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              NEW PASSWORD
                            </label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter new password"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          <div>
                            <label 
                              className="block mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              CONFIRM PASSWORD
                            </label>
                            <input
                              type="password"
                              placeholder="Confirm new password"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          <Button
                            className="text-white relative overflow-hidden group"
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
                            <span className="relative z-10">UPDATE PASSWORD</span>
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Social Profiles Section */}
                    {activeSection === 'social' && (
                      <div>
                        <h2 className="mb-6 text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}>
                          Social Profiles
                        </h2>

                        <div className="space-y-6">
                          {/* YouTube */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <YoutubeLogo className="h-4 w-4" weight="fill" />
                              YOUTUBE
                            </label>
                            <input
                              type="url"
                              value={youtube}
                              onChange={(e) => setYoutube(e.target.value)}
                              placeholder="https://youtube.com/@yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* GitHub */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <GithubLogo className="h-4 w-4" weight="fill" />
                              GITHUB
                            </label>
                            <input
                              type="url"
                              value={github}
                              onChange={(e) => setGithub(e.target.value)}
                              placeholder="https://github.com/yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* LinkedIn */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <LinkedinLogo className="h-4 w-4" weight="fill" />
                              LINKEDIN
                            </label>
                            <input
                              type="url"
                              value={linkedin}
                              onChange={(e) => setLinkedin(e.target.value)}
                              placeholder="https://linkedin.com/in/yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Instagram */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <InstagramLogo className="h-4 w-4" weight="fill" />
                              INSTAGRAM
                            </label>
                            <input
                              type="url"
                              value={instagram}
                              onChange={(e) => setInstagram(e.target.value)}
                              placeholder="https://instagram.com/yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Twitter */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <TwitterLogo className="h-4 w-4" weight="fill" />
                              TWITTER
                            </label>
                            <input
                              type="url"
                              value={twitter}
                              onChange={(e) => setTwitter(e.target.value)}
                              placeholder="https://twitter.com/yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Facebook */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <FacebookLogo className="h-4 w-4" weight="fill" />
                              FACEBOOK
                            </label>
                            <input
                              type="url"
                              value={facebook}
                              onChange={(e) => setFacebook(e.target.value)}
                              placeholder="https://facebook.com/yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* TikTok */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <TiktokLogo className="h-4 w-4" weight="fill" />
                              TIKTOK
                            </label>
                            <input
                              type="url"
                              value={tiktok}
                              onChange={(e) => setTiktok(e.target.value)}
                              placeholder="https://tiktok.com/@yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Threads */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <ThreadsLogo className="h-4 w-4" weight="fill" />
                              THREADS
                            </label>
                            <input
                              type="url"
                              value={threads}
                              onChange={(e) => setThreads(e.target.value)}
                              placeholder="https://threads.net/@yourname"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          {/* Website */}
                          <div>
                            <label 
                              className="flex items-center gap-2 mb-2 text-[#212121] dark:text-white"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 400, letterSpacing: '-0.02em' }}
                            >
                              <Globe className="h-4 w-4" weight="fill" />
                              WEBSITE
                            </label>
                            <input
                              type="url"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                              placeholder="https://yourwebsite.com"
                              className="w-full px-4 py-3 border border-border bg-background/50 text-foreground focus:border-[#1782FF] focus:outline-none transition-colors rounded-[2px]"
                              style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem' }}
                            />
                          </div>

                          <Button
                            className="text-white relative overflow-hidden group"
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
                            <span className="relative z-10">SAVE</span>
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Payouts Section */}
                    {activeSection === 'payouts' && (
                      <div>
                        <h2 className="mb-6 text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}>
                          Payouts
                        </h2>

                        <div className="space-y-6">
                          <p className="text-[#212121]/80 dark:text-white/80" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', lineHeight: '1.6' }}>
                            Connect your bank account to receive payments from makers who support your projects.
                          </p>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              className="w-full sm:w-auto text-white border-none relative overflow-hidden group"
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
                              <span className="relative z-10">UPDATE BANK INFORMATION</span>
                            </Button>
                          </motion.div>

                          <div className="flex items-center gap-2">
                            <span className="text-[#212121]/60 dark:text-white/60 italic" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.75rem' }}>
                              Powered by
                            </span>
                            <svg className="h-4" viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill="#1782FF" className="dark:fill-white"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Your Projects Section */}
                    {activeSection === 'projects' && (
                      <div>
                        <h2 className="mb-6 text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.75rem', fontWeight: 700 }}>
                          Your Projects
                        </h2>

                        <div className="space-y-4">
                          {mockProjects.map((project) => (
                            <div 
                              key={project.id}
                              className="border border-white/20 bg-white/10 backdrop-blur-sm p-6 rounded-[2px] hover:border-[#1782FF] transition-colors"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3 className="text-[#212121] dark:text-white" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.125rem', fontWeight: 600 }}>
                                      {project.title}
                                    </h3>
                                    {project.status === 'Draft' && (
                                      <span 
                                        className="px-2 py-0.5 text-xs bg-[#0a1628] text-white border border-[#0a1628]/50 rounded-[2px]"
                                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                                      >
                                        DRAFT
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex flex-wrap gap-4 text-sm text-[#212121]/60 dark:text-white/60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                                    <span>CATEGORY: {project.category}</span>
                                    <span>VIEWS: {project.views.toLocaleString()}</span>
                                    <span>REVENUE: ${project.revenue.toFixed(2)}</span>
                                  </div>
                                </div>
                                
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    className="bg-gray-100 dark:bg-white/10 text-foreground dark:text-white border border-gray-300 dark:border-white/30 hover:bg-gray-200 dark:hover:bg-white/20 rounded-[2px]"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                                  >
                                    EDIT
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-gray-100 dark:bg-white/10 text-foreground dark:text-white border border-gray-300 dark:border-white/30 hover:bg-gray-200 dark:hover:bg-white/20 rounded-[2px]"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                                  >
                                    NEW VERSION
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 rounded-[2px]"
                                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem' }}
                                  >
                                    DELETE
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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