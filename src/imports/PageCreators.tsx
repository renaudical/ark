import svgPaths from "./svg-1e80jg1cg7";
import imgPageCreators from "figma:asset/9b478e5f6ba079c38260e0c0741c390d801d32a3.png";
import imgImg from "figma:asset/b59ab5659068b5b7ab256c09d87caa52c8867002.png";
import imgImageWithFallback from "figma:asset/a10e15b1dcbf1941f0f7713ebc2f4c2a586689e0.png";
import imgImageWithFallback1 from "figma:asset/9b0eed1a7b50879d74907ee46a13ea640adb4592.png";

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
    <div className="relative shrink-0" data-name="Logo_Tagline">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13px] items-center relative">
        <Logo />
        <Tagline />
      </div>
    </div>
  );
}

function NavProjects() {
  return (
    <div className="relative shrink-0" data-name="Nav/Projects">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[0.7px] whitespace-nowrap">PROJECTS</p>
      </div>
    </div>
  );
}

function NavExplore() {
  return (
    <div className="relative shrink-0" data-name="Nav/Explore">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[0.7px] whitespace-nowrap">EXPLORE</p>
      </div>
    </div>
  );
}

function NavCreators() {
  return (
    <div className="relative shrink-0" data-name="Nav/Creators">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[0.7px] whitespace-nowrap">CREATORS</p>
      </div>
    </div>
  );
}

function NavAbout() {
  return (
    <div className="relative shrink-0" data-name="Nav/About">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#fafafa] text-[14px] tracking-[0.7px] whitespace-nowrap">ABOUT</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <NavProjects />
        <NavExplore />
        <NavCreators />
        <NavAbout />
      </div>
    </div>
  );
}

function Search1() {
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

function Search() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Search">
      <Search1 />
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

function ColorMode() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[36px]" data-name="Color Mode">
      <Moon />
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

function Profile() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Profile">
      <User />
    </div>
  );
}

function UploadProject() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Upload Project" style={{ backgroundImage: "linear-gradient(11.4966deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%), linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%)" }}>
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">CREATE A PROJECT</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0" data-name="Settings">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Search />
        <ColorMode />
        <Profile />
        <UploadProject />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <LogoTagline />
      <Navigation />
      <Settings />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.4)] content-stretch flex flex-col h-[64px] items-start left-0 px-[64px] top-0 w-[1440px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-b-4 border-solid inset-[0_0_-4px_0] pointer-events-none" />
      <Container />
    </div>
  );
}

function H() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+0.5px)] top-[60px]" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Meet Our Top Contributors</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.peea5580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">FEATURED CREATORS</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] px-[17px] py-[9px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Span />
    </div>
  );
}

