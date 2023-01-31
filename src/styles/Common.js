import styled from 'styled-components';

const StyledPage = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #D2FADF;`;

const Heading = styled.h1`
font-size: clamp(3rem, 4vw, 6vw);
font-weight: 500;
margin: 0;
padding: 0;
display: flex;
color: #00ff99;
user-select: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;`;


const Button = styled.button`
background-color: transparent;
color: #D2FADF;
border: 2px solid #e7e7e7;
transition-duration: 0.4s;
padding: 6px 22px;
text-decoration: none;
font-size: 16px;
cursor: pointer;
border-radius: 4px;
margin-top: 25px;
margin: 10px;

&:hover {
    background-color: #ff5050;
}
@media screen and (max-width: 380px) {
    margin-top: 10px;
}
@media screen and (min-width: 700px) {
    margin-top: 70px;
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


export {StyledPage, Heading, Button, StyledDiv, Context}