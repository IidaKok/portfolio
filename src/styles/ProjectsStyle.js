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
border: 4px solid #191a1a;
max-width: 20rem;
margin: 10px;
&:hover {
    transform: translateY(-7px);
}`;


const Image = styled.img`
width: 100%;
height: 150px;`;

const StyledRow = styled(Row)`
color: #F8F8FF;
justify-content: center;
margin-right: 0;
margin-left: 0;
margin-top: 50px;

display: flex;
flex-flow: row wrap;
text-align: center;
>* {
    padding: 10px;
    flex: 1 100%;
}
`;
const List = styled.ul`
display: flex;
margin: 0; 
justify-content: center;`;

const Item = styled.li`
margin: 10px`;

export {ProjectPage, StyledCard, StyledRow, List, Item, Image}