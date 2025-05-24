import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DarkThemeComponent from "./components/DarkThemeComponent";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div className="bg-base-200">
        <Navbar />
        <Hero />
        <DarkThemeComponent child={<About />}></DarkThemeComponent>
        <Skills />
        <DarkThemeComponent />
      </div>
    </>
  );
}

export default App;
