import './NotFound.css'
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img src='./img/notfound.jpg' alt="" width='100%' />
            <h2>Page Not Found</h2>
            <p>Go to <Link to='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;