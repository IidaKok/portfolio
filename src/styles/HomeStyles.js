import styled from 'styled-components';
import Writer from "../components/Writer";

const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 60%;
height: 100%;
border-radius: 50%;`;

const BtnBackground = styled.div`
position: absolute;
bottom: 0;
right: 0;`;

const Wrapper = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
row-gap: 100px;
>* {
    padding: 10px;
    flex: 1 100%;
}`;

const StyledHome = styled.div`
width: 80%;
height: fit-content;
@media screen and (min-width: 600px) {
    width: 70%;
}`;

const Aside = styled.div`
height: 200px;
text-align: left;

@media screen and (min-width: 600px) {
    flex: 1 0 0;
    height: 350px;
}`;

const StyledWriter = styled(Writer)`
color: red;
font-size: 400px;
`;

export {Picture, BtnBackground, Wrapper, StyledHome, Aside, StyledWriter}