import svgPaths from "./svg-nerdi2j2xt";
import imgImageWithFallback from "figma:asset/a10e15b1dcbf1941f0f7713ebc2f4c2a586689e0.png";

function ImageWithFallback() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function H() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Normal:Black',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Heart">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Heart">
          <path d={svgPaths.p13a22680} fill="var(--fill-0, #1782FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2023_1043)" id="Frame">
          <path d={svgPaths.p37dec080} fill="var(--fill-0, #A1A1A1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2023_1043">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span />
      <Span1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] text-[12px] w-[342px]">
        <span className="font-['PP_Monument_Normal:Regular',sans-serif] leading-[normal]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are... `}</span>
        <span className="font-['PP_Monument_Normal:Black',sans-serif] leading-[normal] text-white">+MORE</span>
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p29aa1400} fill="var(--fill-0, #1782FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

export default function CardOpen() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[2px] size-full" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Div />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[2px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}