function MotionDiv() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[360px] left-px mix-blend-overlay top-0 w-[624px]" data-name="motion.div">
      <div aria-hidden="true" className="absolute border border-[#0d0e24] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[18px] left-[28px] top-0 w-[490px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#1782ff] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">MISSION STATUS</p>
    </div>
  );
}

function MotionSpan() {
  return (
    <div className="absolute h-[32px] left-[28px] top-[26px] w-[115.203px]" data-name="motion.span">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[32px] left-0 not-italic text-[#fafafa] text-[32px] top-0 tracking-[1.6px] whitespace-nowrap">ACTIVE</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[58px] relative shrink-0 w-[536px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container />
      <MotionSpan />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">1247</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">PROJECTS</p>
    </div>
  );
}

function ContainerOne() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container/One">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">8794</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">MAKERS</p>
    </div>
  );
}

function ContainerTwo() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container/Two">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">11365</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">CONVERSATIONS</p>
    </div>
  );
}

function ContainerFour() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container/Four">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">493</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">CREATORS</p>
    </div>
  );
}

function ContainerThree() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container/Three">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Div2() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[172px] pl-[26px] relative shrink-0 w-[536px]" data-name="div">
      <ContainerOne />
      <ContainerTwo />
      <ContainerFour />
      <ContainerThree />
    </div>
  );
}

function MotionDiv2() {
  return <div className="opacity-83 rounded-[16777200px] shrink-0 size-[12px]" data-name="motion.div" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }} />;
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <MotionDiv2 />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">LIVE: 342 CREATORS ONLINE</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[16px] relative shrink-0 w-[536px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 p-[24px] top-0 w-[624px]" data-name="motion.div">
      <Div1 />
      <Div2 />
      <Div3 />
    </div>
  );
}

function Container10() {
  return <div className="absolute border-[#1782ff] border-l-2 border-solid border-t-2 left-[-7px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute border-[#b02bed] border-r-2 border-solid border-t-2 right-[-8px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container12() {
  return <div className="absolute border-[#1782ff] border-b-2 border-l-2 border-solid bottom-[-8px] left-[-7px] size-[16px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute border-[#b02bed] border-b-2 border-r-2 border-solid bottom-[-8px] right-[-8px] size-[16px]" data-name="Container" />;
}

function Div() {
  return (
    <div className="bg-[rgba(10,10,10,0.25)] flex-[1_0_0] h-[360px] min-h-px min-w-px relative" data-name="div">
      <MotionDiv />
      <MotionDiv1 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_48px_64px_0px_white]" />
    </div>
  );
}

export default function Video() {
  return (
    <div className="content-stretch flex items-start justify-center relative size-full" data-name="Video">
      <Div />
    </div>
  );
}