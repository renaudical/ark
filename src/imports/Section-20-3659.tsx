import svgPaths from "./svg-rgcvdz144e";

function Div1() {
  return (
    <div className="absolute border border-[#e4002b] border-solid h-[25px] left-0 top-[1.5px] w-[86px]" data-name="div">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-[12px] not-italic text-[#e4002b] text-[10px] top-[4px]">MOBILE APP</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[28.797px] left-0 top-[42.5px] w-[592px]" data-name="h2">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] font-bold leading-[28.8px] left-0 not-italic text-[#0a0a0a] text-[24px] top-[-0.5px]">Take ARK Anywhere</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute h-[42px] left-0 top-[83.3px] w-[592px]" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#717182] text-[14px] top-0 w-[581px] whitespace-pre-wrap">Access projects in the workshop, follow instructions on the go, and stay connected with the maker community.</p>
    </div>
  );
}

function Playstore() {
  return (
    <div className="absolute h-[24px] left-[7px] top-[7px] w-[21px]" data-name="Playstore">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 24">
        <g id="Playstore">
          <path d={svgPaths.p3e6f9e80} fill="var(--fill-0, #EA4335)" id="path94" />
          <path d={svgPaths.p8018300} fill="var(--fill-0, #FBBC04)" id="path98" />
          <path d={svgPaths.p17386100} fill="var(--fill-0, #4285F4)" id="path102" />
          <path d={svgPaths.p25fa7f00} fill="var(--fill-0, #34A853)" id="path106" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[35px] top-[4px]" data-name="Content">
      <p className="font-['PP_Monument',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[10px] text-black uppercase w-[min-content] whitespace-pre-wrap">GET IT ON</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="h-[15px] relative w-[74px]" data-name="path90">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 15">
              <path d={svgPaths.p3d8e9c00} fill="var(--fill-0, black)" id="path90" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Apple() {
  return (
    <div className="absolute h-[24px] left-[7px] top-[7px] w-[20px]" data-name="Apple">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Apple">
          <path d={svgPaths.p39414c00} fill="var(--fill-0, black)" id="<Path>" />
          <path d={svgPaths.p279a94f0} fill="var(--fill-0, black)" id="<Path>_2" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[35px] not-italic text-black top-1/2 w-[78px] whitespace-pre-wrap" data-name="Content">
      <p className="font-['PP_Monument',sans-serif] leading-[9px] relative shrink-0 text-[9px] w-full">Download on the</p>
      <p className="font-['PP_Monument',sans-serif] leading-none relative shrink-0 text-[18px] tracking-[-0.47px] w-full">App Store</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute h-[48px] left-0 top-[149.3px] w-[592px]" data-name="div">
      <div className="absolute bg-white border border-black border-solid h-[40px] left-[136px] overflow-clip rounded-[6px] top-[4.22px] w-[120px]" data-name="Store download button">
        <Playstore />
        <Content />
      </div>
      <div className="absolute bg-white border border-black border-solid h-[40px] left-0 overflow-clip rounded-[6px] top-[4.22px] w-[120px]" data-name="Store download button">
        <Apple />
        <Content1 />
      </div>
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute h-[197.297px] left-0 top-0 w-[592px]" data-name="motion.div">
      <Div1 />
      <H />
      <P />
      <Div2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Bold','Noto_Sans_Symbols2:Regular',sans-serif] leading-[36px] left-[30.67px] not-italic text-[#0a0a0a] text-[24px] text-center top-[0.5px]">5.0★</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-[30px] not-italic text-[#717182] text-[10px] text-center top-0">APP RATING</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[55px] relative shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[38px] size-[32px] top-[-26.63px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p5325b00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[15px] left-0 top-[28px] w-[108px]" data-name="Container">
      <p className="-translate-x-1/2 absolute bottom-[2.63px] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-[54px] not-italic text-[#717182] text-[10px] text-center translate-y-full">EDUCATION CATEGORY</p>
      <Frame />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[55px] relative shrink-0 w-[108px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[64px] h-[55px] items-center justify-center left-[624px] pl-px top-[71.15px] w-[592px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#717182] border-l border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container4 />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[197.297px] relative shrink-0 w-full" data-name="div">
      <MotionDiv />
      <Container />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[33px] px-[64px] relative size-full" data-name="section">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Div />
    </div>
  );
}