import './Service.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ name, img, price, serDe, _id }) => {

    return (
        <div className='service'>
            <img src={img} width="100%" alt="" />
            <h2>{name}</h2>
            <p>{serDe}</p>
            <div className="book-container">
                <h2><span>$</span>{price}</h2>
                <Link to={`/service-details/${_id}`}><button className="btn-secondery">Book</button></Link>

            </div>

        </div>
    );
};

export default Service;