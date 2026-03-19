import svgPaths from "./svg-izd3jdc146";
import imgImageWithFallback from "figma:asset/9b0eed1a7b50879d74907ee46a13ea640adb4592.png";

function Frame() {
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

function ImageWithFallback() {
  return (
    <div className="absolute h-[318.375px] left-0 overflow-clip top-0 w-[566px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <Frame />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[318.375px] left-0 top-0 w-[566px]" data-name="Container" />;
}

function P() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['PP_Monument',sans-serif] italic leading-[20px] left-0 text-[14px] text-white top-[0.5px] w-[484px]">{`"I was struggling to make $200/month on YouTube with 85K subscribers. Within 3 months on ARK, I'm consistently earning over $1,500 from just 8 detailed projects."`}</p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[15px] left-0 not-italic text-[10px] text-[rgba(255,255,255,0.8)] top-0 whitespace-nowrap">— SARAH MYLES, 3D PRINTING</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.6)] content-stretch flex flex-col gap-[4px] h-[103px] items-start left-[12px] pt-[12px] px-[12px] top-[203.38px] w-[542px]" data-name="Container">
      <P />
      <P1 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#262626] h-[318.375px] left-1/2 overflow-clip top-[calc(50%+0.41px)] w-[566px]" data-name="Container">
      <ImageWithFallback />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return <div className="absolute border-[#1782ff] border-l-2 border-solid border-t-2 left-[-8px] size-[16px] top-[-8px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute border-[#b02bed] border-r-2 border-solid border-t-2 left-[574px] size-[16px] top-[-8px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute border-[#1782ff] border-b-2 border-l-2 border-solid left-[-8px] size-[16px] top-[326.38px]" data-name="Container" />;
}

function Container6() {
  return <div className="absolute border-[#b02bed] border-b-2 border-r-2 border-solid left-[574px] size-[16px] top-[326.38px]" data-name="Container" />;
}

export default function Div() {
  return (
    <div className="bg-[rgba(10,10,10,0.4)] border border-[#262626] border-solid relative size-full" data-name="div">
      <Container />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}