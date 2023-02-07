import React from "react";
import { Link } from "react-router-dom";
import me from "../images/homepage_picture.png";
import { StyledPage, Heading, Button } from "../styles/Common";
import { Picture, Wrapper, StyledHome, Aside, BtnBackground} from "../styles/HomeStyles";


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

            <h2>Software Engineering student</h2>
            <BtnBackground>
              <Link to="/contact">
                <Button>Contact me!</Button>
              </Link>
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
