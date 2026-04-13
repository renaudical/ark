import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Link, useNavigate } from 'react-router';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectCard } from './ProjectCard';
import { CategoryBadge } from './CategoryBadge';
import { 
  ThumbsUp,
  Chat,
  ShareNetwork, 
  Upload, 
  Rocket, 
  CaretDown, 
  Printer, 
  PaperPlaneTilt, 
  UserPlus, 
  CaretLeft, 
  CaretRight,
  Copy,
  Check,
  TwitterLogo,
  GithubLogo,
  YoutubeLogo,
  Globe,
  FacebookLogo,
  ListChecks,
  Basket,
  ChatsCircle,
  FilePdf,
  PencilSimple,
  CopySimple,
  Eye,
  Users,
  CurrencyDollar,
  ArrowUp,
  Clock,
  ToggleLeft,
  ToggleRight,
  Bank,
} from '@phosphor-icons/react';

// Mock project data - in real app this would come from API/props
const project = {
  title: 'Autonomous Robot Arm with Computer Vision',
  creator: 'Sarah Chen',
  creatorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
  category: 'ROBOTICS',
  difficulty: 'ADVANCED',
  hearts: 1247,
  comments: 234,
  videoUrl: 'https://www.actionsatisfaction.com/ARK.mp4',
  image: 'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGVsZWN0cm9uaWNzJTIwY2lyY3VpdHxlbnwxfHx8fDE3NzI0NDI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  description: 'Complete build guide for a 6-axis precision robot arm featuring computer vision, real-time object detection, and custom inverse kinematics solver.',
  suggestedDonation: 19.99,
  creatorBio: 'Robotics researcher and maker with 10+ years of experience building autonomous systems. I share projects to help others learn advanced robotics concepts.',
  creatorSocials: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    website: 'https://example.com',
    youtube: 'https://youtube.com',
  },
  instructions: [
    {
      step: 1,
      title: 'Gather Materials and Tools',
      content: 'Before starting, ensure you have all the necessary components. You\'ll need servo motors (6x MG996R), an Arduino Mega, a Raspberry Pi 4, and the custom PCB. Additionally, gather your tools: soldering iron, wire strippers, and a multimeter for testing connections.'
    },
    {
      step: 2,
      title: 'Assemble the Base Structure',
      content: 'Start by assembling the aluminum frame base. Use the M5 bolts and T-nuts to secure the corner brackets. Make sure everything is square and level before tightening. The base needs to be sturdy as it will support the entire arm assembly.',
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGFzc2VtYmx5JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc3MjcyMDU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      imageCaption: 'Example of the assembled base structure showing proper alignment and T-nut placement'
    },
    {
      step: 3,
      title: 'Install Servo Motors',
      content: 'Mount each servo motor in its designated position according to the assembly diagram. Pay careful attention to the orientation of each servo. Use the included servo horns and ensure they are aligned at the zero position before securing.'
    },
    {
      step: 4,
      title: 'Wire the Electronics',
      content: 'Follow the wiring diagram carefully. Connect each servo to the corresponding PWM output on the Arduino. Power the servos through the external 6V power supply, NOT through the Arduino. Double-check all connections before applying power.',
      image: 'https://images.unsplash.com/photo-1473831818960-c89731aabc3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2byUyMG1vdG9yJTIwd2lyaW5nJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzcyNzIwNTcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      imageCaption: 'Wiring layout showing proper connection between servos and Arduino PWM pins'
    },
    {
      step: 5,
      title: 'Install the Camera Module',
      content: 'Mount the Raspberry Pi Camera Module 2 to the custom 3D-printed mount at the end effector. Connect it to the Raspberry Pi using the ribbon cable. Make sure the cable is secured and won\'t interfere with the arm\'s movement.',
      image: 'https://images.unsplash.com/photo-1629739884912-92f6255f1920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBwaSUyMGNhbWVyYSUyMG1vZHVsZXxlbnwxfHx8fDE3NzI3MjA1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      step: 6,
      title: 'Upload the Control Software',
      content: 'Clone the GitHub repository and upload the Arduino sketch for servo control. Then SSH into the Raspberry Pi and install the Python dependencies for computer vision. Configure the inverse kinematics parameters for your specific build.'
    },
    {
      step: 7,
      title: 'Calibration and Testing',
      content: 'Run the calibration routine to set the servo limits and zero positions. Test each axis individually before attempting combined movements. Use the test script to verify the camera is detecting objects correctly. Fine-tune the PID parameters for smooth motion.'
    },
  ],
  shoppingList: [
    {
      category: 'Motors & Actuators',
      items: [
        { name: 'MG996R High Torque Servo Motor', quantity: 6, price: 12.99, link: '#' },
        { name: 'SG90 Micro Servo (for gripper)', quantity: 2, price: 3.99, link: '#' },
      ]
    },
    {
      category: 'Electronics',
      items: [
        { name: 'Arduino Mega 2560', quantity: 1, price: 38.99, link: '#' },
        { name: 'Raspberry Pi 4 (4GB)', quantity: 1, price: 55.00, link: '#' },
        { name: 'Raspberry Pi Camera Module 2', quantity: 1, price: 29.99, link: '#' },
        { name: 'Custom PCB (Gerber files included)', quantity: 1, price: 15.00, link: '#' },
        { name: '6V 5A Power Supply', quantity: 1, price: 14.99, link: '#' },
      ]
    },
    {
      category: 'Hardware & Structure',
      items: [
        { name: '2020 Aluminum Extrusion (500mm)', quantity: 4, price: 8.99, link: '#' },
        { name: 'M5 T-Nuts and Bolts Kit', quantity: 1, price: 12.99, link: '#' },
        { name: 'Ball Bearings (608ZZ)', quantity: 6, price: 1.99, link: '#' },
        { name: '3D Printed Parts (STL files included)', quantity: 1, price: 0, link: '#' },
      ]
    },
    {
      category: 'Cables & Connectors',
      items: [
        { name: 'Jumper Wire Kit', quantity: 1, price: 6.99, link: '#' },
        { name: 'Servo Extension Cables (30cm)', quantity: 6, price: 8.99, link: '#' },
        { name: 'USB-C Cable', quantity: 1, price: 7.99, link: '#' },
      ]
    },
  ],
};

