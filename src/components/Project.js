import { StyledCard } from "../styles/ProjectsStyle";
import { Button } from "../styles/Common";

import React from "react";

const Project = ({ project }) => {
    return (
        <>
        <StyledCard>
        <StyledCard.Title>{project.name}</StyledCard.Title>
                <StyledCard.Body>
                    
                    <StyledCard.Text>{project.description}</StyledCard.Text>
                    
                </StyledCard.Body>
                <StyledCard.Footer>
                        {project.github && (
                            <a href={project.github}><Button style={{color: "black", border: "2px solid black"}}>Github</Button></a>
                        )}
                        {project.view && (
                            <a href={project.view}><Button style={{color: "black", border: "2px solid black"}}>View</Button></a>
                        )}
                    </StyledCard.Footer>
            </StyledCard>
        </>
    )
}
export default Project