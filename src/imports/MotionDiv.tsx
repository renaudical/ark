import svgPaths from "./svg-bdh6crlca4";
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
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[27px] left-0 not-italic text-[#fafafa] text-[21px] top-[0.5px] whitespace-nowrap">Sarah Myles</p>
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
        <p className="font-['IBM_Plex_Mono',monospace] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2023_1031)" id="Frame">
          <path d={svgPaths.p37dec080} fill="var(--fill-0, #A1A1A1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2023_1031">
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
        <p className="font-['IBM_Plex_Mono',monospace] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <H />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[19.328px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono',monospace] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute h-[19.328px] left-[74px] rounded-[8px] top-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono',monospace] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[19.328px] left-[166px] rounded-[8px] top-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono',monospace] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[19.328px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[0px] w-[342px]">
        <span className="leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[12px] text-white">+MORE</span>
      </p>
    </div>
  );
}

function Frame2() {
  return <div className="h-[18px] shrink-0 w-[173px]" />;
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p39bbb280} fill="var(--fill-0, #1782FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end pb-[16px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Mono',monospace] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return <div className="h-[18px] shrink-0 w-[46px]" />;
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p1ab01b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[264px]">Autonomous Delivery Robot</p>
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return <div className="h-[18px] shrink-0 w-[46px]" />;
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p1ab01b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[264px]">Custom 3D Printed Drone Frame</p>
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[390px]" data-name="div">
      <Container />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

export default function MotionDiv() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] size-full" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Div />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(161,161,161,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}