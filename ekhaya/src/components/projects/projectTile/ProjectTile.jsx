import React from 'react'
import './ProjectTile.css'

export default function ProjectTile() {


    return (
        <>
        <div className='Tile'>
          <div className='TileContent'>
            <h2>Title Name</h2>
            <p>Description of the project goes here.</p>
            <div className='Links'>
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
            </div>
          </div>
          <div className='Video'>
            <video width="100%" height="100%" controls>
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        </>
    );


}