import svgPaths from "./svg-x7r8oh0i6l";
import imgImageWithFallback from "figma:asset/fe30f8be0acd33fc4bf24f2f4aa6a3ede914896a.png";
import imgImageWithFallback1 from "figma:asset/6cdf3299968ea7d9299b29aacf59d51e698dc3a9.png";
import imgImageWithFallback2 from "figma:asset/f42b1befae1375b6347f18fd1a82968495276cef.png";

function Text() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] right-[24px] top-1/2 w-[68px]" data-name="Text">
      <p className="-translate-x-full absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[10px] text-[rgba(255,255,255,0.75)] text-right top-0 whitespace-nowrap">March 15 – March 22</p>
    </div>
  );
}

function Text1() {
  return <div className="-translate-y-1/2 absolute h-[14.398px] left-[122.24px] top-[calc(50%+0.2px)] w-[144px]" data-name="Text" />;
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute left-[24px] size-[24px] top-1/2" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2cea0780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NewProjectCard() {
  return (
    <div className="h-[44px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="NewProjectCard" style={{ backgroundImage: "linear-gradient(28.3488deg, rgb(23, 130, 255) 0.2349%, rgb(176, 43, 237) 100.23%)" }}>
      <Text />
      <Text1 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-[56px] not-italic text-[11.2px] text-white top-[calc(50%-9px)] tracking-[0.56px] whitespace-nowrap">OUT OF THIS WROLD PROJECTS</p>
      <Frame />
    </div>
  );
}

function WeeklyRoundupCard() {
  return (
    <div className="h-[23px] relative shrink-0 w-[752px]" data-name="WeeklyRoundupCard">
      <p className="absolute font-['PP_Monument_Extended:Regular',sans-serif] leading-[22.8px] left-0 not-italic text-[16px] text-white top-[-0.5px] uppercase whitespace-nowrap">Top Projects This Week</p>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[247.328px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 size-[245px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function CategoryBadge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(0,187,167,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#00d5be] text-[10px] tracking-[0.5px] whitespace-nowrap">{`IOT & SMART HOME`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['PP_Monument_Normal:Black',sans-serif] leading-[normal] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">Smart Home Hub v4</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container2 />
      <CategoryBadge />
      <Paragraph />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[247.336px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 size-[245px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function CategoryBadge1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(0,184,219,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#00d3f3] text-[10px] tracking-[0.5px] whitespace-nowrap">ELECTRONICS</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['PP_Monument_Normal:Black',sans-serif] leading-[normal] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">Soldering Practice Kit</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[245px]" data-name="Container">
      <Container4 />
      <CategoryBadge1 />
      <Paragraph1 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute left-[0.33px] size-[247.328px] top-[0.2px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[247.336px] overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
      <ImageWithFallback3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[2px] shrink-0 size-[245px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function CategoryBadge2() {
  return (
    <div className="h-[21px] relative rounded-[2px] shrink-0 w-[89.5px]" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(176,43,237,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-[9px] not-italic text-[#b02bed] text-[10px] top-[3px] tracking-[0.5px] whitespace-nowrap">3D PRINTING</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[15.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15.6px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">3D Printed Gear Train</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[245px]" data-name="Container">
      <Container6 />
      <CategoryBadge2 />
      <Paragraph2 />
    </div>
  );
}

function WeeklyRoundupCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="WeeklyRoundupCard">
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap gap-[8px] items-center pb-[24px] px-[24px] relative w-full">
          <Container1 />
          <Container3 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[2px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[inherit] size-full">
        <NewProjectCard />
        <WeeklyRoundupCard />
        <WeeklyRoundupCard1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}