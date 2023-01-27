import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

//Toggle component
const Toggle = ({handleNavToggle}) => {

    //Toggle button's style
    const StyledToggle = styled(FaBars)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
    `;

    //returns Toggle button
    return (
        <StyledToggle onClick={handleNavToggle} />
    );
}
export default Toggle