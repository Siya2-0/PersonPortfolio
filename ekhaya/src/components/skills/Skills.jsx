
import React from 'react';
import "./Skills.css";
import javascript from '../../img/java_script.png'
import java from '../../img/java.png'
import python from '../../img/python.png'
import cplusplus from '../../img/cplusplus.png'
import css from '../../img/css.png'
import android from '../../img/android.png'
import django from '../../img/Django_logo.svg (1).png'
import html from '../../img/html.png'
import react from '../../img/react.png'








export default function Skills() {
    return (
      <section className='skillspinned'>
        <h1>My Skills and Certification.</h1>

      <div className="carousel1">
      
        <div className="item item1">
            <div className="skill-logo">
              <img src={javascript} alt='Javascript'></img>
            </div>
            <div className="skill-name">JavaScript</div>
        </div>

        <div className="item item2">
            <div className="skill-logo">
              <img src={java}alt='Java'></img>
            </div>
            <div className="skill-name">Java</div>
        </div>

        <div className="item item3">
            <div className="skill-logo">
              <img src={python} alt='Python'></img>
            </div>
            <div className="skill-name">Python</div>
        </div>

        <div className="item item4">
            <div className="skill-logo">
              <img src={cplusplus} alt='C++'></img>
            </div>
            <div className="skill-name">C++</div>
        </div>
        <div className="item item5">
            <div className="skill-logo">
              <img src={css} alt='CSS'></img>
            </div>
            <div className="skill-name">CSS</div>
        </div>

        <div className="item item6">
            <div className="skill-logo">
              <img src={android} alt='Android'></img>
            </div>
            <div className="skill-name">Android</div>
        </div>

        <div className="item item7">
            <div className="skill-logo">
              <img src={react} alt='React'></img>
            </div>
            <div className="skill-name">React</div>
        </div>


        <div className="item item8">
            <div className="skill-logo">
              <img src={html} alt='html'></img>
            </div>
            <div className="skill-name">HTML</div>
        </div>
      
      </div>


 
      
        

      {/* <div className='Skills'>
            <h1 className='SectionTitle'>Skills</h1>
            <p>Proficient in the following technologies:</p>
            <ul className='SkillsList'>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>C++</li>
                <li>Django</li>
                <li>Android</li>
                <li>React</li>
            </ul>
            <p>Also capable of learning new languages or frameworks.</p>
        </div>
        <div className='Certification'>
                <h1 className='SectionTitle'>Certification</h1>
                <ul className='CertificationList'>
                    <li>AWS Cloud Practitioner</li>
                    <li>AWS Serverless</li>
                    <li>BSc Computer Science</li>
                </ul>
    </div> */}
       
    </section>
    );
  }