import svgPaths from "./svg-64kd7g2p36";
import imgImageWithFallback from "figma:asset/74f68d527dd37906c056e35b59d22a6c5aba4b6c.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback />
      <Badge />
    </div>
  );
}

function Span() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[8px] relative">
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">ADVANCED</p>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2037_1583)" id="Star">
          <path d={svgPaths.p295e8380} fill="var(--fill-0, #E4002B)" id="Vector" stroke="var(--stroke-0, #E4002B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_2037_1583">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Span1() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare() {
  return (
    <div className="absolute left-0 size-[12px] top-[3px]" data-name="MessageSquare">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="MessageSquare">
          <path d={svgPaths.p3e661000} id="Vector" stroke="var(--stroke-0, #BEBEC8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Span2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span />
      <Span1 />
      <Span2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData />
      <Title />
      <Description />
      <Creator />
    </div>
  );
}

export default function MotionDiv() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative size-full" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start p-px relative size-full">
        <Div />
        <Div1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}