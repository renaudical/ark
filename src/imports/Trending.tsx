import svgPaths from "./svg-r25tvvstd2";
import imgImageWithFallback from "figma:asset/63c5c740837b5927e8f33c1b735f98e08d652f0d.png";
import imgImageWithFallback1 from "figma:asset/0697f318de347c41fb87741595cbf3cafaee8711.png";

function Text() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] right-[24px] top-1/2 w-[68px]" data-name="Text">
      <p className="-translate-x-full absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[10px] text-[rgba(255,255,255,0.75)] text-right top-0 whitespace-nowrap">201 New Backers This Week</p>
    </div>
  );
}

function Text1() {
  return <div className="-translate-y-1/2 absolute h-[14.398px] left-[122.24px] top-[calc(50%+0.2px)] w-[144px]" data-name="Text" />;
}

function IconBase() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="IconBase">
          <path d={svgPaths.p2ddd9500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[24px] px-[4px] rounded-[16777200px] size-[24px] top-1/2" data-name="Container">
      <IconBase />
    </div>
  );
}

function NewProjectCard() {
  return (
    <div className="h-[44px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="NewProjectCard" style={{ backgroundImage: "linear-gradient(28.4088deg, rgb(212, 117, 9) 0.2349%, rgb(255, 137, 4) 100.23%)" }}>
      <Text />
      <Text1 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-[56px] not-italic text-[11.2px] text-white top-[calc(50%-9px)] tracking-[0.56px] whitespace-nowrap">TRENDING</p>
      <Container />
    </div>
  );
}

function IconBase1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.p1d76c680} fill="var(--fill-0, #FF8904)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15.6px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">723 Follows</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.4)] content-stretch flex gap-[8px] items-center left-[681.59px] px-[9px] py-[5px] rounded-[2px] top-[411.52px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,137,4,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <IconBase1 />
      <Text2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[448.875px] left-0 overflow-clip top-0 w-[798px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <Container1 />
    </div>
  );
}

function CategoryBadge() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(23,130,255,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1782ff] text-[10px] text-center tracking-[0.5px] whitespace-nowrap">
            <p className="leading-[normal]">ROBOTICS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryBadge1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[2px]" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(255,32,86,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative w-full">
          <div className="flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff2056] text-[10px] text-center tracking-[0.5px] whitespace-nowrap">
            <p className="leading-[normal]">ADVANCED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-start left-[12px] top-[12px] w-[130px]" data-name="Container">
      <CategoryBadge />
      <CategoryBadge1 />
    </div>
  );
}

function NewProjectCard1() {
  return (
    <div className="h-[448.875px] overflow-clip relative shrink-0 w-full" data-name="NewProjectCard">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function IconBase2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.pb328900} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <IconBase2 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">{` 182`}</p>
    </div>
  );
}

function IconBase3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.p20f046f0} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <IconBase3 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">{` 47`}</p>
    </div>
  );
}

function IconBase4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.p1acc1000} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <IconBase4 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">{` 34 Backers`}</p>
    </div>
  );
}

function IconBase5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.pced9600} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <IconBase5 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">{` 1,203 Views`}</p>
    </div>
  );
}

function EngagementBar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="EngagementBar">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 3">
      <p className="font-['PP_Monument_Normal:Black',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">6-DOF Robot Arm with Computer Vision</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['PP_Monument_Normal:Regular',sans-serif] leading-[22.4px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] w-[743px]">Build a fully articulated 6-degree-of-freedom robot arm with integrated camera and OpenCV object tracking. Includes 3D printed parts, Arduino control, and Python vision pipeline.</p>
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[24px] shrink-0 w-full" data-name="Paragraph" />;
}

function ImageWithFallback1() {
  return (
    <div className="col-1 ml-0 mt-0 relative rounded-[16777200px] row-1 size-[28px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Link() {
  return (
    <div className="col-1 h-[24px] ml-[40px] mt-[2px] relative row-1 w-[80px]" data-name="Link">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Marcus Wong</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="col-1 h-[16px] ml-[132px] mt-[6px] relative row-1 w-[144px]" data-name="Text">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15.6px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.4)] top-0 whitespace-nowrap">published a new project</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ImageWithFallback1 />
      <Link />
      <Text7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <Group />
      </div>
    </div>
  );
}

function Button() {
  return <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px rounded-[2px]" data-name="Button" />;
}

function IconBase6() {
  return (
    <div className="absolute left-[10px] size-[14px] top-[7px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.pa2fe680} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[28px] relative rounded-[2px] shrink-0 w-[66.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <IconBase6 />
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[42px] not-italic text-[12px] text-[rgba(255,255,255,0.5)] text-center top-[6px] whitespace-nowrap">{` SAVE`}</p>
      </div>
    </div>
  );
}

function IconBase7() {
  return (
    <div className="absolute left-[10px] size-[14px] top-[7px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="IconBase">
          <path d={svgPaths.p303dbb80} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[28px] relative rounded-[2px] shrink-0 w-[74px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <IconBase7 />
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[46px] not-italic text-[12px] text-[rgba(255,255,255,0.5)] text-center top-[6px] whitespace-nowrap">{` SHARE`}</p>
      </div>
    </div>
  );
}

function FeedCardActions() {
  return (
    <div className="content-stretch flex gap-[8px] h-[41px] items-center pt-px relative shrink-0 w-full" data-name="FeedCardActions">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <Frame />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function NewProjectCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="NewProjectCard">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] py-[16px] relative w-full">
        <EngagementBar />
        <Heading />
        <Paragraph />
        <Paragraph1 />
        <FeedCardActions />
      </div>
    </div>
  );
}

export default function Trending() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[2px] size-full" data-name="Trending">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <NewProjectCard />
        <NewProjectCard1 />
        <NewProjectCard2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}