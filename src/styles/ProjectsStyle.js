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
max-width: 80%;
margin: 10px;
display: flex;
alignItems: flex-start;
&:hover {
    transform: translateY(-7px);
}
@media screen and (max-width:1000px) {
    max-width: 20rem;
    display: grid;
    alignItems: center;
}`;

const DescriptionDiv = styled.div`
text-align: center;
width: 100%;
display: grid;
grid-template-rows: auto 1fr auto;
height: 100%;
margin: 0;
place-items: center;
p {
    padding-left: 30px;
    padding-right: 30px;
}`;

const Video = styled.video`
height: 100%;
width: 50%;
@media screen and (max-width:1000px) {
    width: 100%;
    height: 150px;
} `;

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
flex-wrap: wrap;
margin: 0; 
justify-content: center;
max-width: 100%;`;

const Item = styled.li`
margin: 10px;`;

export { ProjectPage, StyledCard, StyledRow, List, Item, Video, DescriptionDiv }