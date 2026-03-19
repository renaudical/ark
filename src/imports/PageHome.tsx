import svgPaths from "./svg-eyw8om6eyq";
import imgPageHome from "figma:asset/9b478e5f6ba079c38260e0c0741c390d801d32a3.png";
import imgImg from "figma:asset/b59ab5659068b5b7ab256c09d87caa52c8867002.png";
import imgImageWithFallback from "figma:asset/74f68d527dd37906c056e35b59d22a6c5aba4b6c.png";

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
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">FEATURED PROJECTS</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Span />
    </div>
  );
}

function A() {
  return <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px" data-name="a" />;
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRight">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCreate() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button/Create">
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">EXPLORE ALL PROJECTS</p>
      <ArrowRight />
    </div>
  );
}

function H() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Trending Projects</p>
      </div>
      <A />
      <ButtonCreate />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Headline">
      <Container1 />
      <H />
    </div>
  );
}

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

function Span1() {
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

function Span2() {
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

function Span3() {
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
      <Span1 />
      <Span2 />
      <Span3 />
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

function Container2() {
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
      <Container2 />
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

function MotionDiv() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div />
        <Div1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback1 />
      <Badge1 />
    </div>
  );
}

function Span4() {
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

function Star1() {
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

function Span5() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star1 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare1() {
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

function Span6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare1 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span4 />
      <Span5 />
      <Span6 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData1 />
      <Title1 />
      <Description1 />
      <Creator1 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div2 />
        <Div3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div4() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback2 />
      <Badge2 />
    </div>
  );
}

function Span7() {
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

function Star2() {
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

function Span8() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star2 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare2() {
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

function Span9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare2 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span7 />
      <Span8 />
      <Span9 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData2 />
      <Title2 />
      <Description2 />
      <Creator2 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div4 />
        <Div5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div6() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback3 />
      <Badge3 />
    </div>
  );
}

function Span10() {
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

function Star3() {
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

function Span11() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star3 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare3() {
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

function Span12() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare3 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span10 />
      <Span11 />
      <Span12 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData3 />
      <Title3 />
      <Description3 />
      <Creator3 />
    </div>
  );
}

function MotionDiv3() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div6 />
        <Div7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div8() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback4 />
      <Badge4 />
    </div>
  );
}

function Span13() {
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

function Star4() {
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

function Span14() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star4 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare4() {
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

function Span15() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare4 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span13 />
      <Span14 />
      <Span15 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData4 />
      <Title4 />
      <Description4 />
      <Creator4 />
    </div>
  );
}

function MotionDiv4() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div8 />
        <Div9 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div10() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback5 />
      <Badge5 />
    </div>
  );
}

function Span16() {
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

function Star5() {
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

function Span17() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star5 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare5() {
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

function Span18() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare5 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span16 />
      <Span17 />
      <Span18 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData5 />
      <Title5 />
      <Description5 />
      <Creator5 />
    </div>
  );
}

function MotionDiv5() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div10 />
        <Div11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback6 />
      <Badge6 />
    </div>
  );
}

function Span19() {
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

function Star6() {
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

function Span20() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star6 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare6() {
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

function Span21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare6 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span19 />
      <Span20 />
      <Span21 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Div13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData6 />
      <Title6 />
      <Description6 />
      <Creator6 />
    </div>
  );
}

function MotionDiv6() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div12 />
        <Div13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="absolute h-[192px] left-0 top-0 w-[298px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[212px] overflow-clip px-[8px] py-[2px] rounded-[8px] top-[13.5px] w-[64px]" data-name="Badge" style={{ backgroundImage: "linear-gradient(74.0035deg, rgb(23, 130, 255) 0.15313%, rgb(176, 43, 237) 100.12%)" }}>
      <div className="flex flex-col font-['IBM_Plex_Mono:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <p className="leading-[normal]">ROBOTICS</p>
      </div>
    </div>
  );
}

