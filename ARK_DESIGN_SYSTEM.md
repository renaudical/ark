# ARK Design System Reference

A comprehensive reference for all visual patterns, components, and interaction models used across the ARK platform. NASA-tech aesthetic meets modern maker culture.

---

## Table of Contents

1. [Brand & Identity](#brand--identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Font Loading](#font-loading)
5. [Buttons](#buttons)
6. [Form Elements](#form-elements)
7. [Badges & Tags](#badges--tags)
8. [Cards & Modules](#cards--modules)
9. [Glassmorphism](#glassmorphism)
10. [Animations](#animations)
11. [Iconography](#iconography)
12. [Spacing & Layout](#spacing--layout)
13. [Dark Mode](#dark-mode)
14. [CSS Utility Classes](#css-utility-classes)
15. [Feed Cards (Explore Page)](#feed-cards-explore-page)

---

## Brand & Identity

ARK is a community platform for STEM creators with a retro NASA-tech aesthetic. The visual language combines space-age precision with modern glassmorphism.

### Design Principles

- **NASA-Tech Precision** - Sharp 2px rounded corners, monospace labels, technical UI patterns
- **Glassmorphism** - Frosted glass backgrounds using backdrop-blur and translucent fills
- **Gradient Highlight** - Blue-to-purple gradient as the primary accent across all interactive elements
- **Dual Theme** - Full light and dark mode support with carefully tuned contrast ratios
- **Dynamic Motion** - Glitch effects, pulsing animations, and smooth transitions throughout

### Corner Radius

All buttons, cards, inputs, and interactive elements use `rounded-[2px]` for the sharp NASA-tech aesthetic.

- `rounded-[2px]` - Default for all cards, buttons, inputs, containers
- `rounded-full` - Only for category badges and avatar images

### Icon Library

ARK uses `@phosphor-icons/react` as the primary icon library. **Do not use Lucide or other icon libraries.**

- `weight="bold"` - For UI action icons
- `weight="fill"` - For active/selected states and social icons
- `weight="duotone"` - For decorative/illustrative use

---

## Color System

### Primary Gradient

```
0% #1782FF -> 25% #1782FF -> 100% #B02BED
```

```css
/* CSS Custom Property */
--gradient-primary: linear-gradient(to top right, #1782FF 0%, #1782FF var(--gradient-stop), #B02BED 100%);

/* Tailwind Usage */
className="gradient-bg"       /* Background fill */
className="gradient-text"     /* Text fill (clip) */
className="gradient-border"   /* Border */
```

### Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#1782FF` | Primary interactive color, links, borders |
| Primary Purple | `#B02BED` | Gradient endpoint |
| Glitch Cyan | `#00FFFF` | Glitch effect text shadows |
| Heart Red | `#E4002B` | Like/heart interactions |

### Light Mode Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FFFFFF` | Page background |
| `--foreground` | `#030213` | Primary text |
| `--input-background` | `#F3F3F5` | Input backgrounds |
| `--muted` | `#ECECF0` | Muted backgrounds |
| `--muted-foreground` | `#717182` | Secondary text, labels |
| `--accent` | `#E9EBEF` | Accent backgrounds |
| `--border` | `rgba(0, 0, 0, 0.1)` | Default borders |
| `--secondary` | `#F5F5F7` | Secondary backgrounds |

### Dark Mode Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#030213` | Page background |
| `--foreground` | `#FAFAFA` | Primary text |
| `--secondary` | `#262636` | Secondary backgrounds |
| `--muted` | `#262636` | Muted backgrounds |
| `--muted-foreground` | `#BEBEC8` | Secondary text, labels |
| `--border` | `rgba(190, 190, 200, 0.2)` | Default borders |

### Status Colors

| Status | Light Mode | Dark Mode |
|--------|-----------|-----------|
| Published | `#047857` | `#10B981` (emerald-400) |
| Draft | `#92400E` | `#F59E0B` (amber-400) |

---

## Typography

ARK uses a three-font system. Each serves a distinct purpose in the hierarchy.

### PP Monument Extended (Headlines)

- **Usage:** h1, h2, h3, h4 headings - always UPPERCASE
- **Weights:** 400 (Regular), 700 (Bold), 900 (Black)
- **Font family:** `'PP Monument Extended', sans-serif`

```jsx
// Inline style usage (preferred for precise control)
style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 900, fontSize: '3rem', lineHeight: 1.1 }}

// Headlines are always uppercase
className="uppercase"
```

**Typical sizes:**
- Hero h1: `clamp(2rem, 5vw, 3.5rem)`, weight 700/900, lineHeight 1.1
- Section h2: `clamp(1.5rem, 4vw, 2.5rem)`, weight 700, lineHeight 1.2
- Card h3: `1rem - 1.125rem`, weight 700/900, lineHeight 1.2-1.45

### PP Monument (Body Copy)

- **Usage:** Body text, descriptions, paragraphs, general UI text
- **Weights:** 400 (Regular), 700 (Bold)
- **Font family:** `'PP Monument', sans-serif`
- **Set as default body font** in theme.css

```jsx
// Inline style usage
style={{ fontFamily: "'PP Monument', sans-serif", fontSize: '0.875rem', lineHeight: '1.6' }}

// Tailwind class usage
className="font-['PP_Monument',sans-serif] text-sm"
```

**Typical sizes:**
- Body text: `0.875rem - 1rem`, lineHeight 1.5-1.6
- Small descriptions: `0.75rem - 0.875rem`, lineHeight 1.4-1.6
- Card titles (PP Monument, not Extended): `1.125rem`, weight 900, lineHeight 1.45

### IBM Plex Mono (Monospace / UI)

- **Usage:** Navigation, labels, badges, metadata, buttons, code, timestamps, tracking info
- **Weights:** 400, 500, 600, 700
- **Font family:** `'IBM Plex Mono', monospace`
- **Loaded from:** Google Fonts

```jsx
// Inline style usage
style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.05em' }}

// Tailwind class usage
className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider"
```

**Typical sizes and tracking:**
- Navigation: `14px` (0.875rem), tracking-wider
- Labels/section headers: `12px` (0.75rem), `tracking-[0.6px]` or `tracking-wider`
- Badges/metadata: `10px` (0.625rem), `tracking-wider`
- Buttons: `12px` (0.75rem), `tracking-wider`
- Footer copyright: `12px`, `tracking-[0.6px]`
- Attribution ("BY CREATOR"): `12px`, `tracking-[0.24px]`

---

## Font Loading

Fonts are loaded in `/src/styles/fonts.css`:

```css
/* IBM Plex Mono - Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

/* PP Monument Extended - Custom server */
@font-face {
  font-family: 'PP Monument Extended';
  src: url('https://www.actionsatisfaction.com/Monument/PPMonumentExtended-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Monument Extended';
  src: url('https://www.actionsatisfaction.com/Monument/PPMonumentExtended-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Monument Extended';
  src: url('https://www.actionsatisfaction.com/Monument/PPMonumentExtended-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

/* PP Monument Normal - Custom server */
@font-face {
  font-family: 'PP Monument';
  src: url('https://www.actionsatisfaction.com/Monument/PPMonument-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'PP Monument';
  src: url('https://www.actionsatisfaction.com/Monument/PPMonument-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

---

## Buttons

All buttons use `rounded-[2px]` corners.

### Gradient CTA (Primary Action)

The main call-to-action button. Uses gradient background with solid blue hover overlay.

```jsx
<Button className="text-white relative overflow-hidden font-['IBM_Plex_Mono',monospace] text-xs tracking-wider group">
  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #1782FF 0%, #1782FF 25%, #B02BED 100%)' }} />
  <div className="absolute inset-0 bg-[#1782FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  <span className="relative z-10">CREATE A PROJECT</span>
</Button>
```

### Contextual Button Variants

- **Follow Creator (outline):** `border-[#1782FF] text-[#1782FF] hover:bg-[#1782FF] hover:text-white`
- **Following Creator (gradient filled):** Same gradient CTA pattern with check icon
- **Browse Projects (outline dark):** `border-foreground` with arrow icon
- **Standard variants:** default, outline, secondary, ghost, destructive, link

### Button Sizes

- Small: `size="sm"` (h-8)
- Default: `size="default"` (h-9)
- Large: `size="lg"` (h-10)
- Icon: `size="icon"` (square)

---

## Form Elements

All form inputs use `rounded-[2px]`.

### Standard Input

```jsx
<Input placeholder="Enter your display name" className="rounded-[2px] font-['PP_Monument',sans-serif]" />
```

### Gradient-Bordered Search

```jsx
<div className="relative p-[2px] rounded-[2px] gradient-bg max-w-md">
  <MagnifyingGlass size={20} weight="bold" className="absolute left-3 top-1/2 -translate-y-1/2 text-[#212121] z-10" />
  <input
    type="text"
    placeholder="Search projects, creators..."
    className="w-full pl-12 pr-4 py-3 rounded-[2px] bg-white text-[#212121] text-sm font-['IBM_Plex_Mono',monospace] placeholder:text-[#212121]/50 focus:outline-none relative"
  />
</div>
```

### Textarea

```jsx
className="w-full min-h-[100px] px-3 py-2 rounded-[2px] border border-input bg-input-background dark:bg-input/30 font-['PP_Monument',sans-serif] text-sm placeholder:text-muted-foreground focus:outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
```

---

## Badges & Tags

### Category Badges (Gradient Background)

```jsx
<div
  className="inline-flex items-center px-3 h-5 rounded-full"
  style={{ backgroundImage: 'linear-gradient(74deg, #1782FF 0%, #B02BED 100%)' }}
>
  <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#212121] dark:text-white leading-none">
    ROBOTICS
  </span>
</div>
```

### Category Badges (Outline)

```jsx
<div className="inline-flex items-center border border-[#1782ff] rounded-full px-3 h-5">
  <span className="font-['IBM_Plex_Mono',monospace] font-medium text-[10px] text-[#1782ff] leading-none">ROBOTICS</span>
</div>
```

### Status Tags

```jsx
/* Published */
className="px-2 py-0.5 rounded-[2px] bg-emerald-100 dark:bg-emerald-900/30 font-['IBM_Plex_Mono',monospace] text-xs text-[#047857] dark:text-emerald-400"

/* Draft */
className="px-2 py-0.5 rounded-[2px] bg-amber-100 dark:bg-amber-900/30 font-['IBM_Plex_Mono',monospace] text-xs text-[#92400e] dark:text-amber-400"
```

### Gradient Border Label

```jsx
<div className="inline-block px-4 py-1" style={{ border: '1px solid transparent', borderImage: 'linear-gradient(to top right, #1782FF 0%, #1782FF 25%, #B02BED 100%) 1' }}>
  <span className="gradient-text dark:[background:none] dark:[color:white] dark:[-webkit-text-fill-color:white] font-['IBM_Plex_Mono',monospace] text-xs tracking-wider">
    YOUR STEM COMMUNITY
  </span>
</div>
```

### Blue Border Label

```jsx
<div className="inline-block border border-[#1782FF] px-4 py-1">
  <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-wider text-[#1782FF]">FOR CREATORS</span>
</div>
```

### Difficulty Levels

Plain text, no background:

```jsx
<span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">ADVANCED</span>
```

---

## Cards & Modules

All cards use glassmorphism + `rounded-[2px]`.

### Project Card

```jsx
<div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] hover:border-[#1782FF] hover:shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] transition-all duration-300 rounded-[2px] overflow-hidden group">
  {/* Image area */}
  <div className="bg-[#ECECF0] dark:bg-[#262636] h-48" />
  {/* Content area */}
  <div className="p-4 flex flex-col gap-3">
    {/* Metadata row */}
    <div className="flex items-center gap-2 h-[18px]">
      <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">ADVANCED</span>
    </div>
    {/* Title */}
    <h3 className="font-['PP_Monument',sans-serif] font-bold text-lg leading-tight group-hover:text-[#1782FF] transition-colors">
      Project Title
    </h3>
    {/* Description */}
    <p className="text-sm font-['PP_Monument',sans-serif] text-[#212121] dark:text-[#BEBEC8]">
      Description text.
    </p>
    {/* Attribution */}
    <div className="pt-2 border-t border-[rgba(190,190,200,0.25)]">
      <p className="font-['IBM_Plex_Mono',monospace] font-medium text-xs leading-[18px] tracking-[0.24px] text-[#717182] dark:text-[#BEBEC8]">BY CREATOR NAME</p>
    </div>
  </div>
</div>
```

### Feature Card (with icon hover)

```jsx
<div className="border border-border bg-white/50 dark:bg-black/30 backdrop-blur-lg p-6 hover:border-[#1782FF] transition-all rounded-[2px] group cursor-pointer">
  <div className="w-12 h-12 flex items-center justify-center mb-4 bg-[rgba(23,130,255,0.1)] group-hover:bg-gradient-to-tr group-hover:from-[#1782FF] group-hover:via-[#1782FF] group-hover:to-[#B02BED] transition-all">
    <Icon size={24} weight="duotone" className="text-[#1782FF] group-hover:text-white transition-colors" />
  </div>
  <h3 className="font-['IBM_Plex_Mono',monospace] text-sm font-semibold mb-3">TITLE</h3>
  <p className="font-['PP_Monument',sans-serif] text-sm text-[#717182] dark:text-[#BEBEC8]">Description</p>
</div>
```

### Creator Card

Uses `bg-white/50 dark:bg-black/30` glass with avatar circle, outline category badges, and "RECENT PROJECTS" link at bottom.

### CTA Module

```jsx
<div className="border-4 border-[#1782FF] backdrop-blur-xl bg-white/50 dark:bg-black/30 p-8 relative overflow-hidden rounded-[2px]">
  {/* Centered content with blue border label, PP Monument Extended headline, gradient italic keyword */}
</div>
```

---

## Glassmorphism

The frosted glass effect is the signature visual pattern of ARK.

### Standard Glass Container

```jsx
/* Light mode */
className="bg-white/40 backdrop-blur-lg border border-white/40 rounded-[2px]"

/* Dark mode */
className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-[2px]"

/* Combined (responsive to theme) */
className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px]"
```

### Card Glass (with shadow)

```jsx
/* Standard glass card */
className="bg-white/50 dark:bg-black/30 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] rounded-[2px]"

/* With hover effect */
className="... hover:border-[#1782FF] hover:shadow-[0_8px_32px_0_rgba(23,130,255,0.2)] transition-all duration-300"
```

### Header / Footer Glass

```jsx
className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border-b border-white/20 dark:border-white/10"
```

### Shadow Levels

- **Default:** `shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]`
- **Hover/Focus:** `shadow-[0_8px_32px_0_rgba(23,130,255,0.2)]` with `border-[#1782FF]`

---

## Animations

### Glitch Text Effect

```jsx
import { GlitchText } from './components/GlitchText';

<GlitchText className="gradient-text">Amazing</GlitchText>

/* Effect: Random x displacement + colored text-shadow every 6-12 seconds */
/* Colors: Cyan #00FFFF | Blue #1782FF */
/* Disabled on mobile for performance */
```

### Gradient Pulse

Applied globally to the html element. The gradient stop animates between 25% and 50% over 8 seconds.

```css
@keyframes gradient-pulse {
  0%, 100% { --gradient-stop: 25%; }
  50% { --gradient-stop: 50%; }
}

/* Applied to html */
animation: gradient-pulse 8s ease-in-out infinite;
```

### Heartbeat / Pulsing Elements

```jsx
<motion.div
  animate={{ opacity: [1, 0.3, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
/>

/* Stagger with delay: 0, 0.5, 1, 1.5 */
```

### Entrance Animations (Motion)

```jsx
/* Standard fade-up entrance (cards, sections) */
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>

/* Card hover lift */
whileHover={{ y: -4 }}

/* Image hover zoom */
className="group-hover:scale-105 transition-transform duration-300"
```

---

## Iconography

ARK uses **Phosphor Icons** (`@phosphor-icons/react`) exclusively.

### Common Icons

| Icon | Import | Usage |
|------|--------|-------|
| Heart | `Heart` | Likes/follows |
| ChatCircle | `ChatCircle` | Comments |
| ShareNetwork | `ShareNetwork` | Sharing |
| UserPlus | `UserPlus` | Follow action |
| MagnifyingGlass | `MagnifyingGlass` | Search |
| Moon / Sun | `Moon`, `Sun` | Theme toggle |
| Rocket | `Rocket` | Brand/launch |
| Printer | `Printer` | 3D printing |
| Cpu | `Cpu` | Electronics |
| Code | `Code` | Coding |
| Circuitry | `Circuitry` | Electronics |
| Eye | `Eye` | Views |
| Pencil | `Pencil` | Edit |
| Trash | `Trash` | Delete |
| Plus | `Plus` | Add/create |
| Copy | `Copy` | Copy to clipboard |
| Check | `Check` | Confirmed/done |
| CaretRight / CaretDown | `CaretRight`, `CaretDown` | Navigation |
| ArrowRight | `ArrowRight` | Links/CTA |
| Lightning | `Lightning` | Challenges/energy |
| ClipboardText | `ClipboardText` | Documentation |
| BookmarkSimple | `BookmarkSimple` | Save/bookmark |
| Share | `Share` | Share action |
| Fire | `Fire` | Trending |
| TrendUp | `TrendUp` | Trending metrics |
| Clock | `Clock` | Time/deadline |
| CurrencyDollar | `CurrencyDollar` | Backers/pricing |

### Social Icons

| Platform | Icon | Color |
|----------|------|-------|
| YouTube | `YoutubeLogo` | `#FF0000` |
| GitHub | `GithubLogo` | foreground |
| LinkedIn | `LinkedinLogo` | `#0A66C2` |
| Twitter | `TwitterLogo` | `#1DA1F2` |
| Website | `Globe` | `#1782FF` |

---

## Spacing & Layout

### Layout Constraints

| Property | Value | Tailwind |
|----------|-------|----------|
| Max Content Width (header) | 1440px | `max-w-[1440px]` |
| Max Section Width | 1280px | `max-w-7xl` |
| Horizontal Padding | Responsive | `px-4 sm:px-6 lg:px-8` |
| Section Padding | 48px | `py-12` |
| Card Grid Gap | 24px | `gap-6` |
| Feed Card Spacing | 32px vertical | `space-y-8` |
| Card Inner Padding | 16-32px | `p-4 \| p-6 \| p-8` |
| Header Height | 64px | `h-16` |

### Responsive Grid Patterns

```jsx
/* Project cards grid */
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

/* Features grid */
className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

/* Two-column layout (DPP - Detail Project Page) */
className="grid lg:grid-cols-[1fr_380px] gap-8"

/* Edit profile sidebar layout */
className="grid lg:grid-cols-[240px_1fr] gap-8"

/* Explore feed layout (main + sidebar) */
className="grid lg:grid-cols-[1fr_300px] gap-8"
```

---

## Dark Mode

ARK supports full dark mode via a `.dark` class on the html element. Theme preference persists in localStorage.

### Theme Toggle Implementation

```jsx
const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  document.documentElement.classList.toggle('dark', newTheme === 'dark');
};
```

### Common Theme-Aware Class Patterns

```jsx
/* Backgrounds */
className="bg-white/40 dark:bg-black/20"

/* Borders */
className="border-white/40 dark:border-white/10"

/* Primary text */
className="text-[#212121] dark:text-white"

/* Secondary/muted text */
className="text-[#717182] dark:text-[#BEBEC8]"

/* Divider borders */
className="border-[rgba(190,190,200,0.25)]"

/* Gradient text (white override in dark mode) */
className="gradient-text dark:[background:none] dark:[color:white] dark:[-webkit-text-fill-color:white]"
```

### Key Token Mapping

| Token | Light | Dark |
|-------|-------|------|
| `--background` | `#FFFFFF` | `#030213` |
| `--foreground` | `#030213` | `#FAFAFA` |
| `--muted` | `#ECECF0` | `#262636` |
| `--muted-foreground` | `#717182` | `#BEBEC8` |
| `--border` | `rgba(0,0,0,0.1)` | `rgba(190,190,200,0.2)` |
| `--secondary` | `#F5F5F7` | `#262636` |
| Glass BG | `white/40` | `black/20` |
| Glass Border | `white/40` | `white/10` |

---

## CSS Utility Classes

Defined in `/src/styles/theme.css`:

| Class | Effect |
|-------|--------|
| `.gradient-text` | Gradient text fill (blue-to-purple) |
| `.gradient-bg` | Gradient background fill |
| `.gradient-border` | Gradient border via `border-image` |
| `.hover-gradient-text` | Gradient text on hover |
| `.label-text` | `#212121` in light, white in dark |
| `.badge-icon` | White in dark mode |
| `.animate-gradient-slow` | 8s gradient position shift |
| `.animate-gradient-pulse` | 8s gradient stop animation |
| `.scrollbar-hide` | Hide scrollbars cross-browser |

### Keyframe Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `gradient-pulse` | 8s | Gradient stop 25% -> 50% (on html) |
| `gradient-shift` | 8s | Background position shift |
| `gradient-rotate` | 10s | Background position rotation |
| `heartbeat` | - | Opacity 1 -> 0.3 -> 1 |
| `cursor-blink` | - | Opacity toggle 0/1 |
| `glass-reflection` | - | Background position sweep |

---

## Feed Cards (Explore Page)

Feed cards on the Explore page use the glassmorphism background pattern and are spaced with `space-y-8` (32px).

### Card Background Pattern

All feed cards use:
```jsx
className="bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-[2px] overflow-hidden"
```

### Feed Card Types

1. **New Project Card** - Gradient header bar (blue-to-purple), full image, engagement bar, title, description
2. **Updated Project Card** - Green header bar, thumbnail + text layout, version badge
3. **Trending Project Card** - Orange header bar, full image with trending overlay, engagement bar
4. **Milestone Card** - Gradient top line (2px), pulsing icon, milestone text
5. **Community Challenge Card** - Gradient top line, `border-[#1782FF]/30`, deadline/participants, join button
6. **Weekly Roundup Card** - Gradient header bar, grid of project thumbnails
7. **Creator Post Card** - Gradient top line (2px), avatar, post type label, content

### Feed Card Header Bars

Colored 44px header strips with gradient backgrounds:

- **New Project:** `linear-gradient(28deg, #1782FF 0%, #B02BED 100%)`
- **Updated Project:** `linear-gradient(28deg, #258D40 0%, #34A853 100%)`
- **Trending:** `linear-gradient(28deg, #D47509 0%, #FF8904 100%)`
- **Weekly Roundup:** `linear-gradient(28deg, #1782FF 0%, #B02BED 100%)`

### Feed Card Text Colors (Theme-Aware)

```jsx
/* Card titles */
className="text-[#212121] dark:text-white hover:text-[#1782FF] transition-colors"

/* Card descriptions */
className="text-[#717182] dark:text-[#BEBEC8]"

/* Metadata/timestamps */
className="text-[#717182] dark:text-white/40"

/* Engagement bar */
className="text-[#717182] dark:text-white/50"

/* Action buttons (Save, Share) */
className="text-[#717182] dark:text-white/50 hover:text-[#212121] dark:hover:text-white"
```

### Feed Card Action Bar

Bottom bar with creator avatar, action context text, and Save/Share buttons:
```jsx
className="flex items-center gap-2 h-[41px] border-t border-[rgba(190,190,200,0.25)] px-6"
```

---

## Quick Reference: Common Patterns

### Standard Page Structure

```jsx
<>
  <MoonDustBackground /> {/* or plain bg */}
  <NewHeader />
  <div className="min-h-screen w-full relative pt-16">
    <div className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Content */}
      </div>
    </div>
  </div>
  <NewFooter />
</>
```

### Section Label (Blue Border)

```jsx
<div className="inline-block border border-[#1782FF] px-4 py-1 mb-6">
  <span className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.6px] text-[#1782FF]">SECTION LABEL</span>
</div>
```

### Gradient Text Keyword in Heading

```jsx
<h1 style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 700, lineHeight: 1.1 }} className="uppercase">
  Turn Projects Into{' '}
  <span className="bg-clip-text bg-gradient-to-r from-[#1782FF] via-25% via-[#1782FF] to-[#b02bed] text-transparent" style={{ fontWeight: 900, fontStyle: 'italic' }}>
    Revenue
  </span>
</h1>
```

### Divider Line

```jsx
className="border-b border-[rgba(190,190,200,0.25)]"
```
