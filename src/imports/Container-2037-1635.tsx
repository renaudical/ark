import svgPaths from "./svg-mz4slkaxz9";

function Lightning() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <span className="font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[18px] text-[#1782ff]">MISSION:</span>
        <span className="leading-[18px]">{` DEMOCRATIZE STEM KNOWLEDGE`}</span>
      </p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Lightning />
      <Span />
    </div>
  );
}