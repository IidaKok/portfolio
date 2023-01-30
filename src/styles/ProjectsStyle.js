import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const ProjectPage = styled.div`
width: 80%;
height: fit-content;

@media screen and (min-width: 600px) {
    width: 70%;
}`;

const StyledCard = styled(Card)`
border: 0.1px solid #c5c6c7;
min-width: 15rem;
max-width: 20rem;
background-color: #0b0c10;
min-height: 250px;
margin: 10px;
padding: 10px;

&:hover {
    transform: translateY(-7px);
}`;

const StyledRow = styled(Row)`
color: white;
justify-content: center;
margin-right: 0;
margin-left: 0;

display: flex;
flex-flow: row wrap;
text-align: center;
>* {
    padding: 10px;
    flex: 1 100%;
}`;

export {ProjectPage, StyledCard, StyledRow}