import svgPaths from "./svg-8m96wr4kfe";
import imgImageWithFallback from "figma:asset/c99994a69d82104bba280382998f9193363d9c7c.png";
import imgImageWithFallback1 from "figma:asset/0697f318de347c41fb87741595cbf3cafaee8711.png";

function Text() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] right-[24px] top-1/2 w-[68px]" data-name="Text">
      <p className="-translate-x-full absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[10px] text-[rgba(255,255,255,0.75)] text-right top-0 whitespace-nowrap">10 Hours Ago</p>
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

function Text2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(0,188,125,0.1)] content-stretch flex items-center justify-center left-[181px] px-[8px] py-[4px] rounded-[2px] top-[calc(50%+0.5px)]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00bc7d] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">v3.0</p>
    </div>
  );
}

function NewProjectCard() {
  return (
    <div className="h-[44px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="NewProjectCard" style={{ backgroundImage: "linear-gradient(28.3488deg, rgb(37, 141, 64) 0.2349%, rgb(52, 168, 83) 100.23%)" }}>
      <Text />
      <Text1 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] left-[56px] not-italic text-[11.2px] text-white top-[calc(50%-9px)] tracking-[0.56px] whitespace-nowrap">PROJECT UPDATED</p>
      <Container />
      <Text2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[100px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[100px] relative rounded-[2px] shrink-0 w-[140px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">INTERMEDIATE</p>
    </div>
  );
}

function IconBase1() {
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

function Text4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <IconBase1 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">182</p>
    </div>
  );
}

function IconBase2() {
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

function Text5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <IconBase2 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">47</p>
    </div>
  );
}

function IconBase3() {
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

function Text6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <IconBase3 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">34 Backers</p>
    </div>
  );
}

function IconBase4() {
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

function Text7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <IconBase4 />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[11.2px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">1,203 Views</p>
    </div>
  );
}

function Spacer() {
  return <div className="flex-[1_0_0] h-[17px] min-h-px min-w-px" data-name="Spacer" />;
}

function CategoryBadge() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[2px] shrink-0" data-name="CategoryBadge">
      <div aria-hidden="true" className="absolute border border-[rgba(176,43,237,0.4)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b02bed] text-[10px] tracking-[0.5px] whitespace-nowrap">3D PRINTING</p>
    </div>
  );
}

function EngagementBar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[605px]" data-name="EngagementBar">
      <Text3 />
      <Text4 />
      <Text5 />
      <Text6 />
      <Text7 />
      <Spacer />
      <CategoryBadge />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Heading 3">
      <p className="font-['PP_Monument_Normal:Black',sans-serif] leading-[26.4px] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">6-DOF Robot Arm with Computer Vision</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['PP_Monument_Normal:Regular',sans-serif] leading-[22.4px] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(255,255,255,0.7)]">Build a fully articulated 6-degree-of-freedom robot arm with integrated camera and OpenCV object tracking. Includes 3D printed parts, Arduino control, and Python vision pipeline.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <EngagementBar />
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function UpdatedProjectCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="UpdatedProjectCard">
      <div className="content-stretch flex gap-[16px] items-start px-[24px] relative w-full">
        <Link />
        <Container1 />
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="col-1 ml-0 mt-0 relative rounded-[16777200px] row-1 size-[28px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Link1() {
  return (
    <div className="col-1 h-[24px] ml-[40px] mt-[2px] relative row-1 w-[80px]" data-name="Link">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-[2px] whitespace-nowrap">Marcus Wong</p>
    </div>
  );
}

function Text8() {
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
      <Link1 />
      <Text8 />
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

function IconBase5() {
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
        <IconBase5 />
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[42px] not-italic text-[12px] text-[rgba(255,255,255,0.5)] text-center top-[6px] whitespace-nowrap">{` SAVE`}</p>
      </div>
    </div>
  );
}

function IconBase6() {
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
        <IconBase6 />
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] left-[46px] not-italic text-[12px] text-[rgba(255,255,255,0.5)] text-center top-[6px] whitespace-nowrap">{` SHARE`}</p>
      </div>
    </div>
  );
}

function FeedCardActions() {
  return (
    <div className="h-[41px] relative shrink-0 w-full" data-name="FeedCardActions">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pt-px px-[24px] relative size-full">
          <Frame />
          <Button />
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

export default function Update() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[2px] size-full" data-name="Update">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[24px] relative rounded-[inherit] size-full">
        <NewProjectCard />
        <UpdatedProjectCard />
        <FeedCardActions />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}