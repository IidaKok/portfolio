import React from "react";
import { CloseToggle, StyledLink, StyledMenu, StyledToggle } from "./ComponentStyle";
import { BigscreenMenu, List, Item } from "./ComponentStyle";

import { FaHome, FaComment, FaList } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

const Menu = ({ handleNavToggle }) => {

    return (
        <>
            <StyledMenu>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/" onClick={handleNavToggle}>Home</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/about" onClick={handleNavToggle}>About</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/projects" onClick={handleNavToggle}>Projects</StyledLink>
                <StyledLink className="animate__animated animate__fadeInLeft" to="/contact" onClick={handleNavToggle}>Contact</StyledLink>
                <CloseToggle onClick={handleNavToggle} />
            </StyledMenu>
        </>
    )

}
const BigMenu = () => {
    <BigscreenMenu>
        <List>
            <Item href="/portfolio"><FaHome /></Item>
            <Item href="/portfolio/about"><SiAboutdotme /></Item>
            <Item href="/portfolio/projects"><FaList /></Item>
            <Item href="/portfolio/contact"><FaComment /></Item>
        </List>
    </BigscreenMenu>
}

const Toggle = ({ handleNavToggle }) => {

    return (

        <StyledToggle onClick={handleNavToggle} />

    )
}


/*<BigscreenMenu>
            <List>
                <Item to="/portfolio"><button>Home</button></Item>
                <Item to="/portfolio/about">About</Item>
                <Item to="/portfolio/projects">Projects</Item>
                <Item to="/portfolio/contact">Contact</Item>
            </List>
        </BigscreenMenu>*/

export { Menu, Toggle, BigMenu }