import React from "react";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import { FaLinkedin } from "react-icons/fa";
import { Item } from "../styles/ContactStyle";
import { MdEmail } from "react-icons/md";

const Contact = () => {

    return (
        <StyledPage>
            <StyledDiv>
                <Heading>Contact me!</Heading>
                <Context>
                <Item onClick={() => window.location.href = "https://www.linkedin.com/in/iida-kokkonen-10b43423b/"}><FaLinkedin size="48" />Connect in LinkedIn</Item>
                <Item href="mailto:iida.kokkonen@edu.savonia.fi"><MdEmail size="48" />Send Email</Item>
                </Context>
            </StyledDiv>
        </StyledPage>
    );
}
export default Contact