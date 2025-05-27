import waveTop from "../../assets/images/wave_dividers/waveTopAlt.svg";
import waveBottom from "../../assets/images/wave_dividers/waveBottomAlt.svg";

import SectionDivider from "./SectionDivider";

export default function DarkThemeComponentAlt({ child }) {
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
