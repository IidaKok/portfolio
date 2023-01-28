import React from "react";
import Skills from "../components/Skills";
import { about } from "../data/data";
import { Heading, StyledAbout, StyledDiv } from "../styles/AboutStyle"

const About = () => {
    return (
        <StyledAbout>
            <Heading>Who am I?</Heading>
            <StyledDiv>
                <span>{about}</span>
            </StyledDiv>


            <Heading>Skills</Heading>
            <Skills />

        </StyledAbout>
    );
}

export default About