import React from "react";
import Skills from "../components/Skills";
import { about, aboutSkills } from "../data/data";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import me from "../images/aboutpage_picture.jpeg";
import { Picture, Aside, TextLeft, TextRight } from "../styles/AboutStyle";

const About = () => {
    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                <Heading>About me</Heading>

                <Context>
                    <Aside>
                        <Picture src={me} />
                    </Aside>
                    <Aside>
                        <TextRight>
                        {about.map((a) => (<p>{a}</p>))} 
                        </TextRight>
                    </Aside>
                </Context>

                <Context>
                    <h2>Experiance & Skills</h2>
                    <Aside>
                        <TextLeft>
                        {aboutSkills.map((a) => (<p>{a}</p>))}
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