import hero_img from "../../assets/images/vaibhav_lachhwani/vaibhav_lachhwani.png";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <>
      <section id="hero" className="h-160 hidden lg:block pt-20">
        <div className="du-hero bg-base-200">
          <div className="du-hero-content flex-col lg:flex-row space-x-5">
            <img src={hero_img} alt="Vaibhav Lachhwani" className="max-w-md rounded-full" />
            <div className="max-w-2xl">
              <div className="font-bold space-y-2">
                <h1 className="text-4xl">Vaibhav Lachhwani</h1>

                <div className="min-h-50">
                  <h1 className="text-8xl">
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
                Passionate about building scalable, real-world web apps that
                solve meaningful problems.
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
                <a
                  href="#contact"
                  className="du-btn du-btn-ghost du-btn-outline"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
