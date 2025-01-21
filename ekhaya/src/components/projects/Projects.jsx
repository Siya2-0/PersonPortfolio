
import React from 'react';
import "./Projects.css";
import ProjectTile from './projectTile/ProjectTile';

export default function Projects() {
    return (
      <div className='Project'>
        <h1 className='SectionTitle'>Project</h1>
        <ProjectTile/>
        <ProjectTile/>
     
     
        </div>
    );
  }