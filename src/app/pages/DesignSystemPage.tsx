import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { NewHeader } from '../components/NewHeader';
import { NewFooter } from '../components/NewFooter';
import { GlitchText } from '../components/GlitchText';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import {
  Rocket,
  ThumbsUp,
  ChatCircle,
  ShareNetwork,
  UserPlus,
  MagnifyingGlass,
  Moon,
  Sun,
  CaretRight,
  CaretDown,
  Copy,
  Check,
  Printer,
  Cpu,
  Code,
  Circuitry,
  Eye,
  Pencil,
  Trash,
  Plus,
  YoutubeLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Globe,
  Lightning,
  ArrowRight,
  ClipboardText,
  ShoppingCart,
  Info,
} from '@phosphor-icons/react';

// ─── Section wrapper ───
function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      className="mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 pb-4 border-b border-[rgba(190,190,200,0.25)]">
        <div className="inline-block border border-[#1782FF] px-4 py-1 mb-3">
          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.6px] text-[#1782FF]">{title.toUpperCase()}</span>
        </div>
        {subtitle && (
          <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8] max-w-2xl">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.section>
  );
}

// ─── Swatch component ───
function ColorSwatch({ color, name, value, textColor = 'white' }: { color: string; name: string; value: string; textColor?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-20 rounded-[2px] border border-[rgba(190,190,200,0.25)] flex items-end p-2"
        style={{ background: color }}
      >
        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] tracking-wider" style={{ color: textColor }}>{value}</span>
      </div>
      <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">{name}</span>
    </div>
  );
}

// ─── Code block ───
function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative bg-[#030213] border border-[rgba(190,190,200,0.2)] rounded-[2px] p-4 overflow-x-auto group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-[#BEBEC8] hover:text-white transition-colors opacity-0 group-hover:opacity-100"
      >
        {copied ? <Check size={14} weight="bold" /> : <Copy size={14} weight="bold" />}
      </button>
      <pre className="font-['IBM_Plex_Mono',monospace] text-xs text-[#BEBEC8] leading-relaxed whitespace-pre-wrap">{children}</pre>
    </div>
  );
}

// ─── Navigation sidebar ───
const navSections = [
  { id: 'brand', label: 'Brand & Identity' },
  { id: 'colors', label: 'Color System' },
  { id: 'typography', label: 'Typography' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'forms', label: 'Form Elements' },
  { id: 'badges', label: 'Badges & Tags' },
  { id: 'cards', label: 'Cards & Modules' },
  { id: 'glassmorphism', label: 'Glassmorphism' },
  { id: 'animations', label: 'Animations' },
  { id: 'icons', label: 'Iconography' },
  { id: 'spacing', label: 'Spacing & Layout' },
  { id: 'dark-mode', label: 'Dark Mode' },
];

