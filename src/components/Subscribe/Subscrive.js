import './Subscrive.css'
import React from 'react';

const Subscrive = () => {
    return (
        <div className='Subscribe'>
            <div>
                <h2><span>Subscrive</span> to our mail service</h2>
                <p>Subscribe to our mail section to get notify amazing offers and discount. Stay connected with us</p>
            </div>
            <form>
                <p>Email: </p>
                <input type="email" placeholder='Enter your email' id="" />
                <br />
                <button className='al-btn-primary'>  Subscribe  </button>
            </form>
        </div>
    );
};

export default Subscrive;