
import React from 'react';
import "./Skills.css";

export default function Skills() {
    return (
      <div className='SkillsPage'>

      <div className='Skills'>
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
        </div>
       
      </div>
    );
  }