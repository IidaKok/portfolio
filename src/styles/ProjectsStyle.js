import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const ProjectPage = styled.div`
min-height: 100vh;
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #0b0c10;
box-shadow: var(--shadow);
transition: transform 0.2s linear;
`;

const StyledCard = styled(Card)`
border: 0.1px solid #c5c6c7;
width: 18rem;
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
padding-top: 50px;
margin-right: 0;
margin-left: 0;`;

export {ProjectPage, StyledCard, StyledRow}