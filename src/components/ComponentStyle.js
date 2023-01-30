import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { FaBars } from "react-icons/fa";



//Menu
const StyledMenu = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100%;
background-color: #282c34;
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 790px) {
    width: 40%;
}`;

const StyledLink = styled(Link)`
color: #c5c6c7;
text-decoration: none;
font-size: clamp(3rem, 4vw, 6vw);
font-family: impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
transition: .2s all ease-in-out;

&:hover {
    transition: .2s all ease-in-out;
    color: #00ffff;
}
@media screen and (min-width: 790px) {
    
  }`;

const CloseToggle = styled(FaTimes)`
position: fixed;
top: 5%;
left: 4%;
color: #fff;
place-items: center;
font-size: 30px;
cursor: pointer;
@media screen and (min-width: 790px) {
    
  }`;

//Toggle
const StyledToggle = styled(FaBars)`
position: fixed;
top: 5%;
left: 4%;
color: #fff;
place-items: center;
font-size: 30px;
cursor: pointer;

@media screen and (min-width: 790px) {
    
  }

`;


export {CloseToggle, StyledLink, StyledMenu, StyledToggle}