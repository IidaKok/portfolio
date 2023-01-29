import React from "react";
import { Link } from "react-router-dom";
import me from "../images/Me2.jpeg";
import { StyledPage, Heading, Button } from "../styles/Common";
import { Picture, Wrapper, StyledHome, Aside, StyledWriter } from "../styles/HomeStyles";


//Home page
const Home = () => {

  return (
    <StyledPage>
      <StyledHome>
        <Wrapper>
          <Aside>
            <h1>Hello, I am</h1>
            <Heading>
              Iida Kokkonen
            </Heading>
            <StyledWriter/>
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