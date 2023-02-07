import React from "react";
import Skills from "../components/Skills";
import { about, aboutSkills } from "../data/data";
import { StyledPage, Heading, StyledDiv, Context, Heading2, Paragraph } from "../styles/Common";
import me from "../images/aboutpage_picture.jpeg";
import { Picture, Aside, TextLeft, TextRight } from "../styles/AboutStyle";
import { MdOpenInNew } from "react-icons/md";

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
                            {about.map((a) => (<Paragraph>{a}</Paragraph>))}
                        </TextRight>
                    </Aside>
                </Context>

                <Context>
                    <Heading2>Experiance & Skills</Heading2>
                    <Aside>
                        <TextLeft>
                            {aboutSkills.map((a) => (<Paragraph>{a}</Paragraph>))}

                        </TextLeft>
                    </Aside>
                    <Aside>
                        <Skills />
                    </Aside>
                </Context>

                <Context>
                    <Heading2>Resume</Heading2>

                    <Paragraph>
                        <a href="https://iidakok.github.io/portfolio/IidaKokkonen_cv.pdf" target="_blank" rel="noreferrer">
                            Open resume <MdOpenInNew />
                        </a>
                    </Paragraph>

                </Context>
            </StyledDiv>
        </StyledPage>

    );
}
export default About