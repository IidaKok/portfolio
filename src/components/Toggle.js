import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Toggle = ({handleNavToggle}) => {
    const StyledToggle = styled(FaTimes)`
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
    return (
        <StyledToggle onClick={handleNavToggle} />
    );
}
export default Toggle