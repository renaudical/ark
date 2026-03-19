import svgPaths from "./svg-czl5q2v7s5";
import imgImg from "figma:asset/b59ab5659068b5b7ab256c09d87caa52c8867002.png";

function Div1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex h-[18px] items-center left-[72.5px] top-[calc(50%+9px)] w-[130.414px]" data-name="div">
      <p className="font-['PP_Monument',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a1a1a1] text-[12px] whitespace-nowrap">COMMUNITY</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] h-[18px] items-center leading-[18px] left-[72.5px] not-italic text-[12px] top-[calc(50%-9px)] w-[130.414px] whitespace-nowrap" data-name="div">
      <p className="font-['PP_Monument',sans-serif] relative shrink-0 text-[#a1a1a1]">{`YOUR `}</p>
      <p className="font-['PP_Monument_Extended',sans-serif] relative shrink-0 text-[#1782ff]">STEM</p>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col h-[40px] items-start left-0 overflow-clip top-0 w-[60px]" data-name="Logo">
      <Img />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[40px] relative shrink-0 w-[202.414px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Div1 />
        <Div2 />
        <Logo />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[67.203px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] whitespace-nowrap">PROJECTS</p>
      </div>
    </div>
  );
}

function A() {
  return (
    <div className="h-[21px] relative shrink-0 w-[58.805px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] whitespace-nowrap">EXPLORE</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] whitespace-nowrap">CREATORS</p>
      </div>
    </div>
  );
}

function A1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[42px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] whitespace-nowrap">ABOUT</p>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="h-[21px] relative shrink-0 w-[307.211px]" data-name="HEADER/Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link1 />
        <A />
        <Link2 />
        <A1 />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[8px] size-[36px] top-0" data-name="Button">
      <Search />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="User">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="User">
          <path d={svgPaths.p399eca00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pc93b400} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[88px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <User />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center justify-center left-[132px] px-[16px] py-[8px] rounded-[4px] top-0 w-[149.602px]" data-name="Button" style={{ backgroundImage: "linear-gradient(13.5304deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%), linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%)" }}>
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">UPLOAD PROJECT</p>
    </div>
  );
}

function Moon() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Moon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <path d={svgPaths.p1dccb100} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute left-[44px] rounded-[8px] size-[36px] top-0" data-name="Button">
      <Moon />
    </div>
  );
}

function HeaderRightStuff() {
  return (
    <div className="h-[36px] relative shrink-0 w-[281.602px]" data-name="HEADER/Right Stuff">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="div">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.008px] relative size-full">
          <Link />
          <HeaderNavigation />
          <HeaderRightStuff />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] content-stretch flex flex-col items-start pb-px px-[64.5px] relative size-full" data-name="header">
      <div aria-hidden="true" className="absolute border-[#262626] border-b border-solid inset-0 pointer-events-none" />
      <Div />
    </div>
  );
}