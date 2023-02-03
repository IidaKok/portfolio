import { SkillsList, SkillsListItem } from "../styles/AboutStyle";
import { skills } from "../data/data";
import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";



const Skills = () => {

    if (!skills.length) {
        return null;
    }

    return (
        <>
            <SkillsList>
                {skills.map((skill) => (
                    <OverlayTrigger overlay={(<Tooltip style={{ color: "white" }}>{skill.name}</Tooltip>)} placement="bottom">
                        <SkillsListItem>
                            {skill.icon}
                        </SkillsListItem>
                    </OverlayTrigger>
                ))}
            </SkillsList>
        </>
    )
}
export default Skills;