function Div14() {
  return (
    <div className="bg-[#ececf0] h-[192px] overflow-clip relative shrink-0 w-full" data-name="div">
      <ImageWithFallback7 />
      <Badge7 />
    </div>
  );
}

function Span22() {
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

function Star7() {
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

function Span23() {
  return (
    <div className="relative shrink-0" data-name="span">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pr-[8px] relative">
        <Star7 />
        <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#bebec8] text-[12px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">4.9</p>
        </div>
      </div>
    </div>
  );
}

function MessageSquare7() {
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

function Span24() {
  return (
    <div className="h-[18px] relative shrink-0 w-[37.602px]" data-name="span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MessageSquare7 />
        <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[16px] not-italic text-[#bebec8] text-[12px] top-[8px] tracking-[0.24px] whitespace-nowrap">
          <p className="leading-[normal]">234</p>
        </div>
      </div>
    </div>
  );
}

function MetaData7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[18px] items-center relative shrink-0 w-full" data-name="META DATA">
      <Span22 />
      <Span23 />
      <Span24 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="TITLE">
      <p className="font-['PP_Monument_Extended',sans-serif] leading-[24px] not-italic relative shrink-0 text-[21px] text-white w-[252px]">Autonomous Robot Arm</p>
    </div>
  );
}

function Description7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="DESCRIPTION">
      <p className="flex-[1_0_0] font-['PP_Monument',sans-serif] leading-[1.25] min-h-px min-w-px not-italic relative text-[#bebec8] text-[16px] tracking-[0.32px]">6-axis precision robot arm with computer vision and object detection</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.24px] whitespace-nowrap">BY DR. SARAH CHEN</p>
    </div>
  );
}

function Creator7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="CREATOR">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Div15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative shrink-0 w-[298px]" data-name="div">
      <MetaData7 />
      <Title7 />
      <Description7 />
      <Creator7 />
    </div>
  );
}

function MotionDiv7() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative shrink-0 w-[298px]" data-name="motion.div">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Div14 />
        <Div15 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none shadow-[0px_0px_16px_16px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-start flex flex-wrap gap-[40px] items-start relative shrink-0 w-[1312px]">
      <MotionDiv />
      <MotionDiv1 />
      <MotionDiv2 />
      <MotionDiv3 />
      <MotionDiv4 />
      <MotionDiv5 />
      <MotionDiv6 />
      <MotionDiv7 />
    </div>
  );
}

function Creators() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col gap-[24px] items-start justify-center left-1/2 p-[64px] top-[726px] w-[1440px]" data-name="Creators">
      <Headline />
      <Frame2 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center leading-[0] left-0 not-italic text-[40px] top-[76px] tracking-[-0.5px] whitespace-nowrap" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center relative shrink-0 text-[#fafafa]">
        <p className="leading-[normal]">Share. Learn.</p>
      </div>
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['PP_Monument_Extended',sans-serif] from-[#1782ff] justify-center relative shrink-0 text-[transparent] to-[#b02bed]">
        <p className="leading-[normal]">Create.</p>
      </div>
    </div>
  );
}

function Lightning() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Span25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] whitespace-nowrap">
        <span className="font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[18px] text-[#1782ff]">MISSION:</span>
        <span className="leading-[18px]">{` DEMOCRATIZE STEM KNOWLEDGE`}</span>
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center left-[0.5px] px-[17px] py-[9px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1782ff] border-solid inset-0 pointer-events-none" />
      <Lightning />
      <Span25 />
    </div>
  );
}

function Headline1() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Headline">
      <H1 />
      <Container10 />
    </div>
  );
}

function Container12() {
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

function Div17() {
  return (
    <div className="h-[58px] relative shrink-0 w-[536px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container12 />
      <MotionSpan />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">1247</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">PROJECTS</p>
    </div>
  );
}

function ContainerOne() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container/One">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">8794</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">MAKERS</p>
    </div>
  );
}

function ContainerTwo() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container/Two">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">11365</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">CONVERSATIONS</p>
    </div>
  );
}

