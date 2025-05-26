import { SectionTitle } from "../SectionTitle";
import AboutTextSection from "./AboutTextSection";
import AboutPictureSection from "./AboutPictureSection";
import FadeInSection from "../FadeInSection";

export default function About() {
  return (
    <>
      <section id="about" className="pt-20">
        <div>
          <SectionTitle text={"About Me"} />
        </div>

        <div className="grid w-full place-items-center bg-cover bg-center bg-base-100">
          <div className="col-start-1 row-start-1 isolate flex max-w-[80rem] items-center lg:items-start justify-center gap-8 p-8 lg:p-24 flex-col lg:flex-row-reverse">
            <FadeInSection children={<AboutPictureSection />} />
            <FadeInSection children={<AboutTextSection />} />
          </div>
        </div>
      </section>
    </>
  );
}
