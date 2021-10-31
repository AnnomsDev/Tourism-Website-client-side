import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { BiUserCircle } from 'react-icons/bi'

const Header = () => {
    const { user, logOut } = useFirebase()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Header">
            <div className="container-fluid">
                <span className='logo'>
                    <Link className="navbar-brand" to='/'> Adventure<span>Lovers</span></Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        {
                            !user.uid ?
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to='/signin'><span className='al-btn-primary'>Sign Up</span></NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/my-orders'>My Orders</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/manage-all-orders'>Manage All Orders</NavLink>
                                    </li>
                                    <button onClick={logOut} className="al-btn-secondery">Logout</button>
                                    <li className='nav-item d-flex fw-bold  align-items-center ms-2'>
                                        <BiUserCircle /> {user.displayName}
                                    </li>
                                </>

                        }

                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Header;