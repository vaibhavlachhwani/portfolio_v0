export default function SectionDivider({ wave, pos }) {
  const pos_class = "object-" + { pos };

  return (
    <img
      src={wave}
      className={`${pos_class} w-full aspect-[12/1] object-cover`}
    />
  );
}
