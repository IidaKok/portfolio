import React from "react";
import Skills from "../components/Skills";
import { about } from "../data/data";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import me from "../images/Me.jpg";
import { Picture, Aside, TextLeft, TextRight } from "../styles/AboutStyle";

const About = () => {
    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                <Heading>Who am I</Heading>

                <Context>
                    <Aside>
                        <Picture src={me} />
                    </Aside>
                    <Aside>
                        <TextRight>
                            {about}
                        </TextRight>
                    </Aside>
                </Context>

                <Context>
                    <h2>Skills</h2>
                    <Aside>
                        <TextLeft>
                            {about}
                        </TextLeft>
                    </Aside>
                    <Aside>
                        <Skills />
                    </Aside>
                </Context>

            </StyledDiv>
        </StyledPage>

    );
}
export default About