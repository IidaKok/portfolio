import React, { useState } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { menuItems } from "../data/data";

//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

//styles
import { StyledLink, StyledMenu, StyledToggle } from "../styles/MenuStyle";
import "../styles/MenuTransition.css";

const Menu = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            {/*This shows on big screen*/}
            <StyledMenu>
                {menuItems.map((link) => (<StyledLink to={link.to}><p>{link.text}</p></StyledLink>))}
            </StyledMenu>

            {/*This shows on small screen*/}
            <div className={cx("sidebar", { "sidebar-closed": !open })}>
                <StyledToggle onClick={() => setOpen(!open)} />
                <ul>
                    {menuItems.map((link) => (<StyledLink to={link.to} onClick={() => setOpen(!open)}>
                        <CSSTransition
                            in={open}
                            timeout={200}
                            classNames={"fade"}
                            unmountOnExit
                        >
                            <p>{link.text}</p>
                        </CSSTransition>
                    </StyledLink>))}
                </ul>
            </div>
        </div>
    )
}
const Routing = () => {
    return (
        <div>
            <Router>
                <Menu />
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

export { Menu, Routing }
