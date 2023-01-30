import React from "react";
import { CloseToggle, StyledLink, StyledMenu, StyledToggle } from "./ComponentStyle";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

import { useState } from "react";

const Menu = ({ handleNavToggle }) => {

    return (
            <StyledMenu>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/" onClick={handleNavToggle}>Home</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/about" onClick={handleNavToggle}>About</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/projects" onClick={handleNavToggle}>Projects</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/contact" onClick={handleNavToggle}>Contact</StyledLink>
                <CloseToggle onClick={handleNavToggle} />
            </StyledMenu>
    )
}
const Toggle = ({ handleNavToggle }) => {

    return (
        <StyledToggle onClick={handleNavToggle} />
    )
}
const Routing = () => {

    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }
    return (
        <div>
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
        </div>
    );
}

export { Menu, Toggle, Routing }