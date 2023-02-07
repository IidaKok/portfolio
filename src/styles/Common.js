import styled from 'styled-components';

const StyledPage = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #F8F8FF;

@media screen and (max-width: 600px) {
    padding: 10px;
    padding-top: 30px;
}`;

const Heading = styled.h1`
font-size: 2em;
font-weight: 400;
margin: 0;
padding: 0;
display: flex;
color: #00ff99;
user-select: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;

@media screen and (min-width: 600px) {
    font-size: 4em;
}`;


const Heading2 = styled.h2`
text-decoration: underline #00ff99;
font-size: 1.5em;

@media screen and (min-width: 600px) {
    font-size: 2em;
}`;


const Button = styled.button`
background-color: transparent;
color: #F8F8FF;
border: 2px solid #F8F8FF;
transition-duration: 0.4s;
padding: 6px 12px;
text-decoration: none;
font-size: 16px;
cursor: pointer;
border-radius: 50px;
margin-top: 25px;
margin: 10px;
max-width: 500px;

&:hover {
    background-color: #001a1a;
}
@media screen and (max-width: 380px) {
    margin-top: 10px;
}
@media screen and (min-width: 700px) {
    padding: 6px 22px;
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
padding-top: 35px;

@media screen and (min-width: 600px) {
    padding-top: 100px;
}
`;
const Context = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
row-gap: 30px;
padding-top: 30px;
width: 100%;

>* {
    padding: 10px;
    flex: 1 100%;
}
`;
const Paragraph = styled.p`
@media screen and (min-width: 700px) {
    font-size: 1.3em;
}`;



export {StyledPage, Heading, Button, StyledDiv, Context, Heading2, Paragraph}