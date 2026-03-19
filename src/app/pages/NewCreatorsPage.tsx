import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { Button } from '../components/ui/button';
import { ArrowRight as PhosphorArrowRight } from '@phosphor-icons/react';
import { MoonDustBackground } from '../components/MoonDustBackground';
import { GlitchText } from '../components/GlitchText';
import { CreatorCard } from '../components/CreatorCard';
import svgPaths from '../../imports/svg-1e80jg1cg7';
import usersSvgPaths from '../../imports/svg-mw8tqbts1x';
import svgPathsMission from '../../imports/svg-mz4slkaxz9';
import imgVideoThumbnail from "figma:asset/9b0eed1a7b50879d74907ee46a13ea640adb4592.png";

const creators = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    likes: '12,847',
    projects: '124',
    categories: ['Robotics', '3D Printing', 'Arduino'],
    bio: 'I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are...',
    recentProjects: [
      { id: '1', title: 'Autonomous Delivery Robot' },
      { id: '2', title: 'Custom 3D Printed Drone Frame' },
      { id: '3', title: 'Smart Home Automation Hub' }
    ]
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    likes: '8,392',
    projects: '87',
    categories: ['Raspberry Pi', 'IoT', 'Python'],
    bio: 'Building connected devices and home automation systems with Raspberry Pi. I focus on projects that solve real everyday problems with affordable...',
    recentProjects: [
      { id: '1', title: 'Weather Station with LCD Display' },
      { id: '2', title: 'Voice-Controlled Light System' },
      { id: '3', title: 'Plant Watering Monitor' }
    ]
  },
  {
    id: '3',
    name: 'Aisha Patel',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    likes: '15,201',
    projects: '156',
    categories: ['PCB Design', 'Electronics', 'Hardware'],
    bio: 'Specialized in custom PCB design and circuit prototyping. I share detailed schematics and board layouts for everything from audio amplifiers to...',
    recentProjects: [
      { id: '1', title: 'Portable Oscilloscope Kit' },
      { id: '2', title: 'DIY Synthesizer Module' },
      { id: '3', title: 'USB Power Delivery Tester' }
    ]
  },
  {
    id: '4',
    name: 'Jake Morrison',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    likes: '6,543',
    projects: '62',
    categories: ['CNC', 'Woodworking', 'CAD'],
    bio: 'Combining traditional woodworking with modern CNC machining. My projects include furniture, precision jigs, and custom tool organizers with full...',
    recentProjects: [
      { id: '1', title: 'Modular Workbench System' },
      { id: '2', title: 'CNC Router Dust Collection' },
      { id: '3', title: 'Precision Miter Sled' }
    ]
  },
  {
    id: '5',
    name: 'Yuki Tanaka',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    likes: '10,982',
    projects: '103',
    categories: ['3D Printing', 'Cosplay', 'Props'],
    bio: 'Creating detailed cosplay props and accessories using 3D printing techniques. I provide print-ready files and painting guides for sci-fi and fantasy...',
    recentProjects: [
      { id: '1', title: 'LED Powered Energy Sword' },
      { id: '2', title: 'Articulated Dragon Sculpture' },
      { id: '3', title: 'Cyberpunk Helmet with Visor' }
    ]
  },
  {
    id: '6',
    name: 'David Okonkwo',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    likes: '9,127',
    projects: '94',
    categories: ['Drones', 'FPV', 'Electronics'],
    bio: 'FPV drone builder and racing enthusiast. I document custom builds from frame design to flight controller tuning, with emphasis on budget-friendly...',
    recentProjects: [
      { id: '1', title: '5-Inch Freestyle Quad Build' },
      { id: '2', title: 'Long Range Explorer Drone' },
      { id: '3', title: 'Micro Whoop Indoor Racer' }
    ]
  },
  {
    id: '7',
    name: 'Emma Larsson',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    likes: '13,456',
    projects: '142',
    categories: ['Arduino', 'Wearables', 'LED'],
    bio: 'Designing interactive wearable electronics with LEDs and sensors. From light-up clothing to gesture-controlled accessories, I make tech fashion...',
    recentProjects: [
      { id: '1', title: 'Reactive Sound Jacket' },
      { id: '2', title: 'Gesture-Controlled LED Gloves' },
      { id: '3', title: 'Fiber Optic Hair Extensions' }
    ]
  },
  {
    id: '8',
    name: 'Carlos Mendez',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    likes: '7,834',
    projects: '71',
    categories: ['Laser Cutting', 'Design', 'Fabrication'],
    bio: 'Laser cutting enthusiast creating intricate designs for home decor, puzzles, and mechanical models. All my projects include vector files and assembly...',
    recentProjects: [
      { id: '1', title: 'Kinetic Gear Wall Clock' },
      { id: '2', title: '3D Wooden Puzzle Box' },
      { id: '3', title: 'Geometric Lampshade Series' }
    ]
  },
  {
    id: '9',
    name: 'Zara Kim',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    likes: '11,623',
    projects: '118',
    categories: ['Microcontrollers', 'Sensors', 'Data'],
    bio: 'Environmental monitoring and data visualization projects using ESP32 and cloud platforms. I focus on accessible citizen science tools for tracking air...',
    recentProjects: [
      { id: '1', title: 'Air Quality Monitor Network' },
      { id: '2', title: 'Solar-Powered Weather Station' },
      { id: '3', title: 'Water Quality Testing Kit' }
    ]
  },
];

