import waveTop from "../../assets/images/wave_dividers/waveTop.svg";
import waveBottom from "../../assets/images/wave_dividers/waveBottom.svg";

import SectionDivider from "./SectionDivider";

export default function DarkThemeComponent({ child }) {
  return (
    <>
      <SectionDivider pos={"top"} wave={waveTop} />

      <div data-theme="night" className="">
        {child}
      </div>

      <SectionDivider pos={"bottom"} wave={waveBottom} />
    </>
  );
}
