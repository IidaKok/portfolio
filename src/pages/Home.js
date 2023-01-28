import styled from 'styled-components';
import React from "react";
import { Link } from "react-router-dom";
import Writer from '../components/Writer';
import me from "../images/Me.jpg"
import '../styles/Home.css';

//Home page
const Home = () => {

  //returns styled home page
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

//Picture's style
const Picture = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 60%;
height: 100%;
border-radius: 50%;`;



//StyledHome's style 
const StyledHome = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    `;

//Heading's style
const Heading = styled.h1`
    font-size: clamp(3rem, 4vw, 6vw);
    font-weight: 500;
    margin: 0;
    padding: 0;
    display: flex;
    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
`;

//button's background
const BtnBackground = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    `;

//button's style
const Button = styled.button`
  background-color: #282c34;
  color: black;
  border: 2px solid #e7e7e7;
  transition-duration: 0.4s;
  padding: 6px 22px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  
  position: absolute;
  bottom: 8px;
  left: 40px;

&:hover {
    background-color: #e7e7e7;
}
`;

export default Home

/* <StyledHome>
            <StyledRow>
                <div className="col-50"  style={{width: "800px"}}>
                    <div className='row'>
                    <Heading>
                            <Writer />
                        </Heading>
                    </div>
                       
                    <div className='row'>
                        <Content>
                            <Link to="/contact">
                                <Button>Contact me!</Button>
                            </Link>
                        </Content>
                    </div>

                </div>
                <div className="col-50">
                    <Picture  src={me} />
                </div>
            </StyledRow>

        </StyledHome>*/