import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <h2>AdventurLover</h2>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                <NavLink to='/community'>Community</NavLink>
                <Link to='/signin'><button className="btn-primary">Sign In</button></Link>
            </nav>
        </div>
    );
};

export default Header;