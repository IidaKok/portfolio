import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

//Toggle component
const Toggle = ({handleNavToggle}) => {

    //Toggle button's style
    const StyledToggle = styled(FaBars)`
    position: fixed;
    top: 5%;
    left: 4%;
    background: red;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
    `;

    //returns Toggle button
    return (
        <StyledToggle className="animate__animated animate__fadeInLeft" onClick={handleNavToggle} />
    );
}
export default Toggle