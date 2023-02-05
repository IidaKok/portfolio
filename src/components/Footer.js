import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <StyledFooter>
            <List>
                <li><Item onClick={() => window.location.href = "https://www.linkedin.com/in/iida-kokkonen/"}><FaLinkedin /></Item></li>
                <li><Item onClick={() => window.location.href = "https://github.com/IidaKok"}><FaGithub /></Item></li>
            </List>
        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
position: fixed;
right: 10px;
bottom: 0;
text-align: right;
`;

const List = styled.ul`
list-style-type: none;`;

const Item = styled.a`
font-size: 28px;
padding-left: 30px;
font-weight: 600;
color: var(--clr-fg);
cursor: pointer;

&:hover {
    transition: .2s all ease-in-out;
    color: #00c598;
}

@media screen and (min-width: 1050px) {
    font-size: 38px;
}`;

export default Footer