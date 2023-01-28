import styled from 'styled-components';

const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 60%;
height: 100%;
border-radius: 50%;`;

const StyledHome = styled.div`
min-height: 100vh;
width: 100vw;
background-color: #282c34;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

const Heading = styled.h1`
font-size: clamp(3rem, 4vw, 6vw);
font-weight: 500;
margin: 0;
padding: 0;
display: flex;
user-select: none; /* supported by Chrome and Opera */
-webkit-user-select: none; /* Safari */
-khtml-user-select: none; /* Konqueror HTML */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */`;

const BtnBackground = styled.div`
position: absolute;
bottom: 0;
right: 0;`;

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
position: absolute;
bottom: 8px;
left: 40px;

&:hover {
    background-color: #e7e7e7;
}`;

export {StyledHome, Picture, BtnBackground, Button, Heading}