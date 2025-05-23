import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="du-navbar mx-auto du-rounded-box bg-base-100 max-w-screen-lg sticky top-0 z-50">
      {/* Change this */}
      {/* logo */}
      <div className="flex-1">
        <a href="https://www.google.com">
          <img src={logo} alt="logo" className="inline aspect-auto h-10" />
        </a>
      </div>

      <div className="flex-none">
        <ul className="du-menu du-menu-horizontal px-1">
          <li>
            <a>About Me</a>
          </li>
          <li>
            <a>My Skills</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
