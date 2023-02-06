import React from "react";
import { Link } from "react-router-dom";
import me from "../images/homepage_picture.png";
import { StyledPage, Heading, Button } from "../styles/Common";
import { Picture, Wrapper, StyledHome, Aside, DownloadItem, BtnBackground } from "../styles/HomeStyles";

import Resume from "../components/Resume";



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

            <h2>Software engineering student</h2>
            <BtnBackground>
              <Link to="/contact">
                <Button>Contact me!</Button>
              </Link>
              <Button><DownloadItem href="logo192.png" download>Download cv</DownloadItem></Button>
            </BtnBackground>

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
/* <Button><DownloadItem href="IidaKokkonen_cv.pdf" download>Download cv</DownloadItem></Button>*/
