
import React from 'react';
import "./AboutMe.css";
import profileImage from '../../img/ID photo.jpeg'

export default function AboutMe() {
    return (
      <>
      <h1 className='SectionTitle'>AboutMe</h1>
      <div className="about-me-container">
      
            <div className="section1">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div class="blink-animation-container"> 
                
                <span className ='blink-animation'></span>
                Available for New Projects


            </div>
            Hi, I'm Siyabonga Mbuyisa, a software developer based in South Africa. My long-term goal is to participate in life-changing projects.
            </div>
           
            <div className="section2">In 2025, I will be pursuing my Honours studies. I have a passion for software engineering, cybersecurity, and artificial intelligence. My journey through software development has been marked by perseverance, academic excellence, and a drive to create impactful solutions. I am committed to expanding my skills and becoming a top-tier software engineer, ready to tackle complex challenges in the industry.</div>
            <div className="section3">
                <h3>Interests</h3>
              
                <div className='custom-border'>Soccer</div>
                <div className='custom-border'>Health and Fitness</div>
                <div className='custom-border'>Artificial Intelligence</div>
                <div className='custom-border'>Cyber Security</div>

            </div>
            <div className="section4"> 
                <h3>Let connect</h3>

                0731059725<br></br>
                siyabongambuyisa7@gmail.comm<br></br>
                linkedin
            </div>
           
        </div>
        </>
    );
  }


//   <div className="about-me-container">
      
//             <div className="section1">
//             Hi, I'm Siyabonga Mbuyisa, a software developer based in South Africa. My long-term goal is to participate in life-changing projects.</div>
//             <div className="right-container">
//                 <div className="section2">In 2025, I will be pursuing my Honours studies. I have a passion for software engineering, cybersecurity, and artificial intelligence. My journey through software development has been marked by perseverance, academic excellence, and a drive to create impactful solutions. I am committed to expanding my skills and becoming a top-tier software engineer, ready to tackle complex challenges in the industry.</div>
//                 <div className="section3">Lets Connect</div>
//             </div>
//         </div>