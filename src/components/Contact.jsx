import FadeInSection from "./FadeInSection";
import { SectionTitle } from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="pt-20">
      <div className="du-hero bg-base-200">
        <div className="du-hero-content text-center">
          <div className="max-w-lg">
            <SectionTitle text={"Let's Connect!"} />

            <FadeInSection
              children={
                <div>
                  <p className="text-justify py-6">
                    Have something in mind? Whether it’s a challenging project,
                    a collaboration opportunity, or a casual chat about
                    technology and innovation, I’m always up for connecting.
                    Let’s bring ideas to life and make an impact together!
                  </p>
                  <a
                    href="mailto:vaibhav.lachhwani111@gmail.com"
                    className="du-btn du-btn-wide du-btn-outline du-btn-primary"
                  >
                    Say Hello! 👋
                  </a>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
