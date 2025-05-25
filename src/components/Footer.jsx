import logo from "../assets/images/logo/logo-light.svg";


export default function Footer() {
  return (
    <>
      <div className="w-full aspect-[4.5/1] bg-[url('src/assets/waveFooter.svg')] bg-no-repeat bg-cover bg-top"></div>

      <div data-theme="night">
        <footer className="du-footer mx-auto max-w-screen-lg du-footer-horizontal du-footer-center bg-base-100 text-base-content p-10">
          <aside>
            <img src={logo} className="size-24" alt="Vaibhav Lachhwani Logo" />
            <p className="font-bold">
              Vaibhav Lachhwani
              <br />
              📍Bhopal, India
            </p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a>
                
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}
