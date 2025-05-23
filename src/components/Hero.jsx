import hero_img from "../assets/vaibhav_lachhwani.png";

export default function Hero() {
  return (
    <>
      <div className="du-hero bg-base-200 pt-2 min-h-100vh">
        <div className="du-hero-content flex-col lg:flex-row space-x-5">
          <img src={hero_img} className="max-w-md rounded-full" />
          <div className="max-w-2xl">
            <div className="font-bold space-y-2">
              <h1 className="text-5xl">Vaibhav Lachhwani</h1>

              <h1 className="text-9xl">
                <span className="text-secondary">2×</span>hackathon
              </h1>
              <h1 className="text-9xl">winner_</h1>
            </div>

            <p className="py-6 my-16 leading-loose">
              I'm a Full-Stack Developer based in India, currently pursuing my
              B.Tech in Computer Science and Engineering at IIIT Kota.
              Passionate about building scalable, real-world web apps that solve
              meaningful problems.
            </p>
            <button className="du-btn du-btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
