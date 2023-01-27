import React from "react";
import styled from 'styled-components';


const About = () => {
    const StyledAboutPage = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`;

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

    return (
        <StyledAboutPage>
            <Heading>Who am I?</Heading>
        </StyledAboutPage>
    );
}

export default About