import React from "react";
import { StyledPage, Heading, StyledDiv, Context } from "../styles/Common";
import { Item, List } from "../styles/ContactStyle";
import { contactInfo } from "../data/data";

const Contact = () => {

    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                <Heading>Contact me!</Heading>
                <Context>
                    <p>I am currently looking for an internship position.
                        If you can offer me the opportunity to develop in your company, please contact me</p>
                    <List>
                        {contactInfo.map((info) => (
                                <li>
                                    <p style={{ display: "inline-block" }}>{info.text}</p><Item href={info.link} target="_blank">{info.name}</Item>
                                </li>
                        ))}
                    </List>
                </Context>
            </StyledDiv>
        </StyledPage>
    );
}
/*<Item onClick={() => window.location.href = "https://www.linkedin.com/in/iida-kokkonen-10b43423b/"}><FaLinkedin size="48" /></Item>
                        <Item href="mailto:iida.kokkonen@edu.savonia.fi"><MdEmail size="48" /></Item>*/
export default Contact