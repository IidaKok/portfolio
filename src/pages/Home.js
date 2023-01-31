import React from "react";
import { Link } from "react-router-dom";
import me from "../images/Me2.jpeg";
import { StyledPage, Heading, Button } from "../styles/Common";
import { Picture, Wrapper, StyledHome, Aside } from "../styles/HomeStyles";
import Writer from "../components/Writer";


//Home page
const Home = () => {

  return (
    <StyledPage>
      <StyledHome>
        <Wrapper className="animate__animated animate__fadeIn animate__slow">
          <Aside>
            <h1>Hello, I am</h1>
            <Heading>
              Iida Kokkonen
            </Heading>
            
            <h2><Writer/></h2>
            <Link to="/contact">
              <Button>Contact me!</Button>
            </Link> 
          </Aside>
          <Aside>
            <Picture src={me} />
          </Aside>
        </Wrapper>
      </StyledHome>
    </StyledPage>
  )
}

export default Home
