import styled from "styled-components";


const Item = styled.a`
color: #F8F8FF;
cursor: pointer;
margin: 10px;

&:hover {
    transition: .2s all ease-in-out;
    color: #ff5050;
}
`;

const List = styled.ul`
display: inline;`;

export {Item, List}