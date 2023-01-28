import Typewriter from "typewriter-effect";
import React from "react";


const Writer = () => {
    return(
        <>
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString("Hi, I am Iida")
                .pauseFor(2000)
                .deleteChars(4)
                .typeString("software engineering student")
                .pauseFor(2000)
                .deleteChars(28)
                .typeString("seeking intership position")
                .start();
            }}
            />
            
            
        </>
        
    );
}


export default Writer

/*
 <Typewriter
            onInit={(typewriter) => {
                typewriter
                .typeString("Hi, I am Iida")
                .pauseFor(2000)
                .typeString("<br/>software engineering student")
                .pauseFor(2000)
                .deleteChars(28)
                .typeString("seeking intership position")
                .start();
            }}
            />*/