export default function DarkThemeComponent({ child }) {
  return (
    <>
      <div className="w-full aspect-[12/1] bg-[url('src/assets/images/wave_dividers/waveTop.svg')] bg-no-repeat bg-cover bg-top"></div>

      <div data-theme="night" className="">
        {child}
      </div>

      <div className="w-full aspect-[12/1] bg-[url('src/assets/images/wave_dividers/waveBottom.svg')] bg-no-repeat bg-cover bg-bottom"></div>
    </>
  );
}