export function NewCreatorsPage() {
  return (
    <>
      <MoonDustBackground />
      <NewHeader />
      
      <div className="min-h-screen relative pt-16">
        <div className="relative z-10">
          <main>
            {/* Hero Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-[8px] px-[17px] py-[9px] border border-[#1782FF] bg-white/40 dark:bg-black/40 backdrop-blur-sm mb-8">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d={usersSvgPaths.p8079000} fill="#1782FF" opacity="0.2" />
                    <path d={usersSvgPaths.pe6cca40} fill="#1782FF" />
                  </svg>
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#212121] dark:text-white tracking-[0.6px]">
                    FOR CREATORS
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-['PP_Monument_Extended',sans-serif] font-normal text-[32px] md:text-[36px] lg:text-[40px] tracking-tight mb-12 uppercase">
                  Share Projects.<br />
                  <GlitchText 
                    className="gradient-text" 
                    style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900 }}
                  >
                    Earn Maker Support.
                  </GlitchText>
                </h1>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Text Content */}
                  <div className="space-y-6">
                    <p className="font-['PP_Monument',sans-serif] text-lg text-muted-foreground">
                      YouTube is amazing for reach and virality, but it's not built for monetization or community. ARK gives makers what they actually need: revenue, detailed documentation, and meaningful connections.
                    </p>

                    {/* Benefits */}
                    <div className="border border-border/40 bg-white/40 dark:bg-card/40 backdrop-blur-sm p-6 space-y-4 rounded-[2px]">
                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground mb-1 uppercase">
                            Direct monetization from every project
                          </p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">
                            Pay-what-you-want pricing means makers contribute based on value
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground mb-1 uppercase">
                            Comprehensive documentation support
                          </p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">
                            Share detailed guides, CAD files, code, and step-by-step instructions
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground mb-1 uppercase">
                            Engaged maker community with Q&A
                          </p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">
                            Build relationships through discussions and direct support
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
                          <path d={svgPathsMission.p39a61880} fill="#1782FF" />
                        </svg>
                        <div>
                          <p className="font-['PP_Monument',sans-serif] font-bold text-foreground mb-1 uppercase">
                            Integrates with your YouTube videos
                          </p>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-muted-foreground">
                            Embed videos and drive traffic from both platforms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Video Testimonial */}
                  <div className="relative border border-border/40 bg-muted rounded-[2px]">
                    {/* Gradient corner brackets */}
                    <div className="absolute -top-[7px] -left-[7px] w-4 h-4 border-l-2 border-t-2 border-[#1782FF] z-10" />
                    <div className="absolute -top-[7px] -right-[7px] w-4 h-4 border-r-2 border-t-2 border-[#B02BED] z-10" />
                    <div className="absolute -bottom-[7px] -left-[7px] w-4 h-4 border-l-2 border-b-2 border-[#1782FF] z-10" />
                    <div className="absolute -bottom-[7px] -right-[7px] w-4 h-4 border-r-2 border-b-2 border-[#B02BED] z-10" />
                    
                    <div className="overflow-hidden rounded-[2px]">
                      <div className="relative aspect-video">
                        <video
                          src="https://www.actionsatisfaction.com/ARK.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Testimonial Overlay - hidden on mobile, shown on md+ */}
                        <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">
                          <p className="font-['PP_Monument',sans-serif] text-sm text-white mb-2 italic">
                            "I was struggling to make $200/month on YouTube with 85K subscribers. Within 3 months on ARK, I'm consistently earning over $1,500 from just 8 detailed projects."
                          </p>
                          <p className="font-['IBM_Plex_Mono',monospace] text-[10px] text-white/80 tracking-wider">
                            — SARAH MYLES, 3D PRINTING
                          </p>
                        </div>
                      </div>
                      
                      {/* Testimonial - below video on mobile */}
                      <div className="md:hidden p-4 bg-black/60 backdrop-blur-sm">
                        <p className="font-['PP_Monument',sans-serif] text-sm text-white mb-2 italic">
                          "I was struggling to make $200/month on YouTube with 85K subscribers. Within 3 months on ARK, I'm consistently earning over $1,500 from just 8 detailed projects."
                        </p>
                        <p className="font-['IBM_Plex_Mono',monospace] text-[10px] text-white/80 tracking-wider">
                          — SARAH MYLES, 3D PRINTING
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Creators Grid */}
            <section className="pt-14 pb-12 bg-white/40 dark:bg-[rgba(0,0,0,0.4)]">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
                  <div>
                    <h2 className="font-['PP_Monument_Extended',sans-serif] font-normal text-2xl md:text-3xl tracking-tight uppercase">
                      Meet Our Top Creators
                    </h2>
                  </div>
                  <Button
                    variant="outline"
                    className="font-['IBM_Plex_Mono',monospace] font-normal text-xs tracking-wider border-[rgba(190,190,200,0.7)] dark:border-white/40 bg-transparent dark:bg-black/40 hover:!border-[#1782FF] text-[#212121] dark:text-white transition-colors"
                  >
                    VIEW ALL CREATORS
                    <PhosphorArrowRight size={14} weight="bold" className="ml-2" />
                  </Button>
                </div>

                {/* Creators Grid - 3x3 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                  {creators.map((creator) => (
                    <CreatorCard key={creator.id} creator={creator} />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="cta-gradient-border backdrop-blur-sm p-8 md:p-12 text-center">
                  <h2 className="font-['PP_Monument_Extended',sans-serif] font-normal text-2xl md:text-3xl mb-4 uppercase">
                    Ready to Start Your <span className="gradient-text font-black">Creator Journey?</span>
                  </h2>
                  <p className="font-['PP_Monument',sans-serif] text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join hundreds of makers who are turning their passion projects into sustainable income. Start sharing your knowledge today.
                  </p>
                  <Button className="text-white relative overflow-hidden group font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="relative z-10">CREATE YOUR FIRST PROJECT</span>
                  </Button>
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