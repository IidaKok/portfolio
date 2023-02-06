import {StyledFooter, List, Item} from "../styles/FooterStyle";
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
export default Footer