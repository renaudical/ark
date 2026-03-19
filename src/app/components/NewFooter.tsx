import { Link } from 'react-router';
import arkLogo from '../../imports/ark_logo_plain.svg';
import svgPaths from "../../imports/svg-wu635jipzk";
import { useState, useEffect } from 'react';

function GlitchText({ children }: { children: string }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Trigger glitch effect every 5-8 seconds randomly
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 400);
    };

    const randomInterval = () => {
      const delay = 5000 + Math.random() * 3000; // 5-8 seconds
      setTimeout(() => {
        triggerGlitch();
        randomInterval();
      }, delay);
    };

    randomInterval();
  }, []);

  return (
    <span className="relative inline-block">
      <span className={isGlitching ? 'glitch-text' : ''}>
        {children}
      </span>
      <style>{`
        @keyframes glitch-anim {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          10% {
            clip-path: inset(20% 0 60% 0);
            transform: translate(-2px, 1px);
          }
          20% {
            clip-path: inset(60% 0 20% 0);
            transform: translate(2px, -1px);
          }
          30% {
            clip-path: inset(40% 0 40% 0);
            transform: translate(-1px, 2px);
          }
          40% {
            clip-path: inset(10% 0 70% 0);
            transform: translate(1px, -2px);
          }
          50% {
            clip-path: inset(70% 0 10% 0);
            transform: translate(-2px, 1px);
          }
          60% {
            clip-path: inset(30% 0 50% 0);
            transform: translate(2px, 1px);
          }
          70% {
            clip-path: inset(50% 0 30% 0);
            transform: translate(-1px, -1px);
          }
          80% {
            clip-path: inset(15% 0 65% 0);
            transform: translate(1px, 2px);
          }
          90% {
            clip-path: inset(65% 0 15% 0);
            transform: translate(-2px, -1px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }

        .glitch-text {
          animation: glitch-anim 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: 'ALL SYSTEMS OPERATIONAL.';
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-anim 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
          color: #1782FF;
          z-index: -1;
          text-shadow: 2px 0 #1782FF;
        }

        .glitch-text::after {
          animation: glitch-anim 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
          color: #B02BED;
          z-index: -2;
          text-shadow: -2px 0 #B02BED;
        }
      `}</style>
    </span>
  );
}

export function NewFooter() {
  return (
    <footer className="bg-white/40 dark:bg-black/20 backdrop-blur-lg relative pt-px px-4 sm:px-8 border-t border-white/30 dark:border-white/10">
      <div className="pt-12 px-4 sm:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden mb-8">
          <Link to="/" className="inline-flex items-center gap-[13px] mb-4">
            <img src={arkLogo} alt="ARK" className="h-9 w-auto object-contain" />
          </Link>
          
          <p className="text-[14px] leading-[21px] text-[#717182] dark:text-[#BEBEC8] font-['PP_Monument',sans-serif] font-medium">
            Empowering makers and creators in the STEM community.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-16 mb-8">
          {/* Logo & Description */}
          <div className="w-[320px] shrink-0 pr-16 border-r border-[rgba(190,190,200,0.25)] flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-[13px]">
              <div className="h-9 w-auto shrink-0">
                <img src={arkLogo} alt="ARK" className="h-full w-full object-contain" />
              </div>
            </Link>
            
            <p className="text-[14px] leading-[21px] text-[#717182] dark:text-[#BEBEC8] font-['PP_Monument',sans-serif] font-medium">
              Empowering makers and creators in the STEM community.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-[rgba(190,190,200,0.25)] dark:border-[#262626] flex items-center justify-center hover:border-[#1782FF] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p36786300} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-[rgba(190,190,200,0.25)] dark:border-[#262626] flex items-center justify-center hover:border-[#1782FF] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.pe485a00} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p28ae6680} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-[rgba(190,190,200,0.25)] dark:border-[#262626] flex items-center justify-center hover:border-[#1782FF] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p2d614500} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3657f7c0} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 border border-[rgba(190,190,200,0.25)] dark:border-[#262626] flex items-center justify-center hover:border-[#1782FF] transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p17070980} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p120c8200} stroke="#212121" className="dark:stroke-[#FAFAFA]" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="flex-1 pr-16 border-r border-[rgba(190,190,200,0.25)] flex flex-col gap-4">
            <h4 className="font-['IBM_Plex_Mono',monospace] font-bold text-[14px] tracking-[0.7px] text-[#212121] dark:text-[#FAFAFA]">EXPLORE</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/projects" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Robotics
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Raspberry Pi
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Coding
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="flex-1 pr-16 border-r border-[rgba(190,190,200,0.25)] flex flex-col gap-4">
            <h4 className="font-['IBM_Plex_Mono',monospace] font-bold text-[14px] tracking-[0.7px] text-[#212121] dark:text-[#FAFAFA]">COMMUNITY</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/creators" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Top Creators
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Forums
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex-1 flex flex-col gap-4">
            <h4 className="font-['IBM_Plex_Mono',monospace] font-bold text-[14px] tracking-[0.7px] text-[#212121] dark:text-[#FAFAFA]">COMPANY</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link to="/" className="text-[14px] leading-[21px] tracking-[0.28px] text-[#717182] dark:text-[#BEBEC8] hover:text-[#1782FF] transition-colors font-['PP_Monument',sans-serif]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-[33px] border-t border-[rgba(190,190,200,0.25)] pb-12">
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-between lg:items-center">
            <p className="text-[12px] leading-[18px] tracking-[0.6px] text-[#717182] dark:text-[#A1A1A1] font-['IBM_Plex_Mono',monospace]">
              © 2026 ARK PLATFORM. <GlitchText>ALL SYSTEMS OPERATIONAL.</GlitchText>
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-[12px] leading-[18px] tracking-[0.6px] text-[#717182] dark:text-[#A1A1A1] hover:text-[#1782FF] transition-colors font-['IBM_Plex_Mono',monospace]">
                PRIVACY
              </Link>
              <Link to="/" className="text-[12px] leading-[18px] tracking-[0.6px] text-[#717182] dark:text-[#A1A1A1] hover:text-[#1782FF] transition-colors font-['IBM_Plex_Mono',monospace]">
                TERMS
              </Link>
              <Link to="/" className="text-[12px] leading-[18px] tracking-[0.6px] text-[#717182] dark:text-[#A1A1A1] hover:text-[#1782FF] transition-colors font-['IBM_Plex_Mono',monospace]">
                COOKIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}