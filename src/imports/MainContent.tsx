import svgPaths from "./svg-9glyuaedsj";
import imgImageWithFallback from "figma:asset/a10e15b1dcbf1941f0f7713ebc2f4c2a586689e0.png";
import imgImageWithFallback1 from "figma:asset/9b0eed1a7b50879d74907ee46a13ea640adb4592.png";

function Span() {
  return (
    <div className="absolute h-[18px] left-[16px] top-[8px] w-[122.406px]" data-name="span">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-[61.5px] not-italic text-[12px] text-center text-white top-0 whitespace-nowrap">FEATURED CREATORS</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute border border-[#1782ff] border-solid h-[36px] left-[529.8px] top-0 w-[156.406px]" data-name="Container">
      <Span />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute h-[60px] left-0 top-[52px] w-[1216px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['PP_Monument_Extended',sans-serif] leading-[60px] left-[608.52px] not-italic text-[#fafafa] text-[40px] text-center top-[-0.5px] tracking-[-0.5px] whitespace-nowrap">Meet Our Top Contributors</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[112px] left-[65px] top-[630px] w-[1216px]" data-name="Container">
      <Container1 />
      <H1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function H2() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[27px] left-0 not-italic text-[#fafafa] text-[21px] top-[0.5px] tracking-[-0.5px] whitespace-nowrap">Sarah Myles</p>
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

function Span1() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
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

function Span2() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span1 />
      <Span2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <H2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[19.328px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute h-[19.328px] left-[74px] rounded-[8px] top-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[19.328px] left-[166px] rounded-[8px] top-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[19.328px] relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[0px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
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

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end pb-[16px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] whitespace-nowrap">RECENT PROJECTS (3)</p>
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

function Container9() {
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

function Container10() {
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
      <Container2 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(10,10,10,0.4)] left-[calc(50%-0.5px)] rounded-[8px] top-[782px] w-[390px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(161,161,161,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function H3() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[27px] left-0 not-italic text-[#fafafa] text-[21px] top-[0.5px] tracking-[-0.5px] whitespace-nowrap">Sarah Myles</p>
    </div>
  );
}

function Heart1() {
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

function Span3() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart1 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame7() {
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

function Span4() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame7 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span3 />
      <Span4 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <H3 />
        <Container14 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute h-[19.328px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute h-[19.328px] left-[74px] rounded-[8px] top-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute h-[19.328px] left-[166px] rounded-[8px] top-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[19.328px] relative shrink-0 w-full" data-name="Container">
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[0px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[12px] text-white">+MORE</span>
      </p>
    </div>
  );
}

function Frame8() {
  return <div className="h-[18px] shrink-0 w-[173px]" />;
}

function Frame9() {
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

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[390px]" data-name="div">
      <Container11 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.4)] left-[64px] rounded-[8px] top-[782px] w-[390px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(161,161,161,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
      </div>
    </div>
  );
}

function H4() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[27px] left-0 not-italic text-[#fafafa] text-[21px] top-[0.5px] tracking-[-0.5px] whitespace-nowrap">Sarah Myles</p>
    </div>
  );
}

function Heart2() {
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

function Span5() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart2 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame10() {
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

function Span6() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame10 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span5 />
      <Span6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <H4 />
        <Container21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute h-[19.328px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute h-[19.328px] left-[74px] rounded-[8px] top-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute h-[19.328px] left-[166px] rounded-[8px] top-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[19.328px] relative shrink-0 w-full" data-name="Container">
      <Badge6 />
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[0px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[12px] text-white">+MORE</span>
      </p>
    </div>
  );
}

function Frame11() {
  return <div className="h-[18px] shrink-0 w-[173px]" />;
}

function Frame12() {
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

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[390px]" data-name="div">
      <Container18 />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.4)] left-[891px] rounded-[8px] top-[782px] w-[390px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(161,161,161,0.25)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-1/2 top-[782px]">
      <MotionDiv />
      <MotionDiv1 />
      <MotionDiv2 />
    </div>
  );
}

function P() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[28px] left-0 not-italic text-[#a1a1a1] text-[18px] top-[0.5px] w-[555px]">{`YouTube is amazing for reach and virality, but it's not built for monetization or community. ARK gives makers what they actually need: revenue, detailed documentation, and meaningful connections.`}</p>
    </div>
  );
}

function Span7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span7 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Direct monetization from every project</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#a1a1a1] text-[14px] top-[0.5px] whitespace-nowrap">Pay-what-you-want pricing means makers contribute based on value</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.953px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Span8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span8 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Comprehensive documentation support</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#a1a1a1] text-[14px] top-[0.5px] whitespace-nowrap">Share detailed guides, CAD files, code, and step-by-step instructions</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.961px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Span9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span9 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">{`Engaged maker community with Q&A`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#a1a1a1] text-[14px] top-[0.5px] whitespace-nowrap">Build relationships through discussions and direct support</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[383.539px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Span10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span10 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Integrates with your YouTube videos</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#a1a1a1] text-[14px] top-[0.5px] whitespace-nowrap">Embed videos and drive traffic from both platforms</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[337.148px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[240px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container32 />
      <Container37 />
      <Container42 />
    </div>
  );
}

function Div3() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] h-[272px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col items-start pt-[32px] px-[32px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <P />
      <Div3 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[318.375px] left-0 top-0 w-[566px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container48() {
  return <div className="absolute h-[318.375px] left-0 top-0 w-[566px]" data-name="Container" />;
}

function P1() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] italic leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] w-[484px]">{`"I was struggling to make $200/month on YouTube with 85K subscribers. Within 3 months on ARK, I'm consistently earning over $1,500 from just 8 detailed projects."`}</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.8)] top-0 whitespace-nowrap">— SARAH MYLES, 3D PRINTING</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col gap-[4px] h-[103px] items-start left-[12px] pt-[12px] px-[12px] top-[203.38px] w-[542px]" data-name="Container">
      <P1 />
      <P2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#262626] h-[318.375px] left-[9px] overflow-clip top-[9px] w-[566px]" data-name="Container">
      <ImageWithFallback3 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return <div className="absolute border-[#1782ff] border-l-2 border-solid border-t-2 left-[-7px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container51() {
  return <div className="absolute border-[#b02bed] border-r-2 border-solid border-t-2 left-[575px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container52() {
  return <div className="absolute border-[#1782ff] border-b-2 border-l-2 border-solid left-[-7px] size-[16px] top-[327.38px]" data-name="Container" />;
}

function Container53() {
  return <div className="absolute border-[#b02bed] border-b-2 border-r-2 border-solid left-[575px] size-[16px] top-[327.38px]" data-name="Container" />;
}

function Div4() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] h-[336.375px] relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[356px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="motion.div">
      <Div4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[356px] left-[65px] top-[225.59px] w-[1216px]" data-name="Container">
      <MotionDiv3 />
      <MotionDiv4 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[61.594px] leading-[61.6px] left-0 not-italic text-[40px] top-[60px] tracking-[-0.5px] uppercase w-[1216px] whitespace-nowrap" data-name="h1">
      <p className="absolute left-[0.5px] text-[#fafafa] top-0" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 500 }}>Turn Your Projects Into</p>
      <p className="absolute bg-clip-text bg-gradient-to-r from-[#1782ff] left-[514px] text-[transparent] to-[#b02bed] top-0" style={{ fontFamily: "'PP Monument Extended', sans-serif", fontWeight: 700, fontStyle: "italic" }}>Passive Income</p>
    </div>
  );
}

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

function Span11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">FOR CREATORS</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[0.5px] px-[17px] py-[9px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Users />
      <Span11 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[121.594px] left-[65px] top-[64px] w-[1216px]" data-name="Container">
      <H />
      <Container55 />
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="relative size-full" data-name="Main Content">
      <Container />
      <Group />
      <Container25 />
      <Container54 />
    </div>
  );
}