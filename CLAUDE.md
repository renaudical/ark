# ARK STEM BLUE

A React + Vite + Tailwind CSS web app — a STEM community hub originally designed in Figma.

## Dev server

```bash
npm i        # install deps (first time)
npm run dev  # start dev server
npm run build
```

## Stack

- **React 18** with **React Router 7** (browser router, file-based page wrappers)
- **Vite 6** with `@tailwindcss/vite` plugin
- **Tailwind CSS 4** — primary styling approach
- **shadcn/ui** components in `src/app/components/ui/` (built on Radix UI + `class-variance-authority`)
- **MUI 7** (`@mui/material`) — used alongside shadcn
- **Phosphor Icons** + **Lucide React** for icons
- **Framer Motion** (`motion`) for animations
- **Recharts** for data visualization
- **React Hook Form** + **Sonner** for forms/toasts

## Path aliases

`@` maps to `src/` (configured in `vite.config.ts`).

## Project structure

```
src/
  app/
    App.tsx              # RouterProvider entry
    routes.ts            # All routes defined here
    pages/               # Page components (wrapped versions are data/state shells)
    components/
      ui/                # shadcn/ui primitives
      Layout.tsx         # Root layout (header, footer, scroll-to-top)
      NewHeader.tsx
      NewFooter.tsx
      ProjectCard.tsx
      CreatorCard.tsx
      ...
    data/
      projectFormData.ts
  imports/               # Figma-exported components (do not refactor)
  assets/
  styles/
  main.tsx
```

## Design system

All UI work must follow `ARK_DESIGN_SYSTEM.md`. Key rules:
- **Corner radius:** `rounded-[2px]` for everything; `rounded-full` only for badges and avatars
- **Fonts:** PP Monument Extended (headlines, always UPPERCASE) / PP Monument (body) / IBM Plex Mono (labels, buttons, badges, mono UI)
- **Primary gradient:** `#1782FF` → `#B02BED` (blue to purple)
- **Glassmorphism:** `bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/10`
- **Icons:** Phosphor Icons (`@phosphor-icons/react`) only — never Lucide
- **Motion:** Framer Motion (`motion`) for entrance animations, hover lifts, glitch text
- **Gradient utilities:** `.gradient-text`, `.gradient-bg`, `.gradient-border` from `src/styles/theme.css`

## Key conventions

- Pages follow a wrapper pattern: `FooPageWrapper.tsx` handles data/state; `FooPage.tsx` handles rendering.
- `src/imports/` contains Figma-exported components — treat as read-only unless intentionally integrating.
- `@` alias preferred over relative paths for imports outside the immediate directory.
- Do not add `.css`, `.tsx`, or `.ts` to `assetsInclude` in `vite.config.ts` (per existing comment).
- shadcn utilities live in `src/app/components/ui/utils.ts`.
