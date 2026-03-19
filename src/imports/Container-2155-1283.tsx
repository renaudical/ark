import svgPaths from "./svg-vybjsky46p";

function IconBase() {
  return (
    <div className="relative shrink-0 size-[21.979px]" data-name="IconBase">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9787 21.9785">
        <g id="IconBase">
          <path d={svgPaths.pe6ce400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(45deg, rgb(23, 130, 255) 0%, rgb(23, 130, 255) 49.841%, rgb(176, 43, 237) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10.989px] relative size-full">
        <IconBase />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="bg-clip-text font-['IBM_Plex_Mono:SemiBold',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-[transparent] tracking-[0.56px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%), linear-gradient(6.59674deg, rgb(23, 130, 255) 0%, rgb(23, 130, 255) 49.841%, rgb(176, 43, 237) 100%)" }}>
        COMMUNITY MILESTONE
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['PP_Monument_Normal:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-white w-[695px]">The ARK community just passed 10,000 published projects! Thank you to every creator and maker who has contributed to making STEM knowledge accessible.</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] whitespace-nowrap">8 hours ago</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Text />
        <Paragraph />
        <Text1 />
      </div>
    </div>
  );
}

function MilestoneCard() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="MilestoneCard">
      <Container1 />
      <Container2 />
    </div>
  );
}

function MilestoneCard1() {
  return <div className="absolute bg-gradient-to-r from-[#1782ff] h-[2px] left-px to-[#b02bed] top-px via-1/4 via-[#1782ff] w-[798px]" data-name="MilestoneCard" />;
}

export default function Container() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[2px] size-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <MilestoneCard />
        <MilestoneCard1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}