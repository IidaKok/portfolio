import styled from 'styled-components';

const StyledPage = styled.div`
min-height: 100vh;
width: 100%;
background-color: #0b0c10;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #c5c6c7;`;

const Heading = styled.h1`
font-size: clamp(3rem, 4vw, 6vw);
font-weight: 500;
margin: 0;
padding: 0;
display: flex;
color: #00ffff;
user-select: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;`;


const Button = styled.button`
background-color: #282c34;
color: black;
border: 2px solid #e7e7e7;
transition-duration: 0.4s;
padding: 6px 22px;
text-decoration: none;
font-size: 16px;
cursor: pointer;
border-radius: 4px;
margin: 5px;

&:hover {
    background-color: #e7e7e7;
}`;

const StyledDiv = styled.div`
position: relative;
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 85%;
margin: 20px;
padding-top: 170px;
`;



export {StyledPage, Heading, Button, StyledDiv}