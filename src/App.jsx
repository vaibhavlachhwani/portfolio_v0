import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import DarkThemeComponent from "./components/DarkThemeComponent";

function App() {
  return (
    <>
      <div className="bg-base-200">
        <Navbar />
        <Hero />
        <DarkThemeComponent child={<Hero></Hero>}></DarkThemeComponent>
      </div>
    </>
  );
}

export default App;