function ContainerFour() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container/Four">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['IBM_Plex_Mono:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#fafafa] text-[32px] tracking-[1.6px] whitespace-nowrap">493</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] left-0 not-italic text-[#bebec8] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">CREATORS</p>
    </div>
  );
}

function ContainerThree() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container/Three">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Div18() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[172px] pl-[26px] relative shrink-0 w-[536px]" data-name="div">
      <ContainerOne />
      <ContainerTwo />
      <ContainerFour />
      <ContainerThree />
    </div>
  );
}

function MotionDiv9() {
  return <div className="opacity-83 rounded-[16777200px] shrink-0 size-[12px]" data-name="motion.div" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }} />;
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <MotionDiv9 />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1782ff] text-[12px] tracking-[0.6px] whitespace-nowrap">LIVE: 342 CREATORS ONLINE</p>
    </div>
  );
}

function Div19() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pt-[16px] relative shrink-0 w-[536px]" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

function MotionDiv8() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.4)] content-stretch flex flex-col gap-[24px] items-start left-0 p-[24px] top-0 w-[624px]" data-name="motion.div">
      <Div17 />
      <Div18 />
      <Div19 />
    </div>
  );
}

function Container22() {
  return <div className="absolute border-[#1782ff] border-l-2 border-solid border-t-2 left-[-7px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container23() {
  return <div className="absolute border-[#b02bed] border-r-2 border-solid border-t-2 right-[-8px] size-[16px] top-[-7px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute border-[#1782ff] border-b-2 border-l-2 border-solid bottom-[-8px] left-[-7px] size-[16px]" data-name="Container" />;
}

function Container25() {
  return <div className="absolute border-[#b02bed] border-b-2 border-r-2 border-solid bottom-[-8px] right-[-8px] size-[16px]" data-name="Container" />;
}

function Div16() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] flex-[1_0_0] h-[360px] min-h-px min-w-px relative" data-name="div">
      <MotionDiv8 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Video() {
  return (
    <div className="col-2 content-stretch flex h-[386px] items-start justify-center justify-self-stretch relative row-1 shrink-0" data-name="Video">
      <Div16 />
    </div>
  );
}

function BodyCopy1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-px relative shrink-0 w-full" data-name="Body Copy">
      <p className="font-['PP_Monument',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#bebec8] text-[18px] tracking-[0.36px] w-full">{`A community platform where STEM creators earn by sharing detailed project documentation, while makers get free access to comprehensive guides, shopping lists, and expert Q&A.`}</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Detailed Instructions</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">{`Step-by-step guides that YouTube can't provide`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.953px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Lightning1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleLightning() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Circle/Lightning" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }}>
      <Lightning1 />
    </div>
  );
}

function BulletOne() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Bullet/One">
      <Container27 />
      <CircleLightning />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">Complete Shopping Lists</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">{`Every component, tool, and material you'll need`}</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[456.961px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Lightning2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleLightning1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Circle/Lightning" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }}>
      <Lightning2 />
    </div>
  );
}

function BulletTwo() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Bullet/Two">
      <Container30 />
      <CircleLightning1 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument_Extended',sans-serif] leading-[24px] left-0 not-italic text-[#fafafa] text-[16px] top-[-1px] whitespace-nowrap">{`Community Q&A`}</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['PP_Monument',sans-serif] leading-[20px] left-0 not-italic text-[#bebec8] text-[16px] top-[0.5px] tracking-[0.32px] whitespace-nowrap">Ask questions directly to creators and fellow makers</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[36px] top-0 w-[383.539px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Lightning3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Lightning">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Lightning">
          <path d={svgPaths.p39a61880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CircleLightning2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 pr-[0.008px] rounded-[16777200px] size-[24px] top-[2px]" data-name="Circle/Lightning" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%)" }}>
      <Lightning3 />
    </div>
  );
}

function BulletThree() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Bullet/Three">
      <Container33 />
      <CircleLightning2 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BulletOne />
      <BulletTwo />
      <BulletThree />
    </div>
  );
}

