import React from "react";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import { FaLinkedin } from "react-icons/fa";
import { Item, List } from "../styles/ContactStyle";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                <Heading>Contact me!</Heading>
                <Context>
                    <List>
                        <Item onClick={() => window.location.href = "https://www.linkedin.com/in/iida-kokkonen-10b43423b/"}><FaLinkedin size="48" /></Item>
                        <Item href="mailto:iida.kokkonen@edu.savonia.fi"><MdEmail size="48" /></Item>
                    </List>
                </Context>
            </StyledDiv>
        </StyledPage>
    );
}
export default Contact