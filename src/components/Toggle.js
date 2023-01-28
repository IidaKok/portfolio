import React from "react";
import {StyledToggle} from "./ComponentStyle"

const Toggle = ({handleNavToggle}) => {

    return (
        <StyledToggle onClick={handleNavToggle} />
    );
}
export default Toggle