import { Link } from "react-router-dom";
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { FaBars } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Menu
const StyledMenu = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100vh;
width: 100%;
background-color: rgba(255,255,255,.95);
z-index: 99;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (min-width: 790px) {
    width: 60%;
}`;

const StyledLink = styled(Link)`
color: #222;
text-decoration: none;
font-size: clamp(3rem, 4vw, 6vw);
font-family: impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
transition: .2s all ease-in-out;

&:hover {
    transition: .2s all ease-in-out;
    color: orangered;
}`;

const CloseToggle = styled(FaTimes)`
position: fixed;
top: 5%;
left: 4%;
background: red;
color: #fff;
padding: .75rem;
display: flex;
place-items: center;
font-size: 2rem;
cursor: pointer;`;



//Toggle
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


//Skills
const SkillsList = styled.ul`
max-width: 450px;
max-height: 350px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style-type: none;
margin: 0;
padding: 0;
`;

const SkillsListItem = styled.li`
margin: 10px;
font-size: 50px;
color: black;
justify-content: center;
`;

//Project
const StyledButton = styled(Button)``;

const StyledCard = styled(Card)`
border: dark;
width: 18rem;
background-color: #2e151b;`;

const StyledRow = styled(Row)`
color: white;
`;

const StyledCol = styled(Col)``;

export {CloseToggle, StyledLink, StyledMenu, StyledToggle, SkillsList, SkillsListItem, StyledCard, StyledButton, StyledCol, StyledRow}