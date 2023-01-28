import React from "react";
import { StyledProjects, Heading, StyledDiv } from "../styles/ProjectsStyle";
import Project from "../components/Project";
import { projects } from "../data/data";
import { StyledRow } from "../components/ComponentStyle";

const Projects = () => {
    if (!projects.length) {
        return null;
    }
    return (
        <StyledProjects>
            <Heading>My projects</Heading>
            <StyledDiv>
                <StyledRow>
                    {projects.map((project) => (
                        <Project project={project} />
                    ))}
                </StyledRow>
            </StyledDiv>
        </StyledProjects>
    );
}
export default Projects