import styled from "styled-components";


const ItemLink = styled.a`
color: #F8F8FF;
cursor: pointer;
display: flex;
justify-content: center;
text-align: center;

&:hover {
    transition: .2s all ease-in-out;
    color: #00c598;
}`;

const List = styled.ul`
display: flex;
justify-content: center;`;

const Item = styled.div`
margin-right: 10px;
margin-left: 10px;
display: inline;

@media screen and (min-width: 700px) {
    margin-right: 30px;
    margin-left: 30px;
}`;

export {ItemLink, List, Item}