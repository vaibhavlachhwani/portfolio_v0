export default function DarkThemeComponentAlt({ child }) {
  return (
    <>
      <div className="w-full aspect-[4.5/1] bg-[url('src/assets/waveTop2.png')] bg-no-repeat bg-cover bg-top"></div>

      <div data-theme="night">{child}</div>

      <div className="w-full aspect-[4.5/1] bg-[url('src/assets/waveBottom.svg')] bg-no-repeat bg-cover bg-bottom"></div>
    </>
  );
}
