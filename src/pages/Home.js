import React from "react";
import { Link } from "react-router-dom";
import Writer from '../components/Writer';
import me from "../images/Me.jpg"
import '../styles/Home.css';
import {StyledHome, Picture, BtnBackground, Button, Heading} from "../styles/HomeStyles";

//Home page
const Home = () => {

  return (
    <StyledHome>
      <div className='context'>
        <div className="wrapper">
          <aside className="row typewriter-background ">
            <Heading>
              <Writer />
            </Heading>
            <BtnBackground>
              <Link to="/contact">
                <Button>Contact me!</Button>
              </Link>
            </BtnBackground>
          </aside>
          <aside className="row picture-background ">
            <Picture src={me} />
          </aside>
        </div>
      </div>
    </StyledHome>
  )
}

export default Home