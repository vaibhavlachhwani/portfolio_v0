import wave from "../assets/images/wave_dividers/waveFooter.svg";

import logo from "../assets/images/logo/logo-light.svg";
import linkedin from "../assets/images/social/icon-linkedin.svg";
import github from "../assets/images/social/icon-github.svg";
import school from "../assets/images/social/icon-school.svg";
import instagram from "../assets/images/social/icon-instagram.svg";

import SectionDivider from "./dark/SectionDivider";

export default function Footer() {
  return (
    <>
      <SectionDivider pos={"top"} wave={wave} />

      <div data-theme="night">
        <footer className="du-footer mx-auto max-w-screen-lg du-footer-horizontal du-footer-center bg-base-100 text-base-content p-10">
          <aside>
            <img src={logo} className="size-24" alt="Vaibhav Lachhwani Logo" />
            <p className="font-bold">
              Vaibhav Lachhwani
              <br />
              📍Bhopal, India
            </p>
            <p>
              Made with ❤️ using{" "}
              <a className="underline" href="https://react.dev/">
                React
              </a>
              ,{" "}
              <a className="underline" href="https://tailwindcss.com/">
                tailwindcss
              </a>
              , and,{" "}
              <a className="underline" href="https://daisyui.com/">
                daisyUI
              </a>
              .
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a
                href="https://www.linkedin.com/in/vaibhavlachhwani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} className="size-6" alt="" />
              </a>
              <a
                href="https://github.com/vaibhavlachhwani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="size-6" alt="" />
              </a>
              <a
                href="https://iiitkota.ac.in/student/20231011"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={school} className="size-6" alt="" />
              </a>
              <a
                href="https://www.instagram.com/vaibhavlachhwani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} className="size-6" alt="" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}
