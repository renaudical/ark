export default function Frame() {
  return (
    <div className="bg-white border-[#a1a1a1] border-b border-solid border-t relative size-full">
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-8.5px)] not-italic text-[#a1a1a1] text-[14px] top-1/2 whitespace-nowrap">
        <p className="leading-[normal]">OR</p>
      </div>
    </div>
  );
}