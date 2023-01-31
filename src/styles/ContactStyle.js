import styled from "styled-components";


const Item = styled.a`
color: var(--clr-fg);
cursor: pointer;
text-decoration: none;
margin: 10px;

&:hover {
    transition: .2s all ease-in-out;
    color: #ff5050;
}
`;

const List = styled.ul`
display: inline;`;

export {Item, List}