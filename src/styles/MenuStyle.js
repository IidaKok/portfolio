import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";


const StyledMenu = styled.ul`
position: fixed;
top: 0;
left: 0;
height: 100vh;

margin: 0;
margin-left: 10px;

@media screen and (max-width: 750px) {
  visibility: hidden;
  }`;

const StyledLink = styled(Link)`
color: #F8F8FF;
text-decoration: none;
font-size: 1.5em;
transition: .2s all ease-in-out;
display: flex;
cursor: pointer;
margin-top: 40px;

vertical-align: bottom;
user-select: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;

&:hover {
    transition: .2s all ease-in-out;
    color: #00c598;
}

@media screen and (min-width: 750px) {
  margin-top: 70px;
  transform: rotate(-90deg);
  transition: none;
  font-size: 1.5em;
  }
  @media screen and (max-width: 350px) {
    margin-top: 15px;
    font-size: 1em;
    }`;

//Toggle
const StyledToggle = styled(FaBars)`
position: fixed;
top: 5%;
left: 4%;
color: #F8F8FF;
place-items: center;
font-size: 30px;
cursor: pointer;

@media screen and (min-width: 750px) {
  visibility: hidden;
  }
`;



export { StyledLink, StyledMenu, StyledToggle }