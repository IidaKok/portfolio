import React from "react";
import Project from "../components/Project";
import { projects } from "../data/data";
import { Heading, StyledPage, StyledDiv } from "../styles/Common";
import { ProjectPage, StyledRow } from "../styles/ProjectsStyle";


const Projects = () => {
    if (!projects.length) {
        return null;
    }
    return (
        <StyledPage>
                <StyledDiv>
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