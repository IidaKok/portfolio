import React from "react";
import Skills from "../components/Skills";
import { about } from "../data/data";
import { StyledPage, Heading, StyledDiv } from "../styles/Common";
import me from "../images/Me.jpg";
import { Picture, Aside, Wrapper } from "../styles/AboutStyle";

const About = () => {
    return (
        <StyledPage>
            <Heading>Who am I?</Heading>
            <StyledDiv>
                <Wrapper>
                    <Aside>
                        <Picture src={me} />
                    </Aside>
                    <Aside>
                        {about}
                    </Aside>
                </Wrapper>
            </StyledDiv>
            <StyledDiv>
                <h1>Skills</h1>
                <Skills />
            </StyledDiv>
        </StyledPage>

    );
}
export default About