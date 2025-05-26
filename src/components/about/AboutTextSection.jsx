import FadeInSection from "../FadeInSection";

export default function AboutTextSection() {
  return (
    <div className="max-w-2xl">
      <FadeInSection
        children={
          <h1 className="text-xl text-left font-bold text-secondary">
            Hey! 👋 I'm Vaibhav
          </h1>
        }
      />
      <div className="text-justify lg:text-justify text-md">
        <FadeInSection
          children={
            <p className="pt-6">
              I’m a Full Stack Developer currently pursuing my B.Tech in
              Computer Science and Engineering at IIIT Kota (Class of ’27). My
              fascination with technology began in middle school, where I found
              myself endlessly tinkering with my family computer; constantly
              driven by a desire to understand how things work and the thrill of
              making something new.
            </p>
          }
        />

        <FadeInSection
          children={
            <p className="pt-6">
              Today, I’m passionate about building scalable, real-world
              applications that genuinely help people. I love the challenge of
              breaking down complex problems into smaller, more approachable
              pieces and seeing those solutions come together into systems that
              are both functional and impactful.
            </p>
          }
        />

        <FadeInSection
          children={
            <p className="pt-6">
              Collaboration fuels my work. I thrive in environments where ideas
              are exchanged freely, and where working with others sparks
              innovation and creativity. Whether in hackathons, team projects,
              or solo ventures, I’m driven by the excitement of seeing tangible
              results and knowing that my work has real impact.
            </p>
          }
        />

        <FadeInSection
          children={
            <p className="pt-6">
              I’m especially drawn to the fascinating logic behind modern
              backend systems and the challenge of designing solutions that
              scale and adapt. At the same time, I find it deeply rewarding to
              craft user experiences that make complex technology accessible and
              meaningful. I’m always learning, exploring cutting-edge fields
              like AI/ML and big data to expand my toolkit and stay ahead of the
              curve.
            </p>
          }
        />

        <FadeInSection
          children={
            <p className="pt-6">
              Outside of development, I’m an avid motorsports enthusiast,
              captivated by the precision and engineering brilliance of Formula
              1. That same pursuit of speed and excellence is something I carry
              into my work as a developer, constantly iterating, refining, and
              pushing myself to go further.
            </p>
          }
        />

        <FadeInSection
          children={
            <p className="pt-6">
              I’m currently looking for opportunities; internships, projects, or
              collaborations; where I can continue to grow as an engineer, work
              with inspiring people, and keep building things that matter. If
              you’re working on something exciting or just want to chat about
              code, startups, or the future of tech, I’d love to connect!
            </p>
          }
        />
      </div>
    </div>
  );
}
