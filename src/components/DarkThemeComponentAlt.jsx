export default function DarkThemeComponentAlt({ child }) {
  return (
    <>
      <div className="w-full aspect-[4.5/1] bg-[url('src/assets/images/wave_dividers/waveTopAlt.svg')] bg-no-repeat bg-cover bg-top"></div>

      <div data-theme="night">{child}</div>

      <div className="w-full aspect-[4.5/1] bg-[url('src/assets/images/wave_dividers/waveBottomAlt.svg')] bg-no-repeat bg-cover bg-bottom"></div>
    </>
  );
}
