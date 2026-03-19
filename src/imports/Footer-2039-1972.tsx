import svgPaths from "./svg-wu635jipzk";
import imgImg from "figma:asset/b59ab5659068b5b7ab256c09d87caa52c8867002.png";

function Img() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start overflow-clip relative shrink-0 w-[60px]" data-name="Logo">
      <Img />
    </div>
  );
}

function Tagline() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] tracking-[0.7px] whitespace-nowrap" data-name="Tagline">
      <p className="font-['PP_Monument',sans-serif] relative shrink-0 text-[#bebec8]">{`YOUR `}</p>
      <p className="font-['PP_Monument_Extended',sans-serif] relative shrink-0 text-[#1782ff]">STEM</p>
      <p className="font-['PP_Monument',sans-serif] relative shrink-0 text-[#bebec8]">COMMUNITY</p>
    </div>
  );
}

function LogoTagline() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-[320px]" data-name="Logo_Tagline">
      <Logo />
      <Tagline />
    </div>
  );
}

function P() {
  return (
    <div className="h-[63px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 w-[273px]">Empowering makers and creators in the STEM community.</p>
    </div>
  );
}

function Twitter() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Twitter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Twitter">
          <path d={svgPaths.p36786300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function A() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Twitter />
      </div>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Github">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Github">
          <path d={svgPaths.pe485a00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28ae6680} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function A1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Github />
      </div>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Youtube">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Youtube">
          <path d={svgPaths.p2d614500} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3657f7c0} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function A2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Youtube />
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Mail">
          <path d={svgPaths.p17070980} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p120c8200} id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function A3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Mail />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <A />
      <A1 />
      <A2 />
      <A3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <LogoTagline />
      <P />
      <Container2 />
    </div>
  );
}

function H() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] tracking-[0.7px] whitespace-nowrap">EXPLORE</p>
    </div>
  );
}

function Li() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">3D Printing</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Robotics</p>
    </div>
  );
}

function Li2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Raspberry Pi</p>
    </div>
  );
}

function Li3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Coding</p>
    </div>
  );
}

function Li4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Electronics</p>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[137px] items-start relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H />
      <Ul />
    </div>
  );
}

function H1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] tracking-[0.7px] whitespace-nowrap">COMMUNITY</p>
    </div>
  );
}

function Li5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Top Creators</p>
    </div>
  );
}

function Li6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Forums</p>
    </div>
  );
}

function Li7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Events</p>
    </div>
  );
}

function Li8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Guidelines</p>
    </div>
  );
}

function Li9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Help Center</p>
    </div>
  );
}

function Ul1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[137px] items-start relative shrink-0 w-full" data-name="ul">
      <Li5 />
      <Li6 />
      <Li7 />
      <Li8 />
      <Li9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H1 />
      <Ul1 />
    </div>
  );
}

function H2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="h4">
      <p className="absolute font-['IBM_Plex_Mono:Bold',sans-serif] leading-[normal] left-0 not-italic text-[#fafafa] text-[14px] top-[-1px] tracking-[0.7px] whitespace-nowrap">COMPANY</p>
    </div>
  );
}

function Li10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">About Us</p>
    </div>
  );
}

function Li11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Careers</p>
    </div>
  );
}

function Li12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Blog</p>
    </div>
  );
}

function Li13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Press Kit</p>
    </div>
  );
}

function Li14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="li">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[21px] left-0 not-italic text-[#bebec8] text-[14px] top-0 tracking-[0.28px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function Ul2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[137px] items-start relative shrink-0 w-full" data-name="ul">
      <Li10 />
      <Li11 />
      <Li12 />
      <Li13 />
      <Li14 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <H2 />
      <Ul2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[64px] h-[174px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[324px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">© 2026 ARK PLATFORM. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </div>
  );
}

function A4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[50.406px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">PRIVACY</p>
      </div>
    </div>
  );
}

function A5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[36px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">TERMS</p>
      </div>
    </div>
  );
}

function A6() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">COOKIES</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[184.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <A4 />
        <A5 />
        <A6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-start pt-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[353px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container />
        <Container6 />
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-start pt-px px-[32px] relative size-full" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-solid border-t-4 inset-[-4px_0_0_0] pointer-events-none" />
      <Div />
    </div>
  );
}