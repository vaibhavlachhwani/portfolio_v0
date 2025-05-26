import { ReactTyped } from "react-typed";

export default function HeroMobile() {
  return (
    <>
      <section id="hero" className="pt-5 block lg:hidden">
        <div className="du-hero bg-base-200">
          <div className="du-hero-content flex-col">
            <div className="max-w-md pt-2">
              <div className="font-bold space-y-2">
                <h1 className="text-3xl">Vaibhav Lachhwani</h1>

                <div className="min-h-24">
                  <h1 className="text-5xl">
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

              <p className="text-justify my-6 leading-loose">
                I'm a Full Stack Developer based in India, currently pursuing my
                B.Tech in Computer Science and Engineering at IIIT Kota.
                Passionate about building scalable, real-world web apps that
                solve meaningful problems.
              </p>
              <div className="flex flex-col space-y-3">
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
