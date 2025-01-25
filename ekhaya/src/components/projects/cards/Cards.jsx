import React from 'react';
import "./Cards.css";

export default function Cards() {



    return (
        <section className='pinned'>
        <div className='sticky-header'>
            <h1>Roadmap</h1>
        </div>

        <div className='progress-bar'>
            <div className='progress'></div>
        </div>

        <div className='index' id='index-1'> 
          
            <p>Title</p>
        </div>
        <div className='index' id='index-2'>
            
            <p>Title</p>

        </div>
        <div className="card" id="card-1">
            <div className="card-phase"><p>Phase 01</p></div>
            <div className="card-title">
                <p>Date</p>
                <h1><span>Title</span></h1>

            </div>
        </div>
        <div className="card" id="card-2">
            
        </div>

        </section>

    );

}