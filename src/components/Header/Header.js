import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase()

    return (
        <div className='header'>
            <Link to='/' className='logo'>
                <h2>AdventurLover</h2>
            </Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                {
                    !user.uid ?
                        <Link to='/signin'><button className="btn-primary">Sign In</button></Link>
                        :
                        <>
                            <NavLink to='/my-orders'>My Orders</NavLink>
                            <NavLink to='/manage-all-orders'>Manage All Orders</NavLink>
                            <button onClick={logOut} className="btn-secondery">Logout</button>
                            <span className="user">{user.displayName}</span>
                        </>
                }

            </nav>
        </div>
    );
};

export default Header;