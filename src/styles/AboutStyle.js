import styled from 'styled-components';

const SkillsList = styled.ul`
max-width: 450px;
max-height: 350px;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
list-style-type: none;
margin: 0;
padding: 0;`;

const SkillsListItem = styled.li`
margin: 10px;
font-size: 50px;
color: #1f2833;
justify-content: center;
&:hover {
    transform: translateY(-7px);
}`;
const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
border-radius: 50%;`;

const Wrapper = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
row-gap: 30px;
>* {
    padding: 10px;
    flex: 1 100%;
}`;

const Aside = styled.div`
top: 50px;
text-align: center;

@media screen and (min-width: 600px) {
    flex: 1 0 0;
    width: 400px;
}`;

export {SkillsList, SkillsListItem, Picture, Wrapper, Aside}