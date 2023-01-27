import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'

const Menu = ({handleNavToggle}) => {
    const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
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

    const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    
    
    `;

    const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
    `;

    
    return (
        <StyledMenu>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <CloseToggle onClick={handleNavToggle} />
        </StyledMenu>
    );
}
export default Menu