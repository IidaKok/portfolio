import React from "react";
import { StyledPage, Heading, StyledDiv, Context, Paragraph } from "../styles/Common";
import { ItemLink, List, Item } from "../styles/ContactStyle";
import { contactInfo } from "../data/data";

const Contact = () => {

    return (
        <StyledPage>
            <StyledDiv className="animate__animated animate__fadeIn animate__slow">
                <Heading>Get in touch with me</Heading>
                <Context>
                    <Paragraph>I am currently looking for an internship position. <br/>
                        If you can offer me the opportunity to develop in your company, please contact me.</Paragraph>
                    <List>
                        {contactInfo.map((info) => (
                            <Item>
                                <ItemLink href={info.link} target="_blank">
                                    <Item>
                                    <p style={{fontSize: "50px", margin: "0"}}>{info.icon}</p>
                                    <p>{info.text}</p>
                                    </Item>
                                </ItemLink>
                            </Item>
                        ))}
                    </List>
                </Context>
            </StyledDiv>
        </StyledPage>
    );
}
export default Contact