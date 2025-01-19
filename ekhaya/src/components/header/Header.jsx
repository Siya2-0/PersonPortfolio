import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default function Header() {


    return (

        <>
        <div class="header">
        <a href="#default" class="logo">SM</a>
        <div class="header-right">
            <a  href="#home">
                <FontAwesomeIcon icon={faLink} />
            </a>
            <a href="#contact">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
        </div>
        </>

    );

}