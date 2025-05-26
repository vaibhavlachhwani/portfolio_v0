import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import DarkThemeComponent from "./components/dark/DarkThemeComponent";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkThemeComponentAlt from "./components/dark/DarkThemeComponentAlt";
import NavbarMobile from "./components/navbar/NavbarMobile";
import HeroMobile from "./components/hero/HeroMobile";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <>
      <div className="bg-base-200">
        <Navbar />
        <NavbarMobile />
        <FadeInSection children={<Hero />} />
        <FadeInSection children={<HeroMobile />} />
        <DarkThemeComponent child={<FadeInSection children={<About />} />} />
        <FadeInSection children={<Skills />} />
        <DarkThemeComponentAlt
          child={<FadeInSection children={<Projects />} />}
        />
        <FadeInSection children={<Contact />} />
        <Footer />
      </div>
    </>
  );
}

export default App;
