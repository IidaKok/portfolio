import React from "react";
import {CloseToggle, StyledLink, StyledMenu} from "./ComponentStyle"

const Menu = ({handleNavToggle}) => {

    return (
        <StyledMenu>
            <StyledLink className="animate__animated animate__fadeInLeft"  to="/portfolio">Home</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/portfolio/about">About</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/portfolio/projects">Projects</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/portfolio/contact">Contact</StyledLink>
            <CloseToggle onClick={handleNavToggle} />
        </StyledMenu>
    );
}

export default Menu