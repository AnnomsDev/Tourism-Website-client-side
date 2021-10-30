import './Footer.css'
import React from 'react';
import { BsGithub, BsFacebook } from "react-icons/bs"


const Footer = () => {
    return (
        <div className='footer'>
            <h2>Adventure-Lovers</h2>

            <div className='social-icons'>
                <a href="http://facebook.com/annoms.rd" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                <a href="http://github.com/annomsDev" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            </div>

            <p>© Copyright 2021 || All Copyright reserved</p>



        </div>
    );
};

export default Footer;