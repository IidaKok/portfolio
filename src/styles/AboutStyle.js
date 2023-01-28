import styled from 'styled-components';

const StyledAbout = styled.div`
min-height: 100vh;
width: 100vw;
background-color: #282c34;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2em;
margin: 0 auto;
box-shadow: var(--shadow);
transition: transform 0.2s linear;`;

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
-ms-user-select: none; /* Internet Explorer/Edge */
`;

const StyledDiv = styled.div`
position: relative;
padding: 0px 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 85%;
margin: 20px;
color: black;
`;

export { Heading, StyledAbout, StyledDiv }