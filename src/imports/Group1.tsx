import svgPaths from "./svg-tphqrbo392";

function Ark() {
  return (
    <div className="absolute h-[27.552px] left-[8.42px] top-[35.98px] w-[82.75px]" data-name="ARK">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.75 27.552">
        <g id="ARK">
          <path d={svgPaths.p3fdf6980} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p380a8a80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p24f46500} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#e4002b] left-0 size-[100px] top-0" />
      <Ark />
    </div>
  );
}