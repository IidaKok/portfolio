import React from "react";
import {CloseToggle, StyledLink, StyledMenu} from "./ComponentStyle"

const Menu = ({handleNavToggle}) => {

    return (
        <StyledMenu>
            <StyledLink className="animate__animated animate__fadeInLeft"  to="/">Home</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/about">About</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/projects">Projects</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/contact">Contact</StyledLink>
            <CloseToggle onClick={handleNavToggle} />
        </StyledMenu>
    );
}

export default Menu