import svgPaths from "./svg-rrlr36d81x";

function H() {
  return (
    <div className="absolute h-[61.594px] leading-[61.6px] left-0 not-italic text-[56px] top-[60px] tracking-[-0.5px] w-[1216px] whitespace-nowrap" data-name="h1">
      <p className="absolute left-[0.5px] text-[#fafafa] top-0" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 500 }}>Turn Your Projects Into</p>
      <p className="absolute bg-clip-text bg-gradient-to-r from-[#1782ff] left-[571.5px] text-[transparent] to-[#b02bed] top-0" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 700, fontStyle: "italic" }}>Passive Income</p>
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[9px]" data-name="Users">
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
    <div className="absolute h-[18px] left-[40px] top-[8px] w-[86.406px]" data-name="span">
      <p className="absolute font-['IBM_Plex_Mono',monospace] leading-[18px] left-0 not-italic text-[12px] text-white top-0 whitespace-nowrap">FOR CREATORS</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute border border-[#1782ff] border-solid h-[36px] left-[0.5px] top-0 w-[144.406px]" data-name="Container">
      <Users />
      <Span />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <H />
      <Container1 />
    </div>
  );
}