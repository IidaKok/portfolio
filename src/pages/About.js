import React from "react";
import Skills from "../components/Skills";
import { about } from "../data/data";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import me from "../images/Me.jpg";
import { Picture, Aside } from "../styles/AboutStyle";

const About = () => {
    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
            <Heading>Who am I?</Heading>
            
                <Context>
                    <Aside>
                        <Picture src={me} />
                    </Aside>
                    <Aside>
                        {about}
                    </Aside>
                </Context>
                
                <Context>
                    <Aside>
                    <h1>Skills</h1>
                    <p>n tempus neque.Pellentesque quis vulputate est. Duis non aliquet enim. Morbi vel molestie risus, 
                        euismod blandit nibh. Vivamus molestie sem arcu, nec hendrerit quam lobortis eu. Etiam placerat cursus e
                        nim in sagittis. Etiam eget turpis non mi mattis fermentum. Nulla facil</p>
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