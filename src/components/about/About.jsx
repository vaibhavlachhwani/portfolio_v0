import { SectionTitle } from "../SectionTitle";
import AboutTextSection from "./AboutTextSection";
import AboutPictureSection from "./AboutPictureSection";

export default function About() {
  return (
    <>
      <div>
        <SectionTitle text={"About Me"} />
      </div>

      <div className="grid w-full place-items-center bg-cover bg-center bg-base-100">
        <div className="col-start-1 row-start-1 isolate flex max-w-[80rem] items-center lg:items-start justify-center gap-8 p-24 flex-col lg:flex-row-reverse">
          <AboutPictureSection />
          <AboutTextSection />
        </div>
      </div>
    </>
  );
}
