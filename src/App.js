import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


//components
import { Menu, Toggle } from './components/Menu';
import Footer from "./components/Footer";



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
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
