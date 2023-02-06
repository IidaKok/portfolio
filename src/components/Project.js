import React from "react";
import { StyledCard, List, Item, Image } from "../styles/ProjectsStyle";
import { Button } from "../styles/Common";


const Project = ({ project }) => {


    return (
        <>
            <StyledCard>
                <Image variant="top" key={project.name} src={project.image} />
                <h2 style={{ minHeight: "60px" }}>{project.name}</h2>

                <div style={{ minHeight: "100px" }}>
                    <p style={{ padding: "5px" }}>{project.description}</p>
                </div>

                <div style={{ margin: "0" }}>
                    <List>
                        {project.languages.map((language) => (
                            <Item> {language} </Item>
                        ))}
                    </List>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer"><Button style={{ margin: "10px" }}>Github</Button></a>
                    )}
                </div>
            </StyledCard>
        </>
    )
}
export default Project