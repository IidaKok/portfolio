import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'

//Menu component
const Menu = ({handleNavToggle}) => {

    //Menu component's style
    const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px) {
        width: 60%;
    }
    background-color: rgba(255,255,255,.95);
    z-index: 99;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

    //Link component's style
    const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    
    &:hover {
        transition: .2s all ease-in-out;
        color: orangered;
    }
    `;

    //CloseToggle button's style
    const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    left: 4%;
    background: red;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
    `;

    //returns responsive menu
    return (
        <StyledMenu>
            <StyledLink className="animate__animated animate__fadeInLeft"  to="/portfolio">Home</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/about">About</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/projects">Projects</StyledLink>
            <StyledLink className="animate__animated animate__fadeInLeft" to="/contact">Contact</StyledLink>
            <CloseToggle onClick={handleNavToggle} />
        </StyledMenu>
    );
}
export default Menu