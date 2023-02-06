import React from "react";
import Project from "../components/Project";
import { projects } from "../data/data";
import { Heading, StyledPage, StyledDiv } from "../styles/Common";
import { StyledRow } from "../styles/ProjectsStyle";


const Projects = () => {
    if (!projects.length) {
        return null;
    }
    return (
        <StyledPage>
                <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                    <Heading>My projects</Heading>
                    <StyledRow>
                        {projects.map((project) => (
                            <Project project={project} />
                        ))}
                    </StyledRow>
                </StyledDiv>
        </StyledPage>
    );
}
export default Projects