import './Feedback.css'
import React from 'react';

const Feedback = () => {
    return (
        <div className='feedback'>
            <div className="left">
                <h1>What adventurers<br />say <span className="text-highlight">about us</span></h1>
                <p>See and discover what adventurers tell us about their journey with us, we always listen to whatever experience they have to say </p>
                <div className="feedback-box">
                    <p><i>" <strong>Adventrure-lovers</strong> really helped me in finding the best location for ny first outdoor trip."</i></p>
                    <h3>Jhon Philips</h3>
                    <p>Enterpreneur</p>

                </div>
            </div>
            <div className="right">
                <img src="./img/feedback.jpg" width='100%' alt="" />
            </div>
        </div>
    );
};

export default Feedback;