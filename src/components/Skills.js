import { SkillsList, SkillsListItem  } from "../styles/AboutStyle";
import { skills } from "../data/data";
import React from "react";

const Skills = () => {
    if (!skills.length) {
        return null;
    }
    return (
        <>  
            <SkillsList>
                {skills.map((skill) => (
                    <SkillsListItem>
                        {skill.icon}
                    </SkillsListItem>
                ))}
            </SkillsList>
        </>
    )
}
export default Skills;