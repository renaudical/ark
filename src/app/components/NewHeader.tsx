import { Link, useLocation } from 'react-router';
import { MagnifyingGlass, Moon, Sun, User, UsersThree, X } from '@phosphor-icons/react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import arkLogo from '../../imports/ark_logo_plain.svg';

export function NewHeader() {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const isActive = (path: string) => location.pathname === path;

  const mobileMenuContent = mobileMenuOpen && (
    <div className="fixed inset-0 z-[9999] md:hidden bg-white/40 dark:bg-black/20 backdrop-blur-lg">
      <div className="flex flex-col h-full">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-border/40">
          <Link to="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-9 w-auto">
              <img src={arkLogo} alt="ARK" className="h-full w-full object-contain" />
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} weight="bold" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-6">
              <Link
                to="/"
                className={`text-xl font-['PP_Monument',sans-serif] font-bold transition-colors ${
                  isActive('/') ? 'text-[#1782FF]' : 'text-foreground hover:text-[#1782FF]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/projects"
                className={`text-xl font-['PP_Monument',sans-serif] font-bold transition-colors ${
                  isActive('/projects') ? 'text-[#1782FF]' : 'text-foreground hover:text-[#1782FF]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                PROJECTS
              </Link>
              <Link
                to="/explore"
                className={`text-xl font-['PP_Monument',sans-serif] font-bold transition-colors ${
                  isActive('/explore') ? 'text-[#1782FF]' : 'text-foreground hover:text-[#1782FF]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                EXPLORE
              </Link>
              <Link
                to="/creators"
                className={`text-xl font-['PP_Monument',sans-serif] font-bold transition-colors ${
                  isActive('/creators') ? 'text-[#1782FF]' : 'text-foreground hover:text-[#1782FF]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                CREATORS
              </Link>
              <Link
                to="/"
                className={`text-xl font-['PP_Monument',sans-serif] font-bold transition-colors ${
                  isActive('/about') ? 'text-[#1782FF]' : 'text-foreground hover:text-[#1782FF]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              {/* Secondary links */}
              <Link
                to="/edit-profile"
                className="text-base font-['PP_Monument',sans-serif] text-muted-foreground hover:text-[#1782FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <button
                onClick={() => { toggleTheme(); }}
                className="flex items-center gap-2 text-base font-['PP_Monument',sans-serif] text-muted-foreground hover:text-[#1782FF] transition-colors"
              >
                {theme === 'dark' ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom section: Create Project + Search */}
        <div className="p-6 border-t border-border/40 flex flex-col gap-4">
          <Link to="/create-project" onClick={() => setMobileMenuOpen(false)}>
            <Button
              className="w-full text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-sm tracking-wider group"
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
              <span className="relative z-10">CREATE A PROJECT</span>
            </Button>
          </Link>
          <div className="relative p-[2px] rounded-[2px] gradient-bg">
            <MagnifyingGlass
              size={20}
              weight="bold"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#212121] z-10"
            />
            <input
              type="text"
              placeholder="Search projects, creators..."
              className="w-full pl-12 pr-4 py-3 rounded-[2px] bg-white text-[#212121] text-sm font-['IBM_Plex_Mono',monospace] placeholder:text-[#212121]/50 focus:outline-none relative"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/20 backdrop-blur-lg">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <div className="h-9 w-auto">
                <img src={arkLogo} alt="ARK" className="h-full w-auto object-contain object-left" />
              </div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
              <Link
                to="/projects"
                className={`font-['IBM_Plex_Mono',monospace] text-sm tracking-wider transition-colors hover:text-[#1782FF] ${
                  isActive('/projects') ? 'text-[#1782FF]' : 'text-foreground'
                }`}
              >
                PROJECTS
              </Link>
              <Link
                to="/explore"
                className={`font-['IBM_Plex_Mono',monospace] text-sm tracking-wider transition-colors hover:text-[#1782FF] ${
                  isActive('/explore') ? 'text-[#1782FF]' : 'text-foreground'
                }`}
              >
                EXPLORE
              </Link>
              <Link
                to="/creators"
                className={`font-['IBM_Plex_Mono',monospace] text-sm tracking-wider transition-colors hover:text-[#1782FF] ${
                  isActive('/creators') ? 'text-[#1782FF]' : 'text-foreground'
                }`}
              >
                CREATORS
              </Link>
              <Link
                to="/"
                className={`font-['IBM_Plex_Mono',monospace] text-sm tracking-wider transition-colors hover:text-[#1782FF] ${
                  isActive('/about') ? 'text-[#1782FF]' : 'text-foreground'
                }`}
              >
                ABOUT
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex h-9 w-9 rounded-lg hover:text-[#1782FF] transition-colors"
              >
                <MagnifyingGlass size={16} weight="bold" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex h-9 w-9 rounded-lg hover:text-[#1782FF] transition-colors"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <Sun size={16} weight="bold" /> : <Moon size={16} weight="bold" />}
              </Button>
              <Link to="/edit-profile">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex h-9 w-9 rounded-lg hover:text-[#1782FF] transition-colors"
                >
                  <User size={16} weight="bold" />
                </Button>
              </Link>
              <div className="hidden md:block w-2" />
              <Link to="/create-project">
                <Button
                  className="hidden md:inline-flex text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group"
                  size="sm"
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
                  <span className="relative z-10">CREATE A PROJECT</span>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4H14M2 8H14M2 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>
      {mobileMenuContent}
    </>
  );
}