import { StyledCard, List, Item } from "../styles/ProjectsStyle";
import { Button } from "../styles/Common";

import React from "react";

const Project = ({ project }) => {

    
    return (
        <>
        <StyledCard>
        <StyledCard.Title><h2 style={{ minHeight: "70px"}}>{project.name}</h2></StyledCard.Title>
                <StyledCard.Body style={{ minHeight: "120px"}}>
                <StyledCard.Text>{project.description}</StyledCard.Text>   
                </StyledCard.Body>

                <StyledCard.Footer style={{ padding: "0"}}>
                    <List>
                        {project.languages.map((language) => (
                            <Item> {language} </Item>
                        ))}
                    </List>


                        {project.github && (
                            <a href={project.github}><Button style={{ margin: "10px"}}>Github</Button></a>
                        )}
                    </StyledCard.Footer>
            </StyledCard>
        </>
    )
}
export default Project