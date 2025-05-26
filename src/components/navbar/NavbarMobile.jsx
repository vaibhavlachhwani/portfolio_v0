import logo from "../../assets/images/logo/logo.svg";

export default function NavbarMobile() {
  return (
    <div className="du-navbar lg:hidden bg-base-100 shadow-md sticky top-0 z-10">
      <div className="du-navbar-start">
        <a href="#hero">
          <img src={logo} alt="logo" className="inline aspect-auto h-10" />
        </a>
      </div>
      <div className="du-navbar-end">
        <div className="du-dropdown du-dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="du-btn du-btn-ghost du-btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform -scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="du-menu du-menu-md du-dropdown-content bg-base-100 rounded-b-box z-50 mt-3 w-40 p-2 shadow"
          >
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
            <li>
              <a
                href="https://drive.google.com/file/d/1LRtWpYt2kJBiIuRdZkckUxyyjkw58OmQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
