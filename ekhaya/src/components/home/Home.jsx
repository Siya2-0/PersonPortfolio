
import React from 'react';
import "./Home.css";
import Typewriter from 'typewriter-effect';
import backgroundVideo from '../../video/6917969_Motion Graphics_Motion Graphic_3840x2160.mp4'
import problemSolvingImage from '../../img/Monkey lion .png'
export default function Home() {
    return (
      <section className='pinned'>
   
         <video autoPlay loop muted playsinline className='background-video'>
                <source src={backgroundVideo} type='video/mp4' />
                Your browser does not support the video tag.
          </video>
        <div className='AnimatedText'>
        <Typewriter
              onInit={(typewriter) => {
                  typewriter.typeString('<h1 style="font-size: 50px; font-weight: bold;">Hi, I\'m <span style="color: #ff6347;">Siyabonga Mbuyisa</span></h1>')
                      .callFunction(() => {
                          console.log('First string typed out!');
                      })
                      .pauseFor(800)
                      .typeString('<br/><h1 style="font-size: 30px; font-weight: normal;">Software Developer</h1>')
                      .callFunction(() => {
                          console.log('Second string typed out!');
                      })
                      .start();
              }}
          />
        </div> 
        <div className='card-container'>
                <div className='card'>
                    <div className='card-front'>
                        <h2>Let's Solve This Problem</h2>
                    </div>
                    <div className='card-back'>
                        <img src={problemSolvingImage} alt='Problem Solving' />
                    </div>
                </div>
            </div>    
       
  
      </section>
    );
  }