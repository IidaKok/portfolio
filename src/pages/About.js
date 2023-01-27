import React from "react";
import styled from 'styled-components';

//About page
const About = () => {

    //StyledAbout uses styled div-element 
    const StyledAbout = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`;

    //Heading uses styled h1-element 
    const Heading = styled.h1`
    font-size: clamp(3rem, 5vw, 7vw);
    color: red;
    font-weight: 700;
    margin: 0;
    padding: 0;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`;

    //returns styled about page
    return (
        <StyledAbout>
            <Heading>Who am I?</Heading>
        </StyledAbout>
    );
}

export default About