function Headline() {
  return (
    <div className="h-[108px] relative shrink-0 w-[1312px]" data-name="Headline">
      <H />
      <Container1 />
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
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

function Span1() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame1() {
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
        <Frame1 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
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

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge />
      <Badge1 />
      <Badge2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
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

function Frame3() {
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

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container2 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function CardOpen() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] shrink-0 w-[410px]" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
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

function Container10() {
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
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
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame4() {
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
        <Frame4 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span3 />
      <Span4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H3 />
        <Container12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge3 />
      <Badge4 />
      <Badge5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p29aa1400} fill="var(--fill-0, #1782FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame6 />
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px" />;
}

function Frame9() {
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

function Container16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(161,161,161,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[264px]">Autonomous Delivery Robot</p>
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px" />;
}

function Frame11() {
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

function Container17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['PP_Monument',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white w-[264px]">Custom 3D Printed Drone Frame</p>
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container9 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function CardClosed() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] shrink-0 w-[410px]" data-name="Card/Closed">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
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
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
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
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame12() {
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
        <Frame12 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H4 />
        <Container21 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge6 />
      <Badge7 />
      <Badge8 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame14() {
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
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container18 />
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function CardOpen1() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] shrink-0 w-[410px]" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
    </div>
  );
}

function Heart3() {
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

function Span7() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart3 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame15() {
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

function Span8() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame15 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span7 />
      <Span8 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H5 />
        <Container28 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge9 />
      <Badge10 />
      <Badge11 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame17() {
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

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container25 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function CardOpen2() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[4px] shrink-0 w-[410px]" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
      </div>
    </div>
  );
}

function H6() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
    </div>
  );
}

function Heart4() {
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

function Span9() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart4 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame18() {
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

function Span10() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame18 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span9 />
      <Span10 />
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H6 />
        <Container35 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Badge12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge13() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge14() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge12 />
      <Badge13 />
      <Badge14 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame20() {
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

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container32 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function CardOpen3() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] shrink-0 w-[410px]" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#262626] relative rounded-[16777200px] shadow-[0px_0px_0px_2px_rgba(23,130,255,0.2)] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
      </div>
    </div>
  );
}

function H7() {
  return (
    <div className="h-[27px] overflow-clip relative shrink-0 w-full" data-name="h3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fafafa] text-[21px] top-[13px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Sarah Myles</p>
      </div>
    </div>
  );
}

function Heart5() {
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

function Span11() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Heart5 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">12,847</p>
      </div>
    </div>
  );
}

function Frame21() {
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

function Span12() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center relative">
        <Frame21 />
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[-0.12px] whitespace-nowrap">124</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[24px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Span11 />
      <Span12 />
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start justify-center relative w-full">
        <H7 />
        <Container42 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[16px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[66px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Robotics</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge16() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[84px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">3D Printing</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge17() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[60px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[8.5px] py-[2.5px] relative rounded-[inherit] w-full">
        <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[13.333px] not-italic relative shrink-0 text-[#1782ff] text-[10px] whitespace-nowrap">Arduino</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1782ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Badge15 />
      <Badge16 />
      <Badge17 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['PP_Monument',sans-serif] leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[0px] tracking-[0.28px] w-[342px]">
        <span className="font-['PP_Monument',sans-serif] leading-[20px] text-[14px]">{`I design practical 3D models that people can actually print and use. Most of my projects are small tools, desk gadgets, and mechanical parts that are easy... `}</span>
        <span className="font-['PP_Monument_Extended',sans-serif] leading-[20px] text-[12px] text-white tracking-[0.24px]">+MORE</span>
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame23() {
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

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">RECENT PROJECTS (3)</p>
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative shrink-0 w-[410px]" data-name="div">
      <Container39 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function CardOpen4() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative rounded-[8px] shrink-0 w-[410px]" data-name="Card/Open">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-[1312px]">
      <CardOpen />
      <CardClosed />
      <CardOpen1 />
      <CardOpen2 />
      <CardOpen3 />
      <CardOpen4 />
    </div>
  );
}

function Creators() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[24px] items-start justify-center left-1/2 top-[718px]" data-name="Creators">
      <Headline />
      <Frame5 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[64px] top-[calc(50%-0.19px)]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Frame 4">
          <circle cx="32" cy="32" fill="var(--fill-0, #1782FF)" id="Ellipse 1" r="32" />
          <path d={svgPaths.p26a4e500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[318.375px] left-0 overflow-clip top-0 w-[566px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
      <Frame24 />
    </div>
  );
}

function Container48() {
  return <div className="absolute h-[318.375px] left-0 top-0 w-[566px]" data-name="Container" />;
}

function P() {
  return (
    <div className="content-stretch flex items-center py-px relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-white">{`"I was struggling to make $200/month on YouTube with 85K subscribers. Within 3 months on ARK, I'm consistently earning over $1,500 from just 8 detailed projects."`}</p>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="p">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">— SARAH MYLES, 3D PRINTING</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col gap-[4px] items-start left-[12px] p-[12px] top-[213.38px] w-[542px]" data-name="Container">
      <P />
      <P1 />
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#262626] h-[318px] left-1/2 overflow-clip top-[calc(50%+0.41px)] w-[566px]" data-name="Container">
      <ImageWithFallback6 />
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

function Div6() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] h-[336.375px] relative shrink-0 w-full" data-name="div">
      <div aria-hidden="true" className="absolute border border-[#0a0a0a] border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Container50 />
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Video() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Video">
      <Div6 />
    </div>
  );
}

function P2() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[28px] left-0 not-italic text-[#bebec8] text-[18px] top-[0.5px] tracking-[0.36px] w-[555px]">{`YouTube is amazing for reach and virality, but it's not built for monetization or community. ARK gives makers what they actually need: revenue, detailed documentation, and meaningful connections.`}</p>
    </div>
  );
}

function Span13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span13 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Direct monetization from every project</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">Pay-what-you-want pricing means makers contribute based on value</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.953px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Span14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span14 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Comprehensive documentation support</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">Share detailed guides, CAD files, code, and step-by-step instructions</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.961px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Span15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span15 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">{`Engaged maker community with Q&A`}</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">Build relationships through discussions and direct support</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[383.539px]" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Span16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.336px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono',monospace] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#1782ff] content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Container">
      <Span16 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Integrates with your YouTube videos</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">Embed videos and drive traffic from both platforms</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[337.148px]" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container60 />
      <Container65 />
      <Container70 />
    </div>
  );
}

function Div7() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <Container54 />
      </div>
    </div>
  );
}

