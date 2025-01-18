
import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
      <div className='HomePage'>
        <div className='AnimatedText'>
        <Typewriter
            onInit={(typewriter) => {
                typewriter.typeString('<span style="font-size: 50px;">I \'m Siyabonga Mbuyisa')
                    .callFunction(() => {
                        console.log('First string typed out!');
                    })
                    .pauseFor(800)
                    .typeString('<br/><span style="font-size: 30px;">Software Engineer')
                    .callFunction(() => {
                        console.log('Second string typed out!');
                    })
                    .start();
            }}
        />
        </div>     
       
      </div>
    );
  }