import React from "react";
import { StyledCard, List, Item, Video, DescriptionDiv } from "../styles/ProjectsStyle";
import { Button } from "../styles/Common";

const Project = ({ project }) => {
    return (
        <>
            <StyledCard>
                <Video controls loop>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>
                <DescriptionDiv>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    
                    <div>
                        <List>
                            {project.languages.map((language) => (
                                <Item> {language} </Item>
                            ))}
                        </List>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer"><Button style={{ margin: "10px" }}>Github</Button></a>
                        )}
                    </div>
                </DescriptionDiv>
            </StyledCard>
        </>
    )
}
export default Project