const creatorProjects = [
  {
    id: '5',
    title: 'Hexapod Walking Robot',
    creator: 'Sarah Chen',
    creatorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    category: 'ROBOTICS',
    difficulty: 'ADVANCED',
    hearts: 745,
    comments: 167,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1080',
    description: 'Six-legged robot with inverse kinematics and autonomous navigation',
  },
  {
    id: '9',
    title: 'Line Following Robot',
    creator: 'Sarah Chen',
    creatorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    category: 'ROBOTICS',
    difficulty: 'BEGINNER',
    hearts: 412,
    comments: 98,
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1080',
    description: 'Perfect first robotics project with sensors and Arduino',
  },
];

// Mock comments data
const mockComments = [
  {
    id: 1,
    author: 'Mike Anderson',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    isCreator: false,
    content: 'This is an incredible build! I\'m having trouble with the inverse kinematics calculations. Could you share more details about the math behind it?',
    timestamp: '2 days ago',
    replies: [
      {
        id: 2,
        author: 'Sarah Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        isCreator: true,
        content: 'Great question! The IK solver uses the geometric approach for the first 3 joints and Jacobian method for the wrist. I\'ll add a detailed math breakdown in the GitHub repo this week.',
        timestamp: '1 day ago',
      }
    ]
  },
  {
    id: 3,
    author: 'Emma Rodriguez',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    isCreator: false,
    content: 'What camera resolution do you recommend for best object detection performance? I have the v1 camera module.',
    timestamp: '3 days ago',
    replies: [
      {
        id: 4,
        author: 'Sarah Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
        isCreator: true,
        content: 'The v1 module will work but I recommend upgrading to v2 for better low-light performance. Run it at 640x480 for real-time detection - higher res slows down the Pi too much.',
        timestamp: '2 days ago',
      },
      {
        id: 5,
        author: 'James Kim',
        authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
        isCreator: false,
        content: 'I can confirm this - tried with v1 at 1080p and it was too laggy. 640x480 is the sweet spot!',
        timestamp: '1 day ago',
      }
    ]
  },
  {
    id: 6,
    author: 'Sarah Chen',
    authorAvatar: 'https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400',
    isCreator: true,
    content: 'Quick update everyone: I just pushed v2.1 of the code with better error handling and calibration scripts. Also added support for the HQ camera module!',
    timestamp: '5 hours ago',
    replies: []
  },
  {
    id: 7,
    author: 'Alex Kumar',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    isCreator: false,
    content: 'Successfully built this over the weekend! The instructions were crystal clear. One tip: use heat-set inserts for the 3D printed parts - makes assembly much easier.',
    timestamp: '1 week ago',
    replies: []
  },
];

