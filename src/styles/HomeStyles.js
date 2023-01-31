import styled from 'styled-components';

const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
min-width: 60%;
height: 100%;
border-style: outset;
border: 4px solid #191a1a;
`;


const Wrapper = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
row-gap: 55px;
>* {
    padding: 10px;
    flex: 1 100%;
}`;

const StyledHome = styled.div`
width: 80%;
height: fit-content;
padding-top: 10px;

@media screen and (min-width: 700px) {
    padding-top: 0;
    width: 65%;
}`;

const Aside = styled.div`
height: 300px;
text-align: left;

@media screen and (min-width: 600px) {
    flex: 1 0 0;
    height: 350px;
}`;


export {Picture, Wrapper, StyledHome, Aside}