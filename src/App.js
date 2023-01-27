import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

//components
import Menu from './components/Menu';
import Toggle from './components/Toggle';

//App function routes to right pages and uses styled components
function App() {

  //Holds value of toggled state
  //false state uses Toggle component
  //true state uses Menu component
  const [navToggled, setNavToggled] = useState(false);

  //Changes toggled state
  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <div className="App">
      <Toggle handleNavToggle={handleNavToggle} />
      <Router>
        {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
        <Routes>
                {<Route exact path="/portfolio" element={<Home />} />}
                {<Route path="/about" element={<About />} />}
                {<Route path="/projects" element={<Projects />} />}
                {<Route path="/contact" element={<Contact />} />}
            </Routes>
      </Router>
    </div>
  );
}

export default App;