function BodyCopy() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Body Copy">
      <P2 />
      <Div7 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[388px] left-0 top-[132px] w-[1216px]" data-name="Container">
      <Video />
      <BodyCopy />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center leading-[0] left-0 not-italic text-[40px] top-[60px] tracking-[-0.5px] whitespace-nowrap" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center relative shrink-0 text-[#fafafa]">
        <p className="leading-[normal]">Turn Your Projects Into</p>
      </div>
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['PP_Monument_Extended',sans-serif] from-[#1782ff] justify-center relative shrink-0 text-[transparent] to-[#b02bed]">
        <p className="leading-[normal]">Passive Income</p>
      </div>
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

function Span17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">FOR CREATORS</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[0.5px] px-[17px] py-[9px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Users />
      <Span17 />
    </div>
  );
}

function Headline1() {
  return (
    <div className="-translate-x-1/2 absolute h-[108px] left-1/2 top-0 w-[1312px]" data-name="Headline">
      <H1 />
      <Container75 />
    </div>
  );
}

function HeadlineSection() {
  return (
    <div className="absolute h-[526px] left-[64px] top-[128px] w-[1312px]" data-name="Headline Section">
      <Container46 />
      <Headline1 />
    </div>
  );
}

function H8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[32px] tracking-[-0.5px] whitespace-nowrap" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center relative shrink-0 text-[#fafafa]">
        <p className="leading-[normal]">Ready to Start Your</p>
      </div>
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['PP_Monument_Extended',sans-serif] from-[#1782ff] justify-center relative shrink-0 text-[transparent] to-[#b02bed]">
        <p className="leading-[normal]">Creator Journey?</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p27640900} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function UploadProject1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Upload Project" style={{ backgroundImage: "linear-gradient(7.24957deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%), linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%)" }}>
      <Frame25 />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">CREATE YOUR FIRST PROJECT</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(10,10,10,0.4)] content-stretch flex flex-col gap-[16px] items-center left-1/2 px-[64px] py-[24px] top-[1644px] w-[1312px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-4 border-[#1782ff] border-solid inset-[-4px] pointer-events-none" />
      <H8 />
      <p className="font-['PP_Monument',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#bebec8] text-[18px] text-center tracking-[0.36px] w-[555px]">Join hundreds of makers who are turning their passion projects into sustainable income. Start sharing your knowledge today.</p>
      <UploadProject1 />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start overflow-clip relative shrink-0 w-[60px]" data-name="Logo">
      <Img1 />
    </div>
  );
}

function Tagline1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-center leading-[18px] not-italic relative shrink-0 text-[14px] tracking-[0.7px] whitespace-nowrap" data-name="Tagline">
      <p className="font-['PP_Monument',sans-serif] relative shrink-0 text-[#bebec8]">{`YOUR `}</p>
      <p className="font-['PP_Monument_Extended',sans-serif] relative shrink-0 text-[#1782ff]">STEM</p>
      <p className="font-['PP_Monument',sans-serif] relative shrink-0 text-[#bebec8]">COMMUNITY</p>
    </div>
  );
}

function LogoTagline1() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-[320px]" data-name="Logo_Tagline">
      <Logo1 />
      <Tagline1 />
    </div>
  );
}

function P3() {
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

function Container78() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <A />
      <A1 />
      <A2 />
      <A3 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <LogoTagline1 />
      <P3 />
      <Container78 />
    </div>
  );
}

function H9() {
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

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H9 />
      <Ul />
    </div>
  );
}

function H10() {
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

function Container80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H10 />
      <Ul1 />
    </div>
  );
}

function H11() {
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

function Container81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <H11 />
      <Ul2 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[64px] h-[174px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container79 />
      <Container80 />
      <Container81 />
    </div>
  );
}

function Container84() {
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

function Container85() {
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

function Container83() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-start pt-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container83 />
    </div>
  );
}

function Div8() {
  return (
    <div className="h-[353px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container76 />
        <Container82 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[354px] items-start left-1/2 pt-px px-[32px] top-[1918px] w-[1440px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-solid border-t-4 inset-[-4px_0_0_0] pointer-events-none" />
      <Div8 />
    </div>
  );
}

export default function PageCreators() {
  return (
    <div className="relative size-full" data-name="Page/Creators">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPageCreators} />
      <Header />
      <Creators />
      <HeadlineSection />
      <Header1 />
      <Footer />
    </div>
  );
}