import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="du-navbar mx-auto rounded-full bg-base-100/60 max-w-screen-lg sticky top-2 z-50 backdrop-blur-sm">
      {/* Change this */}
      {/* logo */}
      <div className="flex-1">
        <a href="#hero">
          <img src={logo} alt="logo" className="inline aspect-auto h-10" />
        </a>
      </div>

      <div className="flex-none">
        <ul className="du-menu du-menu-horizontal px-1">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Tech Stack</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
