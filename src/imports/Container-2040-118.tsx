import svgPaths from "./svg-mw8tqbts1x";

function Users() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Users">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Users">
          <path d={svgPaths.p8079000} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
          <path d={svgPaths.pe6cca40} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">FOR CREATORS</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Users />
      <Span />
    </div>
  );
}