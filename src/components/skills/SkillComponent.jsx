export default function SkillComponent({ skills }) {
  return (
    <>
      <div className="flex flex-row flex-wrap space-x-12 items-center justify-center min-h-30 gap-4">
        {skills.map((item, index) => (
          <div
            key={index}
            className="size-24 flex flex-col items-center justify-center"
          >
            <img
              src={item.icon}
              alt={item.name + " icon"}
              className="size-12"
            />
            <p className="mt-1 text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