export function ProjectDetailPage() {
  const navigate = useNavigate();
  const [isHearted, setIsHearted] = useState(false);
  const [heartCount, setHeartCount] = useState(project.hearts);
  const [isFollowing, setIsFollowing] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);
  const [shoppingListOpen, setShoppingListOpen] = useState(false);
  const [discussionOpen, setDiscussionOpen] = useState(true);
  const [commentInput, setCommentInput] = useState('');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isCreatorView, setIsCreatorView] = useState(false);

  // Mock project analytics data for creator view
  const projectAnalytics = {
    totalViews: 24892,
    viewsTrend: '+12.4%',
    totalShares: 1843,
    sharesTrend: '+8.2%',
    totalComments: 234,
    newComments: 18,
    totalBackers: 312,
    backerAmount: 4847.50,
    backerTrend: '+22.1%',
    avgSupportAmount: 15.54,
    totalLikes: 1247,
    totalFollowers: 892,
    publishedDate: 'Jan 15, 2026',
  };

  const handleHeart = () => {
    setIsHearted(!isHearted);
    setHeartCount(isHearted ? heartCount - 1 : heartCount + 1);
  };

  const totalCost = project.shoppingList.reduce((total, category) => {
    return total + category.items.reduce((catTotal, item) => catTotal + (item.price * item.quantity), 0);
  }, 0);

  // Auto-rotate projects carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentProjectIndex((prev) => (prev + 1) % creatorProjects.length);
      }, 10000); // 10 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % creatorProjects.length);
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + creatorProjects.length) % creatorProjects.length);
  };

  const handleCopyUrl = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <section className="py-6 sm:py-12 min-h-screen relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 min-w-0">
            {/* Video/Image Section */}
            <motion.div
              className="backdrop-blur-lg bg-white/50 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] overflow-hidden mb-8 rounded-[2px] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {project.videoUrl ? (
                  <video
                    className="absolute top-0 left-0 w-full h-full object-contain"
                    src={project.videoUrl}
                    controls
                    controlsList="nodownload"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                )}
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
                  <ThumbsUp
                    className={`h-4 w-4 transition-all ${isHearted ? 'text-white' : ''}`}
                    weight={isHearted ? 'fill' : 'regular'}
                  />
                  <span>{heartCount}</span>
                </button>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1.5 text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}>
                  <Chat className="h-4 w-4" />
                  {project.comments}
                </span>
                <span className="text-muted-foreground hidden sm:inline">•</span>
                <button
                  onClick={() => setShareDialogOpen(true)}
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
                  variant={isFollowing ? "outline" : "default"}
                  className={`w-full sm:w-auto ${isFollowing ? "border-foreground" : "text-white relative overflow-hidden group"}`}
                  onClick={() => setIsFollowing(!isFollowing)}
                  style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                >
                  {!isFollowing && (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </>
                  )}
                  <ThumbsUp className={`mr-2 h-4 w-4 ${!isFollowing ? 'relative z-10' : ''}`} />
                  <span className={!isFollowing ? 'relative z-10' : ''}>{isFollowing ? 'FOLLOWING' : 'FOLLOW PROJECT'}</span>
                </Button>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                  <Button 
                    className="w-full sm:w-auto text-white relative overflow-hidden group"
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
                    <div
                      className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <Rocket className="mr-2 h-5 w-5 relative z-10" weight="fill" />
                    <span className="relative z-10">SUPPORT ${project.suggestedDonation}</span>
                  </Button>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-center sm:text-left"
                    style={{ fontFamily: "'PP Monument', sans-serif" }}
                  >
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
                  { label: 'DISCUSSION', id: 'comments', icon: ChatsCircle }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      // Open the section if closed
                      if (link.id === 'instructions') setInstructionsOpen(true);
                      if (link.id === 'shopping-list') setShoppingListOpen(true);
                      if (link.id === 'comments') setDiscussionOpen(true);
                      // Scroll after a brief delay to allow section to expand
                      setTimeout(() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
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

            {/* Instructions Section */}
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
                    Instructions
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
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-6 sm:pt-8 space-y-4 sm:space-y-6">
                      {project.instructions.map((instruction) => (
                        <div key={instruction.step} className="relative pl-8 sm:pl-10">
                          <div className="absolute left-0 top-0 w-6 h-6 gradient-bg flex items-center justify-center" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                            <span className="text-white">{instruction.step}</span>
                          </div>
                          <h3 className="mb-1.5" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1rem', fontWeight: 600 }}>
                            {instruction.title}
                          </h3>
                          <p className="text-muted-foreground mb-4" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}>
                            {instruction.content}
                          </p>
                          {instruction.image && (
                            <div className="mt-4 border border-border overflow-hidden">
                              <ImageWithFallback 
                                src={instruction.image}
                                alt={instruction.title}
                                className="w-full h-auto object-cover"
                              />
                              {instruction.imageCaption && (
                                <div className="px-4 py-3 bg-muted/50 border-t border-border">
                                  <p className="text-muted-foreground" style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.75rem', lineHeight: '1.5', fontStyle: 'italic' }}>
                                    {instruction.imageCaption}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      
                      {/* Print Instructions Button */}
                      <div className="pt-4 border-t border-border mt-6">
                        <Button
                          onClick={() => window.print()}
                          variant="outline"
                          className="w-full sm:w-auto border-foreground hover:bg-muted/20 transition-colors"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                        >
                          <Printer className="mr-2 h-4 w-4" weight="bold" />
                          PRINT INSTRUCTIONS
                        </Button>
                      </div>
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
                                      <a 
                                        href={item.link}
                                        className="text-[#1782FF] hover:underline text-[10px] sm:text-xs whitespace-nowrap"
                                        style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                                      >
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
                            <a 
                              href="#"
                              className="text-[#1782FF] hover:underline text-[10px] sm:text-xs whitespace-nowrap"
                              style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                            >
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
                    {mockComments.reduce((total, comment) => total + 1 + comment.replies.length, 0)}
                  </Badge>
                </div>
                <CaretDown 
                  className={`h-5 w-5 transition-transform ${discussionOpen ? 'rotate-180' : ''}`}
                />
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
                              style={{
                                background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                              }}
                            />
                            <div
                              className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                            <PaperPlaneTilt className="mr-2 h-4 w-4 relative z-10" />
                            <span className="relative z-10">POST COMMENT</span>
                          </Button>
                        </div>
                      </div>

                      {/* Comments List */}
                      <div className="space-y-6">
                        {mockComments.map((comment) => (
                          <div key={comment.id}>
                            {/* Main Comment */}
                            <div className={`p-4 border ${comment.isCreator ? 'border-[#1782FF] bg-[#1782FF]/5' : 'border-border'}`}>
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                  <ImageWithFallback 
                                    src={comment.authorAvatar}
                                    alt={comment.author}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', fontWeight: 600 }}>
                                        {comment.author}
                                      </span>
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

                            {/* Replies */}
                            {comment.replies.length > 0 && (
                              <div className="ml-6 sm:ml-12 mt-3 space-y-3">
                                {comment.replies.map((reply) => (
                                  <div key={reply.id} className={`p-4 border ${reply.isCreator ? 'border-[#1782FF] bg-[#1782FF]/5' : 'border-border'}`}>
                                    <div className="flex items-start gap-3">
                                      <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex-shrink-0">
                                        <ImageWithFallback 
                                          src={reply.authorAvatar}
                                          alt={reply.author}
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                                          <div className="flex items-center gap-2 flex-wrap">
                                            <span style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', fontWeight: 600 }}>
                                              {reply.author}
                                            </span>
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
                                        <button className="mt-2 text-muted-foreground hover:text-[#1782FF] transition-colors" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                                          REPLY
                                        </button>
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
              {/* About Creator Card */}
              <div className="block lg:hidden mt-2 pt-6" />
              <motion.div
                className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                    ABOUT THE CREATOR
                  </h3>
                  <button
                    onClick={() => setIsCreatorView(!isCreatorView)}
                    className={`flex items-center gap-2 px-3 py-1 border transition-colors rounded-[2px] ${isCreatorView ? 'border-[#1782FF] text-[#1782FF] bg-[#1782FF]/10' : 'border-border text-muted-foreground hover:border-[#1782FF] hover:text-[#1782FF]'}`}
                    style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', letterSpacing: '-0.02em' }}
                  >
                    {isCreatorView ? <ToggleRight className="h-4 w-4" weight="fill" /> : <ToggleLeft className="h-4 w-4" />}
                    CREATOR VIEW
                  </button>
                </div>

                <Link to="/creator/1" className="block mb-4 hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <ImageWithFallback 
                        src={project.creatorAvatar}
                        alt={project.creator}
                        className="w-full h-full object-cover"
                      />
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
                  <a 
                    href={project.creatorSocials.twitter}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                    aria-label="Twitter"
                  >
                    <TwitterLogo className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.creatorSocials.github}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubLogo className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.creatorSocials.youtube}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                    aria-label="YouTube"
                  >
                    <YoutubeLogo className="h-4 w-4" />
                  </a>
                  <a 
                    href={project.creatorSocials.website}
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                </div>

                {isCreatorView ? (
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 text-white relative overflow-hidden group"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                      onClick={() => navigate('/create-project/edit/123')}
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
                      <PencilSimple className="mr-2 h-4 w-4 relative z-10" weight="bold" />
                      <span className="relative z-10">EDIT PROJECT</span>
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-foreground hover:bg-muted/20 transition-colors"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                      onClick={() => navigate('/create-project/duplicate/123')}
                    >
                      <CopySimple className="mr-2 h-4 w-4" weight="bold" />
                      DUPLICATE
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant={isFollowing ? "outline" : "default"}
                    className={`w-full ${isFollowing ? "border-foreground" : "text-white relative overflow-hidden group"}`}
                    onClick={() => setIsFollowing(!isFollowing)}
                    style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                  >
                    {!isFollowing && (
                      <>
                        <div
                          className="absolute inset-0"
                          style={{
                            background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </>
                    )}
                    <UserPlus className={`mr-2 h-4 w-4 ${!isFollowing ? 'relative z-10' : ''}`} />
                    <span className={!isFollowing ? 'relative z-10' : ''}>{isFollowing ? 'FOLLOWING CREATOR' : 'FOLLOW CREATOR'}</span>
                  </Button>
                )}
              </motion.div>

              {isCreatorView ? (
                <>
                {/* Project Analytics Panel */}
                <motion.div
                  className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="mb-5 gradient-text" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                    PROJECT ANALYTICS
                  </h3>

                  {/* Revenue Highlight */}
                  <div className="p-4 border border-border mb-4 rounded-[2px]" style={{ background: 'linear-gradient(135deg, rgba(23,130,255,0.08), rgba(176,43,237,0.08))' }}>
                    <div className="text-muted-foreground mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', letterSpacing: '-0.02em' }}>
                      TOTAL BACKER REVENUE
                    </div>
                    <div className="flex items-end gap-2">
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.75rem', fontWeight: 700 }}>
                        ${projectAnalytics.backerAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-emerald-500 mb-1 flex items-center gap-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', fontWeight: 600 }}>
                        <ArrowUp className="h-3 w-3" weight="bold" />
                        {projectAnalytics.backerTrend}
                      </span>
                    </div>
                    <div className="text-muted-foreground mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', letterSpacing: '-0.02em' }}>
                      AVG SUPPORT: ${projectAnalytics.avgSupportAmount.toFixed(2)} / BACKER
                    </div>
                  </div>

                  {/* Analytics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'PROJECT VIEWS', value: projectAnalytics.totalViews.toLocaleString(), trend: projectAnalytics.viewsTrend, icon: Eye },
                      { label: 'TOTAL BACKERS', value: projectAnalytics.totalBackers.toLocaleString(), trend: projectAnalytics.backerTrend, icon: Users },
                      { label: 'SHARES', value: projectAnalytics.totalShares.toLocaleString(), trend: projectAnalytics.sharesTrend, icon: ShareNetwork },
                      { label: 'COMMENTS', value: projectAnalytics.totalComments.toString(), trend: null, icon: Chat, badge: `${projectAnalytics.newComments} NEW` },
                    ].map((stat) => (
                      <div key={stat.label} className="p-3 border border-border hover:border-[#1782FF] transition-colors rounded-[2px]">
                        <div className="flex items-center gap-1.5 mb-2">
                          <stat.icon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-muted-foreground" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.5625rem', letterSpacing: '-0.02em' }}>
                            {stat.label}
                          </span>
                        </div>
                        <div className="flex items-end gap-1.5">
                          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.125rem', fontWeight: 700 }}>
                            {stat.value}
                          </span>
                          {stat.trend && (
                            <span className="text-emerald-500 mb-0.5 flex items-center gap-0.5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.625rem', fontWeight: 600 }}>
                              <ArrowUp className="h-2.5 w-2.5" weight="bold" />
                              {stat.trend}
                            </span>
                          )}
                          {stat.badge && (
                            <span className="mb-0.5 px-1.5 py-0.5 bg-[#1782FF]/10 text-[#1782FF] rounded-[2px]" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.5625rem', fontWeight: 600 }}>
                              {stat.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Meta */}
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6875rem', letterSpacing: '-0.02em' }}>
                        <ThumbsUp className="h-3.5 w-3.5" />
                        TOTAL LIKES
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 700 }}>
                        {projectAnalytics.totalLikes.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6875rem', letterSpacing: '-0.02em' }}>
                        <UserPlus className="h-3.5 w-3.5" />
                        PROJECT FOLLOWERS
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 700 }}>
                        {projectAnalytics.totalFollowers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground flex items-center gap-1.5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.6875rem', letterSpacing: '-0.02em' }}>
                        <Clock className="h-3.5 w-3.5" />
                        PUBLISHED
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', fontWeight: 600 }}>
                        {projectAnalytics.publishedDate}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Get Paid / Bank Info Section */}
                <motion.div
                  className="border border-border backdrop-blur-md bg-white/40 dark:bg-card/40 p-4 sm:p-6 rounded-[2px]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
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
                      <Bank className="mr-2 h-5 w-5 relative z-10" weight="bold" />
                      <span className="relative z-10">EDIT YOUR BANK INFORMATION</span>
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
                </>
              ) : (
                /* More from Creator - Carousel */
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
                      <button
                        onClick={goToPreviousProject}
                        className="w-8 h-8 border border-border hover:border-[#1782FF] hover:text-[#1782FF] transition-colors flex items-center justify-center"
                        aria-label="Previous project"
                      >
                        <CaretLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={goToNextProject}
                        className="w-8 h-8 border border-border hover:border-[#1782FF] hover:text-[#1782FF] transition-colors flex items-center justify-center"
                        aria-label="Next project"
                      >
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

                  {/* Carousel indicators */}
                  <div className="flex justify-center gap-2 mt-4">
                    {creatorProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectIndex(index)}
                        className={`h-1.5 transition-all ${
                          index === currentProjectIndex 
                            ? 'w-8 gradient-bg' 
                            : 'w-1.5 bg-border hover:bg-muted-foreground'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Share Dialog */}
      <Dialog open={shareDialogOpen} onOpenChange={setShareDialogOpen}>
        <DialogContent className="backdrop-blur-md bg-card/95 border-border">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>
              Share Project
            </DialogTitle>
            <DialogDescription style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem' }}>
              Share this project with others or copy the link
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            {/* Copy URL */}
            <div>
              <label className="text-sm mb-2 block" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                PROJECT URL
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={typeof window !== 'undefined' ? window.location.href : ''}
                  readOnly
                  className="flex-1 px-3 py-2 border border-border backdrop-blur-md bg-card/40 text-sm"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem' }}
                />
                <Button
                  onClick={handleCopyUrl}
                  variant="outline"
                  className="border-foreground hover:bg-muted/20 transition-colors"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", letterSpacing: '-0.02em' }}
                >
                  {urlCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" weight="bold" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" weight="bold" />
                      COPY
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Social Share Options */}
            <div>
              <label className="text-sm mb-2 block" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '-0.02em' }}>
                SHARE ON
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(project.title);
                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-border backdrop-blur-md bg-card/40 hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                >
                  <TwitterLogo className="h-4 w-4" />
                  TWITTER
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-border backdrop-blur-md bg-card/40 hover:border-[#1782FF] hover:text-[#1782FF] transition-colors"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.875rem', letterSpacing: '-0.02em' }}
                >
                  <FacebookLogo className="h-4 w-4" />
                  FACEBOOK
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}