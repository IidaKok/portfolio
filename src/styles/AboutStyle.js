import styled from 'styled-components';

const SkillsList = styled.ul`
width: 100%;
max-width: 450px;
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style-type: none;
margin: 0;
`;

const SkillsListItem = styled.li`
margin: 30px;
font-size: 50px;
color: #1f2833;

&:hover {
    transform: translateY(-7px);
}
@media screen and (max-width: 600px) {
    margin: 5px;
}`;
const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
max-height: 400px;`;

const Aside = styled.aside`
min-height: 50px;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;

@media screen and (min-width: 600px) {
    flex: 1 0 0;
    min-height: 500px;
    row-gap: 0;
    margin: 0;
    margin-bottom: 50px;
    margin-top: 50px;
    
}
`;
const TextRight = styled.div`
padding: 0;
text-align: left;

@media screen and (min-width: 1050px) {
    padding-top: 10%;
    padding-right: 10%;
}`;
const TextLeft = styled.div`
padding: 0;
text-align: left;

@media screen and (min-width: 1050px) {
    padding-top: 10%;
    padding-left: 10%;
}`;
export {SkillsList, SkillsListItem, Picture, Aside, TextRight, TextLeft}