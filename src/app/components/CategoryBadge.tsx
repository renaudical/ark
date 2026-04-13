const colorMap: Record<string, string> = {
  'ROBOTICS': '#1782FF',
  '3D PRINTING': '#B02BED',
  'RASPBERRY PI': '#10b981',
  'CODING': '#f59e0b',
  'ELECTRONICS': '#06b6d4',
  'CNC & LASER': '#f43f5e',
  'CNC': '#f43f5e',
  'DRONES': '#f97316',
  'IOT & SMART HOME': '#14b8a6',
  'IOT': '#14b8a6',
  'ADVANCED': '#FF2056',
  'INTERMEDIATE': '#f59e0b',
  'BEGINNER': '#10b981',
  'ARDUINO': '#00979D',
  'PYTHON': '#FFD43B',
  'PCB DESIGN': '#06b6d4',
  'HARDWARE': '#06b6d4',
  'WOODWORKING': '#A0522D',
  'CAD': '#B02BED',
  'COSPLAY': '#EC4899',
  'PROPS': '#EC4899',
  'FPV': '#f97316',
  'WEARABLES': '#8B5CF6',
  'LED': '#FBBF24',
  'LASER CUTTING': '#f43f5e',
  'DESIGN': '#B02BED',
  'FABRICATION': '#f43f5e',
  'MICROCONTROLLERS': '#1782FF',
  'SENSORS': '#10b981',
  'DATA': '#06b6d4',
};

export function CategoryBadge({ category, className = '', overlay = false }: { category: string; className?: string; overlay?: boolean }) {
  const color = colorMap[category.toUpperCase()] || '#1782FF';

  // Overlay badges (on images) — identical in light & dark mode
  if (overlay) {
    return (
      <span
        className={`inline-block px-2 py-0.5 rounded-[2px] ${className}`}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.625rem',
          letterSpacing: '0.05em',
          color,
          backgroundColor: '#0a1628',
          border: `1px solid ${color}`,
        }}
      >
        {category}
      </span>
    );
  }

  return (
    <>
      {/* Light mode badge */}
      <span
        className={`inline-block px-2 py-0.5 rounded-[2px] dark:hidden bg-white/60 border border-[rgba(190,190,200,0.7)] ${className}`}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.625rem',
          letterSpacing: '0.05em',
          color,
        }}
      >
        {category}
      </span>
      {/* Dark mode badge */}
      <span
        className={`hidden dark:inline-block px-2 py-0.5 rounded-[2px] bg-[#0a1628] ${className}`}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '0.625rem',
          letterSpacing: '0.05em',
          color,
          border: `1px solid ${color}`,
        }}
      >
        {category}
      </span>
    </>
  );
}
