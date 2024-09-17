import "./App.css";
import { Menu } from "./components/Menu";
import AboutMe from "./components/AboutMe.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