export function DesignSystemPage() {
  const [activeNav, setActiveNav] = useState('brand');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map(s => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveNav(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Plain background */}
      <div className="fixed inset-0 z-0 bg-[#F3F3F5] dark:bg-[#0A0A1A] transition-colors duration-300" />

      <NewHeader />

      <div className="min-h-screen w-full relative pt-16">
        <div className="relative z-10 w-full">
          {/* Hero */}
          <div className="py-16 border-b border-[rgba(190,190,200,0.25)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block border border-[#1782FF] px-4 py-1 mb-6">
                  <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.6px] text-[#1782FF]">DESIGN SYSTEM v1.0</span>
                </div>
                <h1
                  className="mb-4 uppercase"
                  style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '3.5rem', lineHeight: 1.1 }}
                >
                  <span style={{ fontWeight: 400 }}>ARK</span>{' '}
                  <GlitchText className="gradient-text" style={{ fontWeight: 900 }}>DESIGN SYSTEM</GlitchText>
                </h1>
                <p className="font-['PP_Monument',sans-serif] text-[#717182] dark:text-[#BEBEC8] max-w-2xl text-lg">
                  A comprehensive reference for all visual patterns, components, and interaction models used across the ARK platform.
                  NASA-tech aesthetic meets modern maker culture.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Main content with sidebar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex gap-12">
              {/* Sticky sidebar nav */}
              <aside className="hidden lg:block w-56 shrink-0">
                <div className="sticky top-24">
                  <nav className="flex flex-col gap-1">
                    {navSections.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => scrollToSection(s.id)}
                        className={`text-left px-3 py-2 rounded-[2px] font-['IBM_Plex_Mono',monospace] text-xs tracking-wider transition-all duration-200 ${
                          activeNav === s.id
                            ? 'text-[#1782FF] bg-[#1782FF]/10 border-l-2 border-[#1782FF]'
                            : 'text-[#717182] dark:text-[#BEBEC8] hover:text-foreground hover:bg-white/20 dark:hover:bg-white/5 border-l-2 border-transparent'
                        }`}
                      >
                        {s.label.toUpperCase()}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 min-w-0">

                {/* ─── BRAND & IDENTITY ─── */}
                <Section id="brand" title="Brand & Identity" subtitle="ARK is a community platform for STEM creators with a retro NASA-tech aesthetic. The visual language combines space-age precision with modern glassmorphism.">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h3 className="font-['PP_Monument_Extended',sans-serif] font-black text-xl mb-4">Design Principles</h3>
                      <ul className="space-y-4">
                        {[
                          { title: 'NASA-Tech Precision', desc: 'Sharp 2px rounded corners, monospace labels, technical UI patterns' },
                          { title: 'Glassmorphism', desc: 'Frosted glass backgrounds using backdrop-blur and translucent fills' },
                          { title: 'Gradient Highlight', desc: 'Blue-to-purple gradient as the primary accent across all interactive elements' },
                          { title: 'Dual Theme', desc: 'Full light and dark mode support with carefully tuned contrast ratios' },
                          { title: 'Dynamic Motion', desc: 'Glitch effects, pulsing animations, and smooth transitions throughout' },
                        ].map((item, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 shrink-0" />
                            <div>
                              <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-foreground">{item.title.toUpperCase()}</span>
                              <p className="font-['PP_Monument',sans-serif] text-xs text-[#717182] dark:text-[#BEBEC8] mt-0.5">{item.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 flex flex-col gap-6">
                      <h3 className="font-['PP_Monument_Extended',sans-serif] font-black text-xl mb-2">Corner Radius</h3>
                      <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">
                        All buttons, cards, inputs, and interactive elements use <code className="font-['IBM_Plex_Mono',monospace] text-[#1782FF] bg-[#1782FF]/10 px-1.5 py-0.5 rounded-[2px] text-xs">rounded-[2px]</code> for the sharp NASA-tech aesthetic.
                      </p>
                      <div className="flex items-end gap-6 mt-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 gradient-bg rounded-[2px]" />
                          <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8]">2px (default)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="w-20 h-20 gradient-bg rounded-full" />
                          <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8]">Full (badges)</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h3 className="font-['PP_Monument_Extended',sans-serif] font-black text-xl mb-3">Phosphor Icons</h3>
                        <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">
                          ARK uses <code className="font-['IBM_Plex_Mono',monospace] text-[#1782FF] bg-[#1782FF]/10 px-1.5 py-0.5 rounded-[2px] text-xs">@phosphor-icons/react</code> as the primary icon library for consistent iconography across the platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── COLOR SYSTEM ─── */}
                <Section id="colors" title="Color System" subtitle="ARK's color palette centers on a blue-to-purple gradient with carefully defined semantic tokens for both light and dark modes.">
                  {/* Primary Gradient */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">PRIMARY GRADIENT</h3>
                    <div
                      className="w-full h-28 rounded-[2px] mb-3 flex items-end p-4"
                      style={{ background: 'linear-gradient(to right, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }}
                    >
                      <span className="font-['IBM_Plex_Mono',monospace] text-xs text-white/80">0% #1782FF → 25% #1782FF → 100% #B02BED</span>
                    </div>
                    <CodeBlock>{`/* CSS Custom Property */
--gradient-primary: linear-gradient(to top right, #1782FF 0%, #1782FF 25%, #B02BED 100%);

/* Tailwind Usage */
className="gradient-bg"       /* Background fill */
className="gradient-text"     /* Text fill */
className="gradient-border"   /* Border */`}</CodeBlock>
                  </div>

                  {/* Brand Colors */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">BRAND COLORS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <ColorSwatch color="#1782FF" name="Primary Blue" value="#1782FF" />
                      <ColorSwatch color="#B02BED" name="Primary Purple" value="#B02BED" />
                      <ColorSwatch color="#00FFFF" name="Glitch Cyan" value="#00FFFF" textColor="#030213" />
                      <ColorSwatch color="#E4002B" name="Heart Red" value="#E4002B" />
                    </div>
                  </div>

                  {/* Light Mode */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">LIGHT MODE TOKENS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                      <ColorSwatch color="#ffffff" name="Background" value="#FFFFFF" textColor="#030213" />
                      <ColorSwatch color="#030213" name="Foreground" value="#030213" />
                      <ColorSwatch color="#f3f3f5" name="Input BG" value="#F3F3F5" textColor="#030213" />
                      <ColorSwatch color="#ececf0" name="Muted" value="#ECECF0" textColor="#030213" />
                      <ColorSwatch color="#717182" name="Muted FG" value="#717182" />
                      <ColorSwatch color="#e9ebef" name="Accent" value="#E9EBEF" textColor="#030213" />
                    </div>
                  </div>

                  {/* Dark Mode */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">DARK MODE TOKENS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                      <ColorSwatch color="#030213" name="Background" value="#030213" />
                      <ColorSwatch color="#fafafa" name="Foreground" value="#FAFAFA" textColor="#030213" />
                      <ColorSwatch color="#262636" name="Secondary" value="#262636" />
                      <ColorSwatch color="#262636" name="Muted" value="#262636" />
                      <ColorSwatch color="#bebec8" name="Muted FG" value="#BEBEC8" textColor="#030213" />
                      <ColorSwatch color="rgba(190,190,200,0.2)" name="Border" value="rgba(190,190,200,0.2)" />
                    </div>
                  </div>

                  {/* Status Colors */}
                  <div>
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">STATUS COLORS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <ColorSwatch color="#047857" name="Published (Light)" value="#047857" />
                      <ColorSwatch color="#10b981" name="Published (Dark)" value="#10B981" textColor="#030213" />
                      <ColorSwatch color="#92400e" name="Draft (Light)" value="#92400E" />
                      <ColorSwatch color="#f59e0b" name="Draft (Dark)" value="#F59E0B" textColor="#030213" />
                    </div>
                  </div>
                </Section>

                {/* ─── TYPOGRAPHY ─── */}
                <Section id="typography" title="Typography" subtitle="Three typeface families form the ARK type system, loaded from a custom server. Each serves a distinct purpose in the hierarchy.">
                  {/* PP Monument Extended */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider">PP MONUMENT EXTENDED</h3>
                      <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#1782FF] bg-[#1782FF]/10 px-2 py-0.5 rounded-full">HEADLINES</span>
                    </div>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 space-y-6">
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">BLACK / 900</span>
                        <p style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 3rem)', lineHeight: 1.1 }}>
                          Build Something Amazing
                        </p>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">BOLD / 700</span>
                        <p style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 2.5rem)', lineHeight: 1.2 }}>
                          Turn Your Projects Into Revenue
                        </p>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">REGULAR / 400</span>
                        <p style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 400, fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: 1.3 }}>
                          Empowering makers and creators
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <CodeBlock>{`/* Font loading (from fonts.css) */
@font-face {
  font-family: 'PP Monument Extended';
  src: url('.../PPMonumentExtended-Regular.woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'PP Monument Extended';
  src: url('.../PPMonumentExtended-Bold.woff2');
  font-weight: 700;
}
@font-face {
  font-family: 'PP Monument Extended';
  src: url('.../PPMonumentExtended-Black.woff2');
  font-weight: 900;
}

/* Usage: Headlines (h1-h3), always uppercase */
font-family: 'PP Monument Extended', sans-serif;
font-weight: 700 | 900;
text-transform: uppercase;`}</CodeBlock>
                    </div>
                  </div>

                  {/* PP Monument */}
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider">PP MONUMENT</h3>
                      <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#1782FF] bg-[#1782FF]/10 px-2 py-0.5 rounded-full">BODY COPY</span>
                    </div>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 space-y-6">
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">BOLD / 700</span>
                        <p className="font-['PP_Monument',sans-serif] font-bold text-lg">
                          Autonomous Robot Arm with Computer Vision
                        </p>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">REGULAR / 400</span>
                        <p className="font-['PP_Monument',sans-serif] text-base text-[#717182] dark:text-[#BEBEC8]">
                          A community for STEM creators to share detailed project documentation, get paid for their work, and connect with makers worldwide. Every project includes comprehensive written instructions, diagrams, and code.
                        </p>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">SMALL / 14px</span>
                        <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">
                          Robotics researcher and maker with 10+ years of experience building autonomous systems.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <CodeBlock>{`/* Font loading (from fonts.css) */
@font-face {
  font-family: 'PP Monument';
  src: url('.../PPMonument-Regular.woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'PP Monument';
  src: url('.../PPMonument-Bold.woff2');
  font-weight: 700;
}

/* Usage: Body copy, descriptions, general UI text */
font-family: 'PP Monument', sans-serif;`}</CodeBlock>
                    </div>
                  </div>

                  {/* IBM Plex Mono */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider">IBM PLEX MONO</h3>
                      <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#1782FF] bg-[#1782FF]/10 px-2 py-0.5 rounded-full">MONOSPACE / UI</span>
                    </div>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 space-y-6">
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">NAVIGATION / 14px</span>
                        <p className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider">PROJECTS &nbsp;&nbsp; EXPLORE &nbsp;&nbsp; CREATORS &nbsp;&nbsp; ABOUT</p>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">LABELS / 12px</span>
                        <div className="flex flex-wrap gap-4">
                          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.6px] text-[#1782FF]">ACCOUNT SETTINGS</span>
                          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">BY SARAH CHEN</span>
                          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.6px] text-[#717182] dark:text-[#A1A1A1]">© 2026 ARK PLATFORM</span>
                        </div>
                      </div>
                      <div>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] tracking-wider">METADATA / 10px</span>
                        <div className="flex flex-wrap gap-3">
                          <span className="font-['IBM_Plex_Mono',monospace] text-[10px]">ROBOTICS</span>
                          <span className="font-['IBM_Plex_Mono',monospace] text-[10px]">3D PRINTING</span>
                          <span className="font-['IBM_Plex_Mono',monospace] text-[10px]">RASPBERRY PI</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <CodeBlock>{`/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700');

/* Usage: Navigation, labels, badges, metadata, buttons, code */
font-family: 'IBM Plex Mono', monospace;
/* Common: text-xs tracking-wider or tracking-[0.6px] */`}</CodeBlock>
                    </div>
                  </div>
                </Section>

                {/* ─── BUTTONS ─── */}
                <Section id="buttons" title="Buttons" subtitle="All buttons use rounded-[2px] corners. The primary CTA features the gradient background with a solid blue hover overlay.">
                  {/* Gradient CTA */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">GRADIENT CTA (PRIMARY ACTION)</h3>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <div className="flex flex-wrap gap-4 items-center mb-6">
                        <Button className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group" size="lg">
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative z-10">CREATE A PROJECT</span>
                        </Button>
                        <Button className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group" size="sm">
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative z-10">CREATE A PROJECT</span>
                        </Button>
                      </div>
                      <CodeBlock>{`<Button className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group">
  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
  <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative z-10">CREATE A PROJECT</span>
</Button>`}</CodeBlock>
                    </div>
                  </div>

                  {/* Standard Variants */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">STANDARD VARIANTS</h3>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <div className="flex flex-wrap gap-4 items-center mb-4">
                        <Button variant="default" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">DEFAULT</Button>
                        <Button variant="outline" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">OUTLINE</Button>
                        <Button variant="secondary" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">SECONDARY</Button>
                        <Button variant="ghost" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">GHOST</Button>
                        <Button variant="destructive" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">DESTRUCTIVE</Button>
                        <Button variant="link" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">LINK</Button>
                      </div>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">SIZES</h3>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <div className="flex flex-wrap gap-4 items-center">
                        <Button size="sm" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">SMALL (h-8)</Button>
                        <Button size="default" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">DEFAULT (h-9)</Button>
                        <Button size="lg" className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">LARGE (h-10)</Button>
                        <Button size="icon" variant="ghost"><MagnifyingGlass size={16} weight="bold" /></Button>
                        <Button size="icon" variant="ghost"><Moon size={16} weight="bold" /></Button>
                      </div>
                    </div>
                  </div>

                  {/* Special Buttons */}
                  <div>
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">CONTEXTUAL BUTTONS</h3>
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <div className="flex flex-wrap gap-4 items-center">
                        {/* Follow Creator */}
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider border-[#1782FF] text-[#1782FF] hover:bg-[#1782FF] hover:text-white"
                        >
                          <UserPlus size={14} weight="bold" className="mr-1" />
                          FOLLOW CREATOR
                        </Button>
                        {/* Following Creator */}
                        <Button
                          size="sm"
                          className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group"
                        >
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Check size={14} weight="bold" className="mr-1 relative z-10" />
                          <span className="relative z-10">FOLLOWING CREATOR</span>
                        </Button>
                        {/* Start Uploading */}
                        <Button
                          className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group"
                        >
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
                          <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Rocket size={14} weight="bold" className="mr-1 relative z-10" />
                          <span className="relative z-10">START UPLOADING</span>
                        </Button>
                        {/* Outline Dark */}
                        <Button
                          variant="outline"
                          className="border-foreground font-['IBM_Plex_Mono',monospace] text-xs tracking-wider"
                        >
                          BROWSE PROJECTS
                          <ArrowRight size={14} weight="bold" className="ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── FORM ELEMENTS ─── */}
                <Section id="forms" title="Form Elements" subtitle="Form inputs maintain the sharp 2px corners and use IBM Plex Mono for placeholder text. Gradient-bordered search fields add visual emphasis.">
                  <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 space-y-8">
                    {/* Standard Input */}
                    <div>
                      <label className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-2 block">STANDARD INPUT</label>
                      <Input placeholder="Enter your display name" className="rounded-[2px] font-['PP_Monument',sans-serif]" />
                    </div>

                    {/* Gradient Search */}
                    <div>
                      <label className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-2 block">GRADIENT-BORDERED SEARCH</label>
                      <div className="relative p-[2px] rounded-[2px] gradient-bg max-w-md">
                        <MagnifyingGlass size={20} weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#212121] z-10" />
                        <input
                          type="text"
                          placeholder="Search projects, creators..."
                          className="w-full pl-12 pr-4 py-3 rounded-[2px] bg-white text-[#212121] text-sm font-['IBM_Plex_Mono',monospace] placeholder:text-[#212121]/50 focus:outline-none relative"
                        />
                      </div>
                    </div>

                    {/* Textarea */}
                    <div>
                      <label className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-2 block">TEXTAREA</label>
                      <textarea
                        className="w-full min-h-[100px] px-3 py-2 rounded-[2px] border border-input bg-input-background dark:bg-input/30 font-['PP_Monument',sans-serif] text-sm placeholder:text-muted-foreground focus:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                        placeholder="Tell other makers about yourself..."
                        defaultValue="Robotics researcher and maker with 10+ years of experience."
                      />
                    </div>

                    {/* Social Input */}
                    <div>
                      <label className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-2 block">SOCIAL LINK INPUT (WITH ICON)</label>
                      <div className="flex items-center gap-3 max-w-md">
                        <YoutubeLogo size={20} weight="fill" className="text-[#FF0000] shrink-0" />
                        <Input placeholder="https://youtube.com/@username" className="rounded-[2px] font-['IBM_Plex_Mono',monospace] text-sm" defaultValue="https://youtube.com/@sarahchen" />
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── BADGES & TAGS ─── */}
                <Section id="badges" title="Badges & Tags" subtitle="Category badges use the gradient background with rounded-full. Status tags use semantic colors optimized for legibility in both themes.">
                  <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8 space-y-8">
                    {/* Category Badges */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">CATEGORY BADGES (GRADIENT BG)</h4>
                      <div className="flex flex-wrap gap-3">
                        {['ROBOTICS', '3D PRINTING', 'RASPBERRY PI', 'CODING', 'ELECTRONICS', 'IOT'].map(cat => (
                          <div
                            key={cat}
                            className="inline-flex items-center px-3 h-5 rounded-full"
                            style={{ backgroundImage: 'linear-gradient(74deg, #1782FF 0%, #B02BED 100%)' }}
                          >
                            <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#212121] dark:text-white leading-none">{cat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category Outline Badges */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">CATEGORY BADGES (OUTLINE)</h4>
                      <div className="flex flex-wrap gap-3">
                        {['ROBOTICS', '3D PRINTING', 'RASPBERRY PI', 'CODING'].map(cat => (
                          <div key={cat} className="inline-flex items-center border border-[#1782ff] rounded-full px-3 h-5">
                            <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#1782ff] leading-none">{cat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status Tags */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">STATUS TAGS</h4>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="px-2 py-0.5 rounded-[2px] bg-emerald-100 dark:bg-emerald-900/30 font-['IBM_Plex_Mono',monospace] text-xs text-[#047857] dark:text-emerald-400">
                          Published
                        </span>
                        <span className="px-2 py-0.5 rounded-[2px] bg-amber-100 dark:bg-amber-900/30 font-['IBM_Plex_Mono',monospace] text-xs text-[#92400e] dark:text-amber-400">
                          Draft
                        </span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8] ml-4">← Darker colors for light mode legibility (#047857 / #92400E)</span>
                      </div>
                    </div>

                    {/* Gradient Border Label */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">GRADIENT BORDER LABEL</h4>
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-block px-4 py-1" style={{ border: '1px solid transparent', borderImage: 'linear-gradient(to top right, #1782FF 0%, #1782FF 25%, #B02BED 100%) 1' }}>
                          <span className="gradient-text dark:[background:none] dark:[color:white] dark:[-webkit-text-fill-color:white] font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">YOUR STEM COMMUNITY</span>
                        </div>
                        <div className="inline-block border border-[#1782FF] px-4 py-1">
                          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">FOR CREATORS</span>
                        </div>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">DIFFICULTY LEVELS</h4>
                      <div className="flex flex-wrap gap-4">
                        {['BEGINNER', 'INTERMEDIATE', 'ADVANCED'].map(d => (
                          <span key={d} className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">{d}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── CARDS & MODULES ─── */}
                <Section id="cards" title="Cards & Modules" subtitle="All cards use the glassmorphism pattern with 2px corners, hover border highlighting, and consistent padding/spacing.">
                  {/* Project Card */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">PROJECT CARD</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:border-[#1782FF] hover:shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] transition-all duration-300 rounded-[2px] overflow-hidden group">
                        <div className="bg-[#ECECF0] dark:bg-[#262636] h-48 flex items-center justify-center">
                          <Cpu size={48} weight="duotone" className="text-[#717182] dark:text-[#BEBEC8]" />
                        </div>
                        <div className="p-4 flex flex-col gap-3">
                          <div className="flex items-center gap-2 h-[18px]">
                            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8] pr-2 border-r border-[rgba(190,190,200,0.25)]">ADVANCED</span>
                            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8] pr-2 border-r border-[rgba(190,190,200,0.25)]">⭐ 4.8</span>
                            <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">💬 234</span>
                          </div>
                          <h3 className="font-['PP_Monument',sans-serif] font-bold text-lg leading-tight group-hover:text-[#1782FF] transition-colors">
                            Autonomous Robot Arm
                          </h3>
                          <p className="text-sm font-['PP_Monument',sans-serif] text-[#212121] dark:text-[#BEBEC8]">
                            Complete build guide for a 6-axis precision robot arm.
                          </p>
                          <div className="pt-2 border-t border-[rgba(190,190,200,0.25)]">
                            <p className="font-['IBM_Plex_Mono',monospace] font-medium text-xs leading-[18px] tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">BY SARAH CHEN</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">FEATURE CARD (WITH GLITCH HOVER)</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { icon: ClipboardText, title: 'DETAILED DOCUMENTATION', desc: 'Every project includes comprehensive written instructions and diagrams.' },
                        { icon: ShoppingCart, title: 'COMPLETE PARTS LISTS', desc: 'Get exact components with direct links to purchase everything.' },
                        { icon: ChatCircle, title: 'DIRECT Q&A', desc: 'Ask specific questions to creators and community members.' },
                      ].map((f, i) => (
                        <div key={i} className="border border-border bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 hover:border-[#1782FF] transition-all rounded-[2px] group cursor-pointer">
                          <div className="w-12 h-12 flex items-center justify-center mb-4 bg-[rgba(23,130,255,0.1)] group-hover:bg-gradient-to-tr group-hover:from-[#1782FF] group-hover:via-[#1782FF] group-hover:to-[#B02BED] transition-all">
                            <f.icon size={24} weight="duotone" className="text-[#1782FF] group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="font-['IBM_Plex_Mono',monospace] text-sm font-semibold mb-3">{f.title}</h3>
                          <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Creator Card Anatomy */}
                  <div className="mb-10">
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">CREATOR CARD</h3>
                    <div className="max-w-md">
                      <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2px] overflow-hidden hover:border-[#1782FF] hover:shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] transition-all duration-300 p-6">
                        <div className="flex gap-4 items-center mb-4">
                          <div className="bg-[#262636] rounded-full shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] size-16 flex items-center justify-center">
                            <span className="text-white text-xl">SC</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-['PP_Monument',sans-serif] font-black text-[21px] leading-tight mb-1">Sarah Chen</h3>
                            <div className="flex items-center gap-6">
                              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#bebec8]">❤️ 12.5K</span>
                              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#bebec8]">📦 24</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {['ROBOTICS', 'RASPBERRY PI'].map(cat => (
                            <div key={cat} className="border border-[#1782ff] rounded-full px-3 py-0.5">
                              <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#1782ff]">{cat}</span>
                            </div>
                          ))}
                        </div>
                        <p className="font-['PP_Monument',sans-serif] text-xs text-[#717182] dark:text-[#bebec8] pb-4 border-b border-[rgba(190,190,200,0.25)]">
                          Robotics researcher and maker with 10+ years of experience... <span className="cursor-pointer hover:text-[#1782FF]">+MORE</span>
                        </p>
                        <div className="pt-4 flex items-center gap-2">
                          <span className="font-['IBM_Plex_Mono',monospace] font-medium text-xs text-[#1782ff] tracking-[0.6px]">RECENT PROJECTS (3)</span>
                          <div className="flex-1" />
                          <CaretRight size={16} weight="bold" className="text-[#1782FF]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Module */}
                  <div>
                    <h3 className="font-['IBM_Plex_Mono',monospace] text-sm tracking-wider mb-4">CTA MODULE</h3>
                    <div className="border-4 border-[#1782FF] backdrop-blur-xl bg-white/50 dark:bg-black/30 p-8 relative overflow-hidden rounded-[2px]">
                      <div className="relative flex flex-col items-center text-center">
                        <div className="inline-block border border-[#1782FF] px-4 py-1 mb-4">
                          <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider label-text">FOR CREATORS</span>
                        </div>
                        <h2 style={{ fontFamily: "'PP Monument Extended', sans-serif", fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.2 }}>
                          Turn Projects Into{' '}
                          <span className="bg-clip-text bg-gradient-to-r from-[#1782FF] via-25% via-[#1782FF] to-[#b02bed] text-transparent" style={{ fontWeight: 900, fontStyle: 'italic' }}>Revenue</span>
                        </h2>
                        <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8] mt-3 max-w-lg">
                          Thick blue border with glassmorphism background. Uses <code className="font-['IBM_Plex_Mono',monospace] text-[#1782FF] text-xs">border-4 border-[#1782FF]</code> with <code className="font-['IBM_Plex_Mono',monospace] text-[#1782FF] text-xs">backdrop-blur-xl</code>.
                        </p>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── GLASSMORPHISM ─── */}
                <Section id="glassmorphism" title="Glassmorphism" subtitle="The frosted glass effect is the signature visual pattern of ARK, applied consistently to all containers, headers, footers, and modals.">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Light Mode Glass */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">LIGHT MODE GLASS</h4>
                      <div className="bg-white/40 backdrop-blur-lg border border-white/40 rounded-[2px] p-6">
                        <p className="font-['PP_Monument',sans-serif] text-sm mb-3">This container uses:</p>
                        <ul className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8] space-y-1">
                          <li><code className="text-[#1782FF]">bg-white/40</code></li>
                          <li><code className="text-[#1782FF]">backdrop-blur-lg</code></li>
                          <li><code className="text-[#1782FF]">border border-white/40</code></li>
                          <li><code className="text-[#1782FF]">rounded-[2px]</code></li>
                        </ul>
                      </div>
                    </div>

                    {/* Dark Mode Glass */}
                    <div>
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">DARK MODE GLASS</h4>
                      <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-[2px] p-6">
                        <p className="font-['PP_Monument',sans-serif] text-sm mb-3 text-white">This container uses:</p>
                        <ul className="font-['IBM_Plex_Mono',monospace] text-xs text-[#BEBEC8] space-y-1">
                          <li><code className="text-[#1782FF]">bg-black/20</code></li>
                          <li><code className="text-[#1782FF]">backdrop-blur-lg</code></li>
                          <li><code className="text-[#1782FF]">border border-white/10</code></li>
                          <li><code className="text-[#1782FF]">rounded-[2px]</code></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Glass */}
                  <div className="mb-6">
                    <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">CARD GLASS (COMBINED)</h4>
                    <CodeBlock>{`/* Standard glass card */
className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2px]"

/* With hover effect */
className="... hover:border-[#1782FF] hover:shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] transition-all duration-300"

/* Header / Footer */
className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border-b border-white/20 dark:border-white/10"`}</CodeBlock>
                  </div>

                  {/* Shadow Levels */}
                  <div>
                    <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">SHADOW LEVELS</h4>
                    <div className="flex flex-wrap gap-6">
                      <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2px] p-6 w-36 text-center">
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8]">DEFAULT</span>
                      </div>
                      <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-[#1782FF] shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] rounded-[2px] p-6 w-36 text-center">
                        <span className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#717182] dark:text-[#BEBEC8]">HOVER / FOCUS</span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── ANIMATIONS ─── */}
                <Section id="animations" title="Animations" subtitle="Dynamic animations bring the NASA-tech aesthetic to life with glitch effects, gradient pulsing, and smooth entrance transitions.">
                  <div className="space-y-8">
                    {/* Glitch Text */}
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">GLITCH TEXT EFFECT</h4>
                      <p style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900, fontSize: '2rem', lineHeight: 1.1 }} className="mb-4">
                        Build Something <GlitchText className="gradient-text">Amazing</GlitchText>
                      </p>
                      <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8] mb-3">
                        The GlitchText component triggers a random cyan/blue text-shadow displacement every 6-12 seconds. Disabled on mobile for performance.
                      </p>
                      <CodeBlock>{`import { GlitchText } from './components/GlitchText';

<GlitchText className="gradient-text">Amazing</GlitchText>

/* Effect: x displacement + colored text-shadow */
/* Cyan: #00FFFF  |  Blue: #1782FF */`}</CodeBlock>
                    </div>

                    {/* Gradient Pulse */}
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">GRADIENT PULSE</h4>
                      <div className="flex items-center gap-6 mb-4">
                        <div
                          className="h-16 w-48 rounded-[2px] animate-gradient-pulse"
                          style={{ background: 'var(--gradient-primary)' }}
                        />
                        <div className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">
                          The gradient stop animates between 25% and 50% over 8 seconds, creating a subtle breathing effect on all gradient elements.
                        </div>
                      </div>
                      <CodeBlock>{`@keyframes gradient-pulse {
  0%, 100% { --gradient-stop: 25%; }
  50% { --gradient-stop: 50%; }
}

/* Applied globally to html element */
animation: gradient-pulse 8s ease-in-out infinite;`}</CodeBlock>
                    </div>

                    {/* Heartbeat */}
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">HEARTBEAT / PULSING ELEMENTS</h4>
                      <div className="flex items-center gap-6 mb-4">
                        <motion.div
                          className="w-8 h-8 gradient-bg rounded-[2px]"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-8 h-8 gradient-bg rounded-[2px]"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div
                          className="w-8 h-8 gradient-bg rounded-[2px]"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                        <motion.div
                          className="w-8 h-8 gradient-bg rounded-[2px]"
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        />
                        <span className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">CTA corner decorations</span>
                      </div>
                    </div>

                    {/* Entrance Animations */}
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">ENTRANCE ANIMATIONS (MOTION)</h4>
                      <CodeBlock>{`/* Standard fade-up entrance (used on cards, sections) */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>

/* Card hover lift */
whileHover={{ y: -4 }}

/* Image hover zoom */
className="group-hover:scale-105 transition-transform duration-300"`}</CodeBlock>
                    </div>
                  </div>
                </Section>

                {/* ─── ICONS ─── */}
                <Section id="icons" title="Iconography" subtitle="ARK uses Phosphor Icons (@phosphor-icons/react) throughout the platform. Icons use 'bold' weight for UI actions and 'duotone' weight for decorative use.">
                  <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
                      {[
                        { Icon: ThumbsUp, name: 'ThumbsUp' },
                        { Icon: ChatCircle, name: 'ChatCircle' },
                        { Icon: ShareNetwork, name: 'ShareNetwork' },
                        { Icon: UserPlus, name: 'UserPlus' },
                        { Icon: MagnifyingGlass, name: 'Search' },
                        { Icon: Moon, name: 'Moon' },
                        { Icon: Sun, name: 'Sun' },
                        { Icon: Rocket, name: 'Rocket' },
                        { Icon: Printer, name: 'Printer' },
                        { Icon: Cpu, name: 'Cpu' },
                        { Icon: Code, name: 'Code' },
                        { Icon: Circuitry, name: 'Circuitry' },
                        { Icon: Eye, name: 'Eye' },
                        { Icon: Pencil, name: 'Pencil' },
                        { Icon: Trash, name: 'Trash' },
                        { Icon: Plus, name: 'Plus' },
                        { Icon: Copy, name: 'Copy' },
                        { Icon: Check, name: 'Check' },
                        { Icon: CaretRight, name: 'CaretRight' },
                        { Icon: CaretDown, name: 'CaretDown' },
                        { Icon: ArrowRight, name: 'ArrowRight' },
                        { Icon: Lightning, name: 'Lightning' },
                        { Icon: ClipboardText, name: 'Clipboard' },
                        { Icon: Info, name: 'Info' },
                      ].map(({ Icon, name }) => (
                        <div key={name} className="flex flex-col items-center gap-2 group cursor-pointer">
                          <div className="w-10 h-10 flex items-center justify-center rounded-[2px] border border-transparent group-hover:border-[#1782FF] group-hover:bg-[#1782FF]/10 transition-all">
                            <Icon size={20} weight="bold" className="text-foreground group-hover:text-[#1782FF] transition-colors" />
                          </div>
                          <span className="font-['IBM_Plex_Mono',monospace] text-[9px] text-[#717182] dark:text-[#BEBEC8] text-center">{name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-[rgba(190,190,200,0.25)]">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-3">SOCIAL ICONS</h4>
                      <div className="flex flex-wrap gap-4">
                        {[
                          { Icon: YoutubeLogo, name: 'YouTube', color: '#FF0000' },
                          { Icon: GithubLogo, name: 'GitHub', color: undefined },
                          { Icon: LinkedinLogo, name: 'LinkedIn', color: '#0A66C2' },
                          { Icon: TwitterLogo, name: 'Twitter', color: '#1DA1F2' },
                          { Icon: Globe, name: 'Website', color: '#1782FF' },
                        ].map(({ Icon, name, color }) => (
                          <div key={name} className="flex items-center gap-2">
                            <Icon size={20} weight="fill" style={color ? { color } : undefined} className={!color ? 'text-foreground' : ''} />
                            <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#717182] dark:text-[#BEBEC8]">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Section>

                {/* ─── SPACING & LAYOUT ─── */}
                <Section id="spacing" title="Spacing & Layout" subtitle="Consistent spacing and max-width constraints keep the layout organized across all viewport sizes.">
                  <div className="space-y-8">
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">LAYOUT CONSTRAINTS</h4>
                      <div className="space-y-4">
                        {[
                          { label: 'Max Content Width', value: 'max-w-[1440px] (header)', code: 'max-w-[1440px]' },
                          { label: 'Max Section Width', value: 'max-w-7xl (1280px)', code: 'max-w-7xl' },
                          { label: 'Horizontal Padding', value: 'px-4 sm:px-6 lg:px-8', code: 'px-4 sm:px-6 lg:px-8' },
                          { label: 'Section Padding', value: 'py-12', code: 'py-12' },
                          { label: 'Card Grid Gap', value: 'gap-6', code: 'gap-6' },
                          { label: 'Feed Card Spacing', value: '32px vertical', code: 'space-y-8' },
                          { label: 'Card Inner Padding', value: 'p-4 to p-8', code: 'p-4 | p-6 | p-8' },
                          { label: 'Header Height', value: 'h-16 (64px)', code: 'h-16' },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center justify-between py-2 border-b border-[rgba(190,190,200,0.15)]">
                            <span className="font-['PP_Monument',sans-serif] text-sm">{item.label}</span>
                            <code className="font-['IBM_Plex_Mono',monospace] text-xs text-[#1782FF] bg-[#1782FF]/10 px-2 py-0.5 rounded-[2px]">{item.code}</code>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">RESPONSIVE GRID PATTERNS</h4>
                      <CodeBlock>{`/* Project cards grid */
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

/* Features grid */
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

/* Two-column layout (DPP) */
className="grid lg:grid-cols-[1fr_380px] gap-8"

/* Edit profile sidebar layout */
className="grid lg:grid-cols-[240px_1fr] gap-8"

/* Explore feed layout (main + sidebar) */
className="grid lg:grid-cols-[1fr_300px] gap-8"`}</CodeBlock>
                    </div>
                  </div>
                </Section>

                {/* ─── DARK MODE ─── */}
                <Section id="dark-mode" title="Dark Mode" subtitle="ARK supports full dark mode via a .dark class on the html element. Theme preference persists in localStorage.">
                  <div className="space-y-6">
                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">THEME SWITCHING</h4>
                      <CodeBlock>{`/* Toggle implementation */
const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};

/* Conditional classes */
className="bg-white/40 dark:bg-black/20"
className="border-white/40 dark:border-white/10"
className="text-[#212121] dark:text-white"
className="text-[#717182] dark:text-[#BEBEC8]"

/* Gradient text (white in dark mode) */
className="gradient-text dark:[background:none] dark:[color:white] dark:[-webkit-text-fill-color:white]"`}</CodeBlock>
                    </div>

                    <div className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] p-8">
                      <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8] mb-4">KEY TOKEN MAPPING</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-[rgba(190,190,200,0.25)]">
                              <th className="text-left py-2 font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8]">TOKEN</th>
                              <th className="text-left py-2 font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8]">LIGHT</th>
                              <th className="text-left py-2 font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#717182] dark:text-[#BEBEC8]">DARK</th>
                            </tr>
                          </thead>
                          <tbody className="font-['IBM_Plex_Mono',monospace] text-xs">
                            {[
                              ['--background', '#FFFFFF', '#030213'],
                              ['--foreground', '#030213', '#FAFAFA'],
                              ['--muted', '#ECECF0', '#262636'],
                              ['--muted-foreground', '#717182', '#BEBEC8'],
                              ['--border', 'rgba(0,0,0,0.1)', 'rgba(190,190,200,0.2)'],
                              ['--secondary', '#F5F5F7', '#262636'],
                              ['Glass BG', 'white/40', 'black/20'],
                              ['Glass Border', 'white/40', 'white/10'],
                            ].map(([token, light, dark]) => (
                              <tr key={token} className="border-b border-[rgba(190,190,200,0.1)]">
                                <td className="py-2 text-[#1782FF]">{token}</td>
                                <td className="py-2 text-[#717182] dark:text-[#BEBEC8]">{light}</td>
                                <td className="py-2 text-[#717182] dark:text-[#BEBEC8]">{dark}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Section>

              </div>
            </div>
          </div>
        </div>
      </div>

      <NewFooter />
    </>
  );
}