function Bulletpoint() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] relative shrink-0 w-full" data-name="Bulletpoint">
      <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
        <Container26 />
      </div>
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRight">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonFind() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button/Find" style={{ backgroundImage: "linear-gradient(11.1292deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%), linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%)" }}>
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">FIND A PROJECT</p>
      <ArrowRight1 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRight">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRight">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCreate1() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center justify-center px-[17px] py-[9px] relative rounded-[4px] shrink-0" data-name="Button/Create">
      <div aria-hidden="true" className="absolute border border-[rgba(190,190,200,0.25)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">START CREATING</p>
      <ArrowRight2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Buttons">
      <ButtonFind />
      <ButtonCreate1 />
    </div>
  );
}

function BodyCopy() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Body Copy">
      <BodyCopy1 />
      <Bulletpoint />
      <Buttons />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[64px] gap-y-[48px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Video />
      <BodyCopy />
    </div>
  );
}

function HeadlineSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[64px] top-[128px] w-[1312px]" data-name="Headline Section">
      <Headline1 />
      <Container11 />
    </div>
  );
}

function H2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[0] not-italic relative shrink-0 text-[32px] tracking-[-0.5px] uppercase whitespace-nowrap" data-name="h1">
      <div className="flex flex-col font-['PP_Monument_Extended',sans-serif] justify-center relative shrink-0 text-[#fafafa]">
        <p className="leading-[normal]">READY TO START YOUR</p>
      </div>
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['PP_Monument_Extended',sans-serif] from-[#1782ff] justify-center relative shrink-0 text-[transparent] to-[#b02bed]">
        <p className="leading-[normal]">CREATOR JOURNEY?</p>
      </div>
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.7px] whitespace-nowrap">CREATE YOUR FIRST PROJECT</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(10,10,10,0.4)] content-stretch flex flex-col gap-[16px] items-center left-1/2 px-[64px] py-[24px] top-[1812px] w-[1312px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-4 border-[#1782ff] border-solid inset-[-4px] pointer-events-none" />
      <H2 />
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

function A1() {
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

function A2() {
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

function A3() {
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

function A4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="a">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Mail />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <A1 />
      <A2 />
      <A3 />
      <A4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-full items-start relative shrink-0 w-[320px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <LogoTagline1 />
      <P />
      <Container38 />
    </div>
  );
}

function H3() {
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

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H3 />
      <Ul />
    </div>
  );
}

function H4() {
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

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-r border-solid inset-0 pointer-events-none" />
      <H4 />
      <Ul1 />
    </div>
  );
}

function H5() {
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

function Container41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <H5 />
      <Ul2 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[64px] h-[174px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[18px] relative shrink-0 w-[324px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">© 2026 ARK PLATFORM. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </div>
  );
}

function A5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[50.406px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">PRIVACY</p>
      </div>
    </div>
  );
}

function A6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[36px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">TERMS</p>
      </div>
    </div>
  );
}

function A7() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#a1a1a1] text-[12px] top-0 tracking-[0.6px] whitespace-nowrap">COOKIES</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18px] relative shrink-0 w-[184.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <A5 />
        <A6 />
        <A7 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-[51px] items-start pt-[33px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(190,190,200,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function Div20() {
  return (
    <div className="h-[353px] relative shrink-0 w-full" data-name="div">
      <div className="content-stretch flex flex-col gap-[32px] items-start pt-[48px] px-[32px] relative size-full">
        <Container36 />
        <Container42 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col h-[354px] items-start left-1/2 pt-px px-[32px] top-[2086px] w-[1440px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#1782ff] border-solid border-t-4 inset-[-4px_0_0_0] pointer-events-none" />
      <Div20 />
    </div>
  );
}

export default function PageHome() {
  return (
    <div className="relative size-full" data-name="Page/Home">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPageHome} />
      <Header />
      <Creators />
      <HeadlineSection />
      <Header1 />
      <Footer />
    </div>
  );
}