import Typewriter from "typewriter-effect";
import React from "react";


const Writer = () => {

    return(
        <>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString("Full Stack Developer")
                .pauseFor(2000)
                .deleteChars(20)
                .typeString("Software engineering student")
                .pauseFor(2000)
                .deleteChars(28)
                .typeString("Seeking intership position")
                .start();
            }}
            />    
        </>
        
    );
}

export default Writer