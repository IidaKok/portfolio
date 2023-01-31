import { StyledCard } from "../styles/ProjectsStyle";
import { Button } from "../styles/Common";

import React from "react";

const Project = ({ project }) => {
    return (
        <>
        <StyledCard>
        <StyledCard.Title><h2>{project.name}</h2></StyledCard.Title>
                <StyledCard.Body>
                    
                    <StyledCard.Text>{project.description}</StyledCard.Text>
                    
                </StyledCard.Body>
                <StyledCard.Footer>
                        {project.github && (
                            <a href={project.github}><Button>Github</Button></a>
                        )}
                        {project.view && (
                            <a href={project.view}><Button>View</Button></a>
                        )}
                    </StyledCard.Footer>
            </StyledCard>
        </>
    )
}
export default Project