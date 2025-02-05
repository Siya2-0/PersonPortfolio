import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import '../../App.css'
import logo from '../../img/sm-high-resolution-logo-transparent.png'
export default function Header() {


    return (

        <>
        <div class="header">
        <img src={logo} alt="SM"  id='logo'/> 
       

        <a href="#contact" id="LinkedInLink">
            LinkedIn
        </a>
    
      
        </div>
        </>

    );

}