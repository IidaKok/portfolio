import { StyledCard, StyledButton } from "./ComponentStyle"

import React from "react";

const Project = ({ project }) => {
    return (
        <>
            <StyledCard>
                <StyledCard.Body>
                    <StyledCard.Title>{project.name}</StyledCard.Title>
                    <StyledCard.Text>{project.description}</StyledCard.Text>
                    <StyledCard.Footer>
                        {project.github && (
                            <a href = { project.github }><StyledButton>Github</StyledButton></a>
                        )}
                        {project.view && (
                            <a href = { project.view}><StyledButton>View</StyledButton></a>
                        )}
                    </StyledCard.Footer>
                </StyledCard.Body>
            </StyledCard>
        </>
    )
}

export default Project