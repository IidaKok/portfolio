import React from "react";
import Project from "../components/Project";
import { projects } from "../data/data";
import { Heading } from "../styles/Common";
import { ProjectPage, StyledRow } from "../styles/ProjectsStyle";


const Projects = () => {
    if (!projects.length) {
        return null;
    }
    return (
            <ProjectPage>
                <Heading>My projects</Heading>
                <StyledRow>
                    {projects.map((project) => (
                        <Project project={project} />
                    ))}
                </StyledRow>
            </ProjectPage>
    );
}
export default Projects