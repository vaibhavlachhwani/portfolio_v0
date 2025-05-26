import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/navbar/Navbar";
import DarkThemeComponent from "./components/DarkThemeComponent";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DarkThemeComponentAlt from "./components/DarkThemeComponentAlt";
import NavbarMobile from "./components/navbar/NavbarMobile";

function App() {
  return (
    <>
      <div className="bg-base-200">
        <Navbar />
        <NavbarMobile />
        <Hero />
        <DarkThemeComponent child={<About />} />
        <Skills />
        <DarkThemeComponentAlt child={<Projects />} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
