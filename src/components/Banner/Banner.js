import './Banner.css'
import React from 'react';
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='banner'>
            <h1>live your <br /> <span>adventure</span> </h1>
            <p>Don't wait wait until tomorrow, discover your adventure and feel the sensation of closeness to nature around you</p>
            <Link to='/signin'>
                <button className="al-btn-primary">Get Started</button>
            </Link>
        </div>
    );
};

export default Banner;