import svgPaths from "./svg-sn64k4dn22";

function Group3() {
  return (
    <div className="absolute h-[18px] left-[71px] top-[48px] w-[91px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 18">
        <g id="Group 8099">
          <path d={svgPaths.pc2bac80} fill="var(--fill-0, #777799)" id="Vector" />
          <path d={svgPaths.p3b060fc0} fill="var(--fill-0, #777799)" id="Vector_2" />
          <g id="Group 8009">
            <path d={svgPaths.p11181700} fill="var(--fill-0, #777799)" id="Vector_3" />
            <path d={svgPaths.pbd62700} fill="var(--fill-0, #777799)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[46px] top-[48px]">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] left-[117.5px] not-italic text-[14px] text-black text-center top-[90px] whitespace-nowrap">{`Drag & Drop File`}</p>
      <div className="-translate-x-1/2 absolute font-['PP_Monument_Normal:Regular',sans-serif] h-[24px] leading-[normal] left-[117px] not-italic text-[#a1a1a1] text-[10px] text-center top-[124px] w-[142px]">
        <p className="mb-0">.mp4, .wmv, .mov</p>
        <p>{`(max file size 200mb) `}</p>
      </div>
      <Group3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[46px] top-[48px]">
      <Group1 />
      <div className="-translate-x-1/2 absolute h-[100px] left-[calc(50%-140px)] top-[48px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 100">
            <path d="M0.5 0V100" id="Vector 98" stroke="var(--stroke-0, #A1A1A1)" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[100px] left-[calc(50%+50px)] top-[48px] w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 100">
            <path d="M0.5 0V100" id="Vector 98" stroke="var(--stroke-0, #A1A1A1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-center left-[275px] px-[12px] rounded-[2px] top-[82px]" data-name="Button" style={{ backgroundImage: "linear-gradient(16.2202deg, rgb(23, 130, 255) 0%, rgb(176, 43, 237) 100%), linear-gradient(90deg, rgb(250, 250, 250) 0%, rgb(250, 250, 250) 100%)" }}>
      <p className="font-['IBM_Plex_Mono:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap">UPLOAD FILE</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[9.54%_9.4%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.9997 21.0392">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p158fe4f0} fill="var(--fill-0, #1B1741)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2c34bb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p2d7d2200} fill="var(--fill-0, #1B1741)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p382be680} fill="var(--fill-0, #1B1741)" fillRule="evenodd" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="absolute h-[26px] left-[529px] overflow-clip top-[61px] w-[117px]" data-name="youtube-6">
      <Group />
    </div>
  );
}

function AddPreviouslyUploadedVideo() {
  return (
    <div className="absolute contents left-[465px] top-[103px]" data-name="Add Previously Uploaded Video">
      <div className="absolute bg-white border-[#779] border-[0.5px] border-solid h-[32px] left-[465px] rounded-[2px] top-[103px] w-[245px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] h-[32px] justify-center leading-[0] left-[473px] not-italic text-[#779] text-[14px] top-[119px] w-[237px]">
        <p className="leading-[normal]">YouTube URL</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[465px] top-[61px]">
      <Youtube />
      <AddPreviouslyUploadedVideo />
    </div>
  );
}

function UploadVideo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Upload Video">
      <div className="absolute bg-[#fafafc] border border-[#779] border-dashed h-[196px] left-0 rounded-[2px] top-0 w-[750px]" />
      <Group2 />
      <Button />
      <Group4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white border-[#a1a1a1] border-b border-solid border-t h-[22px] left-[416px] top-[86px] w-[17px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-8.5px)] not-italic text-[#a1a1a1] text-[14px] top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">OR</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white border-[#a1a1a1] border-b border-solid border-t h-[22px] left-[227px] top-[86px] w-[17px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-8.5px)] not-italic text-[#a1a1a1] text-[14px] top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">OR</p>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <UploadVideo />
      <Frame />
      <Frame1 />
    </div>
  );
}