import hero_img from "../assets/vaibhav_lachhwani.png";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <>
      <div className="du-hero bg-base-200 pt-2">
        <div className="du-hero-content flex-col lg:flex-row space-x-5">
          <img src={hero_img} className="max-w-md rounded-full" />
          <div className="max-w-2xl">
            <div className="font-bold space-y-2">
              <h1 className="text-5xl">Vaibhav Lachhwani</h1>

              <div className="min-h-64">
                <h1 className="text-9xl">
                  <ReactTyped
                    strings={[
                      "fullstack developer",
                      "<span class='text-secondary'>2×</span>hackathon winner",
                      // "backend developer",
                      // "java developer",
                      "tech enthusiast",
                      "problem solver",
                    ]}
                    typeSpeed={90}
                    loop
                    backSpeed={20}
                    cursorChar="_"
                    showCursor={true}
                  />
                </h1>
              </div>
            </div>

            <p className="py-2 my-1 leading-loose">
              I'm a Full Stack Developer based in India, currently pursuing my
              B.Tech in Computer Science and Engineering at IIIT Kota.
              Passionate about building scalable, real-world web apps that solve
              meaningful problems.
            </p>
            <div className="flex flex-row space-x-8">
              <a
                href="https://drive.google.com/file/d/1LRtWpYt2kJBiIuRdZkckUxyyjkw58OmQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="du-btn du-btn-primary"
              >
                My Resume
              </a>
              <a href="#contact" className="du-btn du-btn-ghost du-btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
