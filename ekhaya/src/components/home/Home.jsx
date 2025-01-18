
import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';

export default function Home() {
    return (
      <div className='HomePage'>
        <p>
           
        </p>
        <Typewriter
            options={{
                strings: [' I\'m Siyabonga Mbuyisa', ],
                autoStart: true,
                loop: false,
            }}
        />
              
       
      </div>
    );
  }